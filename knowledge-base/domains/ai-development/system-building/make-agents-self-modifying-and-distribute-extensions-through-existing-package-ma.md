---
id: INS-260627-3E8A
domain: ai-development
topic: system-building
title: >-
  Make agents self-modifying and distribute extensions through existing package
  managers, not bespoke marketplaces
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - extensibility
  - self-modifying-agents
  - package-managers
  - developer-tools
  - architecture
sources:
  - type: youtube
    title: Building pi in a World of Slop — Mario Zechner
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=RjfbvDXpFls'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    pi is a minimal core wired so the agent can write its own TypeScript
    extensions from shipped docs and code examples — and those extensions go on
    NPM, because 'we already have package managers' and don't need another silo
    called a marketplace.
  standard: >-
    pi's architecture is a deliberate bet on malleability: a stripped-down core
    (an AI provider abstraction, an agent loop with tool calling, a flicker-free
    TUI, and the coding agent) made maximally extensible. The mechanism that
    lets the agent modify itself is almost trivial — ship the documentation
    (handcrafted by the author and an agent) plus code examples of extensions,
    then tell the agent 'here's the docs, here's how to write extensions,' and
    it writes its own. Extensions are just TypeScript modules (in the simplest
    case a single file on disk) that hot-reload within the session, giving the
    game-developer's prized low-iteration loop.


    The distribution stance is the non-obvious part: rather than build a curated
    marketplace, pi piggybacks on existing package managers. Extensions get
    published to NPM or GitHub, with a thin search interface on top of NPM.
    Zechner's reasoning — 'we don't need to reinvent another bunch of silos
    called marketplaces; we already have package managers' — is a critique of
    the platform land-grab instinct where every tool wants its own walled
    directory.


    The demonstration of this philosophy is that features other harnesses ship
    natively (sub-agents, plan mode, MCP support, a side-chat-while-working
    tool) are simply absent from pi by default; if you want them, you ask pi to
    build them, or you load someone else's extension. One example took a
    joked-about Twitter prompt and someone built it as a working extension in
    five minutes without forking or cloning. The principle generalizes beyond
    pi: maximize the surface the user (and the agent) can modify, and reuse
    existing distribution rails instead of inventing proprietary ones.
stance: >-
  The right extensibility model for agents is a minimal core the agent can
  rewrite itself, with extensions shipped over NPM/GitHub rather than a
  proprietary marketplace.
related:
  - INS-260403-80A0
  - INS-260627-05AD
  - INS-260627-1FAE
  - PRI-260320-BC72
  - INS-260627-F9F3
---
pi's architecture is a deliberate bet on malleability: a stripped-down core (an AI provider abstraction, an agent loop with tool calling, a flicker-free TUI, and the coding agent) made maximally extensible. The mechanism that lets the agent modify itself is almost trivial — ship the documentation (handcrafted by the author and an agent) plus code examples of extensions, then tell the agent 'here's the docs, here's how to write extensions,' and it writes its own. Extensions are just TypeScript modules (in the simplest case a single file on disk) that hot-reload within the session, giving the game-developer's prized low-iteration loop.

The distribution stance is the non-obvious part: rather than build a curated marketplace, pi piggybacks on existing package managers. Extensions get published to NPM or GitHub, with a thin search interface on top of NPM. Zechner's reasoning — 'we don't need to reinvent another bunch of silos called marketplaces; we already have package managers' — is a critique of the platform land-grab instinct where every tool wants its own walled directory.

The demonstration of this philosophy is that features other harnesses ship natively (sub-agents, plan mode, MCP support, a side-chat-while-working tool) are simply absent from pi by default; if you want them, you ask pi to build them, or you load someone else's extension. One example took a joked-about Twitter prompt and someone built it as a working extension in five minutes without forking or cloning. The principle generalizes beyond pi: maximize the surface the user (and the agent) can modify, and reuse existing distribution rails instead of inventing proprietary ones.
