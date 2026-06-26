---
id: INS-260626-0D50
domain: ai-development
topic: architecture
title: >-
  MCP's per-server OAuth consent is architecturally mismatched with enterprise
  SSO
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - oauth
  - sso
  - enterprise
  - identity
  - authentication
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
    MCP inherits OAuth's assumption that apps don't trust each other, which
    directly contradicts the single-sign-on trust fabric enterprises already
    run.
  standard: >-
    OAuth was designed for a world where two services share no prior trust, so
    each connection requires the user to explicitly consent that 'App A may
    access my App B account.' MCP adopts this wholesale, producing 'consent
    screens on top of consent screens' that users click through without reading
    and must sometimes repeat for reasons they don't understand. Multiplied
    across a team logging into a dozen MCP servers each, this becomes dozens of
    people burning time managing trust decisions a machine should make.


    The deeper point is that enterprises already solved cross-app trust with
    single sign-on: an Okta or Entra IDP that every app trusts and that knows
    who you are. MCP's per-server model assumes none of these apps know anything
    about each other or that you're the same person — an assumption that is
    simply false inside a company. Diagnosing this as a structural mismatch (the
    wrong trust model) rather than a friction problem (too many clicks) is what
    points toward the correct fix: insert the IDP as the trust broker instead of
    forcing pairwise app consent.
stance: >-
  MCP's OAuth-per-server consent model is a structural mismatch with how
  enterprises already manage identity, not merely a UX annoyance to be
  tolerated.
related:
  - INS-260330-0145
  - INS-260404-F0C3
  - INS-260625-E04B
  - INS-260626-93C7
  - INS-260322-760A
  - INS-260626-AE0C
---
OAuth was designed for a world where two services share no prior trust, so each connection requires the user to explicitly consent that 'App A may access my App B account.' MCP adopts this wholesale, producing 'consent screens on top of consent screens' that users click through without reading and must sometimes repeat for reasons they don't understand. Multiplied across a team logging into a dozen MCP servers each, this becomes dozens of people burning time managing trust decisions a machine should make.

The deeper point is that enterprises already solved cross-app trust with single sign-on: an Okta or Entra IDP that every app trusts and that knows who you are. MCP's per-server model assumes none of these apps know anything about each other or that you're the same person — an assumption that is simply false inside a company. Diagnosing this as a structural mismatch (the wrong trust model) rather than a friction problem (too many clicks) is what points toward the correct fix: insert the IDP as the trust broker instead of forcing pairwise app consent.
