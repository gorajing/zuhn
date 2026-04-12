---
id: INS-260410-E27A
domain: ai-development
topic: agent-patterns
title: Helpful error responses steer agent behavior more than error codes
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - error-handling
  - prompt-engineering
  - tool-design
  - agent-steering
sources:
  - type: blog
    title: Writing effective tools for AI agents—using AI agents
    url: 'https://www.anthropic.com/engineering/writing-tools-for-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Tool error responses are prompt-engineering surfaces — use them to teach
    agents correct usage, not just to report failure.
  standard: >-
    A raw 400 error or Python traceback is wasted context. A good error response
    tells the agent exactly what was wrong and shows an example of correct
    input. Similarly, when truncating a large response, include instructions
    that encourage better behavior — like 'making many small targeted searches
    instead of one broad search.'


    This treats the tool's response surface as part of the agent's effective
    system prompt. Every error, every truncation, every edge case is an
    opportunity to steer the agent toward more token-efficient and successful
    strategies. Opaque errors just leave the agent guessing.


    The principle generalizes: anything the agent reads mid-task becomes context
    that shapes its next move. Designing those surfaces thoughtfully is higher
    leverage than adding more tools.
stance: >-
  Error messages should prompt-engineer agents toward correct behavior with
  specific actionable guidance, not return opaque codes or tracebacks.
related:
  - INS-260321-2482
  - INS-260320-4A82
  - INS-260329-3FC9
  - PRI-260406-FB98
  - PRI-260411-64C7
  - PRI-260328-0AB1
---
A raw 400 error or Python traceback is wasted context. A good error response tells the agent exactly what was wrong and shows an example of correct input. Similarly, when truncating a large response, include instructions that encourage better behavior — like 'making many small targeted searches instead of one broad search.'

This treats the tool's response surface as part of the agent's effective system prompt. Every error, every truncation, every edge case is an opportunity to steer the agent toward more token-efficient and successful strategies. Opaque errors just leave the agent guessing.

The principle generalizes: anything the agent reads mid-task becomes context that shapes its next move. Designing those surfaces thoughtfully is higher leverage than adding more tools.
