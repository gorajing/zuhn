---
id: INS-260410-9EFC
domain: ai-development
topic: agent-patterns
title: Treat context as a finite resource with diminishing marginal returns
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - attention
  - context-rot
  - token-budget
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
    Context is not free real estate — every token spent depletes the model's
    attention budget, so curate aggressively.
  standard: >-
    The transformer architecture creates n² pairwise relationships across n
    tokens, so as context grows, attention gets stretched thin and recall
    degrades. This 'context rot' is architectural, not a bug — it emerges across
    all models because training data skews toward shorter sequences. The
    practical implication is that you should treat context like a scarce
    resource: find the smallest possible set of high-signal tokens that maximize
    the likelihood of the desired outcome. 'Minimal' doesn't mean 'short' — it
    means no junk tokens. Bigger context windows don't fix this; they just push
    the cliff further out.
stance: >-
  LLM context windows degrade in recall and reasoning quality as token count
  grows, so every token added depletes a finite 'attention budget' and must be
  justified.
related:
  - INS-260322-BEA3
  - INS-260405-94A0
  - INS-260423-5F2F
  - INS-260405-B7C7
  - INS-260330-01D5
---
The transformer architecture creates n² pairwise relationships across n tokens, so as context grows, attention gets stretched thin and recall degrades. This 'context rot' is architectural, not a bug — it emerges across all models because training data skews toward shorter sequences. The practical implication is that you should treat context like a scarce resource: find the smallest possible set of high-signal tokens that maximize the likelihood of the desired outcome. 'Minimal' doesn't mean 'short' — it means no junk tokens. Bigger context windows don't fix this; they just push the cliff further out.
