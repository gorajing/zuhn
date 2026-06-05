---
id: INS-260514-F74B
domain: ai-development
topic: system-design
title: >-
  Reduce pattern: drop tool-call contents to recover context instantly without
  compaction latency
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-management
  - compaction-alternative
  - reduce-pattern
  - tool-call-pruning
  - latency
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
    Skip slow LLM compaction — instantly drop tool-call contents and thinking
    blocks while keeping user+assistant turns. Saves 30s-2min per compaction and
    preserves the decision chain.
  standard: >-
    Max built (and Mario praised) a Pi extension called 'reduce' that addresses
    a specific pain point: standard LLM-driven compaction takes 30 seconds to 2
    minutes because you're asking a model to read the entire context and produce
    a summary — slow, expensive, and stochastic. The reduce pattern is
    mechanical: keep the user-and-assistant chat history exactly as-is, but drop
    tool-call contents (the long file dumps, the grep outputs, the bash stdout)
    and optionally drop thinking blocks. Configurable to keep tool calls +
    assistant comments if you want, but the default (user + assistant only)
    handles the right cases. Why this works: the model's user-and-assistant
    turns capture the decisions that were made; the tool calls are evidence that
    was gathered to inform those decisions, but the decisions themselves
    preserve the relevant signal. You lose the ability to re-derive WHY a
    decision was made from raw evidence, but you keep WHAT was decided and the
    reasoning chain. The tradeoff: prompt cache is lost (anything cached against
    the deleted tokens gets invalidated), but at 23% out of 1M tokens context,
    instant reduction beats waiting 30 seconds for compaction. Architectural
    principle: not every context-management operation needs to go through an LLM
    — many are pure data transformations that should be implemented as
    deterministic code. This generalizes: any 'AI does X' that is actually
    'apply rule Y to the structured data' should be implemented as code, not a
    prompt.
stance: >-
  Instead of waiting 30s-2min for an LLM to summarize and compact a long
  context, the better pattern is to mechanically drop tool-call contents and
  thinking blocks while keeping the user-and-assistant chat history — context
  shrinks instantly, the reasoning chain remains intact, and you lose nothing
  important because user+assistant turns capture the decisions.
related:
  - INS-260320-06EF
  - INS-260329-CD02
  - INS-260410-0B73
  - INS-260605-9925
  - INS-260323-E15F
  - INS-260605-1A2D
  - PRI-260406-A6A2
  - INS-260329-AA2C
---
Max built (and Mario praised) a Pi extension called 'reduce' that addresses a specific pain point: standard LLM-driven compaction takes 30 seconds to 2 minutes because you're asking a model to read the entire context and produce a summary — slow, expensive, and stochastic. The reduce pattern is mechanical: keep the user-and-assistant chat history exactly as-is, but drop tool-call contents (the long file dumps, the grep outputs, the bash stdout) and optionally drop thinking blocks. Configurable to keep tool calls + assistant comments if you want, but the default (user + assistant only) handles the right cases. Why this works: the model's user-and-assistant turns capture the decisions that were made; the tool calls are evidence that was gathered to inform those decisions, but the decisions themselves preserve the relevant signal. You lose the ability to re-derive WHY a decision was made from raw evidence, but you keep WHAT was decided and the reasoning chain. The tradeoff: prompt cache is lost (anything cached against the deleted tokens gets invalidated), but at 23% out of 1M tokens context, instant reduction beats waiting 30 seconds for compaction. Architectural principle: not every context-management operation needs to go through an LLM — many are pure data transformations that should be implemented as deterministic code. This generalizes: any 'AI does X' that is actually 'apply rule Y to the structured data' should be implemented as code, not a prompt.
