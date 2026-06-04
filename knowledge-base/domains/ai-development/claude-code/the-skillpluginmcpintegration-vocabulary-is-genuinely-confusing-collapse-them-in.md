---
id: INS-260501-F90F
domain: ai-development
topic: claude-code
title: >-
  The skill/plugin/MCP/integration vocabulary is genuinely confusing — collapse
  them into one user-facing concept
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - skill-vocabulary
  - mcp-confusion
  - ux-design
  - platform-clarity
sources:
  - type: youtube
    title: Stop using Claude. Start using Codex?
    author: Greg Isenberg
    url: 'https://youtu.be/LWx4FGam2aQ'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Skills, plugins, MCPs, integrations, connectors — Pemberton calls them all
    'skills' because the differences are platform-vendor business distinctions,
    not user mental models.
  standard: >-
    Pemberton's structural complaint about Codex: skills use slash, plugins use
    @, MCPs are something else, integrations and connectors yet another
    category. The actual user-facing distinction (you can build skills yourself,
    plugins require OpenAI approval) is a platform-vendor business decision
    (curation, partnership tier) that doesn't map to a user mental model. The
    right user model is 'the agent has capabilities; you give it more
    capabilities by adding things to it.' Whether those things came from you,
    the vendor, or a third party is implementation detail.


    The operational implication for product builders: simplify aggressively.
    Pemberton 'just calls them all skills' because that matches how he thinks.
    Future agent platforms that win mass adoption will collapse this vocabulary,
    not preserve it. The lesson generalizes — anywhere you have
    implementation-driven vocabulary mismatching user mental models, you're
    losing adoption to whoever simplifies first. For Zuhn specifically: this is
    direct validation of the existing skill structure (everything under skills/
    as portable SKILL.md files, no MCP-vs-skill split for users). The only
    distinction users see is 'is this an op I run or a query I make' — and
    that's right.
stance: >-
  The proliferation of vocabulary (skills, plugins, MCPs, integrations,
  connectors) reflects platform-vendor implementation distinctions that have no
  user-facing meaning; the right product move is to unify them under one mental
  model with one invocation pattern, not preserve the distinctions for technical
  purity.
related:
  - INS-260603-23B1
  - INS-260514-4436
  - INS-260329-4D06
  - INS-260329-DEA1
  - INS-260519-746D
  - INS-260514-2C6C
---
Pemberton's structural complaint about Codex: skills use slash, plugins use @, MCPs are something else, integrations and connectors yet another category. The actual user-facing distinction (you can build skills yourself, plugins require OpenAI approval) is a platform-vendor business decision (curation, partnership tier) that doesn't map to a user mental model. The right user model is 'the agent has capabilities; you give it more capabilities by adding things to it.' Whether those things came from you, the vendor, or a third party is implementation detail.

The operational implication for product builders: simplify aggressively. Pemberton 'just calls them all skills' because that matches how he thinks. Future agent platforms that win mass adoption will collapse this vocabulary, not preserve it. The lesson generalizes — anywhere you have implementation-driven vocabulary mismatching user mental models, you're losing adoption to whoever simplifies first. For Zuhn specifically: this is direct validation of the existing skill structure (everything under skills/ as portable SKILL.md files, no MCP-vs-skill split for users). The only distinction users see is 'is this an op I run or a query I make' — and that's right.
