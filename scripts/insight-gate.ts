#!/usr/bin/env npx tsx
/**
 * insight-gate.ts — Semantic quality gate for insights (CLI).
 *
 * Two modes:
 *   --audit    READ-ONLY X-ray of insight quality across the corpus. Never
 *              exits 1 on quality findings — it reports so the pass-bar can be
 *              calibrated against the real distribution.
 *   --enforce  Forward gate over a batch of NEW insights. Exits 1 if any
 *              BLOCKING issue is found (missing stance, or a near-duplicate).
 *              Wired as a fatal pre-commit step in post-ingest.
 *
 * Usage:
 *   npx tsx scripts/insight-gate.ts --audit --all                 # full corpus X-ray
 *   npx tsx scripts/insight-gate.ts --audit --since 2026-05-01 [--json]
 *   npx tsx scripts/insight-gate.ts --enforce --changed           # gate uncommitted insights
 *   npx tsx scripts/insight-gate.ts --enforce --since 2026-05-01  # gate by date
 *   npx tsx scripts/insight-gate.ts --enforce --changed --max-similarity 0.93
 *
 * Enforce tuning (no code edits — set in the environment / post-ingest's shell):
 *   ZUHN_GATE_MAX_SIMILARITY=0.90              # ratchet the near-dup block threshold
 *   ZUHN_GATE_BLOCKING_CHECKS=stance_present,stance_directional   # promote checks to blocking
 *   (precedence: --max-similarity flag > env > default 0.95; near-duplicate always blocks)
 *
 * Audit outputs (in addition to stdout):
 *   knowledge-base/meta/gate-report.json   latest full report (overwritten)
 *   knowledge-base/meta/gate-log.jsonl     one summary line per run (appended)
 */

import { execFileSync } from "node:child_process";
import { appendFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import Database from "better-sqlite3";
import * as sqliteVec from "sqlite-vec";

import {
  auditInsights,
  buildNoveltyComputer,
  buildSourceIndex,
  enforceGate,
  loadGateInsights,
  resolveBlockingChecks,
  resolveMaxSimilarity,
  CHECK_IDS,
  DEFAULT_BLOCKING_CHECKS,
  type AuditReport,
  type CheckId,
  type EnforceResult,
  type NearestFn,
} from "./lib/insight-gate";
import { KB_ROOT } from "./lib/kb-root";

const REPORT_PATH = join(KB_ROOT, "meta", "gate-report.json");
const LOG_PATH = join(KB_ROOT, "meta", "gate-log.jsonl");
const DB_PATH = join(KB_ROOT, "db", "brain.db");

const CHECK_LABELS: Record<CheckId, string> = {
  stance_present: "stance present",
  stance_directional: "stance directional",
  attribution_resolves: "attribution resolves",
  topic_matches_path: "topic matches path",
};

// ─── Args ─────────────────────────────────────────────────────────────

interface Args {
  since: string | null;
  json: boolean;
  exampleLimit: number;
}

function parseArgs(argv: string[]): Args {
  const sinceIdx = argv.indexOf("--since");
  const examplesIdx = argv.indexOf("--examples");
  return {
    since: sinceIdx !== -1 ? argv[sinceIdx + 1] ?? null : null,
    json: argv.includes("--json"),
    exampleLimit: examplesIdx !== -1 ? parseInt(argv[examplesIdx + 1], 10) || 15 : 15,
  };
}

// ─── Novelty wiring (graceful: structural audit survives a vec failure) ──

function tryBuildNovelty(): { nearest: NearestFn | undefined; close: () => void } {
  try {
    // Read-only: an audit must never migrate schema or create tables on brain.db.
    // We load sqlite-vec (no DDL) and query the existing embeddings table directly,
    // deliberately bypassing initDb()/initVectorTable() which run CREATE/ALTER.
    const db = new Database(DB_PATH, { readonly: true, fileMustExist: true });
    sqliteVec.load(db);
    return { nearest: buildNoveltyComputer(db), close: () => db.close() };
  } catch (err) {
    console.warn(
      `WARN: novelty unavailable (${(err as Error).message}). ` +
        `Reporting structural checks only.`
    );
    return { nearest: undefined, close: () => {} };
  }
}

// ─── Main ─────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const argv = process.argv.slice(2);
  if (argv.includes("--enforce")) {
    await runEnforce(argv);
  } else {
    await runAudit(parseArgs(argv));
  }
}

