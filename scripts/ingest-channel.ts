#!/usr/bin/env tsx
/**
 * ingest-channel.ts — Batch ingest top videos from a YouTube channel.
 *
 * Usage:
 *   npx tsx scripts/ingest-channel.ts <channel-url> [options]
 *
 * Options:
 *   --top N        Limit to top N videos by view count (default: 50)
 *   --list-only    Create tracker file without ingesting
 *   --delay N      Seconds between ingests to avoid rate limits (default: 3)
 *   --resume       Resume from existing tracker (skip fetching video list)
 *   --auto-extract Run autoknowledge after ingestion to extract insights automatically
 *
 * Examples:
 *   npx tsx scripts/ingest-channel.ts "https://www.youtube.com/@DrEricBerg/videos" --top 100
 *   npx tsx scripts/ingest-channel.ts --resume meta/drberg-batch.txt
 */

import { execFileSync } from "node:child_process";
import { join, basename } from "node:path";
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { ingestYouTube } from "./lib/ingest/youtube";
import { slugify } from "./lib/ingest/slug";

// ─── Constants ─────────────────────────────────────────────────────────
const KB_ROOT = join(__dirname, "..", "knowledge-base");
const META_DIR = join(KB_ROOT, "meta");
const DEFAULT_TOP = 50;
const DEFAULT_DELAY = 3;
// Warn the user when --auto-extract is combined with a batch this large
// or larger. autoknowledge.ts is a long-running harness and the
// single-wrapper convenience path is a footgun at scale even after
// the 30-min outer timeout was removed. Better to recommend the
// explicit two-step ingest → extract workflow.
const LARGE_BATCH_THRESHOLD = 20;

// ─── Types ─────────────────────────────────────────────────────────────
interface VideoEntry {
  id: string;
  title: string;
  viewCount: number;
  duration: number;
  uploadDate: string;
}

// Ingest tracker statuses. "EXTRACTED" is still accepted when reading old
// tracker files, but the tracker is now explicitly ingest-only and will rewrite
// legacy EXTRACTED rows back out as INGESTED.
type TrackerStatus = "PENDING" | "INGESTED" | "SKIP" | "FAILED";

interface TrackerLine {
  status: TrackerStatus;
  videoId: string;
  views: number;
  title: string;
  sourceId?: string;
  error?: string;
}

// ─── CLI Parsing ───────────────────────────────────────────────────────
function parseArgs(): {
  channelUrl: string | null;
  top: number;
  listOnly: boolean;
  delay: number;
  resume: string | null;
  autoExtract: boolean;
} {
  const args = process.argv.slice(2);
  let channelUrl: string | null = null;
  let top = DEFAULT_TOP;
  let listOnly = false;
  let delay = DEFAULT_DELAY;
  let resume: string | null = null;
  let autoExtract = false;

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--top":
        top = parseInt(args[++i], 10);
        if (isNaN(top) || top < 1) {
          console.error("--top requires a positive integer");
          process.exit(1);
        }
        break;
      case "--list-only":
        listOnly = true;
        break;
      case "--delay":
        delay = parseInt(args[++i], 10);
        if (isNaN(delay) || delay < 0) {
          console.error("--delay requires a non-negative integer");
          process.exit(1);
        }
        break;
      case "--resume":
        resume = args[++i];
        if (!resume) {
          console.error("--resume requires a tracker file path");
          process.exit(1);
        }
        break;
      case "--auto-extract":
        autoExtract = true;
        break;
      default:
        if (!args[i].startsWith("--")) {
          channelUrl = args[i];
        } else {
          console.error(`Unknown option: ${args[i]}`);
          process.exit(1);
        }
    }
  }

  if (!channelUrl && !resume) {
    console.error(
      "Usage: npx tsx scripts/ingest-channel.ts <channel-url> [--top N] [--list-only] [--delay N]",
    );
    console.error(
      "       npx tsx scripts/ingest-channel.ts --resume <tracker-file> [--delay N]",
    );
    process.exit(1);
  }

  return { channelUrl, top, listOnly, delay, resume, autoExtract };
}

// ─── yt-dlp Helpers ────────────────────────────────────────────────────

