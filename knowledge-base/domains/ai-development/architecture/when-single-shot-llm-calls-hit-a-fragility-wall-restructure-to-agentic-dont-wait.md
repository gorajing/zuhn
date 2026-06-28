---
id: INS-260628-A92C
domain: ai-development
topic: architecture
title: >-
  When single-shot LLM calls hit a fragility wall, restructure to agentic —
  don't wait for a better model
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agentic-architecture
  - llm-limitations
  - architecture-decisions
  - enterprise-ai
  - data-extraction
sources:
  - type: youtube
    title: 'Building an Agentic Platform — Ben Kus, CTO Box'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=12v5S1n1eOY'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If a problem is plausibly solvable by AI, build the agentic architecture
    early instead of patching single-shot calls or waiting for a smarter model.
  standard: >-
    Box's single-shot LLM extraction (OCR + prompt + extract fields) initially
    outperformed even the best legacy IDP models — until customers handed them
    300-page leases with 300 complex fields. Attention diluted across too many
    fields, OCR broke on scanned/multilingual docs, and the model couldn't
    report its own accuracy. The team hit a 'despair moment.' The instinctive
    fixes — wait for the next Gemini/OpenAI release, fine-tune, add regex
    post-processing — each either failed to address the architectural fragility
    or destroyed the genericness that made the system valuable.


    The durable fix was structural, not model-level: wrap the task in an agentic
    directed graph with instructions, tools, memory, reflection, and
    orchestration. Kus's explicit lesson is that this was non-obvious and even
    controversial internally ('let's just make the OCR better'), yet it's the
    move he'd make sooner if he could go back. The directional claim: when you
    keep losing accuracy on the hard tail of a task, treat it as an architecture
    problem, not a model problem. Models do get better, but you can't ship on
    the promise of an unreleased model, and a fragile architecture won't be
    rescued by a smarter one.
stance: >-
  When a direct LLM approach becomes fragile on hard cases, adopting an agentic
  architecture beats waiting for the next model release, fine-tuning, or bolting
  on post-processing.
related:
  - INS-260326-9402
  - INS-260403-CE62
  - INS-260403-D51A
  - INS-260403-F6F6
  - INS-260410-1ED3
  - INS-260411-BCB0
  - INS-260423-85B3
  - INS-260605-0BA3
  - INS-260627-0F4E
  - INS-260627-42EC
---
Box's single-shot LLM extraction (OCR + prompt + extract fields) initially outperformed even the best legacy IDP models — until customers handed them 300-page leases with 300 complex fields. Attention diluted across too many fields, OCR broke on scanned/multilingual docs, and the model couldn't report its own accuracy. The team hit a 'despair moment.' The instinctive fixes — wait for the next Gemini/OpenAI release, fine-tune, add regex post-processing — each either failed to address the architectural fragility or destroyed the genericness that made the system valuable.

The durable fix was structural, not model-level: wrap the task in an agentic directed graph with instructions, tools, memory, reflection, and orchestration. Kus's explicit lesson is that this was non-obvious and even controversial internally ('let's just make the OCR better'), yet it's the move he'd make sooner if he could go back. The directional claim: when you keep losing accuracy on the hard tail of a task, treat it as an architecture problem, not a model problem. Models do get better, but you can't ship on the promise of an unreleased model, and a fragile architecture won't be rescued by a smarter one.
