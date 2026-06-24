import { describe, expect, it } from "vitest";
import { AgentRun, AgentRunAppend, AgentRunVerificationGate } from "./agent-run";

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
});
