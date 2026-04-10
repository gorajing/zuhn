---
id: INS-260320-2DDE
domain: ai-development
topic: claude-code
title: >-
  Use multiple documentation levels from broad architecture to specific API
  references
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - documentation
  - architecture
  - codebase-navigation
  - multi-level
sources:
  - type: reddit
    title: Claude Code is a Beast – Tips from 6 Months of Hardcore Use
    author: u/diet103
    url: 'https://reddit.com/r/ClaudeCode'
related:
  - PRI-260320-3032
  - INS-260403-13AF
  - INS-260410-4F43
  - INS-260403-A851
  - INS-260327-E0F7
date_extracted: '2026-03-20'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Maintain multiple documentation levels — broad architectural overview,
    specific service docs, API references — to help Claude navigate large
    codebases.
  standard: |
    Large codebases need layered documentation for Claude to navigate
    effectively. Create at least three levels: (1) a broad architectural
    overview explaining how services relate, data flows, and key design
    decisions; (2) specific service documentation covering each service's
    responsibilities, dependencies, and internal structure; (3) API
    references with endpoint signatures, request/response formats, and
    error codes. Claude uses these layers progressively — starting with
    the overview to understand where to look, then drilling into service
    docs and API references as needed. Without this hierarchy, Claude
    either wastes tokens reading everything or misses critical context.
stance: >-
  Multiple documentation levels are needed to help AI navigate large codebases
  effectively
evidence:
  - id: INS-260330-70A8
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-003B
    type: SUPPORTS
    classified_at: '2026-04-05'
---

Large codebases need layered documentation for Claude to navigate
effectively. Create at least three levels: (1) a broad architectural
overview explaining how services relate, data flows, and key design
decisions; (2) specific service documentation covering each service's
responsibilities, dependencies, and internal structure; (3) API
references with endpoint signatures, request/response formats, and
error codes. Claude uses these layers progressively — starting with
the overview to understand where to look, then drilling into service
docs and API references as needed. Without this hierarchy, Claude
either wastes tokens reading everything or misses critical context.
