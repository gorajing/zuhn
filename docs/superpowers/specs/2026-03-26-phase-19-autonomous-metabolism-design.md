# Phase 19: The Autonomous Knowledge Metabolism

**Author:** Jin Choi + Claude
**Date:** 2026-03-26
**Status:** Green-lit (Titanium Pipeline revision)
**Depends on:** Phase 16 (MCP Server), Phase 17 (Benchmarks), Phase 18 (Skills)

---

## Design Principle

**Automate everything except judgment.** The system scouts, processes, verifies, challenges, and surfaces. The human approves ingestion, resolves predictions, and makes final calls on tensions. This boundary is enforced architecturally — there is no `--auto-resolve` flag and no way for algorithmic discovery to bypass human approval.

**Corollary: Algorithmic discovery = Bounty. Explicit human action = Inbox.** If a machine found it (RSS, YouTube watcher, gap scanner), it goes to bounties for human approval. If a human sent it (folder drop, HTTP webhook, voice memo), it goes to the inbox for autonomous processing.

**Corollary: Zod validates structure; LLMs validate logic.** Zod ensures JSON schema compliance. Only an Opus-level agent can determine whether a stance is defensible, whether topic mapping is correct, or whether an insight genuinely connects to an existing principle. Both gates are required.

---

## Architecture Overview

```
                    ┌─────────────────────┐
                    │    Entry Points      │
                    │  Folder watcher      │
                    │  HTTP webhook        │
                    │  (Apple Shortcuts,   │
                    │   Zapier, etc.)      │
                    └────────┬────────────┘
                             │
                             ▼
                    ┌─────────────────────┐
                    │   Inbox Queue       │
                    │   (queue.json)      │
                    │   State machine     │
                    └────────┬────────────┘
                             │
                    ┌────────┴────────────┐
                    │  processing_mode?   │
                    ├────────┬────────────┤
                    │ "fast" │  "heavy"   │
                    ▼        ▼            │
             ┌──────────┐  ┌─────────────┴──────────┐
             │ 1 Agent  │  │  2 Agents (independent) │
             │ + Zod    │  ├─────────────────────────┤
             └────┬─────┘  │      Merge Agent        │
                  │        ├─────────────────────────┤
                  │        │  Verification Agent      │
                  │        ├─────────────────────────┤
                  │        │  Deep Read Agent         │
                  │        │  (tensions + connections) │
                  │        └────────────┬────────────┘
                  │                     │
                  └────────┬────────────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
              ▼            ▼            ▼
         ┌────────┐  ┌─────────┐  ┌──────────┐
         │Committed│  │ Review  │  │  Failed  │
         │ to KB   │  │ Queue   │  │  (retry) │
         └────┬───┘  └────┬────┘  └──────────┘
              │            │
              ▼            ▼
    ┌──────────────────────────────────┐
    │     Post-Processing Batch        │
    │  embed → learn → views → git     │
    └──────────────────────────────────┘
                │
                ▼
    ┌──────────────────────────────────┐
    │      Morning Briefing            │
    │  + Inbox results                 │
    │  + Prediction evidence           │
    │  + Red Team bounties             │
    │  + Gap fill suggestions          │
    │  + Review queue items            │
    │  + Deep read findings            │
    │                                  │
    │  HUMAN JUDGMENT HAPPENS HERE     │
    └──────────────────────────────────┘
```

---

## Pillar 1: The Omnivorous Inbox (Titanium Pipeline)

### Purpose

Sources enter Zuhn through two programmatic interfaces — a local folder watcher and a local HTTP server. A 3-layer daemon manages a rigorous state machine, spawning headless Claude Code sub-agents for extraction, verification, and deep analysis. External tools (Apple Shortcuts, Zapier, IFTTT) handle routing from Telegram, email, browsers, etc. Zuhn's codebase stays 100% focused on knowledge processing.

### Entry Points

