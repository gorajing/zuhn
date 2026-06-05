---
id: INS-260605-29BD
domain: ai-development
topic: agent-patterns
title: Reversibility bounds the cost of mistakes and makes users bolder
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - reversibility
  - undo
  - risk
  - agent-design
  - cursor
  - roi
sources:
  - type: youtube
    title: 'What the Best Agents Share — Mardu Swanepoel, Flinn AI'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=7CrPrHgoEYk'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Easy undo bounds the downside cost of agent actions, simplifying the user's
    ROI calculation and encouraging them to attempt bolder, higher-value tasks.
  standard: >-
    Reversibility is the user's ability to undo what the agent did, and its core
    value is bounding the cost of mistakes: when the worst-case downside is
    known and contained, the ROI calculation becomes easy and the user readily
    says 'go ahead' instead of hesitating over potentially large consequences.
    The behavioral result is that users become bolder, take more risks, and
    assign higher-value tasks to the agent. Cursor implements reversibility at
    multiple granularities — accept/reject at the line level, accept at the file
    level, rewind to earlier conversation states to undo the last several
    messages' changes, and running multiple parallel outputs from the same input
    across different models with the explicit plan of discarding all but the
    best. Harvey achieves the same through a Microsoft Word add-in that
    integrates the native Word API so changes are reviewed and accepted exactly
    as an editor would natively in Word.
stance: >-
  Letting users easily undo agent actions makes them willing to delegate
  higher-value, higher-risk tasks.
related:
  - INS-260403-C1EB
  - INS-260605-B610
  - INS-260605-A175
  - INS-260403-0350
  - PRI-260328-8317
  - INS-260330-8F07
  - INS-260605-2627
---
Reversibility is the user's ability to undo what the agent did, and its core value is bounding the cost of mistakes: when the worst-case downside is known and contained, the ROI calculation becomes easy and the user readily says 'go ahead' instead of hesitating over potentially large consequences. The behavioral result is that users become bolder, take more risks, and assign higher-value tasks to the agent. Cursor implements reversibility at multiple granularities — accept/reject at the line level, accept at the file level, rewind to earlier conversation states to undo the last several messages' changes, and running multiple parallel outputs from the same input across different models with the explicit plan of discarding all but the best. Harvey achieves the same through a Microsoft Word add-in that integrates the native Word API so changes are reviewed and accepted exactly as an editor would natively in Word.
