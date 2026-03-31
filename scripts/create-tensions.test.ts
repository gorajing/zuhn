import { describe, it, expect } from "vitest";
import { z } from "zod";
import {
  computeSeverity,
  stanceHash,
  canonicalPairKey,
  CONF_WEIGHTS,
} from "./create-tensions";

// ─── computeSeverity ────────────────────────────────────────────────

describe("computeSeverity", () => {
  it("returns strong when both are high confidence", () => {
    // 0.9 * 0.9 = 0.81 >= 0.6
    expect(computeSeverity("high", "high")).toBe("strong");
  });

  it("returns strong when both are very_high", () => {
    // 1.0 * 1.0 = 1.0 >= 0.6
    expect(computeSeverity("very_high", "very_high")).toBe("strong");
  });

  it("returns strong for high * very_high", () => {
    // 0.9 * 1.0 = 0.9 >= 0.6
    expect(computeSeverity("high", "very_high")).toBe("strong");
  });

  it("returns strong for very_high * medium", () => {
    // 1.0 * 0.6 = 0.6 >= 0.6
    expect(computeSeverity("very_high", "medium")).toBe("strong");
  });

  it("returns moderate for high * medium", () => {
    // 0.9 * 0.6 = 0.54 >= 0.3 but < 0.6
    expect(computeSeverity("high", "medium")).toBe("moderate");
  });

  it("returns moderate for medium * medium", () => {
    // 0.6 * 0.6 = 0.36 >= 0.3 but < 0.6
    expect(computeSeverity("medium", "medium")).toBe("moderate");
  });

  it("returns moderate for high * low", () => {
    // 0.9 * 0.3 = 0.27 < 0.3 → actually mild
    expect(computeSeverity("high", "low")).toBe("mild");
  });

  it("returns mild for low * low", () => {
    // 0.3 * 0.3 = 0.09 < 0.3
    expect(computeSeverity("low", "low")).toBe("mild");
  });

  it("returns mild for pending * anything", () => {
    // 0.1 * 1.0 = 0.1 < 0.3
    expect(computeSeverity("pending", "very_high")).toBe("mild");
  });

  it("returns mild for low * medium", () => {
    // 0.3 * 0.6 = 0.18 < 0.3
    expect(computeSeverity("low", "medium")).toBe("mild");
  });

  it("returns mild for unknown confidence values", () => {
    // unknown defaults to 0.1
    expect(computeSeverity("unknown", "unknown")).toBe("mild");
  });

  it("is symmetric — order does not matter", () => {
    expect(computeSeverity("high", "medium")).toBe(
      computeSeverity("medium", "high")
    );
    expect(computeSeverity("very_high", "low")).toBe(
      computeSeverity("low", "very_high")
    );
  });

  it("has correct boundary at exactly 0.6 (medium * very_high)", () => {
    // medium=0.6, very_high=1.0 → 0.6*1.0=0.6 → strong
    expect(computeSeverity("medium", "very_high")).toBe("strong");
  });

  it("has correct boundary at exactly 0.3 threshold", () => {
    // medium=0.6, medium=0.6 → 0.36 → moderate
    expect(computeSeverity("medium", "medium")).toBe("moderate");
    // low=0.3, very_high=1.0 → 0.3 → moderate
    expect(computeSeverity("low", "very_high")).toBe("moderate");
  });
});

// ─── stanceHash ─────────────────────────────────────────────────────

describe("stanceHash", () => {
  it("returns a hex string", () => {
    const hash = stanceHash("AI is overhyped", "AI is underhyped");
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });

  it("is order-invariant", () => {
    const hash1 = stanceHash("Stance A", "Stance B");
    const hash2 = stanceHash("Stance B", "Stance A");
    expect(hash1).toBe(hash2);
  });

  it("is order-invariant with longer strings", () => {
    const a = "AI investment is a speculative bubble that will burst";
    const b = "AI coding tools deliver 10-20x productivity gains immediately";
    expect(stanceHash(a, b)).toBe(stanceHash(b, a));
  });

  it("produces different hashes for different stance pairs", () => {
    const hash1 = stanceHash("Stance A", "Stance B");
    const hash2 = stanceHash("Stance A", "Stance C");
    expect(hash1).not.toBe(hash2);
  });

  it("is deterministic", () => {
    const a = "same input";
    const b = "another input";
    expect(stanceHash(a, b)).toBe(stanceHash(a, b));
  });
});

