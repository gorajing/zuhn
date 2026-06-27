---
id: INS-260627-9478
domain: ai-development
topic: security
title: Keep secrets out of the sandbox by proxying through trusted code
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - secrets-management
  - sandboxing
  - ai-security
  - proxy-pattern
  - multi-tenancy
sources:
  - type: youtube
    title: >-
      Why, and how you need to sandbox AI-Generated Code? — Harshil Agrawal,
      Cloudflare
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=AHtGAgQ0Q_Q'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't pass API keys into the sandbox as env vars; have the sandbox call a
    proxy endpoint in your own code that injects the real key, so the secret
    never enters the untrusted environment.
  standard: >-
    The common and wrong pattern is passing your API key into the sandbox as an
    environment variable so the generated code can call an external service. The
    moment the key enters the container, any code running inside can read it:
    the AI-generated code, code influenced by a prompt injection, or merely
    buggy code that logs everything to the console. The fix is the proxy
    pattern: the sandbox calls a proxy endpoint in your own trusted worker,
    which adds the authentication header with the real key, forwards the
    request, and returns the response. The secret stays in your environment,
    which the sandbox cannot reach, and this should be the default for any
    secret AI code might need.


    The same defense-in-depth logic drives per-user isolation: the user ID is
    the isolation boundary, and sandboxes must never be shared between tenants,
    because a shared sandbox is a shared file system and therefore a data-leak
    vector that is extremely hard to undo once baked into the architecture.
    Rounding out the operational checklist: default-deny network access (the
    single highest-leverage control, since code that cannot reach the internet
    cannot exfiltrate), resource limits to cap runaway compute, mandatory
    cleanup with try/finally plus maximum lifetimes so idle sandboxes do not
    linger as cost and security surface, logging for an audit trail, and input
    validation before execution.
stance: >-
  Secrets should never enter an AI code sandbox; sensitive calls should be
  proxied through trusted code that holds the keys.
related:
  - INS-260605-2E60
  - INS-260625-DCE4
  - INS-260605-1C30
  - INS-260626-E7C4
  - INS-260605-BC6F
---
The common and wrong pattern is passing your API key into the sandbox as an environment variable so the generated code can call an external service. The moment the key enters the container, any code running inside can read it: the AI-generated code, code influenced by a prompt injection, or merely buggy code that logs everything to the console. The fix is the proxy pattern: the sandbox calls a proxy endpoint in your own trusted worker, which adds the authentication header with the real key, forwards the request, and returns the response. The secret stays in your environment, which the sandbox cannot reach, and this should be the default for any secret AI code might need.

The same defense-in-depth logic drives per-user isolation: the user ID is the isolation boundary, and sandboxes must never be shared between tenants, because a shared sandbox is a shared file system and therefore a data-leak vector that is extremely hard to undo once baked into the architecture. Rounding out the operational checklist: default-deny network access (the single highest-leverage control, since code that cannot reach the internet cannot exfiltrate), resource limits to cap runaway compute, mandatory cleanup with try/finally plus maximum lifetimes so idle sandboxes do not linger as cost and security surface, logging for an audit trail, and input validation before execution.
