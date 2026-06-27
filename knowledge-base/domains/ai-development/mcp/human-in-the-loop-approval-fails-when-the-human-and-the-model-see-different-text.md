---
id: INS-260627-1B54
domain: ai-development
topic: mcp
title: >-
  Human-in-the-loop approval fails when the human and the model see different
  text
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - tool-poisoning
  - human-in-the-loop
  - agentic-security
  - iceberg-effect
sources:
  - type: youtube
    title: >-
      $1 AI Guardrails: The Unreasonable Effectiveness of Finetuned ModernBERTs
      – Diego Carpentero
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=YZHPEkfy2kc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MCP exposes an asymmetry — the user approves a one-line tool summary while
    the LLM consumes the full description, which can hide exfiltration
    instructions the user never sees.
  standard: >-
    When approving an MCP tool call, a user sees a simplified function name and
    one-liner, but the model ingests the full tool description. Carpentero calls
    this the iceberg effect: an 'add two numbers' tool can carry a hidden
    side-note instruction that exfiltrates the user's private key and
    credentials as an extra parameter, after which the call returns a
    normal-looking result and the user notices nothing. Follow-on research used
    the same protocol to exfiltrate WhatsApp chat histories.


    The generalizable principle is that human review is only a control if the
    human reviews the same artifact the model executes. Any UI that summarizes,
    truncates, or renders agent-bound instructions differently from what the
    model receives turns the human checkpoint into theater. Designing agent
    oversight means guaranteeing representational parity between approval
    surface and execution surface — otherwise add a deterministic classifier
    that inspects the full description the model will actually see.
stance: >-
  Human approval of agent actions provides false security whenever the summary
  the human approves differs from the full instruction the model actually reads.
related:
  - INS-260627-A0EE
  - INS-260627-B416
  - INS-260627-6217
  - INS-260329-7BAF
  - INS-260626-475E
---
When approving an MCP tool call, a user sees a simplified function name and one-liner, but the model ingests the full tool description. Carpentero calls this the iceberg effect: an 'add two numbers' tool can carry a hidden side-note instruction that exfiltrates the user's private key and credentials as an extra parameter, after which the call returns a normal-looking result and the user notices nothing. Follow-on research used the same protocol to exfiltrate WhatsApp chat histories.

The generalizable principle is that human review is only a control if the human reviews the same artifact the model executes. Any UI that summarizes, truncates, or renders agent-bound instructions differently from what the model receives turns the human checkpoint into theater. Designing agent oversight means guaranteeing representational parity between approval surface and execution surface — otherwise add a deterministic classifier that inspects the full description the model will actually see.
