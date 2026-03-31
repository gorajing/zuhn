#!/usr/bin/env npx tsx

import { readFileSync, existsSync, writeFileSync } from "node:fs";
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { z } from "zod";
import matter from "gray-matter";
import { initDb } from "./lib/db";
import { generateTensionId } from "./lib/generate-id.js";
import { slugify } from "./lib/ingest/slug.js";

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");
const TENSIONS_DIR = join(KB_ROOT, "tensions");
const CANDIDATES_PATH = join(KB_ROOT, "meta", "tension-candidates.json");

// ─── Input Schemas ──────────────────────────────────────────────────

const TensionEntry = z.object({
  id_a: z.string(),
  id_b: z.string(),
  stance_a: z.string(),
  stance_b: z.string(),
  reason: z.string(),
});

const NonTensionEntry = z.object({
  id_a: z.string(),
  id_b: z.string(),
  reason: z.string(),
});

const TensionJudgmentsFile = z.object({
  tensions: z.array(TensionEntry),
  non_tensions: z.array(NonTensionEntry),
});

// ─── Exported Helpers ───────────────────────────────────────────────

export const CONF_WEIGHTS: Record<string, number> = {
  pending: 0.1,
  low: 0.3,
  medium: 0.6,
  high: 0.9,
  very_high: 1.0,
};

export function computeSeverity(
  confA: string,
  confB: string
): "mild" | "moderate" | "strong" {
  const wA = CONF_WEIGHTS[confA] ?? 0.1;
  const wB = CONF_WEIGHTS[confB] ?? 0.1;
  const score = wA * wB;
  if (score >= 0.6) return "strong";
  if (score >= 0.3) return "moderate";
  return "mild";
}

export function stanceHash(a: string, b: string): string {
  const sorted = [a, b].sort().join("|");
  return createHash("sha256").update(sorted).digest("hex");
}

export function canonicalPairKey(a: string, b: string): string {
  return [a, b].sort().join("|");
}

// ─── CLI Helpers ────────────────────────────────────────────────────

function usage(): never {
  console.error(
    "Usage: create-tensions.ts --file <JSON_FILE> [--post-ingest] [--clear-cache]"
  );
  console.error("");
  console.error("  --file         Path to JSON file with tension judgments");
  console.error("  --post-ingest  Run post-ingest pipeline after creation");
  console.error("  --clear-cache  Wipe tension_judgments table before processing");
  process.exit(1);
}

function parseArgs(argv: string[]): {
  file: string;
  postIngest: boolean;
  clearCache: boolean;
} {
  let file = "";
  let postIngest = false;
  let clearCache = false;

  for (let i = 2; i < argv.length; i++) {
    switch (argv[i]) {
      case "--file":
        file = argv[++i] || "";
        break;
      case "--post-ingest":
        postIngest = true;
        break;
      case "--clear-cache":
        clearCache = true;
        break;
      case "--help":
      case "-h":
        usage();
        break;
    }
  }

  if (!file) usage();
  return { file, postIngest, clearCache };
}

