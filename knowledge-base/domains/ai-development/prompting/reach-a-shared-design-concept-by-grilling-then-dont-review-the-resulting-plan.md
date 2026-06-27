---
id: INS-260626-A928
domain: ai-development
topic: prompting
title: >-
  Reach a shared design concept by grilling, then don't review the resulting
  plan
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - alignment
  - planning
  - grilling
  - specs-to-code
  - plan-mode
sources:
  - type: youtube
    title: 'Full Walkthrough: Workflow for AI Coding — Matt Pocock'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=-QFHIoCo-Ko'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use a 'grill me' interrogation loop (the AI asks you one decision question
    at a time, with its recommendation) to build a shared design concept;
    afterward skip reviewing the PRD because you're only checking the LLM's
    summarization, which it does well.
  standard: >-
    Pocock argues against the 'specs-to-code' movement — treating a spec
    document as the source of truth and never looking at code — calling it vibe
    coding by another name. Instead he opens nearly every task with a tiny
    'grill me' skill that interrogates him relentlessly, one question at a time,
    each with the AI's recommended answer, surfacing decisions a human
    stakeholder never considered (e.g., 'should points be retroactive given
    existing progress records?'). Borrowing Frederick Brooks' notion from The
    Design of Design, the goal is a shared 'design concept' — being on the same
    wavelength as the agent — not a document. Sessions can run 40–100 questions
    over an hour.


    The counterintuitive payoff: once that shared understanding exists, he
    refuses to read the generated PRD. His reasoning is to ask what failure mode
    reviewing would actually test for — and since LLMs are genuinely strong at
    summarization and he is already aligned, reading the doc only re-checks
    summarization quality. This inverts the usual instinct to scrutinize plans,
    relocating human effort to alignment up front and QA at the end.


    The same grilling pattern generalizes beyond coding: feed a meeting
    transcript with a domain expert into a grilling session to surface and
    validate hidden assumptions. Planning is treated as an irreducibly
    human-in-the-loop activity, distinct from AFK implementation.
stance: >-
  Relentlessly interrogating the AI to reach a shared mental model produces
  better work than writing detailed specs, and once aligned you should not
  re-read the generated PRD.
related:
  - INS-260626-BC5E
  - INS-260627-4411
  - INS-260322-D6D7
  - INS-260605-D895
  - PRI-260327-3BD9
---
Pocock argues against the 'specs-to-code' movement — treating a spec document as the source of truth and never looking at code — calling it vibe coding by another name. Instead he opens nearly every task with a tiny 'grill me' skill that interrogates him relentlessly, one question at a time, each with the AI's recommended answer, surfacing decisions a human stakeholder never considered (e.g., 'should points be retroactive given existing progress records?'). Borrowing Frederick Brooks' notion from The Design of Design, the goal is a shared 'design concept' — being on the same wavelength as the agent — not a document. Sessions can run 40–100 questions over an hour.

The counterintuitive payoff: once that shared understanding exists, he refuses to read the generated PRD. His reasoning is to ask what failure mode reviewing would actually test for — and since LLMs are genuinely strong at summarization and he is already aligned, reading the doc only re-checks summarization quality. This inverts the usual instinct to scrutinize plans, relocating human effort to alignment up front and QA at the end.

The same grilling pattern generalizes beyond coding: feed a meeting transcript with a domain expert into a grilling session to surface and validate hidden assumptions. Planning is treated as an irreducibly human-in-the-loop activity, distinct from AFK implementation.
