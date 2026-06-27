---
id: INS-260605-726C
domain: ai-development
topic: system-building
title: 'Complex AI systems become untraceable by humans, so debug them with AI'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ai-debugging
  - system-complexity
  - agent-tooling
  - observability
sources:
  - type: youtube
    title: 'Fighting AI with AI — Lawrence Jones, Incident'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=L2r6vLlLgs8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When an AI system grows to many chained prompts and agents, a human can't
    trace where a failure originated, so you must point AI at your own internal
    tooling to debug it.
  standard: >-
    incident.io's investigations run hundreds of telemetry queries and expand
    into hundreds of prompts and tool calls per step; their chatbot alone is
    powered by 10+ agents and 50+ prompts. A single subtle error early in the
    chain can produce a totally wrong root-cause analysis with no obvious trail
    back to the offending step. Understanding a single incident well enough to
    judge an AI report takes a human about an hour, which doesn't scale across
    thousands of investigations on hundreds of customer accounts.


    The core principle: the same AI capability you ship in the product must be
    applied to the internal tools you use to understand the product. Jones
    frames this as 'fighting AI with AI' — debugging tools, eval workflows, and
    analysis pipelines should all be built so coding agents can drive them, not
    just humans. Teams building complicated AI systems that are hard to
    understand, debug, or evolve should prioritize making their internal
    debugging surface agent-legible.
stance: >-
  Once an AI product fans out into hundreds or thousands of chained prompts,
  humans can no longer tractably trace failures and must use AI to debug AI.
related:
  - INS-260321-D370
  - INS-260330-5A13
  - INS-260605-DB29
  - INS-260605-1A50
  - INS-260321-2482
  - INS-260625-0021
  - INS-260625-FC2D
  - INS-260627-0BC1
  - INS-260605-93B8
  - INS-260626-8F57
---
incident.io's investigations run hundreds of telemetry queries and expand into hundreds of prompts and tool calls per step; their chatbot alone is powered by 10+ agents and 50+ prompts. A single subtle error early in the chain can produce a totally wrong root-cause analysis with no obvious trail back to the offending step. Understanding a single incident well enough to judge an AI report takes a human about an hour, which doesn't scale across thousands of investigations on hundreds of customer accounts.

The core principle: the same AI capability you ship in the product must be applied to the internal tools you use to understand the product. Jones frames this as 'fighting AI with AI' — debugging tools, eval workflows, and analysis pipelines should all be built so coding agents can drive them, not just humans. Teams building complicated AI systems that are hard to understand, debug, or evolve should prioritize making their internal debugging surface agent-legible.
