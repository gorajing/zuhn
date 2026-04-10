---
id: INS-260410-87B5
domain: ai-development
topic: prompting
title: >-
  The think tool underperforms without domain-specific examples in the system
  prompt
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompting
  - few-shot
  - agents
  - system-prompt
  - tool-use
sources:
  - type: blog
    title: 'The "think" tool: Enabling Claude to stop and think'
    url: 'https://www.anthropic.com/engineering/claude-think-tool'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Bare think tool: +7pts. Think tool + optimized prompt with reasoning
    examples: +20pts (54% relative). The prompt is the lever.
  standard: >-
    On tau-bench's airline domain, Claude 3.7 Sonnet scored 0.332 baseline,
    0.404 with just the think tool, and 0.584 with the think tool plus an
    optimized prompt showing worked examples of how to reason inside it. The
    jump from 'tool available' to 'tool with examples' was larger than the jump
    from 'nothing' to 'tool available'. The model doesn't automatically know
    what good thinking looks like in your domain — you have to demonstrate it.


    Effective examples listed the specific rules that apply, checked whether
    required information was collected, verified planned actions against
    policies, and iterated over tool results for correctness. They read almost
    like checklists embedded in XML tags. The generalization: when a model has
    latent capability but inconsistent application, few-shot examples of the
    *meta-process* (how to think) beat examples of the final output (what to
    say).


    On the easier retail domain, the think tool alone was enough — the extra
    prompting added little. This is a useful heuristic: invest in meta-process
    examples proportional to how complex and policy-dense the decision
    environment is.
stance: >-
  Merely exposing a think tool delivers modest gains; the large wins come from
  system-prompt examples showing exactly what to iterate over during the think
  step.
related:
  - INS-260409-1812
  - INS-260410-095B
  - INS-260410-6ABA
  - PRI-260405-49C0
  - INS-260409-17E9
  - INS-260325-9C89
---
On tau-bench's airline domain, Claude 3.7 Sonnet scored 0.332 baseline, 0.404 with just the think tool, and 0.584 with the think tool plus an optimized prompt showing worked examples of how to reason inside it. The jump from 'tool available' to 'tool with examples' was larger than the jump from 'nothing' to 'tool available'. The model doesn't automatically know what good thinking looks like in your domain — you have to demonstrate it.

Effective examples listed the specific rules that apply, checked whether required information was collected, verified planned actions against policies, and iterated over tool results for correctness. They read almost like checklists embedded in XML tags. The generalization: when a model has latent capability but inconsistent application, few-shot examples of the *meta-process* (how to think) beat examples of the final output (what to say).

On the easier retail domain, the think tool alone was enough — the extra prompting added little. This is a useful heuristic: invest in meta-process examples proportional to how complex and policy-dense the decision environment is.