function resolveYtDlp(): string {
  try {
    execFileSync("which", ["yt-dlp"], { stdio: "pipe" });
    return "yt-dlp";
  } catch {
    throw new Error("yt-dlp not found. Install: brew install yt-dlp");
  }
}

function fetchChannelVideos(channelUrl: string): VideoEntry[] {
  const bin = resolveYtDlp();

  // Ensure URL points to /videos tab
  let url = channelUrl.replace(/\/$/, "");
  if (!url.endsWith("/videos")) {
    url += "/videos";
  }

  console.log(`Fetching video list from: ${url}`);
  console.log("This may take a minute for large channels...\n");

  let stdout: string;
  try {
    stdout = execFileSync(
      bin,
      [
        "--flat-playlist",
        "--dump-json",
        "--no-warnings",
        "--quiet",
        url,
      ],
      {
        encoding: "utf-8",
        maxBuffer: 100 * 1024 * 1024, // 100MB for large channels
        timeout: 120_000, // 2 min
      },
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(`Failed to fetch channel videos: ${msg}`);
  }

  const videos: VideoEntry[] = [];
  for (const line of stdout.trim().split("\n")) {
    if (!line) continue;
    try {
      const info = JSON.parse(line);
      videos.push({
        id: info.id,
        title: info.title ?? "Untitled",
        viewCount: info.view_count ?? 0,
        duration: info.duration ?? 0,
        uploadDate: info.upload_date ?? "",
      });
    } catch {
      // skip malformed lines
    }
  }

  return videos;
}

function extractChannelName(url: string): string {
  // Extract from @ChannelName or /c/ChannelName or /channel/ID
  const match = url.match(/@([^/\s?]+)/);
  if (match) return match[1];

  const cMatch = url.match(/\/c\/([^/\s?]+)/);
  if (cMatch) return cMatch[1];

  const chMatch = url.match(/\/channel\/([^/\s?]+)/);
  if (chMatch) return chMatch[1];

  return "unknown-channel";
}

// ─── Tracker File ──────────────────────────────────────────────────────

function formatTrackerLine(line: TrackerLine): string {
  const parts = [line.status, line.videoId, String(line.views), line.title];
  if (line.sourceId) parts.push(line.sourceId);
  if (line.error) parts.push(`ERROR: ${line.error}`);
  return parts.join(" | ");
}

function parseTrackerLine(raw: string): TrackerLine | null {
  if (raw.startsWith("#") || raw.trim() === "") return null;

  const parts = raw.split(" | ");
  if (parts.length < 4) return null;

  const rawStatus = parts[0].trim();
  const status = (rawStatus === "EXTRACTED" ? "INGESTED" : rawStatus) as TrackerStatus;
  const videoId = parts[1].trim();
  const views = parseInt(parts[2].trim(), 10);
  const title = parts[3].trim();

  const line: TrackerLine = { status, videoId, views, title };

  // Check for source ID or error in remaining parts
  for (let i = 4; i < parts.length; i++) {
    const part = parts[i].trim();
    if (part.startsWith("SRC-")) {
      line.sourceId = part;
    } else if (part.startsWith("ERROR:")) {
      line.error = part.replace("ERROR: ", "");
    }
  }

  return line;
}

async function readTracker(path: string): Promise<{
  header: string[];
  lines: TrackerLine[];
}> {
  const content = await readFile(path, "utf-8");
  const rawLines = content.split("\n");
  const header: string[] = [];
  const lines: TrackerLine[] = [];

  for (const raw of rawLines) {
    if (raw.startsWith("#")) {
      header.push(raw);
      continue;
    }
    const parsed = parseTrackerLine(raw);
    if (parsed) lines.push(parsed);
  }

  return { header, lines };
}

async function writeTracker(
  path: string,
  header: string[],
  lines: TrackerLine[],
): Promise<void> {
  const content = [
    ...header,
    ...lines.map(formatTrackerLine),
    "", // trailing newline
  ].join("\n");
  await writeFile(path, content, "utf-8");
}

// ─── Ingest Logic ──────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

// ─── Main ──────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { channelUrl, top, listOnly, delay, resume, autoExtract } = parseArgs();

  let trackerPath: string;
  let header: string[];
  let lines: TrackerLine[];

  if (resume) {
    // Resume mode: read existing tracker
    const fullPath = resume.startsWith("/")
      ? resume
      : join(KB_ROOT, resume);

    try {
      await access(fullPath);
    } catch {
      console.error(`Tracker file not found: ${fullPath}`);
      process.exit(1);
    }

    trackerPath = fullPath;
    const tracker = await readTracker(fullPath);
    header = tracker.header;
    lines = tracker.lines;

    const pending = lines.filter((l) => l.status === "PENDING" || l.status === "FAILED");
    console.log(
      `Resuming from ${basename(fullPath)}: ${lines.length} total, ${pending.length} pending/failed\n`,
    );
  } else {
    // Fresh mode: fetch from channel
    const videos = fetchChannelVideos(channelUrl!);

    if (videos.length === 0) {
      console.error("No videos found. Check the channel URL.");
      process.exit(1);
    }

    // Sort by views descending, take top N
    videos.sort((a, b) => b.viewCount - a.viewCount);
    const selected = videos.slice(0, top);
    const viewsUnavailable = selected.length > 0 && selected.every((v) => v.viewCount === 0);
    const selectionLabel = viewsUnavailable
      ? `Selected ${selected.length} in yt-dlp default order (views unavailable)`
      : `Selected top ${selected.length} by views`;
    const trackerTitle = viewsUnavailable
      ? `# ${channelName} — ${selected.length} Videos (yt-dlp Default Order, Views Unavailable) (Batch Ingest Tracker)`
      : `# ${channelName} — Top ${selected.length} Videos by Views (Batch Ingest Tracker)`;
    const viewRangeLabel = viewsUnavailable
      ? "View range unavailable (yt-dlp returned zeroed counts)"
      : `View range: ${selected[0].viewCount.toLocaleString()} — ${selected[selected.length - 1].viewCount.toLocaleString()}`;

    const channelName = extractChannelName(channelUrl!);
    const channelSlug = slugify(channelName);
    trackerPath = join(META_DIR, `${channelSlug}-batch.txt`);

    // Check for existing tracker to preserve statuses
    let existingMap = new Map<string, TrackerLine>();
    try {
      await access(trackerPath);
      const existing = await readTracker(trackerPath);
      for (const line of existing.lines) {
        existingMap.set(line.videoId, line);
      }
      console.log(
        `Found existing tracker with ${existingMap.size} entries. Preserving statuses.\n`,
      );
    } catch {
      // No existing tracker — fresh start
    }

    header = [
      trackerTitle,
      `# Format: STATUS | VIDEO_ID | VIEWS | TITLE [| SRC_ID]`,
      `# STATUS: PENDING / INGESTED / SKIP / FAILED`,
      `# Generated: ${new Date().toISOString().slice(0, 10)}`,
      `# Source: ${channelUrl}`,
    ];

    lines = selected.map((v) => {
      const existing = existingMap.get(v.id);
      if (existing) return { ...existing, views: v.viewCount };

      return {
        status: "PENDING" as TrackerStatus,
        videoId: v.id,
        views: v.viewCount,
        title: v.title,
      };
    });

    // Print summary
    console.log(`Channel: ${channelName}`);
    console.log(`Total videos found: ${videos.length}`);
    console.log(selectionLabel);
    console.log(viewRangeLabel);

    const pending = lines.filter((l) => l.status === "PENDING");
    const alreadyDone = lines.filter((l) => l.status === "INGESTED");
    console.log(
      `Status: ${pending.length} pending, ${alreadyDone.length} already done`,
    );
    console.log(`Tracker: ${trackerPath}\n`);

    // Write tracker
    await writeTracker(trackerPath, header, lines);
  }

  if (listOnly) {
    console.log("Tracker created (--list-only). Videos:");
    for (const line of lines) {
      const flag =
        line.status === "PENDING"
          ? "  "
          : line.status === "INGESTED"
            ? "IN"
            : line.status === "SKIP"
              ? "SK"
              : "!!";
      console.log(
        `  [${flag}] ${line.videoId} | ${line.views.toLocaleString().padStart(10)} views | ${line.title}`,
      );
    }
    return;
  }

  // Ingest all PENDING and FAILED videos
  const toIngest = lines.filter(
    (l) => l.status === "PENDING" || l.status === "FAILED",
  );

  if (toIngest.length === 0) {
    console.log("Nothing to ingest — all videos already processed.");
    return;
  }

  // Honest large-batch warning: --auto-extract is a convenience for small
  // runs. At scale the two-step workflow (ingest, then autoknowledge
  // directly) is more durable — crash recovery is clearer, checkpoints are
  // explicit, no single wrapper process holds the whole job hostage.
  //
  // Note on scope: since the fix in this file, --auto-extract scopes
  // extraction to just the newly ingested cohort via an auto-generated
  // batch manifest, so it is safer than it used to be. But the two-step
  // pattern is still preferred for large batches because it gives the
  // user explicit control over the extraction phase, including the
  // ability to inspect the manifest before processing starts.
  if (autoExtract && toIngest.length >= LARGE_BATCH_THRESHOLD) {
    console.log("");
    console.log(
      `⚠  WARNING: --auto-extract with ${toIngest.length} videos exceeds the`,
    );
    console.log(
      `   recommended threshold of ${LARGE_BATCH_THRESHOLD}. --auto-extract is a small-batch`,
    );
    console.log(
      `   convenience. For large batches the durable pattern is:`,
    );
    console.log("");
    console.log(
      `     1. Run ingest-channel WITHOUT --auto-extract to create sources`,
    );
    console.log(
      `     2. Then run one of:`,
    );
    console.log(
      `          npx tsx scripts/autoknowledge.ts --channel "<name>"`,
    );
    console.log(
      `        (YouTube cohorts only — uses the channel frontmatter field)`,
    );
    console.log(
      `          npx tsx scripts/autoknowledge.ts --batch <manifest-file>`,
    );
    console.log(
      `        (general purpose — works across blog, YouTube, PDF, audio)`,
    );
    console.log("");
    console.log(
      `   Continuing anyway in 5 seconds. Press Ctrl-C to abort and switch.`,
    );
    console.log("");
    await sleep(5000);
  }

  console.log(
    `Ingesting ${toIngest.length} videos (${delay}s delay between each)...\n`,
  );

  let ingested = 0;
  let failed = 0;
  let skipped = 0;
  const startTime = Date.now();

  for (let i = 0; i < toIngest.length; i++) {
    const entry = toIngest[i];
    const idx = lines.findIndex((l) => l.videoId === entry.videoId);
    const label = `[${i + 1}/${toIngest.length}]`;
    const url = `https://www.youtube.com/watch?v=${entry.videoId}`;

    console.log(`${label} Ingesting: ${entry.title}`);
    console.log(`     ${url} (${entry.views.toLocaleString()} views)`);

    try {
      const result = await ingestYouTube(url, KB_ROOT);

      lines[idx].status = "INGESTED";
      lines[idx].sourceId = result.sourceId;
      delete lines[idx].error;
      ingested++;

      console.log(
        `${label} OK: ${result.sourceId} (${result.wordCount.toLocaleString()} words)\n`,
      );
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);

      // Truncate error for tracker (keep first 80 chars)
      const shortError = msg.length > 80 ? msg.slice(0, 77) + "..." : msg;

      lines[idx].status = "FAILED";
      lines[idx].error = shortError;
      failed++;

      console.log(`${label} FAILED: ${shortError}\n`);
    }

    // Save tracker after each video (crash recovery)
    await writeTracker(trackerPath, header, lines);

    // Delay between videos (skip on last one)
    if (delay > 0 && i < toIngest.length - 1) {
      await sleep(delay * 1000);
    }
  }

  // ─── Summary ───────────────────────────────────────────────────────
  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const totalDone = lines.filter((l) => l.status === "INGESTED").length;

  console.log("");
  console.log("╔══════════════════════════════════════╗");
  console.log("║    Channel Ingestion Complete         ║");
  console.log("╚══════════════════════════════════════╝");
  console.log("");
  console.log(`This batch:  ${ingested} ingested, ${failed} failed`);
  console.log(`Overall:     ${totalDone}/${lines.length} done`);
  console.log(`Time:        ${Math.floor(elapsed / 60)}m ${elapsed % 60}s`);
  console.log(`Tracker:     ${trackerPath}`);

  if (failed > 0) {
    console.log("");
    console.log("Failed videos:");
    for (const line of lines.filter((l) => l.status === "FAILED")) {
      console.log(`  ${line.videoId} | ${line.title}`);
      if (line.error) console.log(`    → ${line.error}`);
    }
    console.log("");
    console.log(
      "Re-run with --resume to retry failed videos.",
    );
  }

  if (ingested > 0 && autoExtract) {
    // Collect source IDs newly INGESTED in THIS run, so the autoknowledge
    // call scopes extraction to just this channel's cohort rather than
    // sweeping the global unextracted backlog.
    //
    // Filter semantics:
    //   - start from toIngest (attempted in this run)
    //   - only include rows that ended with status === "INGESTED"
    //   - only include rows that have a sourceId (INGESTED without one
    //     indicates an ingest completed but the tracker line was never
    //     updated, which is a bug elsewhere — skip defensively)
    //
    // This excludes:
    //   - pre-existing INGESTED rows from previous --resume runs
    //   - FAILED rows from this run
    //   - SKIP rows (e.g., playlists, unsupported formats)
    const newlyIngestedIds = toIngest
      .map((entry) => lines.find((l) => l.videoId === entry.videoId))
      .filter((line): line is TrackerLine =>
        line !== undefined &&
        line.status === "INGESTED" &&
        typeof line.sourceId === "string" &&
        line.sourceId.length > 0,
      )
      .map((line) => line.sourceId as string);

    if (newlyIngestedIds.length === 0) {
      console.log("");
      console.log(
        "Nothing to extract — no sources were newly INGESTED this run.",
      );
    } else {
      // Generate a batch manifest under knowledge-base/meta/batches/ and
      // pass it to autoknowledge via --batch. This is the first production
      // user of the --batch flag (introduced in commit a89d9bf851) and
      // closes the control-plane hole where --auto-extract was silently
      // processing the global unextracted backlog instead of just the
      // channel we ingested.
      //
      // Naming: <tracker-basename>-<YYYY-MM-DD>.txt. Tracker basenames
      // already encode the channel slug (e.g., "dwarkeshpatel-batch"),
      // so this produces readable and sortable manifest filenames.
      const trackerBasename = basename(trackerPath).replace(/\.txt$/, "");
      const manifestDate = new Date().toISOString().slice(0, 10);
      const batchesDir = join(META_DIR, "batches");
      await mkdir(batchesDir, { recursive: true });
      const manifestPath = join(
        batchesDir,
        `${trackerBasename}-${manifestDate}.txt`,
      );

      const manifestLines = [
        `# Auto-generated batch manifest from ingest-channel.ts`,
        `# Tracker: ${basename(trackerPath)}`,
        `# Channel URL: ${channelUrl ?? "(resume mode — see tracker header)"}`,
        `# Generated: ${new Date().toISOString()}`,
        `# Source count: ${newlyIngestedIds.length}`,
        ``,
        ...newlyIngestedIds,
      ];
      await writeFile(manifestPath, manifestLines.join("\n") + "\n", "utf-8");

      console.log("");
      console.log(
        `Batch manifest: ${manifestPath} (${newlyIngestedIds.length} sources)`,
      );
      console.log("Running autoknowledge to extract insights...");

      try {
        // No harness-level wall-clock timeout here. autoknowledge.ts has
        // per-source extraction timeouts, periodic post-ingest checkpoints,
        // and a lock file. A fixed outer timeout was previously killing
        // valid large batches before they could finish naturally (removed
        // in commit dc0f72a91). Scope is now explicit via --batch, so a
        // long-running extraction only processes the cohort we just
        // ingested — never the global backlog.
        execFileSync(
          "npx",
          ["tsx", "scripts/autoknowledge.ts", "--batch", manifestPath],
          {
            stdio: "inherit",
            cwd: join(__dirname, ".."),
          },
        );
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error(`Autoknowledge failed: ${msg}`);
      }
    }
  } else if (ingested > 0) {
    console.log("");
    console.log(
      "Sources created. Run extraction in conversation to process insights.",
    );
    console.log(
      "Source IDs are in the tracker file.",
    );
    console.log(
      "Tip: add --auto-extract to run autoknowledge automatically.",
    );
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
