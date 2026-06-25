---
id: INS-260625-CDEA
domain: ai-development
topic: product-strategy
title: >-
  Frontier LLMs can't simulate behavior because they're trained on what people
  say, not what they do
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - say-do-gap
  - data-moat
  - behavioral-data
  - human-simulation
  - llm-limits
sources:
  - type: youtube
    title: 'Simulating Humans at Scale: Simile''s Joon Sung Park'
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=lfhFmwcESRw'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    LLMs encode what people say, not what they do, so accurate human simulation
    requires collecting behavioral data (RCTs, life-story interviews) that the
    frontier models structurally lack.
  standard: >-
    Park rebuts the intuitive assumption that you can just prompt a large model
    ('you are a 34-year-old woman in a bi-coastal metro') and get a faithful
    human. The blocker is the say-do gap: there is a real, persistent difference
    between what people say and what they actually do, and LLMs are trained 'on
    attitudinal data — fundamentally the things people have said online.' That
    covers a huge slice of training data but is precisely the wrong slice for
    predicting behavior.


    Simile's answer is to build a translational layer between attitudes and
    behavior by collecting data the models don't have: a repository of
    randomized controlled trials and pricing studies (raw behavioral signal),
    plus long-form 'tell me the story of your life' interviews that surface
    long-tail information about a person — where they grew up, the hard
    decisions they made — rather than broad opinions. This grounded, behavioral
    data is why they partner with panel companies like Gallup to reach
    representative real humans instead of relying on the model alone.


    The strategic lesson for AI product builders: when a capability looks like
    it should fall out of a frontier model 'for free,' check whether the model's
    training distribution actually contains the signal you need. If the valuable
    signal is behavioral and the models are trained on attitudinal text, the gap
    between the two is your defensible wedge — and closing it requires owning a
    data-collection pipeline, not just better prompting.
stance: >-
  Because LLMs are trained overwhelmingly on attitudinal data (what people post
  online), they structurally cannot close the say-do gap, so proprietary
  behavioral data is the durable moat for any human-simulation product.
related:
  - INS-260403-F76E
  - INS-260323-3F39
  - INS-260625-940D
  - INS-260323-9774
  - PRI-260323-1187
---
Park rebuts the intuitive assumption that you can just prompt a large model ('you are a 34-year-old woman in a bi-coastal metro') and get a faithful human. The blocker is the say-do gap: there is a real, persistent difference between what people say and what they actually do, and LLMs are trained 'on attitudinal data — fundamentally the things people have said online.' That covers a huge slice of training data but is precisely the wrong slice for predicting behavior.

Simile's answer is to build a translational layer between attitudes and behavior by collecting data the models don't have: a repository of randomized controlled trials and pricing studies (raw behavioral signal), plus long-form 'tell me the story of your life' interviews that surface long-tail information about a person — where they grew up, the hard decisions they made — rather than broad opinions. This grounded, behavioral data is why they partner with panel companies like Gallup to reach representative real humans instead of relying on the model alone.

The strategic lesson for AI product builders: when a capability looks like it should fall out of a frontier model 'for free,' check whether the model's training distribution actually contains the signal you need. If the valuable signal is behavioral and the models are trained on attitudinal text, the gap between the two is your defensible wedge — and closing it requires owning a data-collection pipeline, not just better prompting.
