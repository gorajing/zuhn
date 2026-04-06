---
id: INS-260325-8065
domain: ai-development
topic: ai-capabilities
title: >-
  AlphaProof achieves deep mathematical reasoning through test-time RL on formal
  proofs
actionability: reference
confidence: very_high
shelf_life: evergreen
status: active
tags:
  - alphaproof
  - formal-verification
  - reinforcement-learning
  - mathematical-reasoning
  - depth
  - test-time-rl
sources:
  - type: blog
    title: >-
      Olympiad-level formal mathematical reasoning with reinforcement learning -
      Nature
    url: 'https://www.nature.com/articles/s41586-025-09833-y'
date_extracted: '2026-03-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AlphaProof solved 3 of 5 non-geometry IMO 2024 problems including P6 (solved
    by only 5 of 609 humans) through RL-guided formal proof search.
  standard: >-
    Google DeepMind's AlphaProof demonstrates AI achieving depth — not just
    breadth — in mathematics. It solved IMO 2024 P6 (only 5 humans managed it)
    through multi-step formal proof construction verified by the Lean proof
    assistant. The key innovations: auto-formalized about 1M problems into about
    80M formal Lean statements for RL training, tree search guided by a
    3B-parameter proof network, and test-time RL (TTRL) that generates
    problem-specific variants and learns from them over 2-3 days per problem.
    The system learns to reason cumulatively — each proof step builds on
    previous ones — contradicting the assumption that AI can only do breadth.
    The constraint: this only works in formal domains where every step is
    machine-verifiable.
stance: >-
  AI can achieve genuine depth in formal reasoning domains by combining
  reinforcement learning with formal verification and compute-intensive
  test-time adaptation.
related:
  - INS-260322-32E3
  - INS-260330-1E5E
  - PRI-260325-EEE9
  - INS-260330-4FC5
  - INS-260403-FC4F
evidence:
  - id: INS-260330-1E5E
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-4FC5
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Google DeepMind's AlphaProof demonstrates AI achieving depth — not just breadth — in mathematics. It solved IMO 2024 P6 (only 5 humans managed it) through multi-step formal proof construction verified by the Lean proof assistant. The key innovations: auto-formalized about 1M problems into about 80M formal Lean statements for RL training, tree search guided by a 3B-parameter proof network, and test-time RL (TTRL) that generates problem-specific variants and learns from them over 2-3 days per problem. The system learns to reason cumulatively — each proof step builds on previous ones — contradicting the assumption that AI can only do breadth. The constraint: this only works in formal domains where every step is machine-verifiable.
