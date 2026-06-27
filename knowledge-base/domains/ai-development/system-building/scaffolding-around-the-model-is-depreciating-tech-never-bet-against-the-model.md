---
id: INS-260626-8143
domain: ai-development
topic: system-building
title: >-
  Scaffolding around the model is depreciating tech — never bet against the
  model
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - bitter-lesson
  - scaffolding
  - technical-debt
  - architecture
sources:
  - type: youtube
    title: Inside Claude Code With Its Creator Boris Cherny
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=PQU9o_5rHC4'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Scaffolding buys ~10-20% performance now but gets wiped out by the next
    model, so treat it as disposable and bias toward waiting.
  standard: >-
    Anthropic frames the Claude Code team's central tradeoff as the bitter
    lesson (Rich Sutton's essay is literally framed on their wall): the more
    general model will always beat the more specific one, so never bet against
    the model. Any code that isn't the model itself — Cherny calls it
    'scaffolding' — can lift performance maybe 10-20% in a given domain, but
    that gain is typically erased by the next model, which gets you the
    capability 'for free.'


    The practical consequence is radical impermanence: they unship and add tools
    every couple of weeks, and Cherny estimates roughly 80% of the Claude Code
    codebase is less than a couple months old, with 'no part of Quad Code that
    was around six months ago.' For builders, every engineering investment in
    scaffolding should be made knowing it is depreciating tech. The decision is
    always: spend engineering effort now to extend capability a little, or wait
    a couple months and let the model do the thing. Defaulting to 'wait' is
    often correct.
stance: >-
  Code you build to boost model performance is a temporary asset that the next
  model release will largely make redundant.
related:
  - INS-260605-44E5
  - INS-260627-E257
  - INS-260321-B7CB
  - INS-260605-3AE6
  - PRI-260403-5FC4
---
Anthropic frames the Claude Code team's central tradeoff as the bitter lesson (Rich Sutton's essay is literally framed on their wall): the more general model will always beat the more specific one, so never bet against the model. Any code that isn't the model itself — Cherny calls it 'scaffolding' — can lift performance maybe 10-20% in a given domain, but that gain is typically erased by the next model, which gets you the capability 'for free.'

The practical consequence is radical impermanence: they unship and add tools every couple of weeks, and Cherny estimates roughly 80% of the Claude Code codebase is less than a couple months old, with 'no part of Quad Code that was around six months ago.' For builders, every engineering investment in scaffolding should be made knowing it is depreciating tech. The decision is always: spend engineering effort now to extend capability a little, or wait a couple months and let the model do the thing. Defaulting to 'wait' is often correct.
