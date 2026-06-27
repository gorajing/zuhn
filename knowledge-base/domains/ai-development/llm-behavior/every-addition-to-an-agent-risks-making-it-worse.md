---
id: INS-260605-EBEB
domain: ai-development
topic: llm-behavior
title: Every addition to an agent risks making it worse
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompting
  - system-prompts
  - frontier-models
  - simplicity
sources:
  - type: youtube
    title: 'Don''t Build Slop (4 Levels of AI Agent Maturity) - Ara Khan, Cline'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=yUmS-F9IX90'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Large system prompts and elaborate if-else logic overload frontier models
    into sensory overload, so prune aggressively and get out of the model's way.
  standard: >-
    The bitter lesson agent builders keep relearning: every instruction, edge
    case, and fancy conditional you add to a frontier-model agent is a
    liability. Newer models are good enough that excess instruction causes a
    sensory overload where they can't determine the right action. The evidence
    Khan cites is concrete — Codex's GPT-5.3 prompt is one-third the size of its
    GPT-5 prompt.


    The operating posture is to treat each addition as guilty until proven
    innocent: 'I hope to God I'm not making it worse.' Cline rewrote its
    codebase roughly seven times to strip accumulated junk from older model
    eras. The corollary is that prompt engineering for frontier models is
    increasingly subtractive — pruning beats elaborating.
stance: >-
  Smaller system prompts and fewer instructions make frontier-model agents
  perform better, not worse.
related:
  - INS-260328-5431
  - INS-260410-F259
  - INS-260627-AA29
  - INS-260605-B82E
  - INS-260605-B405
  - INS-260625-407C
  - INS-260323-3F39
---
The bitter lesson agent builders keep relearning: every instruction, edge case, and fancy conditional you add to a frontier-model agent is a liability. Newer models are good enough that excess instruction causes a sensory overload where they can't determine the right action. The evidence Khan cites is concrete — Codex's GPT-5.3 prompt is one-third the size of its GPT-5 prompt.

The operating posture is to treat each addition as guilty until proven innocent: 'I hope to God I'm not making it worse.' Cline rewrote its codebase roughly seven times to strip accumulated junk from older model eras. The corollary is that prompt engineering for frontier models is increasingly subtractive — pruning beats elaborating.
