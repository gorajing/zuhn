---
id: INS-260514-AE82
domain: ai-development
topic: architecture
title: >-
  The harness, not the model, is the highest-leverage place to invest
  engineering effort
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - harness-engineering
  - system-prompts
  - performance-engineering
  - pi.dev
  - leverage-investment
sources:
  - type: youtube
    title: Pi.dev explained by its creators | AI Agents Under the Hood
    author: Merantix AI Campus
    url: 'https://youtu.be/BQ_Es8k650I'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Harness engineering (system-prompt design, tool-call orchestration) can lift
    a model's performance 30-40% — invest there before chasing a better model.
  standard: >-
    Max's framing of Pi.dev's core philosophy: 'The power comes from the
    harness. Harnesses can improve a specific model's performance.' Concrete
    example mentioned in the talk: Grok from Coming AI improved its benchmark
    score by 30-40% just from adding instructions to its system prompt about how
    to use tool calls. The implication is structural — the harness is a
    higher-leverage target for engineering effort than the model itself, because
    (1) you can iterate on the harness in hours while waiting months for a
    better model, (2) harness improvements compose with future model
    improvements rather than being obviated, (3) most teams under-invest here
    because the harness is invisible to users while the model brand is what gets
    celebrated. The practical move: when you're frustrated with model
    performance, your first hypothesis should be 'is the harness asking the
    right questions in the right format?' before 'do I need a better model?'
    Lopopolo (OpenAI) made the same argument from inside the harness: lint
    failures as prompts, persona reviewer agents, write tests about source-code
    structure not just behavior — all are harness investments. The Pi/Mario
    philosophy and the Lopopolo OpenAI philosophy converge on the same
    conclusion despite very different stacks: the model is a commodity, the
    harness is the moat.
stance: >-
  Adding well-designed tool-call instructions and structural guidance to a
  coding harness can improve a specific model's benchmark performance by 30-40%
  — meaning the harness is a higher-leverage investment than waiting for a
  better model, and most teams under-invest here because the harness is
  invisible while the model is the brand.
related:
  - PRI-260320-6847
  - INS-260327-30E4
  - INS-260328-FFC3
  - INS-260403-EFAF
  - INS-260403-C1F5
  - INS-260403-E6F0
  - INS-260409-0846
  - INS-260501-17BB
  - INS-260501-0662
  - INS-260514-AC43
---
Max's framing of Pi.dev's core philosophy: 'The power comes from the harness. Harnesses can improve a specific model's performance.' Concrete example mentioned in the talk: Grok from Coming AI improved its benchmark score by 30-40% just from adding instructions to its system prompt about how to use tool calls. The implication is structural — the harness is a higher-leverage target for engineering effort than the model itself, because (1) you can iterate on the harness in hours while waiting months for a better model, (2) harness improvements compose with future model improvements rather than being obviated, (3) most teams under-invest here because the harness is invisible to users while the model brand is what gets celebrated. The practical move: when you're frustrated with model performance, your first hypothesis should be 'is the harness asking the right questions in the right format?' before 'do I need a better model?' Lopopolo (OpenAI) made the same argument from inside the harness: lint failures as prompts, persona reviewer agents, write tests about source-code structure not just behavior — all are harness investments. The Pi/Mario philosophy and the Lopopolo OpenAI philosophy converge on the same conclusion despite very different stacks: the model is a commodity, the harness is the moat.
