---
id: INS-260605-92FF
domain: ai-development
topic: agent-patterns
title: 'Tool overload is caused by overlap, not raw tool count'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-design
  - tool-overload
  - agent-routing
  - multi-agent
  - tool-clarity
sources:
  - type: blog
    title: A practical guide to building agents
    url: >-
      https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: 'The dangerous toolset is ambiguous, not merely large.'
  standard: >-
    OpenAI notes that some agents can handle more than 15 distinct tools while
    others struggle with fewer than 10 overlapping tools. The decision to split
    work across agents should come after improving names, parameters,
    descriptions, and tool boundaries. Tool-count thresholds are weak proxies
    for actual tool-selection difficulty.
  deep: >-
    For Codex-style workflows, this argues for auditing tool affordances before
    adding specialist agents. If two commands differ only subtly, the model must
    infer distinctions from context and will sometimes choose wrong. A better
    fix may be renaming tools, narrowing arguments, or adding validation, not
    adding another orchestration layer.
stance: >-
  Agents fail at tool selection when tools are semantically overlapping or
  poorly described, so splitting agents should come after improving tool clarity
  rather than merely counting tools.
related:
  - INS-260404-61DA
  - INS-260627-A0EE
  - INS-260323-BC61
  - INS-260410-A1E9
  - INS-260627-B2C4
---
OpenAI notes that some agents can handle more than 15 distinct tools while others struggle with fewer than 10 overlapping tools. The decision to split work across agents should come after improving names, parameters, descriptions, and tool boundaries. Tool-count thresholds are weak proxies for actual tool-selection difficulty.
