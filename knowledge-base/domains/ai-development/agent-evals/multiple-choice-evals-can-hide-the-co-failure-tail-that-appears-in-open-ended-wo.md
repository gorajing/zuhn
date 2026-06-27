---
id: INS-260627-9C1F
domain: ai-development
topic: agent-evals
title: >-
  Multiple-choice evals can hide the co-failure tail that appears in open-ended
  work
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - eval-design
  - benchmark-format
  - open-ended-tasks
  - co-failure
  - agent-evals
sources:
  - type: blog
    title: >-
      When Does Combining Language Models Help? A Co-Failure Ceiling on Routing,
      Voting, and Mixture-of-Agents Across 67 Frontier Models
    url: 'https://arxiv.org/html/2606.27288'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If production is open-ended, do not trust a multiple-choice eval to reveal
    shared model failure.
  standard: >-
    Multiple-choice tasks can create a guess floor and option cues that reduce
    all-model failure, making a model pool look more diversifiable than it will
    be in open-ended production. The paper's GPQA comparison is the clean
    warning: the same science questions changed regime when the answer format
    changed. For agent evals, match the production answer format before
    estimating routing headroom, especially for coding, research, planning, and
    free-form operational tasks.
  deep: >-
    This is an eval design constraint. A product team should not use optioned
    benchmark scores to justify a router for free-response agents. If the
    deployed agent writes code, diagnoses incidents, or produces plans, build
    the held-out matrix in that same open-ended format and grade consequences or
    executable outputs where possible.
stance: >-
  The paper reports that co-failure is populated on open-ended math,
  execution-graded code, and free-response GPQA, while the same GPQA content in
  multiple-choice format has near-zero all-model failure. Holding content fixed
  and stripping options opened a co-failure tail, so format can decide whether
  orchestration is ceiling-bound.
related:
  - INS-260626-67E8
  - INS-260605-09E0
  - INS-260625-0021
  - INS-260625-63AF
  - INS-260625-D1F9
---
Multiple-choice tasks can create a guess floor and option cues that reduce all-model failure, making a model pool look more diversifiable than it will be in open-ended production. The paper's GPQA comparison is the clean warning: the same science questions changed regime when the answer format changed. For agent evals, match the production answer format before estimating routing headroom, especially for coding, research, planning, and free-form operational tasks.
