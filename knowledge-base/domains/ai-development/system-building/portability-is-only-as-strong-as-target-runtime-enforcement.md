---
id: INS-260626-9BC5
domain: ai-development
topic: system-building
title: Portability is only as strong as target runtime enforcement
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - agent-portability
  - ide-harnesses
  - permissions
  - runtime-enforcement
sources:
  - type: blog
    title: A Deterministic Control Plane for LLM Coding Agents
    url: 'https://arxiv.org/html/2606.26924'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A canonical agent manifest can preserve declarations across tools, but each
    harness still needs an enforcement audit.
  standard: >-
    Rel(AI)Build compiles one canonical definition to several IDE targets, which
    attacks the real maintenance problem of reauthoring the same expertise in
    multiple dialects. The limitation is that translation fidelity does not
    imply runtime equivalence: the paper notes that some targets enforce tool
    allowlists differently or lack tool-level runtime enforcement.


    The system-building implication is to separate declaration portability from
    enforcement portability. A cross-IDE control plane should compile the same
    policy everywhere, then maintain a per-target enforcement matrix so users
    know which guarantees are actually active.
stance: >-
  Compile-once agent definitions reduce governance drift across IDEs, but they
  do not guarantee equal safety when target runtimes enforce permissions
  differently.
related:
  - PRI-260426-890F
  - INS-260625-ADEA
  - INS-260605-98BD
  - INS-260626-5B28
  - INS-260626-9155
---
Rel(AI)Build compiles one canonical definition to several IDE targets, which attacks the real maintenance problem of reauthoring the same expertise in multiple dialects. The limitation is that translation fidelity does not imply runtime equivalence: the paper notes that some targets enforce tool allowlists differently or lack tool-level runtime enforcement.

The system-building implication is to separate declaration portability from enforcement portability. A cross-IDE control plane should compile the same policy everywhere, then maintain a per-target enforcement matrix so users know which guarantees are actually active.
