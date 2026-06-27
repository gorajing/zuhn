---
id: INS-260627-A0EE
domain: ai-development
topic: mcp
title: 'Complete tool documentation is a security control, not just usability'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - mcp
  - security
  - tool-poisoning
  - documentation
  - prompt-injection
sources:
  - type: youtube
    title: "Your Insecure MCP Server Won't Survive Production —\_Tun Shwe, Lenses"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BurJvbqFr4c'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Thorough tool descriptions are a defensive layer: ambiguity in your docs is
    the gap an attacker-controlled neighboring tool uses to shadow yours.
  standard: >-
    Tool poisoning (OWASP MCP #3) works by embedding malicious instructions in
    tool descriptions that are invisible in the UI but executed by the model.
    The non-obvious defense Tun Shwe proposes is that documentation completeness
    is itself a control: if a neighboring MCP server (which the agent also reads
    on discovery) carries an attacker-controlled description, it can shadow or
    override the behavior the model attributes to your tool, but only to the
    extent your own description leaves interpretive room.


    Writing clear and complete instructions for every tool 'crowds out the space
    that a poisoned neighboring server would try to fill.' This inverts the
    usual framing where docs are a usability nicety the agent happens to
    consume. Because the agent treats every description as authoritative
    instruction, under-specified docs are not merely confusing, they are an
    unguarded slot in the model's instruction space that an adversary can
    occupy.


    Actionably: treat every tool description as security-sensitive copy. Specify
    intended behavior, constraints, and what the tool does not do, so the model
    has no ambiguity for a competing description to resolve in the attacker's
    favor. This pairs with the broader principle that an agent will use anything
    you give it with confidence, so the interface itself must carry the trust
    layer.
stance: >-
  Writing clear, complete, unambiguous tool descriptions defends against tool
  poisoning by crowding out the space a malicious neighboring server would fill.
related:
  - INS-260410-A1E9
  - INS-260605-92FF
  - INS-260626-475E
  - INS-260627-6217
  - INS-260602-EA48
  - INS-260627-1B54
  - INS-260627-1CF9
  - INS-260627-F522
---
Tool poisoning (OWASP MCP #3) works by embedding malicious instructions in tool descriptions that are invisible in the UI but executed by the model. The non-obvious defense Tun Shwe proposes is that documentation completeness is itself a control: if a neighboring MCP server (which the agent also reads on discovery) carries an attacker-controlled description, it can shadow or override the behavior the model attributes to your tool, but only to the extent your own description leaves interpretive room.

Writing clear and complete instructions for every tool 'crowds out the space that a poisoned neighboring server would try to fill.' This inverts the usual framing where docs are a usability nicety the agent happens to consume. Because the agent treats every description as authoritative instruction, under-specified docs are not merely confusing, they are an unguarded slot in the model's instruction space that an adversary can occupy.

Actionably: treat every tool description as security-sensitive copy. Specify intended behavior, constraints, and what the tool does not do, so the model has no ambiguity for a competing description to resolve in the attacker's favor. This pairs with the broader principle that an agent will use anything you give it with confidence, so the interface itself must carry the trust layer.
