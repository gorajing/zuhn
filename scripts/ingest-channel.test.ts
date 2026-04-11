import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdtemp, rm, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  parseTrackerLine,
  formatTrackerLine,
  extractChannelName,
  computeTrackerLabels,
  collectNewlyIngestedIds,
  resolveBatchManifestPath,
  buildBatchManifestContent,
  writeTracker,
  readTracker,
  LARGE_BATCH_THRESHOLD,
  type VideoEntry,
  type TrackerLine,
} from "./ingest-channel";

// ─── Helpers ──────────────────────────────────────────────────────────

function video(
  id: string,
  viewCount: number,
  title: string = `video-${id}`,
): VideoEntry {
  return {
    id,
    title,
    viewCount,
    duration: 0,
    uploadDate: "20260410",
  };
}

function trackerLine(overrides: Partial<TrackerLine>): TrackerLine {
  return {
    status: "PENDING",
    videoId: "abc123",
    views: 0,
    title: "test",
    ...overrides,
  };
}

let tmpDir: string;

beforeEach(async () => {
  tmpDir = await mkdtemp(join(tmpdir(), "zuhn-ingest-channel-test-"));
});

afterEach(async () => {
  await rm(tmpDir, { recursive: true, force: true });
});

// ─── parseTrackerLine / formatTrackerLine ─────────────────────────────

describe("parseTrackerLine", () => {
  it("parses a standard INGESTED line", () => {
    const line = parseTrackerLine(
      "INGESTED | kCc8FmEb1nY |   7,064,815 | Let's build GPT | SRC-260410-AAAA",
    );
    expect(line).not.toBeNull();
    expect(line!.status).toBe("INGESTED");
    expect(line!.videoId).toBe("kCc8FmEb1nY");
    expect(line!.title).toBe("Let's build GPT");
    expect(line!.sourceId).toBe("SRC-260410-AAAA");
  });

  it("rewrites legacy EXTRACTED rows to INGESTED (backward compat)", () => {
    const line = parseTrackerLine(
      "EXTRACTED | abc123 | 100 | old row | SRC-260405-XXXX",
    );
    expect(line).not.toBeNull();
    // The parser should silently normalize EXTRACTED → INGESTED so older
    // tracker files keep working after the tracker-honesty refactor.
    expect(line!.status).toBe("INGESTED");
    expect(line!.sourceId).toBe("SRC-260405-XXXX");
  });

  it("returns null for comment lines and blank lines", () => {
    expect(parseTrackerLine("# header")).toBeNull();
    expect(parseTrackerLine("  ")).toBeNull();
    expect(parseTrackerLine("")).toBeNull();
  });

  it("captures error suffix on FAILED rows", () => {
    const line = parseTrackerLine(
      "FAILED | vid | 10 | title | ERROR: something went wrong",
    );
    expect(line).not.toBeNull();
    expect(line!.status).toBe("FAILED");
    expect(line!.error).toBe("something went wrong");
  });
});

describe("formatTrackerLine → parseTrackerLine round-trip", () => {
  it("INGESTED with sourceId survives a write/read cycle", () => {
    const original = trackerLine({
      status: "INGESTED",
      videoId: "vid42",
      views: 12345,
      title: "Round trip",
      sourceId: "SRC-260410-ZZZZ",
    });
    const roundTripped = parseTrackerLine(formatTrackerLine(original));
    expect(roundTripped).toEqual(original);
  });
});

// ─── extractChannelName ───────────────────────────────────────────────

describe("extractChannelName", () => {
  it("extracts from @handle URLs", () => {
    expect(
      extractChannelName("https://www.youtube.com/@AcquiredFM/videos"),
    ).toBe("AcquiredFM");
  });

  it("extracts from /c/name URLs", () => {
    expect(
      extractChannelName("https://www.youtube.com/c/Veritasium"),
    ).toBe("Veritasium");
  });

  it("falls back to 'unknown-channel' for unrecognized patterns", () => {
    expect(extractChannelName("https://example.com/something")).toBe(
      "unknown-channel",
    );
  });
});

// ─── computeTrackerLabels ─────────────────────────────────────────────

