import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdtemp, rm, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import matter from "gray-matter";
import { writeDecisions } from "./decide";
import type { DecisionInputData } from "./decide";

// ─── Helpers ──────────────────────────────────────────────────────────

let tempDir: string;

function sampleInput(
  overrides: Partial<DecisionInputData["decisions"][0]> = {}
): DecisionInputData {
  return {
    decisions: [
      {
        context: "Whether to adopt TypeScript strict mode across the codebase",
        options: ["Enable strict mode now", "Gradual migration", "Stay with loose mode"],
        choice: "Enable strict mode now",
        informed_by: ["INS-260320-AAAA", "PRI-260320-BBBB"],
        outcome_date: "2026-06-01",
        tags: ["typescript", "codebase"],
        ...overrides,
      },
    ],
  };
}

// ─── Setup / Teardown ─────────────────────────────────────────────────

beforeEach(async () => {
  tempDir = await mkdtemp(join(tmpdir(), "test-decisions-"));
});

afterEach(async () => {
  await rm(tempDir, { recursive: true, force: true });
});

// ─── Tests ────────────────────────────────────────────────────────────

describe("writeDecisions", () => {
  it("skips exact duplicates by context", async () => {
    // Pre-create a decision file with the same context
    const decisionsDir = join(tempDir, "decisions");
    await mkdir(decisionsDir, { recursive: true });

    const existingFrontmatter = {
      id: "DEC-260320-XXXX",
      date: "2026-03-20",
      context: "Whether to adopt TypeScript strict mode across the codebase",
      options: ["Enable strict mode now", "Stay with loose mode"],
      choice: "Stay with loose mode",
      informed_by: ["INS-260320-CCCC"],
      outcome_date: "2026-06-01",
      status: "pending",
      tags: ["typescript"],
    };
    const existingContent = matter.stringify("", existingFrontmatter);
    await writeFile(
      join(
        decisionsDir,
        "whether-to-adopt-typescript-strict-mode-across-the-codebase.md"
      ),
      existingContent,
      "utf-8"
    );

    const input = sampleInput();
    const result = await writeDecisions(input, tempDir);

    expect(result.skipped).toBe(1);
    expect(result.created).toBe(0);
    expect(result.files).toHaveLength(0);
    expect(result.errors).toHaveLength(0);
  });

  it("appends hash suffix for true slug collisions", async () => {
    // Pre-create a file with the same slug but a DIFFERENT context
    const decisionsDir = join(tempDir, "decisions");
    await mkdir(decisionsDir, { recursive: true });

    const existingFrontmatter = {
      id: "DEC-260320-XXXX",
      date: "2026-03-20",
      context: "Whether to adopt TypeScript strict mode across the codebase (revisited)",
      options: ["Yes", "No"],
      choice: "Yes",
      informed_by: ["INS-260320-DDDD"],
      outcome_date: "2026-09-01",
      status: "pending",
      tags: ["typescript"],
    };
    const existingContent = matter.stringify("", existingFrontmatter);
    await writeFile(
      join(
        decisionsDir,
        "whether-to-adopt-typescript-strict-mode-across-the-codebase.md"
      ),
      existingContent,
      "utf-8"
    );

    const input = sampleInput();
    const result = await writeDecisions(input, tempDir);

    expect(result.created).toBe(1);
    expect(result.skipped).toBe(0);
    expect(result.files).toHaveLength(1);
    expect(result.errors).toHaveLength(0);
    // The file should have a hash suffix appended
    expect(result.files[0]).toMatch(
      /whether-to-adopt-typescript-strict-mode-across-the-codebase-[0-9a-f]{4}\.md$/
    );
  });
});
