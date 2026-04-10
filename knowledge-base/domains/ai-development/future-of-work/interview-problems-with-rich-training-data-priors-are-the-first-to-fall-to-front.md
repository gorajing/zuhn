---
id: INS-260410-56B4
domain: ai-development
topic: future-of-work
title: >-
  Interview problems with rich training-data priors are the first to fall to
  frontier models
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - hiring
  - evaluation
  - training-data
  - interviews
sources:
  - type: blog
    title: Designing AI resistant technical evaluations
    url: 'https://www.anthropic.com/engineering/AI-resistant-technical-evaluations'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If a problem lives in well-documented territory (bank conflicts, SIMD,
    common compiler tricks), a frontier model will likely outperform humans on
    it within hours.
  standard: >-
    Hume's second attempt at a new take-home used a data-transposition problem
    with bank conflicts, which he'd personally solved from first principles.
    Claude Opus 4.5 still cracked it—partly because engineers across many
    platforms have published on these exact problems, giving the model a much
    larger toolbox than any individual human. The failure mode generalizes: any
    evaluation rooted in a well-trodden domain inherits the evaluator's
    assumption that the problem is hard, while the model simply recognizes
    patterns from training.


    The design implication is that evaluation authors should explicitly audit
    whether their problem lives in distribution. If a competent search over
    Stack Overflow, papers, or GitHub would surface the core trick, the problem
    is probably already compromised. Hume's eventual solution was to go
    weirder—Zachtronics-style puzzles with heavily constrained instruction sets
    that don't resemble any standard platform—sacrificing realism for
    out-of-distributionness.


    This is a broader principle for AI-resistant evaluation: novelty in the
    problem structure matters more than novelty in the surface framing. Dressing
    up a known problem in new variables won't save you; the model will see
    through to the underlying pattern.
stance: >-
  Evaluation problems in well-documented optimization domains lose signal
  fastest because frontier models have massive experience bases to draw on.
related:
  - INS-260323-3F39
  - INS-260410-5951
  - INS-260405-82F3
  - INS-260403-1EFF
  - PRI-260328-A82C
---
Hume's second attempt at a new take-home used a data-transposition problem with bank conflicts, which he'd personally solved from first principles. Claude Opus 4.5 still cracked it—partly because engineers across many platforms have published on these exact problems, giving the model a much larger toolbox than any individual human. The failure mode generalizes: any evaluation rooted in a well-trodden domain inherits the evaluator's assumption that the problem is hard, while the model simply recognizes patterns from training.

The design implication is that evaluation authors should explicitly audit whether their problem lives in distribution. If a competent search over Stack Overflow, papers, or GitHub would surface the core trick, the problem is probably already compromised. Hume's eventual solution was to go weirder—Zachtronics-style puzzles with heavily constrained instruction sets that don't resemble any standard platform—sacrificing realism for out-of-distributionness.

This is a broader principle for AI-resistant evaluation: novelty in the problem structure matters more than novelty in the surface framing. Dressing up a known problem in new variables won't save you; the model will see through to the underlying pattern.
