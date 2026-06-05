---
id: INS-260501-C4AA
domain: ai-development
topic: agent-patterns
title: >-
  Agents are predictors of tokens, not thinkers — they mimic perfectly but only
  what you've shown them
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - how-models-work
  - token-prediction
  - mimicry
  - expectation-setting
sources:
  - type: youtube
    title: How AI agents & Claude skills work (Clearly Explained)
    author: Greg Isenberg
    url: 'https://youtu.be/S_oN3vlzpMw'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Models don't think. They predict tokens. They feel like they think because
    of training data. They mimic what you show them — perfectly, but only that.
  standard: >-
    The educator's reframe of why people get frustrated with agents: 'It will
    mimic you perfectly, but you've given it nothing to mimic.' Models are
    predictors of tokens that map English to vectors and find closest neighbors.
    They don't think, don't understand, don't have emotion — they feel like they
    do because of the scale of training data. Treating them as 'black magic
    boxes that know everything' produces frustration; treating them as
    'extremely capable new employees who need to be shown the workflow' produces
    results.


    The corollary: the right mental model when an agent fails is 'I haven't
    shown it enough' or 'I've shown it the wrong thing,' not 'the model is
    broken.' This is the same lesson Karpathy framed as 'spec ownership' and
    Hassabis framed as 'continual learning gap.' From three different
    perspectives, the same operational principle: the human's job is to provide
    the workflow context the model needs to mimic correctly.


    For builders: design products that scaffold the human-shows-the-workflow
    pattern. The hardest part of agent UX is not capability, it's onboarding the
    user into the right mental model of how to teach the agent. For Zuhn
    editorially: this is the unifying frame across multiple sources in the
    corpus (Karpathy spec ownership, Hassabis continual learning, Hermes
    meta-prompting, Replit yap-then-extract) — the durable human role is showing
    the agent what good looks like, repeatedly, until the agent can mimic it
    reliably.
stance: >-
  Frustration with agents 'not understanding' usually reflects a category error
  — agents don't think, they predict the next token via vector-space similarity
  to training data; they will mimic perfectly but only what you've explicitly
  demonstrated, so 'walk it through' is the right mental model.
related:
  - INS-260321-1F9F
  - INS-260327-0595
  - INS-260403-141E
  - INS-260404-023C
  - INS-260410-F24A
  - INS-260410-1789
  - INS-260410-E1D9
  - INS-260410-6ABA
  - INS-260605-D1F0
  - INS-260501-8B78
---
The educator's reframe of why people get frustrated with agents: 'It will mimic you perfectly, but you've given it nothing to mimic.' Models are predictors of tokens that map English to vectors and find closest neighbors. They don't think, don't understand, don't have emotion — they feel like they do because of the scale of training data. Treating them as 'black magic boxes that know everything' produces frustration; treating them as 'extremely capable new employees who need to be shown the workflow' produces results.

The corollary: the right mental model when an agent fails is 'I haven't shown it enough' or 'I've shown it the wrong thing,' not 'the model is broken.' This is the same lesson Karpathy framed as 'spec ownership' and Hassabis framed as 'continual learning gap.' From three different perspectives, the same operational principle: the human's job is to provide the workflow context the model needs to mimic correctly.

For builders: design products that scaffold the human-shows-the-workflow pattern. The hardest part of agent UX is not capability, it's onboarding the user into the right mental model of how to teach the agent. For Zuhn editorially: this is the unifying frame across multiple sources in the corpus (Karpathy spec ownership, Hassabis continual learning, Hermes meta-prompting, Replit yap-then-extract) — the durable human role is showing the agent what good looks like, repeatedly, until the agent can mimic it reliably.
