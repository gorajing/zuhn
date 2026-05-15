---
id: INS-260514-8807
domain: startups
topic: scaling
title: >-
  Forced migration as the only reliable platform-adoption mechanism — voluntary
  migration stalls
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - platform-migration
  - forcing-functions
  - internal-tools-adoption
  - scaling-platforms
  - removing-alternatives
sources:
  - type: youtube
    title: I was laid off by Atlassian
    author: Vasilios Syrakis
    url: 'https://youtu.be/55pTFVoclvE'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Voluntary migration to internal platforms always stalls. The reliable
    adoption mechanism is to remove the alternative — block the old path, don't
    just evangelize the new one.
  standard: >-
    Atlassian's playbook for migrating 1000+ services from basic platform load
    balancing to the new centralized edge platform: they didn't just announce
    the new platform was better and ask teams to migrate — they removed the
    ability to expose services publicly through the old basic load balancer.
    Once 'public exposure' required going through the new centralized platform
    (with all its templated configuration), services migrated. The principle
    generalizes: internal-platform adoption is structurally adversarial to local
    team incentives. From the perspective of a service-owning dev team, their
    service works today on the old platform, the migration is non-trivial work
    that doesn't ship customer value, and any new platform inevitably has rough
    edges. As long as the old path is open, rational team-level decision is to
    stay. The forcing function is the only thing that aligns local incentive
    with platform incentive. The non-obvious corollary: this means platform
    teams must coordinate with leadership to publicly announce 'old path will be
    removed on date X' early in the rollout — not as a final escalation. Without
    the credible threat of removal from the start, teams won't even start
    budgeting migration work into their sprints. This applies to any internal
    tool: CI system upgrade, observability migration, monorepo consolidation,
    agent-framework adoption — design the deprecation path before you ship the
    new version.
stance: >-
  Platform teams that ship a better internal tool and expect voluntary adoption
  will get partial migration and indefinite dual maintenance — the only reliable
  adoption mechanism for internal platforms at scale is to remove the
  alternative (block the old path), not to evangelize the new path; teams
  optimize for local cost and won't switch as long as the old path still works.
related:
  - INS-260329-3AE5
  - INS-260404-6398
  - INS-260514-8F90
  - INS-260322-5678
  - INS-260403-D2B1
  - INS-260325-EE14
---
Atlassian's playbook for migrating 1000+ services from basic platform load balancing to the new centralized edge platform: they didn't just announce the new platform was better and ask teams to migrate — they removed the ability to expose services publicly through the old basic load balancer. Once 'public exposure' required going through the new centralized platform (with all its templated configuration), services migrated. The principle generalizes: internal-platform adoption is structurally adversarial to local team incentives. From the perspective of a service-owning dev team, their service works today on the old platform, the migration is non-trivial work that doesn't ship customer value, and any new platform inevitably has rough edges. As long as the old path is open, rational team-level decision is to stay. The forcing function is the only thing that aligns local incentive with platform incentive. The non-obvious corollary: this means platform teams must coordinate with leadership to publicly announce 'old path will be removed on date X' early in the rollout — not as a final escalation. Without the credible threat of removal from the start, teams won't even start budgeting migration work into their sprints. This applies to any internal tool: CI system upgrade, observability migration, monorepo consolidation, agent-framework adoption — design the deprecation path before you ship the new version.