async function runAudit(args: Args): Promise<void> {
  let insights = await loadGateInsights();
  const scope = args.since ? `since ${args.since}` : "all";
  if (args.since) {
    insights = insights.filter((i) => i.dateExtracted >= args.since!);
  }

  const sourceIndex = await buildSourceIndex();
  const { nearest, close } = tryBuildNovelty();

  let report: AuditReport;
  try {
    report = auditInsights(insights, sourceIndex, nearest, {
      scope,
      exampleLimit: args.exampleLimit,
    }).report;
  } finally {
    close();
  }

  persist(report);

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    printReport(report);
  }
}

// ─── Enforce (Phase 2) ────────────────────────────────────────────────

async function runEnforce(argv: string[]): Promise<void> {
  // Threshold precedence: --max-similarity flag > ZUHN_GATE_MAX_SIMILARITY env > default.
  const simIdx = argv.indexOf("--max-similarity");
  const flagSim = simIdx !== -1 ? argv[simIdx + 1] : undefined;
  const maxSimilarity = resolveMaxSimilarity(flagSim, process.env.ZUHN_GATE_MAX_SIMILARITY);

  // Blocking-check set: ZUHN_GATE_BLOCKING_CHECKS env overrides the default
  // (comma-separated check ids). Unknown tokens warn; all-invalid → default.
  let blockingChecks: CheckId[] | undefined;
  const bc = resolveBlockingChecks(process.env.ZUHN_GATE_BLOCKING_CHECKS);
  if (bc) {
    if (bc.invalid.length > 0) {
      console.warn(
        `WARN: ignoring unknown gate check(s): ${bc.invalid.join(", ")} (valid: ${CHECK_IDS.join(", ")})`
      );
    }
    if (bc.checks.length > 0) blockingChecks = bc.checks;
    else console.warn("WARN: ZUHN_GATE_BLOCKING_CHECKS had no valid checks — using default.");
  }

  const sinceIdx = argv.indexOf("--since");
  const since = sinceIdx !== -1 ? argv[sinceIdx + 1] ?? null : null;

  let insights = await loadGateInsights();
  let scope: string;
  if (argv.includes("--changed")) {
    // Fail CLOSED: if git can't tell us what changed, we cannot safely enforce.
    // Aborting (exit 1) is correct for a gate — never treat "git broke" as
    // "nothing changed" (which would let a batch sail through in post-ingest).
    let changed: Set<string>;
    try {
      changed = getChangedInsightRelPaths();
    } catch (err) {
      console.error(
        `ENFORCE aborted: cannot determine changed insights via git — ${(err as Error).message}`
      );
      process.exit(1);
    }
    // Fail CLOSED on unloadable insights: a changed insight file that
    // loadGateInsights() dropped (unreadable, invalid frontmatter, or missing
    // id) would otherwise silently vanish from the batch and let the gate pass.
    const loadedPaths = new Set(insights.map((i) => i.relPath));
    const unaccounted = [...changed].filter((p) => !loadedPaths.has(p));
    if (unaccounted.length > 0) {
      console.error(
        `ENFORCE aborted: ${unaccounted.length} changed insight file(s) could not be loaded ` +
          "(unreadable, invalid frontmatter, or missing id):"
      );
      for (const p of unaccounted) console.error(`  ✗ ${p}`);
      console.error("Fix these (run: npm run health) and re-run.");
      process.exit(1);
    }
    insights = insights.filter((i) => changed.has(i.relPath));
    scope = "changed (uncommitted)";
  } else if (since) {
    insights = insights.filter((i) => i.dateExtracted >= since);
    scope = `since ${since}`;
  } else {
    scope = "all";
  }

  const effectiveBlocking = blockingChecks ?? DEFAULT_BLOCKING_CHECKS;
  console.log(
    `Insight Gate (ENFORCE) — scope: ${scope} · ${insights.length} insight(s) · ` +
      `block ≥ ${maxSimilarity} cosine · blocking: ${effectiveBlocking.join("+")}+novelty`
  );

  if (insights.length === 0) {
    console.log("No insights in scope — nothing to gate.");
    return; // exit 0
  }

  const sourceIndex = await buildSourceIndex();
  const { nearest, close } = tryBuildNovelty();
  let result: EnforceResult;
  try {
    result = enforceGate(insights, sourceIndex, nearest, { maxSimilarity, blockingChecks });
  } finally {
    close();
  }
  if (!nearest) {
    console.warn("WARN: embeddings unavailable — near-duplicate check skipped this run.");
  }

  if (result.warnings.length > 0) {
    console.log(`\n${result.warnings.length} warning(s) (non-blocking):`);
    for (const w of result.warnings) {
      console.log(`  ⚠ ${w.id} [${w.checkId}] ${w.reason}`);
    }
  }

  if (result.failures.length > 0) {
    console.error(`\n✗ GATE FAILED — ${result.failures.length} blocking issue(s):`);
    for (const f of result.failures) {
      console.error(`  ✗ ${f.id} [${f.checkId}] ${f.reason}`);
      console.error(`      ${f.relPath}`);
    }
    console.error("\nThis batch is not admissible. Fix the above and re-run.");
    process.exit(1);
  }

  console.log(`\n✓ GATE PASSED — ${insights.length} insight(s) admitted.`);
}

