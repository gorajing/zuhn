---
id: INS-260605-A705
domain: ai-development
topic: agent-patterns
title: Commit before letting an agent modify code so it can recover prior state
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agentic-coding
  - git
  - best-practices
  - safety
sources:
  - type: youtube
    title: >-
      Beyond Code Coverage: Functionality Testing with Playwright MCP — Marlene
      Mhangami, Microsoft
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=FWEInOtngmM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Always commit before an agent starts changing code, because it may not
    remember what the code looked like before.
  standard: >-
    A practical best practice from running coding agents: commit your code
    before instructing the agent to fix tests or otherwise modify the codebase.
    Agents have limited and lossy memory of prior state, so without a commit
    boundary there's no reliable anchor to revert to or compare against if the
    agent's changes go wrong. The commit acts as an externalized checkpoint that
    compensates for the agent's unreliable working memory. Related practices
    from the same workflow: generate one test per feature (not per method),
    attach Playwright's automatic test screenshots to the PR as evidence, and
    run tests headless in the background once you trust the flow.
stance: >-
  Committing code before an agent edits it is necessary because the agent cannot
  reliably recall the pre-edit state otherwise.
related:
  - INS-260410-2C51
  - INS-260514-6DF3
  - INS-260530-D34F
  - INS-260524-63C9
  - INS-260501-FD20
---
A practical best practice from running coding agents: commit your code before instructing the agent to fix tests or otherwise modify the codebase. Agents have limited and lossy memory of prior state, so without a commit boundary there's no reliable anchor to revert to or compare against if the agent's changes go wrong. The commit acts as an externalized checkpoint that compensates for the agent's unreliable working memory. Related practices from the same workflow: generate one test per feature (not per method), attach Playwright's automatic test screenshots to the PR as evidence, and run tests headless in the background once you trust the flow.
