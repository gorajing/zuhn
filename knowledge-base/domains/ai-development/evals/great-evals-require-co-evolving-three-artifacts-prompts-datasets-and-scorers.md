---
id: INS-260628-A747
domain: ai-development
topic: evals
title: >-
  Great evals require co-evolving three artifacts: prompts, datasets, and
  scorers
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - prompt-engineering
  - datasets
  - scorers
  - evaluation-design
sources:
  - type: youtube
    title: 'The Future of Evals - Ankur Goyal, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=MC55hdWLq4o'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An eval is only as good as the weakest of its three legs — the prompt, the
    dataset, and the scorer — so improve all three together, not just the
    prompt.
  standard: >-
    Most teams treat eval iteration as prompt iteration: stare at a score, tweak
    the prompt, re-run. Goyal's framing is that the prompt is only one of three
    artifacts that determine eval quality. A weak dataset (unrepresentative, too
    small, missing failure modes) makes any score meaningless, and a weak scorer
    (rewarding the wrong thing) actively misleads you. Loop deliberately
    optimizes all three — it suggests edits to data, new scoring ideas, and
    prompt changes — because the combination is what produces a trustworthy
    eval.


    The actionable takeaway: when an eval feels stuck or untrustworthy, audit
    the dataset and scorer before grinding on the prompt. Ask whether your test
    cases actually cover the distribution of real inputs, and whether your
    scorer would catch the failure you're worried about. A 90% score on a bad
    dataset with a lenient scorer tells you nothing. Treat dataset curation and
    scorer design as first-class engineering work, not setup you do once and
    forget.
stance: >-
  Eval quality comes from jointly improving prompts, datasets, AND scorers —
  optimizing the prompt alone leaves most of the gain on the table.
related:
  - INS-260322-D6D7
  - INS-260322-D1AB
  - INS-260530-C385
  - INS-260605-DCE5
  - INS-260605-EF23
  - INS-260625-D1F9
  - INS-260625-0E60
  - INS-260626-67E8
  - INS-260626-8747
  - INS-260626-32B6
---
Most teams treat eval iteration as prompt iteration: stare at a score, tweak the prompt, re-run. Goyal's framing is that the prompt is only one of three artifacts that determine eval quality. A weak dataset (unrepresentative, too small, missing failure modes) makes any score meaningless, and a weak scorer (rewarding the wrong thing) actively misleads you. Loop deliberately optimizes all three — it suggests edits to data, new scoring ideas, and prompt changes — because the combination is what produces a trustworthy eval.

The actionable takeaway: when an eval feels stuck or untrustworthy, audit the dataset and scorer before grinding on the prompt. Ask whether your test cases actually cover the distribution of real inputs, and whether your scorer would catch the failure you're worried about. A 90% score on a bad dataset with a lenient scorer tells you nothing. Treat dataset curation and scorer design as first-class engineering work, not setup you do once and forget.
