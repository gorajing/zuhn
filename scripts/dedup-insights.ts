#!/usr/bin/env npx tsx
/**
 * dedup-insights.ts — Semantic deduplication of the knowledge base.
 *
 * Phases:
 *   2. Restore corrupted absorber source bodies from raw HTML
 *   3. Title-based exact dedup (KB-wide)
 *   4. Embedding-based semantic dedup (same-domain, cosine > 0.95)
 *   5. Remap classified connections; drop PREDICTED; clean tension_judgments
 *   6. Fix source attribution via keyword discriminator
 *   7. Recalculate insight_counts
 *   8. Archive duplicate files
 *
 * Usage:
 *   npx tsx scripts/dedup-insights.ts --dry-run    # Preview only
 *   npx tsx scripts/dedup-insights.ts              # Execute all phases
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync } from "fs";
import { join, dirname, relative } from "path";
import fg from "fast-glob";
import matter from "gray-matter";
import Database from "better-sqlite3";
import * as sqliteVec from "sqlite-vec";
import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";

// ─── Config ──────────────────────────────────────────────────────────

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");
const DB_PATH = join(KB_ROOT, "db", "brain.db");
const ARCHIVE_DIR = join(KB_ROOT, "archive", "dedup-260405");
const LOG_PATH = join(KB_ROOT, "meta", "dedup-log.json");
const COSINE_THRESHOLD = 0.05; // cosine distance < 0.05 = similarity > 0.95

const DRY_RUN = process.argv.includes("--dry-run");

// ─── Types ───────────────────────────────────────────────────────────

interface InsightFile {
  path: string;
  id: string;
  title: string;
  domain: string;
  topic: string;
  stance: string;
  standard: string;
  dateExtracted: string;
  sourceUrl: string;
  sourceTitle: string;
}

interface DedupCluster {
  canonicalId: string;
  canonicalPath: string;
  archivedIds: string[];
  archivedPaths: string[];
  reason: "title-match" | "embedding-similarity";
  title: string;
}

// ─── Collision pairs (known from investigation) ──────────────────────

const COLLISION_PAIRS: Array<{
  absorberSlug: string;      // filename slug of the absorber (wrong one)
  absorberTitle: string;     // title in the absorber source file
  correctSourceId: string;   // the new unique ID we assigned to the real source
  correctTitle: string;      // title of the real source
  keywords: string[];        // keywords that identify insights from the REAL source
}> = [
  {
    absorberSlug: "5-lessons-we-learned-helping",
    absorberTitle: "5 Lessons We Learned Helping the Operations Department",
    correctSourceId: "SRC-260405-C5DD",
    correctTitle: "How to Present to Investors",
    keywords: ["investor", "pitch", "demo day", "yc", "present", "rehearsal"],
  },
  {
    absorberSlug: "accelerating-growth-at-scale",
    absorberTitle: "Accelerating Growth at Scale",
    correctSourceId: "SRC-260405-2996",
    correctTitle: "Early Work",
    keywords: ["early work", "ugly", "fear", "ambitious", "experiment", "failure", "morale"],
  },
  {
    absorberSlug: "february-2025-startups-raising",
    absorberTitle: "February 2025 Startups Raising Capital",
    correctSourceId: "SRC-260405-FBFA",
    correctTitle: "Governance in Gen AI",
    keywords: ["governance", "gen ai", "world economic forum", "illiquidity"],
  },
  {
    absorberSlug: "startup-valuation-methods",
    absorberTitle: "Startup Valuation Methods",
    correctSourceId: "SRC-260405-8D84",
    correctTitle: "What to Expect When You're Expecting Dilution",
    keywords: ["dilution", "option pool", "cap table"],
  },
  {
    absorberSlug: "how-to-get-so-rich",
    absorberTitle: "How to Get So Rich",
    correctSourceId: "SRC-260405-00B8",
    correctTitle: "Inside Synthesia",
    keywords: ["synthesia", "adobe", "avatar", "video generation"],
  },
  {
    absorberSlug: "hiring-is-obsolete",
    absorberTitle: "Hiring is Obsolete",
    correctSourceId: "SRC-260330-1FF6",
    correctTitle: "The Backwards Brain Bicycle",
    keywords: ["bicycle", "backwards", "neural pathway", "unlearn"],
  },
  {
    absorberSlug: "how-to-do-great-work",
    absorberTitle: "How to Do Great Work",
    correctSourceId: "SRC-260405-FAA6",
    correctTitle: "Why Costco is Cheaper than Amazon",
    keywords: ["costco", "sku", "kirkland", "membership", "warehouse"],
  },
  {
    absorberSlug: "neuralinks-21-telepathy",
    absorberTitle: "Neuralink's Telepathy Trials",
    correctSourceId: "SRC-260405-35C4",
    correctTitle: "Why Twitter is a Big Deal",
    keywords: ["twitter", "tweet", "microblog"],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────

function loadAllInsights(): InsightFile[] {
  const files = fg.sync("domains/**/*.md", {
    cwd: KB_ROOT,
    absolute: true,
    ignore: ["**/_index.md"],
  });

  const insights: InsightFile[] = [];
  for (const filePath of files) {
    try {
      const raw = readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      if (!data.id || !data.title) continue;

      const relPath = relative(KB_ROOT, filePath);
      const parts = relPath.split("/"); // domains/domain/topic/file.md
      const domain = parts[1] ?? "";
      const topic = parts[2] ?? "";

      insights.push({
        path: filePath,
        id: data.id,
        title: typeof data.title === "string" ? data.title : String(data.title),
        domain,
        topic,
        stance: data.stance ?? "",
        standard: data.resolutions?.standard ?? "",
        dateExtracted: data.date_extracted ?? "2099-01-01",
        sourceUrl: data.sources?.[0]?.url ?? "",
        sourceTitle: data.sources?.[0]?.title ?? "",
      });
    } catch {
      // Skip unreadable files
    }
  }
  return insights;
}

