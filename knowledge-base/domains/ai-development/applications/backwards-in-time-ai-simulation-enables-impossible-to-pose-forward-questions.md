---
id: INS-260505-2053
domain: ai-development
topic: applications
title: Backwards-in-time AI simulation enables impossible-to-pose-forward questions
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - climate-ai
  - inverse-problems
  - data-driven-models
  - backwards-simulation
sources:
  - type: audio
    title: Lighting talk 2
date_extracted: '2026-05-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Physics-based climate models only run forward; AI models can run backward —
    start at a hurricane landfall, simulate trajectories that lead to it.
  standard: >-
    Laura Howell's climate AI work: traditional climate simulation (PDE-based)
    only runs forward in time. To investigate 'what conditions led to this
    specific historical hurricane,' you'd run thousands of forward simulations
    and filter for ones that match the outcome. Data-driven AI models
    (FourCastNet/AI2-style) can be inverted to run backwards: start with the
    known landfall, simulate possible weather trajectories that converge to it.
    Demonstrated on hurricane Sandy and on weather→drought transitions. This
    isn't possible with the PDE machinery and opens entirely new categories of
    paleoclimate and counterfactual questions. Specifically: simulating 100
    different past climate scenarios to understand the 1600s landfall peak in
    Chinese coastal hurricane records (preserved in archival rain-and-wind
    logs).


    Application: data-driven AI models in any time-evolving system have
    invertibility properties that physics-based simulators lack. This is a
    category of capability beyond 'faster' — it's 'asks questions that couldn't
    be asked before.' For Memric audit deliverables: same invertibility logic.
    The compression model that maps documents → principles can be inverted to
    ask 'starting from this retired principle, which documents along the
    trajectory were the key evidence?'
stance: >-
  Data-driven AI climate models, unlike physics-based simulators, can be run
  backwards in time — enabling questions like 'starting from a known drought
  outcome, what set of weather conditions could produce it?' that PDE-based
  models can't answer without thousands of forward simulations.
related:
  - INS-260403-FB0C
  - INS-260505-4E44
  - INS-260330-4BFD
  - INS-260627-2EB8
  - PRI-260406-26B3
---
Laura Howell's climate AI work: traditional climate simulation (PDE-based) only runs forward in time. To investigate 'what conditions led to this specific historical hurricane,' you'd run thousands of forward simulations and filter for ones that match the outcome. Data-driven AI models (FourCastNet/AI2-style) can be inverted to run backwards: start with the known landfall, simulate possible weather trajectories that converge to it. Demonstrated on hurricane Sandy and on weather→drought transitions. This isn't possible with the PDE machinery and opens entirely new categories of paleoclimate and counterfactual questions. Specifically: simulating 100 different past climate scenarios to understand the 1600s landfall peak in Chinese coastal hurricane records (preserved in archival rain-and-wind logs).

Application: data-driven AI models in any time-evolving system have invertibility properties that physics-based simulators lack. This is a category of capability beyond 'faster' — it's 'asks questions that couldn't be asked before.' For Memric audit deliverables: same invertibility logic. The compression model that maps documents → principles can be inverted to ask 'starting from this retired principle, which documents along the trajectory were the key evidence?'
