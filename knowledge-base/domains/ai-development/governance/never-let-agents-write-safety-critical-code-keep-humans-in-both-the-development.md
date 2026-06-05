---
id: INS-260603-6B3D
domain: ai-development
topic: governance
title: >-
  Never let agents write safety-critical code; keep humans in both the
  development and physical loops
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - safety-critical
  - human-in-the-loop
  - agent-guardrails
  - physical-safety
  - ai-governance
sources:
  - type: audio
    title: From agentic AI to physical AI
date_extracted: '2026-06-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Brad (Bedrock): 'we don't let the agents directly write safety-critical
    code' — it's carefully reviewed by humans, and the agents' ability to act in
    safety areas is limited; there are two loops — a development loop (a human
    reviews changes to autonomy safety margins) and a physical operation loop
    (human involvement in machine operation).
  standard: >-
    For systems where failure is catastrophic (an 80,000-lb machine that could
    crush a car), the panel's rule is categorical: agents do not directly write
    safety-critical code, and their ability to act in safety-relevant areas is
    explicitly limited. Safety-critical code is carefully reviewed by humans;
    physical-safety guardrails in the physical space are non-negotiable.


    The two-loop framework the Bedrock engineer articulated:

    1. Development loop — a human stays in the loop for changes that affect
    safety. 'We're not going to take a customer question and have that go
    straight to update the safety margin in the autonomy system so the machine
    gets closer to the dump truck.' A human reviews safety-margin changes before
    they ship.

    2. Physical operation loop — there will be human involvement in operation
    from time to time (not necessarily full-time teleoperation), but the machine
    must operate safely autonomously between those touchpoints. The way to earn
    the right to reduce human involvement is robust evaluation — physical,
    simulation, and software validation that installs justified trust in the
    machine.


    The broader governance point from Amazon: AI is already building viruses to
    hack agent-to-AI systems, so you have to revisit your anti-virus/phishing
    posture for inter-agent communication, and isolate short-term/long-term
    agent memory when agents touch critical customer data. Safety-critical AI
    raises the security bar, not just the correctness bar.


    The transferable principle: the higher the cost of failure, the more the
    human-in-the-loop is structural rather than optional — and earning autonomy
    is gated on evaluation rigor, not on model capability alone. This is the
    embodied-stakes version of the trust-but-verify pattern (Walmart source):
    for safety-critical action, verification is mandatory and human-owned.
stance: >-
  For safety-critical systems, agents must be barred from directly writing
  safety-critical code and from acting unsupervised in safety-relevant areas —
  humans stay in both the development loop (reviewing safety-margin changes) and
  the physical operation loop, regardless of agent capability
related:
  - INS-260320-1B10
  - INS-260325-031F
  - INS-260321-4178
  - INS-260327-FC68
  - INS-260327-5F10
  - INS-260330-3737
  - INS-260330-AC7F
  - INS-260402-876A
  - INS-260403-C4BE
  - INS-260403-834C
---
For systems where failure is catastrophic (an 80,000-lb machine that could crush a car), the panel's rule is categorical: agents do not directly write safety-critical code, and their ability to act in safety-relevant areas is explicitly limited. Safety-critical code is carefully reviewed by humans; physical-safety guardrails in the physical space are non-negotiable.

The two-loop framework the Bedrock engineer articulated:
1. Development loop — a human stays in the loop for changes that affect safety. 'We're not going to take a customer question and have that go straight to update the safety margin in the autonomy system so the machine gets closer to the dump truck.' A human reviews safety-margin changes before they ship.
2. Physical operation loop — there will be human involvement in operation from time to time (not necessarily full-time teleoperation), but the machine must operate safely autonomously between those touchpoints. The way to earn the right to reduce human involvement is robust evaluation — physical, simulation, and software validation that installs justified trust in the machine.

The broader governance point from Amazon: AI is already building viruses to hack agent-to-AI systems, so you have to revisit your anti-virus/phishing posture for inter-agent communication, and isolate short-term/long-term agent memory when agents touch critical customer data. Safety-critical AI raises the security bar, not just the correctness bar.

The transferable principle: the higher the cost of failure, the more the human-in-the-loop is structural rather than optional — and earning autonomy is gated on evaluation rigor, not on model capability alone. This is the embodied-stakes version of the trust-but-verify pattern (Walmart source): for safety-critical action, verification is mandatory and human-owned.