function scoreInsight(ins: InsightFile): number {
  const lengthScore = ins.standard.length;
  const stanceScore = ins.stance.length > 20 ? 100 : 0;
  // Earlier extraction = tiebreaker (subtract days since epoch)
  const dateScore = -new Date(ins.dateExtracted).getTime() / 1e12;
  return lengthScore + stanceScore + dateScore;
}

// ─── Phase 2: Restore absorber source bodies ─────────────────────────

function phase2_restoreSourceBodies(): void {
  console.log("\n── Phase 2: Restore corrupted absorber source bodies ──");

  for (const pair of COLLISION_PAIRS) {
    const sourceFiles = fg.sync(`sources/**/${pair.absorberSlug}*.md`, {
      cwd: KB_ROOT,
      absolute: true,
      ignore: ["**/raw/**"],
    });

    for (const sourcePath of sourceFiles) {
      const rawDir = join(dirname(sourcePath), "raw");
      const baseName = sourcePath.split("/").pop()!.replace(".md", ".html");
      const rawPath = join(rawDir, baseName);

      if (!existsSync(rawPath)) {
        console.log(`  SKIP: No raw HTML for ${pair.absorberSlug}`);
        continue;
      }

      // Extract clean text from raw HTML using Readability
      const html = readFileSync(rawPath, "utf-8");
      const doc = new JSDOM(html, { url: "https://example.com" });
      const reader = new Readability(doc.window.document);
      const article = reader.parse();

      if (!article) {
        console.log(`  SKIP: Readability failed for ${pair.absorberSlug}`);
        continue;
      }

      // Read current frontmatter, replace body with correct summary
      const currentRaw = readFileSync(sourcePath, "utf-8");
      const { data } = matter(currentRaw);

      // Generate a brief summary from the actual content (first 200 words)
      const cleanText = (article.textContent ?? "").replace(/\s+/g, " ").trim();
      const summary = cleanText.split(/\s+/).slice(0, 50).join(" ") + "...";

      if (DRY_RUN) {
        console.log(`  WOULD restore: ${pair.absorberSlug} → "${summary.slice(0, 80)}..."`);
      } else {
        const restored = matter.stringify(summary, data);
        writeFileSync(sourcePath, restored, "utf-8");
        console.log(`  RESTORED: ${pair.absorberSlug}`);
      }
    }
  }
}

