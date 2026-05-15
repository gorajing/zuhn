---
id: INS-260514-7B5B
domain: ai-development
topic: mental-models
title: >-
  Perception as controlled hallucination — your brain generates the world
  top-down, sensory data only updates it
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - predictive-processing
  - controlled-hallucination
  - bayesian-brain
  - top-down-perception
  - anil-seth
sources:
  - type: youtube
    title: >-
      Psychedelics Don't Distort Reality — They Reveal How Your Brain Constructs
      It
    author: Sam Harris
    url: 'https://youtu.be/r5KRnstXYUg'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Perception is controlled hallucination — your brain generates the world
    top-down from predictions, sensory data only corrects errors. The vivid
    world you 'see' is overwhelmingly your simulation constrained by tiny
    incoming data.
  standard: >-
    Anil Seth's framing (popularized in the documentary): 'What I am perceiving
    is in fact my internal simulation, my internal model, but constrained so
    that it is as close as possible to the few bits of sensory data that I
    actually get. The term I like to use is that perception is a kind of
    controlled hallucination.' The architectural details: at each level of the
    brain's perceptual hierarchy, top-down predictions generate what you'd
    expect to see if your model were right; sensory input only sends the
    DIFFERENCE between prediction and observation up the chain; that error
    signal updates the next layer of predictions. This is the brain's
    approximation of Bayesian inference and saves enormous energy compared to
    processing all sensory data from scratch. Implications for AI architecture:
    agents that try to perceive a complex environment by processing all raw
    input from scratch are fundamentally inefficient — they need predictive
    models that generate expectations, then use sensory data only to correct
    errors. This is what world models do in robotics, what JEPA does in Yann
    LeCun's vision, what context priors do in LLMs. The same lesson applies:
    don't process everything; predict, then correct. Implications for UX: users
    don't experience your interface as a stimulus — they experience their
    predictive model of your interface, corrected by what they see. So
    consistency with their predictions matters more than 'best' design. A wildly
    innovative button placement fails not because it's bad but because it
    violates priors. Implications for expertise: experts have stronger priors
    that produce more accurate predictions, so they need less sensory data to
    act correctly. Novices are flooded with prediction errors because their
    models are weak. Teaching is about installing better priors, not just
    providing more data.
stance: >-
  The intuitive model of perception (sensory data flows in, brain processes it,
  conscious experience emerges) is empirically wrong — the brain actually
  generates a top-down predictive model of what it expects to see and only uses
  sensory data as ERROR signals to correct the model, meaning what you perceive
  is overwhelmingly your simulation constrained by a few bits of incoming data;
  this has profound implications for AI architecture, UX design, and how we
  think about expertise.
related:
  - INS-260323-C10D
  - INS-260325-ADF3
  - INS-260323-9773
  - INS-260323-9774
  - INS-260325-239C
  - INS-260330-52C3
  - INS-260330-AB5D
  - INS-260403-06D5
  - INS-260403-04AD
  - PRI-260323-1187
---
Anil Seth's framing (popularized in the documentary): 'What I am perceiving is in fact my internal simulation, my internal model, but constrained so that it is as close as possible to the few bits of sensory data that I actually get. The term I like to use is that perception is a kind of controlled hallucination.' The architectural details: at each level of the brain's perceptual hierarchy, top-down predictions generate what you'd expect to see if your model were right; sensory input only sends the DIFFERENCE between prediction and observation up the chain; that error signal updates the next layer of predictions. This is the brain's approximation of Bayesian inference and saves enormous energy compared to processing all sensory data from scratch. Implications for AI architecture: agents that try to perceive a complex environment by processing all raw input from scratch are fundamentally inefficient — they need predictive models that generate expectations, then use sensory data only to correct errors. This is what world models do in robotics, what JEPA does in Yann LeCun's vision, what context priors do in LLMs. The same lesson applies: don't process everything; predict, then correct. Implications for UX: users don't experience your interface as a stimulus — they experience their predictive model of your interface, corrected by what they see. So consistency with their predictions matters more than 'best' design. A wildly innovative button placement fails not because it's bad but because it violates priors. Implications for expertise: experts have stronger priors that produce more accurate predictions, so they need less sensory data to act correctly. Novices are flooded with prediction errors because their models are weak. Teaching is about installing better priors, not just providing more data.
