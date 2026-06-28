---
id: INS-260627-A224
domain: ai-development
topic: product-strategy
title: Ship paradigms ahead of model capability to give research a hill to climb
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - co-design
  - research-product
  - optimization-gradient
  - capability-gaps
  - roadmap-strategy
sources:
  - type: youtube
    title: 'Defying Gravity - Kevin Hou, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=HN-F-OQe6j0'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Artifacts performed poorly on early model versions because that interaction
    pattern wasn't in the training distribution, so the team built it anyway to
    give research 'a hill to climb' and steadily improve the capability.
  standard: >-
    When Antigravity introduced artifacts, the models were initially bad at them
    — the concept of generating reviewable, dynamic representations 'was not in
    the data distribution.' Rather than waiting for the capability to exist
    before designing for it, the team shipped the pattern and worked with
    research to 'give you a hill to climb,' steadily improving the model's
    ability to handle artifacts until they could launch Gemini 3 Pro with strong
    artifact support. The product requirement became the training target.


    This inverts the conventional sequencing of 'capability first, then
    product.' By specifying a desired interaction the model can't yet do, you
    convert a vague aspiration into a concrete, measurable optimization gradient
    that research can climb. The precondition is the tight research-product
    coupling described elsewhere in the talk — without it, shipping ahead of
    capability just ships a broken feature. The strategic implication: in an org
    that controls both the model and the product, the product roadmap can
    function as a research roadmap, deliberately seeding gaps that pull the
    frontier forward instead of passively consuming whatever the model already
    does well.
stance: >-
  Deliberately shipping a product pattern the model can't yet do well creates a
  measurable optimization gradient that pulls model capability forward faster
  than waiting for the capability first.
related:
  - INS-260412-9777
  - INS-260409-1FD3
  - INS-260404-CE26
  - INS-260424-0554
  - INS-260625-43B3
---
When Antigravity introduced artifacts, the models were initially bad at them — the concept of generating reviewable, dynamic representations 'was not in the data distribution.' Rather than waiting for the capability to exist before designing for it, the team shipped the pattern and worked with research to 'give you a hill to climb,' steadily improving the model's ability to handle artifacts until they could launch Gemini 3 Pro with strong artifact support. The product requirement became the training target.

This inverts the conventional sequencing of 'capability first, then product.' By specifying a desired interaction the model can't yet do, you convert a vague aspiration into a concrete, measurable optimization gradient that research can climb. The precondition is the tight research-product coupling described elsewhere in the talk — without it, shipping ahead of capability just ships a broken feature. The strategic implication: in an org that controls both the model and the product, the product roadmap can function as a research roadmap, deliberately seeding gaps that pull the frontier forward instead of passively consuming whatever the model already does well.
