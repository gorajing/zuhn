---
id: INS-260625-801B
domain: ai-development
topic: research-methodology
title: RL capability gains concentrate where truth is objective
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - reinforcement-learning
  - verifiability
  - task-grading
  - agents
  - automation-frontier
sources:
  - type: youtube
    title: >-
      Cooking with OpenAI’s Research Chief: AGI, o1, Evals, and Scaling Laws —
      Mark Chen
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=fpAthTtha8c'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RL has headwinds in subjective fields where two experts disagree; it takes
    off where implementation is provably correct or wrong, which predicts which
    jobs agents automate first.
  standard: >-
    Chen frames the automation frontier as a gradeability problem. RL
    historically struggles in subjective domains — his example is creative
    writing, where two experts can hold 'wildly different opinions' on the same
    piece, leaving no clean reward signal. It takes off where there is 'cold
    hard truth': math and computer science, where a solution is implemented
    correctly or it isn't. This is why a coding agent works before a
    junior-consultant agent: the code base supplies accessible, verifiable
    context, whereas a consultant's context is scattered and the output is
    judged subjectively.


    The actionable consequence is a heuristic for predicting where agents land
    next: rank a task by how cheaply and unambiguously its output can be graded.
    High-gradeability, accessible-context tasks fall first. This also reframes
    how to make a domain RL-tractable — invest in constructing objective graders
    and gathering the latent context, rather than waiting for a bigger base
    model.


    It is marked time-sensitive because Chen notes 'a lot of people are
    developing techniques to apply RL in these settings' — the subjective
    frontier is actively being attacked, so 'RL can't do subjective tasks' is a
    snapshot of a moving boundary, not a permanent law.
stance: >-
  Reinforcement learning advances fastest in domains with cold-hard ground truth
  (math, code) and stalls where expert judgment diverges (creative writing).
related:
  - INS-260405-C709
  - INS-260605-24AC
  - PRI-260403-52DF
  - PRI-260405-2DE5
  - PRI-260407-F684
---
Chen frames the automation frontier as a gradeability problem. RL historically struggles in subjective domains — his example is creative writing, where two experts can hold 'wildly different opinions' on the same piece, leaving no clean reward signal. It takes off where there is 'cold hard truth': math and computer science, where a solution is implemented correctly or it isn't. This is why a coding agent works before a junior-consultant agent: the code base supplies accessible, verifiable context, whereas a consultant's context is scattered and the output is judged subjectively.

The actionable consequence is a heuristic for predicting where agents land next: rank a task by how cheaply and unambiguously its output can be graded. High-gradeability, accessible-context tasks fall first. This also reframes how to make a domain RL-tractable — invest in constructing objective graders and gathering the latent context, rather than waiting for a bigger base model.

It is marked time-sensitive because Chen notes 'a lot of people are developing techniques to apply RL in these settings' — the subjective frontier is actively being attacked, so 'RL can't do subjective tasks' is a snapshot of a moving boundary, not a permanent law.
