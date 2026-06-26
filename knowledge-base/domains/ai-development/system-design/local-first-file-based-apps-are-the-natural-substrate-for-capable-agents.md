---
id: INS-260626-5882
domain: ai-development
topic: system-design
title: 'Local-first, file-based apps are the natural substrate for capable agents'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - local-first
  - file-over-app
  - agent-architecture
  - dom
  - desktop-apps
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
    Local-first and file-over-app architectures gain new justification as the
    only way to expose the live browser state agents need to observe and script
    against.
  standard: >-
    Ruiz notes that local-first, file-over-app ideas had been 'curiosities and
    almost idealistic' — nice in principle but not clearly necessary. Agents
    change that. To act capably, agents need to see what's going on: the DOM,
    the browser, the ability to generate screenshots. A remote sandbox can't
    expose that live state, but a local Electron-wrapped app can open an
    endpoint that lets an agent both observe and script-inject against the
    running editor. The architecture that lets an agent maximize agency turns
    out to be a local file-based app exposing itself to that agent.


    The forward-looking claim is that what was previously an aesthetic
    preference (own your files, run locally) becomes a functional requirement
    for the most capable agentic experiences. If the goal is to let an agent
    read live UI state and act on it directly, 'that's the only way that you
    could do this.' For builders, this reframes local-first not as a philosophy
    but as an enabling substrate: ship a local runtime the agent can introspect,
    and you unlock a class of see-and-act capability that cloud sandboxes
    structurally cannot match.
stance: >-
  Local file-based apps are becoming the necessary substrate for maximally
  capable agents because they expose live DOM state agents need to see and act
  on.
related:
  - INS-260321-C5AA
  - INS-260625-5BF4
  - INS-260330-AB62
  - INS-260410-85AD
  - INS-260409-7C48
---
Ruiz notes that local-first, file-over-app ideas had been 'curiosities and almost idealistic' — nice in principle but not clearly necessary. Agents change that. To act capably, agents need to see what's going on: the DOM, the browser, the ability to generate screenshots. A remote sandbox can't expose that live state, but a local Electron-wrapped app can open an endpoint that lets an agent both observe and script-inject against the running editor. The architecture that lets an agent maximize agency turns out to be a local file-based app exposing itself to that agent.

The forward-looking claim is that what was previously an aesthetic preference (own your files, run locally) becomes a functional requirement for the most capable agentic experiences. If the goal is to let an agent read live UI state and act on it directly, 'that's the only way that you could do this.' For builders, this reframes local-first not as a philosophy but as an enabling substrate: ship a local runtime the agent can introspect, and you unlock a class of see-and-act capability that cloud sandboxes structurally cannot match.
