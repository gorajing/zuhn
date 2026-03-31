import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdtemp, rm, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import matter from "gray-matter";
import { writePrinciples } from "./create-principles";
import type { PrinciplesFileData } from "./create-principles";

// ─── Helpers ──────────────────────────────────────────────────────────

let tempDir: string;

function sampleInput(
  overrides: Partial<PrinciplesFileData["principles"][0]> = {}
): PrinciplesFileData {
  return {
    principles: [
      {
        domain: "ai-development",
        title: "Automate only what you deeply understand",
        summary:
          "Automating ignorance scales mistakes. First build the manual process, then automate.",
        confidence: "high",
        supporting_insights: ["INS-260320-AAAA", "INS-260320-BBBB"],
        tags: ["automation", "understanding"],
        ...overrides,
      },
    ],
  };
}

// ─── Setup / Teardown ─────────────────────────────────────────────────

beforeEach(async () => {
  tempDir = await mkdtemp(join(tmpdir(), "test-principles-"));
});

afterEach(async () => {
  await rm(tempDir, { recursive: true, force: true });
});

// ─── Tests ────────────────────────────────────────────────────────────

describe("writePrinciples", () => {
  it("skips exact duplicates by title", async () => {
    // Pre-create a principle file with the same title
    const domainDir = join(tempDir, "principles", "ai-development");
    await mkdir(domainDir, { recursive: true });

    const existingFrontmatter = {
      id: "PRI-260320-XXXX",
      domain: "ai-development",
      title: "Automate only what you deeply understand",
      summary: "Existing summary.",
      confidence: "high",
      supporting_insights: ["INS-260320-AAAA"],
      supporting_count: 1,
      tags: ["automation"],
      date_created: "2026-03-20",
      last_reviewed: "2026-03-20",
    };
    const existingContent = matter.stringify("Existing summary.", existingFrontmatter);
    await writeFile(
      join(domainDir, "automate-only-what-you-deeply-understand.md"),
      existingContent,
      "utf-8"
    );

    const input = sampleInput();
    const result = await writePrinciples(input, tempDir);

    expect(result.skipped).toBe(1);
    expect(result.created).toBe(0);
    expect(result.files).toHaveLength(0);
    expect(result.errors).toHaveLength(0);
  });

  it("appends hash suffix for true slug collisions", async () => {
    // Pre-create a file with the same slug but a DIFFERENT title
    const domainDir = join(tempDir, "principles", "ai-development");
    await mkdir(domainDir, { recursive: true });

    const existingFrontmatter = {
      id: "PRI-260320-XXXX",
      domain: "ai-development",
      title: "Automate only what you deeply understand (v1)",
      summary: "A different principle that happens to have the same slug.",
      confidence: "medium",
      supporting_insights: ["INS-260320-CCCC"],
      supporting_count: 1,
      tags: ["automation"],
      date_created: "2026-03-20",
      last_reviewed: "2026-03-20",
    };
    const existingContent = matter.stringify(
      "A different principle that happens to have the same slug.",
      existingFrontmatter
    );
    await writeFile(
      join(domainDir, "automate-only-what-you-deeply-understand.md"),
      existingContent,
      "utf-8"
    );

    const input = sampleInput();
    const result = await writePrinciples(input, tempDir);

    expect(result.created).toBe(1);
    expect(result.skipped).toBe(0);
    expect(result.files).toHaveLength(1);
    expect(result.errors).toHaveLength(0);
    // The file should have a hash suffix appended
    expect(result.files[0]).toMatch(
      /automate-only-what-you-deeply-understand-[0-9a-f]{4}\.md$/
    );
  });
});
