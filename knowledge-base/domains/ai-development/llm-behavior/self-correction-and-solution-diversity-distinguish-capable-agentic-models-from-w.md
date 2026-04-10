---
id: INS-260410-CAA4
domain: ai-development
topic: llm-behavior
title: >-
  Self-correction and solution diversity distinguish capable agentic models from
  weaker ones
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - self-correction
  - agentic-behavior
  - claude
  - failure-modes
  - perseverance
sources:
  - type: blog
    title: Claude SWE-Bench Performance
    url: 'https://www.anthropic.com/engineering/swe-bench-sonnet'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Anthropic observed that the upgraded Claude 3.5 Sonnet self-corrects more
    and tries multiple solutions rather than getting stuck repeating the same
    mistake.
  standard: >-
    From reviewing attempts by the upgraded Claude 3.5 Sonnet compared to older
    models, the team notes that the new model self-corrects more often and shows
    an ability to try several different solutions, rather than getting stuck
    making the same mistake over and over. Some tasks took more than 100 turns
    before the model submitted a solution; the model is described as 'tenacious'
    and able to find its way around a problem given enough time.


    This suggests that beyond raw knowledge, the bottleneck for agentic
    performance is the loop-level behavior: recognizing that an attempt failed,
    forming a different hypothesis, and actually executing it rather than trying
    the same fix with minor variations. When evaluating models for agentic use,
    loop behavior on failure is a better signal than one-shot accuracy on closed
    tasks.


    Practical tip: if your agent evals only track single-turn success, you're
    blind to the capability that actually matters. Track attempt diversity and
    recovery-after-failure metrics explicitly.
stance: >-
  The main qualitative upgrade that drove Claude 3.5 Sonnet's SWE-bench jump was
  not raw coding skill but self-correction and willingness to try different
  approaches instead of looping on the same mistake.
related:
  - INS-260330-77E2
  - INS-260410-D034
  - INS-260329-DABC
  - PRI-260406-FB98
  - INS-260410-988F
---
From reviewing attempts by the upgraded Claude 3.5 Sonnet compared to older models, the team notes that the new model self-corrects more often and shows an ability to try several different solutions, rather than getting stuck making the same mistake over and over. Some tasks took more than 100 turns before the model submitted a solution; the model is described as 'tenacious' and able to find its way around a problem given enough time.

This suggests that beyond raw knowledge, the bottleneck for agentic performance is the loop-level behavior: recognizing that an attempt failed, forming a different hypothesis, and actually executing it rather than trying the same fix with minor variations. When evaluating models for agentic use, loop behavior on failure is a better signal than one-shot accuracy on closed tasks.

Practical tip: if your agent evals only track single-turn success, you're blind to the capability that actually matters. Track attempt diversity and recovery-after-failure metrics explicitly.
