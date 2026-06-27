---
id: INS-260626-AD63
domain: ai-development
topic: governance
title: 'Tie agent identity to the agent lifecycle, not a shared service account'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-identity
  - security
  - permissions
  - spiffe
  - least-privilege
sources:
  - type: youtube
    title: 'Build connected AI: Orchestrate tools and agents with registries and ADK'
    author: Google Cloud Tech
    url: 'https://www.youtube.com/watch?v=C5zYVlBsHLQ'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Per-agent identities bound to the deploy/delete lifecycle prevent rogue
    residual permissions that a shared service account accumulates.
  standard: >-
    The default pattern of one service account shared by every agent in a
    project makes granular, least-privilege permissions nearly impossible — you
    can't tell which agent needs what, and deleting an agent leaves its access
    behind. The fix is a SPIFFE-based per-agent identity that is created on
    deploy, assigned its own permissions and secrets, and fully revoked on
    delete, so no orphaned permissions linger.


    The deeper principle is that identity should be coupled to lifecycle: an
    agent's right to act exists only as long as the agent does. This also
    enables a credentials vault scoped per agent (API keys, OAuth 2.0, including
    two- and three-legged flows for acting on behalf of an end user), which lets
    builders focus on behavior instead of secret management. When designing any
    multi-agent system, make identity a first-class, ephemeral resource rather
    than a static account bolted on later.
stance: >-
  Each agent should get a unique identity created and destroyed with it, rather
  than sharing a project-wide service account.
related:
  - INS-260409-8408
  - INS-260423-8504
  - INS-260605-EF3C
  - INS-260627-30A2
  - INS-260410-761E
  - INS-260605-BC6F
  - INS-260626-2133
---
The default pattern of one service account shared by every agent in a project makes granular, least-privilege permissions nearly impossible — you can't tell which agent needs what, and deleting an agent leaves its access behind. The fix is a SPIFFE-based per-agent identity that is created on deploy, assigned its own permissions and secrets, and fully revoked on delete, so no orphaned permissions linger.

The deeper principle is that identity should be coupled to lifecycle: an agent's right to act exists only as long as the agent does. This also enables a credentials vault scoped per agent (API keys, OAuth 2.0, including two- and three-legged flows for acting on behalf of an end user), which lets builders focus on behavior instead of secret management. When designing any multi-agent system, make identity a first-class, ephemeral resource rather than a static account bolted on later.
