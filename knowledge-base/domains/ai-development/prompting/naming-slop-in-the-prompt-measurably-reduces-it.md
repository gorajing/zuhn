---
id: INS-260627-5785
domain: ai-development
topic: prompting
title: Naming 'slop' in the prompt measurably reduces it
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - prompting
  - slop
  - skills
  - output-quality
  - anti-slop
sources:
  - type: youtube
    title: No More Slop – swyx
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=IoiHI7p12Ao'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A skill/prompt that explicitly acknowledges slop and tells the model not to
    produce it visibly improves the output, so 'don't produce slop' is a usable,
    concrete instruction.
  standard: >-
    swyx cites a skill set (from speakers Mahesh and Barry) whose prompt
    explicitly acknowledges slop and instructs Claude not to produce it, and
    reports the output 'improves significantly from left to right' as a result.
    The counterintuitive part is that 'slop' is vague human shorthand, yet
    naming it in the prompt still steers the model toward higher-quality output
    — the concept is apparently well enough represented in the model's training
    to act on.


    The practical takeaway is that anti-slop is not only a human curation
    discipline; it can be encoded directly into prompts and skills as an
    explicit quality constraint. This is one instance of swyx's broader thesis
    that you can use AI to fight slop rather than treating AI as its source —
    the same model that can mass-produce slop can be instructed to suppress it.
    It is a cheap, immediate lever worth adding to any prompt or skill where
    output quality matters.
stance: >-
  Explicitly acknowledging slop and instructing the model not to produce it
  improves output quality.
related:
  - INS-260514-5D9D
  - INS-260514-6561
  - INS-260605-3872
  - INS-260627-A971
  - INS-260514-AC43
  - INS-260423-B01D
  - INS-260605-3899
---
swyx cites a skill set (from speakers Mahesh and Barry) whose prompt explicitly acknowledges slop and instructs Claude not to produce it, and reports the output 'improves significantly from left to right' as a result. The counterintuitive part is that 'slop' is vague human shorthand, yet naming it in the prompt still steers the model toward higher-quality output — the concept is apparently well enough represented in the model's training to act on.

The practical takeaway is that anti-slop is not only a human curation discipline; it can be encoded directly into prompts and skills as an explicit quality constraint. This is one instance of swyx's broader thesis that you can use AI to fight slop rather than treating AI as its source — the same model that can mass-produce slop can be instructed to suppress it. It is a cheap, immediate lever worth adding to any prompt or skill where output quality matters.
