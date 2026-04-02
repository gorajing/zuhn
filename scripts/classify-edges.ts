#!/usr/bin/env npx tsx
/**
 * classify-edges.ts — Async Semantic Graph Builder
 *
 * Classifies relationship types for high-signal insight pairs and
 * writes them to the connections table (Slow Graph / Semantic Graph).
 *
 * ARCHITECTURE NOTE:
 * This script is intentionally SEPARATE from discoverConnections() in learn.ts.
 * discoverConnections() runs vector math for every insight on every learn.ts run —
 * adding LLM calls there would mean 15,000+ Claude calls per run.
 * classify-edges.ts runs async, on demand, on high-signal pairs only.
 *
 * High-signal sources (in priority order):
 *   1. Tension candidates (meta/tension-candidates.json) — likely CONTRADICTS/CHALLENGES
 *   2. Cross-domain vector connections — related[] pairs where from.domain != to.domain
 *
 * Results written to:
 *   - SQLite connections table
 *   - evidence[] in each insight's YAML frontmatter (bidirectional)
 *
 * Usage:
 *   npx tsx scripts/classify-edges.ts [--limit 50] [--dry-run] [--source tensions|cross-domain|all]
 */

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import matter from "gray-matter";
import fg from "fast-glob";
import { initDb } from "./lib/db";
import type { RelationshipTypeValue } from "./schemas/frontmatter";

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");
const BATCH_SIZE = 20;

// ─── Types ───────────────────────────────────────────────────────────

interface InsightStub {
  id: string;
  domain: string;
  topic: string;
  stance: string;
  title: string;
  filePath: string;
}

interface EdgePair {
  from: InsightStub;
  to: InsightStub;
  source: "tensions" | "cross-domain";
}

interface ClassifiedEdge {
  from_id: string;
  to_id: string;
  type: RelationshipTypeValue;
}

// ─── Args ────────────────────────────────────────────────────────────

function parseArgs(argv: string[]): {
  limit: number;
  dryRun: boolean;
  source: "tensions" | "cross-domain" | "all";
} {
  let limit = 100;
  let dryRun = false;
  let source: "tensions" | "cross-domain" | "all" = "all";

  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === "--limit") limit = parseInt(argv[++i] || "100", 10);
    if (argv[i] === "--dry-run") dryRun = true;
    if (argv[i] === "--source") {
      const s = argv[++i];
      if (s === "tensions" || s === "cross-domain" || s === "all") source = s;
    }
  }

  return { limit, dryRun, source };
}

// ─── Load insight stubs ──────────────────────────────────────────────

async function loadInsightIndex(): Promise<Map<string, InsightStub>> {
  const files = await fg("domains/**/*.md", {
    cwd: KB_ROOT,
    absolute: true,
    ignore: ["**/_overview.md", "**/_summary.md"],
  });

  const index = new Map<string, InsightStub>();

  for (const filePath of files) {
    try {
      const raw = readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      if (data.id && data.domain && data.topic) {
        index.set(data.id as string, {
          id: data.id as string,
          domain: data.domain as string,
          topic: data.topic as string,
          stance: (data.stance as string) || (data.resolutions?.one_line as string) || data.title as string,
          title: data.title as string,
          filePath,
        });
      }
    } catch {
      // skip unreadable files
    }
  }

  return index;
}

// ─── High-signal pair sources ────────────────────────────────────────

function loadTensionPairs(
  index: Map<string, InsightStub>
): EdgePair[] {
  const candidatesPath = join(KB_ROOT, "meta", "tension-candidates.json");
  if (!existsSync(candidatesPath)) return [];

  let rawCandidates: Array<Record<string, string>>;
  try {
    const raw = JSON.parse(readFileSync(candidatesPath, "utf-8"));
    // Handle both array format and {candidates: [...]} envelope format
    rawCandidates = Array.isArray(raw) ? raw : (raw.candidates ?? []);
  } catch {
    return [];
  }

  // Normalize field names: support both {sideA/sideB} and {id_a/id_b} formats
  const candidates = rawCandidates.map((c) => ({
    sideA: c.sideA ?? c.id_a,
    sideB: c.sideB ?? c.id_b,
  }));

  const pairs: EdgePair[] = [];
  for (const c of candidates) {
    const from = index.get(c.sideA);
    const to = index.get(c.sideB);
    if (from && to) {
      pairs.push({ from, to, source: "tensions" });
    }
  }
  return pairs;
}

