---
id: INS-260501-DBDB
domain: ai-development
topic: applications
title: >-
  Wireframe-first reduces token waste and forces feature discipline before going
  to hi-fi
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - wireframe-first
  - design-process
  - token-economics
  - feature-discipline
sources:
  - type: youtube
    title: 'Claude Design: Full Walkthrough. I''m blown away.'
    author: Greg Isenberg
    url: 'https://youtu.be/vyLaimDeK_g'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Wireframe first = constraint generation + cheap iteration. One-shotting
    hi-fi designs burns tokens and locks in random feature choices.
  standard: >-
    Isenberg's deliberate workflow choice: 'I don't want to waste tokens. If I
    just oneshot it, I'm going to spend a ton of tokens.' Starting with a
    wireframe forces him to clarify which features actually matter, what the
    navigation structure is, what the constraints are — *before* committing
    tokens to hi-fi generation. The wireframe phase is cheap; iterating is
    cheap; locking in features is cheap. Hi-fi phase is expensive; locking in
    choices late is cheap; iterating is expensive.


    The meta-principle: in AI generation workflows, structure cheap-to-iterate
    phases before expensive-to-iterate phases. Wireframe → hi-fi → animation,
    not animation → hi-fi → wireframe. Plan → code → test, not test → code →
    plan. The corollary: 'oneshotting' tutorials are misleading because they're
    optimized for video views, not for actual product building. They demonstrate
    raw capability while hiding the workflow discipline that makes it useful.


    For builders: bake wireframe-first defaults into your design products. Make
    the cheap phases the obvious starting point. For Zuhn editorially: this
    generalizes — for any AI workflow, ask 'what's the cheapest phase that
    constrains the most expensive phase?' That's the place to invest in tooling.
    For Zuhn specifically the same logic applies — extract.ts produces
    structured JSON before commit; the structured JSON is the cheap-to-iterate
    constraint that makes the expensive insight-file generation correct on the
    first try.
stance: >-
  Generating a wireframe before committing to hi-fi designs reduces token costs
  by 5-10x and forces clarity about what features matter — making 'wireframe
  first' the right default for any vibe-design workflow even though tutorials
  default to one-shot hi-fi generation.
related:
  - PRI-260406-72B3
  - INS-260410-AC0B
  - INS-260329-44C9
  - INS-260404-0EB2
  - INS-260403-F400
---
Isenberg's deliberate workflow choice: 'I don't want to waste tokens. If I just oneshot it, I'm going to spend a ton of tokens.' Starting with a wireframe forces him to clarify which features actually matter, what the navigation structure is, what the constraints are — *before* committing tokens to hi-fi generation. The wireframe phase is cheap; iterating is cheap; locking in features is cheap. Hi-fi phase is expensive; locking in choices late is cheap; iterating is expensive.

The meta-principle: in AI generation workflows, structure cheap-to-iterate phases before expensive-to-iterate phases. Wireframe → hi-fi → animation, not animation → hi-fi → wireframe. Plan → code → test, not test → code → plan. The corollary: 'oneshotting' tutorials are misleading because they're optimized for video views, not for actual product building. They demonstrate raw capability while hiding the workflow discipline that makes it useful.

For builders: bake wireframe-first defaults into your design products. Make the cheap phases the obvious starting point. For Zuhn editorially: this generalizes — for any AI workflow, ask 'what's the cheapest phase that constrains the most expensive phase?' That's the place to invest in tooling. For Zuhn specifically the same logic applies — extract.ts produces structured JSON before commit; the structured JSON is the cheap-to-iterate constraint that makes the expensive insight-file generation correct on the first try.
