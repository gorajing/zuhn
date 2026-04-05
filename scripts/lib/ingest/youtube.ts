import { execFileSync } from "node:child_process";
import { join, basename, extname } from "node:path";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import matter from "gray-matter";
import fg from "fast-glob";
import { generateSourceId } from "../generate-id";
import { slugify } from "./slug";
import { cleanTranscript, type Chapter } from "./transcript-clean";

export interface YouTubeMetadata {
  title: string;
  channel: string;
  duration: number; // seconds
  viewCount: number;
  uploadDate: string; // YYYY-MM-DD
  chapters: Chapter[];
  hasAutoSubs: boolean;
  hasManualSubs: boolean;
}

export interface YouTubeResult {
  sourceId: string;
  sourcePath: string;
  rawPath: string;
  cleanText: string;
  wordCount: number;
  metadata: YouTubeMetadata;
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function formatUploadDate(raw: string): string {
  // yt-dlp returns YYYYMMDD, convert to YYYY-MM-DD
  if (raw.length === 8) {
    return `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
  }
  return raw;
}

function resolveYtDlp(): string {
  try {
    execFileSync("which", ["yt-dlp"], { stdio: "pipe" });
    return "yt-dlp";
  } catch {
    throw new Error(
      "yt-dlp not found. Install it with: brew install yt-dlp (macOS) or pip install yt-dlp",
    );
  }
}

function fetchMetadata(url: string): YouTubeMetadata {
  const bin = resolveYtDlp();

  const strategies: { label: string; extraArgs: string[] }[] = [
    { label: "default", extraArgs: [] },
    { label: "with Chrome cookies", extraArgs: ["--cookies-from-browser", "chrome"] },
  ];

  let stdout = "";
  let lastError = "";

  for (const strategy of strategies) {
    try {
      stdout = execFileSync(
        bin,
        [...strategy.extraArgs, "--dump-json", "--no-warnings", "--quiet", url],
        { encoding: "utf-8", maxBuffer: 50 * 1024 * 1024 },
      );
      if (strategy.label !== "default") {
        console.log(`  Metadata fetched using ${strategy.label}.`);
      }
      lastError = "";
      break;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      lastError = msg;

      if (msg.includes("Private video") || msg.includes("Video unavailable")) {
        throw new Error(
          `Video is private or unavailable. Check the URL: ${url}`,
        );
      }

      // Age-restricted: try cookies
      if (msg.includes("Sign in to confirm your age") && strategy.label === "default") {
        console.log("  Age-restricted video. Trying with browser cookies...");
        continue;
      }

      // Other errors on non-default strategy: give up
      if (strategy.label !== "default") {
        throw new Error(`yt-dlp metadata fetch failed: ${msg}`);
      }
    }
  }

  if (lastError) {
    throw new Error(`yt-dlp metadata fetch failed: ${lastError}`);
  }

  const info = JSON.parse(stdout);

  const chapters: Chapter[] = (info.chapters ?? []).map(
    (ch: { title: string; start_time: number; end_time: number }) => ({
      title: ch.title,
      startMs: Math.round(ch.start_time * 1000),
      endMs: Math.round(ch.end_time * 1000),
    }),
  );

  const hasAutoSubs = !!(
    info.automatic_captions &&
    Object.keys(info.automatic_captions).length > 0
  );
  const hasManualSubs = !!(
    info.subtitles && Object.keys(info.subtitles).length > 0
  );

  return {
    title: info.title ?? "Untitled",
    channel: info.channel ?? info.uploader ?? "Unknown",
    duration: info.duration ?? 0,
    viewCount: info.view_count ?? 0,
    uploadDate: formatUploadDate(info.upload_date ?? ""),
    chapters,
    hasAutoSubs,
    hasManualSubs,
  };
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function downloadTranscript(
  url: string,
  rawDir: string,
  slug: string,
): Promise<string> {
  const bin = resolveYtDlp();
  const outputTemplate = join(rawDir, slug);

  await mkdir(rawDir, { recursive: true });

  const baseArgs = [
    "--write-auto-sub",
    "--write-sub",
    "--sub-lang",
    "en",
    "--sub-format",
    "json3",
    "--skip-download",
    "--no-warnings",
    "--quiet",
    "-o",
    outputTemplate,
    url,
  ];

  // Strategy: try without cookies first, then with browser cookies on 429
  const strategies: { label: string; extraArgs: string[] }[] = [
    { label: "default", extraArgs: [] },
    { label: "with Chrome cookies", extraArgs: ["--cookies-from-browser", "chrome"] },
  ];

  let lastError = "";

  for (const strategy of strategies) {
    const MAX_RETRIES = 2;
    const BASE_DELAY_MS = 10_000;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        execFileSync(
          bin,
          [...strategy.extraArgs, ...baseArgs],
          { encoding: "utf-8", stdio: "pipe" },
        );
        if (strategy.label !== "default") {
          console.log(`  Succeeded using ${strategy.label}.`);
        }
        lastError = "";
        break;
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        lastError = msg;
        if (msg.includes("429") && attempt < MAX_RETRIES) {
          const delay = BASE_DELAY_MS * attempt;
          console.log(`  Rate limited (429). Retrying in ${delay / 1000}s... (attempt ${attempt}/${MAX_RETRIES})`);
          await sleep(delay);
          continue;
        }
        break; // move to next strategy
      }
    }
    if (!lastError) break; // success — stop trying strategies

    if (lastError.includes("429") && strategy.label === "default") {
      console.log("  Trying with browser cookies to bypass rate limit...");
    }
  }

  if (lastError) {
    throw new Error(`yt-dlp subtitle download failed: ${lastError}`);
  }

  // Find the downloaded json3 file
  const pattern = `${slug}*.json3`;
  const matches = await fg(pattern, { cwd: rawDir, absolute: true });

  if (matches.length === 0) {
    throw new Error(
      `No captions found for this video. You can paste the transcript manually into:\n` +
        `  knowledge-base/sources/youtube/${slug}.md`,
    );
  }

  return matches[0];
}

// ─── Whisper Fallback ────────────────────────────────────────────────

interface WhisperSegment {
  start: number;
  end: number;
  text: string;
}

interface WhisperOutput {
  text: string;
  segments: WhisperSegment[];
  language: string;
}

function resolveWhisper(): string {
  try {
    execFileSync("which", ["whisper"], { stdio: "pipe" });
    return "whisper";
  } catch {
    throw new Error(
      "Whisper not found. Install with: pipx install openai-whisper",
    );
  }
}

function buildCleanTextFromWhisper(segments: WhisperSegment[]): string {
  if (segments.length === 0) return "";

  const paragraphs: string[] = [];
  let currentParagraph: string[] = [];

  for (let i = 0; i < segments.length; i++) {
    const text = segments[i].text.trim();
    if (!text) continue;

    currentParagraph.push(text);

    // Insert paragraph break if gap to next segment is > 3 seconds
    const nextSegment = segments[i + 1];
    if (nextSegment && nextSegment.start - segments[i].end > 3) {
      paragraphs.push(currentParagraph.join(" "));
      currentParagraph = [];
    }
  }

  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph.join(" "));
  }

  return paragraphs.join("\n\n");
}

async function downloadAudioAndWhisper(
  url: string,
  rawDir: string,
  slug: string,
): Promise<{ rawPath: string; cleanText: string; wordCount: number }> {
  const bin = resolveYtDlp();
  const whisper = resolveWhisper();
  await mkdir(rawDir, { recursive: true });

  const audioPath = join(rawDir, `${slug}.mp3`);

  console.log("  Downloading audio for Whisper transcription...");

  // Download audio — try with cookies for age-restricted
  const downloadStrategies: { label: string; extraArgs: string[] }[] = [
    { label: "default", extraArgs: [] },
    { label: "with Chrome cookies", extraArgs: ["--cookies-from-browser", "chrome"] },
  ];

  let downloadError = "";
  for (const strategy of downloadStrategies) {
    try {
      execFileSync(
        bin,
        [
          ...strategy.extraArgs,
          "-x",
          "--audio-format", "mp3",
          "--audio-quality", "5", // medium quality, smaller file
          "--no-warnings",
          "--quiet",
          "-o", audioPath,
          url,
        ],
        { encoding: "utf-8", stdio: "pipe", timeout: 300_000 }, // 5 min
      );
      if (strategy.label !== "default") {
        console.log(`  Audio downloaded using ${strategy.label}.`);
      }
      downloadError = "";
      break;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      downloadError = msg;
      if (
        msg.includes("Sign in to confirm your age") &&
        strategy.label === "default"
      ) {
        console.log("  Age-restricted. Trying audio download with cookies...");
        continue;
      }
      break;
    }
  }

  if (downloadError) {
    throw new Error(`Audio download failed: ${downloadError}`);
  }

  // Transcribe with Whisper
  console.log("  Transcribing with Whisper (this may take a while for long videos)...");
  const outputDir = join(tmpdir(), `whisper-yt-${Date.now()}`);

  execFileSync(
    whisper,
    [
      audioPath,
      "--model", "base",
      "--language", "en",
      "--output_format", "json",
      "--output_dir", outputDir,
    ],
    {
      encoding: "utf-8",
      stdio: ["pipe", "pipe", "pipe"],
      maxBuffer: 50 * 1024 * 1024,
      timeout: 1_800_000, // 30 min for very long videos
    },
  );

  // Read Whisper output
  const jsonName = `${slug}.json`;
  const jsonPath = join(outputDir, jsonName);
  const whisperResult: WhisperOutput = JSON.parse(
    require("fs").readFileSync(jsonPath, "utf-8"),
  );

  const cleanText = buildCleanTextFromWhisper(whisperResult.segments);
  const wordCount = cleanText.split(/\s+/).filter(Boolean).length;

  console.log(
    `  Whisper transcription complete: ${wordCount.toLocaleString()} words`,
  );

  return { rawPath: audioPath, cleanText, wordCount };
}

// ─── Main Entry ──────────────────────────────────────────────────────

export async function ingestYouTube(
  url: string,
  kbRoot?: string,
): Promise<YouTubeResult> {
  const root = kbRoot ?? join(__dirname, "../../..", "knowledge-base");

  // 1. Fetch metadata
  const metadata = fetchMetadata(url);

  const slug = slugify(metadata.title);
  const rawDir = join(root, "sources", "youtube", "raw");
  const sourceDir = join(root, "sources", "youtube");

  // 2. Try captions first, fall back to Whisper
  let rawPath: string;
  let cleanText: string;
  let wordCount: number;
  let transcriptType: string;

  try {
    rawPath = await downloadTranscript(url, rawDir, slug);
    const rawContent = await readFile(rawPath, "utf-8");
    const cleaned = cleanTranscript(
      rawContent,
      metadata.chapters.length > 0 ? metadata.chapters : undefined,
    );
    cleanText = cleaned.text;
    wordCount = cleaned.wordCount;
    transcriptType = metadata.hasManualSubs ? "manual" : "auto";
  } catch (captionErr: unknown) {
    const msg =
      captionErr instanceof Error ? captionErr.message : String(captionErr);

    // Only fall back to Whisper for "no captions" — not for network/auth errors
    if (!msg.includes("No captions found")) {
      throw captionErr;
    }

    console.log("  No captions available. Falling back to Whisper...");
    const whisperResult = await downloadAudioAndWhisper(url, rawDir, slug);
    rawPath = whisperResult.rawPath;
    cleanText = whisperResult.cleanText;
    wordCount = whisperResult.wordCount;
    transcriptType = "whisper";
  }

  // 3. Generate source ID and today's date
  const sourceId = generateSourceId(metadata.title, url);
  const today = new Date().toISOString().slice(0, 10);

  // 4. Build source frontmatter with gray-matter
  const sourceData = {
    id: sourceId,
    type: "youtube",
    title: metadata.title,
    author: metadata.channel,
    url,
    date_ingested: today,
    insight_count: 0,
    channel: metadata.channel,
    duration: formatDuration(metadata.duration),
    views: metadata.viewCount,
    upload_date: metadata.uploadDate,
    chapters: metadata.chapters.length,
    transcript_type: transcriptType,
    word_count: wordCount,
  };
  const sourceMd = matter.stringify(cleanText, sourceData);

  // 5. Write source file
  const sourcePath = join(sourceDir, `${slug}.md`);
  await writeFile(sourcePath, sourceMd, "utf-8");

  return {
    sourceId,
    sourcePath,
    rawPath,
    cleanText,
    wordCount,
    metadata,
  };
}