async function loadCrossDomainPairs(
  index: Map<string, InsightStub>
): Promise<EdgePair[]> {
  const files = await fg("domains/**/*.md", {
    cwd: KB_ROOT,
    absolute: true,
    ignore: ["**/_overview.md", "**/_summary.md"],
  });

  const pairs: EdgePair[] = [];
  const seen = new Set<string>();

  for (const filePath of files) {
    try {
      const raw = readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      if (!data.id || !Array.isArray(data.related)) continue;

      const fromStub = index.get(data.id as string);
      if (!fromStub) continue;

      for (const relId of data.related as string[]) {
        const toStub = index.get(relId);
        if (!toStub) continue;
        if (fromStub.domain === toStub.domain) continue; // same-domain, skip

        // Deduplicate (A→B and B→A are the same pair)
        const key = [fromStub.id, toStub.id].sort().join(":");
        if (seen.has(key)) continue;
        seen.add(key);

        pairs.push({ from: fromStub, to: toStub, source: "cross-domain" });
      }
    } catch {
      // skip
    }
  }

  return pairs;
}

// ─── Filter already-classified ───────────────────────────────────────

function filterUnclassified(
  pairs: EdgePair[],
  db: ReturnType<typeof initDb>
): EdgePair[] {
  const stmt = db.prepare(
    "SELECT 1 FROM connections WHERE (from_id = ? AND to_id = ?) OR (from_id = ? AND to_id = ?) LIMIT 1"
  );

  return pairs.filter((p) => {
    const exists = stmt.get(p.from.id, p.to.id, p.to.id, p.from.id);
    return !exists;
  });
}

// ─── Claude micro-classifier ─────────────────────────────────────────

const CLASSIFIER_SYSTEM = `You are classifying semantic relationships between pairs of insights.
For each pair, return exactly one relationship type from:
  SUPPORTS      - B builds on or reinforces A
  CONTRADICTS   - B directly opposes A
  EXTENDS       - B broadens A's scope
  TRANSFERS_TO  - A's principle applies in B's different domain
  REFINES       - B makes A more precise or specific
  CHALLENGES    - B questions assumptions behind A

Return a JSON array with one object per pair: [{"from_id":"...", "to_id":"...", "type":"..."}]
Return ONLY the JSON array, no explanation.`;

function classifyBatch(pairs: EdgePair[]): ClassifiedEdge[] {
  const pairsText = pairs
    .map(
      (p, i) =>
        `${i + 1}. from_id: ${p.from.id}\n   Domain A: ${p.from.domain}\n   Stance A: "${p.from.stance}"\n   to_id: ${p.to.id}\n   Domain B: ${p.to.domain}\n   Stance B: "${p.to.stance}"`
    )
    .join("\n\n");

  const prompt = `${CLASSIFIER_SYSTEM}\n\nClassify these ${pairs.length} pairs:\n\n${pairsText}`;

  const tmpFile = join(tmpdir(), `zuhn-classify-${Date.now()}.txt`);
  writeFileSync(tmpFile, prompt, "utf-8");

  try {
    const raw = execFileSync("claude", ["-p", readFileSync(tmpFile, "utf-8")], {
      cwd: PROJECT_ROOT,
      timeout: 60_000,
      maxBuffer: 1024 * 1024,
    }).toString();

    // Strip markdown code fences if present
    const cleaned = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();

    const parsed = JSON.parse(cleaned) as ClassifiedEdge[];
    return parsed.filter(
      (e) =>
        e.from_id &&
        e.to_id &&
        ["SUPPORTS", "CONTRADICTS", "EXTENDS", "TRANSFERS_TO", "REFINES", "CHALLENGES"].includes(
          e.type
        )
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`  Batch classification failed: ${msg}`);
    return [];
  } finally {
    try {
      require("node:fs").unlinkSync(tmpFile);
    } catch {}
  }
}

// ─── Write results ───────────────────────────────────────────────────

function writeToDb(
  db: ReturnType<typeof initDb>,
  edges: ClassifiedEdge[]
): void {
  const insert = db.prepare(`
    INSERT INTO connections (from_id, to_id, type, created_at, last_confirmed)
    VALUES (?, ?, ?, datetime('now'), datetime('now'))
    ON CONFLICT(from_id, to_id) DO UPDATE SET
      type = excluded.type,
      last_confirmed = datetime('now')
  `);

  const insertAll = db.transaction((rows: ClassifiedEdge[]) => {
    for (const row of rows) {
      insert.run(row.from_id, row.to_id, row.type);
      // Also insert reverse direction (bidirectional graph)
      insert.run(row.to_id, row.from_id, row.type);
    }
  });

  insertAll(edges);
}

