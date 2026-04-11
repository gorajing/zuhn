// One-shot archival utility for the 34 zero-insight stub + sub-floor backlog
// surfaced and triaged on 2026-04-11. See the companion blog-backlog archive
// at archive/blog-backlog-20260411/ for the prior cleanup that established
// the "don't special-case sub-floor content during cleanup" precedent.
//
// What this archives:
//   - 19 paste/reddit/pdf ingestion stubs: 20-60 word summaries written into
//     the body at ingest time, with no full source content and no
//     re-fetchable URLs. These are historical half-finished sessions from
//     2026-03-20 to 2026-03-22 that were never completed.
//   - 15 youtube sub-floor clips: real auto-generated transcripts that are
//     genuinely below the 500-word autoknowledge floor. Trailers, 100-seconds
//     educational shorts, stable-diffusion-dream experiments, plus 3 Naval-
//     type clips with clean theses that could be manually extracted.
//
// What this script does:
//   1. Find every source .md with insight_count: 0 under sources/{youtube,
//      paste,reddit,pdf}/
//   2. Move the .md to archive/stubs-backlog-20260411/sources/<type>/
//   3. Move the raw companion (.pdf for pdf type, .en.json3 or .mp3 for
//      youtube type) to archive/stubs-backlog-20260411/sources/<type>/raw/
//   4. Write manifest.json with per-type counts, manual_extraction_candidates
//      list (the 3 Naval-type YouTube clips worth coming back to), and a
//      follow_up_ingest_hardening note for the stub-body guard bug class.
//
// What it does NOT do:
//   - Does not modify any insight, principle, or tag file (the 34 sources
//     have insight_count: 0, so no derived state depends on them)
//   - Does not edit frontmatter (moving out of the active tree is the only
//     signal autoknowledge and post-ingest care about)
//   - Does not run post-ingest — that happens after this script as a
//     separate step

import { join, basename, dirname } from "node:path";
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  renameSync,
  existsSync,
} from "node:fs";
import fg from "fast-glob";
import matter from "gray-matter";

const KB_ROOT = join(__dirname, "..", "knowledge-base");
const SOURCES_ROOT = join(KB_ROOT, "sources");
const ARCHIVE_DATE = "20260411";
const ARCHIVE_ROOT = join(KB_ROOT, "archive", `stubs-backlog-${ARCHIVE_DATE}`);

// Source types we archive. paste/reddit/pdf are the stub cluster; youtube
// is the sub-floor cluster. All four share the same archive destination.
const SOURCE_TYPES = ["youtube", "paste", "reddit", "pdf"] as const;
type SourceType = (typeof SOURCE_TYPES)[number];

interface StubSource {
  filePath: string;
  type: SourceType;
  slug: string;
  id: string;
  title: string;
  url: string;
  wordCount: number;
}

