---
id: INS-260627-8C56
domain: ai-development
topic: agent-patterns
title: 'Build a general agent with a sandbox, not verticalized products'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-architecture
  - general-agents
  - sandbox
  - product-strategy
  - manus
sources:
  - type: youtube
    title: >-
      Building Intelligent Research Agents with Manus - Ivan Leo, Manus AI (now
      Meta Superintelligence)
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=xz0-brt56L8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A general agent that can write and execute code in its own sandbox collapses
    what used to be a multi-tool, multi-deploy build into a single prompt.
  standard: >-
    Manus's core architectural bet is that you build a general agent first and
    layer capabilities (web app generation, browser operation, integrations) on
    top second — rather than shipping narrow verticalized products. The
    demonstrated payoff: building a conference-events site six months ago meant
    standing up a web app, configuring a Chroma vector DB, wiring an embeddings
    key, finding and running a coding agent, then solving deployment. With a
    general agent it 'just works' from one prompt, because the agent owns a full
    Docker sandbox where it can install anything (Redis, BullMQ, Stripe
    webhooks), write a Python script, run it, and test it.


    The deeper reason this works is that a sandbox plus the ability to
    write-run-test code produces emergent capability the builder never
    explicitly programmed. Ivan's pickleball example — the agent spun up six
    Selenium instances and scraped a government booking site — was not a feature
    anyone shipped; it fell out of giving a general agent its own compute.
    Verticalized products can't reach these long-tail tasks because each one
    would require a separate build.


    Application: when scoping an agent product, resist the instinct to hard-code
    narrow workflows. Invest in the general substrate (sandbox, code execution,
    broad integrations) and expose it through whatever surface the user already
    lives in. The breadth of solvable problems scales with the generality of the
    substrate, not with the count of pre-built verticals.
stance: >-
  A general AI agent that can write and run code in its own sandbox outperforms
  purpose-built verticalized products across the breadth of tasks users actually
  want.
related:
  - INS-260605-3206
  - INS-260625-0492
  - INS-260626-A05F
  - INS-260627-1FAE
  - INS-260325-D540
  - INS-260627-917D
  - INS-260530-D34F
---
Manus's core architectural bet is that you build a general agent first and layer capabilities (web app generation, browser operation, integrations) on top second — rather than shipping narrow verticalized products. The demonstrated payoff: building a conference-events site six months ago meant standing up a web app, configuring a Chroma vector DB, wiring an embeddings key, finding and running a coding agent, then solving deployment. With a general agent it 'just works' from one prompt, because the agent owns a full Docker sandbox where it can install anything (Redis, BullMQ, Stripe webhooks), write a Python script, run it, and test it.

The deeper reason this works is that a sandbox plus the ability to write-run-test code produces emergent capability the builder never explicitly programmed. Ivan's pickleball example — the agent spun up six Selenium instances and scraped a government booking site — was not a feature anyone shipped; it fell out of giving a general agent its own compute. Verticalized products can't reach these long-tail tasks because each one would require a separate build.

Application: when scoping an agent product, resist the instinct to hard-code narrow workflows. Invest in the general substrate (sandbox, code execution, broad integrations) and expose it through whatever surface the user already lives in. The breadth of solvable problems scales with the generality of the substrate, not with the count of pre-built verticals.
