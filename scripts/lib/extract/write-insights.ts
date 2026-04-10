import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import matter from "gray-matter";
import fg from "fast-glob";
import { generateInsightId } from "../generate-id.js";
import { slugify } from "../ingest/slug.js";
import type { ExtractionInputData } from "../../schemas/extraction.js";
import type { SourceData } from "../../schemas/frontmatter.js";

// ─── Types ────────────────────────────────────────────────────────────

export interface WriteResult {
  created: number;
  files: string[];
  errors: string[];
  newTopics: string[];
}

// ─── Helpers ──────────────────────────────────────────────────────────

/**
 * Scans `sources/**\/*.md` under kbRoot for a file whose frontmatter `id`
 * matches the given sourceId. Returns the absolute path and parsed data.
 */
async function findSourceFile(
  sourceId: string,
  kbRoot: string
): Promise<{ path: string; data: SourceData; content: string } | null> {
  const files = await fg("sources/**/*.md", {
    cwd: kbRoot,
    absolute: true,
    ignore: ["**/_index.md", "**/raw/**"],
  });

  for (const filePath of files) {
    const raw = await readFile(filePath, "utf-8");
    const { data, content } = matter(raw);
    if (data.id === sourceId) {
      return { path: filePath, data: data as SourceData, content: content.trim() };
    }
  }

  return null;
}

/**
 * Returns today's date as YYYY-MM-DD.
 */
function todayISO(): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

// ─── Main ─────────────────────────────────────────────────────────────

