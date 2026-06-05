---
id: INS-260605-AD25
domain: ai-development
topic: agent-patterns
title: >-
  Validate in a fresh sub-agent context, not the same context that wrote the
  code
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ralph-loops
  - sub-agents
  - validation
  - confirmation-bias
  - code-review
sources:
  - type: youtube
    title: 'Ralph Loops: Build Dumb AI Loops That Ship — Chris Parsons, Cherrypick'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=2TLXsxkz0zI'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Move the validation step into a fresh sub-agent — an agent checking its own
    work in the same context just pats itself on the back.
  standard: >-
    An audience member reported that as soon as he moved his loop's validation
    step to sub-agents, it 'started finding things' — whereas validating in the
    same context with the same history, the agent 'just pats itself on the back:
    yeah, you did good.' Parsons agrees this is real confirmation bias: an agent
    that wrote the code a minute ago is primed to declare it fine. A sub-agent
    starts with only a small, fresh chunk of context and no investment in the
    prior output, so it reviews more honestly and powerfully. This is also why
    Anthropic's bundled 'simplify' skill runs three independent sub-agents over
    recent changes. The general lesson: separate the actor and the critic into
    different contexts, and bias toward throwing away context to get an genuine
    contrarian second look.
stance: >-
  An agent validating its own work in the same context exhibits confirmation
  bias; spawning a fresh sub-agent for validation actually catches errors.
related:
  - INS-260605-55A6
  - INS-260605-34B0
  - PRI-260406-B9B4
  - INS-260409-6833
  - INS-260605-800F
---
An audience member reported that as soon as he moved his loop's validation step to sub-agents, it 'started finding things' — whereas validating in the same context with the same history, the agent 'just pats itself on the back: yeah, you did good.' Parsons agrees this is real confirmation bias: an agent that wrote the code a minute ago is primed to declare it fine. A sub-agent starts with only a small, fresh chunk of context and no investment in the prior output, so it reviews more honestly and powerfully. This is also why Anthropic's bundled 'simplify' skill runs three independent sub-agents over recent changes. The general lesson: separate the actor and the critic into different contexts, and bias toward throwing away context to get an genuine contrarian second look.
