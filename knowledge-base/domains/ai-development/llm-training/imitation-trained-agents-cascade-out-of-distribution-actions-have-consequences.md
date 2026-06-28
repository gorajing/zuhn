---
id: INS-260627-899A
domain: ai-development
topic: llm-training
title: >-
  Imitation-trained agents cascade out-of-distribution; actions have
  consequences
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - dagger
  - imitation-learning
  - out-of-distribution
  - reinforcement-learning
  - cascading-errors
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
    The DAgger/out-of-distribution problem from robotics explains why a browser
    agent that meets an unseen pop-up gets catastrophically confused: small
    deviations compound because actions change future states.
  standard: >-
    Hu invokes the classic DAgger and out-of-distribution problem. Imitation
    learning (the agent analogue of SFT on human demonstrations) has a known
    failure mode: as soon as the policy gets a little off-policy relative to the
    human examples, it lands somewhere humans never were, and the error
    compounds — each wrong action moves it further out of distribution. The
    vivid example is a browser agent encountering a pop-up that never appeared
    in training; humans handle pop-ups so naturally they're underrepresented in
    demonstrations, so the agent gets confused, and then gets really confused as
    the mistakes cascade.


    The deeper point is that agents are not classification or
    sequence-prediction models — they predict, act, and then must deal with the
    consequences of that action in a messy real world before re-evaluating
    everything. Actions have consequences. This is why the bulk of the hard work
    in both self-driving (2017–2020 over-invested in perception models, assuming
    you just draw boxes and drive around them) and agents lies in building
    action models, not predictive ones. Long sophisticated reasoning traces look
    impressive, but executing them in the real world is where tool calls fail
    and agents fail to self-correct. Closing this gap requires RL and grounded
    simulation that exposes the policy to off-distribution states, not simply
    collecting more clean human demonstrations.
stance: >-
  Agents trained by imitation collapse the moment they drift slightly off the
  human-demonstration distribution, so robustness comes from RL and simulation
  rather than more demonstrations.
related:
  - INS-260321-D370
  - INS-260403-9BBA
  - INS-260412-8FB0
  - INS-260627-040E
  - INS-260627-0F4E
---
Hu invokes the classic DAgger and out-of-distribution problem. Imitation learning (the agent analogue of SFT on human demonstrations) has a known failure mode: as soon as the policy gets a little off-policy relative to the human examples, it lands somewhere humans never were, and the error compounds — each wrong action moves it further out of distribution. The vivid example is a browser agent encountering a pop-up that never appeared in training; humans handle pop-ups so naturally they're underrepresented in demonstrations, so the agent gets confused, and then gets really confused as the mistakes cascade.

The deeper point is that agents are not classification or sequence-prediction models — they predict, act, and then must deal with the consequences of that action in a messy real world before re-evaluating everything. Actions have consequences. This is why the bulk of the hard work in both self-driving (2017–2020 over-invested in perception models, assuming you just draw boxes and drive around them) and agents lies in building action models, not predictive ones. Long sophisticated reasoning traces look impressive, but executing them in the real world is where tool calls fail and agents fail to self-correct. Closing this gap requires RL and grounded simulation that exposes the policy to off-distribution states, not simply collecting more clean human demonstrations.
