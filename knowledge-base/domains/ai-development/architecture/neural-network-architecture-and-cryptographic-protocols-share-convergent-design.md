---
id: INS-260501-DF06
domain: ai-development
topic: architecture
title: >-
  Neural network architecture and cryptographic protocols share convergent
  design — both jumble information across all inputs
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - convergent-evolution
  - revnets
  - feistel-cipher
  - differential-cryptanalysis
  - architecture
sources:
  - type: youtube
    title: >-
      How GPT-5, Claude, and Gemini are actually trained and served – Reiner
      Pope
    author: Dwarkesh Patel
    url: 'https://youtu.be/xmkSf5IS-zw'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RevNets are Feistel ciphers; adversarial attacks are differential
    cryptanalysis — neural nets and crypto have been borrowing from each other.
  standard: >-
    Pope's parallel: cryptographic protocols and neural networks both need to
    mix information across all inputs — for crypto, it's the avalanche property
    (small input change → large output change); for nets, it's the requirement
    that each input feature can modulate the interpretation of every other. They
    optimize for opposite goals (crypto wants to destroy structure, nets want to
    extract it), but the mixing primitives converge.


    Concrete cross-pollinations: (1) Feistel ciphers — a construction for making
    invertible operations out of non-invertible functions — were imported into
    neural nets as RevNets in 2017, allowing entire networks to run backwards
    from outputs to inputs and dramatically reducing training memory by
    eliminating the need to store activations. (2) Differential cryptanalysis
    (taking small differences of input to find what makes outputs change) is
    mathematically the same as adversarial attacks on image classifiers (small
    perturbations causing classification flips). The takeaway for ML
    researchers: cryptography is a 70-year-old field with deep theory on mixing,
    invertibility, and resistance to small-perturbation attacks. Borrowing
    primitives from there is more productive than reinventing them — and the
    directions of adoption are still mostly one-way (crypto → ML), suggesting
    more imports are possible.
stance: >-
  Despite optimizing for opposite goals (crypto wants randomness from structure;
  nets want structure from randomness), both families converge on similar mixing
  primitives, and the shared math has produced concrete cross-pollination —
  RevNets came from Feistel ciphers, and adversarial attacks are differential
  cryptanalysis applied to nets.
related:
  - INS-260330-6BBD
  - INS-260514-8FC8
  - INS-260325-A1B9
  - INS-260410-025A
  - INS-260325-BE3A
---
Pope's parallel: cryptographic protocols and neural networks both need to mix information across all inputs — for crypto, it's the avalanche property (small input change → large output change); for nets, it's the requirement that each input feature can modulate the interpretation of every other. They optimize for opposite goals (crypto wants to destroy structure, nets want to extract it), but the mixing primitives converge.

Concrete cross-pollinations: (1) Feistel ciphers — a construction for making invertible operations out of non-invertible functions — were imported into neural nets as RevNets in 2017, allowing entire networks to run backwards from outputs to inputs and dramatically reducing training memory by eliminating the need to store activations. (2) Differential cryptanalysis (taking small differences of input to find what makes outputs change) is mathematically the same as adversarial attacks on image classifiers (small perturbations causing classification flips). The takeaway for ML researchers: cryptography is a 70-year-old field with deep theory on mixing, invertibility, and resistance to small-perturbation attacks. Borrowing primitives from there is more productive than reinventing them — and the directions of adoption are still mostly one-way (crypto → ML), suggesting more imports are possible.
