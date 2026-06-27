---
id: INS-260605-9276
domain: ai-development
topic: agent-patterns
title: Skills are file-based context that turns zero-shot agent tasks into few-shot
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - skills
  - few-shot
  - context-engineering
  - file-based-context
  - maintainability
sources:
  - type: youtube
    title: >-
      Your Coding Agent Should Do AI System Engineering — Ben Burtenshaw,
      Hugging Face
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JomVvNDjGb8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Provide agents skills as plain version-controlled files containing examples
    of how to do a task, and let the project maintainers own those skills, so
    the agent goes from zero-shot to robust few-shot.
  standard: >-
    Burtenshaw deliberately keeps the concept of skills simple: 'really they're
    just kind of file-based context.' Because they're files, you get all the
    affordances of files — open and close them, version them, source-control
    them — and agents can do the same, opening a skill only when they need it.
    For a hard task like writing CUDA kernels, a skill supplies worked examples
    (here, benchmarking scripts and references), which 'takes a task from being
    zero-shot to being few-shot' — a familiar ML framing of just giving the
    model examples.


    The maintenance insight is organizational: Hugging Face integrates skills
    directly inside each project so the project's own maintainers keep them
    robust and current, rather than relying on detached 'YOLO skills.'
    Experimental skills live in a separate Hugging Face skills repo. This
    division — maintained, in-project skills vs. experimental community skills —
    keeps the high-trust path well-curated while still allowing exploration.


    The practical implication: when you want agents to perform a specialized
    task reliably, ship version-controlled example files alongside the project
    and assign ownership to whoever maintains the underlying capability, so the
    few-shot context stays correct as the project evolves.
stance: >-
  Treating skills as simple version-controlled files of examples converts a
  zero-shot agent task into a few-shot one and is best maintained by the
  project's own maintainers.
related:
  - INS-260323-4B4D
  - INS-260402-2342
  - INS-260405-2BB0
  - INS-260410-2C51
  - INS-260410-0855
  - INS-260410-53C2
  - INS-260423-74BF
  - INS-260501-C59A
  - INS-260501-8186
  - INS-260501-9503
---
Burtenshaw deliberately keeps the concept of skills simple: 'really they're just kind of file-based context.' Because they're files, you get all the affordances of files — open and close them, version them, source-control them — and agents can do the same, opening a skill only when they need it. For a hard task like writing CUDA kernels, a skill supplies worked examples (here, benchmarking scripts and references), which 'takes a task from being zero-shot to being few-shot' — a familiar ML framing of just giving the model examples.

The maintenance insight is organizational: Hugging Face integrates skills directly inside each project so the project's own maintainers keep them robust and current, rather than relying on detached 'YOLO skills.' Experimental skills live in a separate Hugging Face skills repo. This division — maintained, in-project skills vs. experimental community skills — keeps the high-trust path well-curated while still allowing exploration.

The practical implication: when you want agents to perform a specialized task reliably, ship version-controlled example files alongside the project and assign ownership to whoever maintains the underlying capability, so the few-shot context stays correct as the project evolves.
