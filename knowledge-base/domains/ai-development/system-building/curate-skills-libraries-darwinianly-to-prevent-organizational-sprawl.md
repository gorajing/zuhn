---
id: INS-260605-4592
domain: ai-development
topic: system-building
title: Curate skills libraries Darwinianly to prevent organizational sprawl
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - skills
  - agents
  - knowledge-management
  - scaling
sources:
  - type: youtube
    title: >-
      How Google DeepMind Runs Agents at Scale — KP Sawhney & Ian Ballantyne,
      Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=7gujZrJ9L5I'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    In a large org, skills sprawl out of control; only the best should survive,
    by deliberate Darwinian pruning.
  standard: >-
    DeepMind built a huge internal library of skills contributed by domain
    experts, which lets any engineer (and their agent) get that expertise 'for
    free.' But at Google's scale, KP names the failure mode explicitly: skills
    'sprawl out of control,' and a major area of focus is improving them so only
    the best survive — 'almost Darwinian.'


    The lesson is that a skills library is not a write-only repository. More
    skills isn't strictly better, because a bloated library dilutes retrieval,
    increases context cost, and surfaces stale or redundant guidance. Treat
    skills like a curated product surface with active deprecation, quality bars,
    and usage-driven selection — not an append-only dumping ground. The
    expert-contribution model is the upside (agent inherits specialist knowledge
    cheaply); uncontrolled accumulation is the corresponding tax.
stance: >-
  Skills libraries degrade an agent's performance as they grow unless an active
  selection process kills off all but the best.
related:
  - PRI-260323-50FE
  - PRI-260324-D701
  - PRI-260406-1796
  - PRI-260328-5B61
  - INS-260410-49C5
---
DeepMind built a huge internal library of skills contributed by domain experts, which lets any engineer (and their agent) get that expertise 'for free.' But at Google's scale, KP names the failure mode explicitly: skills 'sprawl out of control,' and a major area of focus is improving them so only the best survive — 'almost Darwinian.'

The lesson is that a skills library is not a write-only repository. More skills isn't strictly better, because a bloated library dilutes retrieval, increases context cost, and surfaces stale or redundant guidance. Treat skills like a curated product surface with active deprecation, quality bars, and usage-driven selection — not an append-only dumping ground. The expert-contribution model is the upside (agent inherits specialist knowledge cheaply); uncontrolled accumulation is the corresponding tax.
