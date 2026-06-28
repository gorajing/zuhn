---
id: INS-260627-C2AF
domain: ai-development
topic: agent-patterns
title: >-
  The turn-based agent loop is an implicit time-discretization choice with real
  costs
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - time-discretization
  - action-space
  - tmux
  - terminus
  - agent-loop
sources:
  - type: youtube
    title: >-
      Agents are Robots Too: What Self-Driving Taught Me About Building Agents —
      Jesse Hu, Abundant
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=qqXdLf3wy1E'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents implicitly discretize time into turns while robotics samples the
    world continuously at high frequency; the turn choice buys easy reasoning
    but loses real-time response.
  standard: >-
    Robotics forces explicit decisions about how to discretize the world: you
    might sample at 50 Hz and continuously replan, or only react when events are
    pushed. Agents made this choice implicitly by adopting turn-based
    conversation — wait your turn, execute a tool, wait for the entire response.
    The upside is huge for reasoning: turns make inputs, outputs, and
    conversation state easy to reason about. The hidden cost is that the agent
    cannot respond to a pop-up the moment it appears, cannot interact with a
    long-running process as it streams, and cannot react in real time.


    Hu points to richer action spaces most agent designers never consider.
    Terminal-Bench's Terminus agent uses a tmux stream to interact
    character-by-character — it can send Ctrl-C or window commands mid-process.
    The Dreamer line of work interacts with a computer purely through mouse
    clicks and keyboard at 20 frames per second. The takeaway is to treat the
    input/action space as an explicit design variable: ask what tradeoffs your
    turn granularity imposes, and reach for finer-grained embodiment (streaming,
    character-level, pixel-level) when turn-based interaction is the actual
    bottleneck rather than the model.
stance: >-
  Turn-based conversation is an unexamined design decision that trades away
  real-time reactivity, and richer action spaces (character-level terminals,
  pixel-level control) are available when turns are too coarse.
related:
  - INS-260327-6E57
  - INS-260410-F7B8
  - INS-260321-D370
  - INS-260605-015B
  - INS-260325-2999
---
Robotics forces explicit decisions about how to discretize the world: you might sample at 50 Hz and continuously replan, or only react when events are pushed. Agents made this choice implicitly by adopting turn-based conversation — wait your turn, execute a tool, wait for the entire response. The upside is huge for reasoning: turns make inputs, outputs, and conversation state easy to reason about. The hidden cost is that the agent cannot respond to a pop-up the moment it appears, cannot interact with a long-running process as it streams, and cannot react in real time.

Hu points to richer action spaces most agent designers never consider. Terminal-Bench's Terminus agent uses a tmux stream to interact character-by-character — it can send Ctrl-C or window commands mid-process. The Dreamer line of work interacts with a computer purely through mouse clicks and keyboard at 20 frames per second. The takeaway is to treat the input/action space as an explicit design variable: ask what tradeoffs your turn granularity imposes, and reach for finer-grained embodiment (streaming, character-level, pixel-level) when turn-based interaction is the actual bottleneck rather than the model.
