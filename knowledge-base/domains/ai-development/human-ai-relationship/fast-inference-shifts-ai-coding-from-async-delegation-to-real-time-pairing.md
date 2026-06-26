---
id: INS-260605-5CC7
domain: ai-development
topic: human-ai-relationship
title: Fast inference shifts AI coding from async delegation to real-time pairing
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - pair-programming
  - steering
  - collaboration
  - context-management
  - human-in-the-loop
sources:
  - type: youtube
    title: 'Fast Models Need Slow Developers — Sarah Chieng, Cerebras'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=TeGsFFNqRLA'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When the model responds in real time, the right mental model is sitting
    beside it as a pair programmer — staying in the driver's seat, steering with
    specific constraints — rather than spawning a session and scrolling Twitter
    until it finishes.
  standard: >-
    Slow generation trained developers into an asynchronous habit: spawn a
    session, go get a hamburger, scroll Twitter, come back to a wall of code
    they've never read. Chieng argues fast inference should instead enable
    real-time collaboration where the developer stays in the front seat making
    decisions and the AI helps make them — not the reverse. This is presented as
    the only reliable way to avoid bad code, because the human remains
    continuously in the loop rather than reviewing a fait accompli.


    Active steering is concrete: run two or three sessions you actually sit
    with, ban the model from deleting files, give it a max diff size, restrict
    it to read-and-write, and issue mid-task corrections ('only change this,
    don't touch types yet, redo that'). A related constraint is context
    management — compaction that used to take 10 minutes to trigger now arrives
    in ~30 seconds at 20x speed, so breaking work into small bounded goals and
    externalizing state into a persistent file system (agents.md, plan.md,
    progress.md, verify.md) becomes essential rather than optional.
stance: >-
  Developers should treat fast coding models as real-time pair programmers they
  actively steer, not async agents they fire off and walk away from.
related:
  - INS-260505-D440
  - INS-260501-17BB
  - INS-260605-B82E
  - INS-260524-78D0
  - INS-260410-939B
  - INS-260605-FC00
---
Slow generation trained developers into an asynchronous habit: spawn a session, go get a hamburger, scroll Twitter, come back to a wall of code they've never read. Chieng argues fast inference should instead enable real-time collaboration where the developer stays in the front seat making decisions and the AI helps make them — not the reverse. This is presented as the only reliable way to avoid bad code, because the human remains continuously in the loop rather than reviewing a fait accompli.

Active steering is concrete: run two or three sessions you actually sit with, ban the model from deleting files, give it a max diff size, restrict it to read-and-write, and issue mid-task corrections ('only change this, don't touch types yet, redo that'). A related constraint is context management — compaction that used to take 10 minutes to trigger now arrives in ~30 seconds at 20x speed, so breaking work into small bounded goals and externalizing state into a persistent file system (agents.md, plan.md, progress.md, verify.md) becomes essential rather than optional.
