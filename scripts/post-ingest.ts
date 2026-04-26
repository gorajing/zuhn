#!/usr/bin/env npx tsx

import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { readFile, writeFile, mkdir } from "node:fs/promises";

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");
const ACTIVITY_LOG = join(KB_ROOT, "meta", "activity.md");

// ─── Helpers ──────────────────────────────────────────────────────────

function timestamp(): string {
  return new Date().toISOString().slice(0, 19).replace("T", " ");
}

async function appendToActivityLog(entry: string): Promise<void> {
  await mkdir(join(ACTIVITY_LOG, ".."), { recursive: true });
  let existing = "";
  try {
    existing = await readFile(ACTIVITY_LOG, "utf-8");
  } catch {
    existing = "# Ingestion Activity Log\n";
  }
  // Dedup: skip if the last non-empty line has an identical entry
  const lines = existing.trimEnd().split("\n");
  const lastLine = lines.filter((l) => l.trim().length > 0).pop() ?? "";
  if (lastLine.includes(entry)) {
    return;
  }
  const line = `\n- **${timestamp()}** — ${entry}`;
  await writeFile(ACTIVITY_LOG, existing + line + "\n", "utf-8");
}

/**
 * Classify a staged path as data (auto-committable to main) or not.
 *
 * Option B architecture: pure data updates flow through post-ingest's
 * auto-git step directly to main. Anything else — scripts, configs,
 * briefs, docs, schemas, hooks, GitHub workflows — must go through a
 * branch + PR + Codex review. The guard in the auto-git step uses
 * this predicate to refuse commits that mix code into a data run.
 *
 * Data scope is anything under `knowledge-base/`. The MASTER_INDEX,
 * views, _summary files, and meta/ all live there.
 */
function isDataPath(path: string): boolean {
  // Normalize POSIX-style separators (git output) regardless of host
  const normalized = path.replace(/\\/g, "/");
  return normalized.startsWith("knowledge-base/");
}

function buildAutoCommitMessage(): string {
  try {
    const diffStat = execFileSync(
      "git",
      ["diff", "--cached", "--stat", "--", "knowledge-base/"],
      { encoding: "utf-8", cwd: PROJECT_ROOT }
    ).trim();

    const parts: string[] = [];

    // Count new insight files
    const newFiles = execFileSync(
      "git",
      ["diff", "--cached", "--name-only", "--diff-filter=A", "--", "knowledge-base/domains/"],
      { encoding: "utf-8", cwd: PROJECT_ROOT }
    ).trim();
    const newInsights = newFiles ? newFiles.split("\n").length : 0;
    if (newInsights > 0) parts.push(`${newInsights} new insight${newInsights > 1 ? "s" : ""}`);

    // Count new source files
    const newSources = execFileSync(
      "git",
      ["diff", "--cached", "--name-only", "--diff-filter=A", "--", "knowledge-base/sources/"],
      { encoding: "utf-8", cwd: PROJECT_ROOT }
    ).trim();
    const srcCount = newSources ? newSources.split("\n").length : 0;
    if (srcCount > 0) parts.push(`${srcCount} new source${srcCount > 1 ? "s" : ""}`);

    // Count new principle files
    const newPrinciples = execFileSync(
      "git",
      ["diff", "--cached", "--name-only", "--diff-filter=A", "--", "knowledge-base/principles/"],
      { encoding: "utf-8", cwd: PROJECT_ROOT }
    ).trim();
    const priCount = newPrinciples ? newPrinciples.split("\n").length : 0;
    if (priCount > 0) parts.push(`${priCount} new principle${priCount > 1 ? "s" : ""}`);

    // Count modified files (excluding new)
    const modifiedFiles = execFileSync(
      "git",
      ["diff", "--cached", "--name-only", "--diff-filter=M", "--", "knowledge-base/"],
      { encoding: "utf-8", cwd: PROJECT_ROOT }
    ).trim();
    const modCount = modifiedFiles ? modifiedFiles.split("\n").length : 0;
    if (modCount > 0) parts.push(`${modCount} updated`);

    if (parts.length > 0) {
      return `auto: post-ingest \u2014 ${parts.join(", ")}`;
    }
    // Fallback: extract summary line count from diff stat
    const statLines = diffStat.split("\n");
    const summaryLine = statLines[statLines.length - 1] ?? "";
    return `auto: post-ingest \u2014 ${summaryLine.trim() || "updated indices and metadata"}`;
  } catch {
    return "auto: post-ingest \u2014 updated indices and metadata";
  }
}

