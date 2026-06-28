---
id: INS-260626-7658
domain: ai-development
topic: llm-training
title: 'Add specialized control signals in post-training, not pre-training'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - conditioning
  - post-training
  - control-signals
  - video-generation
sources:
  - type: youtube
    title: >-
      Building Generative Image & Video models at Scale - Sander Dieleman,
      Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=xOP1PM8fwnk'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Pre-train on abundant text-prompt pairs, then graft on richer control
    signals (reference images, camera control, event timing) in post-training
    where targeted labeled data is feasible.
  standard: >-
    Text prompts are the canonical control signal, but users increasingly want
    more than text can express: reference-based generation (put yourself in a
    video by conditioning on a photo, not by describing your appearance),
    explicit camera-motion control, and precise event timing — things you
    shouldn't 'shoehorn into a textual representation.' The structural problem
    is that you don't have this conditioning information for most of your
    pre-training corpus.


    Dieleman's resolution is a sequencing decision: pre-train with just text
    prompts on the large, weakly-labeled corpus, then introduce the extra
    conditioning signals in a post-training phase where you can curate the
    specific paired data. Post-training is also where preference tuning (RLHF /
    direct preference optimization on human evaluations) and the 'opinionated'
    narrowing of the output distribution happen — he frames pre-training as
    learning the full distribution of images and post-training as choosing
    'which sliver of that distribution am I actually interested in.'


    The architectural counterpart: in a transformer there are several ways to
    inject conditioning — extra tokens, broadcasting a value to all tokens (as
    done with the noise-level input), and other emerging methods — and choosing
    the right representation and injection point for each new signal is a
    deliberate design problem. The general principle is to defer capabilities
    that need scarce labeled data to a stage where you can afford to curate that
    data.
stance: >-
  Advanced conditioning signals (camera motion, reference images, timing) should
  be introduced during post-training because the labels don't exist for most
  pre-training data.
related:
  - INS-260327-1B9A
  - INS-260403-C501
  - INS-260505-A0F7
  - INS-260625-E500
  - INS-260403-9774
  - INS-260628-BEC2
  - INS-260625-DF0F
---
Text prompts are the canonical control signal, but users increasingly want more than text can express: reference-based generation (put yourself in a video by conditioning on a photo, not by describing your appearance), explicit camera-motion control, and precise event timing — things you shouldn't 'shoehorn into a textual representation.' The structural problem is that you don't have this conditioning information for most of your pre-training corpus.

Dieleman's resolution is a sequencing decision: pre-train with just text prompts on the large, weakly-labeled corpus, then introduce the extra conditioning signals in a post-training phase where you can curate the specific paired data. Post-training is also where preference tuning (RLHF / direct preference optimization on human evaluations) and the 'opinionated' narrowing of the output distribution happen — he frames pre-training as learning the full distribution of images and post-training as choosing 'which sliver of that distribution am I actually interested in.'

The architectural counterpart: in a transformer there are several ways to inject conditioning — extra tokens, broadcasting a value to all tokens (as done with the noise-level input), and other emerging methods — and choosing the right representation and injection point for each new signal is a deliberate design problem. The general principle is to defer capabilities that need scarce labeled data to a stage where you can afford to curate that data.
