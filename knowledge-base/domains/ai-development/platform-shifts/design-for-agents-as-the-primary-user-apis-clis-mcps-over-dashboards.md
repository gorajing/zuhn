---
id: INS-260626-55E0
domain: ai-development
topic: platform-shifts
title: 'Design for agents as the primary user — APIs, CLIs, MCPs over dashboards'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-experience
  - ax
  - mcp
  - api-design
  - platform-shift
sources:
  - type: youtube
    title: Agents for Everything Else — swyx
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zepu8Kk6FBQ'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If ~60% of your users are already bots (as Vercel reports), your dashboards
    stop mattering and your APIs, CLIs, and MCPs become the real product
    surface.
  standard: >-
    swyx cites Malte's keynote claim that roughly 60% of Vercel's user base is
    now agents rather than humans, and Edo and Liad's talk on shipping UI into
    someone else's app rather than building your own. The conclusion he draws is
    that the 'primary user' of software is shifting toward what people call
    agent experience (AX): when agents are the majority caller, the human-facing
    dashboard and custom UI matter less, and the machine-facing surfaces — APIs,
    CLIs, MCPs — matter more.


    He reports living this himself: he no longer cares about the Figma
    dashboard; he throws the work into a cloud co-worker agent and trusts it to
    act. The custom UI is 'kind of going away.'


    For builders, the directive is to treat agents as a first-class user persona
    — invest in clean APIs, scriptable CLIs, and MCP endpoints, and assume a
    growing share of traffic will never see your UI at all. Optimizing only the
    dashboard is optimizing for a shrinking audience.
stance: >-
  As agents become the majority of product traffic, your APIs, CLIs, and MCPs
  matter more than your human-facing dashboards and custom UI.
related:
  - INS-260323-9492
  - INS-260323-99E0
  - INS-260404-769B
  - INS-260514-E860
  - INS-260409-A4F0
  - INS-260403-B8ED
  - PRI-260328-6A8D
---
swyx cites Malte's keynote claim that roughly 60% of Vercel's user base is now agents rather than humans, and Edo and Liad's talk on shipping UI into someone else's app rather than building your own. The conclusion he draws is that the 'primary user' of software is shifting toward what people call agent experience (AX): when agents are the majority caller, the human-facing dashboard and custom UI matter less, and the machine-facing surfaces — APIs, CLIs, MCPs — matter more.

He reports living this himself: he no longer cares about the Figma dashboard; he throws the work into a cloud co-worker agent and trusts it to act. The custom UI is 'kind of going away.'

For builders, the directive is to treat agents as a first-class user persona — invest in clean APIs, scriptable CLIs, and MCP endpoints, and assume a growing share of traffic will never see your UI at all. Optimizing only the dashboard is optimizing for a shrinking audience.
