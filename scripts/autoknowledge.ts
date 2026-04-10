#!/usr/bin/env npx tsx
/**
 * autoknowledge.ts — Autonomous knowledge research loop.
 *
 * The knowledge-work equivalent of Karpathy's autoresearch.
 * Human writes CLAUDE.md (= program.md), agent runs the loop.
 *
 * Loop:
 *   1. Pick source from backlog (unextracted, sorted by word count)
 *   2. Spawn claude agent → extract insights
 *   3. Run extract.ts (Zod validation = grader)
 *   4. Measure quality metrics
 *   5. Every N sources: run post-ingest (learn.ts = second grader)
 *   6. If COMPRESS threshold crossed → auto-compress
 *   7. Log metrics, iterate
 *
 * Usage:
 *   npx tsx scripts/autoknowledge.ts                    # Process all unextracted
 *   npx tsx scripts/autoknowledge.ts --limit 10         # Process 10 sources
 *   npx tsx scripts/autoknowledge.ts --channel "EO"     # Process one channel
 *   npx tsx scripts/autoknowledge.ts --dry-run           # Show what would be processed
 */

import { execFileSync, execFile } from "node:child_process";
import { promisify } from "node:util";
import { readFileSync, writeFileSync, existsSync, appendFileSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import fg from "fast-glob";
import matter from "gray-matter";

const execFileAsync = promisify(execFile);

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");
const METRICS_FILE = join(KB_ROOT, "meta", "autoknowledge-metrics.jsonl");
const POST_INGEST_EVERY = 10; // Run post-ingest every N sources
const CONCURRENCY = 3; // Parallel extraction workers
const MIN_WORD_COUNT = 500; // Skip sources below this threshold
const EXTRACTION_TIMEOUT = 10 * 60 * 1000; // 10 min per source
const MAX_RETRIES = 1; // Retry once on timeout

// ─── Types ──────────────────────────────────────────────────────────

interface SourceEntry {
  id: string;
  filePath: string;
  channel: string;
  title: string;
  wordCount: number;
  cleanTxtPath: string | null;
}

interface ExtractionMetrics {
  timestamp: string;
  sourceId: string;
  channel: string;
  wordCount: number;
  insightsCreated: number;
  extractionTimeMs: number;
  zodPassedFirstTry: boolean;
  error: string | null;
}

interface BatchMetrics {
  timestamp: string;
  sourcesProcessed: number;
  totalInsights: number;
  avgInsightsPerSource: number;
  avgExtractionTimeMs: number;
  zodFirstTryRate: number;
  compressTriggered: string[];
  newClusters: number;
  newTransfers: number;
  newSynthesis: number;
}

// ─── Source Discovery ───────────────────────────────────────────────

async function findUnextractedSources(
  channelFilter?: string
): Promise<SourceEntry[]> {
  const files = await fg("sources/{youtube,blog,reddit,pdf,audio,paste}/*.md", {
    cwd: KB_ROOT,
    absolute: true,
    ignore: ["**/raw/**", "**/_index.md"],
  });

  const sources: SourceEntry[] = [];
  let skippedTiny = 0;

  for (const filePath of files) {
    const raw = readFileSync(filePath, "utf-8");
    const { data } = matter(raw);

    if (data.insight_count !== 0) continue;
    if (channelFilter && data.channel !== channelFilter) continue;

    const wordCount = (data.word_count as number) || 0;

    // Skip sources below word count floor — newsletter stubs, paywalled previews
    if (wordCount < MIN_WORD_COUNT) {
      skippedTiny++;
      continue;
    }

    const cleanTxt = filePath.replace(".md", ".clean.txt");

    sources.push({
      id: data.id as string,
      filePath,
      channel: typeof data.channel === "string" ? data.channel
        : typeof data.author === "string" ? data.author
        : data.author?.name ? String(data.author.name)
        : "unknown",
      title: (data.title as string) || "untitled",
      wordCount,
      cleanTxtPath: existsSync(cleanTxt) ? cleanTxt : null,
    });
  }

  if (skippedTiny > 0) {
    console.log(`Skipped ${skippedTiny} sources below ${MIN_WORD_COUNT}-word floor.`);
  }

  // Sort by word count descending (richest content first)
  return sources.sort((a, b) => b.wordCount - a.wordCount);
}

// ─── Extraction (Parent-Execution Pattern) ─────────────────────────
//
// Architecture: Claude's ONLY job is to read the source and write JSON.
// The parent process (this script) then:
//   1. Parses the JSON natively → exact insight count (no regex guessing)
//   2. Runs extract.ts itself → guaranteed execution
// This eliminates the telemetry blind spot and saves Claude a tool-use cycle.

async function extractSource(source: SourceEntry, attempt = 0): Promise<ExtractionMetrics> {
  const start = Date.now();
  const tmpFile = `/tmp/zuhn-extract-${source.id}.json`;

  // Domain/topic hints based on channel
  const topicHints = getTopicHints(source.channel);

  // Load any self-improvement refinements
  let refinements = "";
  if (existsSync(PROMPT_REFINEMENTS_FILE)) {
    const refContent = readFileSync(PROMPT_REFINEMENTS_FILE, "utf-8");
    const blocks = refContent.split(/^## Refinement /m).filter((b) => b.trim());
    if (blocks.length > 0) {
      const latest = blocks[blocks.length - 1];
      const lines = latest.split("\n").filter((l) => l.startsWith("- "));
      if (lines.length > 0) {
        refinements = "\n\nLEARNED FROM PREVIOUS EXTRACTIONS:\n" + lines.join("\n");
      }
    }
  }

  // Find the actual source file path
  const sourceFile = source.cleanTxtPath || source.filePath;

  // Claude's ONLY job: read the source, write the JSON file, then exit.
  // extract.ts is run by the parent process (below).
  const prompt = `Extract insights from a source file. Your ONLY output is a JSON file.

STEP 1: Read this file:
${sourceFile}

STEP 2: Write a JSON file to ${tmpFile} with this EXACT format:
{"source_summary":"2-3 sentence summary","insights":[{"domain":"...","topic":"...","title":"Clear title","stance":"One directional claim","actionability":"immediate","confidence":"high","shelf_life":"evergreen","tags":["tag1","tag2"],"resolutions":{"one_line":"One sentence","standard":"2-3 paragraph explanation"}}]}

RULES for the JSON:
- Extract 3-5 insights from the content
- Topics to use: ${topicHints}
- shelf_life must be "evergreen" or "time-sensitive" ONLY
- actionability must be "immediate" or "reference" or "inspiration" ONLY
- confidence must be "low" or "medium" or "high" ONLY
- Every insight MUST have a stance that is a directional claim

DO NOT run extract.ts. Just write the JSON file and exit.
${refinements}`;

  let insightsCreated = 0;
  let zodPassed = true;
  let error: string | null = null;

  try {
    // Async execution — does NOT block the event loop
    await execFileAsync("claude", [
      "-p", prompt,
      "--allowedTools", "Read,Write",
      "--add-dir", KB_ROOT,
    ], {
      cwd: PROJECT_ROOT,
      timeout: EXTRACTION_TIMEOUT,
      encoding: "utf-8",
      maxBuffer: 10 * 1024 * 1024,
    });

    // Parent-Execution: parse JSON natively for perfect telemetry
    if (existsSync(tmpFile)) {
      try {
        const raw = readFileSync(tmpFile, "utf-8");
        const parsed = JSON.parse(raw);
        insightsCreated = Array.isArray(parsed.insights) ? parsed.insights.length : 0;
      } catch {
        error = "JSON parse failed on Claude output";
        zodPassed = false;
      }

      // Parent runs extract.ts — guaranteed execution, no regex needed
      if (!error && insightsCreated > 0) {
        try {
          execFileSync("npx", [
            "tsx", "scripts/extract.ts",
            "--source", source.id,
            "--file", tmpFile,
          ], {
            cwd: PROJECT_ROOT,
            timeout: 2 * 60 * 1000, // 2 min for extract.ts
            encoding: "utf-8",
            maxBuffer: 10 * 1024 * 1024,
          });
        } catch (extractErr) {
          error = "extract.ts failed: " + (extractErr instanceof Error ? extractErr.message.slice(0, 150) : "unknown");
          zodPassed = false;
        }
      }
    } else {
      error = "Claude did not write JSON file";
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Agent failed";

    // Retry once on timeout
    if (msg.includes("ETIMEDOUT") && attempt < MAX_RETRIES) {
      console.log(`  ⟳ Timeout on attempt ${attempt + 1}, retrying...`);
      return extractSource(source, attempt + 1);
    }

    error = msg.slice(0, 200);
  }

  // Clean up tmp files
  try { unlinkSync(tmpFile); } catch {}

  const metrics: ExtractionMetrics = {
    timestamp: new Date().toISOString(),
    sourceId: source.id,
    channel: source.channel,
    wordCount: source.wordCount,
    insightsCreated,
    extractionTimeMs: Date.now() - start,
    zodPassedFirstTry: zodPassed,
    error,
  };

  // Append to metrics log
  appendFileSync(METRICS_FILE, JSON.stringify(metrics) + "\n");

  return metrics;
}

// ─── Topic Hints ────────────────────────────────────────────────────

function getTopicHints(channel: string): string {
  const hints: Record<string, string> = {
    "Paul Saladino MD": "health/nutrition, health/biohacking",
    "Dr. Eric Berg DC": "health/nutrition, health/biohacking",
    "Epic History": "investing/geopolitics",
    "Sequoia Capital": "startups/scaling, startups/leadership, startups/founder-mindset, ai-development/product-strategy",
    "How Money Works": "investing/geopolitics, investing/bubbles, investing/fintech, startups/business-models",
    "EO": "startups/founder-mindset, startups/execution, startups/leadership",
    "Pursuit of Wonder": "psychology/perception, psychology/consciousness, psychology/focus",
    "Levi Hildebrand": "startups/growth-marketing, psychology/perception",
    "Modern MBA": "startups/competitive-strategy, startups/business-models",
    "FounderCoHo": "startups/founder-mindset, startups/execution, startups/product-development",
  };
  return hints[channel] || "check ls knowledge-base/domains/*/";
}

// ─── Post-Ingest (Second Grader) ────────────────────────────────────

function runPostIngest(): BatchMetrics | null {
  try {
    const output = execFileSync("npx", ["tsx", "scripts/post-ingest.ts"], {
      cwd: PROJECT_ROOT,
      timeout: 10 * 60 * 1000,
      encoding: "utf-8",
      maxBuffer: 10 * 1024 * 1024,
    });

    // Parse learning mechanism results
    const clusterMatch = output.match(/Cluster flags:\s*(\d+)/);
    const transferMatch = output.match(/Transfer flags:\s*(\d+)/);
    const synthesisMatch = output.match(/Synthesis flags:\s*(\d+)/);

    // Check for COMPRESS flags
    const compressTopics: string[] = [];
    const compressMatch = output.match(/COMPRESS.*?(?=##|\n\n)/s);
    if (compressMatch && !compressMatch[0].includes("None")) {
      const topicMatches = compressMatch[0].matchAll(/domains\/(\S+)/g);
      for (const m of topicMatches) {
        compressTopics.push(m[1]);
      }
    }

    return {
      timestamp: new Date().toISOString(),
      sourcesProcessed: 0, // filled by caller
      totalInsights: 0,
      avgInsightsPerSource: 0,
      avgExtractionTimeMs: 0,
      zodFirstTryRate: 0,
      compressTriggered: compressTopics,
      newClusters: clusterMatch ? parseInt(clusterMatch[1]) : 0,
      newTransfers: transferMatch ? parseInt(transferMatch[1]) : 0,
      newSynthesis: synthesisMatch ? parseInt(synthesisMatch[1]) : 0,
    };
  } catch {
    return null;
  }
}

// ─── Self-Improvement: Analyze Quality ──────────────────────────────

interface QualityAnalysis {
  totalExtractions: number;
  avgInsightsPerSource: number;
  zodFirstTryRate: number;
  commonErrors: string[];
  weakChannels: string[];
  strongChannels: string[];
  recommendations: string[];
}

function analyzeQuality(): QualityAnalysis | null {
  if (!existsSync(METRICS_FILE)) return null;

  const lines = readFileSync(METRICS_FILE, "utf-8")
    .split("\n")
    .filter((l) => l.trim())
    .map((l) => {
      try { return JSON.parse(l); } catch { return null; }
    })
    .filter((d): d is ExtractionMetrics => d !== null && !d.type);

  if (lines.length < 5) return null;

  // Overall stats
  const successful = lines.filter((m) => !m.error);
  const avgInsights = successful.length > 0
    ? successful.reduce((s, m) => s + m.insightsCreated, 0) / successful.length
    : 0;
  const zodRate = successful.length > 0
    ? successful.filter((m) => m.zodPassedFirstTry).length / successful.length
    : 0;

  // Error analysis
  const errorMessages = lines.filter((m) => m.error).map((m) => m.error!);
  const errorFreq = new Map<string, number>();
  for (const err of errorMessages) {
    const key = err.slice(0, 50);
    errorFreq.set(key, (errorFreq.get(key) || 0) + 1);
  }
  const commonErrors = [...errorFreq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([err, count]) => `${err} (${count}x)`);

  // Channel analysis
  const channelStats = new Map<string, { total: number; insights: number; errors: number }>();
  for (const m of lines) {
    const stats = channelStats.get(m.channel) || { total: 0, insights: 0, errors: 0 };
    stats.total++;
    stats.insights += m.insightsCreated;
    if (m.error) stats.errors++;
    channelStats.set(m.channel, stats);
  }

  const weakChannels: string[] = [];
  const strongChannels: string[] = [];
  for (const [channel, stats] of channelStats) {
    const avg = stats.insights / stats.total;
    if (avg < 1.5 && stats.total >= 3) weakChannels.push(`${channel} (${avg.toFixed(1)}/source)`);
    if (avg > 3.0 && stats.total >= 3) strongChannels.push(`${channel} (${avg.toFixed(1)}/source)`);
  }

  // Recommendations
  const recommendations: string[] = [];
  if (zodRate < 0.9) {
    recommendations.push("Zod pass rate below 90% — add explicit enum values to extraction prompt");
  }
  if (avgInsights < 2.0) {
    recommendations.push("Low insights/source — increase extraction depth or reduce filtering");
  }
  if (commonErrors.length > 0) {
    recommendations.push(`Most common error: ${commonErrors[0]} — add guardrail to prompt`);
  }
  if (weakChannels.length > 0) {
    recommendations.push(`Weak channels: ${weakChannels.join(", ")} — refine topic hints`);
  }

  return {
    totalExtractions: lines.length,
    avgInsightsPerSource: avgInsights,
    zodFirstTryRate: zodRate,
    commonErrors,
    weakChannels,
    strongChannels,
    recommendations,
  };
}

// ─── Self-Improvement: Auto-Compress ────────────────────────────────

function autoCompress(topic: string): number {
  console.log(`  ⚡ Auto-compressing ${topic}...`);

  const prompt = `Run compression on ${topic} in the Zuhn knowledge base at ${PROJECT_ROOT}.

1. Run: npx tsx scripts/compress.ts --topic ${topic}
2. Read the output — it shows all insights and existing principles
3. Identify 2-4 patterns that multiple insights support
4. Write principles JSON to /tmp/zuhn-principles-auto.json in this format:
{
  "principles": [{
    "domain": "...",
    "title": "Short principle title",
    "summary": "2-3 sentence summary",
    "confidence": "high",
    "supporting_insights": ["INS-XXXXXX-XXXX", ...],
    "tags": ["tag1", "tag2"]
  }]
}
5. Run: npx tsx scripts/create-principles.ts --file /tmp/zuhn-principles-auto.json

Do NOT create principles that duplicate existing ones shown in the compress output.`;

  try {
    const output = execFileSync("claude", ["-p", prompt, "--allowedTools", "Read,Write,Bash,Glob,Grep"], {
      cwd: PROJECT_ROOT,
      timeout: 10 * 60 * 1000,
      encoding: "utf-8",
      maxBuffer: 10 * 1024 * 1024,
    });

    const countMatch = output.match(/Created: (\d+)/);
    return countMatch ? parseInt(countMatch[1], 10) : 0;
  } catch {
    console.log("    Compression failed — skipping");
    return 0;
  }
}

// ─── Self-Improvement: Refine Extraction Prompt ─────────────────────

const PROMPT_REFINEMENTS_FILE = join(KB_ROOT, "meta", "autoknowledge-refinements.md");

function refineExtractionPrompt(analysis: QualityAnalysis): void {
  const refinements: string[] = [];
  const timestamp = new Date().toISOString();

  if (analysis.zodFirstTryRate < 0.9) {
    refinements.push(
      "- ENUM ENFORCEMENT: shelf_life MUST be exactly \"evergreen\" or \"time-sensitive\". " +
      "actionability MUST be exactly \"immediate\", \"reference\", or \"inspiration\". " +
      "confidence MUST be exactly \"low\", \"medium\", or \"high\". " +
      "No other values. No variations. No creativity on enum fields."
    );
  }

  if (analysis.avgInsightsPerSource < 1.5) {
    refinements.push(
      "- DEPTH: Extract MORE insights. Aim for 3-5 per source. " +
      "Look for: counter-intuitive claims, specific tactics/frameworks, " +
      "quantitative findings, cross-domain applications."
    );
  }

  for (const err of analysis.commonErrors) {
    if (err.includes("duplicate")) {
      refinements.push(
        "- DEDUP: Before writing insights, check if a similar insight already exists. " +
        "Search: npm run search 'key phrase from your insight'"
      );
    }
    if (err.includes("schema") || err.includes("validation")) {
      refinements.push(
        "- VALIDATION: After writing JSON, validate it mentally: " +
        "does every insight have domain, topic, title, stance, actionability, " +
        "confidence, shelf_life, tags (array), resolutions.one_line, resolutions.standard?"
      );
    }
  }

  if (analysis.weakChannels.length > 0) {
    refinements.push(
      `- WEAK CHANNELS: These channels produce fewer insights than average: ${analysis.weakChannels.join(", ")}. ` +
      "For these, look harder for non-obvious patterns and cross-domain applications."
    );
  }

  if (refinements.length > 0) {
    const entry = `\n## Refinement ${timestamp}\n\nBased on ${analysis.totalExtractions} extractions (avg ${analysis.avgInsightsPerSource.toFixed(1)}/source, ${(analysis.zodFirstTryRate * 100).toFixed(0)}% Zod pass rate):\n\n${refinements.join("\n")}\n`;

    appendFileSync(PROMPT_REFINEMENTS_FILE, entry);
    console.log(`  Wrote ${refinements.length} prompt refinements to meta/autoknowledge-refinements.md`);
  }
}

// ─── Main Loop ──────────────────────────────────────────────────────

const LOCK_FILE = join(KB_ROOT, "meta", ".autoknowledge.lock");

async function main(): Promise<void> {
  // Prevent concurrent runs
  if (existsSync(LOCK_FILE)) {
    const { statSync } = await import("node:fs");
    const lockAge = Date.now() - statSync(LOCK_FILE).mtimeMs;
    if (lockAge < 60 * 60 * 1000) { // Lock valid for 60 min (extended for parallel runs)
      console.log("Autoknowledge already running (lock file exists). Skipping.");
      return;
    }
    // Stale lock — remove it
    unlinkSync(LOCK_FILE);
  }
  writeFileSync(LOCK_FILE, `${process.pid}\n${new Date().toISOString()}`);
  const removeLock = () => { try { unlinkSync(LOCK_FILE); } catch {} };
  process.on("exit", removeLock);
  process.on("SIGINT", () => { removeLock(); process.exit(0); });
  process.on("SIGTERM", () => { removeLock(); process.exit(0); });

  // Parse args
  const args = process.argv.slice(2);
  const limit = args.includes("--limit")
    ? parseInt(args[args.indexOf("--limit") + 1])
    : Infinity;
  const channelFilter = args.includes("--channel")
    ? args[args.indexOf("--channel") + 1]
    : undefined;
  const dryRun = args.includes("--dry-run");

  console.log("╔══════════════════════════════════════╗");
  console.log("║     autoknowledge — knowledge RL     ║");
  console.log("╚══════════════════════════════════════╝");
  console.log();

  // 1. Discover unextracted sources
  const sources = await findUnextractedSources(channelFilter);
  const toProcess = sources.slice(0, limit);

  console.log(`Found ${sources.length} unextracted sources.`);
  console.log(`Processing ${toProcess.length}${channelFilter ? ` (channel: ${channelFilter})` : ""}.`);
  console.log();

  if (dryRun) {
    for (const s of toProcess) {
      console.log(`  ${s.id} | ${s.wordCount} words | ${s.channel} | ${s.title.slice(0, 60)}`);
    }
    return;
  }

  // 2. Process loop — chunked parallel execution
  //    Each chunk runs CONCURRENCY extractions in parallel via Promise.all.
  //    Post-ingest + refinement gates run between chunks (sequentially).
  const batchMetrics: ExtractionMetrics[] = [];
  let batchInsights = 0;
  let processed = 0;

  for (let chunkStart = 0; chunkStart < toProcess.length; chunkStart += CONCURRENCY) {
    const chunk = toProcess.slice(chunkStart, chunkStart + CONCURRENCY);

    // Log what's starting
    for (const source of chunk) {
      processed++;
      console.log(`[${processed}/${toProcess.length}] ⚡ ${source.id} — ${source.channel} — ${source.title.slice(0, 50)}...`);
    }

    // True parallel execution — Promise.all with async execFile
    const chunkResults = await Promise.all(
      chunk.map((source) => extractSource(source))
    );

    // Log results
    for (const metrics of chunkResults) {
      batchMetrics.push(metrics);
      batchInsights += Math.max(0, metrics.insightsCreated);

      if (metrics.error) {
        console.log(`  ✗ ${metrics.sourceId}: ${metrics.error.slice(0, 80)}`);
      } else {
        console.log(`  ✓ ${metrics.sourceId}: ${metrics.insightsCreated} insights (${(metrics.extractionTimeMs / 1000).toFixed(1)}s)`);
      }
    }

    // 3. Run post-ingest every POST_INGEST_EVERY sources
    if (processed % POST_INGEST_EVERY < CONCURRENCY && processed < toProcess.length) {
      const batchNum = Math.floor(processed / POST_INGEST_EVERY);
      console.log(`\n── Post-ingest (batch ${batchNum}) ──`);
      const batch = runPostIngest();
      if (batch) {
        console.log(`  Clusters: ${batch.newClusters} | Transfers: ${batch.newTransfers} | Synthesis: ${batch.newSynthesis}`);
        if (batch.compressTriggered.length > 0) {
          console.log(`  ⚡ COMPRESS triggered: ${batch.compressTriggered.join(", ")}`);
        }
      }
      console.log();
    }
  }

  // 4. Final post-ingest
  console.log("\n── Final post-ingest ──");
  const finalBatch = runPostIngest();

  // 4b. Auto-compress if triggered
  if (finalBatch && finalBatch.compressTriggered.length > 0) {
    console.log("\n── Auto-compression ──");
    let totalPrinciples = 0;
    for (const topic of finalBatch.compressTriggered) {
      const created = autoCompress(topic);
      totalPrinciples += created;
      console.log(`  ${topic}: ${created} principles`);
    }
    if (totalPrinciples > 0) {
      console.log(`  Running post-ingest after compression...`);
      runPostIngest();
    }
  }

  // 4c. Self-improvement: analyze quality and refine prompts
  if (batchMetrics.length >= 5) {
    console.log("\n── Self-improvement ──");
    const analysis = analyzeQuality();
    if (analysis) {
      console.log(`  Quality: ${analysis.avgInsightsPerSource.toFixed(1)} insights/source, ${(analysis.zodFirstTryRate * 100).toFixed(0)}% Zod pass`);
      if (analysis.recommendations.length > 0) {
        for (const rec of analysis.recommendations) {
          console.log(`  → ${rec}`);
        }
        refineExtractionPrompt(analysis);
      } else {
        console.log("  No refinements needed — quality metrics are healthy.");
      }
    }
  }

  // 5. Summary
  const successful = batchMetrics.filter((m) => !m.error);
  const zodPassRate = successful.length > 0
    ? successful.filter((m) => m.zodPassedFirstTry).length / successful.length
    : 0;
  const avgTime = successful.length > 0
    ? successful.reduce((s, m) => s + m.extractionTimeMs, 0) / successful.length
    : 0;

  console.log("\n╔══════════════════════════════════════╗");
  console.log("║        autoknowledge — results       ║");
  console.log("╠══════════════════════════════════════╣");
  console.log(`║  Sources processed:  ${toProcess.length.toString().padStart(14)} ║`);
  console.log(`║  Insights created:   ${batchInsights.toString().padStart(14)} ║`);
  console.log(`║  Avg per source:     ${(batchInsights / Math.max(toProcess.length, 1)).toFixed(1).padStart(14)} ║`);
  console.log(`║  Zod first-try rate: ${(zodPassRate * 100).toFixed(0).padStart(13)}% ║`);
  console.log(`║  Avg extraction:     ${(avgTime / 1000).toFixed(1).padStart(12)}s  ║`);
  console.log(`║  Errors:             ${batchMetrics.filter((m) => m.error).length.toString().padStart(14)} ║`);
  if (finalBatch) {
    console.log(`║  DISCOVER clusters:  ${finalBatch.newClusters.toString().padStart(14)} ║`);
    console.log(`║  TRANSFER flags:     ${finalBatch.newTransfers.toString().padStart(14)} ║`);
    console.log(`║  SYNTHESIZE flags:   ${finalBatch.newSynthesis.toString().padStart(14)} ║`);
  }
  console.log("╚══════════════════════════════════════╝");

  // 6. Log batch summary
  if (finalBatch) {
    finalBatch.sourcesProcessed = toProcess.length;
    finalBatch.totalInsights = batchInsights;
    finalBatch.avgInsightsPerSource = batchInsights / Math.max(toProcess.length, 1);
    finalBatch.avgExtractionTimeMs = avgTime;
    finalBatch.zodFirstTryRate = zodPassRate;
    appendFileSync(
      METRICS_FILE,
      JSON.stringify({ type: "batch_summary", ...finalBatch }) + "\n"
    );
  }

  // 7. Residue sweep — defensive final commit.
  //
  // The Dwarkesh batch revealed that tracked files (tag indices,
  // insight cross-references, MASTER_INDEX) can land in the working
  // tree AFTER the final post-ingest's auto-git step, leaving
  // hundreds of uncommitted files. The most common cause is crash
  // recovery: if an earlier run died mid-pipeline, insight files from
  // the interrupted extraction remain untracked and are not absorbed
  // until someone notices.
  //
  // This sweep guarantees that whatever mutation happens during this
  // autoknowledge run — including any late writes from compression,
  // learning mechanisms, or crash-recovery — gets committed before
  // the process exits. It's a no-op when the working tree is clean.
  try {
    execFileSync("git", ["add", "knowledge-base/"], {
      stdio: "pipe",
      cwd: PROJECT_ROOT,
    });
    try {
      execFileSync("git", ["diff", "--cached", "--quiet"], {
        stdio: "pipe",
        cwd: PROJECT_ROOT,
      });
      // Exit 0 = no staged changes. Clean — nothing to do.
    } catch {
      // Non-zero exit = there are staged changes. Commit them.
      execFileSync(
        "git",
        ["commit", "-m", "auto: post-autoknowledge residue sweep"],
        { stdio: "pipe", cwd: PROJECT_ROOT }
      );
      console.log("\n── Residue sweep ──");
      console.log("   Committed stragglers that landed after final post-ingest.");
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`\n── Residue sweep skipped ──\n   ${msg}`);
  }
}

main().catch((err) => {
  console.error("autoknowledge failed:", err);
  process.exit(1);
});