```
Programmatic (built into Zuhn):
├── Folder watcher       ← Drop files or URL .txt files into inbox/
└── HTTP webhook server  ← POST /inbox with { url: "..." } or file upload

External (NOT built into Zuhn — user configures):
├── Apple Shortcut       ← Share Sheet → POST to localhost webhook
├── Telegram → Zapier    ← Message → Zapier → POST to webhook
├── Email → Zapier       ← Forward → Zapier → POST to webhook
├── Browser bookmarklet  ← javascript:fetch("http://localhost:PORT/inbox",...)
└── Any HTTP client      ← curl -X POST localhost:PORT/inbox -d '{"url":"..."}'
```

### Queue Schema (State Machine)

`knowledge-base/inbox/queue.json`:

```json
{
  "items": [
    {
      "id": "INB-260326-A1B2",
      "url": "https://youtu.be/abc123",
      "type": "youtube",
      "source_channel": "webhook",
      "processing_mode": "heavy",
      "priority_score": 8,
      "queued_at": "2026-03-26T08:00:00Z",
      "status": "pending",
      "file_path": null,
      "source_id": null,
      "attempts": 0,
      "last_error": null,
      "word_count": null,
      "insights_extracted": 0,
      "agent_a_file": null,
      "agent_b_file": null,
      "merged_file": null,
      "deep_read_findings": null
    }
  ]
}
```

### State Machine

```
pending
  → pre_filtering         (duplicate/validation check)
  → ingesting             (npm run ingest — mechanical)
  → extracting_a          (Opus Agent A spawned)       [heavy only]
  → extracting_b          (Opus Agent B spawned)       [heavy only]
  → extracting            (single agent)               [fast only]
  → merging               (merge agent combines A+B)   [heavy only]
  → verifying             (verification agent checks)  [heavy only]
  → deep_reading          (deep read agent)            [heavy + high-priority only]
  → committed             (insights in KB)
  → review                (quality gate failed — human needed)
  → failed                (error after max retries)
  → filtered              (pre-filter rejected)

Transitions are atomic — queue.json is updated after each state change.
On crash recovery, the cron layer reads current state and resumes.
```

### Processing Mode Selection

```
"heavy" mode — full Titanium pipeline:
    Triggered when: word_count > 3000 OR source is audio/PDF OR priority_score > 5
    Pipeline: 2 extraction agents → merge → verify → deep read (if priority > 8)
    Agents: up to 5 per source (extraction A, extraction B, merge, verify, deep read)

"fast" mode — single pass:
    Triggered when: word_count ≤ 3000 AND priority_score ≤ 5 AND text source
    Pipeline: 1 extraction agent → Zod validation → commit
    Agents: 1 per source
```

### Titanium Processing Pipeline (Heavy Mode)

