---
id: INS-260625-BEFE
domain: ai-development
topic: governance
title: >-
  Gate agent actions on session state and capability combinations, not binary
  per-tool permissions
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-security
  - governance
  - prompt-injection
  - permissions
  - policy
sources:
  - type: youtube
    title: >-
      The Agent Cloud: Databricks’ Bet on the Future of AI — Matei Zaharia and
      Reynold Xin
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=Yp_u1NpbkJg'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Static yes/no per-tool permissions force a bad usability-vs-security
    tradeoff; tracking session state lets you block dangerous combinations (read
    confidential data AND publish externally) while allowing each action in
    isolation.
  standard: >-
    Most coding agents today only let you allow or disallow tool patterns — a
    binary switch. Zaharia argues this puts you in a 'very tough spot,' because
    the danger is rarely a single action: reading a confidential document is
    fine, publishing to the company website is fine, but doing both in one
    session is an exfiltration path that prompt injection can exploit. The fix
    is what Databricks calls stateful or contextual policies: the policy engine
    tracks what the session has already done (e.g., 'it installed a one-day-old
    NPM package' or 'it read a thousand confidential docs') and gates the next
    action on that accumulated context. This simultaneously makes the agent more
    secure AND more useful by moving the tradeoff curve outward rather than
    choosing a point on it.


    Two design consequences follow. First, policies are written as functions
    over high-level events, with libraries that map low-level tool calls (e.g.,
    60 Google Drive API calls) into semantic actions like 'shares a document
    publicly' — and those libraries are open-sourced so the ecosystem can
    contribute them. Second, because the engine is already stateful, the same
    machinery enforces spend caps: you can tell a sub-agent 'cap this at $5 and
    ask before spending more,' and the session counter enforces it. The takeaway
    for anyone deploying agents with real data access: invest in session-aware
    policy infrastructure, not a longer allow-list.
stance: >-
  Agent security should be governed by stateful, contextual policies that track
  what a session has already done, because the risk lives in combinations of
  capabilities, not in any single tool call.
related:
  - INS-260403-23AA
  - INS-260410-761E
  - INS-260625-52B6
  - INS-260626-F490
  - INS-260625-386B
  - INS-260626-FC7A
  - INS-260626-8B56
---
Most coding agents today only let you allow or disallow tool patterns — a binary switch. Zaharia argues this puts you in a 'very tough spot,' because the danger is rarely a single action: reading a confidential document is fine, publishing to the company website is fine, but doing both in one session is an exfiltration path that prompt injection can exploit. The fix is what Databricks calls stateful or contextual policies: the policy engine tracks what the session has already done (e.g., 'it installed a one-day-old NPM package' or 'it read a thousand confidential docs') and gates the next action on that accumulated context. This simultaneously makes the agent more secure AND more useful by moving the tradeoff curve outward rather than choosing a point on it.

Two design consequences follow. First, policies are written as functions over high-level events, with libraries that map low-level tool calls (e.g., 60 Google Drive API calls) into semantic actions like 'shares a document publicly' — and those libraries are open-sourced so the ecosystem can contribute them. Second, because the engine is already stateful, the same machinery enforces spend caps: you can tell a sub-agent 'cap this at $5 and ask before spending more,' and the session counter enforces it. The takeaway for anyone deploying agents with real data access: invest in session-aware policy infrastructure, not a longer allow-list.
