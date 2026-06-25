# Zuhn Automation Routines

Zuhn has two automation layers:

1. **Repo-native automation**: scripts such as `post-ingest`, `learn`, `scout`, `gate`, `bench:check`, `resurface`, and `agent-run`.
2. **Codex app automations**: local scheduled jobs in `~/.codex/automations` that run against this repo.

The Codex app automation definitions are local developer state, not repository state. This document is the durable repo-level map of what those routines are supposed to do.

## Design Principles

Decision: keep the routines split between intake, calibration, synthesis, and audit.

Reason: Zuhn gets worse if it only accumulates sources. The system needs explicit loops for contradiction, prediction resolution, compression, and quality control.

Evidence: the repo already has ingestion, extraction, `learn`, prediction scouting, gates, benchmarks, `resurface`, and AgentRun tracing. The scheduled layer should orchestrate those existing surfaces instead of inventing a parallel knowledge path.

Rejected: one giant daily "ingest everything" routine. It would blur source quality, duplicate extraction, hide failures, and make it hard to know what changed the knowledge base.

Gate: each routine should report what it inspected, what changed, what verification ran, and any blocker. Routines that modify the knowledge base should run the relevant repo checks before claiming success.

## Daily Intake and Calibration

| Routine | Cadence | Purpose | Primary Output |
| --- | --- | --- | --- |
| Daily AI paper digest | Daily | Find one recent AI research paper worth preserving. | New source/insights plus post-ingest report. |
| Daily AI video digest | Daily | Digest up to 20 latest high-signal AI videos, anchored on AI Engineer and adjacent technical channels. | YouTube sources, extracted insights, skipped-duplicate count. |
| Daily AI x industry digest | Daily | Find one cross-domain AI application where AI changes a real field bottleneck. | Source/insights about biology, physics, math, climate, industry, etc. |
| Daily contradiction scout | Daily | Test one existing belief, principle, prediction, or recurring assumption against strong counterevidence. | Counter-source, confidence recommendation, possible tension. |
| Daily Zuhn learning brief | Daily | Summarize what the day changed in the knowledge base and in our judgment. | `knowledge-base/views/daily-learning-brief.md`. |

## Weekly Judgment Loops

| Routine | Cadence | Purpose | Primary Output |
| --- | --- | --- | --- |
| Weekly prediction resolution | Monday | Review active predictions for confirming or falsifying evidence. | Evidence report and status/confidence recommendations. |
| Weekly compression synthesis | Tuesday | Convert the week's accumulated insights into candidate principles, tensions, and worldview updates. | Candidate principles and compression notes. |
| Weekly AI failure postmortem digest | Wednesday | Learn from incidents, regressions, failed deployments, eval gaming, and security failures. | Failure mechanisms and verification/control lessons. |
| Weekly agent eval benchmark watch | Thursday | Track how the field measures agent and AI-system reliability. | Benchmark/eval design lessons for AgentRun and production gates. |
| Weekly AI platform changelog digest | Friday | Watch official platform updates for new primitives that change what can be built. | Changelog-derived workflow implications. |
| Weekly open-source AI repo scout | Saturday | Find useful open-source implementation patterns, not just trending repos. | Repo shortlist, architecture patterns, optional ingested sources. |
| Weekly Zuhn quality audit | Sunday | Protect the corpus from rot: duplicates, weak stances, fragmentation, stale claims, and health/gate issues. | Ordered audit findings and recommended repairs. |

## Output Surfaces

The routines should prefer existing Zuhn surfaces:

- `knowledge-base/sources/**`: source markdown created by `npm run ingest`.
- `knowledge-base/domains/**`: Zod-validated insights created by `npm run extract`.
- `knowledge-base/principles/**`: compressed principles created through supported workflows.
- `knowledge-base/tensions/**`: contradictions and empirical failures.
- `knowledge-base/predictions/**`: testable claims and outcomes.
- `knowledge-base/views/daily-learning-brief.md`: the latest human-readable learning brief.
- `knowledge-base/meta/**`: local runtime state, manifests, logs, and optional dated brief archives.
- `knowledge-base/runs/**`: local AgentRun traces.

`knowledge-base/meta/**` and `knowledge-base/runs/**` are intentionally local runtime state. Do not rely on them as the only durable repo-visible artifact.

## Verification Contract

Every routine should make a narrow claim and verify that claim with matching evidence.

For source ingestion:

```bash
npm run ingest <url-or-path>
npx tsx scripts/extract.ts --source <SRC-ID> --file /tmp/zuhn-extract.json --post-ingest
```

For knowledge-base health:

```bash
npm run health
npm run gate -- --audit
npm run bench:check
```

For learning/synthesis:

```bash
npm run learn
npm run compress
npm run scout
```

For run accountability:

```bash
npm run agent-run -- start --goal "..."
npm run agent-run -- verify --id <RUN-ID> --file /tmp/agent-run-gates.json
npm run agent-run -- close --id <RUN-ID> --status passed --summary "..."
```

At minimum, each routine's final report should include:

- Scope reviewed.
- Sources selected and duplicates skipped.
- Source IDs or file paths created.
- Insight, principle, prediction, or tension changes.
- Verification commands and outcomes.
- Commit hash if the routine created a commit.
- Blockers or uncertainty.

## Reading the System

The healthiest daily readout is not "how many things were ingested." It is:

1. What did we learn?
2. What got challenged?
3. What became more actionable?
4. What should not be trusted yet?
5. What should be compressed, resolved, archived, or tested next?

That is the purpose of the daily learning brief.
