---
id: INS-260410-CD79
domain: ai-development
topic: agent-patterns
title: >-
  Minimal scaffolding beats prescriptive workflows when the underlying model is
  strong
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-design
  - scaffolding
  - claude
  - swe-bench
  - control-flow
sources:
  - type: blog
    title: Claude SWE-Bench Performance
    url: 'https://www.anthropic.com/engineering/swe-bench-sonnet'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Anthropic's SOTA SWE-bench agent used only a prompt plus a Bash tool and an
    edit tool, deliberately avoiding hardcoded step transitions.
  standard: >-
    For the Claude 3.5 Sonnet SWE-bench agent, Anthropic's design philosophy was
    to give as much control as possible to the language model and keep the
    scaffolding minimal. The agent had a single prompt, a Bash tool, and a
    str_replace editor tool, and sampled until the model itself decided it was
    done or hit the 200k context limit. The prompt suggested an approach but did
    not enforce strict state transitions.


    This contradicts the common instinct to chain many specialized sub-agents,
    routers, and finite-state machines. The bet is that a capable base model
    will make better local decisions than a human-designed workflow can
    anticipate, and that rigid scaffolds actively harm performance by preventing
    the model from adapting. The 49% result — SOTA at the time — was achieved
    with this setup, while many heavier scaffolds underperformed it.


    The practical implication: when building agents on frontier models, start
    with the thinnest possible scaffold (prompt + a few general tools) and only
    add structure when you can show empirically that it helps. Complexity in the
    scaffold is often a symptom of not trusting the model.
stance: >-
  Keep agent scaffolds minimal and let the model choose its own control flow;
  heavy hardcoded workflows throw away the model's judgment.
related:
  - INS-260410-38C8
  - INS-260327-7F56
  - INS-260320-9D89
  - INS-260403-9B5D
  - INS-260323-4B4D
---
For the Claude 3.5 Sonnet SWE-bench agent, Anthropic's design philosophy was to give as much control as possible to the language model and keep the scaffolding minimal. The agent had a single prompt, a Bash tool, and a str_replace editor tool, and sampled until the model itself decided it was done or hit the 200k context limit. The prompt suggested an approach but did not enforce strict state transitions.

This contradicts the common instinct to chain many specialized sub-agents, routers, and finite-state machines. The bet is that a capable base model will make better local decisions than a human-designed workflow can anticipate, and that rigid scaffolds actively harm performance by preventing the model from adapting. The 49% result — SOTA at the time — was achieved with this setup, while many heavier scaffolds underperformed it.

The practical implication: when building agents on frontier models, start with the thinnest possible scaffold (prompt + a few general tools) and only add structure when you can show empirically that it helps. Complexity in the scaffold is often a symptom of not trusting the model.
