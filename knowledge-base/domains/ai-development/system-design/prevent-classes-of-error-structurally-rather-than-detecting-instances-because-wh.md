---
id: INS-260605-D320
domain: ai-development
topic: system-design
title: >-
  Prevent classes of error structurally rather than detecting instances, because
  what you cannot find you cannot enforce
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - architecture-enforcement
  - linting
  - module-boundaries
  - n-plus-1
  - guardrails
sources:
  - type: youtube
    title: >-
      BDD, ADR, PRD, WTF: Capturing Decisions for Humans and AI Alike — Michal
      Cichra, Safe Intelligence
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=504PvfXou5Y'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Forbid the capability that creates a bug class — e.g. ban database access
    from template rendering so N+1 queries can never occur — instead of
    repeatedly hunting for instances.
  standard: >-
    Cichra's principle is blunt: 'You cannot keep finding them. You need to
    prevent them entirely.' His team enforces architecture by restricting which
    modules can import which others. The end-to-end BDD test suite is forbidden
    from importing any module that could touch the database, forcing those tests
    to exercise only real browser behavior. In the product itself,
    template-rendering code cannot talk to the database, which means N+1 queries
    are structurally impossible rather than something a reviewer must spot.


    The enabling constraint is 'what you cannot find, you cannot enforce' —
    enforcement requires that a rule be expressible to a tool (a linter, an
    import check) that can mechanically detect violation. This reframes a large
    category of code review (style, layering, duplication) as automated,
    non-negotiable checks. For agentic development this is especially
    load-bearing: an agent will cheerfully reintroduce a bug class unless the
    architecture itself forbids the move, so the durable win is encoding
    boundaries the agent literally cannot cross.
stance: >-
  Architecture rules should make entire error classes impossible via enforced
  module boundaries, not catch individual violations after the fact.
related:
  - INS-260329-F688
  - INS-260605-3B8B
  - INS-260627-6BD0
  - PRI-260323-1CF9
  - INS-260625-E1AA
  - INS-260329-9157
---
Cichra's principle is blunt: 'You cannot keep finding them. You need to prevent them entirely.' His team enforces architecture by restricting which modules can import which others. The end-to-end BDD test suite is forbidden from importing any module that could touch the database, forcing those tests to exercise only real browser behavior. In the product itself, template-rendering code cannot talk to the database, which means N+1 queries are structurally impossible rather than something a reviewer must spot.

The enabling constraint is 'what you cannot find, you cannot enforce' — enforcement requires that a rule be expressible to a tool (a linter, an import check) that can mechanically detect violation. This reframes a large category of code review (style, layering, duplication) as automated, non-negotiable checks. For agentic development this is especially load-bearing: an agent will cheerfully reintroduce a bug class unless the architecture itself forbids the move, so the durable win is encoding boundaries the agent literally cannot cross.
