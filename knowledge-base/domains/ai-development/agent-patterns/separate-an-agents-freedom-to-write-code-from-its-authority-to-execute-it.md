---
id: INS-260627-20F9
domain: ai-development
topic: agent-patterns
title: Separate an agent's freedom to write code from its authority to execute it
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - tool-use
  - authorization
  - sandboxing
  - agent-safety
sources:
  - type: blog
    title: >-
      A hardware-safety-gated system for LLM-written native ARTIQ control code
      on a trapped-ion platform
    url: 'https://arxiv.org/html/2606.27231'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Let the agent compose rich programs, but make execution depend on a separate
    policy boundary that checks effects rather than trusting the generated code.
  standard: >-
    The ARTIQ system lets the LLM agent write native experiment scripts from
    scratch, but no call reaches hardware unless a safety-filter issues a token
    bound to that exact call content. That design preserves the creative
    leverage of code-generating agents without allowing code expressiveness to
    expand authority.


    For agent and system-building work, the implication is that tool permissions
    should attach to resolved effects and execution primitives, not to the
    agent's apparent intent or to coarse tool availability. The useful pattern
    is not 'trust the model less' in the abstract; it is to make model-generated
    artifacts pass through a deterministic authority boundary before they can
    mutate the outside world.
stance: >-
  High-autonomy agents become safer when code generation remains expressive but
  every side-effecting execution path is gated by a narrower authority boundary.
related:
  - INS-260626-9155
  - INS-260625-814D
  - INS-260625-A5E7
  - INS-260403-96BC
  - INS-260605-3AB7
---
The ARTIQ system lets the LLM agent write native experiment scripts from scratch, but no call reaches hardware unless a safety-filter issues a token bound to that exact call content. That design preserves the creative leverage of code-generating agents without allowing code expressiveness to expand authority.

For agent and system-building work, the implication is that tool permissions should attach to resolved effects and execution primitives, not to the agent's apparent intent or to coarse tool availability. The useful pattern is not 'trust the model less' in the abstract; it is to make model-generated artifacts pass through a deterministic authority boundary before they can mutate the outside world.
