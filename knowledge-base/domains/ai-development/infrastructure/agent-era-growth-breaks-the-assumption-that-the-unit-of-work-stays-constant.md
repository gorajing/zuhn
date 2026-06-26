---
id: INS-260625-7996
domain: ai-development
topic: infrastructure
title: Agent-era growth breaks the assumption that the unit of work stays constant
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - scaling
  - infrastructure
  - agents
  - ci-cd
  - compute
sources:
  - type: youtube
    title: >-
      GitHub’s Agent Era: 14x Commits, 200M Developers, Copilot’s Next Act —
      Kyle Daigle
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=LEwlSyR0cXA'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    GitHub's 14x growth broke it in new ways because services assumed the size
    of each push/PR/commit was fixed and only the number of users would grow.
  standard: >-
    Daigle gives a precise diagnosis of why 14x year-over-year commit growth (1B
    commits in 2025, then 275M/week on pace for 14B) produced novel outages
    rather than familiar ones. The core mistake was baked in years ago: 'we
    built everything in a way that assumed the size of the pipe of work was
    going to remain the same. There's just going to be more people coming
    through.' But in the agent era a git push or an average commit or a PR is no
    longer a roughly-constant size — work units got bigger and more numerous
    simultaneously.


    This collapses the two historical scaling levers. Vertical scaling (bigger
    databases) and horizontal scaling (more racked servers) no longer suffice;
    GitHub is now in a 'diagonal' regime constrained by CPU/GPU availability,
    forcing rewrites of 10-15-year-old services whose 'rules have legitimately
    changed.' Concrete pressure points: permissioning sitting in a legacy 'MySQL
    1' database, job queuing technology choices that didn't hold, and a reversal
    of the industry's decade-long move toward small repos — agents push code
    toward bigger monorepos, which have unique performance problems (especially
    with large blobs). Notably, CPUs (for Actions builds: more agents → more
    builds → more CPUs), not just GPUs, became a binding constraint.


    The transferable lesson for system designers: audit every service for the
    implicit assumption that the unit of work is fixed. Under agentic load that
    assumption is the first thing to break, and the fix is material
    re-architecture (step-change improvements over time), not incremental
    tuning.
stance: >-
  Systems built assuming a fixed work-unit size (and merely more users) fail
  under agentic load, where commits, PRs, and pushes grow larger and more
  numerous at the same time.
related:
  - INS-260321-6437
  - INS-260405-07DF
  - INS-260403-D7B1
  - INS-260403-2496
  - INS-260330-4553
  - INS-260330-9C48
  - INS-260330-70BC
  - INS-260421-3E99
  - INS-260330-21CC
  - PRI-260403-E097
---
Daigle gives a precise diagnosis of why 14x year-over-year commit growth (1B commits in 2025, then 275M/week on pace for 14B) produced novel outages rather than familiar ones. The core mistake was baked in years ago: 'we built everything in a way that assumed the size of the pipe of work was going to remain the same. There's just going to be more people coming through.' But in the agent era a git push or an average commit or a PR is no longer a roughly-constant size — work units got bigger and more numerous simultaneously.

This collapses the two historical scaling levers. Vertical scaling (bigger databases) and horizontal scaling (more racked servers) no longer suffice; GitHub is now in a 'diagonal' regime constrained by CPU/GPU availability, forcing rewrites of 10-15-year-old services whose 'rules have legitimately changed.' Concrete pressure points: permissioning sitting in a legacy 'MySQL 1' database, job queuing technology choices that didn't hold, and a reversal of the industry's decade-long move toward small repos — agents push code toward bigger monorepos, which have unique performance problems (especially with large blobs). Notably, CPUs (for Actions builds: more agents → more builds → more CPUs), not just GPUs, became a binding constraint.

The transferable lesson for system designers: audit every service for the implicit assumption that the unit of work is fixed. Under agentic load that assumption is the first thing to break, and the fix is material re-architecture (step-change improvements over time), not incremental tuning.
