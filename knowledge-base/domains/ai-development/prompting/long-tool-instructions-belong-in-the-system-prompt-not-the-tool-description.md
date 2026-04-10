---
id: INS-260410-5D71
domain: ai-development
topic: prompting
title: 'Long tool instructions belong in the system prompt, not the tool description'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - prompting
  - tool-use
  - system-prompt
  - tool-design
sources:
  - type: blog
    title: 'The "think" tool: Enabling Claude to stop and think'
    url: 'https://www.anthropic.com/engineering/claude-think-tool'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Tool descriptions should be short and functional; complex 'how to use this
    well' guidance belongs in the system prompt.
  standard: >-
    Anthropic explicitly recommends: when think-tool instructions get long or
    complex, move them out of the tool's description field and into the system
    prompt. The tool description should stay tight and functional — what the
    tool does, what it returns, parameter schema. Rich behavioral guidance (when
    to use it, what to reason about, worked examples) belongs at the system
    level.


    The likely mechanism: the tool description is read as metadata at
    tool-selection time, while the system prompt frames the entire session's
    behavior. Long, procedural guidance in a description competes with selection
    signals and can be skimmed or ignored. In the system prompt, the same
    content shapes the model's overall posture.


    Applies beyond the think tool: if you're tempted to cram a usage manual into
    any tool description, it's a signal that guidance should move up a level.
    Descriptions answer 'what'; system prompts answer 'how should you behave'.
stance: >-
  Placing extended guidance in the tool description is less effective than
  putting it in the system prompt, where the model can integrate it into overall
  behavior.
related:
  - PRI-260406-1AC6
  - INS-260330-2C97
  - INS-260329-0F39
  - INS-260321-82FE
  - PRI-260321-037A
---
Anthropic explicitly recommends: when think-tool instructions get long or complex, move them out of the tool's description field and into the system prompt. The tool description should stay tight and functional — what the tool does, what it returns, parameter schema. Rich behavioral guidance (when to use it, what to reason about, worked examples) belongs at the system level.

The likely mechanism: the tool description is read as metadata at tool-selection time, while the system prompt frames the entire session's behavior. Long, procedural guidance in a description competes with selection signals and can be skimmed or ignored. In the system prompt, the same content shapes the model's overall posture.

Applies beyond the think tool: if you're tempted to cram a usage manual into any tool description, it's a signal that guidance should move up a level. Descriptions answer 'what'; system prompts answer 'how should you behave'.
