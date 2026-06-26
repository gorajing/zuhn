---
id: INS-260501-4C5E
domain: ai-development
topic: agent-patterns
title: >-
  Sliding scale of agenticness — from tab autocomplete to dark factories with no
  human review
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - agent-spectrum
  - dark-factories
  - human-in-the-loop
  - guardrails
sources:
  - type: youtube
    title: 'This is AGI: Sequoia AI Ascent 2026 Keynote'
    author: Sequoia Capital
    url: 'https://youtu.be/LRo33rnv6rQ'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Sonia Huang: agents go from little helpers that do a little amount by your
    side, to interns that need to be managed, to interns that manage themselves,
    eventually to interns trusty enough to push to prod without oversight — what
    I call dark factories.
  standard: >-
    The popular framing of agents treats agency as binary: either AI-assists or
    AI-acts-autonomously. Sequoia's continuum captures more of the operational
    reality. Tab autocomplete is one AI helping inline. Agentic development is
    one human directing one agent. Background async agents are humans managing
    teams of agents asynchronously. Dark factories — Sonia's term — are agents
    pushing to production without any human review, observed in production at
    cybersecurity companies. The implication is that 'human in the loop' is not
    a binary policy but a per-workflow design decision, and the right point on
    the spectrum depends on consequences-of-failure, guardrail quality, and
    verifier strength. Workflows with high consequences of failure (legal,
    medical, financial transactions) sit lower on the spectrum (human review
    required); workflows with cheap failures and strong verifiers (test
    generation, internal tooling, cybersecurity scanning) can run higher (no
    human review). The strategic implication for builders: the appropriate
    agenticness level for your product is a design surface, not a default; ship
    products that explicitly support multiple points on the spectrum so
    customers can move along it as their guardrails mature.
stance: >-
  Agent deployments exist on a continuum from minimal (tab autocomplete = one AI
  assisting a human in line) to extreme (dark factories = agents pushing to
  production without human review), and which point on the scale fits a given
  workflow depends on guardrail quality, not just capability
related:
  - PRI-260320-5D78
  - INS-260403-BDCB
  - INS-260409-B122
  - INS-260403-4120
  - INS-260603-1BC0
  - INS-260605-B4B9
  - INS-260625-BCD8
  - INS-260403-0350
  - INS-260530-69DC
  - INS-260605-800F
---
The popular framing of agents treats agency as binary: either AI-assists or AI-acts-autonomously. Sequoia's continuum captures more of the operational reality. Tab autocomplete is one AI helping inline. Agentic development is one human directing one agent. Background async agents are humans managing teams of agents asynchronously. Dark factories — Sonia's term — are agents pushing to production without any human review, observed in production at cybersecurity companies. The implication is that 'human in the loop' is not a binary policy but a per-workflow design decision, and the right point on the spectrum depends on consequences-of-failure, guardrail quality, and verifier strength. Workflows with high consequences of failure (legal, medical, financial transactions) sit lower on the spectrum (human review required); workflows with cheap failures and strong verifiers (test generation, internal tooling, cybersecurity scanning) can run higher (no human review). The strategic implication for builders: the appropriate agenticness level for your product is a design surface, not a default; ship products that explicitly support multiple points on the spectrum so customers can move along it as their guardrails mature.
