---
id: INS-260626-8308
domain: ai-development
topic: prompting
title: >-
  A dedicated critical-rules file placed high in the prompt beats scattered
  instructions
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - prompt-engineering
  - critical-rules
  - instruction-adherence
  - memory-files
  - agent-config
sources:
  - type: youtube
    title: >-
      I Gave an AI Agent the Keys to My Life (Here's What Happened) — Radek
      Sienkiewicz (@velvetshark-com)
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=sJ2jc7leKBk'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Hoist must-follow rules into their own critical-rules file positioned high
    in the agent file, because rules scattered in agent.md/soul.md still get
    forgotten.
  standard: >-
    Radek found that even when a constraint lived in his agent.md or soul.md,
    the agent still managed to forget or skip it. His fix was twofold: a
    separate critical-rules.md file, and placing it high in the agent's
    instruction file. Both the existence of a dedicated rules document and its
    position mattered to whether the agent actually obeyed. The lesson for
    prompt and context engineering is that instruction adherence is sensitive to
    salience and placement, not just presence—an instruction technically 'in the
    context' is not reliably honored. Concentrating the non-negotiables into one
    prominent, early-positioned block raises their weight against the
    surrounding context. This pairs with his memory-file evolution (from one
    memory file to a memory folder with 'dreaming'/promotion), reinforcing that
    which file content lands in and where it sits is an active engineering
    variable, not a formatting afterthought.
stance: >-
  Putting non-negotiable rules in a separate critical-rules file near the top of
  the agent's instructions enforces adherence that rules buried in agent.md or
  soul.md fail to achieve.
related:
  - INS-260626-0CFF
  - INS-260605-205E
  - INS-260605-DF08
  - INS-260625-679B
  - INS-260605-8A88
---
Radek found that even when a constraint lived in his agent.md or soul.md, the agent still managed to forget or skip it. His fix was twofold: a separate critical-rules.md file, and placing it high in the agent's instruction file. Both the existence of a dedicated rules document and its position mattered to whether the agent actually obeyed. The lesson for prompt and context engineering is that instruction adherence is sensitive to salience and placement, not just presence—an instruction technically 'in the context' is not reliably honored. Concentrating the non-negotiables into one prominent, early-positioned block raises their weight against the surrounding context. This pairs with his memory-file evolution (from one memory file to a memory folder with 'dreaming'/promotion), reinforcing that which file content lands in and where it sits is an active engineering variable, not a formatting afterthought.
