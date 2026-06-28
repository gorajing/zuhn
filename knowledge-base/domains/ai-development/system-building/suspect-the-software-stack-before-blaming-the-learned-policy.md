---
id: INS-260628-DA8F
domain: ai-development
topic: system-building
title: Suspect the software stack before blaming the learned policy
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - debugging
  - ml-deployment
  - root-cause-analysis
  - robotics
  - systems
sources:
  - type: youtube
    title: "Rishabh Garg, Tesla Optimus —\_Challenges in High Performance Robotics Systems"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=bCGbuyv8PMk'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Failures that look like a bad policy are usually in the infrastructure
    between controller and actuator — diagnose the system before retraining the
    model.
  standard: >-
    The recurring trap in deploying a learned policy onto hardware is the reflex
    'this has to be the policy — there's no way it's the software.' The speaker
    repeats this self-deception at every stage of the talk, then shows the
    culprit was the system each time: bus timing, thread synchronization,
    logging, or kernel priorities. The expensive failure mode is spending days
    tuning or retraining a model that was never the problem.


    The diagnostic discipline is to instrument and rule out the deployment
    substrate first — capture timestamped data off the bus, plot
    expected-vs-actual timing, and prove the commands the policy emitted
    actually reached the actuators on time. Only after the plumbing is verified
    clean should you attribute misbehavior to the policy.


    This generalizes well beyond robotics. Any ML system in production — an LLM
    agent, a recommender, a vision pipeline — sits inside a software harness
    that can corrupt, delay, drop, or reorder its inputs and outputs. 'The model
    is wrong' is the most tempting and most over-diagnosed conclusion; verify
    the integration layer before touching the model.
stance: >-
  When a deployed learned policy misbehaves, the root cause is more often the
  surrounding software and communication system than the model itself.
related:
  - INS-260626-485E
  - INS-260602-E2BD
  - INS-260410-FD24
  - INS-260410-B0D6
  - INS-260625-0021
  - INS-260628-DCE4
---
The recurring trap in deploying a learned policy onto hardware is the reflex 'this has to be the policy — there's no way it's the software.' The speaker repeats this self-deception at every stage of the talk, then shows the culprit was the system each time: bus timing, thread synchronization, logging, or kernel priorities. The expensive failure mode is spending days tuning or retraining a model that was never the problem.

The diagnostic discipline is to instrument and rule out the deployment substrate first — capture timestamped data off the bus, plot expected-vs-actual timing, and prove the commands the policy emitted actually reached the actuators on time. Only after the plumbing is verified clean should you attribute misbehavior to the policy.

This generalizes well beyond robotics. Any ML system in production — an LLM agent, a recommender, a vision pipeline — sits inside a software harness that can corrupt, delay, drop, or reorder its inputs and outputs. 'The model is wrong' is the most tempting and most over-diagnosed conclusion; verify the integration layer before touching the model.
