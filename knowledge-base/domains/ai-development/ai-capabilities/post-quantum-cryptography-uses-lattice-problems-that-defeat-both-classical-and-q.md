---
id: INS-260323-B47B
domain: ai-development
topic: ai-capabilities
title: >-
  Post-quantum cryptography uses lattice problems that defeat both classical and
  quantum computers
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - cryptography
  - lattices
  - post-quantum
  - nist
sources:
  - type: youtube
    title: What makes quantum computers SO powerful?
    author: Veritasium
    url: 'https://youtu.be/-UrdExQW0cs'
date_extracted: '2026-03-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    NIST's post-quantum encryption standards use lattice-based problems in ~1000
    dimensions where finding the closest vector is computationally infeasible
    for both classical and quantum machines.
  standard: >-
    Lattice-based cryptography works by encoding messages as points near lattice
    coordinates in high-dimensional space. Decryption requires finding the
    closest lattice point — trivial with good basis vectors (the private key)
    but computationally intractable with bad ones (the public key).


    The dimensional scaling is what makes this secure: in 2D the closest-vector
    problem is visual and easy, but in 1000 dimensions each step toward the
    target in one dimension potentially moves you away in the other 999. NIST
    selected four algorithms based on this math in 2022 after a rigorous
    multi-year competition. This represents the foundation of cryptographic
    security for the post-quantum era.
related:
  - INS-260322-3537
  - PRI-260411-31BB
  - PRI-260328-D2FB
  - INS-260325-A1B9
  - INS-260325-BE3A
  - INS-260323-B3A3
stance: >-
  NIST's post-quantum encryption standards use lattice-based problems in ~1000
  dimensions where finding the closest vector is computationally infeasi...
---
Lattice-based cryptography works by encoding messages as points near lattice coordinates in high-dimensional space. Decryption requires finding the closest lattice point — trivial with good basis vectors (the private key) but computationally intractable with bad ones (the public key).

The dimensional scaling is what makes this secure: in 2D the closest-vector problem is visual and easy, but in 1000 dimensions each step toward the target in one dimension potentially moves you away in the other 999. NIST selected four algorithms based on this math in 2022 after a rigorous multi-year competition. This represents the foundation of cryptographic security for the post-quantum era.
