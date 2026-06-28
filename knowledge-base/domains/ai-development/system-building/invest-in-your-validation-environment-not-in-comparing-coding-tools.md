---
id: INS-260627-84F1
domain: ai-development
topic: system-building
title: 'Invest in your validation environment, not in comparing coding tools'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - roi
  - tool-selection
  - agents-md
  - linters
  - investment
  - devx
  - org-practices
sources:
  - type: youtube
    title: 'Making Codebases Agent Ready – Eno Reyes, Factory AI'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ShuJ_CN6zr4'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Spending 45 days to pick a tool that's 10% better on SWE-bench is worse ROI
    than improving the validation environment that makes every agent succeed.
  standard: >-
    Reyes frames the core organizational decision as a choice: spend 45 days
    comparing every coding tool to find one that's 10% better on SWE-bench, or
    change organizational practices (linters, tests, AGENTS.md files, docs) that
    let *all* coding agents succeed — and then let developers pick whichever
    tool they like. The second path dominates because the environment investment
    is tool-agnostic: a better validation loop enhances every tool you procure,
    whether it's a code-review tool, a coding agent, or something else. This is
    the new DevX loop leaders can invest in, distinct from the old opex model of
    'we need 10 more people.'


    This also reframes the developer's role: agents will keep improving at
    finding solutions, search, and deciding when to run lint/tests, but they
    will never conjure validation criteria out of thin air. So humans shift to
    curating the environment — setting constraints, building automations,
    injecting opinionatedness. Concretely, agents can now identify and remediate
    the gaps themselves ('find where our linters aren't opinionated enough,'
    'generate tests'), and the diagnostic spans eight pillars of automated
    validation. The payoff is structural: one opinionated engineer who can say
    'here's how I want software built' can meaningfully change the velocity of
    an entire business.
stance: >-
  Improving organizational validation infrastructure yields more agent ROI than
  spending weeks selecting the marginally-best coding tool.
related:
  - INS-260410-CD79
  - INS-260410-AB4A
  - INS-260323-4457
  - INS-260602-EA48
  - PRI-260406-B9B4
  - INS-260403-8EF3
---
Reyes frames the core organizational decision as a choice: spend 45 days comparing every coding tool to find one that's 10% better on SWE-bench, or change organizational practices (linters, tests, AGENTS.md files, docs) that let *all* coding agents succeed — and then let developers pick whichever tool they like. The second path dominates because the environment investment is tool-agnostic: a better validation loop enhances every tool you procure, whether it's a code-review tool, a coding agent, or something else. This is the new DevX loop leaders can invest in, distinct from the old opex model of 'we need 10 more people.'

This also reframes the developer's role: agents will keep improving at finding solutions, search, and deciding when to run lint/tests, but they will never conjure validation criteria out of thin air. So humans shift to curating the environment — setting constraints, building automations, injecting opinionatedness. Concretely, agents can now identify and remediate the gaps themselves ('find where our linters aren't opinionated enough,' 'generate tests'), and the diagnostic spans eight pillars of automated validation. The payoff is structural: one opinionated engineer who can say 'here's how I want software built' can meaningfully change the velocity of an entire business.
