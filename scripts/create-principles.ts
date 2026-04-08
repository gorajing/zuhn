#!/usr/bin/env npx tsx

import { readFileSync, existsSync } from "node:fs";
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { z } from "zod";
import matter from "gray-matter";
import { generatePrincipleId } from "./lib/generate-id.js";
import { slugify } from "./lib/ingest/slug.js";
import { safeLogEntry } from "./lib/log.js";

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");

// ─── Schema ──────────────────────────────────────────────────────────

const LineageInput = z.object({
  compressed_at: z.string().optional(),
  source_insights: z.array(z.object({
    id: z.string(),
    relation: z.enum(["SUPPORTS", "CONTRADICTS", "EXTENDS", "TRANSFERS_TO", "REFINES", "CHALLENGES"]).optional(),
  })).optional(),
  surprise_score: z.number().optional(),
  compression_trigger: z.string().optional(),
  pagerank_seed: z.string().optional(),
}).optional();

const PrincipleInput = z.object({
  domain: z.string(),
  title: z.string(),
  summary: z.string(),
  confidence: z.enum(["pending", "low", "medium", "high", "very_high"]),
  supporting_insights: z.array(z.string()),
  tags: z.array(z.string()),
  lineage: LineageInput,
});

const PrinciplesFile = z.object({
  principles: z.array(PrincipleInput),
});

export type PrincipleInputData = z.infer<typeof PrincipleInput>;
export type PrinciplesFileData = z.infer<typeof PrinciplesFile>;

// ─── Write Result ───────────────────────────────────────────────────

export interface WritePrinciplesResult {
  created: number;
  skipped: number;
  files: string[];
  errors: string[];
}

// ─── Helpers ─────────────────────────────────────────────────────────

function usage(): never {
  console.error("Usage: create-principles.ts --file <JSON_FILE> [--post-ingest]");
  console.error("");
  console.error("  --file         Path to JSON file with principles array");
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
      case "--help":
      case "-h":
        usage();
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

// ─── Write Principles ───────────────────────────────────────────────

export async function writePrinciples(
  input: PrinciplesFileData,
  kbRoot: string
): Promise<WritePrinciplesResult> {
  const result: WritePrinciplesResult = {
    created: 0,
    skipped: 0,
    files: [],
    errors: [],
  };

  const today = todayISO();

  for (let index = 0; index < input.principles.length; index++) {
    const principle: PrincipleInputData = input.principles[index];

    try {
      const salt = `${Date.now()}-${index}`;
      const id = generatePrincipleId(principle.title, salt);
      let slug = slugify(principle.title);

      const domainDir = join(kbRoot, "principles", principle.domain);
      let filePath = join(domainDir, `${slug}.md`);

      // Check slug collision: skip duplicates, suffix only for true collisions
      if (existsSync(filePath)) {
        const existingRaw = readFileSync(filePath, "utf-8");
        const { data: existingData } = matter(existingRaw);
        const existingTitle =
          (existingData.title as string)?.trim() ?? "";
        if (existingTitle === principle.title.trim()) {
          console.log(
            `  SKIP duplicate: "${principle.title.slice(0, 60)}" — principle with this title already exists`
          );
          result.skipped++;
          continue;
        }
        // True slug collision (different title, same slug) — add hash suffix
        const hashSuffix = id.split("-").pop()!.toLowerCase();
        slug = `${slug}-${hashSuffix}`;
        filePath = join(domainDir, `${slug}.md`);
      }

      // Create directory
      await mkdir(domainDir, { recursive: true });

      // Build frontmatter
      const frontmatter: Record<string, unknown> = {
        id,
        domain: principle.domain,
        title: principle.title,
        summary: principle.summary,
        confidence: principle.confidence,
        supporting_insights: principle.supporting_insights,
        supporting_count: principle.supporting_insights.length,
        tags: principle.tags,
        date_created: today,
        last_reviewed: today,
        resolutions: {
          one_line: principle.title,
          standard: principle.summary,
        },
      };

      // Add provenance lineage if provided
      if (principle.lineage) {
        frontmatter.lineage = {
          compressed_at: principle.lineage.compressed_at ?? today,
          source_insights: principle.lineage.source_insights ?? principle.supporting_insights.map(id => ({ id })),
          ...(principle.lineage.surprise_score != null && { surprise_score: principle.lineage.surprise_score }),
          ...(principle.lineage.compression_trigger && { compression_trigger: principle.lineage.compression_trigger }),
          ...(principle.lineage.pagerank_seed && { pagerank_seed: principle.lineage.pagerank_seed }),
        };
      }

      // Write using gray-matter stringify
      const body = principle.summary;
      const fileContent = matter.stringify(body, frontmatter);
      await writeFile(filePath, fileContent, "utf-8");

      result.files.push(filePath);
      result.created++;
      console.log(`  -> ${filePath}`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      result.errors.push(`Principle "${principle.title}": ${msg}`);
    }
  }

  return result;
}

// ─── Main ────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { file, postIngest } = parseArgs(process.argv);

  // 1. Read the JSON file
  let raw: string;
  try {
    raw = readFileSync(file, "utf-8");
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`Error: Cannot read file "${file}" — ${msg}`);
    process.exit(1);
  }

  // 2. Strip markdown code fences (Claude RLHF habit)
  raw = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "").trim();

  // 3. Parse JSON
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

  // 4. Validate against schema
  const validation = PrinciplesFile.safeParse(parsed);
  if (!validation.success) {
    console.error("Error: Principles JSON failed schema validation:");
    for (const issue of validation.error.issues) {
      const field = issue.path.join(".");
      console.error(`  ${field}: ${issue.message}`);
    }
    process.exit(1);
  }

  const input = validation.data;
  console.log(`Creating ${input.principles.length} principle(s)...\n`);

  const { created, skipped, files, errors } = await writePrinciples(input, KB_ROOT);

  // 6. Summary
  console.log(`\nCreated: ${created} principle file(s)`);
  if (skipped > 0) {
    console.log(`Skipped: ${skipped} duplicate(s)`);
  }
  if (errors.length > 0) {
    console.log(`Errors: ${errors.length}`);
    for (const err of errors) {
      console.error(`  ERROR: ${err}`);
    }
  }

  // 6b. Log compress events to meta/log.md
  // Principles can span multiple domains in a single run (e.g. the
  // Tier 2 compression marathon wrote across psychology, investing,
  // ai-development, and startups). We emit one log entry per domain
  // so grep targets like "compress | psychology" stay useful.
  if (created > 0) {
    const byDomain = new Map<string, number>();
    for (const p of input.principles) {
      byDomain.set(p.domain, (byDomain.get(p.domain) || 0) + 1);
    }
    for (const [domain, count] of byDomain) {
      safeLogEntry({
        action: "compress",
        scope: `${domain}/*`,
        body: `Created ${count} principle${count === 1 ? "" : "s"} in ${domain}.`,
      });
    }
  }

  // 7. Run post-ingest if requested
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
  process.argv[1]?.endsWith("create-principles.ts") ||
  process.argv[1]?.includes("create-principles");

if (isDirectRun) {
  main().catch((err) => {
    console.error("create-principles.ts failed:", err);
    process.exit(1);
  });
}
