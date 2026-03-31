#!/usr/bin/env npx tsx

// ─── Zuhn Benchmark Regression Check ────────────────────────────────
// Compares current metrics against the previous snapshot.
// Fails (exit 1) if any metric degrades beyond defined thresholds.
// Run: npm run bench:check

import { join } from "node:path";
import { readFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

const SNAPSHOT_PATH = join(__dirname, "snapshot.json");

// ─── Thresholds ──────────────────────────────────────────────────────

interface Rule {
  metric: string;
  direction: "up" | "down" | "stable";
  threshold: number;
  description: string;
}

const RULES: Rule[] = [
  // Health — these should stay high
  {
    metric: "embedding_coverage",
    direction: "up",
    threshold: 0.05,
    description: "Embedding coverage should not drop",
  },
  {
    metric: "index_coverage",
    direction: "up",
    threshold: 0.05,
    description: "Index coverage should not drop",
  },

  // Quality — these should improve or stay stable
  {
    metric: "mean_confidence",
    direction: "up",
    threshold: 0.3,
    description: "Mean confidence should not significantly drop",
  },
  {
    metric: "compression_ratio",
    direction: "up",
    threshold: 0.02,
    description: "Compression ratio should improve over time",
  },

  // Structural — related links should grow
  {
    metric: "insights_with_relations",
    direction: "up",
    threshold: 0.1,
    description: "Connected insights should not significantly decrease",
  },
  {
    metric: "mean_related_links",
    direction: "up",
    threshold: 0.5,
    description: "Mean related links should not significantly decrease",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────

function getMetric(obj: Record<string, unknown>, path: string): number {
  const value = path.split(".").reduce<unknown>((o, key) => {
    if (o && typeof o === "object") return (o as Record<string, unknown>)[key];
    return undefined;
  }, obj);
  return typeof value === "number" ? value : 0;
}

// ─── Main ────────────────────────────────────────────────────────────

function main(): void {
  console.log("╔══════════════════════════════════════╗");
  console.log("║     Benchmark Regression Check       ║");
  console.log("╚══════════════════════════════════════╝\n");

  if (!existsSync(SNAPSHOT_PATH)) {
    console.log("  No previous snapshot found. Run `npm run bench` first to create a baseline.");
    process.exit(0);
  }

  const previous = JSON.parse(readFileSync(SNAPSHOT_PATH, "utf-8"));
  console.log(`  Previous snapshot: ${previous.timestamp}`);
  console.log(`  Running fresh benchmark...\n`);

  // Run bench to get current metrics (safe: no shell, no user input)
  execFileSync("npx", ["tsx", "benchmarks/bench.ts"], { stdio: "pipe" });

  const current = JSON.parse(readFileSync(SNAPSHOT_PATH, "utf-8"));
  console.log(`  Current snapshot:  ${current.timestamp}\n`);

  // Compare
  let failures = 0;
  let passes = 0;

  console.log("  Regression Checks");
  console.log("  ─────────────────────────────────────────");

  for (const rule of RULES) {
    const prev = getMetric(previous, rule.metric);
    const curr = getMetric(current, rule.metric);
    const diff = curr - prev;

    let passed = true;

    if (rule.direction === "up" && diff < -rule.threshold) {
      passed = false;
    } else if (rule.direction === "down" && diff > rule.threshold) {
      passed = false;
    } else if (rule.direction === "stable") {
      const pctChange = prev !== 0 ? Math.abs(diff / prev) : Math.abs(diff);
      if (pctChange > rule.threshold / 100) {
        passed = false;
      }
    }

    if (!passed) {
      failures++;
    } else {
      passes++;
    }

    const symbol = passed ? "✓" : "✗";
    const diffStr = diff >= 0 ? `+${diff.toFixed(4)}` : diff.toFixed(4);
    const status = passed ? "\x1b[32m" : "\x1b[31m";
    const reset = "\x1b[0m";

    console.log(
      `  ${status}${symbol}${reset} ${rule.metric.padEnd(28)} ${String(prev.toFixed(4)).padStart(8)} → ${String(curr.toFixed(4)).padStart(8)} (${diffStr}) ${!passed ? `← ${rule.description}` : ""}`
    );
  }

  console.log("  ─────────────────────────────────────────");

  // Growth metrics (informational, not gated)
  console.log("\n  Growth Metrics (informational)");
  const growthMetrics = [
    "total_insights",
    "total_principles",
    "total_sources",
    "total_tensions",
    "total_domains",
    "compress_flags",
    "knowledge_gaps",
    "cross_domain_transfers",
    "cluster_flags",
  ];

  for (const metric of growthMetrics) {
    const prev = getMetric(previous, metric);
    const curr = getMetric(current, metric);
    const diff = curr - prev;
    const diffStr = diff >= 0 ? `+${diff}` : `${diff}`;
    const arrow = diff > 0 ? "↑" : diff < 0 ? "↓" : "=";
    console.log(
      `    ${metric.padEnd(28)} ${String(prev).padStart(6)} → ${String(curr).padStart(6)} (${arrow} ${diffStr})`
    );
  }

  console.log();
  if (failures > 0) {
    console.log(
      `  \x1b[31m✗ FAILED: ${failures} regression(s) detected, ${passes} passed\x1b[0m`
    );
    process.exit(1);
  } else {
    console.log(
      `  \x1b[32m✓ PASSED: All ${passes} checks passed\x1b[0m`
    );
  }
}

main();
