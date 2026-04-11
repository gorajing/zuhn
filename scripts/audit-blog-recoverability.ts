// Read-only diagnostic: pick a small host-stratified sample of unextracted
// blog sources, re-fetch each URL with the SAME headers and timeout that
// scripts/ingest.ts uses, run extractArticle (the same blog.ts pipeline
// helper that ingest.ts uses), and compare the new word count to the
// existing source file.
//
// Does NOT write to the KB. Does NOT modify any source files. Pure read-
// only decision support for the blog backlog triage.
//
// Output: a per-sample classification (recoverable / host-fix-needed /
// genuinely-short / paywalled-or-blocked) and a per-host decision matrix.

import { join } from "node:path";
import { readFileSync } from "node:fs";
import fg from "fast-glob";
import matter from "gray-matter";
import { extractArticle } from "./lib/ingest/blog";

interface BlogSource {
  filePath: string;
  id: string;
  title: string;
  url: string;
  wordCount: number;
  host: string;
}

interface DiagnosticResult {
  source: BlogSource;
  fetched: boolean;
  httpStatus?: number;
  fetchError?: string;
  newWordCount?: number;
  newTitle?: string;
  recoverableClass:
    | "recoverable-now"          // new content is materially longer; pipeline can fix this
    | "marginal-improvement"     // new content is somewhat longer but still below floor
    | "genuinely-short"          // new content matches old; the page really is short
    | "paywall-or-stub"          // fetch returned thin/empty content
    | "fetch-failed";            // network/timeout/HTTP error
}

function urlHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "(no-url)";
  }
}

// Same UA + timeout as scripts/ingest.ts blog branch (post-fix b6443d4e4)
const FETCH_TIMEOUT_MS = 30_000;
const FETCH_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
};

async function diagnose(source: BlogSource): Promise<DiagnosticResult> {
  if (!source.url) {
    return {
      source,
      fetched: false,
      fetchError: "no URL in frontmatter",
      recoverableClass: "fetch-failed",
    };
  }

  let html: string;
  try {
    const res = await fetch(source.url, {
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: FETCH_HEADERS,
    });
    if (!res.ok) {
      return {
        source,
        fetched: false,
        httpStatus: res.status,
        fetchError: `HTTP ${res.status}`,
        recoverableClass: "fetch-failed",
      };
    }
    html = await res.text();
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return {
      source,
      fetched: false,
      fetchError: msg,
      recoverableClass: "fetch-failed",
    };
  }

  const article = extractArticle(html, source.url);
  if (!article) {
    // extractArticle returns null when the body is below MIN_CONTENT_LENGTH
    // (the existing 200-char gate inside blog.ts). This is the "stub" case:
    // the page came back but had no extractable body.
    return {
      source,
      fetched: true,
      newWordCount: 0,
      recoverableClass: "paywall-or-stub",
    };
  }

  const newWords = article.wordCount;
  const oldWords = source.wordCount;

  let recoverableClass: DiagnosticResult["recoverableClass"];
  if (newWords >= 500 && newWords >= oldWords * 1.5) {
    // Materially longer AND above autoknowledge's floor → pipeline can recover
    recoverableClass = "recoverable-now";
  } else if (newWords > oldWords * 1.5) {
    // Longer than old but still below 500-word floor → marginal improvement
    recoverableClass = "marginal-improvement";
  } else if (newWords < 100) {
    recoverableClass = "paywall-or-stub";
  } else {
    // New content is roughly the same size as old → page really is short
    recoverableClass = "genuinely-short";
  }

  return {
    source,
    fetched: true,
    httpStatus: 200,
    newWordCount: newWords,
    newTitle: article.metadata.title,
    recoverableClass,
  };
}

