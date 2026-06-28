---
id: INS-260627-89AF
domain: ai-development
topic: security
title: Verifier and reference artifacts should be isolated from worker agents
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agents
  - security
  - verification
  - sandboxing
sources:
  - type: blog
    title: >-
      An open-source framework for principled, agentic AI-driven
      hardware/software co-design research
    url: 'https://arxiv.org/html/2606.27350'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    CHIA uses containerization and workflow structure to keep agents from
    reading or modifying reference implementations, privileged PDKs, and
    verification infrastructure.
  standard: >-
    The paper explicitly notes that an LLM copying from a reference
    implementation would invalidate an experiment, and that insecure
    environments could leak proprietary PDK information. In the RTL extension
    case study, the LLM implements and debugs RTL while golden references and
    verification infrastructure remain outside its control. The agent-system
    implication is that evaluation integrity depends on access boundaries, not
    just post-hoc scoring.
  deep: >-
    This is especially important for agent benchmarks and coding-agent CI. If
    the agent can inspect hidden tests, alter the verifier, or access privileged
    secrets, pass rates stop measuring capability. Strong agent workflows should
    make cheating structurally hard through containers, separate workers,
    read-only reference artifacts, and verifier execution outside the agent's
    modifiable workspace.
subtopic: agent-isolation
stance: supported
related:
  - INS-260605-5EE0
  - INS-260605-4877
  - INS-260627-F3B6
  - INS-260627-7674
  - INS-260410-F910
  - INS-260605-DF82
  - INS-260605-3AB7
---
The paper explicitly notes that an LLM copying from a reference implementation would invalidate an experiment, and that insecure environments could leak proprietary PDK information. In the RTL extension case study, the LLM implements and debugs RTL while golden references and verification infrastructure remain outside its control. The agent-system implication is that evaluation integrity depends on access boundaries, not just post-hoc scoring.
