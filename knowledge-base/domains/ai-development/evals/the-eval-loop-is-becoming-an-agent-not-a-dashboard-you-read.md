---
id: INS-260628-8DD0
domain: ai-development
topic: evals
title: 'The eval loop is becoming an agent, not a dashboard you read'
actionability: inspiration
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - evals
  - agents
  - automation
  - optimization
  - developer-tools
sources:
  - type: youtube
    title: 'The Future of Evals - Ankur Goyal, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=MC55hdWLq4o'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Evals have been a dashboard you look at and then manually change your
    code/prompts; the next step is an agent that reads the eval and makes those
    changes itself.
  standard: >-
    Goyal's core observation is that even the most automated AI teams hit a
    fully manual step at eval time: the best you can do is look at a dashboard,
    walk away, and decide what to change. The dashboard is a measurement
    instrument, not an actuator — it tells you the score but does nothing about
    it. Loop is the bet that this loop itself can be automated: an agent ingests
    the eval results and directly proposes (or applies) edits to prompts,
    datasets, and scorers.


    This generalizes beyond Braintrust. Any workflow where humans currently
    translate a metric into a hand-edit is a candidate for an optimization agent
    once models are capable enough. The pattern is: measurement layer (eval) +
    optimization agent (acts on the measurement) + human review surface.
    Builders of AI tooling should ask which of their 'read the dashboard and
    decide' steps are ripe to become agentic. The insight is time-sensitive
    because it describes a transition in progress, not a settled end state.
stance: >-
  The future of evals is an autonomous optimization agent that closes the
  look-decide-edit loop, not a better dashboard a human reads and acts on
  manually.
related:
  - INS-260605-6444
  - INS-260626-9155
  - INS-260626-B149
  - INS-260530-D34F
  - INS-260605-E2D9
  - INS-260627-01CF
---
Goyal's core observation is that even the most automated AI teams hit a fully manual step at eval time: the best you can do is look at a dashboard, walk away, and decide what to change. The dashboard is a measurement instrument, not an actuator — it tells you the score but does nothing about it. Loop is the bet that this loop itself can be automated: an agent ingests the eval results and directly proposes (or applies) edits to prompts, datasets, and scorers.

This generalizes beyond Braintrust. Any workflow where humans currently translate a metric into a hand-edit is a candidate for an optimization agent once models are capable enough. The pattern is: measurement layer (eval) + optimization agent (acts on the measurement) + human review surface. Builders of AI tooling should ask which of their 'read the dashboard and decide' steps are ripe to become agentic. The insight is time-sensitive because it describes a transition in progress, not a settled end state.
