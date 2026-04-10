---
id: INS-260410-BD9D
domain: ai-development
topic: ai-capabilities
title: >-
  Coding dominates LLM economic value because text infrastructure already
  existed
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - karpathy
  - coding
  - ai-agents
  - text-infrastructure
  - deployment
sources:
  - type: youtube
    title: 'Andrej Karpathy — “We’re summoning ghosts, not building animals”'
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=lXUZvyajciY'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AGI was supposed to chisel away at every knowledge-work task; instead API
    revenue is overwhelmingly coding because decades of text-based developer
    tooling happened to be exactly what text-processing LLMs need.
  standard: >-
    If LLMs really were general knowledge workers, we'd expect productivity
    gains distributed across consultants, accountants, writers, and programmers
    in proportion to text-heavy tasks. Instead, API revenue is dominated by
    coding — which is striking because language-in-language-out tasks like
    writing spaced repetition prompts or editing transcripts remain stubbornly
    hard.


    Karpathy's explanation is infrastructural: coding runs on terminals, diffs,
    IDEs, and text files — tooling built for decades that agents can plug into
    trivially. A code diff viewer already exists; a 'slide diff' viewer doesn't.
    Code is also more structured with lower entropy than prose, so
    pattern-completing models excel at it.


    The implication for AI deployment: rollout speed depends heavily on whether
    the target domain has pre-existing text-compatible infrastructure, not just
    on raw model capability. Domains without it (slides, spreadsheets, legal
    documents, medical charts) will need someone to build the scaffolding before
    LLMs can meaningfully integrate — which is a distinct and slow process from
    model capability improvement.
stance: >-
  LLM value concentrates in coding not because coding is the best fit for
  general intelligence but because decades of text-based tooling (diffs, IDEs,
  terminals) let agents plug in immediately.
related:
  - INS-260323-B029
  - INS-260330-819E
  - INS-260403-D16C
  - INS-260405-0E77
  - INS-260405-EFC2
  - INS-260403-2774
  - INS-260409-E44A
  - INS-260403-A2E9
  - PRI-260328-B4BD
  - PRI-260406-6690
---
If LLMs really were general knowledge workers, we'd expect productivity gains distributed across consultants, accountants, writers, and programmers in proportion to text-heavy tasks. Instead, API revenue is dominated by coding — which is striking because language-in-language-out tasks like writing spaced repetition prompts or editing transcripts remain stubbornly hard.

Karpathy's explanation is infrastructural: coding runs on terminals, diffs, IDEs, and text files — tooling built for decades that agents can plug into trivially. A code diff viewer already exists; a 'slide diff' viewer doesn't. Code is also more structured with lower entropy than prose, so pattern-completing models excel at it.

The implication for AI deployment: rollout speed depends heavily on whether the target domain has pre-existing text-compatible infrastructure, not just on raw model capability. Domains without it (slides, spreadsheets, legal documents, medical charts) will need someone to build the scaffolding before LLMs can meaningfully integrate — which is a distinct and slow process from model capability improvement.
