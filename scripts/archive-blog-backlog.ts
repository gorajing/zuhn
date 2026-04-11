// One-shot archival utility for the 252-item blog backlog (insight_count: 0)
// surfaced and triaged on 2026-04-11. See:
//   - scripts/audit-blog-backlog.ts             — initial inventory
//   - scripts/audit-blog-recoverability.ts      — pipeline-canary diagnostic
//   - meta/log: 8/8 spot-check samples returned 1.0x ratio (genuinely short)
//
// What this script does:
//   1. Find every blog source file with insight_count: 0
//   2. Move the .md, the matching .clean.txt, and the raw HTML if present
//      from sources/blog/ to archive/blog-backlog-20260411/sources/blog/
//   3. Write knowledge-base/archive/blog-backlog-20260411/manifest.json
//      with rationale, per-host counts, spot-check results, and a
//      Paul Graham follow-up candidate list
//
// What it does NOT do:
//   - Does not edit the source files' frontmatter (no `status: archived`).
//     The files are simply moved out of the active sources/ tree, which
//     is the only signal autoknowledge.ts and post-ingest care about.
//   - Does not run post-ingest. That happens after this script as a
//     separate step so the move and the index regeneration can be
//     verified independently.
//   - Does not touch any insight, principle, or tag file.

import { join, dirname, basename } from "node:path";
import { readFileSync, writeFileSync, mkdirSync, renameSync, existsSync } from "node:fs";
import fg from "fast-glob";
import matter from "gray-matter";

const KB_ROOT = join(__dirname, "..", "knowledge-base");
const SOURCES_BLOG = join(KB_ROOT, "sources", "blog");
const ARCHIVE_DATE = "20260411";
const ARCHIVE_ROOT = join(
  KB_ROOT,
  "archive",
  `blog-backlog-${ARCHIVE_DATE}`,
);
const ARCHIVE_BLOG_DIR = join(ARCHIVE_ROOT, "sources", "blog");
const ARCHIVE_RAW_DIR = join(ARCHIVE_BLOG_DIR, "raw");

interface BlogSource {
  filePath: string;     // absolute path to the .md
  basename: string;     // filename without extension
  id: string;
  title: string;
  url: string;
  host: string;
  author: string;
  wordCount: number;
}

function urlHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "(no-url)";
  }
}

function normalizeAuthor(raw: unknown): string {
  if (raw === null || raw === undefined) return "(unknown)";
  if (typeof raw === "string") return raw.trim() || "(unknown)";
  if (Array.isArray(raw)) {
    for (const item of raw) {
      const s = normalizeAuthor(item);
      if (s !== "(unknown)") return s;
    }
    return "(unknown)";
  }
  if (typeof raw === "object") {
    const obj = raw as Record<string, unknown>;
    const fromName = normalizeAuthor(obj.name);
    if (fromName !== "(unknown)") return fromName;
    return normalizeAuthor(obj["@id"]);
  }
  return "(unknown)";
}

