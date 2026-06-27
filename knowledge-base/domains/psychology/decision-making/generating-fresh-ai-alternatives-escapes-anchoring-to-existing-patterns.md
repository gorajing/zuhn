---
id: INS-260627-8378
domain: psychology
topic: decision-making
title: Generating fresh AI alternatives escapes anchoring to existing patterns
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - anchoring
  - ideation
  - path-dependence
  - creativity
  - prototyping
sources:
  - type: youtube
    title: 'Building in the Gemini Era – Kat Kampf & Ammaar Reshi, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=fgkXEIbZpGc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When the team manually 'jammed' on a feature they'd have constrained
    themselves to existing AI Studio patterns; telling the model to 'be
    creative, think outside the box' from a screenshot surfaced novel
    interactions like a CLI-style export they wouldn't have considered.
  standard: >-
    Asked to design a new export flow, the team observed that had they designed
    it by hand they 'would have constrained ourselves to existing patterns.'
    Instead they fed a screenshot and instructed the model to be creative, and
    it returned options outside their default vocabulary — sometimes a
    command-line export, sometimes a status view — ideas anchored neither to
    their prior UI nor to each other.


    The cognitive mechanism is anchoring and path-dependence: iterating on an
    existing artifact pulls every new idea toward the current shape. A
    from-scratch generator with an explicit 'diverge' instruction breaks that
    pull, functioning as a cheap source of de-anchored alternatives. The
    practical move is to use AI generation not just to execute a chosen design
    but as a divergence step early in ideation — produce several unconstrained
    variants before you commit, specifically to counter your own anchoring to
    what already exists.
stance: >-
  Prompting an AI to redesign something from scratch produces less constrained
  ideas than iterating on the existing artifact, because iteration anchors you
  to the current pattern.
related:
  - INS-260626-9A39
  - INS-260404-6A15
  - INS-260403-F400
  - PRI-260501-1E66
  - INS-260627-EEDE
  - INS-260403-7A48
---
Asked to design a new export flow, the team observed that had they designed it by hand they 'would have constrained ourselves to existing patterns.' Instead they fed a screenshot and instructed the model to be creative, and it returned options outside their default vocabulary — sometimes a command-line export, sometimes a status view — ideas anchored neither to their prior UI nor to each other.

The cognitive mechanism is anchoring and path-dependence: iterating on an existing artifact pulls every new idea toward the current shape. A from-scratch generator with an explicit 'diverge' instruction breaks that pull, functioning as a cheap source of de-anchored alternatives. The practical move is to use AI generation not just to execute a chosen design but as a divergence step early in ideation — produce several unconstrained variants before you commit, specifically to counter your own anchoring to what already exists.
