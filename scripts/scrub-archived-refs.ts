#!/usr/bin/env npx tsx
/**
 * scrub-archived-refs.ts — one-shot scrubber that removes a set of archived
 * insight IDs from `related:` and `evidence:` arrays across knowledge-base/domains.
 *
 * Used post-dedup to clean up dangling cross-references. Safe to re-run: files
 * without any archived-id references are left untouched.
 *
 * Usage:
 *   npx tsx scripts/scrub-archived-refs.ts ID1 ID2 ID3 ...
 */

import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import fg from "fast-glob";
import matter from "gray-matter";

const KB_ROOT = join(__dirname, "..", "knowledge-base");

async function main(): Promise<void> {
  const archivedIds = process.argv.slice(2);
  if (archivedIds.length === 0) {
    console.error("Usage: scrub-archived-refs.ts ID1 [ID2 ...]");
    process.exit(1);
  }
  const archivedSet = new Set(archivedIds);
  console.log(`Scrubbing refs to ${archivedIds.length} archived IDs:`);
  for (const id of archivedIds) console.log(`  - ${id}`);
  console.log();

  const files = await fg("domains/**/*.md", {
    cwd: KB_ROOT,
    absolute: true,
    ignore: ["**/_summary.md"],
  });

  let modified = 0;

  for (const filePath of files) {
    const raw = await readFile(filePath, "utf-8");
    const { data, content } = matter(raw);

    let dirty = false;

    // Scrub related: string[]
    if (Array.isArray(data.related)) {
      const before = data.related.length;
      data.related = data.related.filter(
        (ref: unknown) => typeof ref !== "string" || !archivedSet.has(ref),
      );
      if (data.related.length !== before) dirty = true;
      if (data.related.length === 0) delete data.related;
    }

    // Scrub evidence: Array<{id: string, type: string, ...}>
    if (Array.isArray(data.evidence)) {
      const before = data.evidence.length;
      data.evidence = data.evidence.filter(
        (entry: { id?: unknown }) =>
          typeof entry?.id !== "string" || !archivedSet.has(entry.id),
      );
      if (data.evidence.length !== before) dirty = true;
      if (data.evidence.length === 0) delete data.evidence;
    }

    if (dirty) {
      const updated = matter.stringify(content, data);
      await writeFile(filePath, updated, "utf-8");
      modified++;
      const rel = filePath.replace(KB_ROOT + "/", "");
      console.log(`  scrubbed: ${rel}`);
    }
  }

  console.log(`\n${modified} file(s) updated.`);
}

main().catch((err) => {
  console.error("scrub-archived-refs.ts failed:", err);
  process.exit(1);
});
