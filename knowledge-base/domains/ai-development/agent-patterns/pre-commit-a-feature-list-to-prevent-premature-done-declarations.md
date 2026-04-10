---
id: INS-260410-545A
domain: ai-development
topic: agent-patterns
title: Pre-commit a feature list to prevent premature 'done' declarations
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - verification
  - feature-tracking
  - anti-patterns
sources:
  - type: blog
    title: Effective harnesses for long-running agents
    url: >-
      https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Have the initializer write a comprehensive JSON feature list with each
    feature marked failing, and forbid the coding agent from editing anything
    except the passes field.
  standard: >-
    A consistent failure mode: a later agent looks at the partially-built
    project, sees progress, and decides the job is done. The fix is an
    externalized definition-of-done that the agent cannot drift away from.
    Anthropic's claude.ai clone had over 200 features in this list, each with
    category, description, and test steps, all initialized as 'passes: false.'


    Two design choices matter. First, JSON beats Markdown — empirically the
    model is less likely to inappropriately rewrite JSON structure. Second, lock
    the agent's edit permissions to a single field (passes) and use
    strongly-worded instructions like 'It is unacceptable to remove or edit
    tests.' The feature list becomes both the work plan and the completion
    criterion, eliminating the agent's ability to redefine 'done.'
stance: >-
  Agents will declare projects complete prematurely unless you give them an
  external checklist they cannot rewrite away.
related:
  - INS-260410-53C2
  - INS-260320-1B10
  - INS-260329-44C9
  - INS-260329-03B5
  - INS-260329-9BEF
---
A consistent failure mode: a later agent looks at the partially-built project, sees progress, and decides the job is done. The fix is an externalized definition-of-done that the agent cannot drift away from. Anthropic's claude.ai clone had over 200 features in this list, each with category, description, and test steps, all initialized as 'passes: false.'

Two design choices matter. First, JSON beats Markdown — empirically the model is less likely to inappropriately rewrite JSON structure. Second, lock the agent's edit permissions to a single field (passes) and use strongly-worded instructions like 'It is unacceptable to remove or edit tests.' The feature list becomes both the work plan and the completion criterion, eliminating the agent's ability to redefine 'done.'
