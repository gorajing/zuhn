import { join, basename, extname } from "node:path";
import { mkdir, copyFile, writeFile, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { generateSourceId } from "../generate-id";
import { slugify } from "./slug";

export interface PasteResult {
  sourceId: string;
  sourcePath: string;
  rawPath: string;
  title: string;
  wordCount: number;
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/**
 * Derive a title: the first markdown H1 if present, otherwise a humanized
 * filename. Keeps provenance honest — the title is the document's own, not
 * something invented at extraction time.
 */
function deriveTitle(text: string, filePath: string): string {
  const h1 = text.match(/^#\s+(.+?)\s*$/m);
  if (h1?.[1]) return h1[1].trim();
  const base = basename(filePath);
  const stem = base.slice(0, base.length - extname(base).length);
  const humanized = stem.replace(/[-_]+/g, " ").trim();
  return humanized.length > 0 ? humanized : "untitled paste";
}

/**
 * Ingest a local plain-text / markdown file as a "paste" source.
 *
 * Mirrors lib/ingest/pdf.ts: copy the verbatim original into sources/paste/
 * raw/, write a source .md whose body is the full clean text (like the blog
 * and reddit handlers) with gray-matter frontmatter. No `url` field — paste
 * sources have no scrapeable origin, and gray-matter cannot serialize
 * undefined (same reason pdf.ts omits url for local files).
 */
export async function ingestPaste(
  input: string,
  kbRoot?: string,
): Promise<PasteResult> {
  const root = kbRoot ?? join(__dirname, "../../..", "knowledge-base");
  const rawDir = join(root, "sources", "paste", "raw");
  const sourceDir = join(root, "sources", "paste");

  await mkdir(rawDir, { recursive: true });
  await mkdir(sourceDir, { recursive: true });

  const text = (await readFile(input, "utf-8")).trim();
  const title = deriveTitle(text, input);
  const slug = slugify(title);

  const rawPath = join(rawDir, `${slug}.txt`);
  await copyFile(input, rawPath);

  const sourceId = generateSourceId(slug, input);
  const today = new Date().toISOString().slice(0, 10);
  const wc = wordCount(text);

  const sourceData: Record<string, string | number> = {
    id: sourceId,
    type: "paste",
    title,
    date_ingested: today,
    insight_count: 0,
    word_count: wc,
  };

  const sourceMd = matter.stringify(text, sourceData);
  const sourcePath = join(sourceDir, `${slug}.md`);
  await writeFile(sourcePath, sourceMd, "utf-8");

  return { sourceId, sourcePath, rawPath, title, wordCount: wc };
}
