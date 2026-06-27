---
id: INS-260627-00BE
domain: ai-development
topic: product-strategy
title: >-
  Building agents for non-technical users means offloading every technical
  decision
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - product-strategy
  - non-technical-users
  - supervised-vs-unsupervised
  - abstraction
  - ux
sources:
  - type: youtube
    title: 'The 3 Pillars of Autonomy – Michele Catasta, Replit'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=MLhAA9yguwM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Most coding agents are 'supervised autonomy' (Tesla FSD — you need a license
    and stay at the wheel); serving knowledge workers requires 'unsupervised
    autonomy' (Waymo — sit in the back, no license, all complexity hidden).
  standard: >-
    Catasta distinguishes two kinds of autonomy. Supervised autonomy is the
    Tesla FSD model: you still need a driving license and sit at the wheel to
    handle the long tail, even if you intervene 1% of the time — analogous to
    coding agents that require technical savvy to use correctly. Unsupervised
    autonomy is the Waymo model: you sit in the back with no access to the wheel
    and no license required. Replit is deliberately building the Waymo
    experience because their goal is to empower every knowledge worker to create
    software, and a knowledge worker cannot be expected to know what technical
    decisions an agent should make. 


    The product consequence is that you must offload the entire level of
    technical complexity away from the user — they care only about whether their
    goal is accomplished, not how it was built, and they cannot even provide
    technical feedback when the agent gets stuck. This is a stronger constraint
    than most agent products accept: it forbids the common escape hatch of 'ask
    the user to clarify' for technical questions, and it raises the bar on
    verification and autonomy because there is no expert in the loop to catch
    the long-tail failures. (Confidence medium: this is one vendor's strategic
    bet on the non-technical segment, not a universal law.)
stance: >-
  Agents for non-technical users must be 'Waymo, not Tesla' — removing the
  steering wheel entirely rather than keeping a supervised human in the loop.
related:
  - INS-260325-031F
  - INS-260327-7F64
  - INS-260403-7DF4
  - INS-260603-6B3D
  - INS-260605-B182
  - INS-260625-1654
  - INS-260625-D295
  - INS-260625-3866
---
Catasta distinguishes two kinds of autonomy. Supervised autonomy is the Tesla FSD model: you still need a driving license and sit at the wheel to handle the long tail, even if you intervene 1% of the time — analogous to coding agents that require technical savvy to use correctly. Unsupervised autonomy is the Waymo model: you sit in the back with no access to the wheel and no license required. Replit is deliberately building the Waymo experience because their goal is to empower every knowledge worker to create software, and a knowledge worker cannot be expected to know what technical decisions an agent should make. 

The product consequence is that you must offload the entire level of technical complexity away from the user — they care only about whether their goal is accomplished, not how it was built, and they cannot even provide technical feedback when the agent gets stuck. This is a stronger constraint than most agent products accept: it forbids the common escape hatch of 'ask the user to clarify' for technical questions, and it raises the bar on verification and autonomy because there is no expert in the loop to catch the long-tail failures. (Confidence medium: this is one vendor's strategic bet on the non-technical segment, not a universal law.)
