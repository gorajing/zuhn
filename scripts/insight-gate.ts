#!/usr/bin/env npx tsx
/**
 * insight-gate.ts — Semantic quality gate for insights (CLI).
 *
 * PHASE 1 (this file): AUDIT ONLY. Read-only X-ray of insight quality across
 * the corpus. Never exits 1 — it reports so the pass-bar can be calibrated
 * against the real distribution before forward enforcement is switched on.
 *
 * Usage:
 *   npx tsx scripts/insight-gate.ts --audit --all          # full corpus X-ray
 *   npx tsx scripts/insight-gate.ts --audit --since 2026-05-01
 *   npx tsx scripts/insight-gate.ts --audit --all --json   # machine-readable
 *   npx tsx scripts/insight-gate.ts --audit --examples 30  # more failing samples
 *
 * Outputs (in addition to stdout):
 *   knowledge-base/meta/gate-report.json   latest full report (overwritten)
 *   knowledge-base/meta/gate-log.jsonl     one summary line per run (appended)
 *
 * Phase 2 (not yet wired) will add forward enforcement: scope to a batch and
 * exit 1 on failures, reusing the exact check functions in lib/insight-gate.ts.
 */

import { appendFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import Database from "better-sqlite3";
import * as sqliteVec from "sqlite-vec";

import {
  auditInsights,
  buildNoveltyComputer,
  buildSourceIndex,
  loadGateInsights,
  type AuditReport,
  type CheckId,
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
  const args = parseArgs(process.argv.slice(2));

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