```
Step 1: Pre-filter (scripts/inbox-prefilter.ts)
    ✓ Duplicate URL check against existing sources
    ✓ Basic URL validation
    → Reject: status → "filtered" with reason
    → Pass: status → "ingesting"

Step 2: Ingest (npx tsx scripts/ingest.ts — mechanical)
    → Creates source .md with transcript/content
    → Reads word_count → sets processing_mode
    → Status → "extracting_a"

Step 3a: Extraction Agent A
    claude --print --model opus --max-turns 25 \
      -p "Read SRC-XXXXX transcript at [path]. Extract insights
          following skills/extract/SKILL.md. Check existing topics
          with ls knowledge-base/domains/*/. Write JSON to
          /tmp/zuhn-extract-A-SRC-XXXXX.json. Do NOT run extract.ts."

    → Status → "extracting_b"
    → Agent A output saved to queue item agent_a_file

Step 3b: Extraction Agent B (independent, no knowledge of A's output)
    claude --print --model opus --max-turns 25 \
      -p "Read SRC-XXXXX transcript at [path]. Extract insights
          following skills/extract/SKILL.md. Check existing topics.
          Write JSON to /tmp/zuhn-extract-B-SRC-XXXXX.json.
          Focus on non-obvious insights — counter-intuitive claims,
          tensions with conventional wisdom, and cross-domain
          applications. Do NOT run extract.ts."

    → Status → "merging"
    → Agent B output saved to queue item agent_b_file
    → Note: Agent B gets a slightly different prompt emphasizing
      non-obvious insights. This maximizes diversity in the union.

Step 4: Merge Agent
    claude --print --model opus --max-turns 15 \
      -p "You have two independent extraction results for SRC-XXXXX.
          Agent A: [path to A JSON]
          Agent B: [path to B JSON]

          Merge them:
          1. Insights both agents found (similar title/stance): keep the
             better-written version, mark confidence 'high'
          2. Insights only one agent found: keep, mark confidence 'medium'
          3. Remove exact duplicates
          4. Ensure all insights have defensible stances
          5. Write merged result to /tmp/zuhn-extract-merged-SRC-XXXXX.json

          Output the merged JSON only."

    → Status → "verifying"
    → Merged file saved to queue item merged_file

Step 5: Verification Agent
    claude --print --model opus --max-turns 15 \
      -p "You are a quality verifier for the Zuhn knowledge base.
          Review the extraction at [merged JSON path] for SRC-XXXXX.

          Check EACH insight:
          ✓ Stance is a directional claim (could be true or false),
            NOT a description or summary
          ✓ Topic maps to an existing topic in the ontology
            (run ls knowledge-base/domains/*/)
          ✓ Confidence level is calibrated (not all 'high')
          ✓ Tags are meaningful and consistent
          ✓ one_line and standard resolutions are substantive

          For each issue found:
          - Fix it in the JSON if the fix is clear
          - Flag it with a comment if judgment is needed

          Write the verified JSON to
          /tmp/zuhn-extract-verified-SRC-XXXXX.json

          Report: N insights passed, M fixed, K flagged."

    → If all pass or fixable: run extract.ts with verified JSON
      → Status → "deep_reading" (if priority > 8) or "committed"
    → If K > 0 flagged: status → "review", move to inbox/review/

Step 6: Deep Read Agent (priority > 8 sources only)
    claude --print --model opus --max-turns 20 \
      -p "You are a deep reader for the Zuhn knowledge base.
          Source: SRC-XXXXX was just extracted with these insights:
          [list of newly created insight IDs and titles]

          Read each new insight. Then search the existing knowledge
          base for connections:

          1. TENSIONS: Do any new insights contradict existing
             principles? (search via: npm run search '[key phrase]')
          2. SUPPORTING EVIDENCE: Do any new insights strengthen
             existing principles with fresh evidence?
          3. CROSS-DOMAIN: Do any insights from [source domain]
             have unexpected applications in other domains?

          Write findings to /tmp/zuhn-deep-read-SRC-XXXXX.json:
          {
            'potential_tensions': [...],
            'supporting_evidence': [...],
            'cross_domain_connections': [...]
          }

          Be selective — only flag findings where the connection
          is genuinely surprising or high-value."

    → Findings saved to meta/inbox-deep-reads.json
    → Status → "committed"
    → Deep read surfaces in morning briefing
```

### Fast Mode Pipeline

```
Step 1: Pre-filter (same as heavy)
Step 2: Ingest (same as heavy)
Step 3: Single Extraction Agent
    claude --print --model opus --max-turns 20 \
      -p "Read SRC-XXXXX. Extract insights per skills/extract/SKILL.md.
          Write JSON to /tmp/zuhn-extract-SRC-XXXXX.json.
          Run: npx tsx scripts/extract.ts --source SRC-XXXXX
          --file /tmp/zuhn-extract-SRC-XXXXX.json"

    → If exit 0: status → "committed"
    → If Zod fails: retry once → if fails again: status → "review"
```

### Concurrency Control & Backoff

```
Global semaphore: MAX_CONCURRENT_AGENTS = 3 (configurable)

The daemon maintains an agent counter:
    - Before spawning: check counter < MAX_CONCURRENT_AGENTS
    - If at limit: item stays in current state, daemon moves to next queue item
    - On agent completion: decrement counter, check queue for waiting items

Rate limit handling:
    - If sub-agent exits with code != 0 AND stderr contains "429" or "rate":
      → Pause ALL spawning for backoff_seconds (starts at 60, doubles each time)
      → Max backoff: 15 minutes
      → Reset backoff to 60s after 3 consecutive successes
    - If sub-agent exits with code != 0 for other reasons:
      → Increment item attempts
      → If attempts < 3: re-queue to current state
      → If attempts >= 3: status → "failed"

Queue processing order:
    1. Items in mid-pipeline states (resume interrupted processing first)
    2. Items in "pending" sorted by priority_score desc
    3. Items in "failed" with attempts < 3 (retry with backoff)
```

