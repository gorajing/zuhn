---
id: INS-260605-36E9
domain: ai-development
topic: agent-patterns
title: Looking at execution traces gets you 80% of agent debugging detail
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tracing
  - observability
  - debugging
  - evals
  - skills
sources:
  - type: youtube
    title: >-
      Skill issue: Lessons from skilling up coding agents to use Langfuse - Marc
      Klingen, Clickhouse
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vNCY9kXXyDQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Before complicating things with eval harnesses, read raw execution traces —
    they reveal ~80% of what is wrong and how to fix the agent or skill.
  standard: >-
    Klingen's most emphasized lesson: teams rush to build sophisticated evals
    before they have ever sat and read through what the agent actually did at
    runtime a few times. The Langfuse team instrumented Claude Code itself, used
    their own skill interactively, and read the traces to see where the agent
    wandered versus going straight at the goal. That direct inspection — not
    metrics — surfaced the concrete fixes.


    The traces revealed specific, fixable failure modes: the agent assumed a
    default data region instead of asking the user; it hallucinated CLI
    parameters because it pattern-matched on the word 'trace' from CLIs it had
    seen before. The fixes were small (prompt for the region, advertise the
    --help flag more aggressively so the agent learns the real interface in one
    extra turn). None of these would have been found by jumping to an eval
    harness first; they came from reading the runtime trace.
stance: >-
  Reading what an agent actually did at runtime, before building any evals,
  surfaces most of what you need to improve it.
related:
  - INS-260605-E193
  - INS-260605-72C4
  - INS-260605-310E
  - INS-260605-6444
  - INS-260625-C69F
  - INS-260605-365A
  - INS-260605-C1A5
  - INS-260605-7843
---
Klingen's most emphasized lesson: teams rush to build sophisticated evals before they have ever sat and read through what the agent actually did at runtime a few times. The Langfuse team instrumented Claude Code itself, used their own skill interactively, and read the traces to see where the agent wandered versus going straight at the goal. That direct inspection — not metrics — surfaced the concrete fixes.

The traces revealed specific, fixable failure modes: the agent assumed a default data region instead of asking the user; it hallucinated CLI parameters because it pattern-matched on the word 'trace' from CLIs it had seen before. The fixes were small (prompt for the region, advertise the --help flag more aggressively so the agent learns the real interface in one extra turn). None of these would have been found by jumping to an eval harness first; they came from reading the runtime trace.
