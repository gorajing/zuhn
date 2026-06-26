---
id: INS-260626-7F36
domain: ai-development
topic: agent-patterns
title: >-
  Repair a class of LLM 'slop' with a compositional framework plus deterministic
  fixes
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - design
  - prompting
  - skills
  - oklch
  - compositional-frameworks
  - slop
sources:
  - type: youtube
    title: >-
      ⚡️Making DeepSeek v4 outperform Opus 4.7 with Taste — @AhmadAwais ,
      CommandCode.ai
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=-rIAVuaRjOg'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    LLMs already have design capability cooked in; give them intent-first
    composition (e.g. 'a dashboard is a monitor surface', 7 surface patterns)
    and force OKLCH over HSL, and ~90% of design slop disappears.
  standard: >-
    The same repair logic Awais used for tool calls applies to 'design slop' —
    the indigo-gradient, three-cards-in-a-row look that experienced designers
    can flag as AI-made in ~1.5 seconds. After interviewing strong designers,
    his team distilled the differences into a finite, deterministically-fixable
    set: roughly 24 reference documents, 10 design smells, and 7 surface
    patterns. The framing is that LLMs default to slop not because they lack
    capability but because the harness never gave them the right contract; the
    user only ever says 'make it pop'.


    Two concrete levers stand out. First, composition-before-implementation:
    prompt the model to reason about intent first (a dashboard is a 'monitor
    surface'), choosing among a small set of surface patterns, rather than
    jumping straight to layout. Second, force the OKLCH color space — LLMs
    struggle to control perceptual lightness in HSL (two HSL colors a human
    instantly sees as different) but manage color palettes well in OKLCH,
    mirroring what expert designers do. Both fit in a single slash-command skill
    file of ~10 rules.


    The transferable principle, which Awais also expects to hold for security
    ('never write poor-security code'), is: when LLM output across many models
    (open and closed) fails in the same finite, recognizable ways, treat it as a
    contract gap. Mine your logs for the recurring failure set, encode a compact
    compositional framework plus deterministic repairs into a skill, and you
    repair the model's thinking rather than hoping for capability gains. He
    claims this fixes ~90% of design slop.
stance: >-
  Most LLM design slop is a contract gap fixable by handing the model a small
  compositional framework and deterministically correcting a finite set of
  smells, not a fundamental taste deficiency.
related:
  - INS-260329-44C9
  - INS-260402-AEA1
  - INS-260403-59F4
  - INS-260403-8280
  - INS-260404-93CD
  - INS-260403-C752
  - INS-260410-DD0E
  - INS-260412-6373
  - INS-260514-315F
  - INS-260514-657E
---
The same repair logic Awais used for tool calls applies to 'design slop' — the indigo-gradient, three-cards-in-a-row look that experienced designers can flag as AI-made in ~1.5 seconds. After interviewing strong designers, his team distilled the differences into a finite, deterministically-fixable set: roughly 24 reference documents, 10 design smells, and 7 surface patterns. The framing is that LLMs default to slop not because they lack capability but because the harness never gave them the right contract; the user only ever says 'make it pop'.

Two concrete levers stand out. First, composition-before-implementation: prompt the model to reason about intent first (a dashboard is a 'monitor surface'), choosing among a small set of surface patterns, rather than jumping straight to layout. Second, force the OKLCH color space — LLMs struggle to control perceptual lightness in HSL (two HSL colors a human instantly sees as different) but manage color palettes well in OKLCH, mirroring what expert designers do. Both fit in a single slash-command skill file of ~10 rules.

The transferable principle, which Awais also expects to hold for security ('never write poor-security code'), is: when LLM output across many models (open and closed) fails in the same finite, recognizable ways, treat it as a contract gap. Mine your logs for the recurring failure set, encode a compact compositional framework plus deterministic repairs into a skill, and you repair the model's thinking rather than hoping for capability gains. He claims this fixes ~90% of design slop.
