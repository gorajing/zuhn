---
id: INS-260627-342A
domain: ai-development
topic: architecture
title: 'The offline stack, not the model, decides which agent team wins'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - self-driving
  - offline-stack
  - tooling
  - infrastructure
  - robotics-transfer
sources:
  - type: youtube
    title: >-
      Agents are Robots Too: What Self-Driving Taught Me About Building Agents —
      Jesse Hu, Abundant
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=qqXdLf3wy1E'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    In both self-driving and agents the model is roughly 1% of the work and the
    offline stack is the other 99%, so invest there to ship reliably.
  standard: >-
    Hu's central framing is a 1%-vs-99% problem: it feels like the model does
    most of the work, but in real deployments the model is a small fraction and
    the overwhelming majority of effort goes into everything around it. In
    robotics that means hardware, sensors, actuators, integration, deployment,
    plus an offline stack for simulation, training, monitoring, and human
    feedback loops. Agents have the exact same shape: tools, APIs, MCPs,
    terminals, browsers, VMs, persistent filesystems on the online side, and
    continuous retraining, monitoring, and feedback tooling on the offline side.


    The hard-won self-driving lesson is that the winning team was rarely the one
    with the best model or best online stack — it was the one with the best
    offline stack, because that is what lets developers iterate fast and ship
    reliably. For agent builders this is a direct prescription: treat your
    simulation, evaluation, logging, and feedback infrastructure as the primary
    investment, not an afterthought to a strong model. Teams that pour
    everything into model quality and neglect the surrounding 99% will lose to
    teams whose tooling lets them hill-climb faster.
stance: >-
  The winning agent team is the one with the best offline stack (simulation,
  monitoring, retraining, feedback tooling), not the best model.
related:
  - INS-260605-7B83
  - INS-260625-DD6B
  - INS-260423-9225
  - INS-260625-2E48
  - INS-260514-C51F
---
Hu's central framing is a 1%-vs-99% problem: it feels like the model does most of the work, but in real deployments the model is a small fraction and the overwhelming majority of effort goes into everything around it. In robotics that means hardware, sensors, actuators, integration, deployment, plus an offline stack for simulation, training, monitoring, and human feedback loops. Agents have the exact same shape: tools, APIs, MCPs, terminals, browsers, VMs, persistent filesystems on the online side, and continuous retraining, monitoring, and feedback tooling on the offline side.

The hard-won self-driving lesson is that the winning team was rarely the one with the best model or best online stack — it was the one with the best offline stack, because that is what lets developers iterate fast and ship reliably. For agent builders this is a direct prescription: treat your simulation, evaluation, logging, and feedback infrastructure as the primary investment, not an afterthought to a strong model. Teams that pour everything into model quality and neglect the surrounding 99% will lose to teams whose tooling lets them hill-climb faster.
