---
id: INS-260627-6BD0
domain: ai-development
topic: security
title: 'Secure AI code by allow-listing capabilities, not block-listing dangers'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - capability-based-security
  - sandboxing
  - ai-security
  - least-privilege
  - default-deny
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
    Don't enumerate what to block; enumerate what to allow, so there is nothing
    to exploit because the dangerous capability was never granted.
  standard: >-
    Block-list security forces you to anticipate every possible attack: every
    dangerous system call, every risky API, every exfiltration path. Miss one
    and you are compromised. Allow-list (capability-based) security inverts
    this: the code can do only what you explicitly permitted, so if you never
    granted network access there is no fetch to intercept and no network to
    exploit. The dangerous operation was never available rather than blocked
    after the fact.


    This is the same model that makes browsers, operating systems, and phones
    safe: default deny everything, then grant specific, minimal capabilities
    like a single database query method or a logger and nothing else. In
    practice it means passing the sandboxed code only the bindings it needs and
    routing those through your own controlled interface, instead of writing
    firewall rules or running pattern detectors to catch dangerous code. It is
    also less code: strong isolation comes from withholding access, not from
    building elaborate interception layers that you must keep ahead of every new
    attack.
stance: >-
  Default-deny capability-based security beats trying to enumerate and block
  every dangerous operation in AI code execution.
related:
  - INS-260320-DDFE
  - INS-260330-AC7F
  - INS-260412-4233
  - INS-260514-FEC8
  - INS-260605-D320
  - INS-260626-091B
  - INS-260619-F7E3
---
Block-list security forces you to anticipate every possible attack: every dangerous system call, every risky API, every exfiltration path. Miss one and you are compromised. Allow-list (capability-based) security inverts this: the code can do only what you explicitly permitted, so if you never granted network access there is no fetch to intercept and no network to exploit. The dangerous operation was never available rather than blocked after the fact.

This is the same model that makes browsers, operating systems, and phones safe: default deny everything, then grant specific, minimal capabilities like a single database query method or a logger and nothing else. In practice it means passing the sandboxed code only the bindings it needs and routing those through your own controlled interface, instead of writing firewall rules or running pattern detectors to catch dangerous code. It is also less code: strong isolation comes from withholding access, not from building elaborate interception layers that you must keep ahead of every new attack.