async function main() {
  // ── 1. Load the entire blog backlog (insight_count: 0) ────────────
  const files = await fg("knowledge-base/sources/blog/*.md", {
    ignore: ["**/raw/**", "**/_index.md"],
  });

  const backlog: BlogSource[] = [];
  for (const f of files) {
    const raw = readFileSync(f, "utf-8");
    const { data } = matter(raw);
    if (data.insight_count !== 0) continue;
    const url = (data.url as string) ?? "";
    backlog.push({
      filePath: f,
      id: (data.id as string) ?? "?",
      title: (data.title as string) ?? "?",
      url,
      wordCount: (data.word_count as number) ?? 0,
      host: urlHostname(url),
    });
  }

  // ── 2. Group by host ──────────────────────────────────────────────
  const byHost = new Map<string, BlogSource[]>();
  for (const s of backlog) {
    const list = byHost.get(s.host) ?? [];
    list.push(s);
    byHost.set(s.host, list);
  }

  // ── 3. Build the host-stratified sample ───────────────────────────
  // Sampling rule: per-host, pick "longest" and "median" so each host
  // gets one "best case" and one "typical" data point. Deterministic so
  // re-runs are reproducible.
  function pickSample(host: string, count: number): BlogSource[] {
    const items = (byHost.get(host) ?? []).sort(
      (a, b) => b.wordCount - a.wordCount,
    );
    if (items.length === 0) return [];
    if (count === 1) return [items[0]];
    if (items.length === 1) return [items[0]];
    // 2 samples: longest + median
    const longest = items[0];
    const median = items[Math.floor(items.length / 2)];
    return [longest, median];
  }

  const sample: BlogSource[] = [
    ...pickSample("thevccorner.com", 2),
    ...pickSample("lennysnewsletter.com", 2),
    ...pickSample("paulgraham.com", 2),
    ...pickSample("strategyzer.com", 1),
    ...pickSample("astralcodexten.com", 1),
  ];

  console.log("═".repeat(80));
  console.log("BLOG BACKLOG RECOVERABILITY DIAGNOSTIC");
  console.log("═".repeat(80));
  console.log(`Sample: ${sample.length} sources across 5 hosts`);
  console.log(`Method: re-fetch via scripts/ingest.ts code path`);
  console.log(`         (same UA, 30s timeout, extractArticle from blog.ts)`);
  console.log(`         No KB writes — pure diagnostic.`);
  console.log("");

  // ── 4. Run the diagnostic on each sample, sequentially ────────────
  const results: DiagnosticResult[] = [];
  for (let i = 0; i < sample.length; i++) {
    const s = sample[i];
    console.log(
      `[${i + 1}/${sample.length}] ${s.host} — ${s.title.slice(0, 50)} (was ${s.wordCount}w)`,
    );
    const result = await diagnose(s);
    results.push(result);
    if (result.fetched && result.newWordCount !== undefined) {
      console.log(
        `        → fetched, new word count: ${result.newWordCount}w  [${result.recoverableClass}]`,
      );
    } else {
      console.log(
        `        → ${result.fetchError ?? "?"}  [${result.recoverableClass}]`,
      );
    }
  }

  console.log("");
  console.log("═".repeat(80));
  console.log("PER-SAMPLE RESULTS");
  console.log("═".repeat(80));
  console.log(
    "  host".padEnd(28) +
      "old".padStart(7) +
      "new".padStart(7) +
      "  ratio  classification",
  );
  console.log("  " + "─".repeat(76));
  for (const r of results) {
    const old = r.source.wordCount;
    const newW = r.newWordCount ?? 0;
    const ratio = old > 0 ? (newW / old).toFixed(1) + "x" : "—";
    console.log(
      "  " +
        r.source.host.padEnd(26) +
        old.toString().padStart(7) +
        newW.toString().padStart(7) +
        "  " +
        ratio.padStart(6) +
        "  " +
        r.recoverableClass,
    );
  }
  console.log("");

  // ── 5. Per-host decision matrix ───────────────────────────────────
  console.log("═".repeat(80));
  console.log("PER-HOST DECISION MATRIX");
  console.log("═".repeat(80));

  const hostsSampled = ["thevccorner.com", "lennysnewsletter.com", "paulgraham.com", "strategyzer.com", "astralcodexten.com"];
  for (const host of hostsSampled) {
    const hostResults = results.filter((r) => r.source.host === host);
    if (hostResults.length === 0) continue;
    const totalInBacklog = byHost.get(host)?.length ?? 0;
    const recoverableCount = hostResults.filter(
      (r) => r.recoverableClass === "recoverable-now",
    ).length;
    const marginalCount = hostResults.filter(
      (r) => r.recoverableClass === "marginal-improvement",
    ).length;
    const genuinelyShortCount = hostResults.filter(
      (r) => r.recoverableClass === "genuinely-short",
    ).length;
    const stubCount = hostResults.filter(
      (r) => r.recoverableClass === "paywall-or-stub",
    ).length;
    const failedCount = hostResults.filter(
      (r) => r.recoverableClass === "fetch-failed",
    ).length;

    let recommendation: string;
    if (recoverableCount === hostResults.length) {
      recommendation = `RE-FETCH all ${totalInBacklog}: pipeline recovers content fully`;
    } else if (recoverableCount > 0) {
      recommendation = `RE-FETCH all ${totalInBacklog}: at least some recoverable, accept mixed yield`;
    } else if (genuinelyShortCount + stubCount === hostResults.length) {
      recommendation = `ARCHIVE all ${totalInBacklog}: content is genuinely short / stub`;
    } else if (failedCount === hostResults.length) {
      recommendation = `INVESTIGATE: all samples failed to fetch (paywall, dead, blocked?)`;
    } else {
      recommendation = `MIXED: needs wider sample before deciding`;
    }

    console.log(
      `  ${host.padEnd(26)}  (${totalInBacklog} in backlog, ${hostResults.length} sampled)`,
    );
    console.log(
      `    recoverable=${recoverableCount}  marginal=${marginalCount}  short=${genuinelyShortCount}  stub=${stubCount}  failed=${failedCount}`,
    );
    console.log(`    → ${recommendation}`);
    console.log("");
  }

  // ── 6. Aggregate summary ──────────────────────────────────────────
  const totalRecoverable = results.filter(
    (r) => r.recoverableClass === "recoverable-now",
  ).length;
  console.log("═".repeat(80));
  console.log("SUMMARY");
  console.log("═".repeat(80));
  console.log(`  Sampled: ${results.length} sources`);
  console.log(`  Recoverable now: ${totalRecoverable}/${results.length}`);
  console.log(
    `  Marginal: ${results.filter((r) => r.recoverableClass === "marginal-improvement").length}`,
  );
  console.log(
    `  Genuinely short: ${results.filter((r) => r.recoverableClass === "genuinely-short").length}`,
  );
  console.log(
    `  Paywall/stub: ${results.filter((r) => r.recoverableClass === "paywall-or-stub").length}`,
  );
  console.log(
    `  Fetch failed: ${results.filter((r) => r.recoverableClass === "fetch-failed").length}`,
  );
  console.log("═".repeat(80));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
