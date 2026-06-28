---
id: INS-260627-2BA7
domain: ai-development
topic: prompting
title: 'Prompt to the model''s trained habits, not against them'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompt-engineering
  - model-habits
  - over-prompting
  - coding-agents
  - migration
sources:
  - type: youtube
    title: 'Future-Proof Coding Agents – Bill Chen & Brian Fioca, OpenAI'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=wVl6ZjELpBk'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Reusing another model's prompts and over-instructing thoroughness can make a
    capable model slower and worse, not better.
  standard: >-
    The speakers offer 'intelligence + habit' as a mental model: a model's
    intelligence is what it's good at (languages, frameworks), but its habits
    are the behaviors training baked in — planning, looking around, gathering
    context, then testing. Good prompt engineering is developing a feel for
    those habits and instructing in ways the model is familiar with.


    The concrete failure they cite: at GPT-5's launch, users ported prompts from
    other models that said things like 'examine every single file before
    editing.' Because GPT-5 had already been trained to be thorough, those
    instructions made it redundantly exhaustive and slow, and people saw worse
    performance. Letting the model run its native behaviors — and not
    over-prompting — produced better results.


    Two immediate practices follow. First, treat cross-model prompt migration as
    a rewrite, not a copy-paste; instructions are model-specific. Second, when a
    model is underperforming, ask it directly what in your instructions is
    slowing it down — the presenters got an actionable answer ('you're telling
    me to look at everything and I don't need to') simply by asking.
stance: >-
  Porting a prompt written for one model into another degrades performance
  because each model carries distinct trained habits the instructions must
  respect.
related:
  - INS-260320-96C9
  - INS-260330-4AD5
  - INS-260605-6752
  - INS-260625-F573
  - INS-260625-8624
  - INS-260627-2863
  - PRI-260320-6847
  - INS-260514-AC43
  - INS-260605-D659
---
The speakers offer 'intelligence + habit' as a mental model: a model's intelligence is what it's good at (languages, frameworks), but its habits are the behaviors training baked in — planning, looking around, gathering context, then testing. Good prompt engineering is developing a feel for those habits and instructing in ways the model is familiar with.

The concrete failure they cite: at GPT-5's launch, users ported prompts from other models that said things like 'examine every single file before editing.' Because GPT-5 had already been trained to be thorough, those instructions made it redundantly exhaustive and slow, and people saw worse performance. Letting the model run its native behaviors — and not over-prompting — produced better results.

Two immediate practices follow. First, treat cross-model prompt migration as a rewrite, not a copy-paste; instructions are model-specific. Second, when a model is underperforming, ask it directly what in your instructions is slowing it down — the presenters got an actionable answer ('you're telling me to look at everything and I don't need to') simply by asking.
