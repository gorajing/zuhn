---
id: INS-260410-F40F
domain: ai-development
topic: agents
title: Build balanced problem sets to avoid one-sided optimization
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - dataset-design
  - optimization
  - agents
sources:
  - type: blog
    title: Demystifying evals for AI agents
    url: 'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    One-sided evals create one-sided optimization — if you only test when the
    agent should search, you'll get an agent that searches for everything.
  standard: >-
    When Anthropic built web-search evals for Claude.ai, they discovered that
    testing only 'did it search when it should' produced an agent that searched
    for almost everything. The fix was to add the other side: queries where the
    model should answer from existing knowledge ('who founded Apple?') alongside
    queries where it should fetch fresh data ('what's the weather?'). Striking
    the right balance between over-triggering and under-triggering required many
    rounds of refinement to both the prompts and the eval.


    The general principle is that any capability gated by a decision ('should I
    use this tool', 'should I escalate', 'should I ask for clarification') needs
    symmetric test coverage. Class-imbalanced evals silently reward the wrong
    defaults: an eval with 90% 'should search' cases makes 'always search' look
    like a 90% solution. Whenever you add a trigger behavior, immediately add
    the matching negative cases, and keep the ratio roughly balanced as real
    usage surfaces new edge cases.
stance: >-
  Evals must test both cases where a behavior should occur and cases where it
  should not, or optimization will drive the agent to over- or under-trigger
  that behavior.
related:
  - INS-260322-D6D7
  - INS-260322-D1AB
  - INS-260410-AA6E
  - INS-260404-0C67
  - INS-260325-55D8
  - INS-260402-CCC3
  - INS-260410-AF66
---
When Anthropic built web-search evals for Claude.ai, they discovered that testing only 'did it search when it should' produced an agent that searched for almost everything. The fix was to add the other side: queries where the model should answer from existing knowledge ('who founded Apple?') alongside queries where it should fetch fresh data ('what's the weather?'). Striking the right balance between over-triggering and under-triggering required many rounds of refinement to both the prompts and the eval.

The general principle is that any capability gated by a decision ('should I use this tool', 'should I escalate', 'should I ask for clarification') needs symmetric test coverage. Class-imbalanced evals silently reward the wrong defaults: an eval with 90% 'should search' cases makes 'always search' look like a 90% solution. Whenever you add a trigger behavior, immediately add the matching negative cases, and keep the ratio roughly balanced as real usage surfaces new edge cases.
