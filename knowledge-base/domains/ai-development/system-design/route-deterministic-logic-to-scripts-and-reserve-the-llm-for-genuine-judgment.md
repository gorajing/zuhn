---
id: INS-260626-15F3
domain: ai-development
topic: system-design
title: Route deterministic logic to scripts and reserve the LLM for genuine judgment
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - system-architecture
  - llm-as-judgment
  - deterministic-scripts
  - cost-reliability
  - agent-design
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
    Use the LLM for understanding and connection-making; for fixed
    if-this-then-that rules use scripts and skip the model entirely.
  standard: >-
    Radek frames his agent not as 'an LLM' but as a system of many moving parts:
    the LLM provides judgment—understanding an email, reading context, making
    connections—while files, tools, and scripts handle everything mechanical.
    Crucially, when a rule is deterministic ('if this happens, do this'), a
    script does it and the LLM is skipped altogether. This is a reliability and
    cost discipline, not just an optimization: deterministic paths don't
    hallucinate, don't drift, and don't cost tokens, so pushing as much logic as
    possible out of the model and into scripts shrinks the surface where the
    agent can fail. The design heuristic is to ask of every recurring action
    whether it actually needs judgment; if it doesn't, it shouldn't touch the
    LLM. This directly explains why his automations are robust where others' are
    brittle—he reserves the unreliable component for the work that genuinely
    requires it.
stance: >-
  Agent systems should hand deterministic 'if-this-then-that' work to plain
  scripts and invoke the LLM only where actual judgment is required.
related:
  - INS-260323-61CD
  - INS-260325-890D
  - INS-260501-F0E5
  - INS-260605-3872
  - INS-260605-E16A
  - INS-260605-E7AD
  - INS-260625-3E47
  - INS-260625-3EE6
  - INS-260626-6CAE
  - INS-260323-8D12
---
Radek frames his agent not as 'an LLM' but as a system of many moving parts: the LLM provides judgment—understanding an email, reading context, making connections—while files, tools, and scripts handle everything mechanical. Crucially, when a rule is deterministic ('if this happens, do this'), a script does it and the LLM is skipped altogether. This is a reliability and cost discipline, not just an optimization: deterministic paths don't hallucinate, don't drift, and don't cost tokens, so pushing as much logic as possible out of the model and into scripts shrinks the surface where the agent can fail. The design heuristic is to ask of every recurring action whether it actually needs judgment; if it doesn't, it shouldn't touch the LLM. This directly explains why his automations are robust where others' are brittle—he reserves the unreliable component for the work that genuinely requires it.