describe("computeTrackerLabels — zero-view fallback", () => {
  it("returns 'top by views' labels when views are populated", () => {
    const selected = [
      video("a", 7_000_000, "Biggest"),
      video("b", 100_000, "Smallest"),
    ];
    const labels = computeTrackerLabels(selected, "TestChannel");

    expect(labels.viewsUnavailable).toBe(false);
    expect(labels.selectionLabel).toBe("Selected top 2 by views");
    expect(labels.trackerTitle).toBe(
      "# TestChannel — Top 2 Videos by Views (Batch Ingest Tracker)",
    );
    expect(labels.viewRangeLabel).toContain("7,000,000");
    expect(labels.viewRangeLabel).toContain("100,000");
  });

  // This is the regression test for the zero-view labeling fix. When
  // yt-dlp returns view_count: 0 for every video (observed on Dwarkesh
  // Patel's channel), the script used to still print "Top N by Views"
  // even though the batch was actually "yt-dlp default order." Fixed in
  // commit 407ee83046; this test locks the fallback wording in.
  it("returns 'default order' labels when every view count is zero", () => {
    const selected = [
      video("a", 0, "First"),
      video("b", 0, "Second"),
      video("c", 0, "Third"),
    ];
    const labels = computeTrackerLabels(selected, "Dwarkesh Patel");

    expect(labels.viewsUnavailable).toBe(true);
    expect(labels.selectionLabel).toBe(
      "Selected 3 in yt-dlp default order (views unavailable)",
    );
    expect(labels.trackerTitle).toBe(
      "# Dwarkesh Patel — 3 Videos (yt-dlp Default Order, Views Unavailable) (Batch Ingest Tracker)",
    );
    expect(labels.viewRangeLabel).toBe(
      "View range unavailable (yt-dlp returned zeroed counts)",
    );
  });

  it("handles an empty selection without crashing", () => {
    const labels = computeTrackerLabels([], "Empty");
    expect(labels.viewsUnavailable).toBe(false);
    expect(labels.trackerTitle).toContain("0 Videos");
  });
});

// ─── writeTracker / readTracker round-trip ───────────────────────────

describe("writeTracker → readTracker in non-resume mode", () => {
  // This is the regression test for behavior #1: fresh ingest writes a
  // tracker file with the correct header and PENDING rows, and the same
  // tracker can be read back intact. Nothing about the fresh code path
  // except fetchChannelVideos() is exercised — the I/O of the tracker
  // file itself is the behavior we want to pin.
  it("writes a tracker file and reads it back intact", async () => {
    const trackerPath = join(tmpDir, "testchannel-batch.txt");
    const header = [
      "# TestChannel — Top 2 Videos by Views (Batch Ingest Tracker)",
      "# Format: STATUS | VIDEO_ID | VIEWS | TITLE [| SRC_ID]",
      "# STATUS: PENDING / INGESTED / SKIP / FAILED",
      "# Generated: 2026-04-10",
      "# Source: https://youtube.com/@TestChannel",
    ];
    const originalLines: TrackerLine[] = [
      {
        status: "PENDING",
        videoId: "abc",
        views: 5000,
        title: "First video",
      },
      {
        status: "PENDING",
        videoId: "def",
        views: 3000,
        title: "Second video",
      },
    ];

    await writeTracker(trackerPath, header, originalLines);

    expect(existsSync(trackerPath)).toBe(true);
    const content = await readFile(trackerPath, "utf-8");
    expect(content).toContain(
      "TestChannel — Top 2 Videos by Views (Batch Ingest Tracker)",
    );
    expect(content).toContain("PENDING | abc | 5000 | First video");
    expect(content).toContain("PENDING | def | 3000 | Second video");

    const readBack = await readTracker(trackerPath);
    expect(readBack.header).toHaveLength(header.length);
    expect(readBack.lines).toHaveLength(2);
    expect(readBack.lines[0]).toEqual(originalLines[0]);
    expect(readBack.lines[1]).toEqual(originalLines[1]);
  });
});

// ─── collectNewlyIngestedIds + buildBatchManifestContent ──────────────

describe("collectNewlyIngestedIds — batch manifest source scoping", () => {
  it("returns sourceIds only for entries attempted AND successfully INGESTED this run", () => {
    const toIngest: TrackerLine[] = [
      trackerLine({ videoId: "a", status: "PENDING" }),
      trackerLine({ videoId: "b", status: "PENDING" }),
      trackerLine({ videoId: "c", status: "PENDING" }),
    ];
    const linesAfterRun: TrackerLine[] = [
      trackerLine({
        videoId: "a",
        status: "INGESTED",
        sourceId: "SRC-260410-A",
      }),
      trackerLine({ videoId: "b", status: "FAILED", error: "HTTP 500" }),
      trackerLine({
        videoId: "c",
        status: "INGESTED",
        sourceId: "SRC-260410-C",
      }),
    ];
    const ids = collectNewlyIngestedIds(toIngest, linesAfterRun);
    expect(ids).toEqual(["SRC-260410-A", "SRC-260410-C"]);
  });

  it("excludes pre-existing INGESTED rows not attempted this run", () => {
    // A row that already existed as INGESTED in a previous session — not
    // in toIngest — should not be swept into the new batch manifest.
    const toIngest: TrackerLine[] = [
      trackerLine({ videoId: "new", status: "PENDING" }),
    ];
    const linesAfterRun: TrackerLine[] = [
      trackerLine({
        videoId: "old",
        status: "INGESTED",
        sourceId: "SRC-260405-OLD",
      }),
      trackerLine({
        videoId: "new",
        status: "INGESTED",
        sourceId: "SRC-260410-NEW",
      }),
    ];
    const ids = collectNewlyIngestedIds(toIngest, linesAfterRun);
    expect(ids).toEqual(["SRC-260410-NEW"]);
    expect(ids).not.toContain("SRC-260405-OLD");
  });

  it("defensively skips INGESTED rows with missing sourceId", () => {
    const toIngest: TrackerLine[] = [
      trackerLine({ videoId: "a", status: "PENDING" }),
    ];
    const linesAfterRun: TrackerLine[] = [
      // Upstream bug: status flipped to INGESTED but sourceId never set.
      // We should skip rather than insert an empty string into the manifest.
      trackerLine({ videoId: "a", status: "INGESTED" }),
    ];
    const ids = collectNewlyIngestedIds(toIngest, linesAfterRun);
    expect(ids).toEqual([]);
  });

  it("returns an empty array when nothing was ingested", () => {
    expect(collectNewlyIngestedIds([], [])).toEqual([]);
  });
});

