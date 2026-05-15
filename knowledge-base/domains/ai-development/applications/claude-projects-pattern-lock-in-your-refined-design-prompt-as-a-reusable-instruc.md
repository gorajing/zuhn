---
id: INS-260514-5389
domain: ai-development
topic: applications
title: >-
  Claude Projects pattern: lock in your refined design prompt as a reusable
  instruction set
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - claude-projects
  - prompt-persistence
  - reusable-context
  - design-workflow
  - project-instructions
sources:
  - type: youtube
    title: '오늘, 클로드가 PPT를 죽였습니다.'
    author: 페이퍼로지
    url: 'https://youtu.be/aITV54CLc_U'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Lock refined design prompts into Claude Project Instructions + Knowledge —
    every future chat in that project inherits the prompt, so you skip
    re-pasting and get consistent output.
  standard: >-
    Workflow completion step from the Korean PPT tutorial: after iterating to a
    high-quality design prompt (Minimax-base + customized font/logo/aspect/style
    rules), put it in a Claude Project: (1) Create new Project in Claude. (2)
    Paste the refined prompt into Instructions. (3) Upload your logo, font
    files, and any reference assets into Knowledge. (4) From now on, every chat
    inside that Project inherits the prompt and assets automatically. You can
    generate by topic ('make PPT about Korean food delivery trends') or by
    uploading an existing PDF/PPT with the instruction 'redesign this in our
    style.' This is the Claude version of GPTs and Gemini's Gems — persistent
    context bound to a workspace. The architectural pattern: when you find
    prompt context that earns its keep across many sessions, move it from
    per-message text to project-level persistence. This frees up the per-message
    slot for what's actually variable (the specific topic, data, audience) while
    keeping invariant context stable. The non-obvious efficiency: pinning
    multiple Projects (one for each design style — Minimax style, Apple style,
    Stripe style, etc.) lets you switch instantly between style modes by
    switching Projects. The pattern generalizes to any AI workflow with multiple
    reusable contexts: research projects (each with its own corpus), code
    projects (each with its own codebase context), writing projects (each with
    its own voice samples). Projects/GPTs/Gems are the right abstraction for
    persistent role-context.
stance: >-
  Once you've iteratively refined a design prompt (font, logo, layout rules,
  style references) to where output is consistently high-quality, the right
  place to put it is inside a Claude Project's 'Instructions' field with assets
  in Knowledge — turning your refined prompt into an always-on context that
  every future generation inherits, without needing to paste it each time.
related:
  - INS-260320-DC3C
  - INS-260320-D972
  - INS-260329-8DC5
  - INS-260403-31E4
  - INS-260403-5BD6
  - INS-260410-18CF
  - INS-260403-F400
  - PRI-260320-6847
  - INS-260514-AC43
  - INS-260514-D3D1
---
Workflow completion step from the Korean PPT tutorial: after iterating to a high-quality design prompt (Minimax-base + customized font/logo/aspect/style rules), put it in a Claude Project: (1) Create new Project in Claude. (2) Paste the refined prompt into Instructions. (3) Upload your logo, font files, and any reference assets into Knowledge. (4) From now on, every chat inside that Project inherits the prompt and assets automatically. You can generate by topic ('make PPT about Korean food delivery trends') or by uploading an existing PDF/PPT with the instruction 'redesign this in our style.' This is the Claude version of GPTs and Gemini's Gems — persistent context bound to a workspace. The architectural pattern: when you find prompt context that earns its keep across many sessions, move it from per-message text to project-level persistence. This frees up the per-message slot for what's actually variable (the specific topic, data, audience) while keeping invariant context stable. The non-obvious efficiency: pinning multiple Projects (one for each design style — Minimax style, Apple style, Stripe style, etc.) lets you switch instantly between style modes by switching Projects. The pattern generalizes to any AI workflow with multiple reusable contexts: research projects (each with its own corpus), code projects (each with its own codebase context), writing projects (each with its own voice samples). Projects/GPTs/Gems are the right abstraction for persistent role-context.
