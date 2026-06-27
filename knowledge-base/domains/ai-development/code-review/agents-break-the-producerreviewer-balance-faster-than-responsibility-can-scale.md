---
id: INS-260627-EB75
domain: ai-development
topic: code-review
title: >-
  Agents break the producer/reviewer balance faster than responsibility can
  scale
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - code-review
  - team-composition
  - accountability
  - pull-requests
  - scaling
sources:
  - type: youtube
    title: >-
      The Friction is Your Judgment — Armin Ronacher & Cristina Poncela Cubeiro,
      Earendil
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_Zcw_sVF6hU'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents give every engineer a multiple of their producing power but none of
    their reviewing power, so PRs pile up and reviews get rubber-stamped.
  standard: >-
    Before agents, engineering teams were supply-constrained on code creation,
    which kept a rough balance between writing and reviewing. Agents shatter
    that balance: each engineer now produces far more code than they can review,
    and organizations widen the pool of people shipping code — marketing people,
    former-engineer CEOs — none of whom carry the responsibility, which still
    rests with the engineering team. The total number of entities (human and
    machine) participating in code creation now outnumbers the ones that can
    carry responsibility, because the machine cannot yet be responsible for its
    changes. The visible symptom is reviews being skipped or rubber-stamped,
    especially on the daunting 5,000-line PRs that are exactly the ones that
    most need scrutiny. The countermeasure is to push back toward small PRs that
    keep the reviewing process viable, and to recognize the amplification
    explicitly rather than pretend the old balance still holds.
stance: >-
  AI multiplies each engineer's code-production power without multiplying
  reviewing power or accountability, so reviews collapse into rubber-stamping.
related:
  - INS-260514-8424
  - INS-260530-2E27
  - INS-260605-9719
  - INS-260626-A084
  - INS-260627-765B
  - INS-260530-D34F
---
Before agents, engineering teams were supply-constrained on code creation, which kept a rough balance between writing and reviewing. Agents shatter that balance: each engineer now produces far more code than they can review, and organizations widen the pool of people shipping code — marketing people, former-engineer CEOs — none of whom carry the responsibility, which still rests with the engineering team. The total number of entities (human and machine) participating in code creation now outnumbers the ones that can carry responsibility, because the machine cannot yet be responsible for its changes. The visible symptom is reviews being skipped or rubber-stamped, especially on the daunting 5,000-line PRs that are exactly the ones that most need scrutiny. The countermeasure is to push back toward small PRs that keep the reviewing process viable, and to recognize the amplification explicitly rather than pretend the old balance still holds.
