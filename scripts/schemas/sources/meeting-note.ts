// ─── Meeting Note Frontmatter ─────────────────────────────────────────
//
// Meeting notes capture both internal discussions and summaries of
// external content (podcasts, conferences, expert calls) that the firm
// has flagged as thesis-relevant. note_type discriminates the subtypes.
// External content summaries (the Pope podcast example) are especially
// high-signal — they often trigger thesis revisions.

import { z } from "zod";
import { DateField, PrincipleRef, PersonField, PeopleField } from "./common.js";

export const MeetingNoteFrontmatter = z
  .object({
    type: z.literal("meeting-note"),
    firm: z.string(),

    // Note classification
    note_type: z.preprocess(
      (v) => (typeof v === "string" ? v.toLowerCase() : v),
      z.enum([
        "external-content-summary",
        "internal-discussion",
        "expert-call",
        "conference-notes",
        "company-meeting",
        "ic-discussion",
      ]),
    ),

    // External content reference (when note_type is external-*)
    source: z.string().optional(),
    source_date: DateField.optional(),
    source_url: z.string().optional(),
    source_duration: z.string().optional(),

    // Internal note metadata
    note_author: PersonField,
    note_date: DateField,
    shared_with: PeopleField.optional(),
    attendees: PeopleField.optional(),

    // Triage — accepts "HIGH (potentially thesis-impacting)" etc.
    // Leading word is the canonical category.
    priority: z.string().optional(),

    // Lineage
    tagged_principles_affected: z.array(PrincipleRef).optional(),
    related_documents: z.array(z.string()).optional(),
  })
  .passthrough();

export type MeetingNoteData = z.infer<typeof MeetingNoteFrontmatter>;