// ─── Main ───────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { file, postIngest, clearCache } = parseArgs(process.argv);

  // 1. Open DB
  const db = initDb();

  // 1a. Clear cache if requested
  if (clearCache) {
    db.exec("DELETE FROM tension_judgments");
    console.log("Cleared tension_judgments cache.");
  }

  // 2. Read the JSON file
  let raw: string;
  try {
    raw = readFileSync(file, "utf-8");
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`Error: Cannot read file "${file}" — ${msg}`);
    process.exit(1);
  }

  // 3. Strip markdown code fences (Claude RLHF habit)
  raw = raw
    .replace(/^```(?:json)?\s*/m, "")
    .replace(/^```\s*$/m, "")
    .trim();

  // 4. Parse JSON
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err: unknown) {
    if (err instanceof SyntaxError) {
      console.error(
        "Error: Malformed JSON — likely truncated. Check the file and try again."
      );
    } else {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`Error: JSON parse failed — ${msg}`);
    }
    process.exit(1);
  }

  // 5. Validate against schema
  const validation = TensionJudgmentsFile.safeParse(parsed);
  if (!validation.success) {
    console.error("Error: Tensions JSON failed schema validation:");
    for (const issue of validation.error.issues) {
      const field = issue.path.join(".");
      console.error(`  ${field}: ${issue.message}`);
    }
    process.exit(1);
  }

  const input = validation.data;
  const today = new Date().toISOString().split("T")[0];
  let created = 0;
  let skippedMild = 0;
  let cachedNonTensions = 0;
  const files: string[] = [];
  const errors: string[] = [];
  const processedPairKeys: string[] = [];

  console.log(
    `Processing ${input.tensions.length} tension(s) and ${input.non_tensions.length} non-tension(s)...\n`
  );

  // 6. Prepare DB statements
  const lookupConfidence = db.prepare(
    "SELECT confidence FROM insights WHERE id = ?"
  );
  const upsertJudgment = db.prepare(`
    INSERT INTO tension_judgments (pair_key, is_tension, severity, reason, stance_hash, judged_at)
    VALUES (@pair_key, @is_tension, @severity, @reason, @stance_hash, @judged_at)
    ON CONFLICT(pair_key) DO UPDATE SET
      is_tension = excluded.is_tension,
      severity = excluded.severity,
      reason = excluded.reason,
      stance_hash = excluded.stance_hash,
      judged_at = excluded.judged_at
  `);

  // 7. Process tensions
  for (let index = 0; index < input.tensions.length; index++) {
    const t = input.tensions[index];

    try {
      // Look up confidence from SQLite
      const rowA = lookupConfidence.get(t.id_a) as
        | { confidence: string }
        | undefined;
      const rowB = lookupConfidence.get(t.id_b) as
        | { confidence: string }
        | undefined;

      const confA = rowA?.confidence ?? "pending";
      const confB = rowB?.confidence ?? "pending";
      const severity = computeSeverity(confA, confB);
      const pairKey = canonicalPairKey(t.id_a, t.id_b);
      const hash = stanceHash(t.stance_a, t.stance_b);

      processedPairKeys.push(pairKey);

      if (severity === "mild") {
        // Log but do NOT create file, do NOT cache
        skippedMild++;
        console.log(
          `  [MILD] ${t.id_a} vs ${t.id_b} — skipped (conf: ${confA}/${confB})`
        );
        continue;
      }

      // Create tension file
      const title = `${t.stance_a} vs. ${t.stance_b}`;
      const salt = `${Date.now()}-${index}`;
      const id = generateTensionId(title, salt);
      const slug = slugify(title);

      await mkdir(TENSIONS_DIR, { recursive: true });

      let filePath = join(TENSIONS_DIR, `${slug}.md`);
      if (existsSync(filePath)) {
        const existingRaw = readFileSync(filePath, "utf-8");
        const { data: existingData } = matter(existingRaw);
        const existingTitle = (existingData.title as string)?.trim() ?? "";
        if (existingTitle === title.trim()) {
          console.log(`  SKIP duplicate: "${title.slice(0, 60)}" — tension already exists`);
          continue;
        }
        const hashSuffix = id.split("-").pop()!.toLowerCase();
        filePath = join(TENSIONS_DIR, `${slug}-${hashSuffix}.md`);
      }

      // Build frontmatter
      const frontmatter: Record<string, unknown> = {
        id,
        title,
        status: "unresolved",
        severity,
        type: "stance",
        date_created: today,
        stance_a: t.stance_a,
        stance_b: t.stance_b,
        side_a: [t.id_a],
        side_b: [t.id_b],
        reason: t.reason,
      };

      const body = [
        `**Side A:** "${t.stance_a}"`,
        `**Side B:** "${t.stance_b}"`,
        `**Reason:** ${t.reason}`,
        `**Resolution:** [To be resolved by Claude during reasoning sessions]`,
      ].join("\n");

      const fileContent = matter.stringify(body, frontmatter);
      await writeFile(filePath, fileContent, "utf-8");

      files.push(filePath);
      created++;
      console.log(`  [${severity.toUpperCase()}] ${filePath}`);

      // Cache in tension_judgments
      upsertJudgment.run({
        pair_key: pairKey,
        is_tension: 1,
        severity,
        reason: t.reason,
        stance_hash: hash,
        judged_at: today,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      errors.push(`Tension ${t.id_a} vs ${t.id_b}: ${msg}`);
    }
  }

  // 8. Process non-tensions — cache with is_tension = 0
  for (const nt of input.non_tensions) {
    try {
      const pairKey = canonicalPairKey(nt.id_a, nt.id_b);
      processedPairKeys.push(pairKey);

      upsertJudgment.run({
        pair_key: pairKey,
        is_tension: 0,
        severity: null,
        reason: nt.reason,
        stance_hash: null,
        judged_at: today,
      });
      cachedNonTensions++;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      errors.push(`Non-tension ${nt.id_a} vs ${nt.id_b}: ${msg}`);
    }
  }

  // 9. Remove processed candidates from meta/tension-candidates.json
  if (existsSync(CANDIDATES_PATH)) {
    try {
      const candidatesRaw = readFileSync(CANDIDATES_PATH, "utf-8");
      const candidates = JSON.parse(candidatesRaw);

      if (Array.isArray(candidates.candidates)) {
        const processedSet = new Set(processedPairKeys);
        candidates.candidates = candidates.candidates.filter(
          (c: { pair_key?: string; id_a?: string; id_b?: string }) => {
            const key =
              c.pair_key ?? canonicalPairKey(c.id_a ?? "", c.id_b ?? "");
            return !processedSet.has(key);
          }
        );
        candidates.candidate_count = candidates.candidates.length;
        writeFileSync(
          CANDIDATES_PATH,
          JSON.stringify(candidates, null, 2) + "\n",
          "utf-8"
        );
        console.log(
          `\nRemoved processed pairs from tension-candidates.json (${processedPairKeys.length} processed, ${candidates.candidates.length} remaining)`
        );
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn(
        `Warning: Could not update tension-candidates.json — ${msg}`
      );
    }
  }

  db.close();

  // 10. Summary
  console.log(`\nCreated: ${created} tension file(s)`);
  if (skippedMild > 0) {
    console.log(`Skipped (mild): ${skippedMild}`);
  }
  if (cachedNonTensions > 0) {
    console.log(`Cached non-tensions: ${cachedNonTensions}`);
  }
  if (errors.length > 0) {
    console.log(`Errors: ${errors.length}`);
    for (const err of errors) {
      console.error(`  ERROR: ${err}`);
    }
  }

  // 11. Run post-ingest if requested
  // NOTE: uses execFileSync (not exec) to avoid shell injection — safe by design
  if (postIngest) {
    console.log("\nRunning post-ingest pipeline...");
    try {
      execFileSync("npx", ["tsx", "scripts/post-ingest.ts"], {
        stdio: "inherit",
        cwd: PROJECT_ROOT,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`Post-ingest failed: ${msg}`);
      process.exit(1);
    }
  }
}

// Only run main when executed directly (not when imported for testing)
const isDirectRun =
  process.argv[1]?.endsWith("create-tensions.ts") ||
  process.argv[1]?.includes("create-tensions");

if (isDirectRun) {
  main().catch((err) => {
    console.error("create-tensions.ts failed:", err);
    process.exit(1);
  });
}
