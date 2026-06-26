---
id: INS-260626-408A
domain: ai-development
topic: llm-training
title: >-
  Capture user corrections, not thumbs-up/down — directional edits are the
  high-value training signal
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - continual-learning
  - feedback-signal
  - rlhf
  - data-curation
  - agents
sources:
  - type: youtube
    title: >-
      ⚡️Every product of the future will be a living system  — Ronak Malde,
      Trajectory.ai
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=DcvgPEApHT8'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The valuable training signal is what users change after the agent acts, not
    the binary ratings they almost never give.
  standard: >-
    When teams think about online or continual learning, they reach first for
    explicit binary feedback — accept/reject, thumbs up/down. Malde argues this
    is a trap: those signals are extremely noisy precisely because almost no one
    uses them. People 'vibe-accept' nearly everything in tools like Cursor or
    Claude Code and rarely click a rating, so the binary channel carries little
    information and is biased toward whoever bothers to rate.


    The rich signal is the implicit one: the modifications a user makes after
    the agent produces output. At Windsurf this was a user moving a button to
    the left, restructuring a class, or rewriting code the agent generated. In
    legal it is a lawyer redoing research the agent missed or editing the
    redlines it proposed. These edits encode the direction the output should
    have gone and the expert 'taste' that closes the gap — information a single
    reward number cannot hold.


    The practical implication for anyone building a learning product: instrument
    the diff between what the agent did and what the user kept, not just a
    ratings widget. Build the pipeline that converts those correction vectors
    into judges, evals, and training environments. This pattern generalizes
    across domains — code, GTM workflows, legal, finance — because every product
    has a moment where a human corrects the machine, and that moment is the
    asset.
stance: >-
  Binary feedback (accept/reject, thumbs up/down) is too noisy to train on; the
  corrections users make after an agent acts are the real continual-learning
  signal.
related:
  - INS-260410-CDE9
  - INS-260403-1F1B
  - INS-260626-4075
  - INS-260625-9096
  - PRI-260407-9DDF
---
When teams think about online or continual learning, they reach first for explicit binary feedback — accept/reject, thumbs up/down. Malde argues this is a trap: those signals are extremely noisy precisely because almost no one uses them. People 'vibe-accept' nearly everything in tools like Cursor or Claude Code and rarely click a rating, so the binary channel carries little information and is biased toward whoever bothers to rate.

The rich signal is the implicit one: the modifications a user makes after the agent produces output. At Windsurf this was a user moving a button to the left, restructuring a class, or rewriting code the agent generated. In legal it is a lawyer redoing research the agent missed or editing the redlines it proposed. These edits encode the direction the output should have gone and the expert 'taste' that closes the gap — information a single reward number cannot hold.

The practical implication for anyone building a learning product: instrument the diff between what the agent did and what the user kept, not just a ratings widget. Build the pipeline that converts those correction vectors into judges, evals, and training environments. This pattern generalizes across domains — code, GTM workflows, legal, finance — because every product has a moment where a human corrects the machine, and that moment is the asset.
