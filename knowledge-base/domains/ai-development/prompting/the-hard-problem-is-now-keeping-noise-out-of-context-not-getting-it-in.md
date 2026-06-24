---
id: INS-260605-9402
domain: ai-development
topic: prompting
title: 'The hard problem is now keeping noise out of context, not getting it in'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - context-window
  - noise
  - retrieval
  - dynamic-context
sources:
  - type: youtube
    title: >-
      Bounded Autonomy: Between Free Will and Determinism — Angus J. McLean,
      Oliver
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=t4359sKBu4w'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Context is a soft guardrail you shape; with abundant windows the new
    engineering challenge is exclusion and noise reduction, not inclusion.
  standard: >-
    McLean frames context as a 'soft constraint rather than a hard constraint' —
    you can feed material in, move it around, and shape model behavior with it
    almost as much as with hard guardrails. The historical workflow under small
    windows was aggressive compression (TF-IDF cluster labeling, top-K word
    extraction) just to fit anything in. Now context assembly is dynamic and the
    field has swung from 'a lack of context to too much context.' The
    consequence: 'the challenge is no longer getting context in, but keeping the
    noise out.' For builders this reframes context engineering as a
    curation/exclusion problem — deciding what to drop is now higher-leverage
    than deciding what to add, and stuffing the window degrades rather than
    improves results.
stance: >-
  With large context windows, the binding constraint on agent quality has
  shifted from getting enough context in to keeping irrelevant context out.
related:
  - INS-260410-1BB0
  - INS-260412-23C8
  - INS-260605-A46E
  - INS-260404-B7E4
  - PRI-260406-6531
---
McLean frames context as a 'soft constraint rather than a hard constraint' — you can feed material in, move it around, and shape model behavior with it almost as much as with hard guardrails. The historical workflow under small windows was aggressive compression (TF-IDF cluster labeling, top-K word extraction) just to fit anything in. Now context assembly is dynamic and the field has swung from 'a lack of context to too much context.' The consequence: 'the challenge is no longer getting context in, but keeping the noise out.' For builders this reframes context engineering as a curation/exclusion problem — deciding what to drop is now higher-leverage than deciding what to add, and stuffing the window degrades rather than improves results.
