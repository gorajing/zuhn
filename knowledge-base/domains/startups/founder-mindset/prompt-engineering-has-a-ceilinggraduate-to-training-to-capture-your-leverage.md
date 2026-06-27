---
id: INS-260625-0DD6
domain: startups
topic: founder-mindset
title: Prompt engineering has a ceiling—graduate to training to capture your leverage
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - prompt-engineering
  - fine-tuning
  - product-evolution
  - leverage
  - ai-strategy
sources:
  - type: youtube
    title: >-
      How Cursor Trained Composer on Fireworks: Distributed Infrastructure for
      High-Performance RL
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=UDTr9yUnLUI'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Application companies evolve from off-the-shelf models and prompting to
    fine-tuning, because the highest-leverage attributes—your user data, your
    harness, your tools—can only be partly captured by prompts.
  standard: >-
    Fireworks describes a recurring evolution pattern for AI applications:
    prototype with an off-the-shelf model, do prompt engineering, figure out
    your harness—but the most leveraged asset is the specific way your
    application works (your user data, your harness, which tools you provide).
    You can capture a little of that through prompting, but the right way is to
    craft the model to act in your environment. Cursor reinforces this: some
    tools the agent calls are very hard to describe succinctly to a model in a
    prompt, but post-training can bake in the optimal way to use them. They
    believe Composer would behave correctly even without a system prompt,
    because the right behavior is trained in rather than instructed.


    The strategic claim for founders is that prompting is a starting point with
    a ceiling, not a destination. If you want to build genuinely great AI
    products and the difference between you and a competitor is how the model
    behaves inside your specific environment, you must eventually influence
    model behavior through fine-tuning rather than ever-longer prompts. The
    corollary stated in the conversation: any company producing lots of tokens
    with a product to optimize against is in the same shape as Cursor and should
    be moving toward training its own models.
stance: >-
  There is a hard upper bound on what prompt engineering can achieve, so
  capturing your application's real leverage eventually requires fine-tuning the
  model to your environment.
related:
  - INS-260322-3616
  - INS-260403-7D7A
  - PRI-260324-36BF
  - INS-260329-793D
  - INS-260403-AEAF
  - INS-260625-B5AD
  - INS-260627-C940
  - INS-260627-CEC6
  - INS-260627-FBF3
---
Fireworks describes a recurring evolution pattern for AI applications: prototype with an off-the-shelf model, do prompt engineering, figure out your harness—but the most leveraged asset is the specific way your application works (your user data, your harness, which tools you provide). You can capture a little of that through prompting, but the right way is to craft the model to act in your environment. Cursor reinforces this: some tools the agent calls are very hard to describe succinctly to a model in a prompt, but post-training can bake in the optimal way to use them. They believe Composer would behave correctly even without a system prompt, because the right behavior is trained in rather than instructed.

The strategic claim for founders is that prompting is a starting point with a ceiling, not a destination. If you want to build genuinely great AI products and the difference between you and a competitor is how the model behaves inside your specific environment, you must eventually influence model behavior through fine-tuning rather than ever-longer prompts. The corollary stated in the conversation: any company producing lots of tokens with a product to optimize against is in the same shape as Cursor and should be moving toward training its own models.
