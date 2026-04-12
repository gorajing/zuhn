---
id: INS-260326-2D41
domain: ai-development
topic: alignment
title: >-
  Uncertainty about human values is the key mechanism that makes AI systems
  safely controllable
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - alignment
  - corrigibility
  - uncertainty
  - value-learning
sources:
  - type: youtube
    title: 3 principles for creating safer AI | Stuart Russell
    author: TED
    url: 'https://www.youtube.com/watch?v=EBK-a94IFHY'
date_extracted: '2026-03-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Russell's second principle — that the AI should not know what human values
    are — creates a provably beneficial property: the machine's incentive to
    allow shutdown is directly proportional to its uncertainty about human
    objectives.
  standard: >-
    Russell's most counterintuitive insight is that the solution to AI safety
    comes from deliberately building in ignorance. His three principles are: (1)
    the machine's only objective is maximizing human values, (2) the machine is
    uncertain about what those values are, and (3) it learns about human values
    by observing human behavior. The critical mechanism is principle two.


    When an AI is uncertain about its objective, it reasons differently about
    being switched off: 'The human might switch me off, but only if I'm doing
    something wrong. I don't know what wrong is, but I know I don't want to do
    it. So I should let the human switch me off.' Russell proves mathematically
    that the robot's incentive to allow shutdown is directly tied to its degree
    of uncertainty about the underlying objective. This is the opposite of
    hardwiring 'always obey shutdown commands' — which would be dangerous (you
    don't want a five-year-old to be able to stop a self-driving car). Instead,
    the machine rationally evaluates how trustworthy the person requesting
    shutdown is.
stance: >-
  An AI that is deliberately uncertain about human objectives will rationally
  allow itself to be switched off, because it interprets the shutdown as
  evidence it was doing something wrong — making uncertainty the core safety
  mechanism.
related:
  - INS-260323-8897
  - INS-260326-5E07
  - INS-260412-C37A
  - PRI-260405-0676
  - PRI-260403-67FC
evidence:
  - id: INS-260323-8897
    type: SUPPORTS
  - id: INS-260325-82E8
    type: SUPPORTS
  - id: INS-260330-7E61
    type: SUPPORTS
---
Russell's most counterintuitive insight is that the solution to AI safety comes from deliberately building in ignorance. His three principles are: (1) the machine's only objective is maximizing human values, (2) the machine is uncertain about what those values are, and (3) it learns about human values by observing human behavior. The critical mechanism is principle two.

When an AI is uncertain about its objective, it reasons differently about being switched off: 'The human might switch me off, but only if I'm doing something wrong. I don't know what wrong is, but I know I don't want to do it. So I should let the human switch me off.' Russell proves mathematically that the robot's incentive to allow shutdown is directly tied to its degree of uncertainty about the underlying objective. This is the opposite of hardwiring 'always obey shutdown commands' — which would be dangerous (you don't want a five-year-old to be able to stop a self-driving car). Instead, the machine rationally evaluates how trustworthy the person requesting shutdown is.
