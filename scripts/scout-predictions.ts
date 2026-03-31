#!/usr/bin/env npx tsx
/**
 * scout-predictions.ts — Evidence Scout for active predictions.
 *
 * Searches the web for evidence that confirms or falsifies active predictions.
 * Never auto-resolves — writes findings for human review in morning briefing.
 *
 * Usage:
 *   npm run scout               — Run both prediction + gap scouts
 *   npx tsx scripts/scout-predictions.ts       — Predictions only
 *   npx tsx scripts/scout-predictions.ts --top 3  — Top 3 most urgent
 */

import { execFile } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import fg from "fast-glob";
import matter from "gray-matter";

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");
const META_DIR = join(KB_ROOT, "meta");
const EVIDENCE_PATH = join(META_DIR, "prediction-evidence.json");

const topN = parseInt(
  process.argv.find((a, i) => process.argv[i - 1] === "--top") ?? "5",
  10
);

interface Prediction {
  id: string;
  title: string;
  claim: string;
  deadline: string;
  confidence: string;
  status: string;
  filePath: string;
  daysUntilDeadline: number;
}

interface EvidenceEntry {
  prediction_id: string;
  prediction_title: string;
  deadline: string;
  evidence: Array<{
    url: string;
    direction: string;
    strength: string;
    summary: string;
    date_found: string;
  }>;
  net_signal: string;
  scouted_at: string;
}

async function loadPredictions(): Promise<Prediction[]> {
  const files = await fg("*.md", {
    cwd: join(KB_ROOT, "predictions"),
    absolute: true,
    ignore: ["_index.md"],
  });

  const now = Date.now();
  const predictions: Prediction[] = [];

  for (const file of files) {
    try {
      const raw = readFileSync(file, "utf-8");
      const { data } = matter(raw);

      if (data.status !== "active") continue;

      const deadline = String(data.deadline || "");
      const deadlineMs = new Date(deadline).getTime();
      const daysUntil = Math.floor((deadlineMs - now) / (24 * 60 * 60 * 1000));

      // Extract title properly
      let title = "";
      if (typeof data.title === "string") {
        title = data.title;
      } else {
        title = String(data.title || "");
      }

      predictions.push({
        id: data.id as string,
        title: title.slice(0, 150),
        claim: typeof data.claim === "string" ? data.claim : title,
        deadline,
        confidence: data.confidence || "medium",
        status: data.status,
        filePath: file,
        daysUntilDeadline: daysUntil,
      });
    } catch {
      // Skip unparseable
    }
  }

  // Sort: soonest deadline first, then those with public companies/products
  predictions.sort((a, b) => a.daysUntilDeadline - b.daysUntilDeadline);
  return predictions.slice(0, topN);
}

async function searchEvidence(pred: Prediction): Promise<string> {
  const promptFile = `/tmp/zuhn-scout-${pred.id}.md`;
  const prompt = `You are an evidence scout for the Zuhn knowledge base.

Target prediction:
"${pred.claim}"
Deadline: ${pred.deadline}

Search for recent news, research, earnings reports, product announcements,
or policy changes that provide evidence FOR or AGAINST this prediction.

For each piece of evidence, write a JSON file to /tmp/zuhn-scout-evidence-${pred.id}.json:
{
  "evidence": [
    {
      "url": "https://...",
      "direction": "supports | contradicts",
      "strength": "strong | moderate | weak",
      "summary": "Key finding in 1-2 sentences"
    }
  ],
  "net_signal": "leaning_confirmed | leaning_falsified | mixed | no_evidence"
}

If no relevant evidence exists, write: {"evidence": [], "net_signal": "no_evidence"}

Use WebSearch to find recent sources. Focus on the last 6 months.
Write the result file using Bash: cat > /tmp/zuhn-scout-evidence-${pred.id}.json << 'JSONEOF' ... JSONEOF`;

  await writeFile(promptFile, prompt, "utf-8");

  return new Promise((resolve) => {
    execFile(
      "claude",
      [
        "--print",
        "--model",
        "opus",
        "--max-turns",
        "10",
        "--allowedTools",
        "WebSearch,Bash,Read,Write",
        "-p",
        `Execute the exact instructions in ${promptFile}`,
      ],
      {
        cwd: PROJECT_ROOT,
        timeout: 3 * 60 * 1000,
        maxBuffer: 5 * 1024 * 1024,
      },
      (error) => {
        try { require("fs").unlinkSync(promptFile); } catch {}
        // Read result from file
        const resultFile = `/tmp/zuhn-scout-evidence-${pred.id}.json`;
        let result = '{"evidence":[],"net_signal":"no_evidence"}';
        try {
          result = readFileSync(resultFile, "utf-8");
          require("fs").unlinkSync(resultFile);
        } catch {}
        resolve(error ? '{"evidence":[],"net_signal":"error"}' : result);
      }
    );
  });
}

function parseEvidence(output: string): {
  evidence: Array<{
    url: string;
    direction: string;
    strength: string;
    summary: string;
  }>;
  net_signal: string;
} {
  const match = output.match(/\{[\s\S]*"evidence"[\s\S]*\}/);
  if (match) {
    try { return JSON.parse(match[0]); } catch {}
  }
  return { evidence: [], net_signal: "no_evidence" };
}

async function main(): Promise<void> {
  console.log(`
╔══════════════════════════════════════╗
║     Zuhn — Prediction Scout          ║
╚══════════════════════════════════════╝
`);

  const predictions = await loadPredictions();
  if (predictions.length === 0) {
    console.log("No active predictions to scout.");
    return;
  }

  console.log(`Scouting ${predictions.length} predictions:\n`);

  // Load existing evidence
  let allEvidence: EvidenceEntry[] = [];
  if (existsSync(EVIDENCE_PATH)) {
    try { allEvidence = JSON.parse(readFileSync(EVIDENCE_PATH, "utf-8")); } catch {}
  }

  const today = new Date().toISOString().slice(0, 10);

  for (const pred of predictions) {
    const daysLabel = pred.daysUntilDeadline > 0
      ? `${pred.daysUntilDeadline} days remaining`
      : `OVERDUE by ${Math.abs(pred.daysUntilDeadline)} days`;

    console.log(`  ${pred.id} (${daysLabel})`);
    console.log(`  "${pred.title.slice(0, 80)}..."`);

    const output = await searchEvidence(pred);
    const parsed = parseEvidence(output);

    const entry: EvidenceEntry = {
      prediction_id: pred.id,
      prediction_title: pred.title,
      deadline: pred.deadline,
      evidence: parsed.evidence.map((e) => ({
        ...e,
        date_found: today,
      })),
      net_signal: parsed.net_signal,
      scouted_at: today,
    };

    // Replace existing entry for this prediction or add new
    allEvidence = allEvidence.filter((e) => e.prediction_id !== pred.id);
    allEvidence.push(entry);

    const icon = {
      leaning_confirmed: "✓",
      leaning_falsified: "✗",
      mixed: "~",
      no_evidence: "○",
      error: "!",
    }[parsed.net_signal] ?? "?";

    console.log(`  ${icon} ${parsed.net_signal} (${parsed.evidence.length} sources found)`);
    for (const e of parsed.evidence) {
      console.log(`    [${e.direction}/${e.strength}] ${e.summary.slice(0, 80)}`);
    }
    console.log();
  }

  writeFileSync(EVIDENCE_PATH, JSON.stringify(allEvidence, null, 2), "utf-8");
  console.log(`Evidence written to ${EVIDENCE_PATH}`);
}

main().catch((err) => {
  console.error("Prediction Scout error:", err);
  process.exit(1);
});
