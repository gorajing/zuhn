---
id: INS-260514-1841
domain: ai-development
topic: system-design
title: >-
  Agents modifying their own harness solves edge cases that pre-built tools
  cannot
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - self-modifying-agents
  - harness-design
  - browser-use
  - agent-extensibility
sources:
  - type: youtube
    title: “There Is No Task Agents Cannot Do” - Magnus Müller
    author: David Ondrej
    url: 'https://youtu.be/k8o_UgtrGyA'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Browser Harness is 600 lines. When an agent hits an edge case (sign a
    signature, click a native dialog), it writes its own tool extension and
    publishes it as a skill.
  standard: >-
    Müller's architectural insight: Browser Harness is deliberately small (600
    lines of code, one file). When an agent encounters a browser interaction the
    harness doesn't directly support — like drawing a signature, clicking a
    native browser dialog ('do you want to share your location?'), or handling
    complex cross-origin iframes — the agent can read the entire harness, write
    a new tool function, and push it back to the public repo. Subsequent users
    benefit from the extension. This is structurally different from traditional
    tool ecosystems where edge cases require human developer interventions. The
    model is: minimal harness + sufficiently capable coding agent =
    self-extending tool ecosystem.


    Application: when designing AI tools, optimize for harness readability and
    extensibility by the agent itself, not for completeness. A small,
    well-documented harness that an agent can read in one context window beats a
    comprehensive harness that the agent can't modify. The 'minimal-surface
    tools' pattern: provide primitives, let agents compose. This is the same
    insight as Lopopolo's harness engineering at OpenAI — the durable knowledge
    is the spec + harness, not the specific tool implementations.
stance: >-
  The killer feature of Magnus Müller's Browser Harness is that the 600-line
  harness is small enough for the agent to read, modify, and extend itself when
  it encounters edge cases — instead of needing the harness developer to handle
  every browser quirk (signature drawing, native dialogs, cross-origin iframes),
  the agent writes its own tool extensions and publishes them back as skills for
  other users.
related:
  - INS-260327-63B5
  - INS-260409-51B2
  - INS-260409-B122
  - INS-260410-CD79
  - INS-260423-74BF
  - INS-260501-9503
  - INS-260501-FD20
---
Müller's architectural insight: Browser Harness is deliberately small (600 lines of code, one file). When an agent encounters a browser interaction the harness doesn't directly support — like drawing a signature, clicking a native browser dialog ('do you want to share your location?'), or handling complex cross-origin iframes — the agent can read the entire harness, write a new tool function, and push it back to the public repo. Subsequent users benefit from the extension. This is structurally different from traditional tool ecosystems where edge cases require human developer interventions. The model is: minimal harness + sufficiently capable coding agent = self-extending tool ecosystem.

Application: when designing AI tools, optimize for harness readability and extensibility by the agent itself, not for completeness. A small, well-documented harness that an agent can read in one context window beats a comprehensive harness that the agent can't modify. The 'minimal-surface tools' pattern: provide primitives, let agents compose. This is the same insight as Lopopolo's harness engineering at OpenAI — the durable knowledge is the spec + harness, not the specific tool implementations.
