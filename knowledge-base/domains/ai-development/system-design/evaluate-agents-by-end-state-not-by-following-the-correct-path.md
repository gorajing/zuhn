---
id: INS-260410-A27C
domain: ai-development
topic: system-design
title: 'Evaluate agents by end state, not by following the ''correct'' path'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - llm-judge
  - testing
  - non-determinism
sources:
  - type: blog
    title: How we built our multi-agent research system
    url: 'https://www.anthropic.com/engineering/multi-agent-research-system'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because agents are non-deterministic across runs, grade final outputs with
    an LLM judge on a rubric and start with ~20 real queries — not hundreds of
    rigid test cases.
  standard: >-
    Traditional test suites assume a correct path: given input X, follow steps
    Y, produce Z. Multi-agent systems break this — one agent may search three
    sources, another ten, reaching the same answer via different tools.
    Step-by-step validation is therefore the wrong abstraction; outcome
    validation is the right one.


    Anthropic's practical recipe: (1) Start evaluating immediately with ~20
    queries from real usage — early in development, prompt tweaks can swing
    success rates from 30% to 80%, so tiny eval sets already have signal; don't
    wait for a 'proper' 500-case eval. (2) Use a single LLM-as-judge call that
    grades multiple dimensions (factual accuracy, citation accuracy,
    completeness, source quality, tool efficiency) into one 0.0–1.0 score plus
    pass/fail — they tried multi-judge setups and found single-judge more
    consistent and better aligned with humans. (3) Keep human testers in the
    loop anyway — humans caught that early agents preferred SEO content farms
    over authoritative sources, a bias the automated evals missed.


    For stateful agents specifically, evaluate end state rather than per-turn:
    check whether the world ended up in the correct configuration, not whether
    each intermediate step matched a script.
stance: >-
  Multi-agent systems take different valid paths to the same answer, so
  evaluation must judge outcomes and reasonableness of process — never
  prescribed step sequences.
related:
  - INS-260323-2E51
  - INS-260410-E977
  - INS-260410-3601
  - INS-260410-AF66
  - PRI-260328-F723
  - INS-260410-E658
  - INS-260410-566F
---
Traditional test suites assume a correct path: given input X, follow steps Y, produce Z. Multi-agent systems break this — one agent may search three sources, another ten, reaching the same answer via different tools. Step-by-step validation is therefore the wrong abstraction; outcome validation is the right one.

Anthropic's practical recipe: (1) Start evaluating immediately with ~20 queries from real usage — early in development, prompt tweaks can swing success rates from 30% to 80%, so tiny eval sets already have signal; don't wait for a 'proper' 500-case eval. (2) Use a single LLM-as-judge call that grades multiple dimensions (factual accuracy, citation accuracy, completeness, source quality, tool efficiency) into one 0.0–1.0 score plus pass/fail — they tried multi-judge setups and found single-judge more consistent and better aligned with humans. (3) Keep human testers in the loop anyway — humans caught that early agents preferred SEO content farms over authoritative sources, a bias the automated evals missed.

For stateful agents specifically, evaluate end state rather than per-turn: check whether the world ended up in the correct configuration, not whether each intermediate step matched a script.
