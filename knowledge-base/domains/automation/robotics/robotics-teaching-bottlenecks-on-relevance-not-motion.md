---
id: INS-260627-A7A6
domain: automation
topic: robotics
title: 'Robotics teaching bottlenecks on relevance, not motion'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - robotics
  - reward-learning
  - demonstrations
  - human-feedback
  - relevance
sources:
  - type: blog
    title: >-
      Masked IRL: LLM-Guided Reward Disambiguation from Demonstrations and
      Language
    url: 'https://arxiv.org/html/2511.14565'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Robot demonstrations show how to act, but they do not identify the relevant
    state features behind the human preference.
  standard: >-
    Masked IRL frames the hard part of robot teaching as reward disambiguation.
    A single trajectory can be consistent with avoiding a laptop, staying near a
    person, following a curved path, or several other hidden objectives. More
    demonstrations can reduce ambiguity, but physical demonstrations are
    expensive and sparse. The transferable lesson is to separate behavior traces
    from relevance labels: traces show the path taken, while a usable learning
    system also needs an explicit account of what the trace proves about the
    user's preference.
  deep: >-
    This maps directly onto agent and eval design. Logs, demos, and traces are
    not self-interpreting evidence. Without a relevance layer, a model can
    overfit to incidental details that happened to accompany success. Good
    systems should force the model to state which observed variables are
    task-relevant before treating a trajectory, transcript, or workflow as
    training signal.
subtopic: reward-learning
stance: >-
  When a robot sees a demonstration, the missing variable is often which parts
  of the scene mattered, not how the arm moved.
related:
  - INS-260403-24DB
  - INS-260627-110A
  - PRI-260406-20FD
  - INS-260409-667F
  - PRI-260406-B97E
  - INS-260625-CDEA
---
Masked IRL frames the hard part of robot teaching as reward disambiguation. A single trajectory can be consistent with avoiding a laptop, staying near a person, following a curved path, or several other hidden objectives. More demonstrations can reduce ambiguity, but physical demonstrations are expensive and sparse. The transferable lesson is to separate behavior traces from relevance labels: traces show the path taken, while a usable learning system also needs an explicit account of what the trace proves about the user's preference.
