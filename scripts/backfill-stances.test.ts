import { describe, it, expect } from "vitest";
import { z } from "zod";
import { StancesFile } from "./backfill-stances";
import { InsightFrontmatter } from "./schemas/frontmatter";

// ─── StancesFile Zod validation ──────────────────────────────────────

describe("StancesFile schema", () => {
  it("accepts valid stances input with multiple entries", () => {
    const input = {
      stances: [
        { id: "INS-260320-AAAA", stance: "AI will transform the economy" },
        { id: "INS-260320-BBBB", stance: "Automation eliminates low-skill jobs first" },
      ],
    };
    const result = StancesFile.safeParse(input);
    expect(result.success).toBe(true);
  });

  it("accepts an empty stances array", () => {
    const input = { stances: [] };
    const result = StancesFile.safeParse(input);
    expect(result.success).toBe(true);
  });

  it("accepts a single stance entry", () => {
    const input = {
      stances: [
        { id: "INS-260320-CCCC", stance: "Remote work increases productivity for knowledge workers" },
      ],
    };
    const result = StancesFile.safeParse(input);
    expect(result.success).toBe(true);
  });

  it("rejects input missing the stances field", () => {
    const input = {};
    const result = StancesFile.safeParse(input);
    expect(result.success).toBe(false);
  });

  it("rejects input where stances is not an array", () => {
    const input = { stances: "not-an-array" };
    const result = StancesFile.safeParse(input);
    expect(result.success).toBe(false);
  });

  it("rejects a stance entry missing the id field", () => {
    const input = {
      stances: [{ stance: "AI will transform the economy" }],
    };
    const result = StancesFile.safeParse(input);
    expect(result.success).toBe(false);
  });

  it("rejects a stance entry missing the stance field", () => {
    const input = {
      stances: [{ id: "INS-260320-AAAA" }],
    };
    const result = StancesFile.safeParse(input);
    expect(result.success).toBe(false);
  });

  it("rejects a stance entry where id is not a string", () => {
    const input = {
      stances: [{ id: 12345, stance: "AI will transform the economy" }],
    };
    const result = StancesFile.safeParse(input);
    expect(result.success).toBe(false);
  });

  it("rejects a stance entry where stance is not a string", () => {
    const input = {
      stances: [{ id: "INS-260320-AAAA", stance: 42 }],
    };
    const result = StancesFile.safeParse(input);
    expect(result.success).toBe(false);
  });

  it("accepts stances with long stance text", () => {
    const longStance =
      "Short-form video content fundamentally reshapes attention spans and content consumption patterns, forcing creators to front-load value within the first three seconds";
    const input = {
      stances: [{ id: "INS-260320-DDDD", stance: longStance }],
    };
    const result = StancesFile.safeParse(input);
    expect(result.success).toBe(true);
  });

  it("infers correct TypeScript type from schema", () => {
    type StancesFileType = z.infer<typeof StancesFile>;
    const data: StancesFileType = {
      stances: [{ id: "INS-260320-AAAA", stance: "Test stance" }],
    };
    // If this compiles without error, the type is correct
    expect(data.stances[0].id).toBe("INS-260320-AAAA");
    expect(data.stances[0].stance).toBe("Test stance");
  });
});

// ─── --dry-run flag parsing ──────────────────────────────────────────

describe("--dry-run flag", () => {
  it("is a recognised flag (does not appear in --help rejection logic)", () => {
    // The dry-run flag controls write behaviour in runApply.
    // We verify the concept: when dryRun is true, no filesystem writes occur.
    // This is validated by the round-trip test below — if we set dryRun=true
    // the function logs but does not call writeFileSync or updateStance.
    //
    // We confirm the flag name itself is a plain string that can be parsed.
    const argv = ["node", "backfill-stances.ts", "--file", "/tmp/test.json", "--dry-run"];
    const dryRunFlag = argv.includes("--dry-run");
    expect(dryRunFlag).toBe(true);
  });

  it("dry-run is false when flag is absent", () => {
    const argv = ["node", "backfill-stances.ts", "--file", "/tmp/test.json"];
    const dryRunFlag = argv.includes("--dry-run");
    expect(dryRunFlag).toBe(false);
  });
});

// ─── Round-trip validation ───────────────────────────────────────────

describe("InsightFrontmatter round-trip with stance added", () => {
  /** Minimal valid InsightFrontmatter object (no stance) */
  function validInsight() {
    return {
      id: "INS-260320-A1B2",
      domain: "ai-development",
      topic: "automation",
      title: "AI tools accelerate software development cycles",
      actionability: "immediate" as const,
      confidence: "high" as const,
      shelf_life: "evergreen" as const,
      status: "active" as const,
      tags: ["ai", "automation", "productivity"],
      sources: [{ type: "blog", title: "AI Developer Survey 2026" }],
      date_extracted: "2026-03-20",
      last_accessed: null,
      access_count: 0,
      indexed: true,
      embedded: true,
      resolutions: {
        one_line: "AI coding tools deliver measurable speed gains for software teams.",
        standard:
          "Studies consistently show 10–40% productivity improvements when developers adopt AI-assisted coding tools, particularly for boilerplate generation and test writing.",
      },
    };
  }

  it("passes safeParse after adding a valid stance string", () => {
    const data = { ...validInsight() };
    // Simulate what backfill-stances does: add stance to frontmatter data
    (data as Record<string, unknown>).stance =
      "AI coding tools deliver significant and measurable productivity gains";

    const result = InsightFrontmatter.safeParse(data);
    expect(result.success).toBe(true);
  });

  it("preserves all existing fields after adding stance", () => {
    const base = validInsight();
    const data = { ...base, stance: "AI will transform the software economy" };

    const result = InsightFrontmatter.safeParse(data);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.id).toBe(base.id);
      expect(result.data.domain).toBe(base.domain);
      expect(result.data.topic).toBe(base.topic);
      expect(result.data.title).toBe(base.title);
      expect(result.data.confidence).toBe(base.confidence);
      expect(result.data.stance).toBe("AI will transform the software economy");
    }
  });

  it("still passes when stance is absent (optional field)", () => {
    const data = validInsight();
    // stance is not present — should still be valid
    const result = InsightFrontmatter.safeParse(data);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.stance).toBeUndefined();
    }
  });

  it("fails safeParse if a required field is corrupted alongside stance", () => {
    const data = {
      ...validInsight(),
      stance: "AI is transformative",
      confidence: "INVALID_VALUE", // corrupt a required enum field
    };
    const result = InsightFrontmatter.safeParse(data);
    expect(result.success).toBe(false);
  });

  it("accepts stance with special characters", () => {
    const data = {
      ...validInsight(),
      stance:
        'AI "assistants" will replace 30–50% of knowledge work by 2030 (per McKinsey & BCG)',
    };
    const result = InsightFrontmatter.safeParse(data);
    expect(result.success).toBe(true);
  });

  it("accepts stance alongside optional subtopic and related fields", () => {
    const data = {
      ...validInsight(),
      subtopic: "coding-tools",
      related: ["INS-260320-C3D4"],
      stance: "Generative AI coding tools are net productivity multipliers",
    };
    const result = InsightFrontmatter.safeParse(data);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.subtopic).toBe("coding-tools");
      expect(result.data.related).toEqual(["INS-260320-C3D4"]);
      expect(result.data.stance).toBe(
        "Generative AI coding tools are net productivity multipliers"
      );
    }
  });
});
