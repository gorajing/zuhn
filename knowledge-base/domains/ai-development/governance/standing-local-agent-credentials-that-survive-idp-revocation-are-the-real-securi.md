---
id: INS-260626-A027
domain: ai-development
topic: governance
title: >-
  Standing local agent credentials that survive IDP revocation are the real
  security liability
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - security
  - mcp
  - credentials
  - revocation
  - governance
  - agents
sources:
  - type: youtube
    title: >-
      One Login to Rule Them All: Cross-App Access for MCP — Garrett Galow,
      WorkOS
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=EmhRyw6xeT0'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When a machine is compromised or a user offboards, IDP revocation does not
    kill the long-lived OAuth access and refresh tokens MCP servers hold
    locally, leaving days-to-months of invisible standing access.
  standard: >-
    Galow recounts being hit by the compromised NPM Axios package: IT could cut
    network access and invalidate his Okta sessions across all SSO apps in
    seconds — but his laptop still held MCP server connections and API keys that
    were not issued through the IDP. He had to manually hunt through his machine
    asking 'what am I connected to, what credential is at risk, how do I revoke
    it?' The IDP's central kill switch simply doesn't reach these credentials.


    This generalizes beyond one incident. Under MCP-over-OAuth, revoking
    someone's SSO when they leave the company or get compromised leaves their
    access and refresh tokens valid, granting standing access for days, weeks,
    or even months — with zero visibility for IT. Most companies don't run SCIM
    to fully propagate revocation. The actionable lesson: when auditing agent
    deployments, treat locally-held, IDP-independent credentials as the primary
    attack surface. The fix is not better consent UX but making access derive
    from — and expire with — the live IDP session, so revoking the session
    revokes the agent's reach.
stance: >-
  The durable security risk in agent tooling is long-lived local tokens and API
  keys that outlive IDP revocation, not the visible consent friction users
  complain about.
related:
  - INS-260330-1A23
  - INS-260627-30A2
  - INS-260626-C51E
  - INS-260627-2FFE
  - INS-260605-ACC9
  - INS-260410-1430
---
Galow recounts being hit by the compromised NPM Axios package: IT could cut network access and invalidate his Okta sessions across all SSO apps in seconds — but his laptop still held MCP server connections and API keys that were not issued through the IDP. He had to manually hunt through his machine asking 'what am I connected to, what credential is at risk, how do I revoke it?' The IDP's central kill switch simply doesn't reach these credentials.

This generalizes beyond one incident. Under MCP-over-OAuth, revoking someone's SSO when they leave the company or get compromised leaves their access and refresh tokens valid, granting standing access for days, weeks, or even months — with zero visibility for IT. Most companies don't run SCIM to fully propagate revocation. The actionable lesson: when auditing agent deployments, treat locally-held, IDP-independent credentials as the primary attack surface. The fix is not better consent UX but making access derive from — and expire with — the live IDP session, so revoking the session revokes the agent's reach.