async function main(): Promise<void> {
  console.log(`Scanning ${SOURCES_ROOT} for zero-insight stubs...`);
  const files = await fg(`{${SOURCE_TYPES.join(",")}}/*.md`, {
    cwd: SOURCES_ROOT,
    absolute: true,
    ignore: ["**/raw/**", "**/_index.md"],
  });

  const backlog: StubSource[] = [];
  for (const f of files) {
    const raw = readFileSync(f, "utf-8");
    const { data } = matter(raw);
    if (data.insight_count !== 0) continue;
    const typeDir = basename(dirname(f));
    if (!(SOURCE_TYPES as readonly string[]).includes(typeDir)) continue;
    const slug = basename(f).replace(/\.md$/, "");
    backlog.push({
      filePath: f,
      type: typeDir as SourceType,
      slug,
      id: (data.id as string) ?? "?",
      title: (data.title as string) ?? "?",
      url: (data.url as string) ?? "",
      wordCount: (data.word_count as number) ?? 0,
    });
  }

  console.log(`Found ${backlog.length} sources to archive.`);
  if (backlog.length === 0) {
    console.log("Nothing to do.");
    return;
  }

  // ── Per-type count for the manifest ──────────────────────────────
  const byType: Record<string, number> = {};
  for (const s of backlog) {
    byType[s.type] = (byType[s.type] ?? 0) + 1;
  }

  // ── Create archive directories ───────────────────────────────────
  for (const t of SOURCE_TYPES) {
    if ((byType[t] ?? 0) > 0) {
      mkdirSync(join(ARCHIVE_ROOT, "sources", t), { recursive: true });
      mkdirSync(join(ARCHIVE_ROOT, "sources", t, "raw"), { recursive: true });
    }
  }

  // ── Move each source + its raw companion ─────────────────────────
  let mdMoved = 0;
  let rawMoved = 0;

  for (const s of backlog) {
    // .md
    const dstMd = join(ARCHIVE_ROOT, "sources", s.type, `${s.slug}.md`);
    if (existsSync(s.filePath)) {
      renameSync(s.filePath, dstMd);
      mdMoved++;
    }

    // raw companion (any extension — we search by stem)
    const rawSrcDir = join(SOURCES_ROOT, s.type, "raw");
    if (existsSync(rawSrcDir)) {
      const companions = await fg(`${s.slug}.*`, { cwd: rawSrcDir });
      for (const c of companions) {
        const src = join(rawSrcDir, c);
        const dst = join(ARCHIVE_ROOT, "sources", s.type, "raw", c);
        if (existsSync(src)) {
          renameSync(src, dst);
          rawMoved++;
        }
      }
    }
  }

  console.log(`Moved ${mdMoved} .md files, ${rawMoved} raw companion files.`);

  // ── Manual extraction candidates ─────────────────────────────────
  // The 3 YouTube clips with real transcripts and clean theses that are
  // worth coming back to if a future session wants sub-floor manual
  // extraction. Verified during triage on 2026-04-11 by reading the full
  // transcripts. These are Naval-style short clips with dominating-
  // decision / learning-by-doing / mimetic-desire theses respectively.
  // Scored by "has a clean single-paragraph thesis" rather than word
  // count (since they're all 266-488w).
  const candidateSlugs = [
    "spend-more-time-making-the-big-decisions",
    "if-you-want-to-learn-do",
    "your-desires-are-not-yours",
  ];
  const manualExtractionCandidates = backlog
    .filter((s) => s.type === "youtube" && candidateSlugs.includes(s.slug))
    .map((s) => ({
      slug: s.slug,
      title: s.title,
      url: s.url,
      word_count: s.wordCount,
    }));

  // ── Write the manifest ──────────────────────────────────────────
  const manifest = {
    archive_id: `stubs-backlog-${ARCHIVE_DATE}`,
    date: "2026-04-11",
    rationale: [
      "On 2026-04-11 (same day as the 252-item blog backlog archive),",
      "the Zuhn KB had 34 active sources under sources/{youtube,paste,",
      "reddit,pdf}/ with insight_count: 0. A triage pass found that they",
      "split into two groups, both of which are dead ends for the",
      "autoknowledge pipeline:",
      "",
      "  1. Ingestion stubs (19 items, types paste/reddit/pdf). These",
      "     files were ingested between 2026-03-20 and 2026-03-22 with",
      "     a 20-60 word one-paragraph summary written into the body",
      "     instead of the full source content. The URLs are either",
      "     missing, point to subreddit indexes (not specific posts),",
      "     or have no accessible source. There is nothing for the",
      "     extractor to work from — the body IS all the content.",
      "     This looks like a single half-finished ingestion session",
      "     three weeks ago that was never completed.",
      "",
      "  2. Sub-floor YouTube clips (15 items). Real auto-generated",
      "     transcripts, but all below the 500-word autoknowledge floor.",
      "     Contents: 6 stable-diffusion-dreams Karpathy experiments",
      "     (1-35 words each, essentially empty artifacts); 5 short",
      "     educational/trailer clips (100-seconds-of-X, trailers, Bill",
      "     Nye creationism clip, Smarter Every Day improvising-in-",
      "     africa); 3 Naval-style short clips with clean extractable",
      "     theses that are preserved below as manual_extraction_",
      "     candidates; 1 donut C-code clip.",
      "",
      "Decision: archive all 34 as a single cohort. The 19 stubs are",
      "unrecoverable. The 15 YouTube clips are sub-floor and, per the",
      "precedent set by today's earlier 252-item blog backlog archive,",
      "we do not special-case sub-floor content during cleanup —",
      "lowering MIN_WORD_COUNT would degrade autoknowledge globally to",
      "handle one historical batch. The 3 genuinely substantive Naval-",
      "type clips are preserved as follow-up candidates below.",
    ],
    method: {
      triage_approach: "read-and-classify",
      sampled_full_content: [
        "paste/leverage-field-manual.md",
        "reddit/ai-workflows-cost-30x-less.md",
        "pdf/Claude for Finance.md",
        "youtube/spend-more-time-making-the-big-decisions.md",
      ],
      triage_results: {
        ingestion_stubs_no_real_content: 19,
        sub_floor_youtube_real_transcripts: 15,
        recoverable_via_refetch: 0,
      },
    },
    archived_count: backlog.length,
    archived_md_files: mdMoved,
    archived_raw_files: rawMoved,
    by_type: byType,
    manual_extraction_candidates_note: [
      "The 3 YouTube clips below have real transcripts, clean theses, and",
      "would yield 1-2 insights each if manually extracted (not via",
      "autoknowledge, which would skip them at the 500-word floor).",
      "They have been moved into this archive but not deleted. If a future",
      "session wants sub-floor manual curation, these are the priorities.",
      "See also blog-backlog-20260411/manifest.json pg_candidate_followup_",
      "top10 for a parallel list of short-but-substantive Paul Graham",
      "essays held back for the same reason.",
    ],
    manual_extraction_candidates: manualExtractionCandidates,
    follow_up_ingest_hardening: [
      "During triage on 2026-04-11 we discovered a latent ingestion bug",
      "class: the ingestor can write a 20-60 word summary into the body",
      "instead of the full source content, then emit insight_count: 0",
      "with no other warning. 19 of the 34 archived items are instances",
      "of this pattern, all from a 3-day window in March 2026.",
      "",
      "Suggested ingest hardening (deferred, not blocking):",
      "  1. Compute body-derived word_count at ingest time from the",
      "     actual content block, don't trust the ingestor's self-",
      "     reported count. This would have caught all 19 stubs at",
      "     creation instead of accumulating for 3 weeks.",
      "  2. Add a post-ingest guard that warns when type ∈ {pdf,",
      "     reddit} and body_word_count < 100. These source types",
      "     should effectively never produce ~50 word bodies, so",
      "     hitting that shape indicates a stub.",
      "  3. Optionally: move the stub-detection into scripts/health.ts",
      "     as an ongoing referential-integrity check.",
      "",
      "The stub_body guardrail is the right home for this because it's",
      "a class of drift, not a one-off correction. No timeline attached.",
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
