---
id: INS-260605-672C
domain: ai-development
topic: agent-patterns
title: >-
  Capture architectural decisions as enforceable records because LLMs and humans
  share the same context limit
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - adr
  - decision-records
  - context-management
  - documentation
  - agentic-coding
sources:
  - type: youtube
    title: >-
      BDD, ADR, PRD, WTF: Capturing Decisions for Humans and AI Alike — Michal
      Cichra, Safe Intelligence
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=504PvfXou5Y'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    LLMs compact context and humans forget, so the 'why' behind every flow,
    feature, and architectural choice must live in durable records an agent can
    re-discover on demand.
  standard: >-
    Cichra frames the core problem with a parable: monkeys keep beating any peer
    who climbs the ladder long after the original punished monkeys are gone —
    enforcing a rule no one remembers the reason for. Humans and LLMs suffer the
    identical trait: limited context. People forget, people leave; LLMs compact
    context and have no persistent memory. After operating a product a while,
    teams start asking why a flow exists, why a feature has its goal, why code
    is shaped a certain way — and the founding engineer may be unavailable.


    The remedy is to externalize decisions into structured artifacts. An ADR
    (Architecture Decision Record) captures why you do something and how you
    enforce it, referencing example docs and code snippets (e.g. 'we split code
    into layers to prevent N+1 queries, enforced by linting module imports'). A
    PRD captures why a feature exists, what problem it solves, and the user's
    journey through it — and is 'not just for the agents, but also for you six
    weeks from now when you forget.' Critically, these records serve agents
    directly: when an agent hits a rule, the tooling links it to the document
    explaining the reason and the fix, and the agent reads it before acting.
stance: >-
  Recording the 'why' behind decisions in retrievable ADR/PRD documents is
  necessary infrastructure for agentic development, not optional documentation.
related:
  - INS-260605-E06C
  - INS-260605-DF08
  - PRI-260320-07A4
  - INS-260605-37FB
  - INS-260605-BB4B
---
Cichra frames the core problem with a parable: monkeys keep beating any peer who climbs the ladder long after the original punished monkeys are gone — enforcing a rule no one remembers the reason for. Humans and LLMs suffer the identical trait: limited context. People forget, people leave; LLMs compact context and have no persistent memory. After operating a product a while, teams start asking why a flow exists, why a feature has its goal, why code is shaped a certain way — and the founding engineer may be unavailable.

The remedy is to externalize decisions into structured artifacts. An ADR (Architecture Decision Record) captures why you do something and how you enforce it, referencing example docs and code snippets (e.g. 'we split code into layers to prevent N+1 queries, enforced by linting module imports'). A PRD captures why a feature exists, what problem it solves, and the user's journey through it — and is 'not just for the agents, but also for you six weeks from now when you forget.' Critically, these records serve agents directly: when an agent hits a rule, the tooling links it to the document explaining the reason and the fix, and the agent reads it before acting.
