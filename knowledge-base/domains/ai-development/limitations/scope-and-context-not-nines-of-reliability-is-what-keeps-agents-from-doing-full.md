---
id: INS-260410-B224
domain: ai-development
topic: limitations
title: >-
  Scope and context, not 'nines of reliability,' is what keeps agents from doing
  full days of work
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - agents
  - context
  - scope
  - software-engineering
  - bottlenecks
sources:
  - type: youtube
    title: Is RL + LLMs enough for AGI? — Sholto Douglas & Trenton Bricken
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=64lXQP6cs5M'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Models struggle on real work because they lack context and can't handle
    amorphous multi-file scope, not because they need another 9 of reliability.
  standard: >-
    A year ago, Sholto described what was holding agents back as 'extra nines of
    reliability.' He now explicitly retracts that framing. Looking at current
    Claude Code and similar agents, the real limits are: lack of context,
    inability to do complex multi-file changes, and difficulty handling
    amorphous tasks that require discovery and iteration with the environment.
    When a task has a good feedback loop and scoped context, models are already
    capable at high intellectual complexity.


    This reframes how practitioners should use current agents. If you scaffold
    the model with the right context and prompt, it can do 'much more
    sophisticated things than the average user assumes' — Kelsey Piper's viral
    GeoGuessr prompt is 'insanely long' and explicitly encourages the model to
    generate five hypotheses with probabilities. Users blaming 'the model' for
    failures are often actually blaming their own failure to provide context or
    tools for context-gathering. The practical lesson: before concluding that a
    model can't do a task, audit whether you gave it enough context and a
    feedback mechanism. And for product builders, the next frontier is async
    agent form factors (GitHub integration, Codex) where the human isn't in the
    IDE loop — this dramatically changes how much work you'll delegate because
    you're not bottlenecked on instant reply.
stance: >-
  The bottleneck on long-horizon agentic work is context acquisition and
  multi-file scope, not marginal reliability improvements on single-step tasks.
related:
  - INS-260410-1197
  - INS-260327-E016
  - INS-260403-F4ED
  - PRI-260321-D74F
  - PRI-260407-D1AD
  - INS-260410-796F
---
A year ago, Sholto described what was holding agents back as 'extra nines of reliability.' He now explicitly retracts that framing. Looking at current Claude Code and similar agents, the real limits are: lack of context, inability to do complex multi-file changes, and difficulty handling amorphous tasks that require discovery and iteration with the environment. When a task has a good feedback loop and scoped context, models are already capable at high intellectual complexity.

This reframes how practitioners should use current agents. If you scaffold the model with the right context and prompt, it can do 'much more sophisticated things than the average user assumes' — Kelsey Piper's viral GeoGuessr prompt is 'insanely long' and explicitly encourages the model to generate five hypotheses with probabilities. Users blaming 'the model' for failures are often actually blaming their own failure to provide context or tools for context-gathering. The practical lesson: before concluding that a model can't do a task, audit whether you gave it enough context and a feedback mechanism. And for product builders, the next frontier is async agent form factors (GitHub integration, Codex) where the human isn't in the IDE loop — this dramatically changes how much work you'll delegate because you're not bottlenecked on instant reply.