### Three-Layer Reliability

```
Layer 1: File watcher (chokidar on inbox/)
    → Instant detection of new files and URL additions
    → Spawns processing immediately (respecting concurrency limit)
    → Writes heartbeat to meta/daemon-status.json every 60s

Layer 2: Cron sweep (every 30 minutes)
    → Scans queue for items stuck in any state > 15 minutes
    → Retries items in "failed" with attempts < 3
    → Runs post-processing batch (embed + learn + views)
    → Garbage-collects inbox/processed/ older than 7 days

Layer 3: SessionStart hook
    → On wake: reads meta/inbox-log.json
    → Surfaces overnight results in morning briefing:
      "Inbox processed 6 sources overnight:
       - 4 committed (heavy mode: 52 insights, 3 deep read findings)
       - 1 committed (fast mode: 4 insights)
       - 1 in review (verification flagged 2 weak stances)
       Deep read found: potential tension between new Bronze Age insight
       and existing principle about polycausal system collapse."
    → On stop: checks conversation for URLs not yet ingested
```

### HTTP Server

`scripts/inbox-server.ts`:

```
Local HTTP server (http.createServer, no framework):

POST /inbox
    Body: { "url": "https://...", "mode": "heavy" | "fast" | "auto" }
    OR multipart file upload (audio, PDF → always heavy)
    → Validates input
    → Appends to queue.json (mode "auto" = daemon decides by word count)
    → Returns { queued: true, id: "INB-XXXXX", mode: "heavy" }

GET /status
    → Returns queue depth, processing states, daemon heartbeat

GET /health
    → Returns { ok: true, daemon_pid: 1234, queue_depth: 3,
                agents_active: 2, agents_max: 3 }

Binds to localhost only (127.0.0.1).
Port: 7777 (configurable via ZUHN_INBOX_PORT env var).
```

### Directory Structure

```
knowledge-base/inbox/
├── queue.json              ← Unified intake queue (state machine)
├── processed/              ← Completed source files (7-day retention)
├── review/                 ← Items failing verification (human needed)
└── failed/                 ← Errored items with logs (retry eligible)
```

### Feedback Loop

```
scripts/inbox-feedback.ts (runs monthly):
    → For each autonomously-extracted insight, check:
      - Referenced in a decision? (+weight)
      - Compressed into a principle? (+weight)
      - Cited in tension resolution? (+weight)
      - Archived as low-value? (-weight)
      - Never accessed in 90 days? (flag)
    → Compute usage rate per: source channel, source author, domain
    → Update priority scoring weights
    → Report in morning briefing
```

---

## Pillar 2: The Adversarial Red Team

### Purpose

Prevent echo chambers by actively seeking the strongest counterarguments to your highest-confidence beliefs. The Red Team never auto-ingests — it presents bounties for human judgment.

### Script: `scripts/red-team.ts`

### Process

