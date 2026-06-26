---
id: INS-260605-7711
domain: ai-development
topic: system-design
title: Build custom tracing tools that non-engineers can read
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - observability
  - tracing
  - internal-tools
  - agent-debugging
sources:
  - type: youtube
    title: 'Feedback Loops are All You Need — Mehedi Hassan, Granola'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ON5LIT0M4do'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Build bespoke tracing that structures the data your way and serves
    product/data/CX — not just engineers — because LLMs make such internal tools
    cheap to one-shot.
  standard: >-
    Granola built their own tracing tools giving complete visibility over every
    tool call, the reasoning behind each call, and cost, structured exactly how
    they want it. The crucial design choice is the audience: the UI serves
    product, data, and CX teams, not just engineers, so nobody has to write
    complex CloudWatch queries to learn why something failed. Their founder
    personally follows the agent loop front-to-back to pinpoint failures.


    The enabling shift is economic. Previously you'd reach for a SaaS
    observability provider because you 'simply wouldn't have the time' to build
    your own. Now LLMs let you one-shot a tool tailored to your exact data model
    and your team's needs. The recommendation: persist traces to a DB, wrap your
    AI SDK, and invest most in the front-end, since that's what people actually
    use to diagnose what breaks. OpenTelemetry remains an option, but the value
    is in the bespoke, role-readable surface.
stance: >-
  Building your own LLM tracing tooling shaped for your data and readable by
  non-engineers is now worth the time because LLMs let you one-shot it.
related:
  - INS-260605-C0BF
  - INS-260605-93B8
  - INS-260626-3396
  - INS-260409-2906
  - INS-260514-D155
---
Granola built their own tracing tools giving complete visibility over every tool call, the reasoning behind each call, and cost, structured exactly how they want it. The crucial design choice is the audience: the UI serves product, data, and CX teams, not just engineers, so nobody has to write complex CloudWatch queries to learn why something failed. Their founder personally follows the agent loop front-to-back to pinpoint failures.

The enabling shift is economic. Previously you'd reach for a SaaS observability provider because you 'simply wouldn't have the time' to build your own. Now LLMs let you one-shot a tool tailored to your exact data model and your team's needs. The recommendation: persist traces to a DB, wrap your AI SDK, and invest most in the front-end, since that's what people actually use to diagnose what breaks. OpenTelemetry remains an option, but the value is in the bespoke, role-readable surface.
