# Zuun Runtime Memory Contract

Decision: Treat Zuun as runtime behavior memory, not as a second Zuhn knowledge base.

Reason: Zuhn already owns conceptual learning: sources, extracted insights, principles, predictions, decisions, tensions, search, and compression. Zuun should change how future agents behave during work: what to remember before starting, what risks to watch, what gates are required, and what durable lessons are worth preserving after verification.

Evidence: AgentRun already records steps, risks, side effects, verification gates, and memory candidates. Zuun already exposes `context_for(task)` and `remember(...)` as the project-scoped runtime memory surface.

Rejected: Building a second ontology, vector store, graph, source-ingestion path, confidence model, or autonomous passive memory sink for Zuun.

Gate: A future runtime-memory change must preserve the rule that verification remains the stop condition. A run cannot close as `passed` with ceremonial gates, unresolved required risks, uncommitted hard-gate effects, or promoted memory candidates that lack a passing promotion gate.

## Boundary

Zuhn stores beliefs about the world:

```text
source -> insight -> principle -> prediction / decision / tension
```

Zuun stores behavior memory about agent execution:

```text
task/run -> evidence -> behavior lesson -> future retrieval
```

This means:

- Research findings belong in Zuhn.
- Generalizable conceptual claims belong in Zuhn.
- Source-backed insights belong in Zuhn.
- Operational rules that should change future agent behavior belong in Zuun.
- AgentRun is the staging ledger between one run and durable Zuun memory.

## Runtime Loop

```text
1. Task starts.
2. Agent asks Zuun for context relevant to the task.
3. Zuun returns operational memories, risks, stale assumptions, and expected gates.
4. Agent starts AgentRun for non-trivial work.
5. Agent records steps, evidence, risks, side effects, gates, and memory candidates.
6. Verification gates decide whether the run can close as passed.
7. Only high-signal memory candidates are promoted to Zuun with provenance.
```

## Memory Candidate Contract

AgentRun `memory_candidates` are proposed Zuun memories. They are not conceptual insights and do not write directly to the knowledge base.

Allowed candidate kinds:

- `decision`: a choice with reasoning that should affect future work.
- `observation`: a verified thing noticed about a project, workflow, or environment.
- `pattern`: a reusable operating pattern.
- `commitment`: a promise or constraint future agents should honor.
- `reference`: a durable pointer to context future agents will need.

Disallowed candidate kinds:

- `insight`: use Zuhn extraction.
- `principle`: use Zuhn compression.
- `prediction`: use Zuhn prediction workflows.
- `tension`: use Zuhn tension workflows.
- `skill`: write or update a skill file.
- `source`: use Zuhn ingestion.

## Promotion Rules

A candidate may be promoted only when all of this is true:

- The body is one self-contained operational claim.
- It has evidence.
- It has a destination ID such as a Zuun entry ID.
- A passing verification gate references the candidate ID in `required_for`.
- It includes enough provenance for a future agent to judge staleness.

Promotion is explicit. Do not auto-promote every run summary or final answer.

## Invalidation Rules

Runtime memory should be easy to distrust when the world changes. Use candidate fields such as:

- `invalidates_when`: condition that makes the memory stale.
- `stale_after`: known date after which the memory should be reviewed.
- `validity`: `active`, `stale`, or `invalidated`.
- `invalidation_reason`: required when validity is `invalidated`.

Examples:

```text
Good:
For non-trivial work in /Users/jinchoi/Code/Zuhn, start AgentRun before editing and close only after tests, health, contracts, and git status are checked.

Bad:
Zuhn is about verification.
```

```text
Good:
Do not use AgentRun memory candidates for paper/video insights; route those through Zuhn extraction so they get source attribution and learning mechanisms.

Bad:
Remember this paper was interesting.
```

## Non-Goals

Do not build these until AgentRun traces prove the current loop is insufficient:

- Zuun embeddings.
- Zuun graph relationships.
- Zuun confidence propagation.
- Zuun ingestion daemon.
- New MCP tools for AgentRun or Zuun promotion.
- Hosted/team memory, permissions, or sync.
- A dashboard before the trace shape is validated through dogfooding.

## Verification Contract

For this architecture surface, minimum verification is:

```bash
npm test -- scripts/schemas/agent-run.test.ts scripts/lib/agent-run.test.ts
npm run agent-run -- check
npm run verify-contracts
npm run health
git diff --check
git status --short --ignored knowledge-base/runs knowledge-base/views/agent-runs.md knowledge-base/meta benchmarks/snapshot.json
```

Run broader tests when changing shared schema behavior, CLI behavior, MCP surfaces, or public docs.
