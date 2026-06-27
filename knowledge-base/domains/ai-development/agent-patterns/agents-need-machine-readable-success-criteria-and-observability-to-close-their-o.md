---
id: INS-260627-02E1
domain: ai-development
topic: agent-patterns
title: >-
  Agents need machine-readable success criteria and observability to close their
  own loop
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - observability
  - verification
  - agentic-loops
  - feedback-loops
  - success-criteria
sources:
  - type: youtube
    title: "Platforms for Humans and Machines: Engineering for the Age of Agents —\_Juan Herreros Elorza"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=cCRO3ChaYhM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Tell the agent precisely what to do AND how it will know it succeeded, and
    surface logs/metrics/traces via API/CLI/MCP — agents can't read the
    dashboards humans use to verify deployments.
  standard: >-
    The talk frames agent work as a loop: given a clear target, the agent will
    iterate until it gets there. But closing that loop requires two ingredients
    that teams often leave implicit. The first is precise task instructions —
    describe the task and tell the agent exactly what you need done. The second,
    and the more frequently missed one, is an explicit, checkable definition of
    success: 'this is how you know you have succeeded at the task.'


    The sharp observation is about verification mechanics. Humans verify a
    deployment by glancing at observability dashboards — graphs, metrics panels,
    traces in a UI. Agents cannot look at graphical interfaces. So if
    verification only exists as a dashboard, the agent has no way to confirm its
    own work and the loop never closes. The fix is to make observability data —
    logs, metrics, traces, anything that signals correctness — available via
    API, CLI, or MCP server, not just rendered visually.


    This generalizes a core principle of agent design: an agent is only as
    autonomous as its feedback channel. Giving it the ability to act without the
    ability to machine-read the result of acting produces an agent that can try
    things but can't tell whether they worked — which means a human still has to
    close every loop, defeating the point.
stance: >-
  An agent can only iterate to a correct outcome if both the definition of done
  and the verification signals (logs, metrics, traces) are exposed in
  machine-readable form rather than graphical dashboards.
related:
  - INS-260410-85AD
  - INS-260501-D701
  - INS-260519-224B
  - INS-260522-C5C2
  - INS-260625-6E19
  - INS-260625-019F
  - INS-260625-1830
  - INS-260627-E1BD
---
The talk frames agent work as a loop: given a clear target, the agent will iterate until it gets there. But closing that loop requires two ingredients that teams often leave implicit. The first is precise task instructions — describe the task and tell the agent exactly what you need done. The second, and the more frequently missed one, is an explicit, checkable definition of success: 'this is how you know you have succeeded at the task.'

The sharp observation is about verification mechanics. Humans verify a deployment by glancing at observability dashboards — graphs, metrics panels, traces in a UI. Agents cannot look at graphical interfaces. So if verification only exists as a dashboard, the agent has no way to confirm its own work and the loop never closes. The fix is to make observability data — logs, metrics, traces, anything that signals correctness — available via API, CLI, or MCP server, not just rendered visually.

This generalizes a core principle of agent design: an agent is only as autonomous as its feedback channel. Giving it the ability to act without the ability to machine-read the result of acting produces an agent that can try things but can't tell whether they worked — which means a human still has to close every loop, defeating the point.
