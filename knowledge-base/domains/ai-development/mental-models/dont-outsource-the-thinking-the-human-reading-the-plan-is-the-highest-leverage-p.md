---
id: INS-260628-9705
domain: ai-development
topic: mental-models
title: >-
  Don't outsource the thinking — the human reading the plan is the
  highest-leverage point
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - leverage
  - human-in-the-loop
  - thinking
  - error-propagation
  - research
sources:
  - type: youtube
    title: "No Vibes Allowed: Solving Hard Problems in Complex Codebases –\_Dex Horthy, HumanLayer"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=rmvDxxNubIg'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A bad line of code is one bad line; a bad line of plan is a hundred bad
    lines; a bad line of research sends the whole effort in the wrong direction
    — so move human focus upstream.
  standard: >-
    Horthy's central caution is 'AI cannot replace thinking. It can only amplify
    the thinking you have done, or the lack of thinking you have done.' There is
    no perfect prompt and no silver bullet; the process only works if you, the
    builder, are in a back-and-forth with the agent reading the plans as they
    are created. Tools that 'just spew out a bunch of markdown files to make you
    feel good' are theater.


    The leverage argument is an error-propagation hierarchy. A bad line of code
    costs one bad line. A bad part of a plan can expand into a hundred bad lines
    of code. A bad line of research — a misunderstanding of how the system
    actually works or where things live — sends the model off in the wrong
    direction entirely, hosing the whole effort. Because errors compound as you
    move upstream, that is exactly where scarce human attention should
    concentrate: reviewing research and plans, not babysitting implementation.


    This reframes productivity from 'how much code can the agent write' to 'how
    reliably can I compress correct intent.' The win is leverage — high
    confidence the model will do the right thing — which comes from the human
    verifying the cheap-to-fix upstream artifacts before they multiply into
    expensive downstream code.
stance: >-
  AI only amplifies thinking already done, so a misunderstanding in the research
  phase compounds into far more damage than a single bad line of code.
related:
  - INS-260321-C3E6
  - INS-260403-410A
  - INS-260405-A6BA
  - INS-260627-1EF5
  - INS-260628-08FB
  - INS-260605-FD3D
  - PRI-260406-A5F0
---
Horthy's central caution is 'AI cannot replace thinking. It can only amplify the thinking you have done, or the lack of thinking you have done.' There is no perfect prompt and no silver bullet; the process only works if you, the builder, are in a back-and-forth with the agent reading the plans as they are created. Tools that 'just spew out a bunch of markdown files to make you feel good' are theater.

The leverage argument is an error-propagation hierarchy. A bad line of code costs one bad line. A bad part of a plan can expand into a hundred bad lines of code. A bad line of research — a misunderstanding of how the system actually works or where things live — sends the model off in the wrong direction entirely, hosing the whole effort. Because errors compound as you move upstream, that is exactly where scarce human attention should concentrate: reviewing research and plans, not babysitting implementation.

This reframes productivity from 'how much code can the agent write' to 'how reliably can I compress correct intent.' The win is leverage — high confidence the model will do the right thing — which comes from the human verifying the cheap-to-fix upstream artifacts before they multiply into expensive downstream code.
