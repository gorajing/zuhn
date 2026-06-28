---
id: INS-260626-E7C4
domain: ai-development
topic: architecture
title: 'Capability-based security: start from zero, grant capabilities explicitly'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - sandboxing
  - security
  - capability-based-security
  - v8-isolates
  - observability
sources:
  - type: youtube
    title: 'Code Mode: Let the Code do the Talking - Sunil Pai, Cloudflare'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=8txf05vVVl4'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Invert the container model — begin with a sandbox that can only execute code
    (no fetches, no APIs) and explicitly grant each capability, instead of
    starting permissive and adding security from outside.
  standard: >-
    The emerging agent 'harness' is not just a code generator — it is a safe
    execution space into which capabilities are deliberately exposed. The key
    architectural inversion is against the container mental model: a container
    ships with all sorts of features that you then surround with external
    security. A capability-based sandbox starts with nothing — the only thing it
    can do is execute code. No outgoing fetches, no exposed APIs, nothing. You
    then grant capabilities one at a time, as APIs.


    Cloudflare implements this with V8 isolates (fast startup, ~10 years of
    security hardening) and 'dynamic workers,' but the speaker is explicit that
    the substrate is interchangeable — WASM, a custom JS interpreter, anything
    embeddable and fast works. The recommended default is no outgoing fetches at
    all, only granted APIs, because you need absolute observability: when the
    system makes an inexplicable $2.3M trade 'last Tuesday,' you must be able to
    trace back to exactly the code that ran.


    The enduring attributes to embed: events, sandboxing, capability-based
    security, and embeddability for fast ephemeral startup. This is presented as
    a resurgence of decades-old ideas (capability security, even Lisp/ASTs) now
    newly relevant because we finally have safe eval.
stance: >-
  Safe agent code execution should start from a sandbox with zero capabilities
  and grant them explicitly, rather than locking down a permissive container
  from the outside.
related:
  - INS-260410-0B73
  - INS-260410-D04D
  - INS-260605-1A50
  - INS-260605-1C30
  - INS-260605-D78B
  - INS-260619-F7E3
  - INS-260625-DCE4
  - INS-260626-5671
  - INS-260627-C0F1
  - INS-260627-9478
---
The emerging agent 'harness' is not just a code generator — it is a safe execution space into which capabilities are deliberately exposed. The key architectural inversion is against the container mental model: a container ships with all sorts of features that you then surround with external security. A capability-based sandbox starts with nothing — the only thing it can do is execute code. No outgoing fetches, no exposed APIs, nothing. You then grant capabilities one at a time, as APIs.

Cloudflare implements this with V8 isolates (fast startup, ~10 years of security hardening) and 'dynamic workers,' but the speaker is explicit that the substrate is interchangeable — WASM, a custom JS interpreter, anything embeddable and fast works. The recommended default is no outgoing fetches at all, only granted APIs, because you need absolute observability: when the system makes an inexplicable $2.3M trade 'last Tuesday,' you must be able to trace back to exactly the code that ran.

The enduring attributes to embed: events, sandboxing, capability-based security, and embeddability for fast ephemeral startup. This is presented as a resurgence of decades-old ideas (capability security, even Lisp/ASTs) now newly relevant because we finally have safe eval.
