---
id: INS-260625-CF6B
domain: ai-development
topic: agent-patterns
title: Mirror agent actions in the UI and reserve irreversible steps for the human
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - human-in-the-loop
  - ui-state-sync
  - agent-handoff
  - irreversible-actions
  - ux
sources:
  - type: youtube
    title: >-
      The agent-ready web: Simplify user actions with WebMCP — Tara Agyemang,
      Google
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ghJmWQCIHRM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Update the visible UI on each tool call so the user can follow along, and
    route money-spending or other irreversible steps to manual human
    confirmation.
  standard: >-
    In the ticketing demo, each tool call the agent makes — searching concerts,
    opening a concert page, selecting VIP and quantity — visibly updates the
    page so the user can watch the agent's progress. Agyemang stresses keeping
    the UI in sync with tool calls as a core obligation, not a nicety: it
    preserves the user's mental model and their ability to retake control at any
    moment in the browse-then-handoff-then-browse loop that WebMCP enables.


    The second half of the pattern is a deliberate stopping point. For the final
    checkout — actually spending real money — she recommends letting the user
    perform that step manually so they know money is leaving their account. This
    encodes a general principle for agentic interfaces: keep state observable so
    handoffs between human and agent are seamless, but draw a human-confirmation
    boundary at irreversible or high-stakes actions rather than letting the
    agent complete them autonomously.
stance: >-
  Agent-driven web flows should keep the visible UI in sync with every tool call
  and hand irreversible actions like payment back to the user.
related:
  - INS-260325-AEF5
  - INS-260403-93BB
  - INS-260403-00D7
  - INS-260403-BA81
  - INS-260625-26FE
  - INS-260605-988D
  - INS-260627-F2AE
---
In the ticketing demo, each tool call the agent makes — searching concerts, opening a concert page, selecting VIP and quantity — visibly updates the page so the user can watch the agent's progress. Agyemang stresses keeping the UI in sync with tool calls as a core obligation, not a nicety: it preserves the user's mental model and their ability to retake control at any moment in the browse-then-handoff-then-browse loop that WebMCP enables.

The second half of the pattern is a deliberate stopping point. For the final checkout — actually spending real money — she recommends letting the user perform that step manually so they know money is leaving their account. This encodes a general principle for agentic interfaces: keep state observable so handoffs between human and agent are seamless, but draw a human-confirmation boundary at irreversible or high-stakes actions rather than letting the agent complete them autonomously.
