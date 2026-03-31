#!/usr/bin/env npx tsx

import { readFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import { initDb } from "./lib/db";
import { InsightFrontmatter } from "./schemas/frontmatter";

const PROJECT_ROOT = join(__dirname, "..");

// ─── Input Schema ────────────────────────────────────────────────────

export const StancesFile = z.object({
  stances: z.array(
    z.object({
      id: z.string(),
      stance: z.string(),
    })
  ),
});

export type StancesFileData = z.infer<typeof StancesFile>;

// ─── CLI Helpers ─────────────────────────────────────────────────────

function usage(): never {
  console.error(
    "Usage: backfill-stances.ts [--list] [--file <JSON_FILE> [--dry-run]] [--clear-cache]"
  );
  console.error("");
  console.error("  --list         List insights missing stances (outputs JSON to stdout)");
  console.error("  --file <path>  Apply stances from JSON file");
  console.error("  --dry-run      Show changes without writing (requires --file)");
  console.error("  --clear-cache  Wipe tension_judgments table");
  process.exit(1);
}

function parseArgs(argv: string[]): {
  list: boolean;
  file: string;
  dryRun: boolean;
  clearCache: boolean;
} {
  let list = false;
  let file = "";
  let dryRun = false;
  let clearCache = false;

  for (let i = 2; i < argv.length; i++) {
    switch (argv[i]) {
      case "--list":
        list = true;
        break;
      case "--file":
        file = argv[++i] || "";
        break;
      case "--dry-run":
        dryRun = true;
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

  // At least one mode must be specified
  if (!list && !file && !clearCache) usage();

  return { list, file, dryRun, clearCache };
}

// ─── Mode: --list ────────────────────────────────────────────────────

function runList(db: ReturnType<typeof initDb>): void {
  const rows = db
    .prepare(
      "SELECT id, title, one_line, file_path FROM insights WHERE stance IS NULL ORDER BY id ASC"
    )
    .all() as { id: string; title: string; one_line: string; file_path: string }[];

  const output = {
    missing_count: rows.length,
    insights: rows.map((r) => ({
      id: r.id,
      title: r.title,
      one_line: r.one_line,
      file_path: r.file_path,
    })),
  };

  process.stdout.write(JSON.stringify(output, null, 2) + "\n");
}

// ─── Mode: --file ────────────────────────────────────────────────────

function runApply(
  db: ReturnType<typeof initDb>,
  file: string,
  dryRun: boolean
): void {
  // 1. Read JSON file
  let raw: string;
  try {
    raw = readFileSync(file, "utf-8");
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`Error: Cannot read file "${file}" — ${msg}`);
    process.exit(1);
  }

  // 2. Strip markdown code fences (Claude RLHF habit)
  raw = raw
    .replace(/^```(?:json)?\s*/m, "")
    .replace(/^```\s*$/m, "")
    .trim();

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
  const validation = StancesFile.safeParse(parsed);
  if (!validation.success) {
    console.error("Error: Stances JSON failed schema validation:");
    for (const issue of validation.error.issues) {
      const field = issue.path.join(".");
      console.error(`  ${field}: ${issue.message}`);
    }
    process.exit(1);
  }

  const input = validation.data;
  const total = input.stances.length;

  if (dryRun) {
    console.log(`[DRY RUN] Would apply ${total} stance(s):\n`);
  } else {
    console.log(`Applying ${total} stance(s)...\n`);
  }

  // 5. Prepare DB statements
  const lookupRow = db.prepare(
    "SELECT id, file_path FROM insights WHERE id = ?"
  );
  const updateStance = db.prepare(
    "UPDATE insights SET stance = ? WHERE id = ?"
  );

  let updated = 0;
  let skipped = 0;
  const warnings: string[] = [];

  for (let i = 0; i < input.stances.length; i++) {
    const entry = input.stances[i];
    const prefix = `[${i + 1}/${total}]`;

    // 6. Look up file_path from SQLite
    const row = lookupRow.get(entry.id) as
      | { id: string; file_path: string }
      | undefined;

    if (!row) {
      const warn = `${prefix} WARNING: ${entry.id} not found in SQLite — skipping`;
      console.warn(warn);
      warnings.push(warn);
      skipped++;
      continue;
    }

    // Resolve absolute path
    const filePath = row.file_path.startsWith("/")
      ? row.file_path
      : join(PROJECT_ROOT, row.file_path);

    // 7. Check file exists on disk
    if (!existsSync(filePath)) {
      const warn = `${prefix} WARNING: ${entry.id} file not found on disk (${filePath}) — skipping`;
      console.warn(warn);
      warnings.push(warn);
      skipped++;
      continue;
    }

    // 8. Read and parse the markdown file
    let fileContent: string;
    try {
      fileContent = readFileSync(filePath, "utf-8");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      const warn = `${prefix} WARNING: Cannot read ${filePath} — ${msg}`;
      console.warn(warn);
      warnings.push(warn);
      skipped++;
      continue;
    }

    const parsed = matter(fileContent);
    const data = parsed.data as Record<string, unknown>;

    // 9. Add stance to frontmatter data
    data.stance = entry.stance;

    // 10. Validate round-trip with InsightFrontmatter
    const roundTrip = InsightFrontmatter.safeParse(data);
    if (!roundTrip.success) {
      const issues = roundTrip.error.issues
        .map((iss) => `${iss.path.join(".")}: ${iss.message}`)
        .join("; ");
      const warn = `${prefix} WARNING: ${entry.id} failed validation after adding stance — skipping (${issues})`;
      console.warn(warn);
      warnings.push(warn);
      skipped++;
      continue;
    }

    if (dryRun) {
      console.log(`${prefix} [DRY RUN] ${entry.id} — "${entry.stance}"`);
      updated++;
      continue;
    }

    // 11. Write back with matter.stringify
    try {
      const newContent = matter.stringify(parsed.content, data);
      writeFileSync(filePath, newContent, "utf-8");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      const warn = `${prefix} WARNING: Cannot write ${filePath} — ${msg}`;
      console.warn(warn);
      warnings.push(warn);
      skipped++;
      continue;
    }

    // 12. Update SQLite
    updateStance.run(entry.stance, entry.id);

    console.log(`${prefix} Updated ${entry.id} — "${entry.stance}"`);
    updated++;
  }

  // Summary
  console.log("");
  if (dryRun) {
    console.log(`[DRY RUN] Would update: ${updated} insight(s)`);
  } else {
    console.log(`Updated: ${updated} insight(s)`);
  }
  if (skipped > 0) {
    console.log(`Skipped: ${skipped} insight(s)`);
  }
  if (warnings.length > 0) {
    console.log(`Warnings: ${warnings.length}`);
  }
}

// ─── Mode: --clear-cache ─────────────────────────────────────────────

function runClearCache(db: ReturnType<typeof initDb>): void {
  const result = db.prepare("DELETE FROM tension_judgments").run();
  console.log(
    `Cleared tension_judgments cache (${result.changes} row(s) deleted).`
  );
}

// ─── Main ────────────────────────────────────────────────────────────

function main(): void {
  const { list, file, dryRun, clearCache } = parseArgs(process.argv);

  const db = initDb();

  try {
    if (clearCache) {
      runClearCache(db);
    }

    if (list) {
      runList(db);
    } else if (file) {
      runApply(db, file, dryRun);
    }
  } finally {
    db.close();
  }
}

// Only run main when executed directly (not when imported for testing)
const isDirectRun =
  process.argv[1]?.endsWith("backfill-stances.ts") ||
  process.argv[1]?.includes("backfill-stances");

if (isDirectRun) {
  main();
}
