#!/usr/bin/env npx tsx

/**
 * Merge one topic into another within the same domain.
 * Moves all .md files, updates YAML frontmatter (topic field),
 * and removes the source directory if empty.
 *
 * Usage: merge-topics.ts --source <domain/topic> --target <domain/topic> [--dry-run]
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, unlinkSync, rmdirSync } from "node:fs";
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");

function usage(): never {
  console.error("Usage: merge-topics.ts --source <domain/topic> --target <domain/topic> [--dry-run]");
  console.error("");
  console.error("  --source   Source topic to merge FROM (will be emptied)");
  console.error("  --target   Target topic to merge INTO");
  console.error("  --dry-run  Preview changes without modifying files");
  process.exit(1);
}

function parseArgs(argv: string[]): {
  source: string;
  target: string;
  dryRun: boolean;
} {
  let source = "";
  let target = "";
  let dryRun = false;

  for (let i = 2; i < argv.length; i++) {
    switch (argv[i]) {
      case "--source":
        source = argv[++i] || "";
        break;
      case "--target":
        target = argv[++i] || "";
        break;
      case "--dry-run":
        dryRun = true;
        break;
    }
  }

  if (!source || !target) usage();
  return { source, target, dryRun };
}

// ─── Main ────────────────────────────────────────────────────────────

const { source, target, dryRun } = parseArgs(process.argv);

const [sourceDomain, sourceTopic] = source.split("/");
const [targetDomain, targetTopic] = target.split("/");

if (!sourceDomain || !sourceTopic || !targetDomain || !targetTopic) {
  console.error("Error: both --source and --target must be domain/topic format");
  process.exit(1);
}

const sourceDir = join(KB_ROOT, "domains", sourceDomain, sourceTopic);
const targetDir = join(KB_ROOT, "domains", targetDomain, targetTopic);

if (!existsSync(sourceDir)) {
  console.error(`Error: source directory does not exist: ${sourceDir}`);
  process.exit(1);
}

// Create target directory if needed
if (!dryRun) {
  mkdirSync(targetDir, { recursive: true });
}

const files = readdirSync(sourceDir).filter(
  (f) => f.endsWith(".md") && !f.startsWith("_")
);

if (files.length === 0) {
  console.log(`No .md files in ${source}. Nothing to merge.`);
  process.exit(0);
}

console.log(`Merging ${source} → ${target} (${files.length} files)`);
if (dryRun) console.log("  (DRY RUN)\n");
else console.log("");

let moved = 0;

for (const file of files) {
  const sourcePath = join(sourceDir, file);
  const targetPath = join(targetDir, file);

  // Read and update frontmatter
  const raw = readFileSync(sourcePath, "utf-8");
  const { data, content } = matter(raw);

  // Update domain and topic
  data.domain = targetDomain;
  data.topic = targetTopic;

  if (dryRun) {
    console.log(`  WOULD MOVE: ${file} (topic: ${sourceTopic} → ${targetTopic})`);
  } else {
    // Write to target
    const updated = matter.stringify(content, data);
    writeFileSync(targetPath, updated, "utf-8");

    // Remove from source
    unlinkSync(sourcePath);

    console.log(`  MOVED: ${file}`);
  }
  moved++;
}

// Remove source directory if empty
if (!dryRun) {
  const remaining = readdirSync(sourceDir);
  if (remaining.length === 0 || (remaining.length === 1 && remaining[0] === "_summary.md")) {
    // Remove _summary.md if it exists
    const summaryPath = join(sourceDir, "_summary.md");
    if (existsSync(summaryPath)) unlinkSync(summaryPath);
    try {
      rmdirSync(sourceDir);
      console.log(`  REMOVED: empty directory ${source}/`);
    } catch {
      // Directory not empty — leave it
    }
  }
}

console.log(`\nDone. ${moved} files ${dryRun ? "would be " : ""}merged.`);
if (!dryRun) {
  console.log("Run 'npx tsx scripts/reindex.ts' to update the database.");
}
