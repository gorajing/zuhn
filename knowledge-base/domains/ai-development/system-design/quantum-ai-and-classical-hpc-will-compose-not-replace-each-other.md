---
id: INS-260410-31AA
domain: ai-development
topic: system-design
title: 'Quantum, AI, and classical HPC will compose, not replace each other'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - quantum-computing
  - ai
  - hpc
  - compute-stack
  - system-design
sources:
  - type: youtube
    title: Satya Nadella shows me the first Majorana 1 Quantum Computing chip
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=itkvrQUSJC0'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Nadella frames AI as an emulator of a simulator and quantum as a simulator
    of nature, arguing the future stack uses quantum to generate synthetic
    training data that trains AI models for chemistry, physics, and biology.
  standard: >-
    Nadella rejects the common framing of quantum as a replacement for classical
    computing. Instead he gives a precise decomposition: classical is best for
    data-heavy workloads, quantum is best for data-light but state-space-heavy
    exploration (simulation, chemistry, physics, biology), and AI sits between
    them as a learned emulator of the underlying simulator.


    The concrete workflow he describes: use quantum computers to generate
    synthetic data from first-principles simulations that are intractable
    classically, then train AI models on that data to amortize the cost across
    many queries. The AI model becomes a fast emulator of expensive quantum
    ground truth.


    This is a useful mental model for anyone reasoning about the future compute
    stack. It suggests deep-tech bets should not assume one substrate wins —
    instead, the winners will be those who orchestrate composition across
    quantum, AI, and HPC cleanly. It also hints that quantum's near-term
    commercial value may route through AI training pipelines rather than through
    direct end-user quantum APIs.
stance: >-
  Quantum computing will not supersede classical or AI compute — the three will
  be composed, with quantum handling low-data, high-state-space exploration.
related:
  - INS-260325-F21D
  - INS-260325-6A2C
  - INS-260409-BE6D
  - INS-260409-613B
  - INS-260410-0741
  - PRI-260323-1187
  - INS-260323-0897
---
Nadella rejects the common framing of quantum as a replacement for classical computing. Instead he gives a precise decomposition: classical is best for data-heavy workloads, quantum is best for data-light but state-space-heavy exploration (simulation, chemistry, physics, biology), and AI sits between them as a learned emulator of the underlying simulator.

The concrete workflow he describes: use quantum computers to generate synthetic data from first-principles simulations that are intractable classically, then train AI models on that data to amortize the cost across many queries. The AI model becomes a fast emulator of expensive quantum ground truth.

This is a useful mental model for anyone reasoning about the future compute stack. It suggests deep-tech bets should not assume one substrate wins — instead, the winners will be those who orchestrate composition across quantum, AI, and HPC cleanly. It also hints that quantum's near-term commercial value may route through AI training pipelines rather than through direct end-user quantum APIs.
