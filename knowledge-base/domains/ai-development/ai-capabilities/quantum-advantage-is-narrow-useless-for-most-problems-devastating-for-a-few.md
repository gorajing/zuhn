---
id: INS-260323-E161
domain: ai-development
topic: ai-capabilities
title: 'Quantum advantage is narrow — useless for most problems, devastating for a few'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - quantum-computing
  - limitations
  - superposition
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
    Quantum computers can perform computations across superpositions but
    measuring collapses to one random result — only a few problems with special
    mathematical structure (like factoring) allow extracting useful answers.
  standard: >-
    The fundamental constraint of quantum computing is the measurement problem:
    a superposition encodes all answers simultaneously, but observation yields
    only one random result, destroying the rest. This means quantum speedup
    requires designing algorithms that funnel superposition states into a form
    where useful information survives measurement.


    So far, only a handful of problems have this property — primarily those
    involving periodicity and interference patterns. For the vast majority of
    computational tasks, quantum computers offer no advantage. But as luck would
    have it, the problems they do solve happen to underpin modern public-key
    cryptography, making the narrow advantage existentially important for
    digital security.
related:
  - INS-260323-8815
  - INS-260325-A1B9
  - PRI-260328-D2FB
  - INS-260325-BE3A
  - INS-260323-085A
  - INS-260329-7A6A
  - INS-260330-5E67
stance: >-
  Quantum computers can perform computations across superpositions but measuring
  collapses to one random result
---
The fundamental constraint of quantum computing is the measurement problem: a superposition encodes all answers simultaneously, but observation yields only one random result, destroying the rest. This means quantum speedup requires designing algorithms that funnel superposition states into a form where useful information survives measurement.

So far, only a handful of problems have this property — primarily those involving periodicity and interference patterns. For the vast majority of computational tasks, quantum computers offer no advantage. But as luck would have it, the problems they do solve happen to underpin modern public-key cryptography, making the narrow advantage existentially important for digital security.