```
Step 1: Target Selection
    → Load all principles with confidence ≥ high
    → Exclude principles red-teamed in last 30 days
    → Rank by: staleness (days since last challenge) × confidence level
    → Select top 5 principles for this cycle

Step 2: Source Diversity Audit
    For each targeted principle:
    → Analyze supporting_insights[].sources
    → Map: authors, publications, worldviews represented
    → Identify blind spots:
      - Geographic: mostly US? Missing EU/Asia/Global South?
      - Ideological: mostly VC optimists? Missing labor, regulators?
      - Temporal: all from same 3-month window?
    → Generate diversity gap report per principle

Step 3: Counter-Argument Search (one Opus sub-agent per principle)
    claude --print --model opus -p "You are an adversarial researcher.
    Target principle: '[title and summary]'.

    Find 3-5 strongest, most credible sources that CONTRADICT this
    principle. Prefer:
    - Peer-reviewed research over opinion
    - Named experts with track records over anonymous commentary
    - Empirical data over theoretical arguments
    - Perspectives from domains this principle hasn't been tested in

    Do NOT search 'why [principle] is wrong' (leading query).
    Search the TOPIC and look for expert disagreement.

    For each source: URL, author+credentials, counter-argument
    in 2-3 sentences, credibility assessment, threat level
    (core / assumption / boundary conditions).

    If no credible counter-arguments exist, say so explicitly.
    Rate your own confidence in each counter-argument."

Step 4: Bounty Generation
    → Write to meta/bounties.json:
    {
      "id": "BOUNTY-260326-A1B2",
      "type": "red-team",
      "target_principle": "PRI-260324-XXXX",
      "principle_title": "...",
      "counter_arguments": [
        {
          "url": "https://...",
          "author": "...",
          "credibility": "...",
          "threat_level": "core | assumption | boundary",
          "summary": "...",
          "agent_confidence": "high | medium | low"
        }
      ],
      "diversity_gaps": ["Missing EU regulatory perspective"],
      "created_at": "2026-03-26",
      "status": "pending"
    }

Step 5: Surface in flags.md and morning briefing
    ## RED TEAM BOUNTIES
    - PRI-XXXX "Scaling laws hold..."
      CHALLENGED BY: 3 sources. Strongest: [Author] argues [X]. [URL]
      Diversity gap: Missing EU regulatory perspective.
      ACTION: Run /ingest on these URLs to stress-test this principle.
```

### Schedule & Escalation

```
Full cycle: weekly (configurable)
Targets: 5 principles per cycle
Each principle: one dedicated search agent

Escalation:
    - Unresolved 30 days: re-surfaces with higher urgency
    - 3+ unresolved bounties on one principle: flagged "belief at risk"
    - Dismissed bounties: must provide reason (logged for metacognition)
    - If agent CANNOT find counter-arguments: principle marked "robust"
      in meta/red-team-history.json
```

---

## Pillar 3: Evidence Scouting

### Purpose

Monitor the world for evidence that confirms or falsifies predictions, and suggest sources to fill knowledge gaps. Never auto-resolves — always presents evidence for human judgment.

### Script: `scripts/scout-predictions.ts` (daily)

```
Step 1: Load active PRED- files
    → Priority: predictions within 6 months of deadline
    → Also: predictions involving public companies/products/policies

Step 2: Evidence Search (one Opus sub-agent per prediction)
    claude --print --model opus -p "Evidence scout for prediction:
    '[claim]' deadline [date].

    Search for recent news, research, earnings, product launches,
    policy changes providing evidence FOR or AGAINST.

    For each: URL, date, direction (SUPPORTS/CONTRADICTS),
    strength (strong/moderate/weak), key data point.

    If no evidence, say so."

Step 3: Write to meta/prediction-evidence.json
    {
      "prediction_id": "PRED-260325-XXXX",
      "evidence": [...],
      "net_signal": "leaning_confirmed | leaning_falsified | mixed | no_evidence",
      "scout_confidence": "high | medium | low"
    }

Step 4: Morning briefing
    "PREDICTION WATCH:
     - PRED-A1B2 (due 2027-12): Strong evidence SUPPORTS. Ready to resolve?
     - PRED-C3D4 (due 2028-12): Moderate evidence. Monitoring."
```

### Script: `scripts/scout-gaps.ts` (weekly)

```
Step 1: Load GAP flags, rank by (dense - sparse) × appearances
    → Select top 10 sparsest topics

Step 2: Source Discovery (one Opus sub-agent per gap)
    claude --print --model opus -p "Zuhn has a gap in [topic]
    with [N] insights, related topics have [M].

    Find 5 high-quality sources. Prefer long-form, named experts,
    contrarian perspectives, last 2 years.

    For each: URL, title, author, quality rationale, estimated yield."

Step 3: Write to meta/bounties.json (type: "gap-fill")

Step 4: Morning briefing
    "GAP BOUNTIES:
     - startups/co-founders: 5 sources found. Top pick: [URL]
       Estimated 8 insights. Run: npm run ingest [URL]"
```

### Algorithmic Discovery Rule

RSS feeds and YouTube channel watchers are NOT inbox items. They route to `scout-gaps.ts` as supplementary source suggestions in bounties. Human approves before any ingestion.

---

## Pillar 4: The Enhanced Morning Briefing

