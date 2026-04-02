---
id: INS-260320-F872
domain: ai-development
topic: claude-code
title: >-
  Separate concerns: Skills for code guidelines, CLAUDE.md for project-specific
  context
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - skills
  - CLAUDE.md
  - separation-of-concerns
  - project-context
sources:
  - type: reddit
    title: Claude Code is a Beast – Tips from 6 Months of Hardcore Use
    author: u/diet103
    url: 'https://reddit.com/r/ClaudeCode'
related:
  - INS-260321-0C99
  - INS-260320-EA19
  - INS-260329-693E
  - INS-260321-C3E6
  - PRI-260321-D74F
  - INS-260329-9311
date_extracted: '2026-03-20'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Skills handle 'how to write code' guidelines while CLAUDE.md handles 'how
    this specific project works' — keep them separate.
  standard: |
    Maintain a clear separation of concerns between Skills and CLAUDE.md.
    Skills should contain general coding guidelines — how to write code,
    patterns to follow, error handling approaches, testing conventions.
    CLAUDE.md should contain project-specific context — architecture decisions,
    service relationships, deployment details, environment setup. This
    separation means skills are reusable across projects while CLAUDE.md
    remains project-specific. It also prevents bloat in either file and
    makes it clear where to add new information.
stance: >-
  Skills handle 'how to write code' guidelines while CLAUDE.md handles 'how this
  specific project works' — keep them separate.
evidence:
  - id: INS-260329-693E
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-9311
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---

Maintain a clear separation of concerns between Skills and CLAUDE.md.
Skills should contain general coding guidelines — how to write code,
patterns to follow, error handling approaches, testing conventions.
CLAUDE.md should contain project-specific context — architecture decisions,
service relationships, deployment details, environment setup. This
separation means skills are reusable across projects while CLAUDE.md
remains project-specific. It also prevents bloat in either file and
makes it clear where to add new information.
