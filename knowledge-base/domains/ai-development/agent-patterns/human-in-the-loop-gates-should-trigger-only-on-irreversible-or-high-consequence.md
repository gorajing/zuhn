---
id: INS-260411-27AA
domain: ai-development
topic: agent-patterns
title: >-
  Human-in-the-loop gates should trigger only on irreversible or
  high-consequence actions
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - human-in-the-loop
  - approval-gates
  - safety
  - irreversibility
  - adk
sources:
  - type: blog
    title: Developer’s guide to multi-agent patterns in ADK- Google Developers Blog
    url: >-
      https://developers.googleblog.com/developers-guide-to-multi-agent-patterns-in-adk/
date_extracted: '2026-04-11'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Gate human approval on irreversible or high-consequence actions only —
    routine gating causes approval fatigue that defeats the safety purpose.
  standard: >-
    Google's HITL pattern draws a clear line: agents handle groundwork, but
    humans authorize actions that are irreversible or carry significant
    consequences. The examples are specific — financial transactions, production
    deployments, actions on sensitive data.


    The implementation uses a custom ApprovalTool that pauses agent execution
    and triggers an external system for human review. The critical design choice
    is WHERE to place the gate. Gate too early (every API call) and you get
    approval fatigue — the same failure mode Anthropic identified where humans
    rubber-stamp everything. Gate too late (after deployment) and the damage is
    done. The sweet spot is the irreversibility boundary: can this action be
    undone? If no, require human approval.
stance: >-
  Effective human-in-the-loop design restricts approval gates to irreversible or
  high-consequence actions — gating routine operations causes approval fatigue
  that undermines the safety the gates are supposed to provide.
related:
  - INS-260330-4E68
  - INS-260403-EC1D
  - INS-260403-23AA
  - INS-260404-3ACB
  - INS-260410-F0EF
  - INS-260410-E233
  - INS-260330-14CA
---
Google's HITL pattern draws a clear line: agents handle groundwork, but humans authorize actions that are irreversible or carry significant consequences. The examples are specific — financial transactions, production deployments, actions on sensitive data.

The implementation uses a custom ApprovalTool that pauses agent execution and triggers an external system for human review. The critical design choice is WHERE to place the gate. Gate too early (every API call) and you get approval fatigue — the same failure mode Anthropic identified where humans rubber-stamp everything. Gate too late (after deployment) and the damage is done. The sweet spot is the irreversibility boundary: can this action be undone? If no, require human approval.
