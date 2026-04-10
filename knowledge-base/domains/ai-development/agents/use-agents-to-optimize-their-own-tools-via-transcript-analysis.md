---
id: INS-260410-83EC
domain: ai-development
topic: agents
title: Use agents to optimize their own tools via transcript analysis
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - self-improvement
  - claude-code
  - tool-optimization
  - evaluation
sources:
  - type: blog
    title: Writing effective tools for AI agents—using AI agents
    url: 'https://www.anthropic.com/engineering/writing-tools-for-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Claude Code is an expert at reading evaluation transcripts and refactoring
    tool implementations and descriptions to improve performance.
  standard: >-
    Anthropic reports that most of the advice in their guide came from
    repeatedly optimizing internal tools with Claude Code, and that held-out
    test sets revealed performance improvements beyond what expert researchers
    could achieve manually. The loop: run evaluation, dump transcripts into
    Claude Code, let it identify rough edges and rewrite descriptions and
    implementations, re-evaluate.


    What matters is reading between the lines. Agents don't always say what they
    mean — what they omit from feedback is often more important than what they
    include. Review raw transcripts including tool calls and responses, not just
    the agent's chain of thought. Redundant calls suggest pagination issues;
    invalid parameter errors suggest unclear descriptions.


    This generalizes: any system where the agent's behavior is observable and
    measurable can become a self-improving loop where the agent suggests
    refinements that a human evaluator approves.
stance: >-
  Concatenating evaluation transcripts and pasting them into Claude Code
  produces tool improvements beyond what expert humans write by hand.
related:
  - INS-260320-1B10
  - INS-260403-10CE
  - PRI-260407-F684
  - INS-260329-1DA3
  - PRI-260328-9F8C
---
Anthropic reports that most of the advice in their guide came from repeatedly optimizing internal tools with Claude Code, and that held-out test sets revealed performance improvements beyond what expert researchers could achieve manually. The loop: run evaluation, dump transcripts into Claude Code, let it identify rough edges and rewrite descriptions and implementations, re-evaluate.

What matters is reading between the lines. Agents don't always say what they mean — what they omit from feedback is often more important than what they include. Review raw transcripts including tool calls and responses, not just the agent's chain of thought. Redundant calls suggest pagination issues; invalid parameter errors suggest unclear descriptions.

This generalizes: any system where the agent's behavior is observable and measurable can become a self-improving loop where the agent suggests refinements that a human evaluator approves.
