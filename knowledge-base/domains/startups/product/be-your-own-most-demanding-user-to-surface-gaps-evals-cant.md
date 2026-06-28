---
id: INS-260627-115C
domain: startups
topic: product
title: Be your own most demanding user to surface gaps evals can't
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - dogfooding
  - product-development
  - flywheel
  - evals
  - feedback-loops
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
    Antigravity's edge comes from DeepMind engineers and researchers using it
    daily, which exposes model gaps at a 'very real level that eval simply can't
    give you' and feeds research priorities back into the product.
  standard: >-
    Hou's stated secret after three years in codegen is to 'be your own biggest
    user.' Giving Google engineers and DeepMind researchers internal access
    means the people improving the models also experience the model's gaps in
    real workflows — slow pages, weak computer-use behavior, poor artifact
    handling — at a fidelity that aggregate eval metrics cannot capture. An
    infra engineer who feels a slow page just fixes it; a researcher who sees
    computer-use fail in context knows exactly what to train against.


    The flywheel has two distinct mechanisms worth separating. First, dogfooding
    generates ground-truth gap signal that evals miss because evals measure what
    you thought to measure. Second, the gaps are negotiated across co-located
    teams: 'your agent harness is screwed up, fix your tools' from the research
    side, and 'the capability is off here, maybe a data-distribution mismatch'
    from the product side. Both sides fix their half. The general lesson for any
    product organization (not just AI labs): the highest-bandwidth feedback
    channel is your own team depending on the product for real work, and
    proximity between the people who build the dependency and the people who can
    fix it is what turns that signal into velocity.
stance: >-
  Aggressive internal dogfooding reveals product and capability gaps that
  benchmarks and evals systematically miss, creating a self-reinforcing
  research-product flywheel.
related:
  - INS-260404-82B2
  - INS-260403-B2A5
  - INS-260626-EDB3
  - INS-260625-D1F9
  - INS-260405-880C
---
Hou's stated secret after three years in codegen is to 'be your own biggest user.' Giving Google engineers and DeepMind researchers internal access means the people improving the models also experience the model's gaps in real workflows — slow pages, weak computer-use behavior, poor artifact handling — at a fidelity that aggregate eval metrics cannot capture. An infra engineer who feels a slow page just fixes it; a researcher who sees computer-use fail in context knows exactly what to train against.

The flywheel has two distinct mechanisms worth separating. First, dogfooding generates ground-truth gap signal that evals miss because evals measure what you thought to measure. Second, the gaps are negotiated across co-located teams: 'your agent harness is screwed up, fix your tools' from the research side, and 'the capability is off here, maybe a data-distribution mismatch' from the product side. Both sides fix their half. The general lesson for any product organization (not just AI labs): the highest-bandwidth feedback channel is your own team depending on the product for real work, and proximity between the people who build the dependency and the people who can fix it is what turns that signal into velocity.
