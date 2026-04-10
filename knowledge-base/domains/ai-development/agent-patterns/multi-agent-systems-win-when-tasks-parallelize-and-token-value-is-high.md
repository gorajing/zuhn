---
id: INS-260410-77E5
domain: ai-development
topic: agent-patterns
title: Multi-agent systems win when tasks parallelize and token value is high
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - architecture
  - tradeoffs
  - cost
sources:
  - type: blog
    title: How we built our multi-agent research system
    url: 'https://www.anthropic.com/engineering/multi-agent-research-system'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Multi-agent systems burn ~15x the tokens of a chat and only pay off for
    parallelizable, high-value research tasks — not coding or tightly-coupled
    domains.
  standard: >-
    Anthropic's data shows multi-agent research systems use roughly 15x the
    tokens of chat interactions (agents alone use ~4x). Their multi-agent setup
    beat single-agent Opus 4 by 90.2% on internal research evals, but only
    because the task — breadth-first research — parallelizes cleanly across
    subagents with separate context windows.


    The heuristic that emerges: use multi-agent architectures when (1) the task
    has many independent subproblems, (2) information exceeds what fits in one
    context, (3) the per-task value justifies token burn. Avoid them for coding
    and other domains where subtasks share dense state and require real-time
    coordination — current LLMs can't yet delegate and coordinate well enough in
    those settings.


    The corollary principle is that token usage alone explained 80% of
    performance variance in BrowseComp. Multi-agent is, in effect, a mechanism
    to legitimately spend more tokens in parallel on problems that benefit from
    it.
stance: >-
  Multi-agent architectures are only economically viable for high-value tasks
  involving heavy parallelization and information exceeding a single context
  window.
related:
  - INS-260403-0350
  - PRI-260407-D1AD
  - INS-260321-18D0
  - PRI-260406-3EF8
  - PRI-260405-AF79
---
Anthropic's data shows multi-agent research systems use roughly 15x the tokens of chat interactions (agents alone use ~4x). Their multi-agent setup beat single-agent Opus 4 by 90.2% on internal research evals, but only because the task — breadth-first research — parallelizes cleanly across subagents with separate context windows.

The heuristic that emerges: use multi-agent architectures when (1) the task has many independent subproblems, (2) information exceeds what fits in one context, (3) the per-task value justifies token burn. Avoid them for coding and other domains where subtasks share dense state and require real-time coordination — current LLMs can't yet delegate and coordinate well enough in those settings.

The corollary principle is that token usage alone explained 80% of performance variance in BrowseComp. Multi-agent is, in effect, a mechanism to legitimately spend more tokens in parallel on problems that benefit from it.
