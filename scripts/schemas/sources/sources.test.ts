// ─── Investment-source schema regression suite ────────────────────────
//
// Pins two contracts:
//   1. The discriminated union dispatches correctly across all six
//      document types (one synthetic minimal-valid sample each).
//   2. The full Meridian demo corpus parses cleanly. Any schema or
//      corpus change that breaks ingestion fails this test.
//
// Phase 1.3b — replaces the throwaway scripts/_validate-meridian.ts
// validator with a permanent regression test.

import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import fg from "fast-glob";
import matter from "gray-matter";
import {
  InvestmentSourceFrontmatter,
  parseInvestmentSource,
  safeParseInvestmentSource,
  isInvestmentSource,
} from "./index.js";

const MERIDIAN_ROOT = join(__dirname, "../../..", "demos", "meridian-capital");

describe("investment source schema dispatcher", () => {
  it("dispatches ic-memo by type discriminator", () => {
    const fm = {
      type: "ic-memo",
      firm: "Test Firm",
      position: "TEST",
      action: "initiation",
      ic_date: "2024-01-15",
      author: "Test Author",
      status: "APPROVED",
    };
    const parsed = parseInvestmentSource(fm);
    expect(parsed.type).toBe("ic-memo");
  });

  it("dispatches post-mortem", () => {
    const fm = {
      type: "post-mortem",
      firm: "Test Firm",
      position: "TEST",
      action: "closed",
      entry_date: "2022-04-18",
      authors: ["Author A", "Author B"],
      status: "ARCHIVED",
    };
    expect(parseInvestmentSource(fm).type).toBe("post-mortem");
  });

  it("dispatches sector-thesis", () => {
    const fm = {
      type: "sector-thesis",
      firm: "Test Firm",
      sector: "Test Sector",
      date_established: "2024-01-15",
      authors: ["Author A"],
      status: "ACTIVE",
    };
    expect(parseInvestmentSource(fm).type).toBe("sector-thesis");
  });

  it("dispatches quarterly-letter", () => {
    const fm = {
      type: "quarterly-letter",
      firm: "Test Firm",
      period: "2024 Q4",
      date: "2025-01-18",
      author: "Test Author",
    };
    expect(parseInvestmentSource(fm).type).toBe("quarterly-letter");
  });

  it("dispatches meeting-note", () => {
    const fm = {
      type: "meeting-note",
      firm: "Test Firm",
      note_type: "external-content-summary",
      note_author: "Test Author",
      note_date: "2025-05-08",
    };
    expect(parseInvestmentSource(fm).type).toBe("meeting-note");
  });

  it("dispatches slack-thread", () => {
    const fm = {
      type: "slack-thread",
      firm: "Test Firm",
      channel: "#investment-committee",
      thread_started: "2025-08-12 10:14 PT",
      participants: ["A", "B"],
    };
    expect(parseInvestmentSource(fm).type).toBe("slack-thread");
  });

  it("rejects unknown types", () => {
    const fm = { type: "unknown-doc", firm: "X" };
    const result = safeParseInvestmentSource(fm);
    expect(result.success).toBe(false);
  });

  it("rejects missing required fields", () => {
    const fm = { type: "ic-memo", firm: "X" }; // missing position, action, etc.
    expect(isInvestmentSource(fm)).toBe(false);
  });
});

