---
id: INS-260628-492E
domain: ai-development
topic: prompting
title: >-
  Prompts entangle three separable concerns, making them a bad programming
  abstraction
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompts
  - abstraction
  - separation-of-concerns
  - dspy
  - coupling
sources:
  - type: youtube
    title: >-
      On Engineering AI Systems that Endure The Bitter Lesson - Omar Khattab,
      DSPy & Databricks
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=qdmxApz3EJI'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A prompt is a stringly-typed canvas that couples what you're solving with
    overfitted model tricks, the inference strategy, and formatting — fine for
    managing an agent, terrible for engineering a system.
  standard: >-
    Khattab's sharpest claim: a prompt is a great abstraction for *management*
    (it's like a Slack channel to a remote employee) but a horrible one for
    *programming*, and that needs fixing ASAP. A prompt is a "stringly-typed
    canvas" — one big blob with no structure even when latent structure exists —
    and it entangles three things that should be separate. (1) The fundamental
    task definition: the real engineering content, what you're actually trying
    to solve. (2) Overfitted, half-baked, model-specific tricks: phrasings and
    examples that happened to click for one model, with no way to tell them
    apart from the real spec. (3) The inference-time strategy and formatting:
    "you are an agent," "reason step by step," "answer in JSON" — strategy that
    changes every few weeks, baked literally into the string.


    The result is the square-root anti-pattern in disguise: you stare at "do not
    ignore this, generate XML, you are Professor Einstein, I'll tip you $1000"
    and can't separate intent from incantation, the same way you'd squint at
    unexplained bit-shifts. The fix is not better prompts but a different medium
    that keeps task definition decoupled from the swappable model, inference
    strategy, and formatting layers — which is the motivation behind DSPy
    signatures.
stance: >-
  A prompt is a horrible abstraction for programming because it fuses task
  definition, model-specific tricks, inference strategy, and formatting into one
  untyped blob.
related:
  - INS-260321-82FE
  - INS-260403-F0AA
  - PRI-260406-1AC6
  - INS-260409-325B
  - INS-260410-E27A
  - INS-260410-87B5
  - INS-260514-6DF3
  - INS-260519-ED17
  - INS-260605-2284
  - INS-260625-BD36
---
Khattab's sharpest claim: a prompt is a great abstraction for *management* (it's like a Slack channel to a remote employee) but a horrible one for *programming*, and that needs fixing ASAP. A prompt is a "stringly-typed canvas" — one big blob with no structure even when latent structure exists — and it entangles three things that should be separate. (1) The fundamental task definition: the real engineering content, what you're actually trying to solve. (2) Overfitted, half-baked, model-specific tricks: phrasings and examples that happened to click for one model, with no way to tell them apart from the real spec. (3) The inference-time strategy and formatting: "you are an agent," "reason step by step," "answer in JSON" — strategy that changes every few weeks, baked literally into the string.

The result is the square-root anti-pattern in disguise: you stare at "do not ignore this, generate XML, you are Professor Einstein, I'll tip you $1000" and can't separate intent from incantation, the same way you'd squint at unexplained bit-shifts. The fix is not better prompts but a different medium that keeps task definition decoupled from the swappable model, inference strategy, and formatting layers — which is the motivation behind DSPy signatures.