export async function writeInsights(
  input: ExtractionInputData,
  sourceId: string,
  kbRoot: string
): Promise<WriteResult> {
  const result: WriteResult = {
    created: 0,
    files: [],
    errors: [],
    newTopics: [],
  };

  // 1. Find source file
  const source = await findSourceFile(sourceId, kbRoot);
  if (!source) {
    result.errors.push(`Source file not found for id: ${sourceId}`);
    return result;
  }

  // Build source reference from source metadata
  const sourceRef: Record<string, string> = {
    type: source.data.type,
    title: source.data.title,
  };
  if (source.data.author) sourceRef.author = source.data.author;
  if (source.data.url) sourceRef.url = source.data.url;

  const today = todayISO();
  const existingTopics = new Set<string>();

  // Collect existing topic directories so we can detect new ones
  const existingDomainDirs = await fg("domains/*/*", {
    cwd: kbRoot,
    onlyDirectories: true,
  });
  for (const dir of existingDomainDirs) {
    // dir looks like "domains/ai-development/automation"
    existingTopics.add(dir);
  }

  // Collect existing insight IDs across the KB so we can detect hash-suffix
  // collisions before writing. The ID suffix is sha256(title:salt).slice(-4),
  // so only 65,536 values exist per day — a daily batch of ~350 insights has
  // ~58% birthday-paradox collision probability. We retry with a bumped salt
  // when a collision is detected.
  const existingIds = new Set<string>();
  const existingInsightFiles = await fg("domains/**/*.md", {
    cwd: kbRoot,
    absolute: true,
    ignore: ["**/_index.md"],
  });
  for (const filePath of existingInsightFiles) {
    try {
      const raw = await readFile(filePath, "utf-8");
      const { data } = matter(raw);
      if (typeof data.id === "string") existingIds.add(data.id);
    } catch {
      // Unreadable files are the health check's problem, not ours.
    }
  }

  const MAX_COLLISION_RETRIES = 10;

  // 2. Write each insight
  for (let index = 0; index < input.insights.length; index++) {
    const insight = input.insights[index];

    try {
      const baseSalt = `${sourceId}-${Date.now()}-${index}`;
      let id = generateInsightId(insight.title, baseSalt);
      let retry = 0;
      while (existingIds.has(id) && retry < MAX_COLLISION_RETRIES) {
        retry++;
        id = generateInsightId(insight.title, `${baseSalt}:retry-${retry}`);
      }
      if (existingIds.has(id)) {
        throw new Error(
          `Failed to generate unique insight ID for "${insight.title}" after ${MAX_COLLISION_RETRIES} retries — today's suffix space may be unusually saturated`,
        );
      }
      existingIds.add(id);
      let slug = slugify(insight.title);

      const topicDir = join(kbRoot, "domains", insight.domain, insight.topic);
      let filePath = join(topicDir, `${slug}.md`);

      // Check slug collision: if file exists, check for duplicate content
      if (existsSync(filePath)) {
        const existingRaw = await readFile(filePath, "utf-8");
        const { data: existingData } = matter(existingRaw);
        const existingStandard =
          existingData.resolutions?.standard?.trim() ?? "";
        if (existingStandard === insight.resolutions.standard.trim()) {
          result.errors.push(
            `Skipping duplicate: "${insight.title}" — identical content already exists`
          );
          continue;
        }
        const hashSuffix = id.split("-").pop()!.toLowerCase();
        slug = `${slug}-${hashSuffix}`;
        filePath = join(topicDir, `${slug}.md`);
      }

      // Near-duplicate check: scan domain for title prefix match (first 40 chars)
      // Only check files NOT created in this batch (same-batch same-title is intentional)
      const titlePrefix = insight.title.toLowerCase().trim().slice(0, 40);
      const domainDir = join(kbRoot, "domains", insight.domain);
      const batchFiles = new Set(result.files);
      if (titlePrefix.length >= 30 && existsSync(domainDir)) {
        const domainFiles = await fg("**/*.md", { cwd: domainDir, absolute: true, ignore: ["**/_index.md"] });
        let nearDup = false;
        for (const df of domainFiles) {
          if (df === filePath || batchFiles.has(df)) continue;
          const dfRaw = await readFile(df, "utf-8");
          const { data: dfData } = matter(dfRaw);
          const existingPrefix = (typeof dfData.title === "string" ? dfData.title : "").toLowerCase().trim().slice(0, 40);
          if (existingPrefix === titlePrefix) {
            result.errors.push(
              `Skipping near-duplicate: "${insight.title}" — similar to existing "${dfData.title}"`
            );
            nearDup = true;
            break;
          }
        }
        if (nearDup) continue;
      }

      // Track new topics
      const topicKey = `domains/${insight.domain}/${insight.topic}`;
      if (!existingTopics.has(topicKey)) {
        result.newTopics.push(`${insight.domain}/${insight.topic}`);
        existingTopics.add(topicKey);
      }

      // Create directories as needed
      await mkdir(topicDir, { recursive: true });

      // Build frontmatter
      const frontmatter: Record<string, unknown> = {
        id,
        domain: insight.domain,
        topic: insight.topic,
        title: insight.title,
        actionability: insight.actionability,
        confidence: insight.confidence,
        shelf_life: insight.shelf_life,
        status: "active",
        tags: insight.tags,
        sources: [sourceRef],
        date_extracted: today,
        last_accessed: null,
        access_count: 0,
        indexed: false,
        embedded: false,
        resolutions: insight.resolutions,
      };

      // Add optional subtopic if present
      if (insight.subtopic) {
        frontmatter.subtopic = insight.subtopic;
      }

      // Add stance if present
      if (insight.stance) {
        frontmatter.stance = insight.stance;
      }

      // Write the file using gray-matter's stringify
      const body = insight.resolutions.standard;
      const fileContent = matter.stringify(body, frontmatter);
      await writeFile(filePath, fileContent, "utf-8");

      result.files.push(filePath);
      result.created++;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      result.errors.push(`Insight "${insight.title}": ${msg}`);
    }
  }

  // 3. Update source file with new insight_count and source_summary as body
  try {
    const sourceRaw = await readFile(source.path, "utf-8");
    const { data: sourceData } = matter(sourceRaw);
    sourceData.insight_count =
      (typeof sourceData.insight_count === "number" ? sourceData.insight_count : 0) +
      result.created;

    const updatedContent = matter.stringify(input.source_summary, sourceData);
    await writeFile(source.path, updatedContent, "utf-8");
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    result.errors.push(`Failed to update source file: ${msg}`);
  }

  return result;
}
