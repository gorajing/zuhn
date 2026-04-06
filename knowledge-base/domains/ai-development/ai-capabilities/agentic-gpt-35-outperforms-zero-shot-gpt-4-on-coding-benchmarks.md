---
id: INS-260326-7F79
domain: ai-development
topic: ai-capabilities
title: Agentic GPT-3.5 outperforms zero-shot GPT-4 on coding benchmarks
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - agentic-workflows
  - model-performance
  - benchmarks
  - workflow-architecture
sources:
  - type: youtube
    title: >-
      Andrew Ng Explores The Rise Of AI Agents And Agentic Reasoning | BUILD
      2024 Keynote
    author: Snowflake Inc.
    url: 'https://www.youtube.com/watch?v=KrRD7r7y7NY'
date_extracted: '2026-03-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    On the HumanEval coding benchmark, GPT-3.5 with agentic workflows scored
    approximately 95% versus GPT-4 zero-shot at 67%, demonstrating that workflow
    design can matter more than model scale.
  standard: >-
    Ng presents one of the most striking findings in practical AI: on the
    HumanEval coding benchmark, GPT-3.5 zero-shot scored 48%, GPT-4 zero-shot
    scored 67%, but GPT-3.5 with an agentic workflow achieved approximately 95%.
    The improvement from adding agentic workflows to a weaker model dwarfed the
    improvement from upgrading to a stronger model.


    This has profound implications for AI system builders. It suggests that
    investing in workflow architecture — reflection loops, tool integration,
    iterative refinement — can yield better returns than waiting for or paying
    for the latest frontier model. The finding also implies that the ceiling for
    current models is much higher than zero-shot benchmarks suggest. Most users
    interact with LLMs in zero-shot mode (type prompt, get response), which is
    analogous to asking someone to write an essay from first word to last
    without ever using backspace. Agentic workflows let AI systems think,
    research, draft, critique, and revise — the way humans actually produce
    quality work.
stance: >-
  Wrapping a weaker model in agentic workflows produces better results than
  using a stronger model with zero-shot prompting, meaning workflow architecture
  matters more than raw model capability.
related:
  - INS-260327-33FA
  - PRI-260403-7585
  - PRI-260328-F723
  - INS-260330-EC22
  - INS-260326-2410
  - INS-260327-2101
  - INS-260327-D020
evidence:
  - id: INS-260327-2101
    type: CHALLENGES
    classified_at: '2026-04-02'
---
Ng presents one of the most striking findings in practical AI: on the HumanEval coding benchmark, GPT-3.5 zero-shot scored 48%, GPT-4 zero-shot scored 67%, but GPT-3.5 with an agentic workflow achieved approximately 95%. The improvement from adding agentic workflows to a weaker model dwarfed the improvement from upgrading to a stronger model.

This has profound implications for AI system builders. It suggests that investing in workflow architecture — reflection loops, tool integration, iterative refinement — can yield better returns than waiting for or paying for the latest frontier model. The finding also implies that the ceiling for current models is much higher than zero-shot benchmarks suggest. Most users interact with LLMs in zero-shot mode (type prompt, get response), which is analogous to asking someone to write an essay from first word to last without ever using backspace. Agentic workflows let AI systems think, research, draft, critique, and revise — the way humans actually produce quality work.
