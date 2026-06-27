---
id: INS-260627-F522
domain: ai-development
topic: mcp
title: >-
  Wrap third-party tools in use-case-specific descriptions to steer agent
  behavior
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - tool-wrapping
  - context-engineering
  - agent-patterns
  - prompting
sources:
  - type: youtube
    title: "Bending a Public MCP Server Without Breaking It —\_Nimrod Hauser, Baz"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=U00AOI1eJUE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Wrap each third-party tool so it invokes the original function unchanged but
    carries a richer, hand-tuned description that encodes your team's hard-won
    operating knowledge.
  standard: >-
    The wrapping pattern creates a new tool whose implementation simply calls
    the original tool — identical behavior — but swaps in an enhanced
    description tailored to your workflow. This lets you encode experiential
    knowledge directly into the agent's decision surface: 'before calling click
    or hover, first call the accessibility snapshot tool,' or 'always prefer the
    accessibility snapshot over the visual snapshot.' The agent now knows your
    preferred sequencing and tool preferences without any prompt-level reminders
    or code changes to the upstream MCP.


    This is pure context engineering and it is bidirectional: wrapping makes
    descriptions longer and adds to the context window, which is the opposite of
    curation (removing unused tools to shrink it). The speaker frames the whole
    exercise as a juggling act with no one-size-fits-all answer — sometimes you
    trim the tool set to ease the agent's choice, sometimes you deliberately
    spend context budget on verbose, opinionated descriptions because the
    behavioral steering is worth it. The skill is knowing which lever to pull
    for a given use case.
stance: >-
  Rewriting a third-party tool's description for your specific use case is the
  highest-leverage way to change agent behavior without touching the tool's
  underlying code.
related:
  - INS-260627-DF4B
  - INS-260627-6217
  - INS-260410-60C8
  - INS-260626-475E
  - INS-260627-A0EE
---
The wrapping pattern creates a new tool whose implementation simply calls the original tool — identical behavior — but swaps in an enhanced description tailored to your workflow. This lets you encode experiential knowledge directly into the agent's decision surface: 'before calling click or hover, first call the accessibility snapshot tool,' or 'always prefer the accessibility snapshot over the visual snapshot.' The agent now knows your preferred sequencing and tool preferences without any prompt-level reminders or code changes to the upstream MCP.

This is pure context engineering and it is bidirectional: wrapping makes descriptions longer and adds to the context window, which is the opposite of curation (removing unused tools to shrink it). The speaker frames the whole exercise as a juggling act with no one-size-fits-all answer — sometimes you trim the tool set to ease the agent's choice, sometimes you deliberately spend context budget on verbose, opinionated descriptions because the behavioral steering is worth it. The skill is knowing which lever to pull for a given use case.
