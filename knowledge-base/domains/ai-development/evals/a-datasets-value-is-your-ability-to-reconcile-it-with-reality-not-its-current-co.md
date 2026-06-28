---
id: INS-260628-26C6
domain: ai-development
topic: evals
title: >-
  A dataset's value is your ability to reconcile it with reality, not its
  current contents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - datasets
  - overfitting
  - data-curation
  - human-in-the-loop
sources:
  - type: youtube
    title: "Five hard earned lessons about Evals —\_Ankur Goyal, Braintrust"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=a4BV0gGmXgA'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Engineer a dataset as a continuous reconciliation loop with reality; the
    real overfitting danger is a frozen dataset, and a human with taste — not
    automation — should select which user feedback enters it.
  standard: >-
    No dataset you build ahead of time represents what users actually experience
    (rare exceptions like competition math already work and need no eval). So
    Goyal argues the dataset's value isn't its state at any moment — it's how
    well you're equipped to reconcile it with the reality you want, which is an
    engineering problem, not a given artifact. This directly answers the common
    overfitting worry about turning every user complaint into an eval: he is far
    more worried about overfitting to a fixed dataset that drifts from reality
    than to one continuously updated with real feedback.


    The non-obvious operational choice: Braintrust deliberately does not
    auto-add user feedback (e.g., thumbs-down) into datasets, and some customers
    complain about it. The reason is that a human with taste should triage which
    feedback is interesting — distinguishing 'this should obviously work and
    sadly doesn't, add it' from noise like 'the answer was right but I didn't
    like it.' Automation would flood the dataset with low-signal points;
    curation by someone building intuition about the problem is what keeps
    reconciliation honest. The takeaway: invest in the pipeline and the human
    judgment that feeds the dataset, not in perfecting a snapshot.
stance: >-
  The most important property of an eval dataset is the engineering process that
  continuously reconciles it with real user behavior, so the bigger overfitting
  risk is a stale dataset, not one updated with curated user feedback.
related:
  - INS-260323-DB7B
  - INS-260329-E4F6
  - INS-260329-5F96
  - INS-260409-4290
  - INS-260409-A0B4
  - INS-260603-6FE3
  - INS-260605-278E
  - INS-260605-004A
  - INS-260605-434D
  - INS-260625-E10F
---
No dataset you build ahead of time represents what users actually experience (rare exceptions like competition math already work and need no eval). So Goyal argues the dataset's value isn't its state at any moment — it's how well you're equipped to reconcile it with the reality you want, which is an engineering problem, not a given artifact. This directly answers the common overfitting worry about turning every user complaint into an eval: he is far more worried about overfitting to a fixed dataset that drifts from reality than to one continuously updated with real feedback.

The non-obvious operational choice: Braintrust deliberately does not auto-add user feedback (e.g., thumbs-down) into datasets, and some customers complain about it. The reason is that a human with taste should triage which feedback is interesting — distinguishing 'this should obviously work and sadly doesn't, add it' from noise like 'the answer was right but I didn't like it.' Automation would flood the dataset with low-signal points; curation by someone building intuition about the problem is what keeps reconciliation honest. The takeaway: invest in the pipeline and the human judgment that feeds the dataset, not in perfecting a snapshot.
