# Agent Run Harness

Decision: Build the first agent control-plane slice as a trace-first ledger, not a multiagent runtime.

Reason: Zuhn already has ingestion, extraction, gates, health checks, session capture, and red-team mechanisms. The missing layer is a durable object that records what an agent attempted, what evidence exists, what side effects happened, what verification passed, and what may become memory.

Rejected: Starting with autonomous orchestration, DAG scheduling, or parallel agents. Those should be earned by repeated ledger evidence that a simpler sequential workflow is bottlenecked.

Gate: A run can only close as `passed` when it has at least one verification gate and every gate verdict is `pass`. Irreversible or hard-gate side effects must be explicit in the run ledger.

## Commands

```bash
npm run agent-run -- start --goal "Digest Stanford notes"
npm run agent-run -- append --id RUN-YYMMDD-XXXX --file /tmp/agent-run-patch.json
npm run agent-run -- verify --id RUN-YYMMDD-XXXX --file /tmp/agent-run-gates.json
npm run agent-run -- close --id RUN-YYMMDD-XXXX --status passed --summary "All requested checks passed."
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
  ]
}
```