// ─── Phase 3: Title-based exact dedup ────────────────────────────────

function phase3_titleDedup(insights: InsightFile[]): DedupCluster[] {
  console.log("\n── Phase 3: Title-based exact dedup ──");

  // Group by normalized title
  const groups = new Map<string, InsightFile[]>();
  for (const ins of insights) {
    const key = ins.title.toLowerCase().trim();
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(ins);
  }

  const clusters: DedupCluster[] = [];
  let totalArchived = 0;

  for (const [, group] of groups) {
    if (group.length < 2) continue;

    // Score each, pick best as canonical
    group.sort((a, b) => scoreInsight(b) - scoreInsight(a));
    const canonical = group[0];
    const duplicates = group.slice(1);

    clusters.push({
      canonicalId: canonical.id,
      canonicalPath: canonical.path,
      archivedIds: duplicates.map((d) => d.id),
      archivedPaths: duplicates.map((d) => d.path),
      reason: "title-match",
      title: canonical.title,
    });

    totalArchived += duplicates.length;
  }

  console.log(`  Found ${clusters.length} duplicate groups, ${totalArchived} files to archive`);
  return clusters;
}

// ─── Phase 3b: Fuzzy title dedup (first 40 chars + same domain) ──────

function phase3b_fuzzyTitleDedup(
  insights: InsightFile[],
  existingClusters: DedupCluster[]
): DedupCluster[] {
  console.log("\n── Phase 3b: Fuzzy title dedup (prefix match) ──");

  const archivedIds = new Set<string>();
  for (const c of existingClusters) {
    for (const id of c.archivedIds) archivedIds.add(id);
  }

  const survivors = insights.filter((i) => !archivedIds.has(i.id));

  // Group by first 40 chars of title (lowercased) + domain
  const groups = new Map<string, InsightFile[]>();
  for (const ins of survivors) {
    const prefix = ins.title.toLowerCase().trim().slice(0, 40);
    const key = `${ins.domain}::${prefix}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(ins);
  }

  const clusters: DedupCluster[] = [];
  let totalArchived = 0;

  for (const [, group] of groups) {
    if (group.length < 2) continue;

    group.sort((a, b) => scoreInsight(b) - scoreInsight(a));
    const canonical = group[0];
    const duplicates = group.slice(1);

    clusters.push({
      canonicalId: canonical.id,
      canonicalPath: canonical.path,
      archivedIds: duplicates.map((d) => d.id),
      archivedPaths: duplicates.map((d) => d.path),
      reason: "title-match",
      title: canonical.title,
    });

    totalArchived += duplicates.length;
  }

  console.log(`  Found ${clusters.length} fuzzy clusters, ${totalArchived} additional files to archive`);
  return clusters;
}

// ─── Phase 4: Embedding-based semantic dedup ───────────��─────────────

function phase4_embeddingDedup(
  insights: InsightFile[],
  existingClusters: DedupCluster[]
): DedupCluster[] {
  console.log("\n── Phase 4: Embedding-based semantic dedup ──");

  // Build set of already-archived IDs
  const archivedIds = new Set<string>();
  for (const c of existingClusters) {
    for (const id of c.archivedIds) archivedIds.add(id);
  }

  // Filter to survivors only
  const survivors = insights.filter((i) => !archivedIds.has(i.id));
  console.log(`  ${survivors.length} survivors after title dedup`);

  // Open DB with sqlite-vec
  let db: Database.Database;
  try {
    db = new Database(DB_PATH);
    sqliteVec.load(db);
  } catch (err) {
    console.log(`  SKIP: Cannot load sqlite-vec — ${err}`);
    return [];
  }

  // Build ID→InsightFile map for quick lookup
  const idMap = new Map(survivors.map((i) => [i.id, i]));

  // Group survivors by domain for scoped comparison
  const byDomain = new Map<string, InsightFile[]>();
  for (const ins of survivors) {
    if (!byDomain.has(ins.domain)) byDomain.set(ins.domain, []);
    byDomain.get(ins.domain)!.push(ins);
  }

  const newClusters: DedupCluster[] = [];
  const alreadyMerged = new Set<string>();

  for (const [domain, domainInsights] of byDomain) {
    const domainIds = new Set(domainInsights.map((i) => i.id));

    // For each insight in this domain, find near-duplicates
    for (const ins of domainInsights) {
      if (alreadyMerged.has(ins.id)) continue;

      // Query for nearest neighbors
      let neighbors: Array<{ id: string; distance: number }>;
      try {
        neighbors = db
          .prepare(
            `SELECT id, distance FROM embeddings
             WHERE embedding MATCH (SELECT embedding FROM embeddings WHERE id = ?)
             AND id != ?
             ORDER BY distance LIMIT 20`
          )
          .all(ins.id, ins.id) as Array<{ id: string; distance: number }>;
      } catch {
        continue; // Not in embeddings table
      }

      // Filter: same domain, below threshold, not already merged
      const nearDups = neighbors.filter(
        (n) =>
          n.distance < COSINE_THRESHOLD &&
          domainIds.has(n.id) &&
          !alreadyMerged.has(n.id) &&
          !archivedIds.has(n.id) &&
          idMap.has(n.id)
      );

      if (nearDups.length === 0) continue;

      // Build cluster: this insight + its near-duplicates
      const clusterInsights = [ins, ...nearDups.map((n) => idMap.get(n.id)!)];
      clusterInsights.sort((a, b) => scoreInsight(b) - scoreInsight(a));

      const canonical = clusterInsights[0];
      const duplicates = clusterInsights.slice(1);

      // Mark all as merged
      for (const d of duplicates) {
        alreadyMerged.add(d.id);
        archivedIds.add(d.id);
      }

      newClusters.push({
        canonicalId: canonical.id,
        canonicalPath: canonical.path,
        archivedIds: duplicates.map((d) => d.id),
        archivedPaths: duplicates.map((d) => d.path),
        reason: "embedding-similarity",
        title: canonical.title,
      });
    }
  }

  db.close();
  const totalArchived = newClusters.reduce((s, c) => s + c.archivedIds.length, 0);
  console.log(`  Found ${newClusters.length} semantic clusters, ${totalArchived} additional files to archive`);
  return newClusters;
}

// ─── Phase 5: Remap connections ──────────────────────────────────────

function phase5_remapConnections(clusters: DedupCluster[]): void {
  console.log("\n── Phase 5: Remap connections ──");

  // Build remap table: archived_id → canonical_id
  const remap = new Map<string, string>();
  for (const c of clusters) {
    for (const aid of c.archivedIds) {
      remap.set(aid, c.canonicalId);
    }
  }

  if (remap.size === 0) {
    console.log("  No remapping needed");
    return;
  }

  console.log(`  Remap table: ${remap.size} archived IDs → canonical IDs`);

  if (DRY_RUN) {
    console.log("  [DRY RUN] Would remap connections and drop PREDICTED");
    return;
  }

  const db = new Database(DB_PATH);

  // Drop all PREDICTED connections (will be regenerated by learn.ts)
  const predictedCount = db.prepare("SELECT COUNT(*) as n FROM connections WHERE type = 'PREDICTED'").get() as { n: number };
  db.prepare("DELETE FROM connections WHERE type = 'PREDICTED'").run();
  console.log(`  Dropped ${predictedCount.n} PREDICTED connections`);

  // Remap classified connections (delete-then-insert to avoid PK conflicts)
  let remappedCount = 0;

  const selectFrom = db.prepare("SELECT * FROM connections WHERE from_id = ?");
  const selectTo = db.prepare("SELECT * FROM connections WHERE to_id = ?");
  const deleteRow = db.prepare("DELETE FROM connections WHERE from_id = ? AND to_id = ?");
  const insertRow = db.prepare(
    `INSERT OR IGNORE INTO connections (from_id, to_id, type, confidence_score, created_at, last_confirmed, confidence_trajectory)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  );

  for (const [oldId, newId] of remap) {
    // Remap from_id
    const fromRows = selectFrom.all(oldId) as Array<Record<string, unknown>>;
    for (const row of fromRows) {
      deleteRow.run(oldId, row.to_id as string);
      if ((row.to_id as string) !== newId) { // skip self-loops
        insertRow.run(newId, row.to_id, row.type, row.confidence_score, row.created_at, row.last_confirmed, row.confidence_trajectory);
      }
      remappedCount++;
    }

    // Remap to_id
    const toRows = selectTo.all(oldId) as Array<Record<string, unknown>>;
    for (const row of toRows) {
      deleteRow.run(row.from_id as string, oldId);
      if ((row.from_id as string) !== newId) { // skip self-loops
        insertRow.run(row.from_id, newId, row.type, row.confidence_score, row.created_at, row.last_confirmed, row.confidence_trajectory);
      }
      remappedCount++;
    }
  }
  console.log(`  Remapped ${remappedCount} connection references`);

  // Final cleanup: self-loops and duplicate edges
  const selfLoops = db.prepare("DELETE FROM connections WHERE from_id = to_id").run();
  console.log(`  Removed ${selfLoops.changes ?? 0} self-loops`);

  // Clean tension_judgments
  const allArchivedIds = new Set(remap.keys());
  const judgments = db.prepare("SELECT pair_key FROM tension_judgments").all() as Array<{ pair_key: string }>;
  let staleJudgments = 0;
  const deleteJudgment = db.prepare("DELETE FROM tension_judgments WHERE pair_key = ?");
  for (const j of judgments) {
    const [a, b] = j.pair_key.split("|");
    if (allArchivedIds.has(a) || allArchivedIds.has(b)) {
      deleteJudgment.run(j.pair_key);
      staleJudgments++;
    }
  }
  console.log(`  Cleaned ${staleJudgments} stale tension judgments`);

  db.close();

  // Remap evidence[] in YAML files
  console.log("  Remapping evidence[] in insight YAML files...");
  const allInsightFiles = fg.sync("domains/**/*.md", {
    cwd: KB_ROOT,
    absolute: true,
    ignore: ["**/_index.md"],
  });

  let yamlRemapped = 0;
  for (const filePath of allInsightFiles) {
    const raw = readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    if (!Array.isArray(data.evidence)) continue;

    let changed = false;
    const seen = new Set<string>();
    const newEvidence: Array<{ id: string; relationship: string }> = [];

    for (const entry of data.evidence) {
      if (!entry || !entry.id) continue; // skip malformed entries
      const remappedId = remap.get(entry.id) ?? entry.id;
      const relationship = entry.relationship ?? "RELATED";
      const key = `${remappedId}:${relationship}`;
      if (seen.has(key)) continue; // deduplicate
      seen.add(key);
      if (remappedId !== entry.id) changed = true;
      newEvidence.push({ id: remappedId, relationship });
    }

    if (changed) {
      data.evidence = newEvidence;
      try {
        writeFileSync(filePath, matter.stringify(content, data), "utf-8");
        yamlRemapped++;
      } catch (err) {
        console.log(`  WARN: YAML write failed for ${filePath.split("/").pop()}: ${err}`);
      }
    }
  }
  console.log(`  Updated evidence[] in ${yamlRemapped} insight files`);
}

