---
id: INS-260625-224F
domain: ai-development
topic: agent-evals
title: Hybrid-agent benchmarks must make each tool channel non-substitutable
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - computer-use
  - tool-use
  - hybrid-interfaces
  - benchmark-design
sources:
  - type: blog
    title: Introduction
    url: 'https://arxiv.org/html/2606.09426v2'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A benchmark does not test tool orchestration just because many tools are
    available.
  standard: >-
    WeaveBench's key admission rule is channel non-substitutability: tasks must
    require GUI observation or action and CLI/code operations in the same
    trajectory. This avoids a common eval illusion where a benchmark exposes
    many tools, but the agent can solve each task through one convenient
    channel, so the score measures single-tool competence rather than
    orchestration.


    For AgentRun-style evals, every required tool should have a reason to exist
    in the task contract. If browser, shell, file edit, screenshot, and external
    APIs are all available, the evaluator should specify which evidence or state
    transition only each channel can provide. Otherwise tool-use metrics are
    mostly interface availability, not production workflow reliability.
stance: >-
  Multi-tool benchmarks only test orchestration when success requires
  transferring state across channels that cannot solve the task alone.
related:
  - INS-260322-AFE9
  - INS-260625-D8C4
  - INS-260625-1187
  - INS-260605-B60D
  - INS-260625-1520
  - INS-260625-FFDF
---
WeaveBench's key admission rule is channel non-substitutability: tasks must require GUI observation or action and CLI/code operations in the same trajectory. This avoids a common eval illusion where a benchmark exposes many tools, but the agent can solve each task through one convenient channel, so the score measures single-tool competence rather than orchestration.

For AgentRun-style evals, every required tool should have a reason to exist in the task contract. If browser, shell, file edit, screenshot, and external APIs are all available, the evaluator should specify which evidence or state transition only each channel can provide. Otherwise tool-use metrics are mostly interface availability, not production workflow reliability.
