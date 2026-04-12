---
id: INS-260410-992A
domain: ai-development
topic: claude-code
title: >-
  Credentials should never live inside the agent's sandbox — proxy them at the
  boundary
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - credential-isolation
  - proxy-pattern
  - git-security
  - cloud-agents
sources:
  - type: blog
    title: Making Claude Code more secure and autonomous with sandboxing
    url: 'https://www.anthropic.com/engineering/claude-code-sandboxing'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Keep real credentials outside the sandbox and hand the agent short-lived
    scoped tokens the proxy translates into the real auth at the boundary.
  standard: >-
    Claude Code on the web executes each session in an isolated cloud sandbox
    but explicitly keeps git credentials OUT of that sandbox. The agent
    authenticates to a custom proxy service using a scoped credential; the proxy
    verifies the credential AND validates the request contents (e.g., that
    pushes only go to the configured branch), then attaches the real GitHub auth
    token before forwarding. This means even a fully compromised sandbox cannot
    push to unauthorized branches or steal signing keys.


    This is a general pattern for any cloud-hosted agent that needs to interact
    with authenticated services: treat the sandbox as untrusted, put a
    policy-enforcing proxy between it and the real service, and give the sandbox
    only narrow capability tokens that the proxy can revoke or refuse. It's the
    principle of least authority applied to agent runtimes — and it dodges the
    'agent leaks API key' failure mode that plagues many naive agent
    integrations.
stance: >-
  Cloud agent sandboxes should be designed so that git credentials, signing
  keys, and secrets are held by a proxy outside the sandbox and scoped
  per-request, never inside where the agent can read them.
related:
  - INS-260410-358E
  - INS-260410-1430
  - INS-260412-1440
  - INS-260330-90C3
  - INS-260405-B22F
---
Claude Code on the web executes each session in an isolated cloud sandbox but explicitly keeps git credentials OUT of that sandbox. The agent authenticates to a custom proxy service using a scoped credential; the proxy verifies the credential AND validates the request contents (e.g., that pushes only go to the configured branch), then attaches the real GitHub auth token before forwarding. This means even a fully compromised sandbox cannot push to unauthorized branches or steal signing keys.

This is a general pattern for any cloud-hosted agent that needs to interact with authenticated services: treat the sandbox as untrusted, put a policy-enforcing proxy between it and the real service, and give the sandbox only narrow capability tokens that the proxy can revoke or refuse. It's the principle of least authority applied to agent runtimes — and it dodges the 'agent leaks API key' failure mode that plagues many naive agent integrations.
