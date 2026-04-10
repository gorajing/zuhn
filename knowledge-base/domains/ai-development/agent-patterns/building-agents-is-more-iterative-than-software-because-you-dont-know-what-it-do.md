---
id: INS-260327-A9D5
domain: ai-development
topic: agent-patterns
title: >-
  Building agents is more iterative than software because you don't know what it
  does before you ship
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - agent-development
  - iterative-development
  - non-deterministic
  - agent-testing
sources:
  - type: youtube
    title: >-
      Context Engineering Our Way to Long-Horizon Agents: LangChain’s Harrison
      Chase
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=vtugjs2chdA'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Chase says building agents is more iterative because with software you
    iterate on what it should do, while with agents you must also iterate on
    understanding what it actually does — a fundamentally different development
    loop.
  standard: >-
    Chase pushes past the cliche that 'building agents is different from
    building software.' The precise difference: in software development, you
    iterate based on what you want the software to do — you ship, get feedback,
    adjust. But you know what the software does before you ship it. With agents,
    you don't know what the agent does before you ship it. You have an idea, but
    the actual behavior is emergent and non-deterministic. This means there's an
    entire additional iteration loop: understanding what the agent is actually
    doing, not just deciding what you want it to do. This is why memory becomes
    critical — if the development process is way more iterative, and changing
    system prompts is the analog of changing code, then a system that can learn
    from its own interactions reduces the iteration burden on the developer.
    Chase predicts that most companies won't build their own harnesses long-term
    because it's actually harder than building a framework — the complexity is
    in context engineering, not just tool integration.
stance: >-
  Agent development is fundamentally more iterative than traditional software
  development because with software you know what it does before shipping and
  iterate on what it should do, while with agents you don't even know what it
  does until you observe it running.
related:
  - INS-260325-D540
  - INS-260322-EAB6
  - INS-260323-05B5
  - INS-260325-3F86
  - INS-260330-8F07
  - PRI-260407-D1AD
  - INS-260403-0350
  - INS-260405-E8A1
  - INS-260327-BF89
  - INS-260405-F26B
evidence:
  - id: INS-260327-B9BB
    type: CONTRADICTS
    classified_at: '2026-04-02'
  - id: INS-260327-BB71
    type: SUPPORTS
    classified_at: '2026-04-03'
  - id: INS-260403-0350
    type: EXTENDS
    classified_at: '2026-04-05'
---
Chase pushes past the cliche that 'building agents is different from building software.' The precise difference: in software development, you iterate based on what you want the software to do — you ship, get feedback, adjust. But you know what the software does before you ship it. With agents, you don't know what the agent does before you ship it. You have an idea, but the actual behavior is emergent and non-deterministic. This means there's an entire additional iteration loop: understanding what the agent is actually doing, not just deciding what you want it to do. This is why memory becomes critical — if the development process is way more iterative, and changing system prompts is the analog of changing code, then a system that can learn from its own interactions reduces the iteration burden on the developer. Chase predicts that most companies won't build their own harnesses long-term because it's actually harder than building a framework — the complexity is in context engineering, not just tool integration.
