#!/usr/bin/env npx tsx

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");
const META = join(KB_ROOT, "meta");

// ─── Helpers ──────────────────────────────────────────────────────────

function readOptional(path: string): string | null {
  try {
    return readFileSync(path, "utf-8");
  } catch {
    return null;
  }
}

function extractSection(md: string, heading: string): string {
  const lines = md.split("\n");
  const startIdx = lines.findIndex((l) => l.startsWith(`## ${heading}`));
  if (startIdx === -1) return "";

  const body: string[] = [];
  for (let i = startIdx + 1; i < lines.length; i++) {
    if (lines[i].startsWith("## ")) break;
    body.push(lines[i]);
  }
  return body.join("\n").trim();
}

// ─── Prediction judgment helpers ───────────────────────────────────────

export interface PredictionEvidenceRecord {
  prediction_id: string;
  net_signal: string;
  evidence: unknown[];
}

/**
 * Load current status for every prediction in the predictions directory,
 * keyed by prediction id. Malformed files are silently skipped. Returns an
 * empty map if the directory does not exist.
 */
export function loadPredictionStatuses(
  predictionsDir: string = join(KB_ROOT, "predictions"),
): Map<string, string> {
  const statuses = new Map<string, string>();
  let files: string[];
  try {
    files = readdirSync(predictionsDir).filter((f) => f.endsWith(".md"));
  } catch {
    return statuses;
  }
  for (const file of files) {
    try {
      const raw = readFileSync(join(predictionsDir, file), "utf-8");
      const parsed = matter(raw);
      const id = parsed.data.id as string | undefined;
      const status = parsed.data.status as string | undefined;
      if (id && status) statuses.set(id, status);
    } catch {
      /* skip malformed file */
    }
  }
  return statuses;
}

/**
 * From a prediction-evidence.json payload, return only the records that
 * should surface in the wake briefing's "Your Judgment Needed" list: the
 * evidence must lean confirmed or falsified, include at least 3 sources,
 * AND the prediction itself must still be active in its YAML frontmatter.
 *
 * The active-status check prevents already-resolved predictions (whose
 * evidence remains in the file as historical record) from looping forever
 * as ghost action items.
 */
export function filterPredictionsReadyForJudgment(
  evidence: PredictionEvidenceRecord[],
  statuses: Map<string, string>,
): PredictionEvidenceRecord[] {
  return evidence.filter(
    (e) =>
      (e.net_signal === "leaning_confirmed" || e.net_signal === "leaning_falsified") &&
      e.evidence.length >= 3 &&
      statuses.get(e.prediction_id) === "active",
  );
}

// ─── Main ─────────────────────────────────────────────────────────────

