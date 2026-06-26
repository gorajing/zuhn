---
id: INS-260625-AB58
domain: ai-development
topic: agent-patterns
title: Composable micro-skills outlast monolithic mega-skills
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-skills
  - composability
  - postels-law
  - tooling
sources:
  - type: youtube
    title: >-
      GitHub’s Agent Era: 14x Commits, 200M Developers, Copilot’s Next Act —
      Kyle Daigle
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=LEwlSyR0cXA'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Build tiny single-purpose skills and compose them, rather than one
    mega-skill that does an entire workflow.
  standard: >-
    Daigle says GitHub is 'ending the era of these massive beautiful perfect
    skills that are just not any of those things.' The failure mode of the
    mega-skill is maintenance: it stitches a bunch of tools together to produce
    one big output, and 'weeks go by, months go by, things change and you want
    to tweak your mega skill and you're screwed.' The durable pattern is
    incredibly micro skills that each do one thing very well — Legos — with the
    instruction book (an orchestration skill that calls other skills) assembled
    on top.


    The framing principle offered is Postel's law: be liberal in what you accept
    and strict in what you output. A good atomic skill accepts loose,
    roughly-contained input and produces a tight, reliable result. The magic is
    that when output is wrong, you 'just crack the skill open, you just type
    English words' — fixing behavior is editing prose, not rewriting code, which
    is why this also kills the old 'plugin hell' of heavyweight framework
    integrations.


    The practical takeaway for anyone building agent tooling: resist the
    temptation to encode an entire end-to-end report or workflow into one skill.
    Decompose into atomic capabilities, keep each one narrow and replaceable,
    and let composition (and per-context customization) live in a thin
    orchestration layer.
stance: >-
  Atomic single-purpose agent skills that do one thing well are more durable and
  valuable than comprehensive mega-skills that stitch many tools into one
  workflow.
related:
  - PRI-260320-D5B7
  - INS-260404-9AEC
  - INS-260514-2C6C
  - INS-260625-074C
  - INS-260329-4D06
  - INS-260605-9276
  - INS-260501-9503
---
Daigle says GitHub is 'ending the era of these massive beautiful perfect skills that are just not any of those things.' The failure mode of the mega-skill is maintenance: it stitches a bunch of tools together to produce one big output, and 'weeks go by, months go by, things change and you want to tweak your mega skill and you're screwed.' The durable pattern is incredibly micro skills that each do one thing very well — Legos — with the instruction book (an orchestration skill that calls other skills) assembled on top.

The framing principle offered is Postel's law: be liberal in what you accept and strict in what you output. A good atomic skill accepts loose, roughly-contained input and produces a tight, reliable result. The magic is that when output is wrong, you 'just crack the skill open, you just type English words' — fixing behavior is editing prose, not rewriting code, which is why this also kills the old 'plugin hell' of heavyweight framework integrations.

The practical takeaway for anyone building agent tooling: resist the temptation to encode an entire end-to-end report or workflow into one skill. Decompose into atomic capabilities, keep each one narrow and replaceable, and let composition (and per-context customization) live in a thin orchestration layer.
