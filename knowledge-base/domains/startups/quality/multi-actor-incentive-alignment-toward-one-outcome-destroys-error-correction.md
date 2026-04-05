---
id: INS-260404-67C5
domain: startups
topic: quality
title: Multi-actor incentive alignment toward one outcome destroys error correction
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - incentive-design
  - quality-control
  - systems-thinking
  - adversarial-thinking
sources:
  - type: blog
    title: The Real Reason to End the Death Penalty
    url: 'https://paulgraham.com/real.html'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Multiple checkpoints (police, prosecutors, defense, jury) all biased toward
    conviction means zero effective error correction.
  standard: >-
    The criminal justice system has multiple supposed safeguards —
    investigation, prosecution, defense, expert testimony, and jury deliberation
    — yet wrongful convictions persist because every actor shares the same
    directional incentive. Police want to close cases, prosecutors want
    conviction rates, defense attorneys lack resources, and juries want
    resolution.


    This is directly applicable to any quality system: code review, product
    approval, hiring pipelines, investment committees. If every checkpoint
    shares the same bias (ship faster, hire the candidate, close the deal),
    adding more checkpoints doesn't improve quality — it just adds theater.
    Effective error correction requires at least one actor with genuinely
    adversarial incentives, properly resourced to act on them. The lesson: audit
    your quality gates for incentive diversity, not just quantity.
stance: >-
  When every participant in a process is incentivized toward the same outcome,
  the system loses its ability to catch errors, regardless of how many
  checkpoints exist.
related:
  - INS-260322-888D
  - INS-260404-DA41
  - INS-260330-14CA
  - INS-260402-8A7A
  - INS-260325-0409
  - INS-260329-5A24
evidence:
  - id: INS-260322-888D
    type: CHALLENGES
    classified_at: '2026-04-05'
  - id: INS-260325-0409
    type: CHALLENGES
    classified_at: '2026-04-05'
  - id: INS-260402-8A7A
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
---
The criminal justice system has multiple supposed safeguards — investigation, prosecution, defense, expert testimony, and jury deliberation — yet wrongful convictions persist because every actor shares the same directional incentive. Police want to close cases, prosecutors want conviction rates, defense attorneys lack resources, and juries want resolution.

This is directly applicable to any quality system: code review, product approval, hiring pipelines, investment committees. If every checkpoint shares the same bias (ship faster, hire the candidate, close the deal), adding more checkpoints doesn't improve quality — it just adds theater. Effective error correction requires at least one actor with genuinely adversarial incentives, properly resourced to act on them. The lesson: audit your quality gates for incentive diversity, not just quantity.
