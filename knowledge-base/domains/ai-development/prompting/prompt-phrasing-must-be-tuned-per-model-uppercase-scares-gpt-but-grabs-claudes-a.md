---
id: INS-260605-F512
domain: ai-development
topic: prompting
title: >-
  Prompt phrasing must be tuned per model — uppercase scares GPT but grabs
  Claude's attention
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - prompting
  - model-differences
  - agents-md
  - claude-vs-gpt
  - instruction-tuning
sources:
  - type: youtube
    title: 'Vibe Engineering Effect Apps — Michael Arnaldi, Effectful'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Wmp2Tku2PrI'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Never write instructions in uppercase for GPT — it 'gets scared,'
    de-optimizes, and becomes passively agreeable — whereas the same uppercase
    makes Claude pay closer attention, so pattern files should be generated with
    the model you actually use.
  standard: >-
    Arnaldi deliberately wrote nothing in uppercase during the GPT-5.4 demo:
    'GPT gets scared if you scream at it — it's going to de-optimize and then be
    passive and agree on everything,' which is the opposite of what you want.
    With Claude, screaming (uppercase) makes it focus on that specific sentence.
    This breaks the dream of a portable AGENTS.md 'standard' — the way you
    prompt Claude and the way you prompt GPT genuinely differ. Within a family
    the differences shrink (GPT 5.2/5.3/5.4 are similar; Opus/Sonnet/Haiku are
    similar), so his proposed solution is a CLI that asks which model you use
    and generates context optimized for that family on the spot, rather than
    shipping off-the-shelf patterns. He also contrasts behavioral defaults: GPT
    constantly asks for input to continue (good for complex tasks where its slow
    output is correct), while Opus just acts but sometimes takes shortcuts like
    stubbing with 'any' to make things compile.
stance: >-
  Best-practice and AGENTS.md files are not portable across model families
  because identical phrasing produces opposite behavior in GPT versus Claude.
related:
  - PRI-260320-6847
  - INS-260321-703F
  - INS-260605-117F
  - INS-260403-7D7A
  - INS-260605-C28F
  - INS-260627-8DF1
---
Arnaldi deliberately wrote nothing in uppercase during the GPT-5.4 demo: 'GPT gets scared if you scream at it — it's going to de-optimize and then be passive and agree on everything,' which is the opposite of what you want. With Claude, screaming (uppercase) makes it focus on that specific sentence. This breaks the dream of a portable AGENTS.md 'standard' — the way you prompt Claude and the way you prompt GPT genuinely differ. Within a family the differences shrink (GPT 5.2/5.3/5.4 are similar; Opus/Sonnet/Haiku are similar), so his proposed solution is a CLI that asks which model you use and generates context optimized for that family on the spot, rather than shipping off-the-shelf patterns. He also contrasts behavioral defaults: GPT constantly asks for input to continue (good for complex tasks where its slow output is correct), while Opus just acts but sometimes takes shortcuts like stubbing with 'any' to make things compile.
