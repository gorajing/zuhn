---
id: INS-260605-E54A
domain: ai-development
topic: research-methodology
title: >-
  High-quality tasks fail 'cleanly' — failures from real difficulty, not broken
  environments
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - failure-analysis
  - data-quality
  - training-signal
  - evaluation
  - hill-climbing
sources:
  - type: youtube
    title: 'Task Fidelity Scaling Laws — Kobie Crawdord, Snorkel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=YYH0DMQr30A'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Accepted tasks produced 'cleaner failures' — logic errors and
    incomplete-task failures from true difficulty — which give models useful
    hill-climbing signal, unlike degenerate environmental failures that no model
    could solve.
  standard: >-
    Beyond pass rate, Snorkel categorized failure modes to distinguish
    meaningful failures (the model didn't reach a logical conclusion it should
    have) from degenerate ones (an environmental defect makes the task
    unsolvable for any model). Comparing accepted versus rejected tasks, they
    found a reversal in the distribution of logic-error and incomplete-task
    failures: accepted tasks overrepresent 'clean' difficulty-driven failures.


    This matters because pass rate alone is a deceptive quality metric — a low
    pass rate can reflect a broken environment rather than a hard problem. A
    task that fails because of genuine difficulty exposes the model's reasoning
    gap and provides gradient to climb; a task that fails because of a missing
    dependency or malformed environment provides only noise. When auditing a
    training set, inspect the failure taxonomy, not just aggregate accuracy: the
    shape of failures tells you whether the data can actually teach.
stance: >-
  The diagnostic signature of a good training task is that its failures stem
  from genuine task difficulty rather than degenerate environmental defects.
related:
  - INS-260330-D7CC
  - INS-260405-88A4
  - INS-260410-FD24
  - INS-260410-E73E
  - INS-260602-E2BD
  - INS-260605-09B1
  - INS-260625-0021
  - PRI-260407-69A9
  - INS-260625-E9A9
  - INS-260625-6E92
---
Beyond pass rate, Snorkel categorized failure modes to distinguish meaningful failures (the model didn't reach a logical conclusion it should have) from degenerate ones (an environmental defect makes the task unsolvable for any model). Comparing accepted versus rejected tasks, they found a reversal in the distribution of logic-error and incomplete-task failures: accepted tasks overrepresent 'clean' difficulty-driven failures.

This matters because pass rate alone is a deceptive quality metric — a low pass rate can reflect a broken environment rather than a hard problem. A task that fails because of genuine difficulty exposes the model's reasoning gap and provides gradient to climb; a task that fails because of a missing dependency or malformed environment provides only noise. When auditing a training set, inspect the failure taxonomy, not just aggregate accuracy: the shape of failures tells you whether the data can actually teach.
