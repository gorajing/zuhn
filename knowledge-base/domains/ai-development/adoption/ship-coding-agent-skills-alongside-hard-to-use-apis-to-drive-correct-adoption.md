---
id: INS-260625-D295
domain: ai-development
topic: adoption
title: Ship coding-agent skills alongside hard-to-use APIs to drive correct adoption
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - developer-experience
  - agent-skills
  - api-adoption
  - coding-agents
  - documentation
sources:
  - type: youtube
    title: >-
      From Transcription to Live Music: Gemini's Audio Stack — Thor Schaeff,
      Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Bc6Ojl2XS1w'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    DeepMind publishes coding-agent skills for every Gemini API, including the
    tricky real-time Live API, so agents steer developers toward correct usage.
  standard: >-
    Because real-time audio integration is genuinely hard to get right, DeepMind
    ships coding-agent skills for all the Gemini APIs — including the Live API —
    that developers install into their coding agents. The skill encodes the
    right patterns so the agent produces working integrations instead of
    plausible-but-broken code, materially improving the odds a developer
    succeeds with a complex surface.


    This reframes developer experience for the agentic era. Historically API
    adoption depended on docs, quickstarts, and SDKs aimed at humans. When a
    large share of integration code is now written by coding agents, the
    highest-leverage adoption artifact becomes machine-installable guidance — a
    skill that steers the agent — not just prose documentation a human reads.
    The harder and more error-prone the API, the larger the payoff from shipping
    such a skill.


    For any team publishing an SDK or API today, the actionable move is to
    author and distribute agent skills for the parts most likely to be misused,
    treating them as a first-class DX deliverable. It also lowers the support
    burden: correct-by-construction integrations generate fewer bug reports and
    abandoned attempts than developers fighting a real-time websocket protocol
    unaided.
stance: >-
  API providers should publish coding-agent skills for their harder APIs so that
  developers' coding agents generate correct integrations by default.
related:
  - INS-260322-3083
  - INS-260321-D3BE
  - INS-260320-1B10
  - INS-260325-031F
  - INS-260325-D540
  - INS-260329-3D28
  - INS-260330-83D5
  - INS-260403-D090
  - INS-260329-92C3
  - INS-260403-08D7
---
Because real-time audio integration is genuinely hard to get right, DeepMind ships coding-agent skills for all the Gemini APIs — including the Live API — that developers install into their coding agents. The skill encodes the right patterns so the agent produces working integrations instead of plausible-but-broken code, materially improving the odds a developer succeeds with a complex surface.

This reframes developer experience for the agentic era. Historically API adoption depended on docs, quickstarts, and SDKs aimed at humans. When a large share of integration code is now written by coding agents, the highest-leverage adoption artifact becomes machine-installable guidance — a skill that steers the agent — not just prose documentation a human reads. The harder and more error-prone the API, the larger the payoff from shipping such a skill.

For any team publishing an SDK or API today, the actionable move is to author and distribute agent skills for the parts most likely to be misused, treating them as a first-class DX deliverable. It also lowers the support burden: correct-by-construction integrations generate fewer bug reports and abandoned attempts than developers fighting a real-time websocket protocol unaided.
