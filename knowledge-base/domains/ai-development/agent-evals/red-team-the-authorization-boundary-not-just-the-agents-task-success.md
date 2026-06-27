---
id: INS-260627-66D8
domain: ai-development
topic: agent-evals
title: 'Red-team the authorization boundary, not just the agent''s task success'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - red-teaming
  - security
  - authorization
  - failure-modes
sources:
  - type: blog
    title: >-
      A hardware-safety-gated system for LLM-written native ARTIQ control code
      on a trapped-ion platform
    url: 'https://arxiv.org/html/2606.27231'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The paper evaluates the safety-filter with 1,932 adversarial scripts and
    about 250 harness-level tests, not only with successful lab calibrations.
  standard: >-
    The authors distinguish the agent's scientific task performance from the
    authorization layer's security boundary. They report normal calibration
    success, then deliberately attack the filter and classify passes into
    deliberate divisions of responsibility versus residual gaps.


    This is a durable eval pattern: if an agent can act in the world, benchmark
    the enforcement layer under adversarial inputs and publish the boundary of
    what it does and does not protect. Success-only demos are insufficient
    because they do not show whether the system fails closed when the agent,
    input stream, or generated code becomes hostile.
stance: >-
  Agent evaluations for side-effecting systems should include adversarial
  boundary characterization alongside normal task-completion metrics.
related:
  - INS-260413-EB61
  - INS-260627-C36B
  - INS-260627-00E9
  - INS-260403-EA93
  - INS-260627-B1A4
---
The authors distinguish the agent's scientific task performance from the authorization layer's security boundary. They report normal calibration success, then deliberately attack the filter and classify passes into deliberate divisions of responsibility versus residual gaps.

This is a durable eval pattern: if an agent can act in the world, benchmark the enforcement layer under adversarial inputs and publish the boundary of what it does and does not protect. Success-only demos are insufficient because they do not show whether the system fails closed when the agent, input stream, or generated code becomes hostile.
