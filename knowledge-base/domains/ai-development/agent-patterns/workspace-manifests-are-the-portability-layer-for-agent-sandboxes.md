---
id: INS-260605-4877
domain: ai-development
topic: agent-patterns
title: Workspace manifests are the portability layer for agent sandboxes
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-harness
  - sandboxing
  - workspace-manifest
  - portability
  - long-running-agents
sources:
  - type: blog
    title: The next evolution of the Agents SDK
    url: 'https://openai.com/index/the-next-evolution-of-the-agents-sdk/'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Define the agent's workspace as a manifest, not as an implicit container
    setup.
  standard: >-
    OpenAI's updated Agents SDK introduces a Manifest abstraction for describing
    an agent workspace: local files, output directories, and external storage
    mounts. The important design move is not the specific SDK API; it is making
    the workspace a portable contract the model can rely on.


    For Zuhn-style local-first harnesses, this suggests a concrete pattern:
    every serious agent run should have a small manifest naming the evidence
    roots, writable outputs, scratch area, forbidden paths, and expected
    artifacts. That turns an agent task from 'look around this repo' into
    'operate inside this declared work surface,' which is easier to reproduce,
    migrate, audit, and resume.
stance: >-
  Agent sandboxes should be described by explicit workspace manifests because
  predictable mounts, inputs, and output locations make agent behavior portable
  across local and production compute.
related:
  - INS-260410-F910
  - INS-260605-5EE0
  - INS-260627-89AF
  - INS-260626-4393
  - INS-260627-6C9A
---
OpenAI's updated Agents SDK introduces a Manifest abstraction for describing an agent workspace: local files, output directories, and external storage mounts. The important design move is not the specific SDK API; it is making the workspace a portable contract the model can rely on.

For Zuhn-style local-first harnesses, this suggests a concrete pattern: every serious agent run should have a small manifest naming the evidence roots, writable outputs, scratch area, forbidden paths, and expected artifacts. That turns an agent task from 'look around this repo' into 'operate inside this declared work surface,' which is easier to reproduce, migrate, audit, and resume.
