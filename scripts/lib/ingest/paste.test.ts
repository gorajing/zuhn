import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdtemp, rm, writeFile, readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import matter from "gray-matter";
import { ingestPaste } from "./paste";

describe("ingestPaste", () => {
  let tempDir: string;
  let kbRoot: string;

  beforeEach(async () => {
    tempDir = await mkdtemp(join(tmpdir(), "paste-test-"));
    kbRoot = join(tempDir, "knowledge-base");
  });

  afterEach(async () => {
    await rm(tempDir, { recursive: true, force: true });
  });

  it("copies the verbatim original to sources/paste/raw/", async () => {
    const f = join(tempDir, "notes.md");
    await writeFile(f, "# Hello\n\nbody text here");
    const result = await ingestPaste(f, kbRoot);
    const rawStat = await stat(result.rawPath);
    expect(rawStat.isFile()).toBe(true);
    expect(result.rawPath).toContain("sources/paste/raw/");
    expect(result.rawPath).toMatch(/\.txt$/);
  });

  it("creates source .md with valid paste frontmatter", async () => {
    const f = join(tempDir, "notes.md");
    await writeFile(f, "# My Title\n\nsome content with five words");
    const result = await ingestPaste(f, kbRoot);
    const parsed = matter(await readFile(result.sourcePath, "utf-8"));
    expect(parsed.data.id).toMatch(/^SRC-\d{6}-[A-F0-9]{4}$/);
    expect(parsed.data.type).toBe("paste");
    expect(parsed.data.title).toBe("My Title");
    expect(parsed.data.date_ingested).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(parsed.data.insight_count).toBe(0);
    expect(typeof parsed.data.word_count).toBe("number");
    // No url field for a local paste (gray-matter cannot serialize undefined)
    expect(parsed.data.url).toBeUndefined();
  });

  it("preserves the full text as the source body", async () => {
    const f = join(tempDir, "doc.txt");
    const body = "# Doc\n\nthe quick brown fox jumps over the lazy dog";
    await writeFile(f, body);
    const result = await ingestPaste(f, kbRoot);
    const parsed = matter(await readFile(result.sourcePath, "utf-8"));
    expect(parsed.content).toContain("the quick brown fox");
  });

  it("derives title from the first H1 when present", async () => {
    const f = join(tempDir, "whatever-filename.md");
    await writeFile(f, "# Real Document Title\n\ncontent");
    const result = await ingestPaste(f, kbRoot);
    expect(result.title).toBe("Real Document Title");
  });

  it("falls back to a humanized filename when there is no H1", async () => {
    const f = join(tempDir, "gtm-atlas-notes.txt");
    await writeFile(f, "no heading here, just prose content");
    const result = await ingestPaste(f, kbRoot);
    expect(result.title).toBe("gtm atlas notes");
  });

  it("returns sourceId matching the SRC- pattern", async () => {
    const f = join(tempDir, "x.md");
    await writeFile(f, "# X\n\nbody");
    const result = await ingestPaste(f, kbRoot);
    expect(result.sourceId).toMatch(/^SRC-\d{6}-[A-F0-9]{4}$/);
    expect(result.sourcePath).toContain("sources/paste/");
    expect(result.sourcePath).toMatch(/\.md$/);
  });
});