/**
 * Insight files (KB-relative paths) that are untracked or modified vs HEAD.
 *
 * FAILS CLOSED: git errors propagate to the caller. A gate that can't determine
 * its batch must not silently report "nothing changed" — the caller treats a
 * throw as fatal (exit 1). An empty set means git succeeded and genuinely found
 * no changed insights (a legitimate no-op).
 */
function getChangedInsightRelPaths(): Set<string> {
  const repoRoot = execFileSync("git", ["rev-parse", "--show-toplevel"], {
    encoding: "utf-8",
    cwd: KB_ROOT,
  }).trim();
  const git = (args: string[]): string =>
    execFileSync("git", args, { encoding: "utf-8", cwd: repoRoot }).trim();

  const out = new Set<string>();
  const blocks = [
    git(["ls-files", "--others", "--exclude-standard", "--", "knowledge-base/domains/"]),
    git(["diff", "--name-only", "HEAD", "--", "knowledge-base/domains/"]),
  ];
  for (const block of blocks) {
    if (!block) continue;
    for (const line of block.split("\n")) {
      if (!line.endsWith(".md")) continue;
      const rel = line.replace(/^knowledge-base\//, "");
      // Skip regenerated _overview/_summary/_index files — they aren't insights
      // (mirrors loadGateInsights' ignore set), so they must not be treated as
      // "unaccounted" insight files in the reconciliation in runEnforce.
      if ((rel.split("/").pop() ?? "").startsWith("_")) continue;
      out.add(rel);
    }
  }
  return out;
}

// ─── Persistence ──────────────────────────────────────────────────────

function persist(report: AuditReport): void {
  mkdirSync(dirname(REPORT_PATH), { recursive: true });
  writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2) + "\n", "utf-8");

  const logLine = {
    generated_at: report.generated_at,
    scope: report.scope,
    total: report.total,
    coverage: report.coverage,
    novelty_available: report.novelty.available,
    block_simulation: report.novelty.block_simulation,
    singleton_topics: report.fragmentation.singletons,
  };
  appendFileSync(LOG_PATH, JSON.stringify(logLine) + "\n", "utf-8");
}

// ─── Pretty printer ───────────────────────────────────────────────────