// ─── Phase 6: Fix source attribution ─────────────────────────────────

function phase6_fixAttribution(clusters: DedupCluster[], insights: InsightFile[]): void {
  console.log("\n── Phase 6: Fix source attribution ──");

  // Build set of archived IDs
  const archivedIds = new Set<string>();
  for (const c of clusters) {
    for (const id of c.archivedIds) archivedIds.add(id);
  }

  // Surviving insights only
  const survivors = insights.filter((i) => !archivedIds.has(i.id));
  let fixed = 0;

  for (const pair of COLLISION_PAIRS) {
    // Find survivors attributed to the absorber source
    const misAttributed = survivors.filter((ins) =>
      ins.sourceTitle.toLowerCase().includes(pair.absorberSlug.replace(/-/g, " ").slice(0, 20))
      || ins.sourceUrl.toLowerCase().includes(pair.absorberSlug.slice(0, 15))
    );

    if (misAttributed.length === 0) continue;

    // For each mis-attributed insight, check if it belongs to the correct source
    for (const ins of misAttributed) {
      const text = `${ins.title} ${ins.stance} ${ins.standard}`.toLowerCase();
      const matchesCorrect = pair.keywords.some((kw) => text.includes(kw));

      if (!matchesCorrect) continue; // Actually belongs to the absorber

      if (DRY_RUN) {
        console.log(`  WOULD fix: ${ins.id} "${ins.title.slice(0, 50)}" → ${pair.correctTitle}`);
        fixed++;
        continue;
      }

      // Read file, update source attribution
      const raw = readFileSync(ins.path, "utf-8");
      const { data, content } = matter(raw);

      if (Array.isArray(data.sources) && data.sources.length > 0) {
        // Find the correct source file to get its URL
        const correctSourceFiles = fg.sync(`sources/**/*.md`, {
          cwd: KB_ROOT,
          absolute: true,
          ignore: ["**/raw/**", "**/_index.md"],
        });

        for (const sf of correctSourceFiles) {
          const sfRaw = readFileSync(sf, "utf-8");
          const { data: sfData } = matter(sfRaw);
          if (sfData.id === pair.correctSourceId) {
            data.sources[0].title = sfData.title;
            data.sources[0].url = sfData.url;
            break;
          }
        }

        writeFileSync(ins.path, matter.stringify(content, data), "utf-8");
        fixed++;
      }
    }
  }

  console.log(`  Fixed attribution on ${fixed} insights`);
}

