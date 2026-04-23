---
id: INS-260320-0F7C
domain: ai-development
topic: system-building
title: >-
  File-based architecture enables total regenerability — if any generated
  artifact breaks, just rebuild it
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - architecture
  - regenerability
  - resilience
sources:
  - type: paste
    title: Building the Zuhn knowledge base — lessons from Phase 1-5
    author: Jin Choi + Claude
related:
  - INS-260320-8FFC
  - INS-260405-1CAA
  - INS-260409-2D5C
  - INS-260423-FB98
  - PRI-260406-788D
  - INS-260404-21E6
  - INS-260409-156A
  - INS-260409-5CF4
  - INS-260409-4CE8
  - INS-260410-8ECF
date_extracted: '2026-03-20'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Markdown files are the source of truth; SQLite database, indices, mindmap,
    and tag files are all generated and disposable — when the DB had schema
    issues, we just regenerated it.
  standard: |
    Markdown files are the source of truth. SQLite database, indices, mindmap,
    and tag files are all generated. When the DB had schema issues during
    Phase 4, we just regenerated it from the markdown files. No data loss,
    no migration scripts, no downtime.

    This is the same principle as "structure over blobs" — the structure (YAML
    frontmatter in markdown files) survives because it is human-readable and
    version-controlled. The views (DB, indices, mindmap) are disposable
    projections that can be rebuilt from source at any time.

    Practical implication: never put primary data in a generated artifact.
    If the source of truth is a generated file, you have a single point of
    failure. If the source of truth is structured plain text, you have
    infinite regenerability.
stance: >-
  Markdown files should be the source of truth while databases and indices
  remain disposable artifacts
evidence:
  - id: INS-260329-D868
    type: SUPPORTS
  - id: INS-260327-956D
    type: SUPPORTS
  - id: INS-260322-F46F
    type: SUPPORTS
  - id: INS-260405-1CAA
    type: SUPPORTS
---

Markdown files are the source of truth. SQLite database, indices, mindmap,
and tag files are all generated. When the DB had schema issues during
Phase 4, we just regenerated it from the markdown files. No data loss,
no migration scripts, no downtime.

This is the same principle as "structure over blobs" — the structure (YAML
frontmatter in markdown files) survives because it is human-readable and
version-controlled. The views (DB, indices, mindmap) are disposable
projections that can be rebuilt from source at any time.

Practical implication: never put primary data in a generated artifact.
If the source of truth is a generated file, you have a single point of
failure. If the source of truth is structured plain text, you have
infinite regenerability.