function main(): void {
  console.log("╔══════════════════════════════════════╗");
  console.log("║         Zuhn — Morning Briefing      ║");
  console.log("╚══════════════════════════════════════╝");
  console.log("");

  // 1. Session state
  const sessionMd = readOptional(join(META, "session.md"));

  if (!sessionMd) {
    console.log("No previous session state found. Starting fresh.");
    console.log("");
  } else {
    const focusArea = extractSection(sessionMd, "Focus Area");
    const trainOfThought = extractSection(sessionMd, "Train of Thought");
    const activeFiles = extractSection(sessionMd, "Active Files");
    const openLoops = extractSection(sessionMd, "Open Loops");
    const nextActions = extractSection(sessionMd, "Next Actions");

    console.log("## Last Session");
    console.log(`Focus: ${focusArea}`);
    console.log(`Thought: ${trainOfThought}`);
    console.log("");

    if (activeFiles) {
      console.log("## Active Files");
      console.log(activeFiles);
      console.log("");
    }

    if (openLoops) {
      console.log("## Open Loops");
      console.log(openLoops);
      console.log("");
    }

    if (nextActions) {
      console.log("## Next Actions");
      console.log(nextActions);
      console.log("");
    }
  }

  // 2. Overnight Inbox (Phase 19)
  const { initDb } = require("./lib/db");
  const db = initDb();

  const inboxCommitted = db
    .prepare("SELECT COUNT(*) as n FROM inbox_queue WHERE status = 'committed' AND date(updated_at) = date('now')")
    .get() as { n: number };
  const inboxReview = db
    .prepare("SELECT COUNT(*) as n FROM inbox_queue WHERE status = 'review'")
    .get() as { n: number };
  const inboxFailed = db
    .prepare("SELECT COUNT(*) as n FROM inbox_queue WHERE status = 'failed'")
    .get() as { n: number };
  const inboxPending = db
    .prepare("SELECT COUNT(*) as n FROM inbox_queue WHERE status = 'pending'")
    .get() as { n: number };
  const totalInsights = db
    .prepare("SELECT SUM(insights_extracted) as n FROM inbox_queue WHERE status = 'committed' AND date(updated_at) = date('now')")
    .get() as { n: number };

  if (inboxCommitted.n > 0 || inboxReview.n > 0 || inboxFailed.n > 0 || inboxPending.n > 0) {
    console.log("## Overnight Inbox");
    if (inboxCommitted.n > 0) {
      console.log(`- ${inboxCommitted.n} sources processed (${totalInsights.n || 0} insights extracted)`);
    }
    if (inboxReview.n > 0) {
      console.log(`- ${inboxReview.n} in review (quality gate flagged — needs your judgment)`);
    }
    if (inboxFailed.n > 0) {
      console.log(`- ${inboxFailed.n} failed (check inbox/failed/ for details)`);
    }
    if (inboxPending.n > 0) {
      console.log(`- ${inboxPending.n} still pending in queue`);
    }
    console.log("");
  }

  // 3. Prediction Watch (Phase 19)
  const evidencePath = join(META, "prediction-evidence.json");
  if (existsSync(evidencePath)) {
    try {
      const evidence = JSON.parse(readFileSync(evidencePath, "utf-8")) as Array<{
        prediction_id: string;
        prediction_title: string;
        deadline: string;
        net_signal: string;
        evidence: Array<{ direction: string; strength: string; summary: string }>;
      }>;
      const withEvidence = evidence.filter((e) => e.evidence.length > 0);
      if (withEvidence.length > 0) {
        console.log("## Prediction Watch");
        for (const e of withEvidence) {
          const icon = { leaning_confirmed: "✓", leaning_falsified: "✗", mixed: "~" }[e.net_signal] ?? "○";
          console.log(`- ${icon} ${e.prediction_id} (due ${e.deadline}): ${e.net_signal.replace(/_/g, " ")}`);
          const strongest = e.evidence.find((ev) => ev.strength === "strong");
          if (strongest) {
            console.log(`  ${strongest.direction === "supports" ? "Supporting" : "Contradicting"}: ${strongest.summary.slice(0, 100)}`);
          }
        }
        console.log("");
      }
    } catch { /* skip */ }
  }

  // 4. Red Team Bounties & Gap Bounties (Phase 19)
  const bountiesPath = join(META, "bounties.json");
  if (existsSync(bountiesPath)) {
    try {
      const bounties = JSON.parse(readFileSync(bountiesPath, "utf-8")) as Array<{
        id: string;
        type: string;
        status: string;
        target_principle?: string;
        principle_title?: string;
        target_topic?: string;
        counter_arguments?: Array<{ author: string; summary: string; threat_level: string }>;
        suggested_sources?: Array<{ title: string; url: string; estimated_yield: number }>;
        diversity_gaps?: string[];
      }>;

      const pendingRedTeam = bounties.filter((b) => b.type === "red-team" && b.status === "pending");
      const pendingGaps = bounties.filter((b) => b.type === "gap-fill" && b.status === "pending");

      if (pendingRedTeam.length > 0) {
        console.log("## Red Team Challenges");
        for (const b of pendingRedTeam) {
          const strongest = b.counter_arguments?.[0];
          console.log(`- ${b.target_principle} "${b.principle_title?.slice(0, 60)}..."`);
          console.log(`  CHALLENGED BY: ${b.counter_arguments?.length} sources.`);
          if (strongest) {
            console.log(`  Strongest: ${strongest.author.slice(0, 40)} — ${strongest.summary.slice(0, 80)}...`);
          }
          if (b.diversity_gaps && b.diversity_gaps.length > 0) {
            console.log(`  Diversity gaps: ${b.diversity_gaps[0]}`);
          }
          console.log(`  ACTION: Run /ingest on URLs to stress-test.`);
        }
        console.log("");
      }

      if (pendingGaps.length > 0) {
        console.log("## Gap Bounties");
        for (const b of pendingGaps) {
          const top = b.suggested_sources?.[0];
          console.log(`- ${b.target_topic}: ${b.suggested_sources?.length} sources found.`);
          if (top) {
            console.log(`  Top pick: ${top.title.slice(0, 60)} (est. ${top.estimated_yield} insights)`);
          }
        }
        console.log("");
      }
    } catch { /* skip */ }
  }

  // 5. Deep Read Findings (Phase 19)
  const deepReadPath = join(META, "inbox-deep-reads.json");
  if (existsSync(deepReadPath)) {
    try {
      const deepReads = JSON.parse(readFileSync(deepReadPath, "utf-8")) as Array<{
        source_id: string;
        potential_tensions: Array<{ new_insight: string; existing: string; reason: string }>;
        supporting_evidence: Array<{ new_insight: string; principle: string }>;
        cross_domain: Array<{ insight: string; target_domain: string; connection: string }>;
      }>;

      const withFindings = deepReads.filter(
        (d) =>
          d.potential_tensions?.length > 0 ||
          d.supporting_evidence?.length > 0 ||
          d.cross_domain?.length > 0
      );

      if (withFindings.length > 0) {
        console.log("## Deep Read Findings");
        for (const d of withFindings) {
          if (d.potential_tensions?.length > 0) {
            for (const t of d.potential_tensions) {
              console.log(`- TENSION: ${t.reason?.slice(0, 100)}`);
            }
          }
          if (d.cross_domain?.length > 0) {
            for (const c of d.cross_domain) {
              console.log(`- CROSS-DOMAIN: ${c.connection?.slice(0, 100)}`);
            }
          }
        }
        console.log("");
      }
    } catch { /* skip */ }
  }

  // 6. Flags
  const flagsMd = readOptional(join(META, "flags.md"));
  console.log("## Flags");
  if (flagsMd) {
    // Strip the header line, show the content
    const content = flagsMd
      .replace(/^#.*\n/m, "")
      .replace(/^Generated by.*\n/m, "")
      .trim();
    console.log(content || "No flags.");
  } else {
    console.log("No flags.");
  }
  console.log("");

  // 3. Pending work
  const pendingMd = readOptional(join(META, "pending.md"));
  console.log("## Pending Work");
  if (pendingMd) {
    const content = pendingMd.replace(/^#.*\n/m, "").trim();
    console.log(content || "No pending work.");
  } else {
    console.log("No pending work.");
  }
  console.log("");

  // 4. Outcomes due — scan decisions and predictions for due items
  const today = new Date().toISOString().slice(0, 10);
  const dueItems: string[] = [];

  const decisionsDir = join(KB_ROOT, "decisions");
  if (existsSync(decisionsDir)) {
    for (const f of readdirSync(decisionsDir).filter((f) => f.endsWith(".md"))) {
      try {
        const raw = readFileSync(join(decisionsDir, f), "utf-8");
        const { data } = matter(raw);
        if (data.status === "pending" && data.outcome_date && data.outcome_date <= today) {
          dueItems.push(`- [DECISION] ${data.id}: "${data.context}" — outcome due ${data.outcome_date} (choice: ${data.choice})`);
        }
      } catch { /* skip malformed */ }
    }
  }

  const predictionsDir = join(KB_ROOT, "predictions");
  if (existsSync(predictionsDir)) {
    for (const f of readdirSync(predictionsDir).filter((f) => f.endsWith(".md"))) {
      try {
        const raw = readFileSync(join(predictionsDir, f), "utf-8");
        const { data } = matter(raw);
        if (data.status === "active" && data.deadline && data.deadline <= today) {
          dueItems.push(`- [PREDICTION] ${data.id}: "${data.claim}" — deadline ${data.deadline}`);
        }
      } catch { /* skip malformed */ }
    }
  }

  console.log("## Outcomes Due");
  if (dueItems.length > 0) {
    for (const item of dueItems) {
      console.log(item);
    }
  } else {
    console.log("No outcomes due today.");
  }
  console.log("");

  // 9. Knowledge base stats
  const statsMd = readOptional(join(META, "stats.md"));
  console.log("## Knowledge Base Stats");
  if (statsMd) {
    const lines = statsMd
      .split("\n")
      .filter((l) => l.startsWith("- **"))
      .join("\n");
    console.log(lines || "No stats available.");
  } else {
    console.log("No stats available.");
  }
  console.log("");

  // 10. Daemon status
  const daemonStatus = readOptional(join(META, "daemon-status.json"));
  if (daemonStatus) {
    try {
      const ds = JSON.parse(daemonStatus);
      console.log(`## Daemon: ${ds.agents_active > 0 ? "active" : "idle"} | Queue: ${ds.queue?.pending ?? 0} pending`);
    } catch { /* skip */ }
  }
  console.log("");

  // 11. Your Judgment Needed
  const judgments: string[] = [];

  if (inboxReview.n > 0) {
    judgments.push(`Review ${inboxReview.n} source(s) in inbox/review/ (quality gate flagged)`);
  }

  // Check for predictions with strong evidence ready to resolve.
  // Skip any that are already resolved in YAML — their evidence stays in
  // the file as historical record, but they should not surface as
  // action items.
  if (existsSync(evidencePath)) {
    try {
      const ev = JSON.parse(readFileSync(evidencePath, "utf-8")) as PredictionEvidenceRecord[];
      const statuses = loadPredictionStatuses();
      const ready = filterPredictionsReadyForJudgment(ev, statuses);
      for (const r of ready) {
        judgments.push(`Resolve ${r.prediction_id}? (${r.net_signal.replace(/_/g, " ")}, ${r.evidence.length} sources)`);
      }
    } catch { /* skip */ }
  }

  // Check for red team bounties
  if (existsSync(bountiesPath)) {
    try {
      const bounties = JSON.parse(readFileSync(bountiesPath, "utf-8")) as Array<{
        type: string;
        status: string;
        target_principle?: string;
        target_topic?: string;
        counter_arguments?: unknown[];
        suggested_sources?: unknown[];
      }>;
      const rtPending = bounties.filter((b) => b.type === "red-team" && b.status === "pending");
      const gapPending = bounties.filter((b) => b.type === "gap-fill" && b.status === "pending");

      if (rtPending.length > 0) {
        judgments.push(`Ingest red team counter-arguments? (${rtPending.length} principles challenged)`);
      }
      if (gapPending.length > 0) {
        const totalSources = gapPending.reduce(
          (sum, b) => sum + (b.suggested_sources?.length ?? 0),
          0
        );
        judgments.push(`Approve gap bounty ingestions? (${gapPending.length} topics, ${totalSources} URLs)`);
      }
    } catch { /* skip */ }
  }

  if (judgments.length > 0) {
    console.log("## Your Judgment Needed");
    judgments.forEach((j, i) => console.log(`${i + 1}. [ ] ${j}`));
    console.log("");
  }
}

// Only run main when executed directly (not when imported for testing)
const isDirectRun =
  process.argv[1]?.endsWith("wake.ts") ||
  process.argv[1]?.endsWith("wake.js");

if (isDirectRun) {
  main();
}