// ─── Phase 7: Recalculate insight_counts ─────────────────────────────

function phase7_recalculateCounts(): void {
  console.log("\n── Phase 7: Recalculate insight_counts ──");

  // Load all source files
  const sourceFiles = fg.sync("sources/**/*.md", {
    cwd: KB_ROOT,
    absolute: true,
    ignore: ["**/raw/**", "**/_index.md"],
  });

  // Load all insight files and index by source URL
  const insightFiles = fg.sync("domains/**/*.md", {
    cwd: KB_ROOT,
    absolute: true,
    ignore: ["**/_index.md"],
  });

  // Build URL → count map
  const urlCounts = new Map<string, number>();
  for (const iPath of insightFiles) {
    try {
      const raw = readFileSync(iPath, "utf-8");
      const { data } = matter(raw);
      const url = data.sources?.[0]?.url;
      if (url) {
        urlCounts.set(url, (urlCounts.get(url) ?? 0) + 1);
      }
    } catch { /* skip */ }
  }

  let updated = 0;
  for (const sPath of sourceFiles) {
    const raw = readFileSync(sPath, "utf-8");
    const { data, content } = matter(raw);
    const url = data.url;
    const actualCount = url ? (urlCounts.get(url) ?? 0) : 0;
    const currentCount = data.insight_count ?? 0;

    if (actualCount !== currentCount) {
      if (DRY_RUN) {
        console.log(`  WOULD update: ${data.title?.slice(0, 50)} ${currentCount} → ${actualCount}`);
      } else {
        data.insight_count = actualCount;
        writeFileSync(sPath, matter.stringify(content, data), "utf-8");
      }
      updated++;
    }
  }

  console.log(`  ${DRY_RUN ? "Would update" : "Updated"} ${updated} source files`);
}

