#!/usr/bin/env npx tsx
/**
 * red-team.ts — The Adversarial Red Team.
 *
 * Finds your highest-confidence principles and searches for the strongest
 * counter-arguments. Never auto-ingests — creates bounties for human approval.
 *
 * Usage:
 *   npm run red-team              — Run full cycle (5 principles)
 *   npm run red-team -- --count 3 — Target 3 principles
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
const BOUNTIES_PATH = join(META_DIR, "bounties.json");
const HISTORY_PATH = join(META_DIR, "red-team-history.json");

// ─── Config ─────────────────────────────────────────────────────────

const count = parseInt(
  process.argv.find((a, i) => process.argv[i - 1] === "--count") ?? "5",
  10
);

// ─── Helpers ────────────────────────────────────────────────────────

function generateBountyId(): string {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hash = Math.random().toString(16).slice(2, 6).toUpperCase();
  return `BOUNTY-${yy}${mm}${dd}-${hash}`;
}

interface Principle {
  id: string;
  title: string;
  summary: string;
  confidence: string;
  domain: string;
  tags: string[];
  supporting_insights: string[];
  filePath: string;
}

interface Bounty {
  id: string;
  type: "red-team" | "gap-fill";
  target_principle?: string;
  principle_title?: string;
  target_topic?: string;
  counter_arguments?: Array<{
    url: string;
    author: string;
    credibility: string;
    threat_level: string;
    summary: string;
  }>;
  suggested_sources?: Array<{
    url: string;
    title: string;
    author: string;
    quality_rationale: string;
  }>;
  diversity_gaps?: string[];
  created_at: string;
  status: string;
}

function loadHistory(): Record<string, string> {
  // principle_id → last_challenged_date
  if (!existsSync(HISTORY_PATH)) return {};
  try {
    return JSON.parse(readFileSync(HISTORY_PATH, "utf-8"));
  } catch {
    return {};
  }
}

function saveHistory(history: Record<string, string>): void {
  writeFileSync(HISTORY_PATH, JSON.stringify(history, null, 2), "utf-8");
}

function loadBounties(): Bounty[] {
  if (!existsSync(BOUNTIES_PATH)) return [];
  try {
    return JSON.parse(readFileSync(BOUNTIES_PATH, "utf-8"));
  } catch {
    return [];
  }
}

function saveBounties(bounties: Bounty[]): void {
  writeFileSync(BOUNTIES_PATH, JSON.stringify(bounties, null, 2), "utf-8");
}

// ─── Step 1: Target Selection ───────────────────────────────────────

async function selectTargets(): Promise<Principle[]> {
  const principleFiles = await fg("**/*.md", {
    cwd: join(KB_ROOT, "principles"),
    absolute: true,
    ignore: ["**/index.md", "**/_index.md"],
  });

  const history = loadHistory();
  const now = Date.now();
  const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000;

  const principles: (Principle & { score: number })[] = [];

  for (const file of principleFiles) {
    try {
      const raw = readFileSync(file, "utf-8");
      const { data } = matter(raw);

      // Only target high-confidence principles
      if (!["high", "very_high"].includes(data.confidence)) continue;

      const id = data.id as string;
      const lastChallenged = history[id]
        ? new Date(history[id]).getTime()
        : 0;

      // Skip if challenged within 30 days
      if (now - lastChallenged < thirtyDaysMs) continue;

      // Score: days since last challenge × confidence weight
      const daysSinceChallenge = Math.floor(
        (now - lastChallenged) / (24 * 60 * 60 * 1000)
      );
      const confWeight = data.confidence === "very_high" ? 2 : 1;
      const score = daysSinceChallenge * confWeight;

      principles.push({
        id,
        title: typeof data.title === "string" ? data.title : String(data.title),
        summary: typeof data.summary === "string" ? data.summary : "",
        confidence: data.confidence,
        domain: data.domain || "unknown",
        tags: Array.isArray(data.tags) ? data.tags : [],
        supporting_insights: Array.isArray(data.supporting_insights)
          ? data.supporting_insights
          : [],
        filePath: file,
        score,
      });
    } catch {
      // Skip unparseable files
    }
  }

  // Sort by score desc, take top N
  principles.sort((a, b) => b.score - a.score);
  return principles.slice(0, count);
}

