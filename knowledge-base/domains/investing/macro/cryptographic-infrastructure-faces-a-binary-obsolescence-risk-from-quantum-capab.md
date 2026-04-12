---
id: INS-260412-79D5
domain: investing
topic: macro
title: >-
  Cryptographic infrastructure faces a binary obsolescence risk from quantum
  capability thresholds
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - quantum-computing
  - cryptography
  - cybersecurity
  - infrastructure-risk
sources:
  - type: youtube
    title: Quantum Computers Explained – Limits of Human Technology
    author: Kurzgesagt – In a Nutshell
    url: 'https://www.youtube.com/watch?v=JhHMJCUmq28'
date_extracted: '2026-04-12'
last_accessed: null
access_count: 0
indexed: true
embedded: false
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Public-key encryption's security relies on computational difficulty that
    quantum computers eliminate, creating a binary safe/broken threshold.
  standard: >-
    Today's internet security (HTTPS, email encryption, banking) rests on the
    mathematical difficulty of factoring large numbers — a task that takes
    classical computers years but that quantum computers with Shor's algorithm
    can solve efficiently. Unlike most technology transitions where the old
    system degrades gradually, this is a threshold event: once quantum computers
    reach sufficient scale (estimated ~4,000 logical qubits for RSA-2048),
    existing encryption breaks completely and suddenly. This has massive
    investment implications: post-quantum cryptography (PQC) is already being
    standardized by NIST, and companies providing PQC migration infrastructure
    represent a hedge against this binary risk. The 'harvest now, decrypt later'
    threat means adversaries are already storing encrypted data to decrypt once
    quantum capability arrives, making the timeline for migration more urgent
    than the timeline for quantum computers themselves.
stance: >-
  Current public-key cryptography will become fundamentally broken once quantum
  computers reach sufficient qubit counts, creating a step-function disruption
  rather than gradual degradation
related:
  - INS-260323-B47B
  - INS-260323-8815
  - INS-260323-B3A3
  - INS-260325-A1B9
  - INS-260325-BE3A
  - PRI-260328-D2FB
  - PRI-260411-31BB
  - INS-260412-3CF8
---
Today's internet security (HTTPS, email encryption, banking) rests on the mathematical difficulty of factoring large numbers — a task that takes classical computers years but that quantum computers with Shor's algorithm can solve efficiently. Unlike most technology transitions where the old system degrades gradually, this is a threshold event: once quantum computers reach sufficient scale (estimated ~4,000 logical qubits for RSA-2048), existing encryption breaks completely and suddenly. This has massive investment implications: post-quantum cryptography (PQC) is already being standardized by NIST, and companies providing PQC migration infrastructure represent a hedge against this binary risk. The 'harvest now, decrypt later' threat means adversaries are already storing encrypted data to decrypt once quantum capability arrives, making the timeline for migration more urgent than the timeline for quantum computers themselves.
