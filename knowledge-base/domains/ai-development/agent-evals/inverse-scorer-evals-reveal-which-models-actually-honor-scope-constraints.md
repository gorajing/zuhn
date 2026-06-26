---
id: INS-260626-BF18
domain: ai-development
topic: agent-evals
title: Inverse-scorer evals reveal which models actually honor scope constraints
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - constraint-following
  - model-selection
  - headless-cli
  - scorers
sources:
  - type: youtube
    title: 'Replacing 12K LoC with a 200 LoC Skill — David Gomes, Cursor'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=WE_Gnowy3uw'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Two scorers — did the model work in its worktree, and did it wrongly touch
    the primary checkout — surfaced that Haiku deviates often while Composer and
    Grok stay on track.
  standard: >-
    Gomes, early in his eval-writing journey, built a simple harness by spinning
    up the headless Cursor CLI and attaching two scorers: one confirming the
    model did its work inside the assigned worktree, and the inverse one
    checking whether it did any work in the primary checkout where it shouldn't.
    The paired positive/negative design matters — passing the 'did the right
    work' check is not enough; you also need the 'did no forbidden work' check
    to catch scope leakage.


    Even these basic evals immediately produced an actionable finding: models
    are not equally good at staying in scope. The smaller, less capable Haiku
    frequently strays into the primary checkout, while Composer and Grok behave
    well. He notes the evals can't yet simulate the very long sessions where
    drift is worst, so the measured gap is a floor, not a ceiling. The practical
    takeaways: (1) you don't need deep eval expertise — tooling like Braintrust
    plus a headless agent CLI makes this approachable; (2) write inverse scorers
    for any 'stay-in-bounds' behavior; and (3) use eval results to drive both
    prompt improvements and model-routing decisions rather than assuming all
    models obey instructions equally.
stance: >-
  Cheap headless evals with paired positive and negative scorers expose large
  per-model differences in constraint adherence.
related:
  - INS-260626-7F55
  - INS-260403-22BB
  - INS-260605-09B1
  - INS-260322-B641
  - INS-260329-9A5A
---
Gomes, early in his eval-writing journey, built a simple harness by spinning up the headless Cursor CLI and attaching two scorers: one confirming the model did its work inside the assigned worktree, and the inverse one checking whether it did any work in the primary checkout where it shouldn't. The paired positive/negative design matters — passing the 'did the right work' check is not enough; you also need the 'did no forbidden work' check to catch scope leakage.

Even these basic evals immediately produced an actionable finding: models are not equally good at staying in scope. The smaller, less capable Haiku frequently strays into the primary checkout, while Composer and Grok behave well. He notes the evals can't yet simulate the very long sessions where drift is worst, so the measured gap is a floor, not a ceiling. The practical takeaways: (1) you don't need deep eval expertise — tooling like Braintrust plus a headless agent CLI makes this approachable; (2) write inverse scorers for any 'stay-in-bounds' behavior; and (3) use eval results to drive both prompt improvements and model-routing decisions rather than assuming all models obey instructions equally.
