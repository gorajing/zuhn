---
id: INS-260627-056F
domain: ai-development
topic: llm-behavior
title: >-
  LLMs are sloppy by default because they optimize for
  correct-as-fast-as-possible
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - llm-defaults
  - median-output
  - model-behavior
  - steering
sources:
  - type: youtube
    title: >-
      Developing Taste in Coding Agents: Applied Meta Neuro-Symbolic RL — Ahmad
      Awais, CommandCode
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=kWOQS3XPZ10'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The model's default is the statistically median answer ('sloppy code from
    2015 Stack Overflow'), which requires repeated steering to escape.
  standard: >-
    Awais frames laziness as a learned trait: 'the best thing AI has learned
    from humans is that humans are lazy, and that is what AI is — sloppy by
    default.' His mechanistic explanation is that LLMs are 'trying to be
    correct, and correct as soon as possible,' which produces the most probable
    continuation rather than the considered one. For prose this surfaces as
    generic filler ('the power of synergistic teamwork'); for code it surfaces
    as the median Stack Overflow pattern slapped onto every request.


    The escape today is manual steering — re-prompting 'again and again' to drag
    output from the generic center toward what you actually wanted, which is
    exactly the loop he demonstrates fighting with when building a CLI. He notes
    he uses AI for everything except writing, precisely because the default slop
    is hardest to tolerate there.


    The useful takeaway is diagnostic: when an agent produces
    technically-fine-but-wrong output, the cause is usually this probabilistic
    pull toward the median, not a knowledge gap. That predicts where steering
    effort pays off (taste, convention, structure) versus where it doesn't (the
    model already knows the correct mechanics).
stance: >-
  LLMs default to the most-probable median answer because they are trained to be
  correct as quickly as possible, and that default is actively wrong for code
  and writing.
related:
  - INS-260626-BCC3
  - INS-260605-564D
  - INS-260605-4D1D
  - INS-260626-518C
  - INS-260602-E2BD
---
Awais frames laziness as a learned trait: 'the best thing AI has learned from humans is that humans are lazy, and that is what AI is — sloppy by default.' His mechanistic explanation is that LLMs are 'trying to be correct, and correct as soon as possible,' which produces the most probable continuation rather than the considered one. For prose this surfaces as generic filler ('the power of synergistic teamwork'); for code it surfaces as the median Stack Overflow pattern slapped onto every request.

The escape today is manual steering — re-prompting 'again and again' to drag output from the generic center toward what you actually wanted, which is exactly the loop he demonstrates fighting with when building a CLI. He notes he uses AI for everything except writing, precisely because the default slop is hardest to tolerate there.

The useful takeaway is diagnostic: when an agent produces technically-fine-but-wrong output, the cause is usually this probabilistic pull toward the median, not a knowledge gap. That predicts where steering effort pays off (taste, convention, structure) versus where it doesn't (the model already knows the correct mechanics).