function printReport(report: AuditReport): void {
  const total = report.total;

  console.log("╔════════════════════════════════════════════════════════╗");
  console.log("║   Zuhn — Insight Gate (AUDIT · read-only)                ║");
  console.log("╚════════════════════════════════════════════════════════╝");
  console.log(`Scope: ${report.scope}    Insights: ${total.toLocaleString()}`);

  if (total === 0) {
    console.log("\nNo insights in scope.");
    return;
  }

  console.log("\nQuality coverage (insights passing each check):");
  for (const checkId of Object.keys(report.coverage) as CheckId[]) {
    const n = report.coverage[checkId];
    console.log(
      `  ${CHECK_LABELS[checkId].padEnd(22)} ${fmt(n).padStart(7)} / ${fmt(total)}  ${pct(n, total)}`
    );
  }

  const { available, embedded, unembedded, no_neighbor, histogram, block_simulation, mean_similarity, top_pairs } =
    report.novelty;
  if (!available) {
    console.log("\nNovelty — not computed (embeddings DB unavailable; structural checks only).");
  } else {
    const withNeighbor = embedded - no_neighbor;
    const noNeighborNote = no_neighbor > 0 ? `, ${fmt(no_neighbor)} no-neighbor` : "";
    console.log(
      `\nNovelty — nearest INSIGHT neighbor, exact cosine (${fmt(embedded)} embedded, ${fmt(unembedded)} unembedded${noNeighborNote}):`
    );
    if (withNeighbor === 0) {
      console.log("  (no insight-to-insight neighbors available)");
    } else {
      for (const [label, count] of Object.entries(histogram)) {
        console.log(`  ${label.padEnd(10)} ${fmt(count).padStart(7)}  ${bar(count, withNeighbor)}`);
      }
      console.log(`  mean similarity: ${mean_similarity === null ? "n/a" : mean_similarity.toFixed(3)}`);

      console.log("\nBlock simulation (insights that WOULD be rejected as near-dupes):");
      for (const [threshold, count] of Object.entries(block_simulation)) {
        console.log(`  >= ${threshold}   ${fmt(count).padStart(7)}  (${pct(count, withNeighbor)} of measured)`);
      }

      if (top_pairs.length > 0) {
        console.log("\nClosest insight pairs (dedup triage — highest similarity first):");
        for (const p of top_pairs.slice(0, 10)) {
          console.log(`  ${p.similarity.toFixed(3)}  ${p.id}  ~  ${p.nearestId}`);
        }
      }
    }
  }

  const frag = report.fragmentation;
  console.log(
    `\nTopic fragmentation: ${fmt(frag.singletons)} singleton topics / ${fmt(frag.total_topics)} total`
  );
  if (frag.singletons > 0) {
    const preview = frag.singleton_topics.slice(0, 12).join(", ");
    const more = frag.singletons > 12 ? `, … (+${frag.singletons - 12} more)` : "";
    console.log(`  ${preview}${more}`);
  }

  console.log("\nSample failures:");
  let anyFailures = false;
  for (const checkId of Object.keys(report.failing_examples) as CheckId[]) {
    const examples = report.failing_examples[checkId];
    if (examples.length === 0) continue;
    anyFailures = true;
    console.log(`  ${CHECK_LABELS[checkId]} (${fmt(total - report.coverage[checkId])} failing):`);
    for (const ex of examples) {
      const detail = ex.detail ? ` — ${ex.detail}` : "";
      console.log(`    ${ex.id}  ${ex.relPath}${detail}`);
    }
  }
  if (!anyFailures) console.log("  none — all checks pass.");

  console.log(`\nFull report: ${REPORT_PATH}`);
}

// ─── Format helpers ───────────────────────────────────────────────────

function fmt(n: number): string {
  return n.toLocaleString();
}

function pct(n: number, total: number): string {
  return total === 0 ? "0.0%" : `${((100 * n) / total).toFixed(1)}%`;
}

function bar(count: number, total: number): string {
  if (total === 0) return "";
  const width = Math.round((count / total) * 30);
  return "█".repeat(width);
}

main().catch((err) => {
  // Contract: AUDIT never exits non-zero on QUALITY findings (it only reports).
  // A non-zero exit here means an OPERATIONAL failure — corpus unreadable, report
  // unwritable, etc. — which should fail loud rather than pretend success.
  console.error("insight-gate.ts failed:", err);
  process.exit(1);
});
