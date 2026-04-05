---
id: INS-260329-F84E
domain: ai-development
topic: product-strategy
title: Complimenting AI before reporting bugs produces better debugging responses
actionability: immediate
confidence: low
shelf_life: time-sensitive
status: active
tags:
  - ai-coding
  - debugging
  - prompting-strategy
  - human-ai-interaction
sources:
  - type: youtube
    title: 'Figma To App Store In 37 Minutes With AI [Tutorial]'
    author: Starter Story Build
    url: 'https://youtube.com/watch?v=adVJ0DBNOAw'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Lead with what the AI got right before describing the bug — this anchors it
    on working code and narrows the fix scope.
  standard: >-
    Ross's debugging workflow is notable: 'I like to compliment my AI —
    everything looks great — and then say but when I restart the app it takes me
    back to welcome.' This isn't just social niceties applied to a machine. The
    positive framing serves a functional purpose: it tells the AI which parts of
    the codebase are correct and should NOT be touched, narrowing the search
    space for the bug. Compare this to just saying 'there's a bug' — the AI has
    no signal about what's working and might refactor functioning code. Ross
    also emphasizes providing specific reproduction steps rather than vague
    descriptions. The combination of positive anchoring + specific reproduction
    context produces tighter, more targeted fixes.
stance: >-
  Framing bug reports to AI coding tools as 'everything looks great, but...'
  produces more focused fixes than negative framing because it anchors the AI on
  what's working before narrowing to what's broken.
related:
  - INS-260329-0154
  - INS-260329-0CC5
  - INS-260329-F892
  - PRI-260403-5B3D
  - INS-260329-3423
  - INS-260329-DFD1
  - INS-260329-5EE7
  - INS-260329-F688
evidence:
  - id: INS-260329-F892
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260329-DFD1
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260329-5EE7
    type: EXTENDS
    classified_at: '2026-04-02'
---
Ross's debugging workflow is notable: 'I like to compliment my AI — everything looks great — and then say but when I restart the app it takes me back to welcome.' This isn't just social niceties applied to a machine. The positive framing serves a functional purpose: it tells the AI which parts of the codebase are correct and should NOT be touched, narrowing the search space for the bug. Compare this to just saying 'there's a bug' — the AI has no signal about what's working and might refactor functioning code. Ross also emphasizes providing specific reproduction steps rather than vague descriptions. The combination of positive anchoring + specific reproduction context produces tighter, more targeted fixes.
