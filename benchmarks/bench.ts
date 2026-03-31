#!/usr/bin/env npx tsx

// ─── Zuhn Epistemic Benchmark ───────────────────────────────────────
// Snapshots knowledge base quality metrics to benchmarks/snapshot.json.
// Run: npm run bench
// Check: npm run bench:check (compares against previous snapshot)

import { join } from "node:path";
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import matter from "gray-matter";
import { initDb } from "../scripts/lib/db";

const KB_ROOT = join(__dirname, "../knowledge-base");
const SNAPSHOT_PATH = join(__dirname, "snapshot.json");

// ─── Types ───────────────────────────────────────────────────────────

interface DomainMetrics {
  insights: number;
  principles: number;
  compression_ratio: number; // principles / insights
  topics: number;
}

interface Snapshot {
  timestamp: string;
  version: number;

  // Totals
  total_insights: number;
  total_principles: number;
  total_sources: number;
  total_tensions: number;
  total_domains: number;

  // Health
  embedding_coverage: number; // 0-1
  index_coverage: number; // 0-1 (insights on disk vs in DB)

  // Knowledge quality
  mean_confidence: number; // numerical 0-4 scale
  confidence_distribution: Record<string, number>;
  compression_ratio: number; // global principles / insights
  tension_resolution_rate: number; // resolved / total (0-1)
  staleness_rate: number; // % of insights with shelf_life=time-sensitive older than 60 days

  // Structural health
  mean_related_links: number; // avg related[] length per insight
  insights_with_relations: number; // % that have at least 1 related link
  cross_domain_transfers: number; // TRANSFER flags count
  knowledge_gaps: number; // GAP flags count
  compress_flags: number; // COMPRESS flags count
  cluster_flags: number; // DISCOVER flags count

  // Knowledge Quality (KQ) — the val_bpb equivalent
  kq: number; // composite quality metric
  kq_components: {
    avg_sampled_iqs: number;    // from quality-scores.jsonl (0-10)
    compression_ratio: number;   // principles / insights
    synthesis_hit_rate: number;  // synthesis candidates / total principle pairs
    staleness_factor: number;    // 1 + (stale_insights / total_insights)
  };

  // Per-domain breakdown
  domains: Record<string, DomainMetrics>;
}

// ─── Helpers ─────────────────────────────────────────────────────────

const CONFIDENCE_SCALE: Record<string, number> = {
  pending: 0,
  low: 1,
  medium: 2,
  high: 3,
  very_high: 4,
};

function countFilesInDir(dir: string, ext = ".md"): number {
  if (!existsSync(dir)) return 0;
  return readdirSync(dir).filter(
    (f) => f.endsWith(ext) && f !== "_index.md"
  ).length;
}

function parseFlagsFile(): {
  compress: number;
  discover: number;
  gaps: number;
  transfers: number;
} {
  const flagsPath = join(KB_ROOT, "meta", "flags.md");
  if (!existsSync(flagsPath)) {
    return { compress: 0, discover: 0, gaps: 0, transfers: 0 };
  }

  const raw = readFileSync(flagsPath, "utf-8");
  const sections: Record<string, number> = {};
  let currentSection = "";

  for (const line of raw.split("\n")) {
    if (line.startsWith("## ")) {
      currentSection = line.replace("## ", "").trim();
      sections[currentSection] = 0;
    } else if (currentSection && line.startsWith("- ")) {
      sections[currentSection] = (sections[currentSection] || 0) + 1;
    }
  }

  return {
    compress: sections["COMPRESS"] || 0,
    discover: sections["DISCOVER"] || 0,
    gaps: sections["GAP"] || 0,
    transfers: sections["TRANSFER"] || 0,
  };
}

// ─── Main ────────────────────────────────────────────────────────────

