---
id: INS-260410-AB4A
domain: ai-development
topic: prompting
title: Claude can self-improve prompts and tool descriptions
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - self-improvement
  - mcp
  - tools
  - prompt-engineering
sources:
  - type: blog
    title: How we built our multi-agent research system
    url: 'https://www.anthropic.com/engineering/multi-agent-research-system'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Anthropic built a tool-testing agent that used a flawed MCP tool, then
    rewrote its description — future agents using the new description completed
    tasks 40% faster.
  standard: >-
    A non-obvious production lesson: Claude 4 models are themselves strong
    prompt engineers. When Anthropic gave a model a failing prompt and the
    failure mode, it could diagnose why and propose a better version. They
    operationalized this by creating a tool-testing agent whose job was to
    attempt to use a flawed MCP tool dozens of times, discover its bugs and
    sharp edges, and then rewrite the tool description to preempt those
    failures.


    The measured result: a 40% decrease in task completion time for subsequent
    agents using the rewritten description. That's a huge ROI for an automated
    improvement loop on an asset — tool descriptions — that developers usually
    write once and forget.


    The generalizable principle: when the artifact you want to improve is a
    natural-language description or prompt, and you have a way to generate
    failures, the LLM itself is the most efficient optimizer. This is the kind
    of recursive leverage that only exists in LLM-based systems and should be
    reached for aggressively.
stance: >-
  Letting Claude rewrite its own agent prompts and MCP tool descriptions based
  on observed failures is a high-leverage improvement loop.
related:
  - INS-260320-A4BF
  - INS-260330-8920
  - INS-260403-9B5D
  - INS-260403-C584
  - INS-260410-A1E9
  - INS-260323-E15F
  - PRI-260407-D1AD
  - INS-260323-AF7B
  - PRI-260406-C4D0
  - INS-260410-358E
---
A non-obvious production lesson: Claude 4 models are themselves strong prompt engineers. When Anthropic gave a model a failing prompt and the failure mode, it could diagnose why and propose a better version. They operationalized this by creating a tool-testing agent whose job was to attempt to use a flawed MCP tool dozens of times, discover its bugs and sharp edges, and then rewrite the tool description to preempt those failures.

The measured result: a 40% decrease in task completion time for subsequent agents using the rewritten description. That's a huge ROI for an automated improvement loop on an asset — tool descriptions — that developers usually write once and forget.

The generalizable principle: when the artifact you want to improve is a natural-language description or prompt, and you have a way to generate failures, the LLM itself is the most efficient optimizer. This is the kind of recursive leverage that only exists in LLM-based systems and should be reached for aggressively.
