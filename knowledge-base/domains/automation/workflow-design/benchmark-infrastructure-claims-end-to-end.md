---
id: INS-260627-E3D2
domain: automation
topic: workflow-design
title: Benchmark infrastructure claims end to end
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - benchmarks
  - agentrun
  - tooling
  - verification
sources:
  - type: blog
    title: >-
      GitHub - tsouth89/conduit: One local gateway for all your MCP servers, set
      up once and shared by every AI client (Claude, Cursor, VS Code, Codex).
      Lazy discovery collapses them to 3 meta-tools the agent searches on
      demand, ~90% fewer tokens. Keys in your OS keychain, no cloud.
    url: 'https://github.com/tsouth89/conduit'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Do not accept agent-infra savings unless task correctness survives the
    optimization.
  standard: >-
    Conduit's benchmark compares full versus lazy tool exposure on real
    list/retrieve tasks and grades final answers for correctness while also
    reporting token overhead and latency. The reusable pattern is to include a
    behavioral gate next to the efficiency metric: did the agent still get the
    right answer, and how often? AgentRun should use the same shape for
    context-compression, retrieval, and tool-discovery changes.
  deep: >-
    The tradeoff is benchmark setup cost and narrower coverage. The answer is
    not to skip behavioral checks; it is to start with a few repeatable tasks
    that represent the failure mode the optimization could introduce, such as
    selecting the wrong tool after hiding full schemas.
subtopic: agent-tooling
stance: >-
  Infrastructure optimizations for agents should be benchmarked against
  completed tasks with correctness grading, not only against internal efficiency
  metrics.
related:
  - INS-260410-36E3
  - INS-260625-E1E9
  - INS-260627-3D9A
  - INS-260605-74E8
  - INS-260605-29BD
---
Conduit's benchmark compares full versus lazy tool exposure on real list/retrieve tasks and grades final answers for correctness while also reporting token overhead and latency. The reusable pattern is to include a behavioral gate next to the efficiency metric: did the agent still get the right answer, and how often? AgentRun should use the same shape for context-compression, retrieval, and tool-discovery changes.
