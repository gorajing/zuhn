---
id: INS-260410-D034
domain: ai-development
topic: claude-code
title: 'After two failed corrections, clear context and restart with a better prompt'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - claude-code
  - context-management
  - failure-patterns
  - session-hygiene
sources:
  - type: blog
    title: Best Practices for Claude Code - Claude Code Docs
    url: 'https://www.anthropic.com/engineering/claude-code-best-practices'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If you've corrected Claude twice on the same issue, stop correcting — /clear
    and restart with a prompt that incorporates what you learned.
  standard: >-
    The 'correcting over and over' pattern is one of the most common failure
    modes. Each correction adds the failed approach to context, so Claude is
    increasingly primed to repeat the same class of mistake even as you push
    against it. You end up negotiating with a history of wrong answers instead
    of getting a clean attempt.


    The fix is mechanical: after two failed corrections, run /clear and write a
    new initial prompt that bakes in the lessons from the failed attempts. This
    almost always produces better results than continuing the long session. The
    same logic applies to the 'kitchen sink' pattern — /clear between unrelated
    tasks rather than letting irrelevant history accumulate.
stance: >-
  Correcting a stuck agent more than twice pollutes context with failed
  approaches — a fresh session with a better prompt outperforms the long one.
related:
  - INS-260320-4993
  - INS-260329-A6FB
  - INS-260409-1E3C
  - INS-260410-CAA4
  - PRI-260406-FB98
---
The 'correcting over and over' pattern is one of the most common failure modes. Each correction adds the failed approach to context, so Claude is increasingly primed to repeat the same class of mistake even as you push against it. You end up negotiating with a history of wrong answers instead of getting a clean attempt.

The fix is mechanical: after two failed corrections, run /clear and write a new initial prompt that bakes in the lessons from the failed attempts. This almost always produces better results than continuing the long session. The same logic applies to the 'kitchen sink' pattern — /clear between unrelated tasks rather than letting irrelevant history accumulate.