// ─── Step 2-3: Counter-Argument Search ──────────────────────────────

async function searchCounterArguments(
  principle: Principle
): Promise<void> {
  const promptFile = `/tmp/zuhn-redteam-${principle.id}.md`;
  const prompt = `You are an adversarial researcher for the Zuhn knowledge base.

Your target principle is:
"${principle.title}"

Summary: ${principle.summary}

Domain: ${principle.domain}
Tags: ${principle.tags.join(", ")}

Your job: find the 3-5 strongest, most credible sources that CONTRADICT this principle.

IMPORTANT RULES:
- Do NOT search "why [principle] is wrong" — that's a leading query
- Search the TOPIC and look for expert disagreement
- Prefer peer-reviewed research over opinion pieces
- Prefer named experts with track records
- Prefer empirical data over theoretical arguments
- Prefer perspectives from domains this principle hasn't been tested in

For each source found, write a JSON file to /tmp/zuhn-redteam-result-${principle.id}.json with this format:
{
  "counter_arguments": [
    {
      "url": "https://...",
      "author": "Name and credentials",
      "credibility": "Why this source is credible",
      "threat_level": "core | assumption | boundary",
      "summary": "The specific counter-argument in 2-3 sentences"
    }
  ],
  "diversity_gaps": ["Geographic: mostly US sources", "Missing: labor economist perspective"],
  "robust": false
}

If you genuinely CANNOT find credible counter-arguments, write: {"counter_arguments": [], "robust": true, "reason": "explanation"}

Use WebSearch to find sources. Write the result file using Bash (cat > /tmp/zuhn-redteam-result-${principle.id}.json << 'JSONEOF' ... JSONEOF). Be thorough.`;

  await writeFile(promptFile, prompt, "utf-8");

  return new Promise<void>((resolve) => {
    execFile(
      "claude",
      [
        "--print",
        "--model",
        "opus",
        "--max-turns",
        "15",
        "--allowedTools",
        "WebSearch,Bash,Read,Write",
        "-p",
        `Execute the exact instructions in ${promptFile}`,
      ],
      {
        cwd: PROJECT_ROOT,
        timeout: 5 * 60 * 1000,
        maxBuffer: 5 * 1024 * 1024,
      },
      (error) => {
        // Clean up prompt file
        try { require("fs").unlinkSync(promptFile); } catch {}

        if (error) {
          console.log(`  Agent error: ${error.message.slice(0, 100)}`);
        }
        resolve();
      }
    );
  });
}

// ─── Step 4: Bounty Generation ──────────────────────────────────────

function parseAgentOutput(output: string): {
  counter_arguments: Array<{
    url: string;
    author: string;
    credibility: string;
    threat_level: string;
    summary: string;
  }>;
  diversity_gaps: string[];
  robust: boolean;
} {
  // Try to extract JSON from the output
  const jsonMatch = output.match(/\{[\s\S]*"counter_arguments"[\s\S]*\}/);
  if (jsonMatch) {
    try {
      return JSON.parse(jsonMatch[0]);
    } catch {
      // Fall through
    }
  }

  // Fallback: parse as best we can
  return {
    counter_arguments: [],
    diversity_gaps: [],
    robust: false,
  };
}

// ─── Main ───────────────────────────────────────────────────────────

