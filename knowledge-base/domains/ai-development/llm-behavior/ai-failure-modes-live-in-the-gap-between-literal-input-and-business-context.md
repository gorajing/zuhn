---
id: INS-260626-571F
domain: ai-development
topic: llm-behavior
title: AI failure modes live in the gap between literal input and business context
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - failure-modes
  - context
  - business-logic
  - triage
  - alignment
sources:
  - type: youtube
    title: Shipping complex AI applications — Braintrust & Trainline
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ZdheJTfLu-s'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A user saying 'not urgent' about an invoice export before a board meeting is
    actually urgent—the model misses what the business knows.
  standard: >-
    The workshop's sharpest illustration of a real failure mode: a customer
    writes 'this isn't urgent, but I want to export invoices before the board
    meeting.' The model reads 'not urgent' literally and assigns low priority.
    But the business knows that anything tied to a CFO's end-of-quarter board
    report needs immediate attention. The failure isn't a hallucination or a
    broken tool call—it's the model honoring the literal surface of the input
    while missing the domain context that inverts its priority.


    This is why these failures are hard to catch with deterministic checks (the
    output is well-formed and schema-valid) and why they belong in golden
    datasets as captured edge cases. Identifying a 'proper failure mode' means
    encoding the business's implicit priorities—SLAs, revenue impact, who the
    stakeholder is—into evals and prompts, then remediating by tightening the
    prompt and re-running the full eval suite to confirm the fix generalizes
    without regressing other cases.
stance: >-
  The most dangerous agent failures come from the model taking user input at
  face value while missing the business context that changes its true priority.
related:
  - INS-260327-C5D9
  - INS-260410-BC66
  - INS-260322-F6AA
  - INS-260403-00D7
  - INS-260403-754F
---
The workshop's sharpest illustration of a real failure mode: a customer writes 'this isn't urgent, but I want to export invoices before the board meeting.' The model reads 'not urgent' literally and assigns low priority. But the business knows that anything tied to a CFO's end-of-quarter board report needs immediate attention. The failure isn't a hallucination or a broken tool call—it's the model honoring the literal surface of the input while missing the domain context that inverts its priority.

This is why these failures are hard to catch with deterministic checks (the output is well-formed and schema-valid) and why they belong in golden datasets as captured edge cases. Identifying a 'proper failure mode' means encoding the business's implicit priorities—SLAs, revenue impact, who the stakeholder is—into evals and prompts, then remediating by tightening the prompt and re-running the full eval suite to confirm the fix generalizes without regressing other cases.
