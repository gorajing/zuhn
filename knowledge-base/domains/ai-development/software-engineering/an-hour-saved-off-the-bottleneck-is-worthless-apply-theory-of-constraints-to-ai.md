---
id: INS-260627-9D9A
domain: ai-development
topic: software-engineering
title: >-
  An hour saved off the bottleneck is worthless — apply theory of constraints to
  AI
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - theory-of-constraints
  - sdlc
  - bottleneck
  - context-switching
  - goldratt
sources:
  - type: youtube
    title: 'Leadership in AI Assisted Engineering – Justin Reock, DX (acq. Atlassian)'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=PmZDupFP3UM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Across ~140,000 engineers, AI's annualized time savings were eclipsed by
    context switching, interruptions, and meeting-heavy days — because writing
    code was never the bottleneck.
  standard: >-
    Reock invokes Goldratt's theory of constraints: an hour saved on a step that
    isn't the bottleneck produces zero system-level improvement. For most
    engineering organizations, writing code has never been the bottleneck — yet
    code completion is exactly where most AI tooling is aimed. DX's data across
    nearly 140,000 engineers shows genuine annualized AI time savings being
    entirely eclipsed by losses elsewhere: context switching, interruptions, and
    meeting-heavy days. The local optimization is real and the global result is
    flat or negative.


    The prescription is to find the constraint and aim AI there. The strongest
    cited examples target non-coding bottlenecks: Morgan Stanley's DevGen.AI
    reverse-engineers legacy COBOL/mainframe/Perl into specs developers can act
    on (~300,000 hours saved annually); Zapier's bots cut onboarding from ~30-90
    days to two weeks; Spotify pushes incident context and runbook steps
    directly into SRE channels to collapse mean-time-to-resolution. None of
    these is autocomplete. Before deploying AI, leaders should diagnose where
    work actually queues and stalls — and resist the default of speeding up the
    step that was already fast.
stance: >-
  AI delivers real value only when pointed at the SDLC's actual constraint;
  accelerating code-writing usually optimizes a non-bottleneck.
related:
  - INS-260323-2726
  - INS-260330-A1D2
  - INS-260402-1FE9
  - INS-260405-EFC2
  - INS-260404-B18A
  - INS-260409-3AEE
  - INS-260410-7224
  - INS-260412-7FF8
  - INS-260413-416A
  - INS-260501-2BF8
---
Reock invokes Goldratt's theory of constraints: an hour saved on a step that isn't the bottleneck produces zero system-level improvement. For most engineering organizations, writing code has never been the bottleneck — yet code completion is exactly where most AI tooling is aimed. DX's data across nearly 140,000 engineers shows genuine annualized AI time savings being entirely eclipsed by losses elsewhere: context switching, interruptions, and meeting-heavy days. The local optimization is real and the global result is flat or negative.

The prescription is to find the constraint and aim AI there. The strongest cited examples target non-coding bottlenecks: Morgan Stanley's DevGen.AI reverse-engineers legacy COBOL/mainframe/Perl into specs developers can act on (~300,000 hours saved annually); Zapier's bots cut onboarding from ~30-90 days to two weeks; Spotify pushes incident context and runbook steps directly into SRE channels to collapse mean-time-to-resolution. None of these is autocomplete. Before deploying AI, leaders should diagnose where work actually queues and stalls — and resist the default of speeding up the step that was already fast.
