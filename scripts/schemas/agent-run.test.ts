import { describe, expect, it } from "vitest";
import { AgentRun, AgentRunAppend, AgentRunMemoryCandidate, AgentRunVerificationGate } from "./agent-run";

const evidence = [{ kind: "command", ref: "npm test" }];

describe("AgentRun schema", () => {
  it("accepts a minimal active run", () => {
    const result = AgentRun.safeParse({
      schema_version: 1,
      id: "RUN-260624-ABCD",
      goal: "Build run ledger",
      created_at: "2026-06-24T00:00:00.000Z",
      updated_at: "2026-06-24T00:00:00.000Z",
      status: "active",
      plan: [],
      steps: [],
      artifacts: [],
      risk_assessments: [],
      side_effects: [],
      verification_gates: [],
      memory_candidates: [],
    });

    expect(result.success).toBe(true);
  });

  it("rejects unknown verification verdicts", () => {
    const result = AgentRunVerificationGate.safeParse({
      id: "gate-1",
      name: "Tests",
      verdict: "maybe",
      checked_at: "2026-06-24T00:00:00.000Z",
      evidence,
    });

    expect(result.success).toBe(false);
  });

  it("rejects passing verification gates without evidence", () => {
    const result = AgentRunVerificationGate.safeParse({
      id: "gate-1",
      name: "Tests",
      verdict: "pass",
      checked_at: "2026-06-24T00:00:00.000Z",
    });

    expect(result.success).toBe(false);
  });

  it("accepts append patches with only verification gates", () => {
    const result = AgentRunAppend.safeParse({
      verification_gates: [
        {
          id: "gate-1",
          name: "Focused test",
          verdict: "pass",
          checked_at: "2026-06-24T00:00:00.000Z",
          evidence,
        },
      ],
    });

    expect(result.success).toBe(true);
  });

  it("accepts Zuun memory candidates with provenance and invalidation hints", () => {
    const result = AgentRunMemoryCandidate.safeParse({
      id: "mem-1",
      kind: "pattern",
      body: "For non-trivial repo tasks, start AgentRun before editing.",
      tags: ["agent-run", "verification"],
      invalidates_when: "AgentRun is replaced by another runtime ledger.",
      evidence: [
        {
          kind: "file",
          ref: "docs/agent-run-harness.md",
          source_run_id: "RUN-260624-ABCD",
          source_item_id: "step-docs",
          captured_at: "2026-06-24T00:00:00.000Z",
          content_hash: "sha256:abc",
        },
      ],
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.target_system).toBe("zuun");
      expect(result.data.validity).toBe("active");
    }
  });

  it("rejects conceptual insight and skill memory candidate kinds", () => {
    expect(
      AgentRunMemoryCandidate.safeParse({
        id: "mem-insight",
        kind: "insight",
        body: "Conceptual claims belong in Zuhn extraction.",
      }).success
    ).toBe(false);
    expect(
      AgentRunMemoryCandidate.safeParse({
        id: "mem-skill",
        kind: "skill",
        body: "Skills should be authored as skill files, not runtime memories.",
      }).success
    ).toBe(false);
  });

  it("rejects promoted memory candidates without destination and evidence", () => {
    const result = AgentRunMemoryCandidate.safeParse({
      id: "mem-1",
      kind: "decision",
      body: "Promoted runtime memories need proof and a destination.",
      status: "promoted",
    });

    expect(result.success).toBe(false);
  });

  it("rejects invalidated memory candidates without an invalidation reason", () => {
    const result = AgentRunMemoryCandidate.safeParse({
      id: "mem-1",
      kind: "reference",
      body: "This runtime memory no longer applies.",
      validity: "invalidated",
    });

    expect(result.success).toBe(false);
  });
});
