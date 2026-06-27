---
id: INS-260627-4E4A
domain: ai-development
topic: claude-code
title: 'The ''dark factory'' fails because good software is discovered, not specified'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - ai-coding-workflow
  - taste
  - iteration
  - waterfall
  - human-in-the-loop
sources:
  - type: youtube
    title: State of the Claw — Peter Steinberger
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zgNvts_2TUE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    You can parallelize and pipeline agents, but you can't fully automate
    building good software, because the path to a good product is curved and
    only walkable by iterating with taste.
  standard: >-
    Asked about the 'dark factory' approach — spinning up agents that ship code
    with zero human review — Steinberger (who has run ~10 simultaneous agent
    sessions) rejects it not because agents are too weak but because the premise
    is wrong: a full dark factory 'means I come up with everything I want to
    build in the beginning,' which is just the waterfall model in disguise. His
    metaphor: 'the way to the mountain is usually never a straight line. It is
    very curved... you go a little bit off track and then you see something new
    that inspires you, you find shortcuts.' The first idea about a project is
    'very unlikely going to be the final project'; you build steps, play with
    it, see how it feels, get new ideas, and your prompts change. 


    He extends this to merge automation — you don't want a pipeline that
    auto-merges PRs, because most don't make sense and the AI 'will very
    unlikely know what's the right direction'; people pull a product in every
    direction and someone with taste must steer. The conclusion: the durable
    bottleneck is 'thinking and having taste,' not code generation. You can
    build pipelines for well-defined sub-tasks, but the iterative, taste-driven
    act of deciding what to build resists automation. For anyone designing AI
    dev workflows, this argues for human-in-the-loop at the level of direction
    and review, with agents parallelized underneath — not autonomous end-to-end
    factories.
stance: >-
  Fully-automated 'dark factory' development — specifying everything upfront and
  never reviewing the code — fails, because good software emerges through
  iterative discovery and the bottleneck is taste, not generation.
related:
  - PRI-260320-BC72
  - INS-260327-A9D5
  - INS-260603-1BC0
  - PRI-260328-F723
  - PRI-260328-A65A
---
Asked about the 'dark factory' approach — spinning up agents that ship code with zero human review — Steinberger (who has run ~10 simultaneous agent sessions) rejects it not because agents are too weak but because the premise is wrong: a full dark factory 'means I come up with everything I want to build in the beginning,' which is just the waterfall model in disguise. His metaphor: 'the way to the mountain is usually never a straight line. It is very curved... you go a little bit off track and then you see something new that inspires you, you find shortcuts.' The first idea about a project is 'very unlikely going to be the final project'; you build steps, play with it, see how it feels, get new ideas, and your prompts change. 

He extends this to merge automation — you don't want a pipeline that auto-merges PRs, because most don't make sense and the AI 'will very unlikely know what's the right direction'; people pull a product in every direction and someone with taste must steer. The conclusion: the durable bottleneck is 'thinking and having taste,' not code generation. You can build pipelines for well-defined sub-tasks, but the iterative, taste-driven act of deciding what to build resists automation. For anyone designing AI dev workflows, this argues for human-in-the-loop at the level of direction and review, with agents parallelized underneath — not autonomous end-to-end factories.
