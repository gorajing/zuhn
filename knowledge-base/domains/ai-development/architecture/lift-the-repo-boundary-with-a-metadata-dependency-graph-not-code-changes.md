---
id: INS-260625-EF29
domain: ai-development
topic: architecture
title: 'Lift the repo boundary with a metadata dependency graph, not code changes'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - meta-harness
  - dependency-graph
  - system-design
  - monorepo
  - agent-infrastructure
sources:
  - type: youtube
    title: 'A Genius With Amnesia - Victor Savkin, Nx'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=jVjt-2g8NMY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Polygraph analyzes every repo a user can reach (owned + open source),
    extracts what each produces and consumes, and feeds that graph to a harness
    so an agent reads/writes 'one big codebase.'
  standard: >-
    The architectural move is to separate the dependency model from the code
    itself. Because a GitHub user already has read access to thousands of repos
    — some owned, many open source — you can analyze them on the side and
    extract metadata: what each project in each repo produces, what it consumes
    package-wise, what APIs it produces and consumes, and more. No line of code
    changes in those repos. That metadata is stitched into a unified dependency
    graph and fed to an agent-agnostic meta-harness, creating the illusion of
    one big codebase the agent can read and write anywhere. The harness then
    does the unglamorous coordination work: bring the relevant repos into a
    session, install dependencies, set up an agent per repo, wire them so they
    work together, and provide a GUI to make non-trivial changes without getting
    lost. Crucially, the meta-harness is *not* an agent — it sits around
    whatever agent you install (Claude, Cortex, etc.), making it more capable.
    The design lesson generalizes beyond this product: the leverage is in
    modeling how artifacts relate, and presenting that model to the agent as a
    single navigable surface, rather than trying to make a single agent session
    bigger.
stance: >-
  You can give an agent the illusion of one big codebase by extracting metadata
  from all reachable repos into a unified dependency graph and wrapping the
  agent in a meta-harness — without touching a line of code in those repos.
related:
  - INS-260320-4DE2
  - INS-260320-0D43
  - INS-260404-07C3
  - INS-260410-01BC
  - INS-260412-2B01
  - INS-260605-9523
  - INS-260605-5013
  - INS-260625-89B3
  - INS-260625-5351
  - INS-260625-08E5
---
The architectural move is to separate the dependency model from the code itself. Because a GitHub user already has read access to thousands of repos — some owned, many open source — you can analyze them on the side and extract metadata: what each project in each repo produces, what it consumes package-wise, what APIs it produces and consumes, and more. No line of code changes in those repos. That metadata is stitched into a unified dependency graph and fed to an agent-agnostic meta-harness, creating the illusion of one big codebase the agent can read and write anywhere. The harness then does the unglamorous coordination work: bring the relevant repos into a session, install dependencies, set up an agent per repo, wire them so they work together, and provide a GUI to make non-trivial changes without getting lost. Crucially, the meta-harness is *not* an agent — it sits around whatever agent you install (Claude, Cortex, etc.), making it more capable. The design lesson generalizes beyond this product: the leverage is in modeling how artifacts relate, and presenting that model to the agent as a single navigable surface, rather than trying to make a single agent session bigger.