### Purpose

Single interface where all autonomous activity surfaces for human judgment.

### Enhanced `wake.ts` Output

```
╔══════════════════════════════════════╗
║         Zuhn — Morning Briefing      ║
╚══════════════════════════════════════╝

## Overnight Inbox
- 6 sources processed:
  - 3 heavy mode (41 insights, ensemble-verified)
  - 2 fast mode (8 insights)
  - 1 in review (verification flagged 2 weak stances)
- Deep read findings:
  - Potential tension: new Bronze Age collapse insight vs PRI-XXXX
  - Cross-domain: new aging science insight supports PRI-YYYY

## Prediction Watch
- PRED-A1B2 (due 2027-12): Strong new evidence SUPPORTS. Ready to resolve?
- PRED-C3D4 (due 2028-12): Moderate evidence. Monitoring.
- 3 predictions: no new evidence.

## Red Team Challenges
- PRI-XXXX "Scaling laws hold..." — 2 credible counter-arguments
  Strongest: [Author] argues [X]. Ingest to stress-test?
  Diversity gap: missing EU regulatory perspective
- PRI-YYYY "Trust with structural verification..." — ROBUST.
  No credible challenges found.

## Gap Bounties
- startups/co-founders: 5 high-quality sources. Top: [URL]
- ai-development/agent-patterns: 5 sources. Top: [URL]

## Knowledge Base State
- Insights: 1,515 | Principles: 125 | Predictions: 29 active
- COMPRESS: 0 | Health: PASSED | Daemon: running | Queue: 0

## Your Judgment Needed
1. [ ] Review 1 source in inbox/review/ (2 weak stances)
2. [ ] Resolve PRED-A1B2? (strong evidence)
3. [ ] Ingest red team counter-arguments for PRI-XXXX? (2 URLs)
4. [ ] Approve gap bounties for co-founders? (5 URLs)
5. [ ] Review deep read tension finding?
```

---

## Pillar 5: Write-Enabled MCP Server

### Purpose

Any agent, in any project, can contribute knowledge to Zuhn through MCP.

### New MCP Tools

```
zuhn_queue_source:
    Input: { url: string, mode?: "heavy" | "fast" | "auto" }
    Action: Appends to inbox queue with source_channel: "mcp"
    Returns: { queued: true, inbox_id: "INB-XXXXX" }

zuhn_submit_insights:
    Input: { source_id: string, insights: InsightJSON[] }
    Action: Validates via Zod → writes to KB → flags for review
    Returns: { created: N, rejected: M, reasons: [...] }

zuhn_submit_decision:
    Input: { DecisionJSON }
    Returns: { id: "DEC-XXXXX" }

zuhn_submit_prediction:
    Input: { PredictionJSON }
    Returns: { id: "PRED-XXXXX" }

zuhn_flag_tension:
    Input: { insight_a: string, insight_b: string, reason: string }
    Action: Adds to tension candidates for human review
    Returns: { queued: true }

zuhn_log_feedback:
    Input: { insight_id: string, type: "used" | "cited" | "irrelevant" }
    Action: Updates usage tracking for feedback loop
    Returns: { logged: true }
```

### Access Control

```
All MCP writes: tagged mcp_submitted: true, logged to meta/mcp-activity.json
Rate limits: 50/hr queue, 100/hr insights, 20/hr tensions
Localhost binding only.
```

---

## Scheduling Summary

```
Real-time:
    - File watcher on inbox/ (sub-second detection)
    - HTTP webhook server (localhost:7777)

Every 30 minutes:
    - Cron sweep: stuck items, retries, post-processing batch

Daily:
    - Prediction evidence scan (top 5 urgent predictions)

Weekly:
    - Red Team cycle (5 principles)
    - Gap source discovery (top 10 gaps)

Monthly:
    - Feedback loop: usage rates, priority recalibration
    - Bounty cleanup (stale bounties)
    - Red team history audit
```

---

## New Scripts

