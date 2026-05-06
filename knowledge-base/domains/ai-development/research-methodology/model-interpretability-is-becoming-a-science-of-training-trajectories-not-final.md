---
id: INS-260505-4EB7
domain: ai-development
topic: research-methodology
title: >-
  Model interpretability is becoming a science of training trajectories, not
  final-model probing
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - interpretability
  - training-dynamics
  - mechanistic-interpretability
  - ml-research
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
    Anthropic and others are studying when language is learned during training,
    not just whether the final model speaks it.
  standard: >-
    Laura Howell's reference to broader ML research: interpretability is moving
    from analyzing the final trained model to analyzing training dynamics.
    Anthropic's recent work tracks when specific English language rules are
    learned during training, and shows you can intervene mid-training to make
    the model learn rules earlier. This 'developmental' view of model
    interpretability is more revealing than static probing of final models — you
    can see WHERE in the network specific capabilities first emerge and HOW they
    evolve. Howell argues this is also the right frame for scientific ML: watch
    how the model learns extreme events, where it stores them, and intervene to
    prevent unlearning.


    Application: any team doing interpretability work on models for scientific
    or high-stakes domains should checkpoint extensively during training and
    analyze the trajectory, not just the final model. The training-dynamics view
    often reveals failure modes (extreme-event unlearning, capability decay,
    biased shortcut learning) that final-model probing misses.
stance: >-
  The dominant frame for interpretability is shifting from 'understand what the
  trained model knows' to 'understand how knowledge was acquired during training
  and where in the network it lives' — interpretability research is increasingly
  about training dynamics rather than final-checkpoint analysis.
related:
  - INS-260323-2C19
  - INS-260403-617C
  - INS-260403-9774
  - INS-260403-B8AA
  - INS-260410-B7B1
  - INS-260505-483B
  - INS-260501-FDF0
  - INS-260329-9CED
  - INS-260505-4426
---
Laura Howell's reference to broader ML research: interpretability is moving from analyzing the final trained model to analyzing training dynamics. Anthropic's recent work tracks when specific English language rules are learned during training, and shows you can intervene mid-training to make the model learn rules earlier. This 'developmental' view of model interpretability is more revealing than static probing of final models — you can see WHERE in the network specific capabilities first emerge and HOW they evolve. Howell argues this is also the right frame for scientific ML: watch how the model learns extreme events, where it stores them, and intervene to prevent unlearning.

Application: any team doing interpretability work on models for scientific or high-stakes domains should checkpoint extensively during training and analyze the trajectory, not just the final model. The training-dynamics view often reveals failure modes (extreme-event unlearning, capability decay, biased shortcut learning) that final-model probing misses.
