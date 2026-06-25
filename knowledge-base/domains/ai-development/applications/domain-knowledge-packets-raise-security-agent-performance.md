---
id: INS-260624-E878
domain: ai-development
topic: applications
title: Domain knowledge packets raise security-agent performance
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - domain-knowledge
  - security
  - context-engineering
  - tooling
sources:
  - type: audio
    title: Stanford Medical Center
date_extracted: '2026-06-24'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Security agents need curated vulnerability knowledge and code-analysis tools
    in context.
  standard: >-
    The transcript described adding vulnerability-category explanations, exploit
    guidance, existing vulnerability patterns, compiler/fuzzer output, coverage
    data, LSP-like navigation, code graphs, and tool-calling interfaces. This
    improved the model's ability to reason about where a vulnerability may exist
    and how to reach it.


    The broader pattern is that domain knowledge should be packaged as
    operational context, not passive documentation. The agent needs actionable
    affordances: search, trace, fuzz, inspect definitions, run tests, and
    compare coverage.
stance: >-
  Security agents perform better when prompts and tools include
  vulnerability-class knowledge, exploit patterns, project-specific context, and
  code-analysis affordances instead of raw code alone.
related:
  - INS-260625-14F9
  - INS-260501-3CAA
  - INS-260624-EA6B
  - INS-260605-3AB7
  - INS-260625-D295
---
The transcript described adding vulnerability-category explanations, exploit guidance, existing vulnerability patterns, compiler/fuzzer output, coverage data, LSP-like navigation, code graphs, and tool-calling interfaces. This improved the model's ability to reason about where a vulnerability may exist and how to reach it.

The broader pattern is that domain knowledge should be packaged as operational context, not passive documentation. The agent needs actionable affordances: search, trace, fuzz, inspect definitions, run tests, and compare coverage.
