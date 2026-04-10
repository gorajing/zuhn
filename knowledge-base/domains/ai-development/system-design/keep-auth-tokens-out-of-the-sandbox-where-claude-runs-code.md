---
id: INS-260410-1430
domain: ai-development
topic: system-design
title: Keep auth tokens out of the sandbox where Claude runs code
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - security
  - prompt-injection
  - credentials
  - sandbox-isolation
sources:
  - type: blog
    title: 'Scaling Managed Agents: Decoupling the brain from the hands'
    url: 'https://www.anthropic.com/engineering/managed-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Structurally isolate credentials from Claude's execution environment rather
    than relying on narrow token scopes, because scope-based mitigations depend
    on assumptions about model capability that get weaker over time.
  standard: >-
    In the coupled design, untrusted code Claude generated ran in the same
    container as credentials, so a successful prompt injection only needed to
    convince Claude to read its own environment. Once an attacker has those
    tokens, they can spawn fresh unrestricted sessions and delegate work to
    them. Narrow scoping is an obvious mitigation, but it encodes an assumption
    about what Claude can't do with a limited token — and Claude is getting
    increasingly smart.


    The structural fix makes credentials unreachable from the sandbox entirely.
    Anthropic uses two patterns. For Git, each repo's access token is used once
    during sandbox initialization to clone the repo and wire it into the local
    git remote; push and pull then work from inside the sandbox without the
    agent ever handling the token. For custom tools, MCP tools are called via a
    dedicated proxy that holds OAuth tokens in a vault; Claude passes a
    session-scoped token to the proxy, the proxy fetches the real credentials
    and makes the external call. The harness is never made aware of any
    credentials.


    The general principle: security boundaries in agent systems should not
    depend on what the model is unwilling or unable to do. Build structural
    isolation so the agent's growing intelligence cannot convert into a growing
    attack surface.
stance: >-
  Credentials must live in a proxy or vault that the sandbox cannot reach, not
  scoped 'narrowly' and handed to Claude — because the security of narrow
  scoping depends on an assumption about what Claude can't do, and that
  assumption decays with every model upgrade.
related:
  - INS-260320-6A9D
  - INS-260403-2FAE
  - INS-260323-8D12
  - PRI-260403-9E80
  - INS-260321-D01E
  - INS-260329-67CB
---
In the coupled design, untrusted code Claude generated ran in the same container as credentials, so a successful prompt injection only needed to convince Claude to read its own environment. Once an attacker has those tokens, they can spawn fresh unrestricted sessions and delegate work to them. Narrow scoping is an obvious mitigation, but it encodes an assumption about what Claude can't do with a limited token — and Claude is getting increasingly smart.

The structural fix makes credentials unreachable from the sandbox entirely. Anthropic uses two patterns. For Git, each repo's access token is used once during sandbox initialization to clone the repo and wire it into the local git remote; push and pull then work from inside the sandbox without the agent ever handling the token. For custom tools, MCP tools are called via a dedicated proxy that holds OAuth tokens in a vault; Claude passes a session-scoped token to the proxy, the proxy fetches the real credentials and makes the external call. The harness is never made aware of any credentials.

The general principle: security boundaries in agent systems should not depend on what the model is unwilling or unable to do. Build structural isolation so the agent's growing intelligence cannot convert into a growing attack surface.