| Script | Purpose | Trigger |
|--------|---------|---------|
| `scripts/daemon.ts` | Orchestrator: watcher + cron + queue state machine | `npm run daemon:start` |
| `scripts/inbox-server.ts` | Local HTTP webhook server | Started by daemon |
| `scripts/inbox-prefilter.ts` | Duplicate/validation check | Called by daemon |
| `scripts/inbox-merge.ts` | Merge ensemble extraction results | Called by daemon |
| `scripts/inbox-verify.ts` | Semantic quality verification prompt | Called by daemon |
| `scripts/inbox-deep-read.ts` | Tension scan + connection mapping | Called by daemon |
| `scripts/red-team.ts` | Adversarial principle challenges | Weekly cron |
| `scripts/scout-predictions.ts` | Evidence search for predictions | Daily cron |
| `scripts/scout-gaps.ts` | Source discovery for sparse topics | Weekly cron |
| `scripts/inbox-feedback.ts` | Usage tracking + priority weights | Monthly cron |

## New Data Files

| File | Purpose |
|------|---------|
| `knowledge-base/inbox/queue.json` | State machine queue |
| `knowledge-base/inbox/processed/` | Completed sources (7-day retention) |
| `knowledge-base/inbox/review/` | Verification failures (human needed) |
| `knowledge-base/inbox/failed/` | Errors with logs (retry eligible) |
| `meta/bounties.json` | Red team + gap fill bounties |
| `meta/bounties-resolved.json` | Resolved bounties with reasons |
| `meta/prediction-evidence.json` | Scouted evidence for predictions |
| `meta/inbox-log.json` | Daemon activity audit trail |
| `meta/inbox-deep-reads.json` | Deep read findings |
| `meta/daemon-status.json` | Heartbeat + queue depth + agent count |
| `meta/red-team-history.json` | Principle challenge history |
| `meta/mcp-activity.json` | MCP write operation log |
| `meta/inbox-feedback.json` | Usage rates per source/channel |

## New npm Scripts

```json
{
  "daemon:start": "tsx scripts/daemon.ts",
  "daemon:stop": "kill $(cat /tmp/zuhn-daemon.pid)",
  "daemon:status": "tsx scripts/daemon.ts --status",
  "daemon:logs": "tail -f knowledge-base/meta/daemon.log",
  "red-team": "tsx scripts/red-team.ts",
  "scout": "tsx scripts/scout-predictions.ts && tsx scripts/scout-gaps.ts",
  "inbox:server": "tsx scripts/inbox-server.ts"
}
```

---

## Implementation Order

1. **Inbox directory structure** — queue.json, processed/, review/, failed/
2. **daemon.ts** — State machine + file watcher + concurrency control + Claude Code spawner
3. **inbox-server.ts** — Local HTTP webhook
4. **inbox-prefilter.ts** — Duplicate/validation
5. **inbox-merge.ts** — Ensemble merge logic
6. **inbox-verify.ts** — Semantic verification prompt
7. **inbox-deep-read.ts** — Tension scan + connections
8. **Enhanced wake.ts** — Morning briefing reads all new data files
9. **red-team.ts** — Adversarial challenges
10. **scout-predictions.ts** — Prediction evidence
11. **scout-gaps.ts** — Gap source discovery
12. **MCP write tools** — Extend mcp-server.ts
13. **inbox-feedback.ts** — Usage tracking
14. **Apple Shortcut setup guide** — docs/inbox-setup.md

---

## Success Criteria

- Heavy mode: sources fully processed (extract + merge + verify + deep read) within 30 minutes
- Fast mode: sources processed within 10 minutes
- Daemon recovers from crashes within 30 minutes (cron layer)
- Rate limit backoff prevents API errors while maximizing throughput
- Red Team produces credible counter-arguments for ≥3/5 targeted principles
- Prediction scouts find relevant evidence for ≥50% of scanned predictions
- Gap scouts suggest sources that yield ≥5 insights when ingested
- Zero auto-ingestion from algorithmic sources
- Zero auto-resolution of predictions or tensions
- Morning briefing surfaces all overnight activity with actionable items
- MCP write tools pass Zod validation on all inputs
- Ensemble extraction produces ≥15% more unique insights than single-pass on same sources
- Verification agent catches ≥80% of weak stances that Zod misses
- Deep read finds ≥1 non-obvious connection per high-priority source
