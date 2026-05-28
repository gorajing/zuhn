// ─── IC Memo Frontmatter ──────────────────────────────────────────────
//
// Investment Committee memos are the primary decision artifact for
// investment firms. They COIN predictions (which post-mortems later
// resolve) and reference parent sector theses. The action field defines
// the lifecycle stage of the position covered by this memo.

import { z } from "zod";
import { DateField, PredictionInline, PrincipleRef, PersonField, PeopleField } from "./common.js";

export const ICMemoFrontmatter = z
  .object({
    type: z.literal("ic-memo"),
    firm: z.string(),

    // Position-level identity
    position: z.string(), // e.g. "NVDA"
    // action is open-string: real corpora include "thesis revision (no
    // position change)", "bucket initiation", etc. Canonical categorization
    // (initiation / followon / trim / exit / hold-review) is a downstream
    // classifier concern, not a validation concern.
    action: z.string(),
    size: z.string().optional(), // e.g. "$48M (4.0% of AUM)"

    // Authorship & review
    ic_date: DateField,
    author: PersonField,
    reviewers: PeopleField.optional(),

    // Workflow status — open string ("APPROVED (bucket framework);
    // position-level approvals to follow"). Leading word carries the
    // canonical category; downstream classifier extracts it.
    status: z.string(),

    // Cross-references
    related_positions: z.array(z.string()).optional(),
    related_principles: z.array(PrincipleRef).optional(),
    parent_thesis: z.string().optional(), // sector thesis filename

    // Predictions COINED in this memo (inline objects)
    predictions: z.array(PredictionInline).optional(),
  })
  .passthrough();

export type ICMemoData = z.infer<typeof ICMemoFrontmatter>;
