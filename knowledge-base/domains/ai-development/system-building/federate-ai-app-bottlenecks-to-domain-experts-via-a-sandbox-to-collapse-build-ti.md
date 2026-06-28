---
id: INS-260628-62C4
domain: ai-development
topic: system-building
title: >-
  Federate AI-app bottlenecks to domain experts via a sandbox to collapse build
  time
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - internal-tools
  - domain-experts
  - sandbox
  - developer-velocity
  - extraction
sources:
  - type: youtube
    title: >-
      How BlackRock Builds Custom Knowledge Apps at Scale — Vaibhav Page &
      Infant Vasanth, BlackRock
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=08mH36_NVos'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    BlackRock cut complex-app build time from 3–8 months to a couple of days by
    exposing prompt/template/strategy/transform components in a sandbox that
    domain experts operate themselves, then auto-spinning the result into an app
    via a cloud-native 'app factory.'
  standard: >-
    BlackRock found that building a single complex extraction app took 3–8
    months because each iteration—prompt engineering, choosing an LLM strategy,
    defining extraction templates, wiring transform/execute logic—round-tripped
    through engineering while the actual domain knowledge lived 'in the human
    head' of the business teams (equity, ETF, new-issue ops). The fix was not
    better models but a reorganization of who touches which component: a
    'sandbox' that surfaces each bottleneck as a modular, configurable piece the
    domain expert can manipulate directly, plus an 'app factory'—a cloud-native
    operator that takes the finished definition and spins out a deployed app.


    The key design principle is that iteration speed is gated by handoff
    latency, not by model capability. By federating the painful pieces (prompt
    creation, extraction templates, LLM-strategy choice, executors) to the
    people who hold the domain knowledge, you remove the engineer-as-bottleneck
    from the inner loop. The expert moves a modular component across iterations
    quickly and only passes the final definition to the factory. This is what
    compressed months into days.


    The transferable lesson for any organization building many internal AI apps:
    identify the components that require domain knowledge to configure and make
    them self-serve for domain experts, while engineering owns the platform
    (data ingestion, orchestration, deployment) rather than each app's content.
    The bottleneck to scaling internal AI is organizational coupling between
    domain knowledge and engineering, and a sandbox is the decoupling mechanism.
stance: >-
  The fastest way to scale internal AI apps is to hand the modular
  bottlenecks—prompts, extraction templates, LLM strategy, transform logic—to
  domain experts in a sandbox rather than keeping them inside engineering.
related:
  - INS-260329-200A
  - INS-260403-C37B
  - INS-260514-F073
  - INS-260525-9B7B
  - INS-260605-0266
---
BlackRock found that building a single complex extraction app took 3–8 months because each iteration—prompt engineering, choosing an LLM strategy, defining extraction templates, wiring transform/execute logic—round-tripped through engineering while the actual domain knowledge lived 'in the human head' of the business teams (equity, ETF, new-issue ops). The fix was not better models but a reorganization of who touches which component: a 'sandbox' that surfaces each bottleneck as a modular, configurable piece the domain expert can manipulate directly, plus an 'app factory'—a cloud-native operator that takes the finished definition and spins out a deployed app.

The key design principle is that iteration speed is gated by handoff latency, not by model capability. By federating the painful pieces (prompt creation, extraction templates, LLM-strategy choice, executors) to the people who hold the domain knowledge, you remove the engineer-as-bottleneck from the inner loop. The expert moves a modular component across iterations quickly and only passes the final definition to the factory. This is what compressed months into days.

The transferable lesson for any organization building many internal AI apps: identify the components that require domain knowledge to configure and make them self-serve for domain experts, while engineering owns the platform (data ingestion, orchestration, deployment) rather than each app's content. The bottleneck to scaling internal AI is organizational coupling between domain knowledge and engineering, and a sandbox is the decoupling mechanism.
