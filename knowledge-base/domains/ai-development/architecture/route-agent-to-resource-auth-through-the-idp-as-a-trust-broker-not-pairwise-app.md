---
id: INS-260626-93C7
domain: ai-development
topic: architecture
title: >-
  Route agent-to-resource auth through the IDP as a trust broker, not pairwise
  app consent
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - id-jag
  - xaa
  - identity
  - token-exchange
  - architecture
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
    Cross-App Access uses the ID-JAG flow so the IDP, which both the MCP client
    and server already trust, mints a cross-app token the client exchanges for a
    normal access token — removing manual consent entirely.
  standard: >-
    The XAA architecture has four parties: the client (e.g. Claude Code), the
    IDP (Okta), the resource authorization server (Figma's auth server), and the
    resource server (Figma's API). The user does one SSO login to the IDP,
    receiving an ID and refresh token. The client then asks the IDP for an
    ID-JAG token (Identity JWT Authorization Grant) scoped to a target audience
    like mcp.figma.com. Because the IDP knows both apps and can verify the user
    belongs to both and that this client is policy-allowed to request access to
    that resource, it issues the cross-app token. The client hands it to Figma's
    auth server, which validates it against the IDP and returns a standard OAuth
    access token. Step four is then ordinary MCP traffic — no new credential
    type at the resource layer.


    The architectural move worth internalizing is decoupling: instead of N×M
    pairwise trust relationships requiring human consent, every app maintains
    exactly one trust relationship (with the IDP), and the IDP brokers all
    cross-app grants. The two middle steps are invisible to the user. This is a
    reusable pattern for any agent-to-resource access problem: when many clients
    need to reach many resources, centralize trust in a broker both sides
    already rely on rather than wiring direct consent between every pair.
stance: >-
  Agent-to-resource access should flow through the identity provider issuing
  short-lived cross-app tokens, because both apps already trust the IDP — making
  direct app-to-app consent unnecessary.
related:
  - INS-260410-358E
  - INS-260501-F0E5
  - INS-260626-0D50
  - INS-260626-C51E
  - INS-260423-5F2F
  - INS-260626-E5E5
---
The XAA architecture has four parties: the client (e.g. Claude Code), the IDP (Okta), the resource authorization server (Figma's auth server), and the resource server (Figma's API). The user does one SSO login to the IDP, receiving an ID and refresh token. The client then asks the IDP for an ID-JAG token (Identity JWT Authorization Grant) scoped to a target audience like mcp.figma.com. Because the IDP knows both apps and can verify the user belongs to both and that this client is policy-allowed to request access to that resource, it issues the cross-app token. The client hands it to Figma's auth server, which validates it against the IDP and returns a standard OAuth access token. Step four is then ordinary MCP traffic — no new credential type at the resource layer.

The architectural move worth internalizing is decoupling: instead of N×M pairwise trust relationships requiring human consent, every app maintains exactly one trust relationship (with the IDP), and the IDP brokers all cross-app grants. The two middle steps are invisible to the user. This is a reusable pattern for any agent-to-resource access problem: when many clients need to reach many resources, centralize trust in a broker both sides already rely on rather than wiring direct consent between every pair.
