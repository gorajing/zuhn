---
id: INS-260501-A746
domain: ai-development
topic: ai-market-dynamics
title: >-
  When agents pick the tools, the public markets had the right idea but wrong
  direction — Atlassian/Monday lose because agents don't need PM tools
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - agent-tool-selection
  - saas-bifurcation
  - atlassian
  - marquetto
  - issue-3
sources:
  - type: youtube
    title: >-
      Anthropic Raises $45B but Falls Short on Compute & Thoma Bravo Hand Back
      Medallia Keys to Creditors
    author: 20VC with Harry Stebbings
    url: 'https://youtu.be/aXToQKc430c'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents pick infrastructure tools (Twilio, Cloudflare) and ignore
    productivity tools (Marquetto, Outreach, Atlassian) — the public markets are
    reading this correctly.
  standard: >-
    Calacanis's diagnostic: when you ask Claude what tools to use, it's heavily
    biased toward market leaders with momentum, and explicitly mocks Marquetto,
    Outreach, and Salesloft as 'useless to agents' because the agent will craft
    and send a better email itself. Atlassian and Monday face the same threat —
    agents don't need project management tools, they have no use for them.
    Conversely, Twilio and Cloudflare have outperformed because agents still
    need infrastructure (telephony, CDN, security).


    The diagnostic test: does the agent need this tool to accomplish the task,
    or does the agent supersede the tool? Productivity-layer tools (writing,
    project management, marketing automation) get superseded. Infrastructure
    tools (compute, communication, storage, observability) remain essential.
    Calacanis applies the same test to Canva: it's a great Canva 2.0 with
    vibe-image-generation, but agents don't move assets around manually — they
    create the assets directly. Canva ends up valuable for individual designers
    but invisible to agentic workflows. For Zuhn editorially: this is a precise
    refinement of the model-is-not-the-moat thesis. The right question isn't
    'will incumbents survive?' but 'is your tool an agent's tool or an
    agent-replacement?' That binary determines terminal value.
stance: >-
  The public market's punishment of Atlassian, Monday, Marquetto, Outreach, and
  Salesloft is structurally correct — agents have no use for these products and
  will craft emails, manage projects, and orchestrate workflows themselves;
  outperformers like Twilio and Cloudflare are infrastructure agents still need.
related:
  - INS-260514-118A
  - INS-260409-665F
  - INS-260404-B31C
  - INS-260404-5AC8
  - INS-260405-95A6
---
Calacanis's diagnostic: when you ask Claude what tools to use, it's heavily biased toward market leaders with momentum, and explicitly mocks Marquetto, Outreach, and Salesloft as 'useless to agents' because the agent will craft and send a better email itself. Atlassian and Monday face the same threat — agents don't need project management tools, they have no use for them. Conversely, Twilio and Cloudflare have outperformed because agents still need infrastructure (telephony, CDN, security).

The diagnostic test: does the agent need this tool to accomplish the task, or does the agent supersede the tool? Productivity-layer tools (writing, project management, marketing automation) get superseded. Infrastructure tools (compute, communication, storage, observability) remain essential. Calacanis applies the same test to Canva: it's a great Canva 2.0 with vibe-image-generation, but agents don't move assets around manually — they create the assets directly. Canva ends up valuable for individual designers but invisible to agentic workflows. For Zuhn editorially: this is a precise refinement of the model-is-not-the-moat thesis. The right question isn't 'will incumbents survive?' but 'is your tool an agent's tool or an agent-replacement?' That binary determines terminal value.
