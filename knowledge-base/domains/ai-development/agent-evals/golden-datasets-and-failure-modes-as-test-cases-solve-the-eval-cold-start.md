---
id: INS-260626-AC18
domain: ai-development
topic: agent-evals
title: Golden datasets and failure-modes-as-test-cases solve the eval cold start
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - golden-dataset
  - cold-start
  - edge-cases
  - regression-testing
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
    When you have no production traffic, curate known edge cases into a golden
    dataset so releases rest on evidence rather than vibes.
  standard: >-
    The cold-start problem in AI evaluation is 'what does good look like before
    you have users?' The workshop's answer is a golden dataset: a small curated
    set (they used ~10) of inputs, expected outputs, and metadata covering
    non-negotiables and known edge cases—e.g., has the case been categorized, is
    no blocking issue marked low-severity, does escalation stay within SLA
    policy. This gives the business an initial, concrete confidence level so
    you're 'not just releasing based on vibes,' and it doubles as a regression
    suite: any prompt or model change is re-run across the whole set to confirm
    you didn't fix one case while breaking others.


    Crucially, the loop is closed by feeding real production failures back in.
    When an LLM-as-judge or a live trace surfaces a genuine failure with no
    ground truth, you capture it as an edge case, push it into the dataset, and
    replay it through the playground—so the golden set continuously grows toward
    the real distribution. There is no substitute for production data, but a
    hand-built failure-mode set is the right place to start the flywheel from
    nothing.
stance: >-
  You can ship AI with grounded confidence before any production data exists by
  hand-curating edge cases into a golden test set.
related:
  - INS-260605-09E0
  - INS-260405-3CC7
  - INS-260404-5017
  - INS-260625-25D6
  - INS-260605-9F5C
---
The cold-start problem in AI evaluation is 'what does good look like before you have users?' The workshop's answer is a golden dataset: a small curated set (they used ~10) of inputs, expected outputs, and metadata covering non-negotiables and known edge cases—e.g., has the case been categorized, is no blocking issue marked low-severity, does escalation stay within SLA policy. This gives the business an initial, concrete confidence level so you're 'not just releasing based on vibes,' and it doubles as a regression suite: any prompt or model change is re-run across the whole set to confirm you didn't fix one case while breaking others.

Crucially, the loop is closed by feeding real production failures back in. When an LLM-as-judge or a live trace surfaces a genuine failure with no ground truth, you capture it as an edge case, push it into the dataset, and replay it through the playground—so the golden set continuously grows toward the real distribution. There is no substitute for production data, but a hand-built failure-mode set is the right place to start the flywheel from nothing.
