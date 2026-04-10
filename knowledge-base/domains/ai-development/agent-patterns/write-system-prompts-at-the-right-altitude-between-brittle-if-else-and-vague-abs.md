---
id: INS-260410-F259
domain: ai-development
topic: agent-patterns
title: >-
  Write system prompts at the right altitude — between brittle if-else and vague
  abstraction
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompting
  - system-prompts
  - context-engineering
sources:
  - type: blog
    title: Effective context engineering for AI agents
    url: >-
      https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    System prompts fail at two extremes: brittle hardcoded if-else logic or
    vague high-level guidance — aim for the middle altitude.
  standard: >-
    Anthropic identifies two failure modes in system prompts. First, engineers
    hardcode complex if-else logic to elicit exact behaviors, creating fragility
    and maintenance debt. Second, engineers write vague high-level guidance that
    fails to give concrete signals or falsely assumes shared context. The right
    altitude is specific enough to guide behavior but flexible enough to let the
    model apply heuristics. Practically: start with a minimal prompt on the best
    available model, then add clear instructions and examples based on observed
    failure modes — don't preemptively stuff edge cases.
stance: >-
  Effective system prompts strike a Goldilocks zone of being specific enough to
  guide behavior but flexible enough to let the model use heuristics, neither
  hardcoding logic nor assuming shared context.
related:
  - INS-260403-7D7A
  - INS-260325-29D5
  - PRI-260405-0676
  - PRI-260328-4144
  - INS-260403-9362
---
Anthropic identifies two failure modes in system prompts. First, engineers hardcode complex if-else logic to elicit exact behaviors, creating fragility and maintenance debt. Second, engineers write vague high-level guidance that fails to give concrete signals or falsely assumes shared context. The right altitude is specific enough to guide behavior but flexible enough to let the model apply heuristics. Practically: start with a minimal prompt on the best available model, then add clear instructions and examples based on observed failure modes — don't preemptively stuff edge cases.
