---
id: INS-260330-3879
domain: psychology
topic: learning
title: Cost function design determines what a system can and cannot learn to value
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - incentive-design
  - cost-functions
  - optimization
  - learning-boundaries
sources:
  - type: youtube
    title: 'Gradient descent, how neural networks learn | Deep Learning Chapter 2'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=IHZwWFHWa-w'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The MNIST network confidently classifies random noise because its cost
    function never incentivized uncertainty — what you optimize for defines the
    ceiling of what you learn.
  standard: >-
    When fed random noise images, the trained MNIST network confidently outputs
    a digit classification rather than expressing uncertainty. As 3Blue1Brown
    explains: 'its cost function never gave it any incentive to be anything but
    utterly confident in its decisions.' The network's entire universe was
    cleanly labeled digits, so it never learned that some inputs should produce
    low-confidence outputs.


    This is a powerful cross-domain principle: any learning system — human,
    organizational, or artificial — develops capabilities strictly bounded by
    what its feedback mechanism rewards. A student graded only on test scores
    won't develop curiosity. A company measured only on revenue won't develop
    ethical judgment. The cost function is not just a technical detail; it's the
    complete specification of what 'good' means to the system, and capabilities
    outside that specification won't emerge no matter how powerful the learner.
    This makes cost function design (or incentive design) the highest-leverage
    intervention in any learning system.
stance: >-
  A system's incentive structure (cost function) completely determines its
  competence boundaries — capabilities not rewarded by the objective will never
  emerge regardless of capacity
related:
  - INS-260323-61CD
  - INS-260330-3ADD
  - PRI-260406-CC90
  - PRI-260407-7FB7
  - INS-260330-FCFA
  - PRI-260406-E5FB
  - INS-260330-2154
  - INS-260405-638B
  - INS-260404-4541
evidence:
  - id: INS-260330-3ADD
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260327-BE4E
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-2154
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260322-1A20
    type: CHALLENGES
    classified_at: '2026-04-03'
  - id: INS-260323-61CD
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
---
When fed random noise images, the trained MNIST network confidently outputs a digit classification rather than expressing uncertainty. As 3Blue1Brown explains: 'its cost function never gave it any incentive to be anything but utterly confident in its decisions.' The network's entire universe was cleanly labeled digits, so it never learned that some inputs should produce low-confidence outputs.

This is a powerful cross-domain principle: any learning system — human, organizational, or artificial — develops capabilities strictly bounded by what its feedback mechanism rewards. A student graded only on test scores won't develop curiosity. A company measured only on revenue won't develop ethical judgment. The cost function is not just a technical detail; it's the complete specification of what 'good' means to the system, and capabilities outside that specification won't emerge no matter how powerful the learner. This makes cost function design (or incentive design) the highest-leverage intervention in any learning system.