// ─── Phase 8: Archive files ──────────────────────────────────────────

function phase8_archive(clusters: DedupCluster[]): void {
  console.log("\n── Phase 8: Archive duplicate files ──");

  const allPaths = clusters.flatMap((c) => c.archivedPaths);
  console.log(`  ${allPaths.length} files to archive`);

  if (DRY_RUN) {
    console.log("  [DRY RUN] Would move files to archive/dedup-260405/");
    return;
  }

  let moved = 0;
  for (const filePath of allPaths) {
    const relPath = relative(KB_ROOT, filePath);
    const archivePath = join(ARCHIVE_DIR, relPath);
    const archiveDir = dirname(archivePath);

    mkdirSync(archiveDir, { recursive: true });

    try {
      renameSync(filePath, archivePath);
      moved++;
    } catch (err) {
      console.log(`  ERROR moving ${relPath}: ${err}`);
    }
  }

  console.log(`  Archived ${moved} files`);
}

// ─── Write log ───────────────────────────────────────────────────────

function writeLog(clusters: DedupCluster[]): void {
  const log = {
    timestamp: new Date().toISOString(),
    dry_run: DRY_RUN,
    total_clusters: clusters.length,
    total_archived: clusters.reduce((s, c) => s + c.archivedIds.length, 0),
    by_reason: {
      "title-match": clusters.filter((c) => c.reason === "title-match").length,
      "embedding-similarity": clusters.filter((c) => c.reason === "embedding-similarity").length,
    },
    clusters: clusters.map((c) => ({
      canonical: c.canonicalId,
      archived: c.archivedIds,
      reason: c.reason,
      title: c.title,
    })),
  };

  if (!DRY_RUN) {
    writeFileSync(LOG_PATH, JSON.stringify(log, null, 2), "utf-8");
    console.log(`\n  Log written to ${relative(PROJECT_ROOT, LOG_PATH)}`);
  } else {
    console.log(`\n  [DRY RUN] Would write log to ${relative(PROJECT_ROOT, LOG_PATH)}`);
  }
}

