import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";

import {
  AgentRunError,
  appendAgentRun,
  checkAgentRunStore,
  closeAgentRun,
  listAgentRuns,
  readAgentRun,
  startAgentRun,
} from "./agent-run";

const tempRoots: string[] = [];

function tempStore() {
  const root = mkdtempSync(join(tmpdir(), "zuhn-agent-run-"));
  tempRoots.push(root);
  return {
    root,
    options: {
      runsDir: join(root, "runs"),
      viewsDir: join(root, "views"),
      now: () => new Date("2026-06-24T00:00:00.000Z"),
    },
  };
}

afterEach(() => {
  while (tempRoots.length > 0) {
    const root = tempRoots.pop();
    if (root) rmSync(root, { recursive: true, force: true });
  }
});

describe("AgentRun ledger", () => {
  it("starts, writes, reads, and indexes a run", () => {
    const { root, options } = tempStore();
    const run = startAgentRun(
      {
        goal: "Build a trace-first ledger",
        scope: "Zuhn",
        plan: [{ id: "plan-1", title: "Create schema", status: "pending" }],
      },
      options
    );

    expect(run.id).toMatch(/^RUN-\d{6}-[0-9A-F]{4}$/);
    expect(readAgentRun(run.id, options).goal).toBe("Build a trace-first ledger");
    expect(listAgentRuns(options)).toHaveLength(1);

    const index = readFileSync(join(root, "views", "agent-runs.md"), "utf-8");
    expect(index).toContain(run.id);
    expect(index).toContain("Build a trace-first ledger");
  });

  it("appends steps and verification gates", () => {
    const { options } = tempStore();
    const run = startAgentRun({ goal: "Verify append behavior", plan: [] }, options);

    const next = appendAgentRun(
      run,
      {
        steps: [
          {
            id: "step-tests",
            title: "Run focused tests",
            status: "completed",
            evidence: [{ kind: "test", ref: "npm test -- scripts/lib/agent-run.test.ts" }],
          },
        ],
        verification_gates: [
          {
            id: "gate-tests",
            name: "Focused tests pass",
            verdict: "pass",
            checked_at: "2026-06-24T00:00:00.000Z",
            evidence: [{ kind: "test", ref: "npm test -- scripts/lib/agent-run.test.ts" }],
          },
        ],
      },
      options
    );

    expect(next.steps).toHaveLength(1);
    expect(next.verification_gates).toHaveLength(1);
    expect(readAgentRun(run.id, options).verification_gates[0].verdict).toBe("pass");
  });

  it("rejects duplicate item ids across appended sections", () => {
    const { options } = tempStore();
    const run = startAgentRun({ goal: "Reject duplicate ids", plan: [] }, options);

    expect(() =>
      appendAgentRun(
        run,
        {
          steps: [{ id: "same", title: "Step", status: "completed", evidence: [] }],
          artifacts: [{ id: "same", kind: "file", ref: "x", description: "duplicate" }],
        },
        options
      )
    ).toThrow(AgentRunError);
  });

  it("refuses to close as passed without verification", () => {
    const { options } = tempStore();
    const run = startAgentRun({ goal: "Cannot fake pass", plan: [] }, options);

    expect(() => closeAgentRun(run, "passed", "Looks good", options)).toThrow(
      "Cannot close as passed without at least one verification gate"
    );
  });

  it("refuses to close as passed with unresolved gates", () => {
    const { options } = tempStore();
    const run = startAgentRun({ goal: "Respect gate verdicts", plan: [] }, options);
    const withGate = appendAgentRun(
      run,
      {
        verification_gates: [
          {
            id: "gate-health",
            name: "Health",
            verdict: "insufficient_evidence",
            checked_at: "2026-06-24T00:00:00.000Z",
            evidence: [],
          },
        ],
      },
      options
    );

    expect(() => closeAgentRun(withGate, "passed", "Nope", options)).toThrow(
      "Cannot close as passed with unresolved verification gates"
    );
  });

  it("refuses to close as passed when required risks lack passing gates", () => {
    const { options } = tempStore();
    const run = startAgentRun({ goal: "Respect required risk gates", plan: [] }, options);
    const withRiskAndGate = appendAgentRun(
      run,
      {
        risk_assessments: [
          {
            id: "risk-runtime-memory",
            action: "Promote runtime memory",
            risk: "soft_gate",
            reversible: true,
            gate_required: true,
            rationale: "Runtime memories change future agent behavior.",
          },
        ],
        verification_gates: [
          {
            id: "gate-tests",
            name: "Tests",
            verdict: "pass",
            checked_at: "2026-06-24T00:00:00.000Z",
            evidence: [{ kind: "test", ref: "npm test" }],
          },
        ],
      },
      options
    );

    expect(() => closeAgentRun(withRiskAndGate, "passed", "Nope", options)).toThrow(
      "Cannot close as passed with required risks missing passing gates"
    );
  });

  it("closes as passed when required risks are satisfied by passing gates", () => {
    const { options } = tempStore();
    const run = startAgentRun({ goal: "Map gates to risks", plan: [] }, options);
    const withRiskAndGate = appendAgentRun(
      run,
      {
        risk_assessments: [
          {
            id: "risk-runtime-memory",
            action: "Promote runtime memory",
            risk: "soft_gate",
            reversible: true,
            gate_required: true,
            rationale: "Runtime memories change future agent behavior.",
          },
        ],
        verification_gates: [
          {
            id: "gate-tests",
            name: "Tests",
            verdict: "pass",
            checked_at: "2026-06-24T00:00:00.000Z",
            required_for: ["risk-runtime-memory"],
            evidence: [{ kind: "test", ref: "npm test" }],
          },
        ],
      },
      options
    );

    expect(closeAgentRun(withRiskAndGate, "passed", "Mapped gate passed", options).status).toBe(
      "passed"
    );
  });

  it("refuses to close as passed with uncommitted hard-gate side effects", () => {
    const { options } = tempStore();
    const run = startAgentRun({ goal: "Respect hard side effects", plan: [] }, options);
    const withGateAndEffect = appendAgentRun(
      run,
      {
        side_effects: [
          {
            id: "effect-prod-write",
            action: "Write durable runtime memory",
            risk: "hard_gate",
            committed: false,
            evidence: [{ kind: "manual_observation", ref: "Promotion not confirmed" }],
          },
        ],
        verification_gates: [
          {
            id: "gate-tests",
            name: "Tests",
            verdict: "pass",
            checked_at: "2026-06-24T00:00:00.000Z",
            evidence: [{ kind: "test", ref: "npm test" }],
          },
        ],
      },
      options
    );

    expect(() => closeAgentRun(withGateAndEffect, "passed", "Nope", options)).toThrow(
      "Cannot close as passed with uncommitted hard-gate side effects"
    );
  });

  it("refuses to close as passed with promoted memory candidates missing passing gates", () => {
    const { options } = tempStore();
    const run = startAgentRun({ goal: "Gate promoted memory", plan: [] }, options);
    const withMemoryAndGate = appendAgentRun(
      run,
      {
        memory_candidates: [
          {
            id: "mem-runtime-pattern",
            kind: "pattern",
            body: "Runtime memory must be promoted only when evidence exists.",
            status: "promoted",
            promoted_to: "ENT-260625-ABCD",
            evidence: [{ kind: "manual_observation", ref: "Zuun remember returned an id" }],
          },
        ],
        verification_gates: [
          {
            id: "gate-tests",
            name: "Tests",
            verdict: "pass",
            checked_at: "2026-06-24T00:00:00.000Z",
            evidence: [{ kind: "test", ref: "npm test" }],
          },
        ],
      },
      options
    );

    expect(() => closeAgentRun(withMemoryAndGate, "passed", "Nope", options)).toThrow(
      "Cannot close as passed with promoted memory candidates missing passing gates"
    );
  });

  it("closes as passed when promoted memory candidates are covered by passing gates", () => {
    const { options } = tempStore();
    const run = startAgentRun({ goal: "Gate promoted memory", plan: [] }, options);
    const withMemoryAndGate = appendAgentRun(
      run,
      {
        memory_candidates: [
          {
            id: "mem-runtime-pattern",
            kind: "pattern",
            body: "Runtime memory must be promoted only when evidence exists.",
            status: "promoted",
            promoted_to: "ENT-260625-ABCD",
            evidence: [{ kind: "manual_observation", ref: "Zuun remember returned an id" }],
          },
        ],
        verification_gates: [
          {
            id: "gate-promotion",
            name: "Promotion is confirmed",
            verdict: "pass",
            checked_at: "2026-06-24T00:00:00.000Z",
            required_for: ["mem-runtime-pattern"],
            evidence: [{ kind: "manual_observation", ref: "Zuun remember returned ENT-260625-ABCD" }],
          },
        ],
      },
      options
    );

    expect(closeAgentRun(withMemoryAndGate, "passed", "Promotion verified", options).status).toBe(
      "passed"
    );
  });

  it("refuses appends after a run is closed", () => {
    const { options } = tempStore();
    const run = startAgentRun({ goal: "Do not mutate closed runs", plan: [] }, options);
    const withGate = appendAgentRun(
      run,
      {
        verification_gates: [
          {
            id: "gate-tests",
            name: "Tests",
            verdict: "pass",
            checked_at: "2026-06-24T00:00:00.000Z",
            evidence: [{ kind: "test", ref: "npm test" }],
          },
        ],
      },
      options
    );
    const closed = closeAgentRun(withGate, "passed", "Done", options);

    expect(() =>
      appendAgentRun(
        closed,
        {
          steps: [{ id: "late-step", title: "Too late", status: "completed", evidence: [] }],
        },
        options
      )
    ).toThrow("Cannot append to non-active AgentRun");
  });

  it("closes as passed when gates pass", () => {
    const { options } = tempStore();
    const run = startAgentRun({ goal: "Pass with evidence", plan: [] }, options);
    const withGate = appendAgentRun(
      run,
      {
        verification_gates: [
          {
            id: "gate-tests",
            name: "Tests",
            verdict: "pass",
            checked_at: "2026-06-24T00:00:00.000Z",
            evidence: [{ kind: "test", ref: "npm test -- scripts/lib/agent-run.test.ts" }],
          },
        ],
      },
      options
    );

    const closed = closeAgentRun(withGate, "passed", "Focused tests passed", options);
    expect(closed.status).toBe("passed");
    expect(closed.final_status?.summary).toBe("Focused tests passed");
  });

  it("checks the local AgentRun store", () => {
    const { options } = tempStore();
    const run = startAgentRun({ goal: "Check local run store", plan: [] }, options);
    const withGate = appendAgentRun(
      run,
      {
        verification_gates: [
          {
            id: "gate-tests",
            name: "Tests",
            verdict: "pass",
            checked_at: "2026-06-24T00:00:00.000Z",
            evidence: [{ kind: "test", ref: "npm test" }],
          },
        ],
      },
      options
    );
    closeAgentRun(withGate, "passed", "Focused tests passed", options);

    expect(checkAgentRunStore(options)).toEqual({ checked: 1, errors: [] });
  });
});
