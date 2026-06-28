---
id: INS-260625-DCE4
domain: ai-development
topic: architecture
title: 'Invert the sandbox: deny-all by default, grant explicit capabilities'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - sandboxing
  - capability-security
  - untrusted-code
  - least-privilege
  - isolation
sources:
  - type: youtube
    title: >-
      Why Eval++ Is the Next Great Compute Primitive — Sunil Pai & Matt Carey,
      Cloudflare
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=SKDJo2CopRs'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Most sandboxes start from a full VM and add security around it; the safer
    model starts from nothing — only JavaScript, no fetch, no env vars — and
    grants explicit capabilities.
  standard: >-
    The conventional approach to sandboxing untrusted code begins with a VM or
    container (a full environment with broad access) and then tries to wall it
    in from the outside. Cloudflare's dynamic workers do the opposite: the
    isolate can run only JavaScript, with no fetch, no APIs, no environment
    variables, and nothing else by default. From the outside you then grant
    narrow, explicit capabilities — e.g. outgoing fetches only to github.com, or
    a specific set of four APIs. The recommended default is to block outgoing
    fetches entirely.


    This inversion is what makes 'eval++' tractable. Eval was forbidden for 30
    years precisely because executing arbitrary generated code in an
    ambient-authority environment is catastrophic. By making the environment
    zero-authority and additive, the blast radius of malicious or buggy
    generated code is bounded by what you explicitly granted — turning a
    forbidden primitive into a fast, cheap, secure one. Lightweight isolates (no
    full filesystem, no VM heaviness) also mean you can spin up billions on
    demand.


    For builders: when you need to run model-generated or user-generated code,
    design the sandbox as capability-additive (deny everything, grant the
    minimum) rather than capability-subtractive (start permissive, lock down).
    The same principle hardens plugin systems — locking down where plugins run
    is what makes a WordPress-style plugin ecosystem safe by construction.
stance: >-
  Safely running untrusted LLM-generated code requires a capability sandbox that
  starts with zero access and grants explicit permissions, not a VM hardened
  after the fact.
related:
  - INS-260410-0B73
  - INS-260410-D04D
  - INS-260410-E233
  - INS-260605-1A50
  - INS-260605-1C30
  - INS-260619-F7E3
  - INS-260626-E7C4
  - INS-260627-9478
  - INS-260605-A28F
  - INS-260628-8C7D
---
The conventional approach to sandboxing untrusted code begins with a VM or container (a full environment with broad access) and then tries to wall it in from the outside. Cloudflare's dynamic workers do the opposite: the isolate can run only JavaScript, with no fetch, no APIs, no environment variables, and nothing else by default. From the outside you then grant narrow, explicit capabilities — e.g. outgoing fetches only to github.com, or a specific set of four APIs. The recommended default is to block outgoing fetches entirely.

This inversion is what makes 'eval++' tractable. Eval was forbidden for 30 years precisely because executing arbitrary generated code in an ambient-authority environment is catastrophic. By making the environment zero-authority and additive, the blast radius of malicious or buggy generated code is bounded by what you explicitly granted — turning a forbidden primitive into a fast, cheap, secure one. Lightweight isolates (no full filesystem, no VM heaviness) also mean you can spin up billions on demand.

For builders: when you need to run model-generated or user-generated code, design the sandbox as capability-additive (deny everything, grant the minimum) rather than capability-subtractive (start permissive, lock down). The same principle hardens plugin systems — locking down where plugins run is what makes a WordPress-style plugin ecosystem safe by construction.
