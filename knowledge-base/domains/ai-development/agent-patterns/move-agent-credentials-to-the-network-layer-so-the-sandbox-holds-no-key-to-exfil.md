---
id: INS-260605-BC6F
domain: ai-development
topic: agent-patterns
title: >-
  Move agent credentials to the network layer so the sandbox holds no key to
  exfiltrate
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-security
  - sandboxing
  - authentication
  - credentials
  - network-identity
sources:
  - type: youtube
    title: 'What if the network was the sandbox? — Remy Guercio, Tailscale'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BM2JX9hqsVQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If the agent's permissions ride on the network connection rather than an API
    key inside the box, there is no secret for a long-running model to leak,
    misuse, or route around.
  standard: >-
    The conventional sandbox debate (agent in the box vs. outside) misses that
    permissions are still handled inside the box — an API key or an OAuth
    session lives where the agent runs, and models run in long loops are 'very
    clever at doing things with keys they maybe shouldn't.' The reframe is to
    push authN/authZ down to the network layer: with WireGuard-based identity,
    every connection carries the user, groups, and tags of whoever (or whatever)
    is connecting, so the gateway grants model access without ever placing a key
    in the sandbox. The runner connecting from the sandbox 'has no key to
    accidentally exfil or share' — it is literally a dash standing in for the
    missing key. This makes invalid states unrepresentable: you cannot leak a
    credential that was never provisioned to the execution environment.
stance: >-
  Authenticating agents at the network layer instead of inside the sandbox
  eliminates the credential-exfiltration attack surface entirely.
related:
  - INS-260410-382D
  - INS-260626-091B
  - INS-260625-EC7C
  - INS-260605-41AE
  - INS-260628-1610
  - INS-260605-3AB7
  - INS-260605-A2B7
  - INS-260605-2E60
  - INS-260605-8AFF
  - INS-260626-AD63
---
The conventional sandbox debate (agent in the box vs. outside) misses that permissions are still handled inside the box — an API key or an OAuth session lives where the agent runs, and models run in long loops are 'very clever at doing things with keys they maybe shouldn't.' The reframe is to push authN/authZ down to the network layer: with WireGuard-based identity, every connection carries the user, groups, and tags of whoever (or whatever) is connecting, so the gateway grants model access without ever placing a key in the sandbox. The runner connecting from the sandbox 'has no key to accidentally exfil or share' — it is literally a dash standing in for the missing key. This makes invalid states unrepresentable: you cannot leak a credential that was never provisioned to the execution environment.
