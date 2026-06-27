---
id: INS-260626-8080
domain: ai-development
topic: system-design
title: >-
  When AI agents become your API's primary consumers, you must design for abuse,
  not just access
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - api-design
  - rate-limiting
  - agents
  - scaling
  - platform-readiness
  - abuse-prevention
sources:
  - type: youtube
    title: MCP = Mega Context Problem - Matt Carey
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=YBYUvGOuotE'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat AI agents as your dominant, abuse-prone API consumers — they run your
    endpoints in for-loops across many sandboxes, so rate limiting and load
    protection become first-class requirements.
  standard: >-
    Carey's framing is that 'your users are AI' and AI is very good at writing
    code, so agents will interact with your platform by generating and running
    code against it — through MCP, CLIs, or raw HTTP. The consequence for
    service owners: an agent can trivially run your API in a for-loop across
    multiple sandboxes simultaneously and hammer you, so your endpoints 'have to
    be ready to take a beating' with robust rate limiting and load protection.
    This inverts the assumption that API consumers are bounded, well-behaved
    human-driven clients. On the client side he predicts further shifts —
    programmatic tool calling, saved 'mini-scripts' (e.g. a self-healing
    web-scraping cron the agent rewrites when it breaks), and a move to
    stateless, cloud-native agent loops as agent counts explode to ~100 per
    person. The actionable core: if you publish an API in the agent era, budget
    for adversarial, high-concurrency, code-driven traffic as the default case
    rather than the exception.
stance: >-
  APIs whose main users are agents must be hardened with aggressive rate
  limiting because agents will hammer endpoints in parallel loops across many
  sandboxes.
related:
  - INS-260322-2E33
  - INS-260409-56A3
  - INS-260605-41AE
  - INS-260626-A05F
  - INS-260605-74CC
  - INS-260627-FEB4
  - INS-260626-7D73
  - INS-260627-F578
---
Carey's framing is that 'your users are AI' and AI is very good at writing code, so agents will interact with your platform by generating and running code against it — through MCP, CLIs, or raw HTTP. The consequence for service owners: an agent can trivially run your API in a for-loop across multiple sandboxes simultaneously and hammer you, so your endpoints 'have to be ready to take a beating' with robust rate limiting and load protection. This inverts the assumption that API consumers are bounded, well-behaved human-driven clients. On the client side he predicts further shifts — programmatic tool calling, saved 'mini-scripts' (e.g. a self-healing web-scraping cron the agent rewrites when it breaks), and a move to stateless, cloud-native agent loops as agent counts explode to ~100 per person. The actionable core: if you publish an API in the agent era, budget for adversarial, high-concurrency, code-driven traffic as the default case rather than the exception.