// ─── Main ────────────────────────────────────────────────────────────

function main(): void {
  console.log("╔══════════════════════════════════════╗");
  console.log("║     Zuhn — Knowledge Base Dedup      ║");
  console.log("╚══════════════════════════════════════╝");
  if (DRY_RUN) console.log("  [DRY RUN — no writes]");

  // Load all insights
  console.log("\n  Loading insights...");
  const insights = loadAllInsights();
  console.log(`  ${insights.length} insight files loaded`);

  // Phase 2: Restore source bodies
  phase2_restoreSourceBodies();

  // Phase 3: Title dedup
  const titleClusters = phase3_titleDedup(insights);

  // Phase 3b: Fuzzy title dedup on survivors
  const fuzzyClusters = phase3b_fuzzyTitleDedup(insights, titleClusters);

  // Phase 4: Embedding dedup
  const combinedPreEmbedding = [...titleClusters, ...fuzzyClusters];
  const embeddingClusters = phase4_embeddingDedup(insights, combinedPreEmbedding);

  // Combine all clusters
  const allClusters = [...titleClusters, ...fuzzyClusters, ...embeddingClusters];

  if (allClusters.length === 0) {
    console.log("\n  No duplicates found. KB is clean.");
    return;
  }

  const totalArchived = allClusters.reduce((s, c) => s + c.archivedIds.length, 0);
  console.log(`\n  Total: ${allClusters.length} clusters, ${totalArchived} files to archive`);

  // Phase 5: Remap connections
  phase5_remapConnections(allClusters);

  // Phase 6: Fix attribution
  phase6_fixAttribution(allClusters, insights);

  // Phase 7: Recalculate counts
  phase7_recalculateCounts();

  // Phase 8: Archive
  phase8_archive(allClusters);

  // Write log
  writeLog(allClusters);

  console.log("\n╔══════════════════════════════════════╗");
  console.log("║              Dedup Complete           ║");
  console.log("╚══════════════════════════════════════╝");
  if (!DRY_RUN) {
    console.log("  Next: npm run post-ingest");
  }
}

main();
