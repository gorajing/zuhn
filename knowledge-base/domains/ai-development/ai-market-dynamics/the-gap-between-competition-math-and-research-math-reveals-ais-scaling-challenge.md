---
id: INS-260327-40DA
domain: ai-development
topic: ai-market-dynamics
title: >-
  The gap between competition math and research math reveals AI's scaling
  challenge
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - reasoning-scale
  - ai-limitations
  - test-time-compute
  - research-math
sources:
  - type: youtube
    title: OpenAI’s IMO Team on Why Models Are Finally Solving Elite-Level Math
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=EEIPtofVe2Q'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Despite rapid benchmark progress, the gap between solving hour-long
    competition problems and month-long research problems remains a 1000x
    scaling challenge.
  standard: >-
    Noam Brown provides a sobering perspective: models went from grade school
    math (seconds) to IMO problems (1.5 hours) in two years, but research math
    requires 1,500+ hours of thinking, and Millennium Prize problems have
    consumed entire lifetimes. Each evaluation at longer timescales itself takes
    that long, creating a fundamental speed bump on progress.


    Critically, the model that achieved IMO gold also knew when it couldn't
    solve Problem 6 -- acknowledging its limits rather than hallucinating an
    answer. This self-awareness at the frontier of capability is arguably as
    important as the capability itself. For AI product builders, this means
    managing expectations: AI will excel at tasks requiring hours of reasoning
    before it tackles tasks requiring months, and honest uncertainty
    communication is a feature, not a bug.
stance: >-
  The jump from solving 1.5-hour competition problems to 1,500-hour research
  problems represents a thousand-fold increase in required reasoning time that
  current scaling approaches haven't yet bridged.
related:
  - INS-260321-9824
  - INS-260323-95BC
  - INS-260326-80B1
  - INS-260403-5427
  - INS-260330-E282
  - PRI-260328-4CC0
  - INS-260322-474A
  - INS-260327-12BE
  - INS-260403-D645
  - INS-260405-DC20
evidence:
  - id: INS-260323-95BC
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260327-12BE
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-201F
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260403-5427
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
  - id: INS-260403-D645
    type: SUPPORTS
    classified_at: '2026-04-05'
  - id: INS-260405-DC20
    type: TRANSFERS_TO
    classified_at: '2026-04-06'
---
Noam Brown provides a sobering perspective: models went from grade school math (seconds) to IMO problems (1.5 hours) in two years, but research math requires 1,500+ hours of thinking, and Millennium Prize problems have consumed entire lifetimes. Each evaluation at longer timescales itself takes that long, creating a fundamental speed bump on progress.

Critically, the model that achieved IMO gold also knew when it couldn't solve Problem 6 -- acknowledging its limits rather than hallucinating an answer. This self-awareness at the frontier of capability is arguably as important as the capability itself. For AI product builders, this means managing expectations: AI will excel at tasks requiring hours of reasoning before it tackles tasks requiring months, and honest uncertainty communication is a feature, not a bug.
