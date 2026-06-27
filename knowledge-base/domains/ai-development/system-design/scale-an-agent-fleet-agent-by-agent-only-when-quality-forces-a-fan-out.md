---
id: INS-260627-EC83
domain: ai-development
topic: system-design
title: Scale an agent fleet agent-by-agent only when quality forces a fan-out
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-orchestration
  - organizational-design
  - system-design
  - quality
  - scaling
sources:
  - type: youtube
    title: "Paperclip: Open Source Human Control Plane for AI Labor —\_Dotta Bippa"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=h403btjldDQ'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't install the 130-agent template; start with the agents you need and add
    one only when keeping quality high necessitates the split.
  standard: >-
    Despite Paperclip offering importable templates with huge default
    organizations, the explicit advice is the opposite: 'just start with the
    agents that you need. You don't actually have to install something that has
    130 agents.' The reasoning is that 'if you don't take the time to craft for
    the agents how you expect them to behave, then you won't get good results' —
    uncrafted agents at scale multiply noise rather than output.


    The directional claim is that agent count is a liability until justified by
    quality needs. Each agent is a surface that must be configured, instructed,
    and corrected to embody your standards; adding agents you haven't crafted
    dilutes accountability and degrades the org's output. Growth should be
    demand-pulled — 'make sure the quality level is high and that it actually
    necessitates you fanning out into other agents' — not template-pushed.


    This maps to a general system-design discipline: prefer the smallest set of
    well-specified components and split only when a concrete quality or
    throughput constraint forces it. It also pairs with cost discipline shown in
    the demo — not every agent needs frontier-model pricing — reinforcing that a
    lean, deliberately grown fleet beats a large, generic one.
stance: >-
  Importing large pre-built agent organizations produces worse results than
  starting minimal and adding an agent only when task quality genuinely requires
  fanning out.
related:
  - INS-260625-447A
  - INS-260627-C727
  - INS-260322-D8C3
  - INS-260605-9276
  - INS-260605-6591
---
Despite Paperclip offering importable templates with huge default organizations, the explicit advice is the opposite: 'just start with the agents that you need. You don't actually have to install something that has 130 agents.' The reasoning is that 'if you don't take the time to craft for the agents how you expect them to behave, then you won't get good results' — uncrafted agents at scale multiply noise rather than output.

The directional claim is that agent count is a liability until justified by quality needs. Each agent is a surface that must be configured, instructed, and corrected to embody your standards; adding agents you haven't crafted dilutes accountability and degrades the org's output. Growth should be demand-pulled — 'make sure the quality level is high and that it actually necessitates you fanning out into other agents' — not template-pushed.

This maps to a general system-design discipline: prefer the smallest set of well-specified components and split only when a concrete quality or throughput constraint forces it. It also pairs with cost discipline shown in the demo — not every agent needs frontier-model pricing — reinforcing that a lean, deliberately grown fleet beats a large, generic one.
