---
id: INS-260605-46B2
domain: ai-development
topic: claude-code
title: 'Write product skills as opinionated workflows, not neutral documentation dumps'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - skills
  - opinionated-design
  - workflow-design
  - skill-authoring
sources:
  - type: youtube
    title: >-
      Combine Skills and MCP to Close the Context Gap — Pedro Rodrigues,
      Supabase
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JT3OzDKrucU'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    You know your product best, so encode your prescribed workflow into the
    skill instead of leaving the agent to discover it.
  standard: >-
    Pedro's third principle is to be opinionated. The vendor knows the product
    and how users actually use it, so the skill should guide the agent toward
    the workflows the vendor considers most effective rather than presenting
    neutral documentation. Supabase's example: for schema management, run direct
    DDL freely against dev/staging, then run their advisor to surface
    security/performance issues and fix them, and only THEN generate a migration
    file — which prevents the agent from spamming a migration file on every
    schema change.


    This pairs with two supporting principles. First, don't duplicate
    documentation — treat the skill like documentation for yourself and point
    the agent to your single source of truth (and be persistent, even stubborn,
    in forcing it to actually go fetch fresh docs rather than trust training
    data). Second, start minimal and iterate, expanding and versioning over
    time. The opinion is the product; a skill that merely restates generic docs
    adds little, while one that bakes in the vendor's hard-won workflow
    preferences is where the leverage is.
stance: >-
  A product skill should prescribe the single best workflow the vendor knows
  rather than neutrally enumerate options.
related:
  - INS-260327-D020
  - INS-260501-B933
  - INS-260501-9503
  - PRI-260501-1E66
  - INS-260605-E642
  - INS-260605-205E
  - INS-260410-F910
---
Pedro's third principle is to be opinionated. The vendor knows the product and how users actually use it, so the skill should guide the agent toward the workflows the vendor considers most effective rather than presenting neutral documentation. Supabase's example: for schema management, run direct DDL freely against dev/staging, then run their advisor to surface security/performance issues and fix them, and only THEN generate a migration file — which prevents the agent from spamming a migration file on every schema change.

This pairs with two supporting principles. First, don't duplicate documentation — treat the skill like documentation for yourself and point the agent to your single source of truth (and be persistent, even stubborn, in forcing it to actually go fetch fresh docs rather than trust training data). Second, start minimal and iterate, expanding and versioning over time. The opinion is the product; a skill that merely restates generic docs adds little, while one that bakes in the vendor's hard-won workflow preferences is where the leverage is.
