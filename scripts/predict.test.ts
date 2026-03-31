import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdtemp, rm, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import matter from "gray-matter";
import { writePredictions } from "./predict";
import type { PredictionInputData } from "./predict";

// ─── Helpers ──────────────────────────────────────────────────────────

let tempDir: string;

function sampleInput(
  overrides: Partial<PredictionInputData["predictions"][0]> = {}
): PredictionInputData {
  return {
    predictions: [
      {
        derived_from: ["PRI-260320-AAAA"],
        claim: "AI coding tools will automate 50% of boilerplate by 2027",
        falsifiable_metric:
          "Measure boilerplate lines in top-100 OSS repos year-over-year",
        deadline: "2027-01-01",
        tags: ["ai", "coding", "automation"],
        ...overrides,
      },
    ],
  };
}

// ─── Setup / Teardown ─────────────────────────────────────────────────

beforeEach(async () => {
  tempDir = await mkdtemp(join(tmpdir(), "test-predictions-"));
});

afterEach(async () => {
  await rm(tempDir, { recursive: true, force: true });
});

// ─── Tests ────────────────────────────────────────────────────────────

describe("writePredictions", () => {
  it("skips exact duplicates by claim", async () => {
    // Pre-create a prediction file with the same claim
    const predictionsDir = join(tempDir, "predictions");
    await mkdir(predictionsDir, { recursive: true });

    const existingFrontmatter = {
      id: "PRED-260320-XXXX",
      derived_from: ["PRI-260320-AAAA"],
      claim: "AI coding tools will automate 50% of boilerplate by 2027",
      falsifiable_metric: "Existing metric.",
      deadline: "2027-01-01",
      status: "active",
      date_created: "2026-03-20",
      tags: ["ai"],
    };
    const existingContent = matter.stringify("", existingFrontmatter);
    await writeFile(
      join(
        predictionsDir,
        "ai-coding-tools-will-automate-50-of-boilerplate-by-2027.md"
      ),
      existingContent,
      "utf-8"
    );

    const input = sampleInput();
    const result = await writePredictions(input, tempDir);

    expect(result.skipped).toBe(1);
    expect(result.created).toBe(0);
    expect(result.files).toHaveLength(0);
    expect(result.errors).toHaveLength(0);
  });

  it("appends hash suffix for true slug collisions", async () => {
    // Pre-create a file with the same slug but a DIFFERENT claim
    const predictionsDir = join(tempDir, "predictions");
    await mkdir(predictionsDir, { recursive: true });

    const existingFrontmatter = {
      id: "PRED-260320-XXXX",
      derived_from: ["PRI-260320-BBBB"],
      claim: "AI coding tools will automate 50% of boilerplate by 2027 (revised)",
      falsifiable_metric: "Different metric.",
      deadline: "2027-06-01",
      status: "active",
      date_created: "2026-03-20",
      tags: ["ai"],
    };
    const existingContent = matter.stringify("", existingFrontmatter);
    await writeFile(
      join(
        predictionsDir,
        "ai-coding-tools-will-automate-50-of-boilerplate-by-2027.md"
      ),
      existingContent,
      "utf-8"
    );

    const input = sampleInput();
    const result = await writePredictions(input, tempDir);

    expect(result.created).toBe(1);
    expect(result.skipped).toBe(0);
    expect(result.files).toHaveLength(1);
    expect(result.errors).toHaveLength(0);
    // The file should have a hash suffix appended
    expect(result.files[0]).toMatch(
      /ai-coding-tools-will-automate-50-of-boilerplate-by-2027-[0-9a-f]{4}\.md$/
    );
  });
});
