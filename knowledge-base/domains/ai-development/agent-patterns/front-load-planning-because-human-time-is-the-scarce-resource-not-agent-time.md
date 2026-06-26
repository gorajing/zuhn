---
id: INS-260626-8C3C
domain: ai-development
topic: agent-patterns
title: 'Front-load planning because human time is the scarce resource, not agent time'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - planning
  - spec-driven-development
  - coding-agents
  - review
  - workflow
sources:
  - type: youtube
    title: >-
      Software Engineering Is Becoming Plan and Review — Louis Knight-Webb, Vibe
      Kanban
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=W76woOYHlvY'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Five minutes of planning saves roughly thirty minutes of reviewing
    AI-generated code.
  standard: >-
    There are two fundamental ways to work with a coding agent: the plan-based
    approach, where you write a comprehensive plan doc (often using a spec
    framework, or letting the model interrogate you until it has exhausted its
    questions), and the review-heavy approach, where you YOLO a vague prompt and
    pay it back in repeated correction rounds. Because the genuinely scarce,
    valuable resource is human attention — not agent compute — the plan-based
    approach almost always wins. Front-loaded planning eliminates edge cases,
    gives the model maximal context, reduces the odds it goes wrong, and yields
    fewer review rounds. Constantly switching back and forth with an agent
    delivering half-finished work is the expensive failure mode. The distilled
    rule: spending five minutes planning saves thirty minutes of reviewing
    AI-generated code.
stance: >-
  Investing time up front in a detailed plan for a coding agent is almost always
  superior to letting it run and reviewing heavily, because it minimizes the
  expensive human-in-the-loop correction cycles.
related:
  - INS-260323-DC99
  - INS-260409-E730
  - INS-260514-08E3
  - INS-260626-A3E4
  - INS-260603-73D5
  - INS-260330-2B45
  - INS-260320-6CCE
---
There are two fundamental ways to work with a coding agent: the plan-based approach, where you write a comprehensive plan doc (often using a spec framework, or letting the model interrogate you until it has exhausted its questions), and the review-heavy approach, where you YOLO a vague prompt and pay it back in repeated correction rounds. Because the genuinely scarce, valuable resource is human attention — not agent compute — the plan-based approach almost always wins. Front-loaded planning eliminates edge cases, gives the model maximal context, reduces the odds it goes wrong, and yields fewer review rounds. Constantly switching back and forth with an agent delivering half-finished work is the expensive failure mode. The distilled rule: spending five minutes planning saves thirty minutes of reviewing AI-generated code.
