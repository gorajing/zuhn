---
id: INS-260626-59D9
domain: ai-development
topic: agent-patterns
title: >-
  Uncorrelated context windows are test-time compute — calibrate parallel
  subagents to task difficulty
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - subagents
  - test-time-compute
  - agent-topology
  - parallel-debugging
sources:
  - type: youtube
    title: Inside Claude Code With Its Creator Boris Cherny
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=PQU9o_5rHC4'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Throwing more fresh context windows at a problem is a form of test-time
    compute; scale the number of subagents up with task difficulty.
  standard: >-
    Cherny describes an emerging field of 'agent topologies' — ways to configure
    multiple agents. The key sub-idea is uncorrelated context windows: multiple
    agents each get fresh context that isn't polluted by each other's or their
    own prior context, and throwing more context at a problem is itself a form
    of test-time compute that buys more capability. With the right topology (so
    agents communicate and are laid out well), a swarm can build bigger things —
    Anthropic's plugins feature was built almost entirely by an unsupervised
    agent swarm over a weekend, seeded from a single spec on an Asana board.


    The immediately usable tactic: for a hard research-style task, explicitly
    tell the agent how many subagents to fan out, calibrated to difficulty — '3,
    5, or even 10 subagents, research in parallel, then see what they come up
    with.' For debugging specifically, assign one agent to the logs and one to
    the code path. Most agents at Anthropic are now launched as subagents by a
    parent ('mama Quad'). The principle generalizes: parallel uncorrelated
    exploration is a compute lever you can dial, not a fixed property of the
    tool.
stance: >-
  Spawning more agents with fresh, uncorrelated context windows adds usable
  compute, so harder tasks should get proportionally more parallel subagents.
related:
  - INS-260320-63D3
  - INS-260410-761B
  - INS-260626-E926
  - PRI-260328-A65A
  - INS-260410-796F
---
Cherny describes an emerging field of 'agent topologies' — ways to configure multiple agents. The key sub-idea is uncorrelated context windows: multiple agents each get fresh context that isn't polluted by each other's or their own prior context, and throwing more context at a problem is itself a form of test-time compute that buys more capability. With the right topology (so agents communicate and are laid out well), a swarm can build bigger things — Anthropic's plugins feature was built almost entirely by an unsupervised agent swarm over a weekend, seeded from a single spec on an Asana board.

The immediately usable tactic: for a hard research-style task, explicitly tell the agent how many subagents to fan out, calibrated to difficulty — '3, 5, or even 10 subagents, research in parallel, then see what they come up with.' For debugging specifically, assign one agent to the logs and one to the code path. Most agents at Anthropic are now launched as subagents by a parent ('mama Quad'). The principle generalizes: parallel uncorrelated exploration is a compute lever you can dial, not a fixed property of the tool.