function runStep(label: string, args: string[]): { ok: boolean; error?: string } {
  console.log(`\n>> ${label}`);
  try {
    execFileSync(args[0], args.slice(1), {
      stdio: "inherit",
      cwd: PROJECT_ROOT,
    });
    console.log(`   OK`);
    return { ok: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`   FAILED: ${msg}`);
    return { ok: false, error: msg };
  }
}

// ─── Main ─────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  console.log("╔══════════════════════════════════════╗");
  console.log("║       Post-Ingest Orchestrator       ║");
  console.log("╚══════════════════════════════════════╝");
  console.log(`Started at: ${timestamp()}`);

  const results: { step: string; status: string }[] = [];

  // Step 1: Health check
  const healthResult = runStep("Health Check", [
    "npx", "tsx", join(PROJECT_ROOT, "scripts", "health.ts"),
  ]);

  if (!healthResult.ok) {
    results.push({ step: "health", status: "FAILED" });
    await appendToActivityLog(
      `post-ingest health check failed (continuing): ${healthResult.error}`
    );
    console.warn("\nHealth check FAILED — continuing to reindex and auto-git.");
  } else {
    results.push({ step: "health", status: "PASSED" });
  }

  // Step 2: Reindex
  const reindexResult = runStep("Reindex", [
    "npx", "tsx", join(PROJECT_ROOT, "scripts", "reindex.ts"),
  ]);

  if (reindexResult.ok) {
    results.push({ step: "reindex", status: "OK" });
  } else {
    results.push({ step: "reindex", status: "FAILED" });
    await appendToActivityLog(
      `post-ingest reindex FAILED — aborting: ${reindexResult.error}`
    );
    console.error("\nPipeline ABORTED: reindex failed (stale indices are worse than no indices).");
    printSummary(results);
    process.exit(1);
  }

  // Step 3: Embed (optional — graceful degradation if Ollama not running)
  const embedResult = runStep("Embed", [
    "npx", "tsx", join(PROJECT_ROOT, "scripts", "embed.ts"),
  ]);

  if (embedResult.ok) {
    results.push({ step: "embed", status: "OK" });
  } else {
    // Embedding failure is non-fatal: FTS5-only mode is fine
    results.push({ step: "embed", status: "SKIPPED" });
    console.warn("\nEmbed step failed (non-fatal) — FTS5-only mode active.");
  }

  // Step 4: Learn (auto-connections, emergence detection, confidence propagation)
  const learnResult = runStep("Learn", [
    "npx", "tsx", join(PROJECT_ROOT, "scripts", "learn.ts"),
  ]);

  if (learnResult.ok) {
    results.push({ step: "learn", status: "OK" });
  } else {
    // Learning failure is non-fatal: insights remain usable without connections
    results.push({ step: "learn", status: "SKIPPED" });
    console.warn("\nLearn step failed (non-fatal) — connections and flags not updated.");
  }

  // Step 5: Views (action list, stale board, source map, gap report)
  const viewsResult = runStep("Views", [
    "npx", "tsx", join(PROJECT_ROOT, "scripts", "views.ts"),
  ]);

  if (viewsResult.ok) {
    results.push({ step: "views", status: "OK" });
  } else {
    // Views failure is non-fatal: all other outputs remain valid
    results.push({ step: "views", status: "SKIPPED" });
    console.warn("\nViews step failed (non-fatal) — views not updated.");
  }

  // Step 6: Auto-git
  //
  // NOTE: an earlier version of this pipeline called autoknowledge.ts
  // --limit 5 here, turning post-ingest into a hybrid "rebuild derived
  // state + opportunistically extract more sources" command. That was
  // removed because:
  //
  //   1. It made post-ingest impure — calling `npm run post-ingest`
  //      silently mutated the unextracted backlog.
  //   2. It created a cyclic control-plane dependency: autoknowledge's
  //      final post-ingest call spawned post-ingest which spawned
  //      autoknowledge again, only avoided by lock-file coincidence.
  //   3. It blurred the boundary between "checkpoint existing work"
  //      and "do more work."
  //
  // post-ingest is now a pure derived-state rebuild + commit pipeline.
  // Extraction is owned exclusively by scripts/autoknowledge.ts.
  let gitStatus = "SKIPPED";
  console.log("\n>> Auto-git");
  try {
    // Stage knowledge-base/ — auto-git is intentionally narrow-scoped
    // to data only. Code, briefs, and config changes go through PRs
    // and are reviewed by the chatgpt-codex-connector GitHub App,
    // which triggers automatically on pull_request events. No workflow
    // file is needed; the App listens via webhooks.
    execFileSync("git", ["add", "knowledge-base/"], {
      stdio: "pipe",
      cwd: PROJECT_ROOT,
    });

    // Guard: if any non-data file is staged (because the user staged
    // it manually before running post-ingest), abort the auto-commit
    // rather than mixing code into a data commit. This preserves the
    // Option B invariant that auto-commits to main are data-only.
    const stagedFiles = execFileSync(
      "git",
      ["diff", "--cached", "--name-only"],
      { encoding: "utf-8", cwd: PROJECT_ROOT },
    )
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    const nonDataFiles = stagedFiles.filter((f) => !isDataPath(f));

    if (nonDataFiles.length > 0) {
      console.error(
        "   Auto-git aborted: non-data files are staged. Auto-commits must be data-only.",
      );
      console.error("   Staged non-data files:");
      for (const f of nonDataFiles) console.error(`     - ${f}`);
      console.error(
        "   Resolve by either unstaging these (`git restore --staged <file>`) or",
      );
      console.error(
        "   committing them manually on a feature branch + PR (Option B).",
      );
      gitStatus = "ABORTED_NON_DATA_STAGED";
    } else {
      // Check if there are staged changes
      try {
        execFileSync("git", ["diff", "--cached", "--quiet"], {
          stdio: "pipe",
          cwd: PROJECT_ROOT,
        });
        // Exit 0 means no changes
        console.log("   No changes to commit.");
        gitStatus = "NO_CHANGES";
      } catch {
        // Exit non-zero means there ARE staged changes — commit them.
        // Build a descriptive commit message from what actually changed.
        const commitMsg = buildAutoCommitMessage();
        execFileSync("git", ["commit", "-m", commitMsg], {
          stdio: "pipe",
          cwd: PROJECT_ROOT,
        });
        console.log(`   Committed: ${commitMsg}`);
        gitStatus = "COMMITTED";
      }
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`   Git step failed: ${msg}`);
    gitStatus = "FAILED";
  }
  results.push({ step: "auto-git", status: gitStatus });

  // Step 4: Log activity
  const summaryLine = results
    .map((r) => `${r.step}=${r.status}`)
    .join(", ");
  await appendToActivityLog(`post-ingest completed — ${summaryLine}`);

  // Print summary
  printSummary(results);
}

function printSummary(results: { step: string; status: string }[]): void {
  console.log("\n┌──────────────────────────────────────┐");
  console.log("│            Pipeline Summary           │");
  console.log("├──────────────────────────────────────┤");
  for (const r of results) {
    const pad = " ".repeat(Math.max(0, 18 - r.step.length));
    console.log(`│  ${r.step}${pad} ${r.status.padEnd(16)} │`);
  }
  console.log("└──────────────────────────────────────┘");
}

main().catch((err) => {
  console.error("post-ingest.ts failed:", err);
  process.exit(1);
});