// ─── canonicalPairKey ───────────────────────────────────────────────

describe("canonicalPairKey", () => {
  it("returns sorted pipe-delimited key", () => {
    expect(canonicalPairKey("INS-260324-AAAA", "INS-260324-BBBB")).toBe(
      "INS-260324-AAAA|INS-260324-BBBB"
    );
  });

  it("sorts regardless of input order", () => {
    const key1 = canonicalPairKey("INS-260324-BBBB", "INS-260324-AAAA");
    const key2 = canonicalPairKey("INS-260324-AAAA", "INS-260324-BBBB");
    expect(key1).toBe(key2);
  });

  it("produces the same key when inputs are already sorted", () => {
    const key = canonicalPairKey("AAA", "ZZZ");
    expect(key).toBe("AAA|ZZZ");
  });

  it("produces the same key when inputs are reverse-sorted", () => {
    const key = canonicalPairKey("ZZZ", "AAA");
    expect(key).toBe("AAA|ZZZ");
  });
});

// ─── Zod validation ─────────────────────────────────────────────────

describe("TensionJudgmentsFile schema", () => {
  const TensionEntry = z.object({
    id_a: z.string(),
    id_b: z.string(),
    stance_a: z.string(),
    stance_b: z.string(),
    reason: z.string(),
  });

  const NonTensionEntry = z.object({
    id_a: z.string(),
    id_b: z.string(),
    reason: z.string(),
  });

  const TensionJudgmentsFile = z.object({
    tensions: z.array(TensionEntry),
    non_tensions: z.array(NonTensionEntry),
  });

  it("accepts valid input with tensions and non-tensions", () => {
    const input = {
      tensions: [
        {
          id_a: "INS-260324-27E2",
          id_b: "INS-260322-XXXX",
          stance_a: "AI is overhyped",
          stance_b: "AI delivers real gains",
          reason: "Opposite economic conclusions",
        },
      ],
      non_tensions: [
        {
          id_a: "INS-260324-AAAA",
          id_b: "INS-260324-BBBB",
          reason: "Complementary angles",
        },
      ],
    };
    const result = TensionJudgmentsFile.safeParse(input);
    expect(result.success).toBe(true);
  });

  it("accepts empty arrays", () => {
    const input = { tensions: [], non_tensions: [] };
    const result = TensionJudgmentsFile.safeParse(input);
    expect(result.success).toBe(true);
  });

  it("rejects missing tensions field", () => {
    const input = { non_tensions: [] };
    const result = TensionJudgmentsFile.safeParse(input);
    expect(result.success).toBe(false);
  });

  it("rejects missing non_tensions field", () => {
    const input = { tensions: [] };
    const result = TensionJudgmentsFile.safeParse(input);
    expect(result.success).toBe(false);
  });

  it("rejects tension entry missing stance_a", () => {
    const input = {
      tensions: [
        {
          id_a: "INS-260324-27E2",
          id_b: "INS-260322-XXXX",
          stance_b: "AI delivers real gains",
          reason: "Opposite conclusions",
        },
      ],
      non_tensions: [],
    };
    const result = TensionJudgmentsFile.safeParse(input);
    expect(result.success).toBe(false);
  });

  it("rejects non-tension entry missing reason", () => {
    const input = {
      tensions: [],
      non_tensions: [
        {
          id_a: "INS-260324-AAAA",
          id_b: "INS-260324-BBBB",
        },
      ],
    };
    const result = TensionJudgmentsFile.safeParse(input);
    expect(result.success).toBe(false);
  });
});
