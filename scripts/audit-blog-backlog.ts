// Read-only blog backlog audit. Groups all unextracted blog sources
// (insight_count: 0) by author/site, word count, ingest date, and above
// vs below the 500-word autoknowledge floor. No file mutations.

import fg from "fast-glob";
import matter from "gray-matter";
import { readFileSync } from "node:fs";

interface BlogSource {
  filePath: string;
  id: string;
  title: string;
  url: string;
  author: string;
  siteName: string;
  wordCount: number;
  dateIngested: string;
  type: string;
}

const MIN_WORD_COUNT = 500; // matches autoknowledge.ts MIN_WORD_COUNT

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
    return (
      normalizeAuthor(obj.name) ??
      normalizeAuthor(obj["@id"]) ??
      "(unknown)"
    );
  }
  return "(unknown)";
}

function normalizeSiteName(raw: unknown): string {
  return normalizeAuthor(raw); // same coercion logic
}

function urlHostname(url: string): string {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, "");
  } catch {
    return "(no-url)";
  }
}

async function main() {
const files = await fg("knowledge-base/sources/blog/*.md", {
  ignore: ["**/raw/**", "**/_index.md"],
});

const backlog: BlogSource[] = [];
for (const f of files) {
  const raw = readFileSync(f, "utf-8");
  const { data } = matter(raw);
  if (data.insight_count !== 0) continue;
  backlog.push({
    filePath: f,
    id: (data.id as string) ?? "?",
    title: (data.title as string) ?? "?",
    url: (data.url as string) ?? "",
    author: normalizeAuthor(data.author),
    siteName: normalizeSiteName(data.site_name),
    wordCount: (data.word_count as number) ?? 0,
    dateIngested: (data.date_ingested as string) ?? "?",
    type: (data.type as string) ?? "?",
  });
}

console.log("═".repeat(80));
console.log(`BLOG BACKLOG AUDIT`);
console.log("═".repeat(80));
console.log(`Total unextracted blog sources: ${backlog.length}`);
console.log("");

// ─── 1. Word count distribution ────────────────────────────────────
const buckets = {
  "0":            backlog.filter((s) => s.wordCount === 0),
  "1-100":        backlog.filter((s) => s.wordCount > 0 && s.wordCount <= 100),
  "101-500":      backlog.filter((s) => s.wordCount > 100 && s.wordCount <= 500),
  "501-1500":     backlog.filter((s) => s.wordCount > 500 && s.wordCount <= 1500),
  "1501-5000":    backlog.filter((s) => s.wordCount > 1500 && s.wordCount <= 5000),
  "5001-15000":   backlog.filter((s) => s.wordCount > 5000 && s.wordCount <= 15000),
  ">15000":       backlog.filter((s) => s.wordCount > 15000),
};

console.log("─".repeat(80));
console.log("WORD COUNT DISTRIBUTION");
console.log("─".repeat(80));
for (const [label, items] of Object.entries(buckets)) {
  const bar = "█".repeat(Math.min(items.length, 60));
  console.log(`  ${label.padStart(10)} │ ${items.length.toString().padStart(4)} ${bar}`);
}
const aboveFloor = backlog.filter((s) => s.wordCount >= MIN_WORD_COUNT);
const belowFloor = backlog.filter((s) => s.wordCount < MIN_WORD_COUNT);
console.log("");
console.log(`  Above ${MIN_WORD_COUNT}-word floor (extractable): ${aboveFloor.length}`);
console.log(`  Below ${MIN_WORD_COUNT}-word floor (auto-skipped):  ${belowFloor.length}`);
console.log("");

// ─── 2. Top hosts (by URL hostname) ────────────────────────────────
const byHost = new Map<string, BlogSource[]>();
for (const s of backlog) {
  const h = urlHostname(s.url);
  const list = byHost.get(h) ?? [];
  list.push(s);
  byHost.set(h, list);
}
const topHosts = [...byHost.entries()]
  .sort((a, b) => b[1].length - a[1].length)
  .slice(0, 25);

console.log("─".repeat(80));
console.log("TOP HOSTS BY BACKLOG COUNT (top 25)");
console.log("─".repeat(80));
console.log(
  "  hostname".padEnd(48) +
    "  total" +
    "  ≥500w" +
    "  median_words"
);
console.log("  " + "─".repeat(76));
for (const [host, items] of topHosts) {
  const above = items.filter((s) => s.wordCount >= MIN_WORD_COUNT).length;
  const sorted = [...items].sort((a, b) => a.wordCount - b.wordCount);
  const median = sorted[Math.floor(sorted.length / 2)]?.wordCount ?? 0;
  console.log(
    "  " +
      host.padEnd(48) +
      "  " +
      items.length.toString().padStart(5) +
      "  " +
      above.toString().padStart(5) +
      "  " +
      median.toString().padStart(12)
  );
}
console.log("");

// ─── 3. Top authors (after normalization) ─────────────────────────
const byAuthor = new Map<string, BlogSource[]>();
for (const s of backlog) {
  const list = byAuthor.get(s.author) ?? [];
  list.push(s);
  byAuthor.set(s.author, list);
}
const topAuthors = [...byAuthor.entries()]
  .filter(([k]) => k !== "(unknown)")
  .sort((a, b) => b[1].length - a[1].length)
  .slice(0, 20);

console.log("─".repeat(80));
console.log("TOP NAMED AUTHORS (top 20, excluding unknown)");
console.log("─".repeat(80));
for (const [author, items] of topAuthors) {
  const above = items.filter((s) => s.wordCount >= MIN_WORD_COUNT).length;
  console.log(
    "  " +
      author.padEnd(40) +
      "  " +
      items.length.toString().padStart(3) + " sources, " +
      above.toString().padStart(3) + " ≥500w"
  );
}
const unknownAuthorCount = byAuthor.get("(unknown)")?.length ?? 0;
console.log("");
console.log(`  (unknown): ${unknownAuthorCount} sources`);
console.log("");

// ─── 4. Top longest backlog items (extraction candidates) ─────────
const longestExtractable = [...aboveFloor]
  .sort((a, b) => b.wordCount - a.wordCount)
  .slice(0, 30);

console.log("─".repeat(80));
console.log("TOP 30 LONGEST EXTRACTABLE BACKLOG ITEMS");
console.log("─".repeat(80));
for (const s of longestExtractable) {
  const titleTrunc = s.title.slice(0, 60).padEnd(60);
  const wc = s.wordCount.toString().padStart(6);
  const host = urlHostname(s.url).slice(0, 25);
  console.log(`  ${wc}w  ${titleTrunc}  ${host}`);
}
console.log("");

// ─── 5. Date histogram ─────────────────────────────────────────────
const byDate = new Map<string, number>();
for (const s of backlog) {
  const month = s.dateIngested.slice(0, 7); // YYYY-MM
  byDate.set(month, (byDate.get(month) ?? 0) + 1);
}
console.log("─".repeat(80));
console.log("BACKLOG BY INGEST MONTH");
console.log("─".repeat(80));
const sortedDates = [...byDate.entries()].sort();
for (const [month, n] of sortedDates) {
  const bar = "█".repeat(Math.min(n, 50));
  console.log(`  ${month}  │ ${n.toString().padStart(4)} ${bar}`);
}
console.log("");

// ─── 6. Junk indicators (very thin or empty) ──────────────────────
const junk = backlog.filter((s) => s.wordCount < 100);
console.log("─".repeat(80));
console.log(`JUNK / TEASER CANDIDATES (< 100 words): ${junk.length}`);
console.log("─".repeat(80));
const junkSample = junk.slice(0, 15);
for (const s of junkSample) {
  console.log(`  ${s.wordCount.toString().padStart(4)}w  ${s.title.slice(0, 60)}  ${urlHostname(s.url).slice(0, 25)}`);
}
if (junk.length > 15) console.log(`  ... and ${junk.length - 15} more`);
console.log("");

// ─── 7. Highest-host concentration cohorts (worth a manifest) ──────
const cohortCandidates = topHosts.filter(
  ([, items]) => items.filter((s) => s.wordCount >= MIN_WORD_COUNT).length >= 5
);
console.log("─".repeat(80));
console.log("COHORT CANDIDATES — hosts with ≥5 extractable backlog items");
console.log("─".repeat(80));
for (const [host, items] of cohortCandidates) {
  const above = items.filter((s) => s.wordCount >= MIN_WORD_COUNT);
  const totalWords = above.reduce((sum, s) => sum + s.wordCount, 0);
  console.log(
    `  ${host.padEnd(40)}  ${above.length.toString().padStart(3)} items, ${totalWords.toLocaleString().padStart(8)} total words`
  );
}
console.log("");

console.log("═".repeat(80));
console.log("SUMMARY");
console.log("═".repeat(80));
console.log(`  Total backlog:             ${backlog.length}`);
console.log(`  Above 500-word floor:      ${aboveFloor.length}  (extractable)`);
console.log(`  Below 500-word floor:      ${belowFloor.length}  (autoknowledge auto-skips)`);
console.log(`  Junk (< 100 words):        ${junk.length}  (archive candidates)`);
console.log(`  Cohort candidates (≥5/host): ${cohortCandidates.length} hosts`);
console.log("═".repeat(80));
}
main().catch(err => { console.error(err); process.exit(1); });
