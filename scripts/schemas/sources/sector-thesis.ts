// ─── Sector Thesis Frontmatter ────────────────────────────────────────
//
// Sector theses are PARENT documents — long-form frames that individual
// IC memos derive from. They SEED principles. Their status arc (ACTIVE
// → UNDER REVIEW → SUPERSEDED) is critical for the audit-deliverable's
// thesis-lifecycle visualization.

import { z } from "zod";
import { DateField, PrincipleRef, PeopleField } from "./common.js";

export const SectorThesisFrontmatter = z
  .object({
    type: z.literal("sector-thesis"),
    firm: z.string(),

    // Identity
    sector: z.string(),
    horizon: z.string().optional(), // "24-36 months"

    // Authorship
    date_established: DateField,
    authors: PeopleField,

    // Workflow status — the corpus contains rich human-authored values
    // like "ACTIVE (under quarterly review)" or "SECTIONS UNDER ACTIVE
    // RETIREMENT". Leading word carries canonical category; downstream
    // classifier extracts it.
    status: z.string(),

    // Review cadence
    review_cadence: z.string().optional(),
    last_review: z.string().optional(),

    // Lineage
    positions_implied: z.array(z.string()).optional(),
    related_principles_seeded: z.array(PrincipleRef).optional(),
    superseded_by: z.string().optional(),
    supersedes: z.string().optional(),
  })
  .passthrough();

export type SectorThesisData = z.infer<typeof SectorThesisFrontmatter>;
