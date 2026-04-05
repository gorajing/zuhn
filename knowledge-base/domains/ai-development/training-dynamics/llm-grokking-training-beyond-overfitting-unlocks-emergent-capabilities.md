---
id: INS-260405-57D6
domain: ai-development
topic: training-dynamics
title: 'LLM Grokking: Training Beyond Overfitting Unlocks Emergent Capabilities'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm
  - grokking
  - overfitting
  - emergent-behavior
  - training
  - transformers
  - scaling-laws
sources:
  - type: blog
    title: A Conversation with One of My 8090 Co-Founders
    author:
      - '@type': Person
        name: Chamath Palihapitiya
        url: 'https://substack.com/@chamath'
        description: 'CEO @SocialCapital, Bestie @theallinpod'
        identifier: 'user:97776398'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!PGqd!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3b307cf2-75a9-4926-b469-de95691aa726_2289x2289.jpeg
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!PGqd!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3b307cf2-75a9-4926-b469-de95691aa726_2289x2289.jpeg
    url: 'https://chamath.substack.com/p/a-conversation-with-one-of-my-8090'
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: false
embedded: false
resolutions:
  one_line: >-
    OpenAI accidentally discovered that training transformers well past the
    overfitting threshold triggers a 'grokking zone' where genuine understanding
    and emergent behaviors emerge.
  standard: >-
    Classical machine learning stops training at the overfitting point, where a
    model begins memorizing the training set instead of generalizing. OpenAI ran
    an experiment for days instead of hours—far past this threshold—and observed
    that the model entered what they called the 'grokking zone': it stopped
    memorizing and began to actually understand concepts, exhibiting emergent
    behaviors not present in the training data.


    This discovery inverted a core assumption in ML. For transformers
    specifically, continued training past apparent overfitting is not a mistake
    but a prerequisite for capability. The scaling laws that emerged from this
    work formalize the relationship between parameters, compute, and data needed
    to reach these emergent capabilities.


    The broader lesson is epistemological: much of deep learning progress has
    been driven by accidental empirical observation rather than theory,
    suggesting that deliberate exploration of counterintuitive training regimes
    may still hold undiscovered capabilities.
stance: >-
  Transformer models require training far beyond the traditional overfitting
  point to develop genuine generalization and emergent behaviors, reversing
  classical machine learning wisdom.
---
Classical machine learning stops training at the overfitting point, where a model begins memorizing the training set instead of generalizing. OpenAI ran an experiment for days instead of hours—far past this threshold—and observed that the model entered what they called the 'grokking zone': it stopped memorizing and began to actually understand concepts, exhibiting emergent behaviors not present in the training data.

This discovery inverted a core assumption in ML. For transformers specifically, continued training past apparent overfitting is not a mistake but a prerequisite for capability. The scaling laws that emerged from this work formalize the relationship between parameters, compute, and data needed to reach these emergent capabilities.

The broader lesson is epistemological: much of deep learning progress has been driven by accidental empirical observation rather than theory, suggesting that deliberate exploration of counterintuitive training regimes may still hold undiscovered capabilities.
