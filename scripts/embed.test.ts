import { describe, it, expect } from "vitest";
import { markEmbeddedInText } from "./embed";

// ─── markEmbeddedInText: pure text transform for YAML frontmatter ─────

const MODEL = "nomic-embed-text";

describe("markEmbeddedInText — insight frontmatter (self-heal path)", () => {
  it("flips embedded: false to embedded: true when the flag is stale", () => {
    const raw = [
      "---",
      "id: INS-260412-ABCD",
      "domain: investing",
      "topic: macro",
      "embedded: false",
      'embedding_model: "nomic-embed-text"',
      "---",
      "",
      "body",
    ].join("\n");

    const result = markEmbeddedInText(raw, MODEL);

    expect(result).toContain("embedded: true");
    expect(result).not.toContain("embedded: false");
  });

  it("preserves the rest of the frontmatter when flipping the flag", () => {
    const raw = [
      "---",
      "id: INS-260412-ABCD",
      "domain: investing",
      "topic: macro",
      "tags:",
      "  - foo",
      "  - bar",
      "embedded: false",
      'embedding_model: "nomic-embed-text"',
      "---",
    ].join("\n");

    const result = markEmbeddedInText(raw, MODEL);

    expect(result).toContain("id: INS-260412-ABCD");
    expect(result).toContain("domain: investing");
    expect(result).toContain("topic: macro");
    expect(result).toContain("- foo");
    expect(result).toContain("- bar");
  });

  it("is idempotent — running it twice yields the same output as once", () => {
    const raw = [
      "---",
      "id: INS-260412-ABCD",
      "embedded: false",
      'embedding_model: "nomic-embed-text"',
      "---",
    ].join("\n");

    const once = markEmbeddedInText(raw, MODEL);
    const twice = markEmbeddedInText(once, MODEL);

    expect(twice).toBe(once);
  });

  it("returns the raw input unchanged when the flag is already true", () => {
    const raw = [
      "---",
      "id: INS-260412-ABCD",
      "embedded: true",
      'embedding_model: "nomic-embed-text"',
      "---",
    ].join("\n");

    const result = markEmbeddedInText(raw, MODEL);

    expect(result).toBe(raw);
  });

  it("updates embedding_model if it has drifted from the current model", () => {
    const raw = [
      "---",
      "id: INS-260412-ABCD",
      "embedded: false",
      'embedding_model: "old-stale-model"',
      "---",
    ].join("\n");

    const result = markEmbeddedInText(raw, MODEL);

    expect(result).toContain('embedding_model: "nomic-embed-text"');
    expect(result).not.toContain('"old-stale-model"');
  });
});

describe("markEmbeddedInText — principle frontmatter (insert path)", () => {
  it("inserts embedded: true when the embedded field is absent", () => {
    const raw = [
      "---",
      "id: PRI-260412-ABCD",
      "domain: psychology",
      "title: Example principle",
      "---",
      "",
      "body",
    ].join("\n");

    const result = markEmbeddedInText(raw, MODEL);

    expect(result).toContain("embedded: true");
    expect(result).toContain('embedding_model: "nomic-embed-text"');
  });

  it("inserts the new fields inside the closing --- of the frontmatter", () => {
    const raw = [
      "---",
      "id: PRI-260412-ABCD",
      "---",
      "",
      "body after frontmatter",
    ].join("\n");

    const result = markEmbeddedInText(raw, MODEL);

    // The body must remain after the frontmatter, unchanged
    expect(result).toMatch(/embedded: true[\s\S]*---[\s\S]*body after frontmatter/);
  });

  it("is idempotent for the principle insert path", () => {
    const raw = [
      "---",
      "id: PRI-260412-ABCD",
      "---",
    ].join("\n");

    const once = markEmbeddedInText(raw, MODEL);
    const twice = markEmbeddedInText(once, MODEL);

    expect(twice).toBe(once);
  });
});
