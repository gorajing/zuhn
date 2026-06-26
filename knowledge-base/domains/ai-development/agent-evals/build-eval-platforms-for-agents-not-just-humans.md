---
id: INS-260626-B149
domain: ai-development
topic: agent-evals
title: 'Build eval platforms for agents, not just humans'
actionability: inspiration
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - evals
  - agentic-workflows
  - headless
  - coding-agents
  - self-healing
sources:
  - type: youtube
    title: 'Why building eval platforms is hard — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_fQ7Z_Wfouk'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A growing class of users ignores the eval UI entirely and just wants a
    coding agent (Claude Code, Codex) to run pure SQL on the trace backend, pull
    data into context, and improve their agent for them.
  standard: >-
    Hetzel reports an emerging 'headless' usage pattern: customers who don't
    care about the eval platform's UI at all, and instead want to point a coding
    agent like Codex or Claude Code at it to increase their agent's quality. The
    enabling requirement is concrete — the data backend must let you run a lot
    of pure SQL — so a coding agent can grab evals data in aggregate, pull it
    into context, and change the agent within the same coding session, becoming
    somewhat self-healing.


    The broader design directive is to build the platform for agents as a
    first-class consumer, not only for humans, because agents are now one of the
    main media through which people build technology. This reframes 'API access'
    from a nice-to-have into the primary interface for a meaningful segment of
    users, and it raises the bar on the data layer: a trace store that only
    powers a UI is insufficient if it can't answer arbitrary SQL fast enough for
    an agent to loop on. Marked time-sensitive because the specific tools and
    the shape of agentic self-improvement are evolving quickly even if the
    underlying directive endures.
stance: >-
  Eval platforms should expose a clean SQL-queryable trace backend so that
  coding agents can headlessly pull data, run evals, and self-improve the agent
  under test without any human touching the UI.
related:
  - INS-260605-6444
  - INS-260605-36E9
  - INS-260605-E2D9
  - INS-260605-A3F4
  - INS-260625-C69F
  - INS-260625-6178
  - INS-260625-7926
  - INS-260626-1673
  - INS-260626-8747
---
Hetzel reports an emerging 'headless' usage pattern: customers who don't care about the eval platform's UI at all, and instead want to point a coding agent like Codex or Claude Code at it to increase their agent's quality. The enabling requirement is concrete — the data backend must let you run a lot of pure SQL — so a coding agent can grab evals data in aggregate, pull it into context, and change the agent within the same coding session, becoming somewhat self-healing.

The broader design directive is to build the platform for agents as a first-class consumer, not only for humans, because agents are now one of the main media through which people build technology. This reframes 'API access' from a nice-to-have into the primary interface for a meaningful segment of users, and it raises the bar on the data layer: a trace store that only powers a UI is insufficient if it can't answer arbitrary SQL fast enough for an agent to loop on. Marked time-sensitive because the specific tools and the shape of agentic self-improvement are evolving quickly even if the underlying directive endures.
