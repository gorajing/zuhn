---
id: INS-260626-ACD0
domain: ai-development
topic: product-strategy
title: >-
  Maximize agent capability by handing risk to the user when the blast radius is
  local
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-safety
  - agency
  - sharp-tools
  - sandboxing
  - risk-tradeoff
sources:
  - type: youtube
    title: 'Agents on the Canvas in tldraw — Steve Ruiz, tldraw'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=sPUjIBH5Cwg'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    For local, file-based tools, you can unlock far more agent capability by
    giving users sharp tools and owning the risk rather than sandboxing the
    agent.
  standard: >-
    tldraw hit the limits of safe sandboxing — agents needed the DOM and browser
    to see state and generate screenshots, which a sandbox can't provide — so
    Ruiz instead shipped a local Electron app that opens an HTTP endpoint and
    runs any posted JavaScript as code. He's blunt that this is 'a terrible
    idea' for a networked app, but for an offline, file-based desktop app the
    worst case is 'you could hurt yourself.' The agents have no qualms doing
    script injection or even modifying other desktop apps' minified bundles, and
    that maximal agency is exactly what makes them powerful.


    The strategic claim is that agency and safety trade off, and the right point
    on that curve depends on blast radius. To maximize what an agent can do, you
    sometimes have to 'hand that to the user and say, good luck' — sharp tools
    rather than padded ones. Ruiz cites Claude Code as doing this well. The
    boundary condition matters: this is acceptable precisely because the damage
    is contained to the user's own machine and files. For products where an
    agent's mistakes can hurt other users or systems, the calculus inverts and
    sandboxing wins.
stance: >-
  When the blast radius is the user's own machine, maximizing agent agency by
  handing the user the risk beats constraining the agent to a safe sandbox.
related:
  - INS-260327-63B5
  - INS-260405-82DD
  - INS-260409-7C48
  - INS-260605-0C88
  - INS-260605-5EE0
  - INS-260625-CBC7
  - INS-260626-DD33
  - INS-260605-9276
  - INS-260605-74CC
  - INS-260626-C563
---
tldraw hit the limits of safe sandboxing — agents needed the DOM and browser to see state and generate screenshots, which a sandbox can't provide — so Ruiz instead shipped a local Electron app that opens an HTTP endpoint and runs any posted JavaScript as code. He's blunt that this is 'a terrible idea' for a networked app, but for an offline, file-based desktop app the worst case is 'you could hurt yourself.' The agents have no qualms doing script injection or even modifying other desktop apps' minified bundles, and that maximal agency is exactly what makes them powerful.

The strategic claim is that agency and safety trade off, and the right point on that curve depends on blast radius. To maximize what an agent can do, you sometimes have to 'hand that to the user and say, good luck' — sharp tools rather than padded ones. Ruiz cites Claude Code as doing this well. The boundary condition matters: this is acceptable precisely because the damage is contained to the user's own machine and files. For products where an agent's mistakes can hurt other users or systems, the calculus inverts and sandboxing wins.
