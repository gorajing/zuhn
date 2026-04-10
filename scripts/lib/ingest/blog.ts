import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";

export interface ArticleMetadata {
  title: string;
  author: string | null;
  siteName: string | null;
  publishDate: string | null;
}

export interface ArticleResult {
  text: string;
  wordCount: number;
  metadata: ArticleMetadata;
}

const MIN_CONTENT_LENGTH = 200;

/**
 * Coerce a JSON-LD value into a plain string or null.
 *
 * JSON-LD values for fields like `author`, `publisher`, and `headline`
 * are not always plain strings. Per schema.org, `author` can be a
 * string, a Person object, or an array of Person objects; `publisher`
 * is almost always an Organization object. The previous code in this
 * module typed `jsonLd` as `Record<string, string>` and assigned those
 * values directly into ArticleMetadata string fields, which produced
 * malformed source metadata (author as an object, site_name as an
 * object) that failed Zod validation downstream in insight sources.
 *
 * Handling:
 *   - null / undefined   → null
 *   - string             → trimmed string (or null if empty)
 *   - number / boolean   → String coercion
 *   - array              → recurse on first element
 *   - object             → .name, .@id, .url, or null
 *   - anything else      → null
 */
function normalizeJsonLdString(val: unknown): string | null {
  if (val === null || val === undefined) return null;
  if (typeof val === "string") {
    const trimmed = val.trim();
    return trimmed.length > 0 ? trimmed : null;
  }
  if (typeof val === "number" || typeof val === "boolean") {
    return String(val);
  }
  if (Array.isArray(val)) {
    for (const item of val) {
      const normalized = normalizeJsonLdString(item);
      if (normalized !== null) return normalized;
    }
    return null;
  }
  if (typeof val === "object") {
    const obj = val as Record<string, unknown>;
    return (
      normalizeJsonLdString(obj.name) ??
      normalizeJsonLdString(obj["@id"]) ??
      normalizeJsonLdString(obj.url) ??
      null
    );
  }
  return null;
}

function extractMetadata(doc: Document, readabilityTitle: string | null): ArticleMetadata {
  // JSON-LD
  const jsonLdEl = doc.querySelector('script[type="application/ld+json"]');
  let jsonLd: Record<string, unknown> | null = null;
  if (jsonLdEl?.textContent) {
    try {
      const parsed = JSON.parse(jsonLdEl.textContent);
      // Some sites wrap schema in an array or @graph; unwrap the first
      // object-shaped entry so we get a consistent top-level record.
      if (Array.isArray(parsed)) {
        jsonLd = parsed.find((item) => item && typeof item === "object") ?? null;
      } else if (parsed && typeof parsed === "object") {
        if (Array.isArray(parsed["@graph"])) {
          jsonLd = parsed["@graph"].find((item: unknown) =>
            item && typeof item === "object"
          ) ?? null;
        } else {
          jsonLd = parsed as Record<string, unknown>;
        }
      }
    } catch {
      // ignore malformed JSON-LD
    }
  }

  // OpenGraph helpers
  const og = (prop: string): string | null =>
    doc.querySelector(`meta[property="og:${prop}"]`)?.getAttribute("content") ?? null;

  const meta = (name: string): string | null =>
    doc.querySelector(`meta[name="${name}"]`)?.getAttribute("content") ?? null;

  const articleMeta = (prop: string): string | null =>
    doc.querySelector(`meta[property="article:${prop}"]`)?.getAttribute("content") ?? null;

  // Cascade: JSON-LD > OpenGraph > meta tags > Readability. All JSON-LD
  // values go through normalizeJsonLdString to handle object/array shapes.
  const title =
    normalizeJsonLdString(jsonLd?.headline) ??
    og("title") ??
    meta("title") ??
    readabilityTitle ??
    doc.title ??
    "";

  const author =
    normalizeJsonLdString(jsonLd?.author) ??
    meta("author") ??
    null;

  const siteName =
    normalizeJsonLdString(jsonLd?.publisher) ??
    og("site_name") ??
    null;

  const publishDate =
    normalizeJsonLdString(jsonLd?.datePublished) ??
    articleMeta("published_time") ??
    meta("date") ??
    null;

  return { title, author, siteName, publishDate };
}

export function extractArticle(html: string, url: string): ArticleResult | null {
  const dom = new JSDOM(html, { url });
  const doc = dom.window.document;

  // Clone document for Readability (it mutates the DOM)
  const clonedDoc = doc.cloneNode(true) as Document;
  const reader = new Readability(clonedDoc);
  const article = reader.parse();

  if (!article?.textContent) return null;

  const text = article.textContent.trim();
  if (text.length < MIN_CONTENT_LENGTH) return null;

  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const metadata = extractMetadata(doc, article.title ?? null);

  return { text, wordCount, metadata };
}