describe("buildBatchManifestContent + resolveBatchManifestPath — batch manifest generation", () => {
  // This is the regression test for behavior #3: --auto-extract must
  // generate a batch manifest and hand it to autoknowledge via --batch,
  // NOT call autoknowledge with no scope arguments. The actual
  // invocation lives in main() (one line of execFileSync) but the
  // manifest-generation logic is what matters for cohort correctness.
  it("builds a manifest with header comments and all provided source IDs", () => {
    const lines = buildBatchManifestContent(
      ["SRC-260410-A", "SRC-260410-B", "SRC-260410-C"],
      "acquiredfm-batch.txt",
      "https://www.youtube.com/@AcquiredFM",
      "2026-04-10T20:00:00.000Z",
    );

    expect(lines[0]).toBe(
      "# Auto-generated batch manifest from ingest-channel.ts",
    );
    expect(lines).toContain("# Tracker: acquiredfm-batch.txt");
    expect(lines).toContain(
      "# Channel URL: https://www.youtube.com/@AcquiredFM",
    );
    expect(lines).toContain("# Generated: 2026-04-10T20:00:00.000Z");
    expect(lines).toContain("# Source count: 3");
    expect(lines).toContain("SRC-260410-A");
    expect(lines).toContain("SRC-260410-B");
    expect(lines).toContain("SRC-260410-C");

    // Source IDs should come AFTER the header block. Verify the last
    // three lines are the IDs in order.
    const idLines = lines.slice(-3);
    expect(idLines).toEqual(["SRC-260410-A", "SRC-260410-B", "SRC-260410-C"]);
  });

  it("marks channel URL as '(resume mode)' when null", () => {
    const lines = buildBatchManifestContent(
      ["SRC-260410-X"],
      "something-batch.txt",
      null,
    );
    expect(lines).toContain(
      "# Channel URL: (resume mode — see tracker header)",
    );
  });

  it("resolveBatchManifestPath puts manifests under META_DIR/batches/<tracker>-<date>.txt", () => {
    const trackerPath = "/some/absolute/path/acquiredfm-batch.txt";
    const manifestPath = resolveBatchManifestPath(trackerPath, "2026-04-10");
    expect(manifestPath).toMatch(
      /knowledge-base\/meta\/batches\/acquiredfm-batch-2026-04-10\.txt$/,
    );
  });

  it("manifest generation produces a file that autoknowledge --batch can parse", async () => {
    // End-to-end integration check: write a manifest to disk and verify
    // it parses back as expected (one SRC ID per non-comment line, blank
    // lines skipped). This mirrors what autoknowledge.ts does when it
    // reads --batch <manifest-file>.
    const manifestPath = join(tmpDir, "test-batch-2026-04-10.txt");
    const lines = buildBatchManifestContent(
      ["SRC-260410-A", "SRC-260410-B"],
      "test-batch.txt",
      "https://example.com/@test",
    );
    await writeFile(manifestPath, lines.join("\n") + "\n", "utf-8");

    const content = await readFile(manifestPath, "utf-8");
    const parsedIds = content
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0 && !l.startsWith("#"));
    expect(parsedIds).toEqual(["SRC-260410-A", "SRC-260410-B"]);
  });
});

// ─── Constants exported for behavior anchoring ───────────────────────

describe("LARGE_BATCH_THRESHOLD", () => {
  it("is a positive integer suitable for user-facing warnings", () => {
    expect(LARGE_BATCH_THRESHOLD).toBeGreaterThan(0);
    expect(Number.isInteger(LARGE_BATCH_THRESHOLD)).toBe(true);
  });
});
