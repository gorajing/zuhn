---
id: INS-260625-5CE4
domain: ai-development
topic: architecture
title: >-
  Origin isolation and third-party script execution are in irreducible tension
  in a single iframe
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - content-security-policy
  - csp
  - sandboxing
  - iframe
  - web-security
  - same-origin
  - mcp
sources:
  - type: youtube
    title: 'Why MCP and ChatGPT Apps Use Double Iframes — Frédéric Barthelet, Alpic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=c-2eEv2ou7Y'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    srcdoc shares the host origin (scripts blocked by nonce-CSP, or if CSP is
    relaxed the app can read host localStorage/cookies); a sandboxed null-origin
    iframe loses storage APIs; adding allow-same-origin re-grants full host
    access — so one iframe can never both isolate and execute.
  standard: >-
    The double iframe exists because every single-iframe option fails a security
    or functionality test. Loading content with the srcdoc attribute makes the
    iframe share the parent's origin and therefore the parent's CSP. ChatGPT's
    script-src directive requires every script to carry a per-request nonce, so
    a third-party app's scripts simply won't run. If the host relaxes CSP to let
    arbitrary scripts execute, the shared origin now lets the app read the
    parent's localStorage and cookies and exfiltrate them — unacceptable for the
    host.


    The sandbox attribute renders the iframe in a 'null' opaque origin, breaking
    the script-access problem — but it also breaks every origin-indexed
    capability: no localStorage, no IndexedDB, no cookies. The only way to
    restore an origin is allow-same-origin, which hands back the exact same
    origin as the parent and returns you to square one, where the app can escape
    the sandbox and reach the parent DOM, storage, and cookies.


    The lesson generalizes beyond MCP: when embedding code you don't control,
    origin isolation (security) and full script execution (functionality) cannot
    be satisfied by the same browsing context. Resolving the tension requires a
    second, separately-originated frame — structure, not a configuration flag,
    is what makes the unsafe state unrepresentable.
stance: >-
  No single-iframe configuration can both run an app's own JavaScript and keep
  it isolated from the host's origin — every shortcut either blocks the app's
  scripts or lets it steal the host's credentials.
related:
  - INS-260625-07CB
  - INS-260625-4559
  - INS-260605-1BBF
  - INS-260625-3FBF
  - INS-260625-5BF4
---
The double iframe exists because every single-iframe option fails a security or functionality test. Loading content with the srcdoc attribute makes the iframe share the parent's origin and therefore the parent's CSP. ChatGPT's script-src directive requires every script to carry a per-request nonce, so a third-party app's scripts simply won't run. If the host relaxes CSP to let arbitrary scripts execute, the shared origin now lets the app read the parent's localStorage and cookies and exfiltrate them — unacceptable for the host.

The sandbox attribute renders the iframe in a 'null' opaque origin, breaking the script-access problem — but it also breaks every origin-indexed capability: no localStorage, no IndexedDB, no cookies. The only way to restore an origin is allow-same-origin, which hands back the exact same origin as the parent and returns you to square one, where the app can escape the sandbox and reach the parent DOM, storage, and cookies.

The lesson generalizes beyond MCP: when embedding code you don't control, origin isolation (security) and full script execution (functionality) cannot be satisfied by the same browsing context. Resolving the tension requires a second, separately-originated frame — structure, not a configuration flag, is what makes the unsafe state unrepresentable.
