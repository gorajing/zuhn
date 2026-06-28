---
id: INS-260627-7674
domain: ai-development
topic: infrastructure
title: >-
  A compiler-built signature manifest makes in-place workflow versioning
  tractable
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - versioning
  - migrations
  - compiler
  - long-running-agents
  - event-sourcing
sources:
  - type: youtube
    title: >-
      Building durable Agents with Workflow DevKit & AI SDK - Peter Wielander,
      Vercel
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=kmV-qg4uoNI'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because the framework is a compiler plugin, it emits a manifest of step
    signatures per deployment, letting it check whether a running workflow can
    be upgraded in place or must be cancelled and rerun.
  standard: >-
    Versioning is the hard part of durable execution and the usual pain point of
    event-sourced systems: when a workflow has been running for months and you
    ship new code, can the in-flight run adopt it? The traditional answer forces
    you to assume your code might run against any historical event log,
    accumulating version-branching cruft. This talk's approach pins each run to
    the deployment (version) it started on — new deploys are isolated, and
    existing runs continue to completion on their original code — so you never
    have to defensively branch.


    What makes in-place upgrades possible is that the framework is a compiler
    plugin, so it can statically extract the input/output signatures of every
    step and the workflow function and upload them to a manifest per version. To
    upgrade a running workflow, it compares the new version's step signatures
    against the cached events of the live run; if they're compatible, it
    migrates in place (resuming from the current point), and if not, it offers
    to cancel and rerun on the same inputs. The roadmap extends this to bulk
    migration: select N run IDs and upgrade them all, with a compatibility check
    per run.


    The transferable insight is that static analysis at the build step is what
    tames runtime state evolution. Capturing structural signatures at compile
    time turns 'will this migration corrupt my running state?' from a hope into
    a checkable property — the same move as the determinism enforcement, applied
    to schema evolution instead of side effects.
stance: >-
  Versioning and migrating long-running agents in place becomes safe only when a
  compiler captures every step's input/output signature into a per-deployment
  manifest used to check migration compatibility.
related:
  - INS-260329-6A60
  - INS-260627-90A8
  - INS-260330-AB62
  - INS-260627-89AF
  - INS-260330-A370
---
Versioning is the hard part of durable execution and the usual pain point of event-sourced systems: when a workflow has been running for months and you ship new code, can the in-flight run adopt it? The traditional answer forces you to assume your code might run against any historical event log, accumulating version-branching cruft. This talk's approach pins each run to the deployment (version) it started on — new deploys are isolated, and existing runs continue to completion on their original code — so you never have to defensively branch.

What makes in-place upgrades possible is that the framework is a compiler plugin, so it can statically extract the input/output signatures of every step and the workflow function and upload them to a manifest per version. To upgrade a running workflow, it compares the new version's step signatures against the cached events of the live run; if they're compatible, it migrates in place (resuming from the current point), and if not, it offers to cancel and rerun on the same inputs. The roadmap extends this to bulk migration: select N run IDs and upgrade them all, with a compatibility check per run.

The transferable insight is that static analysis at the build step is what tames runtime state evolution. Capturing structural signatures at compile time turns 'will this migration corrupt my running state?' from a hope into a checkable property — the same move as the determinism enforcement, applied to schema evolution instead of side effects.
