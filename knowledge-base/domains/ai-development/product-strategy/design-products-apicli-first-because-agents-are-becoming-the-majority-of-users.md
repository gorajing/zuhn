---
id: INS-260626-14A2
domain: ai-development
topic: product-strategy
title: >-
  Design products API/CLI-first because agents are becoming the majority of
  users
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents-as-users
  - cli-first
  - api-design
  - developer-tools
  - automation
sources:
  - type: youtube
    title: 'The New Application Layer - Malte Ubl, CTO Vercel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=XKup1pj-34M'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Over 60% of vercel.com page views are now AI agents and platform usage is
    shifting from dashboard clicks to APIs and CLIs, so the agent-facing
    interface, not the UI, is the product surface that matters.
  standard: >-
    Ubl reveals that in a recent 7-day window over 60% of page views on
    vercel.com came from AI agents — humans are now in the minority on their web
    properties. Correspondingly, usage is shifting from people clicking around
    dashboards toward APIs and CLIs. His operating rule: when someone proposes a
    feature with a UI, his first question is 'what's the CLI? how does an agent
    use this?' because UI has become cheap while agent-accessible automation is
    the durable surface.


    The practical mandate is to treat every capability as something an agent
    must be able to invoke programmatically, not just something a human can
    click. This inverts the traditional product priority where UI came first and
    automation was an afterthought. It also changes infrastructure: when most
    code is agent-written, developers have weaker opinions about how it runs in
    production, so platforms must let agent-generated software 'just run' after
    a prompt rather than assuming a human will tune the deployment.
stance: >-
  Software should be built API- and CLI-first because agents, not humans, are
  increasingly the primary consumers of it.
related:
  - INS-260501-0D6D
  - INS-260514-D9DB
  - INS-260626-55E0
  - INS-260410-71B9
  - INS-260605-D710
  - INS-260603-BFEE
---
Ubl reveals that in a recent 7-day window over 60% of page views on vercel.com came from AI agents — humans are now in the minority on their web properties. Correspondingly, usage is shifting from people clicking around dashboards toward APIs and CLIs. His operating rule: when someone proposes a feature with a UI, his first question is 'what's the CLI? how does an agent use this?' because UI has become cheap while agent-accessible automation is the durable surface.

The practical mandate is to treat every capability as something an agent must be able to invoke programmatically, not just something a human can click. This inverts the traditional product priority where UI came first and automation was an afterthought. It also changes infrastructure: when most code is agent-written, developers have weaker opinions about how it runs in production, so platforms must let agent-generated software 'just run' after a prompt rather than assuming a human will tune the deployment.
