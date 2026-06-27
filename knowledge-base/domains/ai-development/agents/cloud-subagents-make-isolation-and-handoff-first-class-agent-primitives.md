---
id: INS-260626-3796
domain: ai-development
topic: agents
title: Cloud subagents make isolation and handoff first-class agent primitives
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - cursor
  - cloud-agents
  - subagents
  - handoff
sources:
  - type: blog
    title: Cloud Environment Setup and Cloud Subagents in Agents Window · Cursor
    url: 'https://cursor.com/changelog/cloud-in-agents-window'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AgentRun should model cloud subagents as child runs with their own branch,
    VM, and verification gates.
  standard: >-
    Cloud subagents change parallel agent work from an ad hoc process into a
    product primitive. This unlocks long-running CI fixes, PR babysitting, and
    broad exploration without blocking the local workspace. The tradeoff is
    provenance: final changes may come from a separate VM and branch. AgentRun
    should preserve child_run_id, branch, workspace, parent instruction, and
    merge/handback evidence.
  deep: >-
    For Zuhn automations, this argues against treating multi-agent work as only
    conversational. If a child agent does ingestion, extraction, or
    verification, the parent run should not close as passed until the child
    run's own gates are visible and linked.
subtopic: cloud-subagents
stance: >-
  Cursor's /in-cloud subagents formalize a pattern that AgentRun should support:
  a parent agent can delegate work to an isolated VM and branch while local work
  continues. The audit object should capture parent/child run relationships,
  branch isolation, and handoff state rather than flattening all work into one
  session.
related:
  - INS-260329-5F19
  - INS-260605-738E
  - INS-260605-D055
  - INS-260322-A367
  - INS-260605-0C56
  - INS-260626-ECA6
---
Cloud subagents change parallel agent work from an ad hoc process into a product primitive. This unlocks long-running CI fixes, PR babysitting, and broad exploration without blocking the local workspace. The tradeoff is provenance: final changes may come from a separate VM and branch. AgentRun should preserve child_run_id, branch, workspace, parent instruction, and merge/handback evidence.