function main(): void {
  console.log("╔══════════════════════════════════════╗");
  console.log("║       Epistemic Benchmark            ║");
  console.log("╚══════════════════════════════════════╝\n");

  const db = initDb();

  // --- Totals ---
  const totalInsights = (
    db
      .prepare("SELECT COUNT(*) as c FROM insights WHERE status = 'active'")
      .get() as { c: number }
  ).c;

  const embeddedCount = (
    db
      .prepare(
        "SELECT COUNT(*) as c FROM insights WHERE status = 'active' AND embedding_model IS NOT NULL"
      )
      .get() as { c: number }
  ).c;

  // Count insights on disk to measure index coverage
  let insightsOnDisk = 0;
  const domainsDir = join(KB_ROOT, "domains");
  const domainNames = existsSync(domainsDir)
    ? readdirSync(domainsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name)
    : [];

  const domainMetrics: Record<string, DomainMetrics> = {};

  for (const domain of domainNames) {
    const domainPath = join(domainsDir, domain);
    const topics = readdirSync(domainPath, { withFileTypes: true })
      .filter((d) => d.isDirectory() && d.name !== "principles")
      .map((d) => d.name);

    let domainInsightCount = 0;
    for (const topic of topics) {
      const topicDir = join(domainPath, topic);
      const count = countFilesInDir(topicDir);
      domainInsightCount += count;
      insightsOnDisk += count;
    }

    // Principles live at knowledge-base/principles/{domain}/, NOT domains/{domain}/principles/
    const principleCount = countFilesInDir(
      join(KB_ROOT, "principles", domain)
    );

    domainMetrics[domain] = {
      insights: domainInsightCount,
      principles: principleCount,
      compression_ratio:
        domainInsightCount > 0
          ? Number((principleCount / domainInsightCount).toFixed(4))
          : 0,
      topics: topics.length,
    };
  }

  // Total principles and sources
  const totalPrinciples = Object.values(domainMetrics).reduce(
    (sum, d) => sum + d.principles,
    0
  );
  // Sources live in subdirectories: sources/youtube/, sources/blog/, etc.
  const sourcesDir = join(KB_ROOT, "sources");
  let totalSources = 0;
  if (existsSync(sourcesDir)) {
    for (const sub of readdirSync(sourcesDir, { withFileTypes: true })) {
      if (sub.isDirectory()) {
        totalSources += countFilesInDir(join(sourcesDir, sub.name));
      }
    }
  }

  // --- Tensions ---
  const tensionsDir = join(KB_ROOT, "tensions");
  let totalTensions = 0;
  let resolvedTensions = 0;
  if (existsSync(tensionsDir)) {
    const tensionFiles = readdirSync(tensionsDir).filter(
      (f) => f.endsWith(".md") && f !== "_index.md"
    );
    totalTensions = tensionFiles.length;
    for (const file of tensionFiles) {
      const raw = readFileSync(join(tensionsDir, file), "utf-8");
      const parsed = matter(raw);
      if (
        parsed.data.status === "resolved" ||
        parsed.data.status === "resolved_with_nuance"
      ) {
        resolvedTensions++;
      }
    }
  }

  // --- Confidence ---
  const confRows = db
    .prepare(
      "SELECT confidence, COUNT(*) as c FROM insights WHERE status = 'active' GROUP BY confidence"
    )
    .all() as Array<{ confidence: string; c: number }>;

  const confidenceDistribution: Record<string, number> = {};
  let confidenceSum = 0;
  let confidenceCount = 0;

  for (const row of confRows) {
    confidenceDistribution[row.confidence] = row.c;
    const numericValue = CONFIDENCE_SCALE[row.confidence] ?? 0;
    confidenceSum += numericValue * row.c;
    confidenceCount += row.c;
  }

  const meanConfidence =
    confidenceCount > 0
      ? Number((confidenceSum / confidenceCount).toFixed(4))
      : 0;

  // --- Staleness ---
  // Count time-sensitive insights older than 60 days
  const now = new Date();
  const sixtyDaysAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);
  const cutoff = sixtyDaysAgo.toISOString().split("T")[0];

  const staleCount = (
    db
      .prepare(
        `SELECT COUNT(*) as c FROM insights
         WHERE status = 'active'
         AND shelf_life = 'time-sensitive'
         AND date_extracted < ?`
      )
      .get(cutoff) as { c: number }
  ).c;

  const timeSensitiveTotal = (
    db
      .prepare(
        "SELECT COUNT(*) as c FROM insights WHERE status = 'active' AND shelf_life = 'time-sensitive'"
      )
      .get() as { c: number }
  ).c;

  const stalenessRate =
    timeSensitiveTotal > 0
      ? Number((staleCount / timeSensitiveTotal).toFixed(4))
      : 0;

  // --- Related links (from YAML frontmatter) ---
  let totalRelatedLinks = 0;
  let insightsWithRelations = 0;
  let sampledInsights = 0;

  // Sample from DB, read frontmatter for related[]
  const allInsights = db
    .prepare(
      "SELECT file_path FROM insights WHERE status = 'active'"
    )
    .all() as Array<{ file_path: string }>;

  for (const row of allInsights) {
    // file_path in DB may be absolute or relative
    const fullPath = row.file_path.startsWith("/")
      ? row.file_path
      : join(__dirname, "..", row.file_path);
    if (!existsSync(fullPath)) continue;

    try {
      const raw = readFileSync(fullPath, "utf-8");
      const parsed = matter(raw);
      const related = parsed.data.related;
      sampledInsights++;

      if (Array.isArray(related) && related.length > 0) {
        insightsWithRelations++;
        totalRelatedLinks += related.length;
      }
    } catch {
      // Skip unreadable files
    }
  }

  const meanRelatedLinks =
    sampledInsights > 0
      ? Number((totalRelatedLinks / sampledInsights).toFixed(4))
      : 0;

  const relationsRate =
    sampledInsights > 0
      ? Number((insightsWithRelations / sampledInsights).toFixed(4))
      : 0;

  // --- Learning flags ---
  const flags = parseFlagsFile();

  // --- Build snapshot ---
  const snapshot: Snapshot = {
    timestamp: new Date().toISOString(),
    version: 1,

    total_insights: totalInsights,
    total_principles: totalPrinciples,
    total_sources: totalSources,
    total_tensions: totalTensions,
    total_domains: domainNames.length,

    embedding_coverage:
      totalInsights > 0
        ? Number((embeddedCount / totalInsights).toFixed(4))
        : 0,
    index_coverage:
      insightsOnDisk > 0
        ? Number((totalInsights / insightsOnDisk).toFixed(4))
        : 0,

    mean_confidence: meanConfidence,
    confidence_distribution: confidenceDistribution,
    compression_ratio:
      totalInsights > 0
        ? Number((totalPrinciples / totalInsights).toFixed(4))
        : 0,
    tension_resolution_rate:
      totalTensions > 0
        ? Number((resolvedTensions / totalTensions).toFixed(4))
        : 0,
    staleness_rate: stalenessRate,

    mean_related_links: meanRelatedLinks,
    insights_with_relations: relationsRate,
    cross_domain_transfers: flags.transfers,
    knowledge_gaps: flags.gaps,
    compress_flags: flags.compress,
    cluster_flags: flags.discover,

    // --- KQ (Knowledge Quality) Metric ---
    kq: 0, // computed below
    kq_components: {
      avg_sampled_iqs: 0,
      compression_ratio: 0,
      synthesis_hit_rate: 0,
      staleness_factor: 0,
    },

    domains: domainMetrics,
  };

  // Compute KQ components
  const scoresFile = join(KB_ROOT, "meta", "quality-scores.jsonl");
  let avgIQS = 5.0; // default if no scores yet
  if (existsSync(scoresFile)) {
    const lines = readFileSync(scoresFile, "utf-8")
      .split("\n")
      .filter((l) => l.trim())
      .map((l) => { try { return JSON.parse(l); } catch { return null; } })
      .filter((d) => d && typeof d.totalIQS === "number");
    if (lines.length > 0) {
      avgIQS = lines.reduce((s: number, d: any) => s + d.totalIQS, 0) / lines.length;
    }
  }

  const compressionRatio = totalInsights > 0 ? totalPrinciples / totalInsights : 0;
  const synthesisFile = join(KB_ROOT, "meta", "synthesis-candidates.json");
  let synthesisCount = 0;
  if (existsSync(synthesisFile)) {
    try {
      const synthData = JSON.parse(readFileSync(synthesisFile, "utf-8"));
      synthesisCount = Array.isArray(synthData) ? synthData.length : 0;
    } catch {}
  }
  const totalPrinciplePairs = totalPrinciples * (totalPrinciples - 1) / 2;
  const synthesisHitRate = totalPrinciplePairs > 0 ? synthesisCount / totalPrinciplePairs : 0;
  const stalenessFactor = 1 + (staleCount / Math.max(totalInsights, 1));

  // KQ = (avgIQS/10 × compressionRatio × 1000 × (1 + synthesisHitRate)) / stalenessFactor
  // Normalized to ~0-100 scale
  const kq = Number(
    ((avgIQS / 10) * (compressionRatio * 1000) * (1 + synthesisHitRate * 100) / stalenessFactor).toFixed(2)
  );

  snapshot.kq = kq;
  snapshot.kq_components = {
    avg_sampled_iqs: Number(avgIQS.toFixed(2)),
    compression_ratio: Number(compressionRatio.toFixed(4)),
    synthesis_hit_rate: Number(synthesisHitRate.toFixed(6)),
    staleness_factor: Number(stalenessFactor.toFixed(4)),
  };

  // --- Write snapshot ---
  writeFileSync(SNAPSHOT_PATH, JSON.stringify(snapshot, null, 2) + "\n");

  // --- Display ---
  console.log("  Knowledge Base");
  console.log(
    `    Insights: ${snapshot.total_insights} | Principles: ${snapshot.total_principles} | Sources: ${snapshot.total_sources}`
  );
  console.log(
    `    Tensions: ${snapshot.total_tensions} (${resolvedTensions} resolved) | Domains: ${snapshot.total_domains}`
  );
  console.log();

  console.log("  Health");
  console.log(
    `    Embedding coverage:  ${(snapshot.embedding_coverage * 100).toFixed(1)}%`
  );
  console.log(
    `    Index coverage:      ${(snapshot.index_coverage * 100).toFixed(1)}%`
  );
  console.log(
    `    Staleness rate:      ${(snapshot.staleness_rate * 100).toFixed(1)}% of time-sensitive insights`
  );
  console.log();

  console.log("  Knowledge Quality");
  console.log(`    ★ KQ Score:          ${snapshot.kq.toFixed(1)}`);
  console.log(`      Avg IQS:           ${snapshot.kq_components.avg_sampled_iqs.toFixed(1)} / 10`);
  console.log(`      Compression:       ${(snapshot.kq_components.compression_ratio * 100).toFixed(1)}%`);
  console.log(`      Synthesis rate:    ${(snapshot.kq_components.synthesis_hit_rate * 10000).toFixed(1)} per 10k pairs`);
  console.log(`      Staleness factor:  ${snapshot.kq_components.staleness_factor.toFixed(3)}`);
  console.log();
  console.log(`    Mean confidence:     ${snapshot.mean_confidence.toFixed(2)} / 4.00`);
  console.log(
    `    Compression ratio:   ${(snapshot.compression_ratio * 100).toFixed(1)}% (principles/insights)`
  );
  console.log(
    `    Tension resolution:  ${(snapshot.tension_resolution_rate * 100).toFixed(1)}%`
  );
  console.log();

  console.log("  Structural Health");
  console.log(
    `    Mean related links:  ${snapshot.mean_related_links.toFixed(2)} per insight`
  );
  console.log(
    `    Insights with links: ${(snapshot.insights_with_relations * 100).toFixed(1)}%`
  );
  console.log(`    COMPRESS flags:      ${snapshot.compress_flags}`);
  console.log(`    DISCOVER clusters:   ${snapshot.cluster_flags}`);
  console.log(`    GAP flags:           ${snapshot.knowledge_gaps}`);
  console.log(`    TRANSFER flags:      ${snapshot.cross_domain_transfers}`);
  console.log();

  console.log("  Per-Domain Breakdown");
  for (const [domain, m] of Object.entries(snapshot.domains).sort(
    (a, b) => b[1].insights - a[1].insights
  )) {
    const comprPct = (m.compression_ratio * 100).toFixed(1);
    console.log(
      `    ${domain.padEnd(20)} ${String(m.insights).padStart(4)} insights | ${String(m.principles).padStart(3)} principles (${comprPct}%) | ${m.topics} topics`
    );
  }

  console.log(`\n  Snapshot written to benchmarks/snapshot.json`);
  db.close();
}

main();