describe("normalization helpers", () => {
  it("PeopleField accepts comma-separated strings", () => {
    const fm = {
      type: "ic-memo",
      firm: "Test",
      position: "TEST",
      action: "initiation",
      ic_date: "2024-01-15",
      author: "Author",
      reviewers: "Sarah Chen (CIO), Rachel Wu (Senior PM)",
      status: "APPROVED",
    };
    const parsed = parseInvestmentSource(fm);
    if (parsed.type !== "ic-memo") throw new Error("dispatch failed");
    expect(parsed.reviewers).toEqual([
      "Sarah Chen (CIO)",
      "Rachel Wu (Senior PM)",
    ]);
  });

  it("PeopleField accepts native arrays unchanged", () => {
    const fm = {
      type: "post-mortem",
      firm: "Test",
      position: "TEST",
      action: "closed",
      entry_date: "2022-04-18",
      authors: ["A", "B"],
      status: "ARCHIVED",
    };
    const parsed = parseInvestmentSource(fm);
    if (parsed.type !== "post-mortem") throw new Error("dispatch failed");
    expect(parsed.authors).toEqual(["A", "B"]);
  });

  it("DateField coerces JS Date objects (YAML 1.1 bare-date parsing)", () => {
    const fm = {
      type: "ic-memo",
      firm: "Test",
      position: "TEST",
      action: "initiation",
      ic_date: new Date("2024-01-15T00:00:00.000Z"),
      author: "Author",
      status: "APPROVED",
    };
    const parsed = parseInvestmentSource(fm);
    if (parsed.type !== "ic-memo") throw new Error("dispatch failed");
    expect(typeof parsed.ic_date).toBe("string");
    expect(parsed.ic_date).toContain("2024-01-15");
  });

  it("Confidence enum is case-insensitive", () => {
    const fm = {
      type: "ic-memo",
      firm: "Test",
      position: "TEST",
      action: "initiation",
      ic_date: "2024-01-15",
      author: "Author",
      status: "APPROVED",
      predictions: [
        { id: "PRED-1", claim: "X", confidence: "High" }, // capital H
      ],
    };
    const parsed = parseInvestmentSource(fm);
    if (parsed.type !== "ic-memo") throw new Error("dispatch failed");
    expect(parsed.predictions?.[0].confidence).toBe("high");
  });

  it("passthrough preserves firm-specific extra fields", () => {
    const fm = {
      type: "sector-thesis",
      firm: "Test",
      sector: "Test",
      date_established: "2024-01-15",
      authors: ["A"],
      status: "ACTIVE",
      // Firm-specific quirky field — must survive
      status_2025_Q3: "SECTIONS UNDER ACTIVE RETIREMENT",
    };
    const parsed = parseInvestmentSource(fm) as Record<string, unknown>;
    expect(parsed.status_2025_Q3).toBe("SECTIONS UNDER ACTIVE RETIREMENT");
  });
});

describe("Meridian demo corpus parses cleanly", () => {
  // Directory name → expected discriminator value. Explicit map because
  // pluralization is irregular (theses → thesis), not just `s`-stripping.
  const dirToType: Record<string, string> = {
    "ic-memos": "ic-memo",
    "post-mortems": "post-mortem",
    "sector-theses": "sector-thesis",
    "quarterly-letters": "quarterly-letter",
    "meeting-notes": "meeting-note",
    "slack-threads": "slack-thread",
  };
  const subdirs = Object.keys(dirToType);

  // Glob synchronously at suite-load time so each fixture becomes its
  // own named test case (it.each-style) — failures point to the exact file.
  const files: Array<{ path: string; rel: string }> = [];
  for (const sub of subdirs) {
    const matches = fg.sync("*.md", {
      cwd: join(MERIDIAN_ROOT, sub),
      absolute: true,
    });
    for (const m of matches) {
      files.push({ path: m, rel: `${sub}/${m.split("/").pop()}` });
    }
  }

  it("found at least 12 corpus files (preventing empty-suite false-positive)", () => {
    expect(files.length).toBeGreaterThanOrEqual(12);
  });

  for (const { path, rel } of files) {
    it(`parses ${rel}`, () => {
      const raw = readFileSync(path, "utf-8");
      const { data } = matter(raw);
      const result = InvestmentSourceFrontmatter.safeParse(data);
      if (!result.success) {
        const issues = result.error.issues
          .map((i) => `[${i.path.join(".")}] ${i.message}`)
          .join("\n  ");
        throw new Error(`Failed to parse ${rel}:\n  ${issues}`);
      }
      // Confirm dispatched type matches the directory naming convention
      const dir = rel.split("/")[0];
      expect(result.data.type).toBe(dirToType[dir]);
    });
  }
});
