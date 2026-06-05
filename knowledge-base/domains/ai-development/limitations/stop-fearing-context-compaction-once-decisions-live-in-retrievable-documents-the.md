---
id: INS-260605-DF08
domain: ai-development
topic: limitations
title: >-
  Stop fearing context compaction once decisions live in retrievable documents
  the agent re-looks-up
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-compaction
  - autonomous-agents
  - long-sessions
  - memory
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
    When the important rules live in documents the agent always re-fetches, a
    multi-hour session can survive 20-50 context compactions because what
    matters is reconstructed on demand.
  standard: >-
    The harness approach is admittedly context-heavy — Cichra notes you 'can run
    out of half of the context just starting the research.' But he reports no
    fear of context compaction: over the last half year, sessions with 20-50
    compactions work fine 'because the important things survive and the agent
    will always look them up again.'


    This inverts the usual anxiety about context windows. Rather than trying to
    keep everything in-context, the design assumes context will be lost and
    makes loss cheap: the durable artifacts (ADRs, PRDs, BDD specs, design
    system rules) are the canonical memory, and re-retrieving them is the
    agent's normal mode of operation. The stated goal is multi-hour autonomous
    sessions with a clear objective where the agent operates within the rules
    you defined — and externalized, re-discoverable decisions are precisely what
    makes that goal reachable instead of degrading as the window churns.
stance: >-
  Durable decision records make long autonomous agent sessions robust to dozens
  of context compactions rather than degraded by them.
related:
  - INS-260320-06EF
  - INS-260605-CA2B
  - INS-260605-672C
  - PRI-260320-07A4
  - INS-260605-83DA
  - PRI-260407-D1AD
---
The harness approach is admittedly context-heavy — Cichra notes you 'can run out of half of the context just starting the research.' But he reports no fear of context compaction: over the last half year, sessions with 20-50 compactions work fine 'because the important things survive and the agent will always look them up again.'

This inverts the usual anxiety about context windows. Rather than trying to keep everything in-context, the design assumes context will be lost and makes loss cheap: the durable artifacts (ADRs, PRDs, BDD specs, design system rules) are the canonical memory, and re-retrieving them is the agent's normal mode of operation. The stated goal is multi-hour autonomous sessions with a clear objective where the agent operates within the rules you defined — and externalized, re-discoverable decisions are precisely what makes that goal reachable instead of degrading as the window churns.
