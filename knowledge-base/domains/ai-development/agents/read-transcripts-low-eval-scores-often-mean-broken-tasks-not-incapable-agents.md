---
id: INS-260410-E3BB
domain: ai-development
topic: agents
title: >-
  Read transcripts: low eval scores often mean broken tasks, not incapable
  agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - debugging
  - grader-design
  - signal-quality
sources:
  - type: blog
    title: Demystifying evals for AI agents
    url: 'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A 0% pass rate across many trials is almost always a broken task or grader,
    not an incapable model — verify by reading transcripts.
  standard: >-
    Anthropic reports that Opus 4.5 initially scored 42% on CORE-Bench.
    Investigation revealed the eval was penalizing '96.12' when it expected
    '96.124991...', had ambiguous task specs, and included stochastic tasks that
    couldn't be reproduced exactly. After fixing bugs and loosening the
    scaffold, the score jumped to 95%. METR hit a similar issue where tasks
    asked agents to optimize 'to' a score threshold but graded on exceeding it —
    punishing models that followed the instructions.


    The rule of thumb: with frontier models, a 0% pass@100 is almost always a
    signal of a broken task, not an incapable agent. Build tooling to view
    transcripts, read them regularly, and treat unread eval scores as untrusted.
    Failures should feel fair — it should be clear what the agent got wrong and
    why. If it isn't, the eval is measuring grading noise rather than model
    capability, and any optimization pressure you apply will be aimed at the
    wrong target.
stance: >-
  Eval scores should never be taken at face value until someone reads the
  transcripts, because grading bugs and ambiguous specs routinely masquerade as
  model failures.
related:
  - INS-260403-5F69
  - INS-260410-B3C2
  - INS-260410-F0EF
  - INS-260327-0700
  - INS-260323-584D
  - INS-260323-EA36
---
Anthropic reports that Opus 4.5 initially scored 42% on CORE-Bench. Investigation revealed the eval was penalizing '96.12' when it expected '96.124991...', had ambiguous task specs, and included stochastic tasks that couldn't be reproduced exactly. After fixing bugs and loosening the scaffold, the score jumped to 95%. METR hit a similar issue where tasks asked agents to optimize 'to' a score threshold but graded on exceeding it — punishing models that followed the instructions.

The rule of thumb: with frontier models, a 0% pass@100 is almost always a signal of a broken task, not an incapable agent. Build tooling to view transcripts, read them regularly, and treat unread eval scores as untrusted. Failures should feel fair — it should be clear what the agent got wrong and why. If it isn't, the eval is measuring grading noise rather than model capability, and any optimization pressure you apply will be aimed at the wrong target.
