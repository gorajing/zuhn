# Agent Run Harness

Decision: Build the first agent control-plane slice as a trace-first ledger, not a multiagent runtime.

Reason: Zuhn already has ingestion, extraction, gates, health checks, session capture, and red-team mechanisms. The missing layer is a durable object that records what an agent attempted, what evidence exists, what side effects happened, what verification passed, and what may become memory.

Rejected: Starting with autonomous orchestration, DAG scheduling, or parallel agents. Those should be earned by repeated ledger evidence that a simpler sequential workflow is bottlenecked.

Gate: A run can only close as `passed` when it has at least one verification gate and every gate verdict is `pass`. Passing gates require evidence. Required risks must be covered by passing gates through `required_for`, irreversible or hard-gate side effects must be explicit and committed, and promoted memory candidates must have a passing promotion gate.

See [Zuun Runtime Memory Contract](zuun-runtime-memory-contract.md) for the boundary between Zuhn conceptual knowledge and Zuun runtime behavior memory.

## Commands

```bash
npm run agent-run -- start --goal "Digest Stanford notes"
npm run agent-run -- append --id RUN-YYMMDD-XXXX --file /tmp/agent-run-patch.json
npm run agent-run -- verify --id RUN-YYMMDD-XXXX --file /tmp/agent-run-gates.json
npm run agent-run -- close --id RUN-YYMMDD-XXXX --status passed --summary "All requested checks passed."
npm run agent-run -- check
```

Agent run JSON files are stored under `knowledge-base/runs/`, and a local index is written to `knowledge-base/views/agent-runs.md`.

## Patch Shape

```json
{
  "steps": [
    {
      "id": "step-1",
      "title": "Run focused tests",
      "status": "completed",
      "evidence": [
        {
          "kind": "command",
          "ref": "npm test -- scripts/lib/agent-run.test.ts"
        }
      ]
    }
  ]
}
```

## Verification Gate Shape

```json
{
  "id": "gate-tests",
  "name": "Focused tests pass",
  "verdict": "pass",
  "checked_at": "2026-06-24T00:00:00.000Z",
  "evidence": [
    {
      "kind": "test",
      "ref": "npm test -- scripts/lib/agent-run.test.ts"
    }
  ],
  "required_for": ["risk-regression"]
}
```

## Zuun Memory Candidates

AgentRun can stage behavior memories for Zuun, but it does not write them directly. Candidates are proposed runtime memories, not Zuhn insights. Use them for operational claims that should change future agent behavior.

```json
{
  "memory_candidates": [
    {
      "id": "mem-agent-run-gate",
      "kind": "pattern",
      "body": "For non-trivial repo work, start AgentRun before editing and close only after mapped verification gates pass.",
      "target_system": "zuun",
      "status": "proposed",
      "tags": ["agent-run", "verification"],
      "invalidates_when": "AgentRun is replaced by another runtime ledger.",
      "evidence": [
        {
          "kind": "file",
          "ref": "docs/agent-run-harness.md",
          "source_run_id": "RUN-260625-ABCD",
          "source_item_id": "step-docs"
        }
      ]
    }
  ]
}
```

Promotion is explicit. If a candidate is marked `promoted`, it must include `promoted_to`, evidence, and a passing verification gate whose `required_for` includes the candidate ID.

```json
{
  "id": "gate-memory-promotion",
  "name": "Zuun memory promotion confirmed",
  "verdict": "pass",
  "checked_at": "2026-06-25T00:00:00.000Z",
  "required_for": ["mem-agent-run-gate"],
  "evidence": [
    {
      "kind": "manual_observation",
      "ref": "mcp__zuun.remember returned ENT-260625-ABCD"
    }
  ]
}
```

Do not use memory candidates for source-backed research insights, principles, predictions, tensions, or skill files. Those still belong to Zuhn extraction, learning, and skill-authoring workflows.
