---
id: INS-260628-79DC
domain: ai-development
topic: evals
title: >-
  A scoring function is a spec for your product, so a generic scorer specs
  someone else's
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - llm-as-judge
  - scoring
  - product-spec
  - ai-product
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
    Treat scorers like a PRD for your AI app — generic scorers encode someone
    else's requirements, so write and keep revising your own.
  standard: >-
    Teams routinely ask which scorers a platform 'comes with' so they can avoid
    thinking about scoring. Goyal's reframe: a scorer is a spec — a PRD — for
    your AI application. Every sufficiently advanced company Braintrust works
    with writes its own scoring functions and modifies them constantly. The
    corollary is uncomfortable but clarifying: if you adopt a generic,
    off-the-shelf scorer, you've adopted a specification written for someone
    else's project, and it will systematically reward and penalize the wrong
    things for yours.


    This has two consequences. First, it justifies real engineering investment
    in scoring rather than treating it as configuration — the scorer is where
    your product's definition of 'good' actually lives. Second, it sets the
    expectation that scorers are living artifacts that change as your
    understanding of the use case sharpens, not static metrics you set once. The
    mental shift is from 'pick a scorer' to 'author and maintain the spec of
    what correct output means for my users,' which is the same discipline you'd
    apply to a product requirements doc.
stance: >-
  Using an off-the-shelf scorer means grading your AI product against someone
  else's specification, so any sufficiently advanced team must write and
  continuously modify its own scorers.
related:
  - INS-260410-B3C2
  - INS-260412-9719
  - INS-260626-BF18
  - INS-260519-02A9
  - INS-260627-8530
---
Teams routinely ask which scorers a platform 'comes with' so they can avoid thinking about scoring. Goyal's reframe: a scorer is a spec — a PRD — for your AI application. Every sufficiently advanced company Braintrust works with writes its own scoring functions and modifies them constantly. The corollary is uncomfortable but clarifying: if you adopt a generic, off-the-shelf scorer, you've adopted a specification written for someone else's project, and it will systematically reward and penalize the wrong things for yours.

This has two consequences. First, it justifies real engineering investment in scoring rather than treating it as configuration — the scorer is where your product's definition of 'good' actually lives. Second, it sets the expectation that scorers are living artifacts that change as your understanding of the use case sharpens, not static metrics you set once. The mental shift is from 'pick a scorer' to 'author and maintain the spec of what correct output means for my users,' which is the same discipline you'd apply to a product requirements doc.
