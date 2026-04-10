import { describe, it, expect } from "vitest";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { extractArticle } from "./blog";

const FIXTURE_PATH = join(__dirname, "../../../tests/fixtures/ingest/sample-article.html");

describe("extractArticle", () => {
  it("extracts article text content", async () => {
    const html = await readFile(FIXTURE_PATH, "utf-8");
    const result = extractArticle(html, "https://techblog.com/ai-changes-everything");
    expect(result).not.toBeNull();
    expect(result!.text).toContain("artificial intelligence");
    expect(result!.text).toContain("human judgment");
  });

  it("strips navigation and footer", async () => {
    const html = await readFile(FIXTURE_PATH, "utf-8");
    const result = extractArticle(html, "https://techblog.com/ai-changes-everything");
    expect(result!.text).not.toContain("Navigation links");
    expect(result!.text).not.toContain("Footer content");
  });

  it("extracts metadata from OpenGraph tags", async () => {
    const html = await readFile(FIXTURE_PATH, "utf-8");
    const result = extractArticle(html, "https://techblog.com/ai-changes-everything");
    expect(result!.metadata.title).toBe("How AI Changes Everything");
    expect(result!.metadata.siteName).toBe("TechBlog");
    expect(result!.metadata.author).toBe("Jane Doe");
  });

  it("returns word count", async () => {
    const html = await readFile(FIXTURE_PATH, "utf-8");
    const result = extractArticle(html, "https://techblog.com/ai-changes-everything");
    expect(result!.wordCount).toBeGreaterThan(20);
  });

  it("returns null for empty/minimal content", () => {
    const html = "<html><body><p>Short</p></body></html>";
    const result = extractArticle(html, "https://example.com");
    expect(result).toBeNull();
  });

  // Regression tests for the JSON-LD normalization fix. Today's
  // Latent Space / Substack ingest produced health-check failures
  // because jsonLd.author was an object ({name: ...}) and jsonLd.publisher
  // was also an object, and both were assigned directly into string
  // fields. extractMetadata now normalizes via normalizeJsonLdString.

  function jsonLdHtml(jsonLd: unknown): string {
    // Body needs substantive text to clear the MIN_CONTENT_LENGTH gate.
    // Readability strips scripts, so the JSON-LD only matters for metadata.
    const body = Array(40)
      .fill("This is a long enough paragraph of content to pass the minimum content length check that blog ingest imposes so we can exercise metadata extraction in isolation.")
      .join(" ");
    return `
      <html>
        <head>
          <title>Test</title>
          <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
        </head>
        <body><article><p>${body}</p></article></body>
      </html>
    `;
  }

  it("normalizes object-shaped JSON-LD author", () => {
    const html = jsonLdHtml({
      "@type": "Article",
      headline: "Object Author Test",
      author: { "@type": "Person", name: "Swyx" },
      publisher: { "@type": "Organization", name: "Latent Space" },
    });
    const result = extractArticle(html, "https://latent.space/p/test");
    expect(result).not.toBeNull();
    expect(typeof result!.metadata.author).toBe("string");
    expect(result!.metadata.author).toBe("Swyx");
    expect(typeof result!.metadata.siteName).toBe("string");
    expect(result!.metadata.siteName).toBe("Latent Space");
  });

  it("normalizes array-shaped JSON-LD author by taking the first entry", () => {
    const html = jsonLdHtml({
      "@type": "Article",
      headline: "Array Author Test",
      author: [
        { "@type": "Person", name: "Alice" },
        { "@type": "Person", name: "Bob" },
      ],
    });
    const result = extractArticle(html, "https://example.com/multi");
    expect(result).not.toBeNull();
    expect(result!.metadata.author).toBe("Alice");
  });

  it("falls back through JSON-LD object properties (name → @id → url)", () => {
    const html = jsonLdHtml({
      "@type": "Article",
      headline: "Fallback Test",
      author: { "@id": "https://example.com/authors/42" },
      publisher: { url: "https://publisher.example.com" },
    });
    const result = extractArticle(html, "https://example.com/fallback");
    expect(result).not.toBeNull();
    expect(result!.metadata.author).toBe("https://example.com/authors/42");
    expect(result!.metadata.siteName).toBe("https://publisher.example.com");
  });

  it("returns null for unnormalizable JSON-LD shapes", () => {
    const html = jsonLdHtml({
      "@type": "Article",
      headline: "Unusable shape",
      author: { foo: "bar" }, // no name, no @id, no url
    });
    const result = extractArticle(html, "https://example.com/unusable");
    expect(result).not.toBeNull();
    expect(result!.metadata.author).toBeNull();
  });

  it("unwraps JSON-LD @graph arrays", () => {
    const html = jsonLdHtml({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline: "Graph Wrapped",
          author: { name: "Gwern" },
          publisher: { name: "Gwern Branwen" },
        },
      ],
    });
    const result = extractArticle(html, "https://gwern.net/test");
    expect(result).not.toBeNull();
    expect(result!.metadata.author).toBe("Gwern");
    expect(result!.metadata.siteName).toBe("Gwern Branwen");
  });

  // Regression tests for graph node selection. Many sites open their
  // @graph with WebSite, Organization, BreadcrumbList, or WebPage nodes
  // BEFORE the actual Article node. Picking "the first object" would
  // grab site-level metadata instead of article-level metadata. The
  // selector now prefers article-like @types explicitly.

  it("picks the Article node from a @graph that starts with WebSite", () => {
    const html = jsonLdHtml({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          url: "https://techblog.com",
          name: "TechBlog Homepage",
          publisher: { name: "Wrong Publisher Corp" },
        },
        {
          "@type": "Organization",
          name: "Wrong Org",
        },
        {
          "@type": "BlogPosting",
          headline: "Right Article",
          author: { name: "Right Author" },
          publisher: { name: "Right Publisher" },
        },
      ],
    });
    const result = extractArticle(html, "https://techblog.com/post");
    expect(result).not.toBeNull();
    expect(result!.metadata.title).toBe("Right Article");
    expect(result!.metadata.author).toBe("Right Author");
    expect(result!.metadata.siteName).toBe("Right Publisher");
  });

  it("prefers Article over WebPage in @graph", () => {
    const html = jsonLdHtml({
      "@graph": [
        {
          "@type": "WebPage",
          name: "Container WebPage",
          author: { name: "Container Author" },
        },
        {
          "@type": "Article",
          headline: "Nested Article",
          author: { name: "Article Author" },
        },
      ],
    });
    const result = extractArticle(html, "https://example.com/nested");
    expect(result).not.toBeNull();
    expect(result!.metadata.title).toBe("Nested Article");
    expect(result!.metadata.author).toBe("Article Author");
  });

  it("accepts a NewsArticle or TechArticle @type alias", () => {
    const newsHtml = jsonLdHtml({
      "@graph": [
        { "@type": "WebSite", name: "News Site" },
        {
          "@type": "NewsArticle",
          headline: "Breaking",
          author: { name: "News Reporter" },
        },
      ],
    });
    const newsResult = extractArticle(newsHtml, "https://news.example.com/x");
    expect(newsResult!.metadata.author).toBe("News Reporter");

    const techHtml = jsonLdHtml({
      "@graph": [
        { "@type": "Organization", name: "Tech Org" },
        {
          "@type": "TechArticle",
          headline: "Deep Dive",
          author: { name: "Engineer" },
        },
      ],
    });
    const techResult = extractArticle(techHtml, "https://tech.example.com/x");
    expect(techResult!.metadata.author).toBe("Engineer");
  });

  it("accepts array-valued @type", () => {
    const html = jsonLdHtml({
      "@graph": [
        { "@type": "WebSite", name: "Site" },
        {
          "@type": ["Article", "NewsArticle"],
          headline: "Multi-typed",
          author: { name: "Multi Author" },
        },
      ],
    });
    const result = extractArticle(html, "https://example.com/multi-type");
    expect(result!.metadata.author).toBe("Multi Author");
  });

  it("falls back to first object when no article-like type exists", () => {
    // Edge case: hand-rolled @graph that doesn't label its article
    // node with a canonical @type. Old behavior (first object) still
    // applies so we don't regress on pages that were working before
    // the article-type-aware selector.
    const html = jsonLdHtml({
      "@graph": [
        {
          headline: "Unlabeled First",
          author: { name: "Fallback Author" },
        },
        {
          "@type": "WebSite",
          name: "Something Else",
        },
      ],
    });
    const result = extractArticle(html, "https://example.com/unlabeled");
    expect(result!.metadata.author).toBe("Fallback Author");
  });
});
