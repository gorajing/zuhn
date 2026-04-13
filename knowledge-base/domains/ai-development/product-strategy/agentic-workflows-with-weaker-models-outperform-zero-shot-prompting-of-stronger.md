---
id: INS-260327-33FA
domain: ai-development
topic: product-strategy
title: >-
  Agentic workflows with weaker models outperform zero-shot prompting of
  stronger models
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agentic-workflows
  - agent-patterns
  - model-architecture
  - prompt-engineering
sources:
  - type: youtube
    title: What's next for AI agentic workflows ft. Andrew Ng of AI Fund
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=sal78ACtGTc'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    On the HumanEval coding benchmark, GPT-3.5 with an agentic workflow
    outperformed GPT-4 zero-shot, demonstrating that iteration beats raw model
    capability.
  standard: >-
    Andrew Ng presents data showing GPT-3.5 at 48% zero-shot on HumanEval, GPT-4
    at 67% zero-shot, but GPT-3.5 with an agentic workflow exceeding GPT-4's
    zero-shot performance. The analogy is powerful: zero-shot prompting is like
    asking someone to write an essay without ever using backspace. Agentic
    workflows allow the model to draft, self-critique, test, and iterate.


    Ng categorizes four design patterns: (1) Reflection -- having the model
    critique its own output and iterate, (2) Tool use -- calling external
    functions, (3) Planning -- multi-step reasoning about which actions to take,
    and (4) Multi-agent collaboration -- multiple models with different prompts
    debating or collaborating. The immediate takeaway for builders: before
    waiting for GPT-5, wrap agentic patterns around your current model. Fast
    token generation becomes especially important because agents iterate many
    times, making throughput more valuable than peak quality.
stance: >-
  Wrapping an iterative agentic workflow around GPT-3.5 produces better results
  than zero-shot prompting of GPT-4, meaning agent architecture matters more
  than base model capability.
related:
  - INS-260326-7F79
  - INS-260403-D090
  - PRI-260403-7585
  - PRI-260406-3EF8
  - PRI-260328-F723
  - INS-260330-EC22
  - INS-260405-AFF7
  - INS-260410-F167
  - INS-260413-AD37
---
Andrew Ng presents data showing GPT-3.5 at 48% zero-shot on HumanEval, GPT-4 at 67% zero-shot, but GPT-3.5 with an agentic workflow exceeding GPT-4's zero-shot performance. The analogy is powerful: zero-shot prompting is like asking someone to write an essay without ever using backspace. Agentic workflows allow the model to draft, self-critique, test, and iterate.

Ng categorizes four design patterns: (1) Reflection -- having the model critique its own output and iterate, (2) Tool use -- calling external functions, (3) Planning -- multi-step reasoning about which actions to take, and (4) Multi-agent collaboration -- multiple models with different prompts debating or collaborating. The immediate takeaway for builders: before waiting for GPT-5, wrap agentic patterns around your current model. Fast token generation becomes especially important because agents iterate many times, making throughput more valuable than peak quality.
