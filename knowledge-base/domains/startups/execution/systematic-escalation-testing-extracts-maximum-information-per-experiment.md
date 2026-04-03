---
id: INS-260330-A3B7
domain: startups
topic: execution
title: Systematic escalation testing extracts maximum information per experiment
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - testing-methodology
  - iteration
  - systematic-approach
  - failure-analysis
sources:
  - type: youtube
    title: 'Trying to Catch a 1,000 MPH Baseball - Smarter Every Day 247'
    author: SmarterEveryDay
    url: 'https://www.youtube.com/watch?v=4I-p8vjQ95s'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Testing baseline → single unit → stacked units in sequence reveals the
    failure mode at each stage, which a single end-state test would obscure.
  standard: >-
    The team structures their experiment as a deliberate escalation: first fire
    at an unprotected dummy (baseline), then a single glove on the dummy, then a
    single glove on an I-beam, then compare two glove types, then stack 9
    gloves. Each step answers a specific question and informs the next. The
    baseline showed the ball goes clean through a body. The single-glove test
    showed the glove fails but partially protects the body. The comparison
    showed H-weave deflects slightly while basket-weave doesn't. The stacked
    test showed that even 9 gloves can't stop the ball.


    This is directly applicable to product development and startup execution.
    Instead of building the full solution and testing once, escalate
    systematically: test the riskiest assumption first with the simplest
    possible experiment. Each result calibrates your model before investing in
    the next level of complexity. The team would have learned almost nothing by
    jumping straight to 9 stacked gloves — they wouldn't know whether failure
    was at glove 1 or glove 8, whether the glove type mattered, or what the
    baseline damage looked like without any protection.
stance: >-
  Testing against progressively harder conditions in sequence reveals failure
  modes and thresholds that a single ambitious test would miss entirely
related:
  - INS-260329-4D24
  - INS-260323-1811
  - INS-260329-D8F2
  - INS-260329-D357
  - INS-260329-C689
evidence:
  - id: INS-260320-10CC
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260323-1811
    type: SUPPORTS
    classified_at: '2026-04-02'
---
The team structures their experiment as a deliberate escalation: first fire at an unprotected dummy (baseline), then a single glove on the dummy, then a single glove on an I-beam, then compare two glove types, then stack 9 gloves. Each step answers a specific question and informs the next. The baseline showed the ball goes clean through a body. The single-glove test showed the glove fails but partially protects the body. The comparison showed H-weave deflects slightly while basket-weave doesn't. The stacked test showed that even 9 gloves can't stop the ball.

This is directly applicable to product development and startup execution. Instead of building the full solution and testing once, escalate systematically: test the riskiest assumption first with the simplest possible experiment. Each result calibrates your model before investing in the next level of complexity. The team would have learned almost nothing by jumping straight to 9 stacked gloves — they wouldn't know whether failure was at glove 1 or glove 8, whether the glove type mattered, or what the baseline damage looked like without any protection.
