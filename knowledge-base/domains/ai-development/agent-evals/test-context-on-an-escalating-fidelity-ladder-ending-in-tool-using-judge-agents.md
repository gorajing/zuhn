---
id: INS-260626-AF37
domain: ai-development
topic: agent-evals
title: >-
  Test context on an escalating fidelity ladder, ending in tool-using
  judge-agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - llm-as-judge
  - context-engineering
  - end-to-end-testing
  - linting
  - agentic-testing
sources:
  - type: youtube
    title: 'Context Is the New Code — Patrick Debois, Tessl'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=bSG9wUYaHWU'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Build context tests in tiers — lint the spec, check comprehension, judge
    conventions with an LLM, then give the judge tools so it actually runs the
    result.
  standard: >-
    Debois lays out testing context as a fidelity ladder borrowed from code
    testing. The cheapest tier is linting — validating a skill against its
    format spec (description present, length within limits), the equivalent of
    IDE squiggles. Next is a 'Grammarly for context' comprehension check: ask an
    LLM whether the context is verbose and explicit enough to be understood, and
    act on the gaps. Above that, an LLM-as-judge checks whether generated
    artifacts honor team-specific conventions (e.g. 'does this endpoint start
    with /awesome?') that no base model would produce without your context —
    proving the context, not just the model, did the work.


    The top rung is the key move: bind the judge to tools so it becomes an agent
    that executes in a sandbox — running the actual curl against a live endpoint
    rather than only inspecting the file. That converts a static check into a
    real end-to-end test scoped to a specific commit and a specific piece of
    context, letting you answer 'did this context make a difference, yes or no?'
    The ladder lets you spend cheap checks broadly and reserve expensive
    executing judges for the cases where only running the thing tells the truth.
stance: >-
  Context should be tested with an escalating ladder of evals — spec-linting,
  comprehension checks, convention judges, and finally judge-agents that execute
  in a sandbox for true end-to-end verification.
related:
  - INS-260605-B44B
  - PRI-260405-3080
  - INS-260605-EC51
  - INS-260605-BDFF
  - INS-260605-C223
---
Debois lays out testing context as a fidelity ladder borrowed from code testing. The cheapest tier is linting — validating a skill against its format spec (description present, length within limits), the equivalent of IDE squiggles. Next is a 'Grammarly for context' comprehension check: ask an LLM whether the context is verbose and explicit enough to be understood, and act on the gaps. Above that, an LLM-as-judge checks whether generated artifacts honor team-specific conventions (e.g. 'does this endpoint start with /awesome?') that no base model would produce without your context — proving the context, not just the model, did the work.

The top rung is the key move: bind the judge to tools so it becomes an agent that executes in a sandbox — running the actual curl against a live endpoint rather than only inspecting the file. That converts a static check into a real end-to-end test scoped to a specific commit and a specific piece of context, letting you answer 'did this context make a difference, yes or no?' The ladder lets you spend cheap checks broadly and reserve expensive executing judges for the cases where only running the thing tells the truth.
