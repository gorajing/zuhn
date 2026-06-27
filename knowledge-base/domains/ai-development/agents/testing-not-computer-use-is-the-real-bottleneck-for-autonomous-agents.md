---
id: INS-260625-E10F
domain: ai-development
topic: agents
title: 'Testing, not computer use, is the real bottleneck for autonomous agents'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - testing
  - computer-use
  - agent-evals
  - codebase-context
  - verification
sources:
  - type: youtube
    title: >-
      Devin’s 80% Moment: Background Agents, 7x PRs, & End of Hand-Held Coding —
      Walden Yan & Cole Murray
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=0fgJPhYcbVk'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    People overindex on computer use (emitting click coordinates) when the
    actual challenge is reasoning through how to run interdependent services at
    the right code version and make the feature fire — which demands deep
    codebase context.
  standard: >-
    Walden Yan argues that observers fixate on 'computer use' — can the model
    emit the right coordinates to click a button — when the genuinely hard
    problem is testing. To verify a change spanning frontend, backend, and
    deeper services, the agent has to reason about how to run those applications
    together at the correct code version, then figure out how to actually
    trigger the feature: maybe it must be an admin, maybe a flag has to be on,
    maybe it has to run two sessions and send a specific word into one to
    provoke the behavior. This requires extensive codebase context and
    orchestration, and Cognition found cases where no single frontier model
    could complete the end-to-end task — they had to orchestrate multiple
    frontier models together.


    The practical implication is that test orchestration is codebase-specific
    and can't be solved out of the box, which is precisely why background agents
    that hold the repo locally have an advantage: they know what changed and can
    inspect it to drive verification. Computer use itself has improved sharply
    with recent vision models, making that subset easier, but it remains a
    subset of the larger testing problem. The payoff when it works is the 'I
    know it works' merge moment — the agent sends back a labeled video of the
    feature being exercised, and reviewers feel comfortable merging without
    reading the diff.
stance: >-
  The hard part of letting an AI verify its own changes is orchestrating the app
  and triggering the feature, not clicking the right pixels.
related:
  - INS-260409-96B0
  - INS-260404-21E6
  - INS-260626-F25E
  - INS-260625-6C29
  - INS-260403-A851
---
Walden Yan argues that observers fixate on 'computer use' — can the model emit the right coordinates to click a button — when the genuinely hard problem is testing. To verify a change spanning frontend, backend, and deeper services, the agent has to reason about how to run those applications together at the correct code version, then figure out how to actually trigger the feature: maybe it must be an admin, maybe a flag has to be on, maybe it has to run two sessions and send a specific word into one to provoke the behavior. This requires extensive codebase context and orchestration, and Cognition found cases where no single frontier model could complete the end-to-end task — they had to orchestrate multiple frontier models together.

The practical implication is that test orchestration is codebase-specific and can't be solved out of the box, which is precisely why background agents that hold the repo locally have an advantage: they know what changed and can inspect it to drive verification. Computer use itself has improved sharply with recent vision models, making that subset easier, but it remains a subset of the larger testing problem. The payoff when it works is the 'I know it works' merge moment — the agent sends back a labeled video of the feature being exercised, and reviewers feel comfortable merging without reading the diff.
