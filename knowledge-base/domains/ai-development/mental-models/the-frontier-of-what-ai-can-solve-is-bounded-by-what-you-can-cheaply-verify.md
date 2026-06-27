---
id: INS-260627-BBD1
domain: ai-development
topic: mental-models
title: The frontier of what AI can solve is bounded by what you can cheaply verify
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - verification-asymmetry
  - p-vs-np
  - software-2.0
  - mental-models
  - objective-function
sources:
  - type: youtube
    title: 'Making Codebases Agent Ready – Eno Reyes, Factory AI'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ShuJ_CN6zr4'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because many tasks are far easier to verify than to solve, software
    development — being highly verifiable — is where agents are most advanced.
  standard: >-
    Drawing on the P-vs-NP intuition and Jason Wei's 'asymmetry of
    verification,' Reyes notes that a huge class of tasks is much easier to
    verify than to solve. The best-suited problems for automation share four
    properties: an objective truth, fast/scalable validation (you can check many
    candidates in parallel), low noise (high confidence in the verdict), and
    continuous rather than binary signals (30%/70%/100% correct, not just
    pass/fail). This is why frontier labs build models via post-training on
    verifiable tasks.


    The practical corollary is a mindset shift: software is built today by
    *specification* ('input x, output y'), but the boundary of what agents can
    build is set by *verification*. So the lever for expanding agent capability
    is not a better model — it's making more of your work cheaply, scalably, and
    unambiguously verifiable. Software development is the most advanced agent
    domain precisely because 20-30 years of automated validation (unit/E2E/QA
    tests, linters, OpenAPI specs) already make it highly verifiable; companies
    like browser-base and computer-use agents are now extending verifiability to
    visual and front-end changes.
stance: >-
  The set of tasks AI systems can reliably solve is determined by whether you
  can specify an objective and verify candidate solutions, not by what the model
  can generate.
related:
  - INS-260323-F2C3
  - INS-260330-74A0
  - INS-260409-6833
  - INS-260410-E977
  - INS-260410-3601
  - INS-260605-3285
  - INS-260605-27CC
  - INS-260624-A338
  - INS-260626-F6DA
  - INS-260626-D7AE
---
Drawing on the P-vs-NP intuition and Jason Wei's 'asymmetry of verification,' Reyes notes that a huge class of tasks is much easier to verify than to solve. The best-suited problems for automation share four properties: an objective truth, fast/scalable validation (you can check many candidates in parallel), low noise (high confidence in the verdict), and continuous rather than binary signals (30%/70%/100% correct, not just pass/fail). This is why frontier labs build models via post-training on verifiable tasks.

The practical corollary is a mindset shift: software is built today by *specification* ('input x, output y'), but the boundary of what agents can build is set by *verification*. So the lever for expanding agent capability is not a better model — it's making more of your work cheaply, scalably, and unambiguously verifiable. Software development is the most advanced agent domain precisely because 20-30 years of automated validation (unit/E2E/QA tests, linters, OpenAPI specs) already make it highly verifiable; companies like browser-base and computer-use agents are now extending verifiability to visual and front-end changes.
