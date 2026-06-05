---
id: INS-260605-C965
domain: ai-development
topic: architecture
title: Choose manager agents when one surface must synthesize the user experience
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - manager-pattern
  - handoffs
  - multi-agent
  - orchestration
  - user-experience
sources:
  - type: blog
    title: A practical guide to building agents
    url: >-
      https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: Use manager orchestration for synthesis; use handoffs for full takeover.
  standard: >-
    OpenAI distinguishes manager patterns, where a central agent calls
    specialized agents as tools, from decentralized handoffs, where peer agents
    transfer control. The manager pattern preserves one coherent user-facing
    surface, while handoffs fit triage-like flows where another specialist
    should own the interaction.
  deep: >-
    The architectural choice should be made from the user's control surface, not
    from the developer's desire for modularity. If the user expects a single
    coherent answer, central synthesis matters. If the user expects to enter a
    specialized workflow, handoff may be cleaner.
stance: >-
  Manager-agent orchestration is best when one agent should retain control of
  the user experience and synthesize specialist outputs, while decentralized
  handoffs fit cases where specialists can fully take over.
related:
  - INS-260403-2F4D
  - INS-260409-53F7
  - INS-260410-CD01
  - INS-260327-C1A4
  - INS-260421-60D9
---
OpenAI distinguishes manager patterns, where a central agent calls specialized agents as tools, from decentralized handoffs, where peer agents transfer control. The manager pattern preserves one coherent user-facing surface, while handoffs fit triage-like flows where another specialist should own the interaction.
