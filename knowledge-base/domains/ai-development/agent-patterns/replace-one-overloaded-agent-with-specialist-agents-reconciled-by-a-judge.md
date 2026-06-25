---
id: INS-260625-447A
domain: ai-development
topic: agent-patterns
title: Replace one overloaded agent with specialist agents reconciled by a judge
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - mixture-of-agents
  - judge-agent
  - task-decomposition
  - specialization
sources:
  - type: youtube
    title: >-
      Why More Context Makes Your Agent Dumber and What to Do About It — Nupur
      Sharma, Qodo
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=EcqMYoIV57A'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A single agent given four tasks tends to nail two and lose the rest
    mid-context; splitting into expert agents and adding a judge agent to
    combine their outputs into one coherent result avoids that silent drop.
  standard: >-
    The tempting move once context windows are large is to let one agent do
    testing, review, security, and coding all at once. Qodo's experience is that
    the agent gets overwhelmed and 'loses what the original task was'—give it
    four tasks and it quietly narrows to two, returning great results on those
    while the other two disappear in the middle. This is the same
    lost-in-the-middle failure showing up at the task level rather than the
    token level.


    The pattern that fixes it is a mixture of agents: many small agents each
    excellent at one specific job, instead of one big generalist. But
    specialization creates a new problem—independent agents return outputs that
    don't cohere (the vacation example: one books a hotel in Greece, another a
    flight to Portugal). So a judge agent collects every specialist's result and
    checks whether they make sense together, refining the set down to what is
    mutually consistent and actually relevant.


    Qodo's own PR-review architecture instantiates this: a context collector
    gathers context once, bifurcates it to specialist agents (security,
    code-diff, Jira), and a judge agent then scores their combined findings
    against PR history and reviewer/developer behavior to decide what is worth
    surfacing. The judge is also where calibration lives—it weighs suggestions
    by whether developers historically accepted similar ones, so the system's
    notion of 'good' is grounded in the team's actual past decisions rather than
    the model's defaults.
stance: >-
  As context grows, one agent handling many tasks silently drops some of them,
  so you should decompose into single-purpose specialist agents whose
  conflicting outputs are reconciled by a dedicated judge agent.
related:
  - INS-260327-EDF0
  - INS-260410-E977
  - INS-260410-7ED2
  - INS-260410-A27C
  - INS-260514-EA9E
  - INS-260605-B5A2
  - INS-260605-9E7A
  - INS-260605-9976
  - INS-260605-ED35
  - INS-260327-C1A4
---
The tempting move once context windows are large is to let one agent do testing, review, security, and coding all at once. Qodo's experience is that the agent gets overwhelmed and 'loses what the original task was'—give it four tasks and it quietly narrows to two, returning great results on those while the other two disappear in the middle. This is the same lost-in-the-middle failure showing up at the task level rather than the token level.

The pattern that fixes it is a mixture of agents: many small agents each excellent at one specific job, instead of one big generalist. But specialization creates a new problem—independent agents return outputs that don't cohere (the vacation example: one books a hotel in Greece, another a flight to Portugal). So a judge agent collects every specialist's result and checks whether they make sense together, refining the set down to what is mutually consistent and actually relevant.

Qodo's own PR-review architecture instantiates this: a context collector gathers context once, bifurcates it to specialist agents (security, code-diff, Jira), and a judge agent then scores their combined findings against PR history and reviewer/developer behavior to decide what is worth surfacing. The judge is also where calibration lives—it weighs suggestions by whether developers historically accepted similar ones, so the system's notion of 'good' is grounded in the team's actual past decisions rather than the model's defaults.
