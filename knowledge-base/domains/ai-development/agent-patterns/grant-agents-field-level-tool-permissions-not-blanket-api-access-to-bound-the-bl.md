---
id: INS-260626-8C66
domain: ai-development
topic: agent-patterns
title: >-
  Grant agents field-level tool permissions, not blanket API access, to bound
  the blast radius
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-safety
  - tool-permissions
  - least-privilege
  - blast-radius
  - n8n
sources:
  - type: youtube
    title: Human-in-the-Loop Automation with n8n — Liam McGarrigle
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=tDArkCqjA-c'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Expose individual tool fields to the agent (e.g. only the 'to' field) so a
    mistake is structurally bounded instead of as wide as the underlying API.
  standard: >-
    The speaker contrasts two permission models. When you give something like
    Claude Code raw access to your Google Calendar, it can make any API call the
    credential allows — the blast radius equals the entire API surface. In n8n,
    a tool exposes every field individually, and you choose which fields the
    agent may fill. You can let it set the subject and 'to' while hard-coding
    the body, or template static text and let the AI fill only one slot. The
    agent literally cannot touch fields you didn't expose.


    This is least-privilege applied at the field granularity rather than the
    credential granularity. The speaker frames it as a double-edged sword: the
    upside is a tightly bounded failure mode; the downside is you must set up
    every field deliberately, which is more work than dropping in a do-anything
    credential. For destructive or sensitive operations that tradeoff strongly
    favors the explicit setup.


    The transferable principle: when designing agent tools, prefer narrow,
    parameterized actions over broad capabilities. A tool that can only do one
    thing with one configurable input is far safer to hand an autonomous system
    than a general-purpose escape hatch.
stance: >-
  Agents should be wired to set only specific fields of a tool while the rest
  are fixed, rather than handed whole API credentials that let them do anything
  the API allows.
related:
  - INS-260412-0847
  - INS-260602-1DF1
  - INS-260605-35B4
  - INS-260626-D14F
  - INS-260602-EA48
  - INS-260627-9EBD
---
The speaker contrasts two permission models. When you give something like Claude Code raw access to your Google Calendar, it can make any API call the credential allows — the blast radius equals the entire API surface. In n8n, a tool exposes every field individually, and you choose which fields the agent may fill. You can let it set the subject and 'to' while hard-coding the body, or template static text and let the AI fill only one slot. The agent literally cannot touch fields you didn't expose.

This is least-privilege applied at the field granularity rather than the credential granularity. The speaker frames it as a double-edged sword: the upside is a tightly bounded failure mode; the downside is you must set up every field deliberately, which is more work than dropping in a do-anything credential. For destructive or sensitive operations that tradeoff strongly favors the explicit setup.

The transferable principle: when designing agent tools, prefer narrow, parameterized actions over broad capabilities. A tool that can only do one thing with one configurable input is far safer to hand an autonomous system than a general-purpose escape hatch.
