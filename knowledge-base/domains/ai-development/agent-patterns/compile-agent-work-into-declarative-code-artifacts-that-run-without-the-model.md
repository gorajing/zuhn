---
id: INS-260625-0492
domain: ai-development
topic: agent-patterns
title: Compile agent work into declarative code artifacts that run without the model
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - code-generation
  - reliability
  - agent-patterns
  - determinism
  - cost-control
sources:
  - type: youtube
    title: >-
      Why Can't Anyone Answer Questions About the Business? — Garrett Galow,
      WorkOS
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=iUWwcG-C8OU'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Studio's agent builds reusable 'widgets' — sandboxed JavaScript with
    embedded queries — so once created, refreshing the dashboard re-runs
    deterministic code, not the LLM.
  standard: >-
    WorkOS distinguishes sharply between the agent answering a one-off question
    and the agent producing a durable tool. The durable form is a 'widget':
    sandboxed code (UI + API calls + the query) that the agent writes once and
    that then runs on its own. 'The LLM's not involved once the widget is
    developed' — hitting refresh just re-executes the JavaScript against the
    data source. This buys two things at once. First, reliability: a frozen
    query can't drift or hallucinate differently each run, and user inputs flow
    through declarative code rather than being re-parsed by a stochastic model.
    Second, cost: 'the widgets themselves once they're generated are
    declarative, so you're not paying the LLM cost every time.' The pattern is
    to use the model for the hard, ambiguous compilation step — turning intent
    into working code — and then leave the model entirely out of the
    steady-state runtime loop. This connects to the broader 'code mode' idea
    ([[code-mode-have-agents-generate-code-to-run-not-call-individual-tools]]):
    the agent's most valuable output is often reusable code, not a one-shot
    answer.
stance: >-
  An agent's successful output should be frozen into deterministic code that
  executes model-free thereafter, not re-run through the LLM on every
  invocation.
related:
  - INS-260605-7B06
  - INS-260605-3206
  - INS-260605-3163
  - INS-260605-25B2
  - INS-260605-2A69
---
WorkOS distinguishes sharply between the agent answering a one-off question and the agent producing a durable tool. The durable form is a 'widget': sandboxed code (UI + API calls + the query) that the agent writes once and that then runs on its own. 'The LLM's not involved once the widget is developed' — hitting refresh just re-executes the JavaScript against the data source. This buys two things at once. First, reliability: a frozen query can't drift or hallucinate differently each run, and user inputs flow through declarative code rather than being re-parsed by a stochastic model. Second, cost: 'the widgets themselves once they're generated are declarative, so you're not paying the LLM cost every time.' The pattern is to use the model for the hard, ambiguous compilation step — turning intent into working code — and then leave the model entirely out of the steady-state runtime loop. This connects to the broader 'code mode' idea ([[code-mode-have-agents-generate-code-to-run-not-call-individual-tools]]): the agent's most valuable output is often reusable code, not a one-shot answer.
