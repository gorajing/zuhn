---
id: INS-260627-7076
domain: ai-development
topic: agent-patterns
title: >-
  Share agent context through a human-reviewed file, not full sharing or free
  agent chat
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-sharing
  - multi-agent
  - agent-coordination
  - agents-md
  - non-determinism
sources:
  - type: youtube
    title: >-
      Automating Large Scale Refactors with Parallel Agents - Robert Brennan,
      OpenHands
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=rcsliSIy_YU'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A human-reviewed shared file (agents.md / micro-agent) is the practical
    sweet spot for inter-agent context sharing, between context-blowing full
    sharing and loop-prone agent-to-agent chat.
  standard: >-
    As a large refactor proceeds, agents discover things — your original mental
    model was incomplete, a dependency needs a specific version, a problem has a
    known fix — and a fleet of agents hitting the same wall should not each
    rediscover the solution. Brennan walks through a spectrum of context-sharing
    strategies and their failure modes. The naive extreme, where every agent
    sees every other agent's full context, is the worst option: it is
    functionally equivalent to a single agent iterating serially and it blows
    the context window almost immediately. At the other extreme, giving each
    agent a tool to message other agents (broadcast or point-to-point) is the
    leading edge and fun to experiment with, but it sharply increases
    non-determinism — he cites a real report where two agents fell into a loop
    'wishing each other zen perfection.'


    The practical middle ground is a shared file, such as an agents.md or
    OpenHands micro-agent, that agents read for context. You can let agents
    update the file themselves (e.g., open a PR to it as they learn), but the
    documented downside is that agents get aggressive about writing down
    unimportant things, so human review of those updates helps keep the shared
    context clean and high-signal. A lighter variant is the human manually
    pasting key facts ('use library 1.2.3 instead of 1.2.2') into each agent,
    which works but does not scale because it requires babysitting.


    The takeaway is to default to a curated, human-reviewed shared-file
    mechanism for cross-agent learning rather than reaching for either full
    context broadcast or open agent-to-agent dialogue. The shared file gives you
    a single auditable source of accumulated knowledge, keeps each agent's
    context window lean, and contains the non-determinism that emerges the
    moment agents start talking freely to each other.
stance: >-
  The reliable way for parallel agents to share learned context is a
  human-reviewed shared file, because sharing everything blows the context
  window and unrestricted agent-to-agent messaging adds non-determinism and
  loops.
related:
  - INS-260626-4393
  - INS-260626-7F5B
  - INS-260627-FEB4
  - INS-260519-20E0
  - INS-260605-9276
  - INS-260605-83DA
---
As a large refactor proceeds, agents discover things — your original mental model was incomplete, a dependency needs a specific version, a problem has a known fix — and a fleet of agents hitting the same wall should not each rediscover the solution. Brennan walks through a spectrum of context-sharing strategies and their failure modes. The naive extreme, where every agent sees every other agent's full context, is the worst option: it is functionally equivalent to a single agent iterating serially and it blows the context window almost immediately. At the other extreme, giving each agent a tool to message other agents (broadcast or point-to-point) is the leading edge and fun to experiment with, but it sharply increases non-determinism — he cites a real report where two agents fell into a loop 'wishing each other zen perfection.'

The practical middle ground is a shared file, such as an agents.md or OpenHands micro-agent, that agents read for context. You can let agents update the file themselves (e.g., open a PR to it as they learn), but the documented downside is that agents get aggressive about writing down unimportant things, so human review of those updates helps keep the shared context clean and high-signal. A lighter variant is the human manually pasting key facts ('use library 1.2.3 instead of 1.2.2') into each agent, which works but does not scale because it requires babysitting.

The takeaway is to default to a curated, human-reviewed shared-file mechanism for cross-agent learning rather than reaching for either full context broadcast or open agent-to-agent dialogue. The shared file gives you a single auditable source of accumulated knowledge, keeps each agent's context window lean, and contains the non-determinism that emerges the moment agents start talking freely to each other.
