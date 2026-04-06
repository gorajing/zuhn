---
id: INS-260327-7214
domain: ai-development
topic: product-strategy
title: 'Autonomous driving requires safety-by-design architecture, not just more data'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - safety-by-design
  - autonomous-driving
  - architecture
  - ai-safety
sources:
  - type: youtube
    title: >-
      How End-to-End Learning Created Autonomous Driving 2.0: Wayve CEO Alex
      Kendall
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=8x_O8BeGNTw'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Autonomous driving is fundamentally different from language AI:
    hallucinations kill people, so the architecture must guarantee functional
    and behavioral safety rather than relying on scale to eliminate errors.
  standard: >-
    Alex Kendall draws a critical distinction from language AI: in driving, you
    cannot tolerate hallucinations. This means the architecture must be
    data-driven and end-to-end but also functionally safe and able to build a
    robust behavioral safety case. You need real-time performance on board
    vehicles with limited compute, and you need to handle every novel situation
    safely, even things never seen in training data.


    The insight is that scale alone is insufficient for safety-critical physical
    AI. While more diverse data improves generalization (helping handle road
    workers doing unexpected things, for example), the architecture must include
    safety guarantees that go beyond what statistical learning provides. This is
    where physical AI diverges most sharply from digital AI, and it explains why
    some companies struggle with 'hybrid' approaches that try to bolt safety
    constraints onto end-to-end systems rather than designing them in from the
    start.
stance: >-
  Unlike language models where hallucinations are tolerable, autonomous driving
  demands architectures that are safe by design, meaning you cannot just pump
  more data in and hope problems go away; the safety case must be built into the
  architecture itself.
related:
  - INS-260325-ADF3
  - INS-260403-F100
  - INS-260402-8E46
  - INS-260323-C10D
  - PRI-260323-1CF9
  - INS-260404-0B8E
evidence:
  - id: INS-260403-F100
    type: SUPPORTS
    classified_at: '2026-04-05'
---
Alex Kendall draws a critical distinction from language AI: in driving, you cannot tolerate hallucinations. This means the architecture must be data-driven and end-to-end but also functionally safe and able to build a robust behavioral safety case. You need real-time performance on board vehicles with limited compute, and you need to handle every novel situation safely, even things never seen in training data.

The insight is that scale alone is insufficient for safety-critical physical AI. While more diverse data improves generalization (helping handle road workers doing unexpected things, for example), the architecture must include safety guarantees that go beyond what statistical learning provides. This is where physical AI diverges most sharply from digital AI, and it explains why some companies struggle with 'hybrid' approaches that try to bolt safety constraints onto end-to-end systems rather than designing them in from the start.
