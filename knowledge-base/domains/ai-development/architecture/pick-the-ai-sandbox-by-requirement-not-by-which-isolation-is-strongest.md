---
id: INS-260627-05AD
domain: ai-development
topic: architecture
title: 'Pick the AI sandbox by requirement, not by which isolation is strongest'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - sandboxing
  - architecture
  - isolates
  - containers
  - ai-agents
  - decision-tree
sources:
  - type: youtube
    title: >-
      Why, and how you need to sandbox AI-Generated Code? — Harshil Agrawal,
      Cloudflare
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=AHtGAgQ0Q_Q'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If the code needs a file system, processes, or package installs, use a
    container; otherwise use a lightweight isolate — and most agents will use
    both at different steps.
  standard: >-
    There is a spectrum of isolation strength, from eval with zero isolation
    (never for untrusted code), to V8 isolates that start in a quarter
    millisecond but have no file system, no process model, and tight resource
    limits, to containers that give a full Linux environment with real processes
    and networking but take seconds to start and cost more. The mistake is
    asking which is best; the right question is what the use case requires. The
    decision reduces to one test: does the code need a file system, processes,
    or package installs? Yes means container, full stop; no means isolate, which
    is faster, cheaper, and has a tighter isolation model.


    Tool calls, code interpreters, plugins, and data transformation map to
    isolates, where the constraints (short-lived, stateless, no side effects)
    are actually features that match the requirement. Building and deploying
    apps, installing packages, and running dev servers or test suites map to
    containers. In practice you use both: isolates as the fast brain for the
    agent's rapid tool-calling loop, and containers as the workbench when the
    agent needs to clone a repo, install dependencies, and run a build. The
    choice is not which one forever, but which one for this step — and forcing
    container-shaped work into isolates yields a more fragile, worse solution.
stance: >-
  The right sandbox is decided by whether the code needs a file system,
  processes, or package installs — not by which isolation technology is most
  powerful.
related:
  - INS-260410-0855
  - INS-260605-DF82
  - INS-260605-D78B
  - INS-260626-5375
  - INS-260626-5671
  - INS-260605-5EE0
  - INS-260627-3E8A
---
There is a spectrum of isolation strength, from eval with zero isolation (never for untrusted code), to V8 isolates that start in a quarter millisecond but have no file system, no process model, and tight resource limits, to containers that give a full Linux environment with real processes and networking but take seconds to start and cost more. The mistake is asking which is best; the right question is what the use case requires. The decision reduces to one test: does the code need a file system, processes, or package installs? Yes means container, full stop; no means isolate, which is faster, cheaper, and has a tighter isolation model.

Tool calls, code interpreters, plugins, and data transformation map to isolates, where the constraints (short-lived, stateless, no side effects) are actually features that match the requirement. Building and deploying apps, installing packages, and running dev servers or test suites map to containers. In practice you use both: isolates as the fast brain for the agent's rapid tool-calling loop, and containers as the workbench when the agent needs to clone a repo, install dependencies, and run a build. The choice is not which one forever, but which one for this step — and forcing container-shaped work into isolates yields a more fragile, worse solution.
