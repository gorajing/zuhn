#!/usr/bin/env npx tsx

import { readFileSync, existsSync } from "node:fs";
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import matter from "gray-matter";
import { DecisionInput } from "./schemas/empirical.js";
import type { DecisionInputData } from "./schemas/empirical.js";
import { generateDecisionId } from "./lib/generate-id.js";
import { slugify } from "./lib/ingest/slug.js";
import { safeLogEntry } from "./lib/log.js";

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");

// ─── Write Result ───────────────────────────────────────────────────

export interface CreatedDecision {
  id: string;
  context: string;
  choice: string;
  outcome_date: string;
}

export interface WriteDecisionsResult {
  created: number;
  skipped: number;
  files: string[];
  errors: string[];
  createdDecisions: CreatedDecision[];
}

export type { DecisionInputData };

// ─── Helpers ─────────────────────────────────────────────────────────

function usage(): never {
  console.error("Usage: decide.ts --file <JSON_FILE> [--post-ingest]");
  console.error("");
  console.error("  --file         Path to JSON file with decisions array");
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

// ─── Write Decisions ────────────────────────────────────────────────

export async function writeDecisions(
  input: DecisionInputData,
  kbRoot: string
): Promise<WriteDecisionsResult> {
  const result: WriteDecisionsResult = {
    created: 0,
    skipped: 0,
    files: [],
    errors: [],
    createdDecisions: [],
  };

  const today = todayISO();
  const decisionsDir = join(kbRoot, "decisions");
  await mkdir(decisionsDir, { recursive: true });

  for (let index = 0; index < input.decisions.length; index++) {
    const dec = input.decisions[index];

    try {
      const salt = `${Date.now()}-${index}`;
      const id = generateDecisionId(dec.context, salt);
      let slug = slugify(dec.context);

      let filePath = join(decisionsDir, `${slug}.md`);
      if (existsSync(filePath)) {
        const existingRaw = readFileSync(filePath, "utf-8");
        const { data: existingData } = matter(existingRaw);
        const existingContext = (existingData.context as string)?.trim() ?? "";
        if (existingContext === dec.context.trim()) {
          console.log(`  SKIP duplicate: "${dec.context.slice(0, 60)}" — decision already exists`);
          result.skipped++;
          continue;
        }
        const hashSuffix = id.split("-").pop()!.toLowerCase();
        slug = `${slug}-${hashSuffix}`;
        filePath = join(decisionsDir, `${slug}.md`);
      }

      const frontmatter: Record<string, unknown> = {
        id,
        date: today,
        context: dec.context,
        options: dec.options,
        choice: dec.choice,
        informed_by: dec.informed_by,
        outcome_date: dec.outcome_date,
        status: "pending",
        tags: dec.tags || [],
      };

      const body = dec.body || "";
      const fileContent = matter.stringify(body, frontmatter);
      await writeFile(filePath, fileContent, "utf-8");

      console.log(`  -> ${filePath}`);
      result.files.push(filePath);
      result.created++;
      result.createdDecisions.push({
        id,
        context: dec.context,
        choice: dec.choice,
        outcome_date: dec.outcome_date,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      result.errors.push(`Decision "${dec.context}": ${msg}`);
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

  const validation = DecisionInput.safeParse(parsed);
  if (!validation.success) {
    console.error("Error: Decision JSON failed schema validation:");
    for (const issue of validation.error.issues) {
      const field = issue.path.join(".");
      console.error(`  ${field}: ${issue.message}`);
    }
    process.exit(1);
  }

  const input = validation.data;
  console.log(`Creating ${input.decisions.length} decision(s)...\n`);

  const writeResult = await writeDecisions(input, KB_ROOT);
  const { created, skipped, errors, createdDecisions } = writeResult;

  console.log(`\nCreated: ${created} decision file(s)`);
  if (skipped > 0) {
    console.log(`Skipped: ${skipped} duplicate(s)`);
  }
  if (errors.length > 0) {
    console.log(`Errors: ${errors.length}`);
    for (const err of errors) {
      console.error(`  ERROR: ${err}`);
    }
  }

  // Log each created decision to meta/log.md — one entry per ID
  for (const dec of createdDecisions) {
    const contextSnippet = dec.context.slice(0, 100);
    const choiceSnippet = dec.choice.slice(0, 80);
    safeLogEntry({
      action: "decide",
      scope: dec.id,
      body: `"${contextSnippet}" → chose "${choiceSnippet}" (review ${dec.outcome_date})`,
    });
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
  process.argv[1]?.endsWith("decide.ts") ||
  process.argv[1]?.includes("decide");

if (isDirectRun) {
  main().catch((err) => {
    console.error("decide.ts failed:", err);
    process.exit(1);
  });
}