async function main() {
  console.log(`Scanning ${SOURCES_BLOG} for unextracted backlog...`);
  const files = await fg("*.md", {
    cwd: SOURCES_BLOG,
    absolute: true,
    ignore: ["raw/**", "_index.md"],
  });

  const backlog: BlogSource[] = [];
  for (const f of files) {
    const raw = readFileSync(f, "utf-8");
    const { data } = matter(raw);
    if (data.insight_count !== 0) continue;
    const url = (data.url as string) ?? "";
    const slug = basename(f).replace(/\.md$/, "");
    backlog.push({
      filePath: f,
      basename: slug,
      id: (data.id as string) ?? "?",
      title: (data.title as string) ?? "?",
      url,
      host: urlHostname(url),
      author: normalizeAuthor(data.author),
      wordCount: (data.word_count as number) ?? 0,
    });
  }

  console.log(`Found ${backlog.length} blog sources to archive.`);
  if (backlog.length === 0) {
    console.log("Nothing to do.");
    return;
  }

  // ── Per-host count for the manifest ──────────────────────────────
  const byHost: Record<string, number> = {};
  for (const s of backlog) {
    byHost[s.host] = (byHost[s.host] ?? 0) + 1;
  }

  // ── Paul Graham follow-up candidate list ─────────────────────────
  // The top-10 longest PG essays in the backlog. These are PG's
  // genuinely-short essays that fall below the 500-word floor but
  // are still complete works of his (verified during the spot-check
  // — "Write Simply" at 496w and "The Founder Visa" at 328w both
  // had complete bodies and proper PG closing acknowledgments).
  // If we ever decide to manually extract sub-floor PG content, this
  // is the priority list.
  const pgCandidates = backlog
    .filter((s) => s.host === "paulgraham.com")
    .sort((a, b) => b.wordCount - a.wordCount)
    .slice(0, 10)
    .map((s) => ({
      basename: s.basename,
      title: s.title,
      url: s.url,
      word_count: s.wordCount,
    }));

  // ── Create archive directories ───────────────────────────────────
  mkdirSync(ARCHIVE_BLOG_DIR, { recursive: true });
  mkdirSync(ARCHIVE_RAW_DIR, { recursive: true });

  // ── Move each source + its companion files ───────────────────────
  let mdMoved = 0;
  let cleanMoved = 0;
  let rawMoved = 0;

  for (const s of backlog) {
    // .md
    const dstMd = join(ARCHIVE_BLOG_DIR, `${s.basename}.md`);
    if (existsSync(s.filePath)) {
      renameSync(s.filePath, dstMd);
      mdMoved++;
    }

    // .clean.txt (sometimes present)
    const cleanSrc = join(SOURCES_BLOG, `${s.basename}.clean.txt`);
    const cleanDst = join(ARCHIVE_BLOG_DIR, `${s.basename}.clean.txt`);
    if (existsSync(cleanSrc)) {
      renameSync(cleanSrc, cleanDst);
      cleanMoved++;
    }

    // raw/*.html (sometimes present)
    const rawSrc = join(SOURCES_BLOG, "raw", `${s.basename}.html`);
    const rawDst = join(ARCHIVE_RAW_DIR, `${s.basename}.html`);
    if (existsSync(rawSrc)) {
      renameSync(rawSrc, rawDst);
      rawMoved++;
    }
  }

  console.log(`Moved ${mdMoved} .md files, ${cleanMoved} .clean.txt files, ${rawMoved} raw HTML files.`);

  // ── Write the manifest ──────────────────────────────────────────
  const manifest = {
    archive_id: `blog-backlog-${ARCHIVE_DATE}`,
    date: "2026-04-11",
    rationale: [
      "On 2026-04-11 the Zuhn KB had 252 blog sources with insight_count: 0,",
      "treated by autoknowledge.ts as an 'unextracted backlog.' A two-phase audit",
      "(scripts/audit-blog-backlog.ts then scripts/audit-blog-recoverability.ts)",
      "found that 100% of the 252 sources fall below the 500-word MIN_WORD_COUNT",
      "floor and that an 8-source pipeline-canary spot-check returned a 1.0x",
      "ratio of new word count to old word count across every sample.",
      "",
      "The diagnostic confirmed three things:",
      "  1. Re-fetching the URLs through the current ingest.ts (with the UA fix",
      "     in b6443d4e4 and JSON-LD normalization in 20b3a24306) recovers no",
      "     additional content. The pages really are this short.",
      "  2. Inspection of representative captured files showed they are not",
      "     extractor failures. PG's 'Write Simply' (496w) and 'The Founder",
      "     Visa' (328w) are complete essays with proper closing structure;",
      "     Lenny's 'AI and product management | Marily Nika' is a podcast",
      "     show notes page (sponsor links + episode chapters + 'Listen on',",
      "     not a paywalled article preview); ACX Open Threads, thevccorner",
      "     newsletter excerpts, and strategyzer blog posts are all genuinely",
      "     structured to be short.",
      "  3. Lowering MIN_WORD_COUNT was rejected as a fix because it would",
      "     degrade autoknowledge globally to handle one historical batch.",
      "",
      "Decision: archive all 252 sources to remove them from the active",
      "sources/blog/ tree. They remain inspectable here under archive/.",
    ],
    method: {
      audit_script: "scripts/audit-blog-backlog.ts",
      diagnostic_script: "scripts/audit-blog-recoverability.ts",
      diagnostic_sample_size: 8,
      diagnostic_sample_distribution: {
        "thevccorner.com": 2,
        "lennysnewsletter.com": 2,
        "paulgraham.com": 2,
        "strategyzer.com": 1,
        "astralcodexten.com": 1,
      },
      diagnostic_results: {
        recoverable_now: 0,
        marginal_improvement: 0,
        genuinely_short: 8,
        paywall_or_stub: 0,
        fetch_failed: 0,
      },
    },
    archived_count: backlog.length,
    archived_md_files: mdMoved,
    archived_clean_txt_files: cleanMoved,
    archived_raw_html_files: rawMoved,
    by_host: byHost,
    pg_short_essays_candidate_followup: true,
    pg_candidate_followup_note: [
      "Paul Graham's 30 backlog essays are genuinely short but complete PG",
      "essays (verified during spot-check). If a future session wants to",
      "preserve sub-floor PG content as part of the KB, manually extract",
      "1-3 insights per essay (not autoknowledge's 5/source default) for",
      "the top candidates listed below. They have been moved into this",
      "archive but are not deleted.",
    ],
    pg_candidate_followup_top10: pgCandidates,
    follow_up_audio_ingest_note: [
      "Several lennysnewsletter.com and chamath.substack.com sources are",
      "podcast show notes pages where the substantive content is in the",
      "audio, not the HTML. A separate audio-ingest workflow via",
      "scripts/lib/ingest/audio.ts (Whisper transcription) could recover",
      "this content but is out of scope for this cleanup.",
    ],
  };

  const manifestPath = join(ARCHIVE_ROOT, "manifest.json");
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf-8");
  console.log(`Wrote manifest: ${manifestPath}`);

  console.log(`\nDone. Archive: ${ARCHIVE_ROOT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
