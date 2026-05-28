// ─── Post-Mortem Frontmatter ──────────────────────────────────────────
//
// Post-mortems are the highest-signal documents in an investment firm's
// corpus: they are where predictions get RESOLVED and principles get
// RETIRED. The audit-deliverable's lineage tracking depends heavily on
// related_predictions and retired_principles being parseable.

import { z } from "zod";
import { DateField, PredictionRef, PrincipleRef, PeopleField } from "./common.js";

export const PostMortemFrontmatter = z
  .object({
    type: z.literal("post-mortem"),
    firm: z.string(),

    // Position
    position: z.string(),
    // Open string — canonical categorization (closed/trimmed/held/exited)
    // is a downstream classifier concern.
    action: z.string(),

    // Lifecycle dates & economics
    entry_date: DateField,
    entry_price: z.union([z.string(), z.number()]).optional(),
    exit_date: DateField.optional(),
    exit_price: z.union([z.string(), z.number()]).optional(),
    holding_period: z.string().optional(),
    total_return: z.string().optional(),
    size_at_entry: z.string().optional(),
    size_at_exit: z.string().optional(),

    // Authorship
    authors: PeopleField,

    // Lineage — the lessons of the post-mortem
    related_predictions: z.array(PredictionRef).optional(),
    retired_principles: z.array(PrincipleRef).optional(),
    new_principles_seeded: z.array(PrincipleRef).optional(),
    related_documents: z.array(z.string()).optional(),

    // Workflow status (DRAFT | ARCHIVED | FINAL plus narration).
    status: z.string(),
  })
  .passthrough();

export type PostMortemData = z.infer<typeof PostMortemFrontmatter>;