function writeToYaml(
  edges: ClassifiedEdge[],
  index: Map<string, InsightStub>
): number {
  const classified_at = new Date().toISOString().split("T")[0];
  let updated = 0;

  // Group edges by insight ID (each insight may appear in multiple edges)
  const byId = new Map<string, Array<{ id: string; type: string }>>();
  for (const edge of edges) {
    if (!byId.has(edge.from_id)) byId.set(edge.from_id, []);
    if (!byId.has(edge.to_id)) byId.set(edge.to_id, []);
    byId.get(edge.from_id)!.push({ id: edge.to_id, type: edge.type });
    byId.get(edge.to_id)!.push({ id: edge.from_id, type: edge.type });
  }

  for (const [insightId, newRelations] of byId) {
    const stub = index.get(insightId);
    if (!stub) continue;

    try {
      const raw = readFileSync(stub.filePath, "utf-8");
      const { data, content } = matter(raw);

      const existing: Array<{ id: string; type: string; classified_at?: string }> =
        Array.isArray(data.evidence) ? data.evidence : [];

      const existingIds = new Set(existing.map((e) => e.id));
      const added = newRelations.filter((r) => !existingIds.has(r.id));

      if (added.length === 0) continue;

      data.evidence = [
        ...existing,
        ...added.map((r) => ({ id: r.id, type: r.type, classified_at })),
      ];

      writeFileSync(stub.filePath, matter.stringify(content, data), "utf-8");
      updated++;
    } catch {
      // skip unwritable files
    }
  }

  return updated;
}

// ─── Main ────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { limit, dryRun, source } = parseArgs(process.argv);

  console.log("╔══════════════════════════════════════╗");
  console.log("║      Semantic Edge Classifier         ║");
  console.log("╚══════════════════════════════════════╝");
  if (dryRun) console.log("  [DRY RUN — no writes]\n");

  const db = initDb();

  // 1. Load insight index
  console.log("  Loading insight index...");
  const index = await loadInsightIndex();
  console.log(`  ${index.size} insights loaded.\n`);

  // 2. Collect high-signal pairs
  const allPairs: EdgePair[] = [];

  if (source === "tensions" || source === "all") {
    const tensionPairs = loadTensionPairs(index);
    console.log(`  Tension candidates: ${tensionPairs.length} pairs`);
    allPairs.push(...tensionPairs);
  }

  if (source === "cross-domain" || source === "all") {
    const crossPairs = await loadCrossDomainPairs(index);
    console.log(`  Cross-domain vector pairs: ${crossPairs.length} pairs`);
    allPairs.push(...crossPairs);
  }

  // 3. Filter already-classified
  const unclassified = filterUnclassified(allPairs, db);
  console.log(`  Already classified: ${allPairs.length - unclassified.length}`);
  console.log(`  To classify: ${unclassified.length}`);

  const toProcess = unclassified.slice(0, limit);
  if (toProcess.length < unclassified.length) {
    console.log(`  (limited to ${limit} — run again for more)`);
  }
  console.log();

  if (toProcess.length === 0) {
    console.log("  Nothing to classify.");
    db.close();
    return;
  }

  if (dryRun) {
    console.log("  Would classify:");
    for (const p of toProcess.slice(0, 5)) {
      console.log(`    ${p.from.id} [${p.from.domain}] ↔ ${p.to.id} [${p.to.domain}] (${p.source})`);
    }
    if (toProcess.length > 5) console.log(`    ... and ${toProcess.length - 5} more`);
    db.close();
    return;
  }

  // 4. Classify in batches
  const allClassified: ClassifiedEdge[] = [];
  const batches = Math.ceil(toProcess.length / BATCH_SIZE);

  for (let i = 0; i < batches; i++) {
    const batch = toProcess.slice(i * BATCH_SIZE, (i + 1) * BATCH_SIZE);
    process.stdout.write(`  Batch ${i + 1}/${batches} (${batch.length} pairs)... `);

    const results = classifyBatch(batch);
    allClassified.push(...results);
    console.log(`${results.length} classified.`);
  }

  console.log(`\n  Total classified: ${allClassified.length}`);

  // 5. Write to DB
  writeToDb(db, allClassified);
  console.log(`  Written to connections table.`);

  // 6. Write to YAML evidence[] fields
  const yamlUpdated = writeToYaml(allClassified, index);
  console.log(`  Updated evidence[] in ${yamlUpdated} insight files.`);

  // 7. Summary by type
  const typeCounts = new Map<string, number>();
  for (const e of allClassified) {
    typeCounts.set(e.type, (typeCounts.get(e.type) ?? 0) + 1);
  }
  console.log("\n  Relationship breakdown:");
  for (const [type, count] of [...typeCounts.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`    ${type.padEnd(14)} ${count}`);
  }

  db.close();
  console.log("\nDone.");
}

main().catch((err) => {
  console.error("classify-edges.ts failed:", err);
  process.exit(1);
});
