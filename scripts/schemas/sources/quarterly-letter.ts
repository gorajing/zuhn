// ─── Quarterly Letter Frontmatter ─────────────────────────────────────
//
// Letters to LPs / family principals. These are PUBLIC narrative — they
// summarize a quarter's positioning and link back to the deeper
// reasoning in IC memos and post-mortems. The performance object is the
// closest the corpus gets to structured numerical state.

import { z } from "zod";
import { DateField, PrincipleRef, PersonField } from "./common.js";

const Performance = z
  .object({
    benchmark: z.string().optional(),
  })
  .catchall(z.union([z.string(), z.number()])); // q4_2024, ytd_2024, etc.

export const QuarterlyLetterFrontmatter = z
  .object({
    type: z.literal("quarterly-letter"),
    firm: z.string(),

    // Period
    period: z.string(), // "2024 Q4"
    date: DateField,

    // Authorship & distribution
    author: PersonField,
    distribution: z.string().optional(),
    length: z.union([z.string(), z.number()]).optional(),

    // Performance snapshot
    performance: Performance.optional(),

    // Position deltas this quarter
    positions_initiated: z.array(z.string()).optional(),
    positions_closed: z.array(z.string()).optional(),
    positions_trimmed: z.array(z.string()).optional(),
    positions_added: z.array(z.string()).optional(),

    // Lineage
    related_principles_evolved: z.array(PrincipleRef).optional(),
    related_principles_retired: z.array(PrincipleRef).optional(),
    related_post_mortems: z.array(z.string()).optional(),
  })
  .passthrough();

export type QuarterlyLetterData = z.infer<typeof QuarterlyLetterFrontmatter>;
