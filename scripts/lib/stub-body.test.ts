import { describe, expect, it } from "vitest";
import { isStubBody, STUB_BODY_THRESHOLD, STUB_PRONE_TYPES } from "./stub-body";

describe("isStubBody", () => {
  it("flags PDFs below the threshold", () => {
    expect(isStubBody("pdf", 0)).toBe(true);
    expect(isStubBody("pdf", 50)).toBe(true);
    expect(isStubBody("pdf", STUB_BODY_THRESHOLD - 1)).toBe(true);
  });

  it("flags Reddit posts below the threshold", () => {
    expect(isStubBody("reddit", 0)).toBe(true);
    expect(isStubBody("reddit", 50)).toBe(true);
    expect(isStubBody("reddit", STUB_BODY_THRESHOLD - 1)).toBe(true);
  });

  it("does not flag PDFs or Reddit at or above the threshold", () => {
    expect(isStubBody("pdf", STUB_BODY_THRESHOLD)).toBe(false);
    expect(isStubBody("pdf", 1000)).toBe(false);
    expect(isStubBody("reddit", STUB_BODY_THRESHOLD)).toBe(false);
    expect(isStubBody("reddit", 5000)).toBe(false);
  });

  it("never flags non-stub-prone source types regardless of word count", () => {
    for (const type of ["youtube", "blog", "panel", "paste", "audio", "image"]) {
      expect(isStubBody(type, 0)).toBe(false);
      expect(isStubBody(type, 50)).toBe(false);
      expect(isStubBody(type, STUB_BODY_THRESHOLD - 1)).toBe(false);
    }
  });

  it("does not flag when word count is unknown", () => {
    // null = ingest.ts didn't surface a word count; pass through and let
    // downstream extraction handle the empty case rather than guess.
    expect(isStubBody("pdf", null)).toBe(false);
    expect(isStubBody("reddit", null)).toBe(false);
  });

  it("exposes the threshold and prone-type set as constants", () => {
    expect(STUB_BODY_THRESHOLD).toBe(100);
    expect(STUB_PRONE_TYPES.has("pdf")).toBe(true);
    expect(STUB_PRONE_TYPES.has("reddit")).toBe(true);
    expect(STUB_PRONE_TYPES.has("youtube")).toBe(false);
    expect(STUB_PRONE_TYPES.has("audio")).toBe(false);
  });
});
