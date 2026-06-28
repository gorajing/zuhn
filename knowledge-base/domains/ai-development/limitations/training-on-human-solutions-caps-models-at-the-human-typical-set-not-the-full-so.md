---
id: INS-260625-39E7
domain: ai-development
topic: limitations
title: >-
  Training on human solutions caps models at the human 'typical set,' not the
  full solution space
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - self-play
  - scaling
  - alpha-zero
  - test-time-compute
  - agi
sources:
  - type: youtube
    title: >-
      Self-Play for LLMs, AI for Biology, Formal Verification, and More | YC
      Paper Club
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=3rWSvrFahIY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Human training data confines a model to a 'typical set' H of the full
    solution space F; finite test-time compute and recursive self-improvement
    won't sample F minus H, so superhuman capability requires self-generated
    experience.
  standard: >-
    François Chaubard frames the limit precisely: if the full solution space is
    F, training on known human solutions confines you to some typical set H, and
    despite any feasible amount of test-time compute or recursive
    self-improvement you won't sample F minus H (infinite compute might, but we
    are a finite-horizon MDP, not an infinite one). This is the alpha-go versus
    alpha-zero distinction made general: alpha-go was bootstrapped from human
    games, while alpha-zero, 'unbiased by human meandering,' surpassed it
    through pure self-play. The bet is that the alpha-zero style is the path to
    much more intelligent systems, maybe even AGI.


    The claim is live and contested: Noam Brown holds the opposite view, that
    the human-generated subspace H is rich enough that we can test-time-compute
    and recursively self-improve our way out to F minus H. Chaubard's counter is
    not that it's impossible but that it's improbable we'll sample all of F
    minus H from H alone. For builders chasing superhuman capability, the
    implication is to invest in self-play and learning-from-experience regimes
    rather than ever-larger imitation of human data, which structurally cannot
    exceed its demonstrations.
stance: >-
  Models trained on human-generated data cannot feasibly reach solutions outside
  the human distribution through test-time compute or recursive self-improvement
  alone; only self-generated experience escapes the human ceiling.
related:
  - INS-260321-8567
  - INS-260330-CAE6
  - INS-260408-B5EC
  - INS-260625-D790
  - INS-260404-CE26
  - INS-260625-0D5D
  - INS-260403-1F1B
  - PRI-260407-7FB7
  - INS-260625-2F7C
  - INS-260627-DF51
---
François Chaubard frames the limit precisely: if the full solution space is F, training on known human solutions confines you to some typical set H, and despite any feasible amount of test-time compute or recursive self-improvement you won't sample F minus H (infinite compute might, but we are a finite-horizon MDP, not an infinite one). This is the alpha-go versus alpha-zero distinction made general: alpha-go was bootstrapped from human games, while alpha-zero, 'unbiased by human meandering,' surpassed it through pure self-play. The bet is that the alpha-zero style is the path to much more intelligent systems, maybe even AGI.

The claim is live and contested: Noam Brown holds the opposite view, that the human-generated subspace H is rich enough that we can test-time-compute and recursively self-improve our way out to F minus H. Chaubard's counter is not that it's impossible but that it's improbable we'll sample all of F minus H from H alone. For builders chasing superhuman capability, the implication is to invest in self-play and learning-from-experience regimes rather than ever-larger imitation of human data, which structurally cannot exceed its demonstrations.
