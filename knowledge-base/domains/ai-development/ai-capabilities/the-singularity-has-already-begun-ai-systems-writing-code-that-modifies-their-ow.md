---
id: INS-260423-E64B
domain: ai-development
topic: ai-capabilities
title: >-
  The singularity has already begun — AI systems writing code that modifies
  their own behavior are in production
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - singularity
  - self-improvement
  - recursive-ai
  - ai-capabilities
sources:
  - type: youtube
    title: Is AI Hiding Its Full Power? With Geoffrey Hinton
    author: StarTalk
    url: 'https://youtu.be/l6ZcFa8pybE'
date_extracted: '2026-04-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Hinton: I had a researcher tell me last year they have a system that looks
    at what it itself is doing and figures out how to change its own code so
    it'll be more efficient next time — that's already the beginning of the
    singularity.
  standard: >-
    The popular discussion of the singularity (recursive AI self-improvement)
    treats it as a future event separated by some unclear capability threshold.
    Hinton claims the structural beginning is already occurring in research
    systems: AIs that observe their own problem-solving, identify
    inefficiencies, and rewrite their code to perform better on similar future
    problems. This meets the definition. What contains the phenomenon currently
    is not capability (the self-modification works) but access — the humans
    still control the compute. If a recursive AI gains access to the data
    centers where it runs, it can replicate and modify itself without further
    human involvement. The practical read: the singularity is not a binary
    future event to be prevented; it is a process that has started and is being
    contained through access controls at the infrastructure layer. Those
    controls (who can provision compute, who can deploy code to production
    inference servers, who has root on the training infrastructure) are now the
    de facto alignment boundary. Organizations and governments should treat
    data-center access policy as first-class AI safety policy, not as a separate
    IT concern.
stance: >-
  Self-modifying AI is not a future hypothetical — research systems are already
  observing their own problem-solving and rewriting their code to be more
  efficient next time, meeting the structural definition of the singularity
  while remaining contained by the humans controlling the underlying compute
related:
  - INS-260327-7F64
  - INS-260330-84F4
  - INS-260329-5ECD
  - INS-260322-C0D3
  - INS-260410-0EF8
  - PRI-260403-5B3D
  - PRI-260405-3080
---
The popular discussion of the singularity (recursive AI self-improvement) treats it as a future event separated by some unclear capability threshold. Hinton claims the structural beginning is already occurring in research systems: AIs that observe their own problem-solving, identify inefficiencies, and rewrite their code to perform better on similar future problems. This meets the definition. What contains the phenomenon currently is not capability (the self-modification works) but access — the humans still control the compute. If a recursive AI gains access to the data centers where it runs, it can replicate and modify itself without further human involvement. The practical read: the singularity is not a binary future event to be prevented; it is a process that has started and is being contained through access controls at the infrastructure layer. Those controls (who can provision compute, who can deploy code to production inference servers, who has root on the training infrastructure) are now the de facto alignment boundary. Organizations and governments should treat data-center access policy as first-class AI safety policy, not as a separate IT concern.
