// ─── Investment Source Frontmatter dispatcher ─────────────────────────
//
// Single entry point for parsing frontmatter from investment-firm
// corpora. Use parseInvestmentSource(fm) — it routes via the `type`
// discriminator and returns the strongly-typed parse result.
//
// Adding a new document type = add a schema file here, add it to the
// discriminated union, add it to the type registry. Three lines per type.
//
// This is parallel to (not a replacement for) scripts/schemas/frontmatter.ts
// SourceFrontmatter, which handles the original Zuhn source types
// (reddit/youtube/blog/podcast/etc). The two run side-by-side: tenant
// configuration determines which schema family applies.

import { z } from "zod";
import { ICMemoFrontmatter } from "./ic-memo.js";
import { PostMortemFrontmatter } from "./post-mortem.js";
import { SectorThesisFrontmatter } from "./sector-thesis.js";
import { QuarterlyLetterFrontmatter } from "./quarterly-letter.js";
import { MeetingNoteFrontmatter } from "./meeting-note.js";
import { SlackThreadFrontmatter } from "./slack-thread.js";

export const InvestmentSourceFrontmatter = z.discriminatedUnion("type", [
  ICMemoFrontmatter,
  PostMortemFrontmatter,
  SectorThesisFrontmatter,
  QuarterlyLetterFrontmatter,
  MeetingNoteFrontmatter,
  SlackThreadFrontmatter,
]);

export type InvestmentSourceData = z.infer<typeof InvestmentSourceFrontmatter>;

export type InvestmentSourceType = InvestmentSourceData["type"];

/**
 * Parse arbitrary frontmatter as one of the six investment-source types.
 * Throws ZodError on validation failure. Use .safeParse for non-throwing.
 */
export function parseInvestmentSource(fm: unknown): InvestmentSourceData {
  return InvestmentSourceFrontmatter.parse(fm);
}

/**
 * Non-throwing variant. Returns { success: true, data } or { success: false, error }.
 */
export function safeParseInvestmentSource(fm: unknown) {
  return InvestmentSourceFrontmatter.safeParse(fm);
}

/**
 * Type guard: is this a recognized investment-source frontmatter shape?
 */
export function isInvestmentSource(fm: unknown): fm is InvestmentSourceData {
  return safeParseInvestmentSource(fm).success;
}

// Re-export per-type schemas for callers that want narrow typing.
export {
  ICMemoFrontmatter,
  PostMortemFrontmatter,
  SectorThesisFrontmatter,
  QuarterlyLetterFrontmatter,
  MeetingNoteFrontmatter,
  SlackThreadFrontmatter,
};

export type { ICMemoData } from "./ic-memo.js";
export type { PostMortemData } from "./post-mortem.js";
export type { SectorThesisData } from "./sector-thesis.js";
export type { QuarterlyLetterData } from "./quarterly-letter.js";
export type { MeetingNoteData } from "./meeting-note.js";
export type { SlackThreadData } from "./slack-thread.js";
