---
id: INS-260514-8424
domain: ai-development
topic: system-design
title: >-
  Persona-specific reviewer agents inject diverse-perspective code review
  automatically
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - reviewer-agents
  - persona-review
  - code-review
  - knowledge-leverage
sources:
  - type: youtube
    title: "Harness Engineering: How to Build Software When Humans Steer, Agents Execute —\_Ryan Lopopolo, OpenAI"
    author: AI Engineer
    url: 'https://youtu.be/am_oeAoUhew'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Have one engineer write what 'good security review' looks like — now every
    agent gets that review on every push. The single review becomes durable
    infrastructure.
  standard: >-
    Lopopolo's leverage pattern: each team member is an expert in some
    non-functional dimension (frontend architecture, backend scalability,
    product-minded UX, security, reliability). Get them to write down what
    'good' looks like in their persona. Then deploy a reviewer agent per persona
    that runs on every push, reviews the diff through that persona's lens,
    surfaces P2+ concerns. This converts one engineer's review expertise into
    infrastructure that every agent trajectory benefits from, not a synchronous
    human gate. Bonus: the agent has a 'right to address feedback' but isn't
    bullied into accepting every comment — bias toward 'code accepted, not
    perfect, not drowning in minutia.' The pattern stacks: write the persona doc
    once, generate reviews forever.


    Application: identify the personas in your team that produce most of the
    quality friction (security review, performance review, naming conventions,
    accessibility, API design) and create persona-specific reviewer agents for
    each. The expensive part is writing the persona documentation; the cheap
    part is the agent running it on every push. For Memric specifically: the
    same pattern can apply to audit deliverables — multiple persona-reviewer
    agents (CIO-perspective, dissenter-perspective, post-mortem-perspective)
    each reviewing the audit report from their lens before final delivery.
stance: >-
  Instead of relying on overworked human code review or a single LLM reviewer,
  deploy multiple persona-specific reviewer agents (security, reliability,
  frontend-architect, scalability, product-minded) that each run on every push
  and surface concerns specific to their persona's documentation — converting
  one engineer's expertise into a durable review surface that every agent
  trajectory benefits from.
related:
  - INS-260330-4370
  - INS-260501-5582
  - INS-260627-765B
  - INS-260320-1B10
  - INS-260627-EB75
  - INS-260530-D34F
  - PRI-260406-3EF8
---
Lopopolo's leverage pattern: each team member is an expert in some non-functional dimension (frontend architecture, backend scalability, product-minded UX, security, reliability). Get them to write down what 'good' looks like in their persona. Then deploy a reviewer agent per persona that runs on every push, reviews the diff through that persona's lens, surfaces P2+ concerns. This converts one engineer's review expertise into infrastructure that every agent trajectory benefits from, not a synchronous human gate. Bonus: the agent has a 'right to address feedback' but isn't bullied into accepting every comment — bias toward 'code accepted, not perfect, not drowning in minutia.' The pattern stacks: write the persona doc once, generate reviews forever.

Application: identify the personas in your team that produce most of the quality friction (security review, performance review, naming conventions, accessibility, API design) and create persona-specific reviewer agents for each. The expensive part is writing the persona documentation; the cheap part is the agent running it on every push. For Memric specifically: the same pattern can apply to audit deliverables — multiple persona-reviewer agents (CIO-perspective, dissenter-perspective, post-mortem-perspective) each reviewing the audit report from their lens before final delivery.
