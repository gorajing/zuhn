---
id: INS-260627-045B
domain: ai-development
topic: claude-code
title: 'AI coding quality is now a skills problem, not a model problem'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-skills
  - coding-agents
  - developer-workflow
  - tooling
sources:
  - type: youtube
    title: "AI Didn’t Kill the Web, It Moved in! —\_Olivier Leplus (AWS) & Yohan Lasorsa (Microsoft)"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=XZ0boOjtbNo'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    In 2026 the question stopped being 'can AI code my app' and became 'how do I
    configure skills to get the best results' — the differentiator is tooling,
    not the model.
  standard: >-
    The speakers argue that developers who complain AI 'never gets it exactly
    right' are mostly missing the skills layer, not hitting a model ceiling.
    Skills are lightweight, text-format plugins built on an open specification
    supported by most coding agents; they add domain expertise, new capabilities
    not built into the agent, and—critically—encode repeatable workflows. Their
    demo agent used skills for GitHub CLI access, front-end design, Playwright
    video recording, and a custom Telegram-notification tunnel, all composed
    into one autonomous feature-implementation flow.


    The practical implication is that investment in agent quality should shift
    from chasing the newest model toward building and curating a skills library
    plus an AGENTS.md that describes your repeatable workflows. A standard
    config file (AGENTS.md, now read by almost all coding agents) let them
    declare rules like 'record a short video on every change' and 'don't close
    the GitHub issue until I confirm.' This reframes 'getting good AI output'
    from a prompting-luck problem into an engineering discipline: the team that
    builds better skills and workflow scaffolding out-codes the team using the
    same model with none.
stance: >-
  The gap between good and bad results from AI coding agents is primarily
  determined by the skills and tooling you configure, not by the underlying
  model's raw capability.
related:
  - INS-260329-B4E7
  - INS-260605-1FD9
  - INS-260627-B3FF
  - INS-260530-D34F
  - INS-260327-1FA1
---
The speakers argue that developers who complain AI 'never gets it exactly right' are mostly missing the skills layer, not hitting a model ceiling. Skills are lightweight, text-format plugins built on an open specification supported by most coding agents; they add domain expertise, new capabilities not built into the agent, and—critically—encode repeatable workflows. Their demo agent used skills for GitHub CLI access, front-end design, Playwright video recording, and a custom Telegram-notification tunnel, all composed into one autonomous feature-implementation flow.

The practical implication is that investment in agent quality should shift from chasing the newest model toward building and curating a skills library plus an AGENTS.md that describes your repeatable workflows. A standard config file (AGENTS.md, now read by almost all coding agents) let them declare rules like 'record a short video on every change' and 'don't close the GitHub issue until I confirm.' This reframes 'getting good AI output' from a prompting-luck problem into an engineering discipline: the team that builds better skills and workflow scaffolding out-codes the team using the same model with none.
