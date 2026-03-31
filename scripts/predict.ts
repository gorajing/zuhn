#!/usr/bin/env npx tsx

import { readFileSync, existsSync } from "node:fs";
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import matter from "gray-matter";
import { PredictionInput } from "./schemas/empirical.js";
import type { PredictionInputData } from "./schemas/empirical.js";
import { generatePredictionId } from "./lib/generate-id.js";
import { slugify } from "./lib/ingest/slug.js";

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");

// ─── Write Result ───────────────────────────────────────────────────

export interface WritePredictionsResult {
  created: number;
  skipped: number;
  files: string[];
  errors: string[];
}

export type { PredictionInputData };

// ─── Helpers ─────────────────────────────────────────────────────────

function usage(): never {
  console.error("Usage: predict.ts --file <JSON_FILE> [--post-ingest]");
  console.error("");
  console.error("  --file         Path to JSON file with predictions array");
  console.error("  --post-ingest  Run post-ingest pipeline after creation");
  process.exit(1);
}

function parseArgs(argv: string[]): {
  file: string;
  postIngest: boolean;
} {
  let file = "";
  let postIngest = false;

  for (let i = 2; i < argv.length; i++) {
    switch (argv[i]) {
      case "--file":
        file = argv[++i] || "";
        break;
      case "--post-ingest":
        postIngest = true;
        break;
    }
  }

  if (!file) usage();
  return { file, postIngest };
}

function todayISO(): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

// ─── Write Predictions ──────────────────────────────────────────────

export async function writePredictions(
  input: PredictionInputData,
  kbRoot: string
): Promise<WritePredictionsResult> {
  const result: WritePredictionsResult = {
    created: 0,
    skipped: 0,
    files: [],
    errors: [],
  };

  const today = todayISO();
  const predictionsDir = join(kbRoot, "predictions");
  await mkdir(predictionsDir, { recursive: true });

  for (let index = 0; index < input.predictions.length; index++) {
    const pred = input.predictions[index];

    try {
      const salt = `${Date.now()}-${index}`;
      const id = generatePredictionId(pred.claim, salt);
      let slug = slugify(pred.claim);

      let filePath = join(predictionsDir, `${slug}.md`);
      if (existsSync(filePath)) {
        const existingRaw = readFileSync(filePath, "utf-8");
        const { data: existingData } = matter(existingRaw);
        const existingClaim = (existingData.claim as string)?.trim() ?? "";
        if (existingClaim === pred.claim.trim()) {
          console.log(`  SKIP duplicate: "${pred.claim.slice(0, 60)}" — prediction already exists`);
          result.skipped++;
          continue;
        }
        const hashSuffix = id.split("-").pop()!.toLowerCase();
        slug = `${slug}-${hashSuffix}`;
        filePath = join(predictionsDir, `${slug}.md`);
      }

      const frontmatter: Record<string, unknown> = {
        id,
        derived_from: pred.derived_from,
        claim: pred.claim,
        falsifiable_metric: pred.falsifiable_metric,
        deadline: pred.deadline,
        status: "active",
        date_created: today,
        tags: pred.tags || [],
      };

      const body = pred.body || "";
      const fileContent = matter.stringify(body, frontmatter);
      await writeFile(filePath, fileContent, "utf-8");

      console.log(`  -> ${filePath}`);
      result.files.push(filePath);
      result.created++;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      result.errors.push(`Prediction "${pred.claim}": ${msg}`);
    }
  }

  return result;
}

// ─── Main ────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { file, postIngest } = parseArgs(process.argv);

  let raw: string;
  try {
    raw = readFileSync(file, "utf-8");
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`Error: Cannot read file "${file}" — ${msg}`);
    process.exit(1);
  }

  raw = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "").trim();

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    console.error("Error: Malformed JSON. Check the file and try again.");
    process.exit(1);
  }

  const validation = PredictionInput.safeParse(parsed);
  if (!validation.success) {
    console.error("Error: Prediction JSON failed schema validation:");
    for (const issue of validation.error.issues) {
      const field = issue.path.join(".");
      console.error(`  ${field}: ${issue.message}`);
    }
    process.exit(1);
  }

  const input = validation.data;
  console.log(`Creating ${input.predictions.length} prediction(s)...\n`);

  const { created, skipped, files, errors } = await writePredictions(input, KB_ROOT);

  console.log(`\nCreated: ${created} prediction file(s)`);
  if (skipped > 0) {
    console.log(`Skipped: ${skipped} duplicate(s)`);
  }
  if (errors.length > 0) {
    console.log(`Errors: ${errors.length}`);
    for (const err of errors) {
      console.error(`  ERROR: ${err}`);
    }
  }

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
  process.argv[1]?.endsWith("predict.ts") ||
  process.argv[1]?.includes("predict");

if (isDirectRun) {
  main().catch((err) => {
    console.error("predict.ts failed:", err);
    process.exit(1);
  });
}
