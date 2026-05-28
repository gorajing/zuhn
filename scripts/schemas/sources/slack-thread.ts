// ─── Slack Thread Frontmatter ─────────────────────────────────────────
//
// Slack threads from #investment-committee are the "show your work" of
// the firm. They preserve the deliberation that produced a decision —
// the meta-level evidence the audit-deliverable cites when it shows
// "the firm's discipline working." Outcome field links the thread to
// the formal IC decision it produced.

import { z } from "zod";
import { DateField, PredictionRef, PrincipleRef, PeopleField } from "./common.js";

export const SlackThreadFrontmatter = z
  .object({
    type: z.literal("slack-thread"),
    firm: z.string(),

    // Identity
    channel: z.string(),
    thread_started: DateField,
    thread_concluded: DateField.optional(),

    // Participants (free-text strings, may include role suffixes)
    participants: PeopleField,

    // Lineage
    related_documents: z.array(z.string()).optional(),
    related_predictions: z.array(PredictionRef).optional(),
    related_principles_affected: z.array(PrincipleRef).optional(),

    // Outcome — links thread to formal decision/document it produced
    outcome: z.string().optional(),
  })
  .passthrough();

export type SlackThreadData = z.infer<typeof SlackThreadFrontmatter>;
