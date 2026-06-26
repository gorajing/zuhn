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
  - INS-260330-8920
  - INS-260403-C584
  - INS-260530-D34F
  - INS-260625-78C1
  - INS-260605-7A70
  - INS-260323-E15F
  - INS-260625-D938
  - INS-260522-C5C2
---
A non-obvious production lesson: Claude 4 models are themselves strong prompt engineers. When Anthropic gave a model a failing prompt and the failure mode, it could diagnose why and propose a better version. They operationalized this by creating a tool-testing agent whose job was to attempt to use a flawed MCP tool dozens of times, discover its bugs and sharp edges, and then rewrite the tool description to preempt those failures.

The measured result: a 40% decrease in task completion time for subsequent agents using the rewritten description. That's a huge ROI for an automated improvement loop on an asset — tool descriptions — that developers usually write once and forget.

The generalizable principle: when the artifact you want to improve is a natural-language description or prompt, and you have a way to generate failures, the LLM itself is the most efficient optimizer. This is the kind of recursive leverage that only exists in LLM-based systems and should be reached for aggressively.
