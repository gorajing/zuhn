import { z } from "zod";

export const AgentRunStatus = z.enum([
  "active",
  "blocked",
  "failed",
  "needs_human",
  "passed",
]);

export const AgentRunStepStatus = z.enum([
  "pending",
  "in_progress",
  "completed",
  "failed",
  "skipped",
]);

export const AgentRunRisk = z.enum(["free", "soft_gate", "hard_gate"]);

export const AgentRunGateVerdict = z.enum([
  "pass",
  "fail",
  "needs_human",
  "unsafe",
  "insufficient_evidence",
]);

export const AgentRunEvidenceKind = z.enum([
  "command",
  "file",
  "diff",
  "test",
  "source_count",
  "manual_observation",
  "url",
  "screenshot",
  "other",
]);

export const AgentRunArtifactKind = z.enum([
  "file",
  "url",
  "command_output",
  "source",
  "diff",
  "other",
]);

export const AgentRunMemoryKind = z.enum([
  "decision",
  "observation",
  "pattern",
  "commitment",
  "reference",
]);

const Id = z.string().min(1);
const Timestamp = z.string().min(1);

export const AgentRunEvidence = z.object({
  kind: AgentRunEvidenceKind,
  ref: z.string().min(1),
  note: z.string().optional(),
  source_run_id: z.string().regex(/^RUN-\d{6}-[0-9A-F]{4}$/).optional(),
  source_item_id: z.string().min(1).optional(),
  captured_at: Timestamp.optional(),
  content_hash: z.string().min(1).optional(),
});

export const AgentRunPlanItem = z.object({
  id: Id,
  title: z.string().min(1),
  status: AgentRunStepStatus.default("pending"),
  acceptance: z.string().optional(),
});

export const AgentRunStep = z.object({
  id: Id,
  title: z.string().min(1),
  status: AgentRunStepStatus,
  notes: z.string().optional(),
  started_at: Timestamp.optional(),
  completed_at: Timestamp.optional(),
  evidence: z.array(AgentRunEvidence).default([]),
});

export const AgentRunArtifact = z.object({
  id: Id,
  kind: AgentRunArtifactKind,
  ref: z.string().min(1),
  description: z.string().min(1),
});

export const AgentRunRiskAssessment = z.object({
  id: Id,
  action: z.string().min(1),
  risk: AgentRunRisk,
  reversible: z.boolean(),
  gate_required: z.boolean(),
  rationale: z.string().min(1),
});

export const AgentRunSideEffect = z.object({
  id: Id,
  action: z.string().min(1),
  target: z.string().optional(),
  risk: AgentRunRisk,
  committed: z.boolean(),
  evidence: z.array(AgentRunEvidence).default([]),
});

export const AgentRunVerificationGate = z.object({
  id: Id,
  name: z.string().min(1),
  verdict: AgentRunGateVerdict,
  checked_at: Timestamp,
  evidence: z.array(AgentRunEvidence).default([]),
  required_for: z.array(Id).default([]),
  notes: z.string().optional(),
}).superRefine((gate, ctx) => {
  if (gate.verdict === "pass" && gate.evidence.length === 0) {
    ctx.addIssue({
      code: "custom",
      path: ["evidence"],
      message: "passing verification gates require evidence",
    });
  }
});

export const AgentRunMemoryCandidate = z.object({
  id: Id,
  kind: AgentRunMemoryKind,
  body: z.string().min(1).max(600),
  target_system: z.literal("zuun").default("zuun"),
  status: z.enum(["proposed", "promoted", "rejected"]).default("proposed"),
  reason: z.string().optional(),
  evidence: z.array(AgentRunEvidence).default([]),
  promoted_to: z.string().optional(),
  tags: z.array(z.string().min(1)).default([]),
  invalidates_when: z.string().optional(),
  stale_after: Timestamp.optional(),
  invalidated_at: Timestamp.optional(),
  invalidation_reason: z.string().optional(),
  validity: z.enum(["active", "stale", "invalidated"]).default("active"),
}).superRefine((candidate, ctx) => {
  if (candidate.status === "promoted") {
    if (!candidate.promoted_to?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["promoted_to"],
        message: "promoted memory candidates require promoted_to",
      });
    }
    if (candidate.evidence.length === 0) {
      ctx.addIssue({
        code: "custom",
        path: ["evidence"],
        message: "promoted memory candidates require evidence",
      });
    }
  }

  if (candidate.validity === "invalidated" && !candidate.invalidation_reason?.trim()) {
    ctx.addIssue({
      code: "custom",
      path: ["invalidation_reason"],
      message: "invalidated memory candidates require invalidation_reason",
    });
  }
});

export const AgentRunFinalStatus = z.object({
  closed_at: Timestamp,
  outcome: AgentRunStatus.exclude(["active"]),
  summary: z.string().min(1),
});

export const AgentRun = z.object({
  schema_version: z.literal(1),
  id: z.string().regex(/^RUN-\d{6}-[0-9A-F]{4}$/),
  goal: z.string().min(1),
  scope: z.string().optional(),
  created_at: Timestamp,
  updated_at: Timestamp,
  status: AgentRunStatus,
  plan: z.array(AgentRunPlanItem).default([]),
  steps: z.array(AgentRunStep).default([]),
  artifacts: z.array(AgentRunArtifact).default([]),
  risk_assessments: z.array(AgentRunRiskAssessment).default([]),
  side_effects: z.array(AgentRunSideEffect).default([]),
  verification_gates: z.array(AgentRunVerificationGate).default([]),
  memory_candidates: z.array(AgentRunMemoryCandidate).default([]),
  final_status: AgentRunFinalStatus.optional(),
});

export const AgentRunAppend = z.object({
  steps: z.array(AgentRunStep).optional(),
  artifacts: z.array(AgentRunArtifact).optional(),
  risk_assessments: z.array(AgentRunRiskAssessment).optional(),
  side_effects: z.array(AgentRunSideEffect).optional(),
  verification_gates: z.array(AgentRunVerificationGate).optional(),
  memory_candidates: z.array(AgentRunMemoryCandidate).optional(),
});

export const AgentRunStartInput = z.object({
  goal: z.string().min(1),
  scope: z.string().optional(),
  plan: z.array(AgentRunPlanItem).default([]),
});

export type AgentRunData = z.infer<typeof AgentRun>;
export type AgentRunAppendData = z.infer<typeof AgentRunAppend>;
export type AgentRunStartInputData = z.infer<typeof AgentRunStartInput>;
export type AgentRunStatusData = z.infer<typeof AgentRunStatus>;
