---
id: INS-260627-8B10
domain: ai-development
topic: agent-patterns
title: 'Match model invocation mode to task complexity, not a single default'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agentic
  - tool-calling
  - one-shot
  - task-complexity
  - model-usage
sources:
  - type: youtube
    title: 'Building in the Gemini Era – Kat Kampf & Ammaar Reshi, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=fgkXEIbZpGc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Frontier models span a spectrum from one-shot output to multi-step agentic
    tool-calling; pick the mode that fits the task instead of forcing every job
    into the same pattern.
  standard: >-
    The DeepMind team frames model capability as a spectrum: for a
    self-contained artifact like a single website or image you want one-shot
    generation, while for complex work inside a large codebase you want agentic
    tool-calling and multi-step planning. The same underlying model serves both,
    but the invocation pattern, scaffolding, and expectations differ.


    The actionable lesson is to diagnose the task before reaching for a pattern.
    Wrapping a simple one-shot job in an agentic harness adds latency, cost, and
    failure surface; conversely, asking a single completion to one-shot a
    sprawling multi-file change under-uses the model's planning ability. Treat
    'one-shot vs. agentic' as a deliberate design choice keyed to task
    complexity, not a fixed house style.
stance: >-
  Builders should choose between one-shot generation and agentic tool-calling
  based on task complexity rather than defaulting to one mode for everything.
related:
  - INS-260325-7FAF
  - INS-260326-9402
  - INS-260326-2410
  - INS-260405-B361
  - INS-260605-0C88
  - INS-260624-B6EA
  - INS-260625-FACB
  - INS-260626-8116
  - INS-260626-4320
  - INS-260627-6C9A
---
The DeepMind team frames model capability as a spectrum: for a self-contained artifact like a single website or image you want one-shot generation, while for complex work inside a large codebase you want agentic tool-calling and multi-step planning. The same underlying model serves both, but the invocation pattern, scaffolding, and expectations differ.

The actionable lesson is to diagnose the task before reaching for a pattern. Wrapping a simple one-shot job in an agentic harness adds latency, cost, and failure surface; conversely, asking a single completion to one-shot a sprawling multi-file change under-uses the model's planning ability. Treat 'one-shot vs. agentic' as a deliberate design choice keyed to task complexity, not a fixed house style.
