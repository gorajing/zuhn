---
id: INS-260605-9F16
domain: ai-development
topic: system-building
title: >-
  Eval with scenario suites, LLM-as-judge, and domain-expert SMEs over a
  model-swap layer
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - llm-as-judge
  - subject-matter-experts
  - openrouter
  - model-evaluation
sources:
  - type: youtube
    title: 'Building a Chess Coach — Anant Dole and Asbjorn Steinskog, Take Take Take'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=FlzpEGHNVKQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    16 hand-built chess scenarios, an LLM judge, two strong-player SMEs, and
    OpenRouter for swapping models — the best model still only passes about 75%.
  standard: >-
    Play Magnus built 16 scenarios around themes like tactical patterns,
    blunders, and hallucination-limiting (e.g., asserting the model mentions a
    knight fork that exists in a position). They extract scenarios from real
    games, use LLM-as-a-judge to score, and run candidate models through
    OpenRouter so they can quickly swap in new Gemini, GPT-5, or Claude versions
    as the rapid release cadence demands. Crucially, the final arbiters are the
    two builders, both strong chess players, who compare the model's output to
    how they would actually calculate and play — and they advise teams in other
    domains to recruit SME evaluators, who are often not the people building the
    system.


    Two sobering data points anchor the methodology: their benchmark Gemini
    Flash passes only ~75% of scenarios, Claude with more thinking lands under
    60% but far slower, and GPT-5 mini trades accuracy for latency — so no model
    passes everything, and the suite's job is to keep surfacing the tricky cases
    a new model might finally crack. The architecture combines automated evals
    for breadth and speed with human domain expertise for the judgments
    automation can't yet make reliably, behind a swap layer that decouples the
    eval harness from any single provider.
stance: >-
  A small curated scenario suite scored by an LLM judge and validated by genuine
  domain experts, run through a provider-agnostic routing layer, is what lets a
  team safely swap in new models as they ship.
related:
  - INS-260408-B5EC
  - INS-260605-D1F1
  - INS-260626-3E1C
  - INS-260605-6C0C
  - INS-260413-7816
---
Play Magnus built 16 scenarios around themes like tactical patterns, blunders, and hallucination-limiting (e.g., asserting the model mentions a knight fork that exists in a position). They extract scenarios from real games, use LLM-as-a-judge to score, and run candidate models through OpenRouter so they can quickly swap in new Gemini, GPT-5, or Claude versions as the rapid release cadence demands. Crucially, the final arbiters are the two builders, both strong chess players, who compare the model's output to how they would actually calculate and play — and they advise teams in other domains to recruit SME evaluators, who are often not the people building the system.

Two sobering data points anchor the methodology: their benchmark Gemini Flash passes only ~75% of scenarios, Claude with more thinking lands under 60% but far slower, and GPT-5 mini trades accuracy for latency — so no model passes everything, and the suite's job is to keep surfacing the tricky cases a new model might finally crack. The architecture combines automated evals for breadth and speed with human domain expertise for the judgments automation can't yet make reliably, behind a swap layer that decouples the eval harness from any single provider.
