---
id: INS-260627-8735
domain: ai-development
topic: system-building
title: Use machine-readable citation blocks as agent handoff contracts
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-handoffs
  - structured-output
  - traceability
  - coding-agents
  - agent-run
sources:
  - type: blog
    title: >-
      GitHub - microsoft/fastcontext: FastContext: Training Efficient Repository
      Explorer for Coding Agents
    url: 'https://github.com/microsoft/fastcontext'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The useful artifact is the parseable evidence block, not just the explorer's
    explanation.
  standard: >-
    FastContext's `<final_answer>` citation block is a simple interface: paths
    and line ranges in a predictable shape. That gives the next agent something
    it can parse, re-open, score, or reject without trusting an opaque
    narrative. The mechanism is deliberately small enough to survive across
    different harnesses.


    Zuhn's AgentRun traces should use the same pattern for exploratory steps: a
    bounded evidence artifact with file paths, URLs, source IDs, or line ranges,
    plus a trajectory path for audit. The tradeoff is reduced expressiveness, so
    prose can remain secondary context, but the decision-critical handoff should
    be machine-checkable.
stance: >-
  Agent-to-agent handoffs become more reliable when the upstream agent returns a
  small parseable evidence block instead of prose summaries alone.
related:
  - INS-260325-A070
  - INS-260403-37B1
  - INS-260404-1299
  - INS-260325-2AA0
  - INS-260619-4ADA
  - INS-260605-2ECD
---
FastContext's `<final_answer>` citation block is a simple interface: paths and line ranges in a predictable shape. That gives the next agent something it can parse, re-open, score, or reject without trusting an opaque narrative. The mechanism is deliberately small enough to survive across different harnesses.

Zuhn's AgentRun traces should use the same pattern for exploratory steps: a bounded evidence artifact with file paths, URLs, source IDs, or line ranges, plus a trajectory path for audit. The tradeoff is reduced expressiveness, so prose can remain secondary context, but the decision-critical handoff should be machine-checkable.
