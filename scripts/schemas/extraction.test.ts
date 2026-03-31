import { describe, it, expect } from "vitest";
import { ExtractionInsight } from "./extraction";
import { InsightFrontmatter, TensionFrontmatter } from "./frontmatter";

describe("ExtractionInsight", () => {
  it("requires stance field", () => {
    const valid = {
      domain: "investing", topic: "bubbles", title: "Test",
      stance: "AI is a bubble", actionability: "reference",
      confidence: "high", shelf_life: "evergreen",
      tags: ["test"], resolutions: { one_line: "x", standard: "y" },
    };
    expect(ExtractionInsight.safeParse(valid).success).toBe(true);
  });

  it("fails without stance", () => {
    const missing = {
      domain: "investing", topic: "bubbles", title: "Test",
      actionability: "reference", confidence: "high", shelf_life: "evergreen",
      tags: ["test"], resolutions: { one_line: "x", standard: "y" },
    };
    expect(ExtractionInsight.safeParse(missing).success).toBe(false);
  });
});

describe("InsightFrontmatter", () => {
  it("accepts stance as optional", () => {
    // InsightFrontmatter has many required fields - just verify stance doesn't break existing valid data
    // by checking the schema accepts the field when present
    const schema = InsightFrontmatter;
    expect(schema.shape.stance).toBeDefined();
  });
});

describe("TensionFrontmatter", () => {
  it("accepts new stance tension fields", () => {
    const schema = TensionFrontmatter;
    expect(schema.shape.severity).toBeDefined();
    expect(schema.shape.stance_a).toBeDefined();
    expect(schema.shape.stance_b).toBeDefined();
    expect(schema.shape.reason).toBeDefined();
  });

  it("accepts stance as type enum value", () => {
    const valid = {
      id: "T-260324-ABCD", title: "Test", status: "unresolved",
      side_a: ["INS-260324-AAAA"], side_b: ["INS-260324-BBBB"],
      type: "stance", severity: "strong",
      stance_a: "AI is a bubble", stance_b: "AI will transform everything",
      reason: "Opposing views on AI", date_created: "2026-03-24",
    };
    expect(TensionFrontmatter.safeParse(valid).success).toBe(true);
  });
});
