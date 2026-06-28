---
id: INS-260514-6DF3
domain: ai-development
topic: system-design
title: >-
  Lint failures and tests as prompts — load-bearing infrastructure for AI-driven
  development
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - lint-as-prompt
  - test-as-prompt
  - harness-engineering
  - context-injection
sources:
  - type: youtube
    title: "Harness Engineering: How to Build Software When Humans Steer, Agents Execute —\_Ryan Lopopolo, OpenAI"
    author: AI Engineer
    url: 'https://youtu.be/am_oeAoUhew'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Lint errors aren't just 'don't merge this' — they're prompts that surface
    what good code looks like to the agent at the moment the agent is writing
    it.
  standard: >-
    Lopopolo's reframing of linters and tests: traditionally these are gates
    that block merges or quality controls. In agent-driven development, they
    function as just-in-time context injection. The agent generates code; lint
    fires with a specific error like 'parse don't validate at the edge — you
    have a Zod schema, use it'; the agent receives this as a prompt to
    self-correct. Tests can assert structural properties (file length ≤350
    lines, single canonical implementation of common patterns, package privacy)
    not just behavioral correctness. Good error messages aren't 'this is wrong'
    — they're remediation prompts: 'here's why and what to do next.' Every form
    of injecting context into the agent has become a kind of prompt: rules
    files, skill files, lint errors, test failures, reviewer agent comments. The
    author dryly notes: 'prompts, prompts, prompts, prompts.'


    Application: when designing agent-friendly codebases, treat every existing
    gate (lint, test, type check, review comment) as a prompt-injection surface.
    Improve error messages to function as instructions, not just diagnostics.
    The harness pattern of injecting context via tests is directly applicable to
    Memric's audit-deliverable validation: every validator that catches a bad
    principle should also surface what a good principle would look like, as a
    prompt for the next attempt.
stance: >-
  In agent-driven development, lint errors and test failures function as
  just-in-time prompts that surface what good code looks like to the agent at
  exactly the moment that context is most relevant — making linters and tests
  'load-bearing infrastructure for our AI future,' not just code-quality gates.
related:
  - INS-260329-A6FB
  - INS-260329-5ECD
  - INS-260410-E27A
  - INS-260410-545A
  - INS-260626-690F
  - INS-260605-A705
  - INS-260605-77EB
  - INS-260530-D34F
---
Lopopolo's reframing of linters and tests: traditionally these are gates that block merges or quality controls. In agent-driven development, they function as just-in-time context injection. The agent generates code; lint fires with a specific error like 'parse don't validate at the edge — you have a Zod schema, use it'; the agent receives this as a prompt to self-correct. Tests can assert structural properties (file length ≤350 lines, single canonical implementation of common patterns, package privacy) not just behavioral correctness. Good error messages aren't 'this is wrong' — they're remediation prompts: 'here's why and what to do next.' Every form of injecting context into the agent has become a kind of prompt: rules files, skill files, lint errors, test failures, reviewer agent comments. The author dryly notes: 'prompts, prompts, prompts, prompts.'

Application: when designing agent-friendly codebases, treat every existing gate (lint, test, type check, review comment) as a prompt-injection surface. Improve error messages to function as instructions, not just diagnostics. The harness pattern of injecting context via tests is directly applicable to Memric's audit-deliverable validation: every validator that catches a bad principle should also surface what a good principle would look like, as a prompt for the next attempt.
