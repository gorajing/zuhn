---
id: INS-260605-46A8
domain: ai-development
topic: agents
title: 'Long-running agents need event-driven notification, not polling'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - notifications
  - long-running-tasks
  - agent-orchestration
  - workflow
sources:
  - type: youtube
    title: >-
      Let's Talk About FOMAT: Fear of Missing Agent Time — Michael Richman,
      Cmd+Ctrl
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=W-SX_srBa3Y'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    For multi-hour agent tasks, replace 'check back in a bit' with push
    notifications that fire when the agent needs you or finishes.
  standard: >-
    Today coding tasks run 5-45 minutes, so you can roughly time your check-ins
    and idle waste is small. But Richman argues that window 'is only going to
    get longer.' When a task runs for 5 hours or 5 days, polling breaks down
    completely — you cannot keep checking, and the longer an agent waits
    blocked, the more agent time you've missed.


    The fix is to invert control: the agent's lifecycle (running,
    blocked-for-input, complete, off-the-rails) should emit events that notify
    you wherever you are. This is the difference between a poll loop and an
    interrupt. Practically it means instrumenting the agent's state transitions
    and wiring them to push notifications, so the human attends to the agent
    exactly when needed rather than guessing — turning babysitting into
    on-demand response.
stance: >-
  Once agent tasks run for hours or days, periodic check-ins fail and you must
  be notified the moment an agent blocks or completes.
related:
  - INS-260327-C5D9
  - INS-260403-656F
  - INS-260501-247C
  - INS-260524-8E5D
  - INS-260627-3963
  - INS-260626-8723
  - INS-260327-13B3
  - INS-260626-9732
  - INS-260410-85AD
  - INS-260627-D61C
---
Today coding tasks run 5-45 minutes, so you can roughly time your check-ins and idle waste is small. But Richman argues that window 'is only going to get longer.' When a task runs for 5 hours or 5 days, polling breaks down completely — you cannot keep checking, and the longer an agent waits blocked, the more agent time you've missed.

The fix is to invert control: the agent's lifecycle (running, blocked-for-input, complete, off-the-rails) should emit events that notify you wherever you are. This is the difference between a poll loop and an interrupt. Practically it means instrumenting the agent's state transitions and wiring them to push notifications, so the human attends to the agent exactly when needed rather than guessing — turning babysitting into on-demand response.
