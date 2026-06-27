---
id: INS-260625-9BEB
domain: ai-development
topic: agent-patterns
title: Agent scaffolds do not erase long-horizon coordination limits
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - agent-patterns
  - long-horizon
  - multi-file-reasoning
  - workflow-replacement
sources:
  - type: blog
    title: >-
      SWE-EVO: Benchmarking Coding Agents in Long-Horizon Software Evolution
      Scenarios
    url: 'https://arxiv.org/html/2512.18470v6'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    OpenHands and SWE-agent with frontier models resolve only about 25% of
    SWE-EVO, so workflow scaffolding is not enough for broad autonomous software
    evolution.
  standard: >-
    SWE-EVO directly tests whether agentic workflows can carry models through a
    realistic long-horizon software task: interpret release notes, coordinate
    modifications across a large codebase, and preserve existing behavior. The
    reported best resolved rate is only 25%, while gpt-5.2 drops from 72.80% on
    SWE-Bench Verified to 22.92% on SWE-EVO.


    This does not mean scaffolds are useless. The paper still finds scaling
    trends and scaffold sensitivity. The tension is more precise: agentic
    workflow design matters, but it cannot be treated as a substitute for
    model-side semantic reasoning, requirement interpretation, and
    codebase-level planning.
stance: >-
  Tool-using coding agents still fail most tasks that require coordinated
  release-level changes across many files.
related:
  - INS-260405-615E
  - INS-260410-0E26
  - INS-260501-3088
  - INS-260323-3F39
  - PRI-260403-7585
  - INS-260625-407C
  - INS-260626-5545
---
SWE-EVO directly tests whether agentic workflows can carry models through a realistic long-horizon software task: interpret release notes, coordinate modifications across a large codebase, and preserve existing behavior. The reported best resolved rate is only 25%, while gpt-5.2 drops from 72.80% on SWE-Bench Verified to 22.92% on SWE-EVO.

This does not mean scaffolds are useless. The paper still finds scaling trends and scaffold sensitivity. The tension is more precise: agentic workflow design matters, but it cannot be treated as a substitute for model-side semantic reasoning, requirement interpretation, and codebase-level planning.
