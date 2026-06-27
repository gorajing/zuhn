---
id: INS-260605-E174
domain: ai-development
topic: architecture
title: Stop optimizing AI codegen for 'easy for the model to write'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - language-choice
  - code-generation
  - vibe-coding
  - rust
  - tradeoffs
sources:
  - type: youtube
    title: 'Why Rust is the Ideal Language for Vibe-Coding — Daniel Szoke, Sentry'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ugUeZ8-b-u0'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The dynamic flexibility that makes Python/TS easy for LLMs to write is the
    same flexibility that makes it easy for them to ship mistakes.
  standard: >-
    The conventional wisdom ranks Python and TypeScript as the top languages for
    agentic coding because LLMs reliably produce runnable code in them on the
    first try — they're simple, common, and impose few constraints. Szoke's
    contention is that 'easy for the model to write' is overstated as a goal and
    is sometimes a net negative. The same dynamic, flexible nature that lets an
    LLM emit working JavaScript also lets it emit subtly wrong JavaScript that
    compiles and runs. Optional typing helps but is weak in both TypeScript (the
    `any` escape hatch) and typed Python. When selecting a stack for AI-heavy
    development, weight 'how hard is it to be wrong' above 'how easy is it to
    produce something that runs.'
stance: >-
  Choosing a language because LLMs write it easily is optimizing for the wrong
  property and actively increases shipped bugs.
related:
  - INS-260329-9A5A
  - INS-260330-B784
  - INS-260329-D868
  - INS-260330-C4D8
  - INS-260514-71A3
  - INS-260325-3E86
  - INS-260329-DAD1
---
The conventional wisdom ranks Python and TypeScript as the top languages for agentic coding because LLMs reliably produce runnable code in them on the first try — they're simple, common, and impose few constraints. Szoke's contention is that 'easy for the model to write' is overstated as a goal and is sometimes a net negative. The same dynamic, flexible nature that lets an LLM emit working JavaScript also lets it emit subtly wrong JavaScript that compiles and runs. Optional typing helps but is weak in both TypeScript (the `any` escape hatch) and typed Python. When selecting a stack for AI-heavy development, weight 'how hard is it to be wrong' above 'how easy is it to produce something that runs.'