async function main(): Promise<void> {
  console.log(`
╔══════════════════════════════════════╗
║       Zuhn — Red Team Cycle          ║
╚══════════════════════════════════════╝
`);

  // Step 1: Select targets
  const targets = await selectTargets();
  if (targets.length === 0) {
    console.log("No eligible principles to challenge (all recently tested or below threshold).");
    return;
  }

  console.log(`Targeting ${targets.length} principles:\n`);
  for (const t of targets) {
    console.log(`  ${t.id} [${t.confidence}] "${t.title.slice(0, 80)}..."`);
  }
  console.log();

  const bounties = loadBounties();
  const history = loadHistory();
  const today = new Date().toISOString().slice(0, 10);

  let challengesFound = 0;
  let robustCount = 0;

  for (const target of targets) {
    console.log(`\n── Challenging: ${target.id} ──`);
    console.log(`   "${target.title.slice(0, 100)}"`);

    await searchCounterArguments(target);
    // Read result from file (agent writes to file, not stdout)
    const resultFile = `/tmp/zuhn-redteam-result-${target.id}.json`;
    let output = "";
    try {
      output = readFileSync(resultFile, "utf-8");
      require("fs").unlinkSync(resultFile);
    } catch {
      output = "{}";
    }
    const parsed = parseAgentOutput(output);

    // Update history
    history[target.id] = today;

    if (parsed.robust) {
      console.log(`   ✓ ROBUST — No credible counter-arguments found.`);
      robustCount++;
    } else if (parsed.counter_arguments.length > 0) {
      console.log(`   ⚡ ${parsed.counter_arguments.length} counter-arguments found!`);

      const bounty: Bounty = {
        id: generateBountyId(),
        type: "red-team",
        target_principle: target.id,
        principle_title: target.title,
        counter_arguments: parsed.counter_arguments,
        diversity_gaps: parsed.diversity_gaps,
        created_at: today,
        status: "pending",
      };

      bounties.push(bounty);
      challengesFound++;

      for (const ca of parsed.counter_arguments) {
        console.log(`     [${ca.threat_level}] ${ca.author}: ${ca.summary.slice(0, 80)}...`);
      }
    } else {
      console.log(`   ○ Agent returned no counter-arguments (may have encountered errors).`);
    }

    if (parsed.diversity_gaps.length > 0) {
      console.log(`   Diversity gaps: ${parsed.diversity_gaps.join(", ")}`);
    }
  }

  // Save
  saveBounties(bounties);
  saveHistory(history);

  // Update flags.md with red team section
  const flagsPath = join(META_DIR, "flags.md");
  if (existsSync(flagsPath)) {
    let flags = readFileSync(flagsPath, "utf-8");

    // Remove old RED TEAM section if exists
    flags = flags.replace(/## RED TEAM BOUNTIES[\s\S]*?(?=## |$)/, "");

    // Add new section
    const pendingBounties = bounties.filter(
      (b) => b.type === "red-team" && b.status === "pending"
    );

    if (pendingBounties.length > 0) {
      let section = "## RED TEAM BOUNTIES\n";
      for (const b of pendingBounties) {
        const strongest = b.counter_arguments?.[0];
        section += `- ${b.target_principle} "${b.principle_title?.slice(0, 60)}..."\n`;
        section += `  CHALLENGED BY: ${b.counter_arguments?.length} sources.`;
        if (strongest) {
          section += ` Strongest: ${strongest.author} — ${strongest.summary.slice(0, 80)}...`;
        }
        section += "\n";
        section += `  ACTION: Run /ingest on counter-argument URLs to stress-test.\n`;
      }
      flags = flags.trimEnd() + "\n\n" + section;
    }

    writeFileSync(flagsPath, flags, "utf-8");
  }

  console.log(`
── Red Team Summary ──
  Principles challenged: ${targets.length}
  Counter-arguments found: ${challengesFound} principles challenged
  Robust (no challenges): ${robustCount}
  Bounties written: ${challengesFound} (→ meta/bounties.json)
  History updated: ${targets.length} principles marked as tested
`);
}

main().catch((err) => {
  console.error("Red Team error:", err);
  process.exit(1);
});
