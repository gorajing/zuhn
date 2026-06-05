---
id: INS-260514-FEC8
domain: ai-development
topic: agent-patterns
title: >-
  Hooks enforce what rules can only suggest — programmatic guardrails vs
  judgment-based requests
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - hooks
  - guardrails
  - programmatic-enforcement
  - agent-control
  - high-stakes-constraints
sources:
  - type: youtube
    title: Codex 마스터 클래스 라이브 | 하네스 설계부터 서비스 배포까지 (라이브 마지막에는 작은 이벤트도 준비했습니다)
    author: 개발동생
    url: 'https://www.youtube.com/live/F5pr-hfyuEE'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Rules = judgment ('please don't access .env'). Hooks = enforcement (the
    access actually fails). For high-stakes constraints, use hooks not rules —
    agents will eventually find reasons to ignore rules but cannot bypass hooks.
  standard: >-
    Manu's distinction between rule-based and hook-based control: 'You can think
    of a hook as a function that allows you to enforce this through programming
    logic, rather than having the agent simply read and make a judgment.' What
    hooks fire on: session-start, prompt-submitted, before-tool-use,
    turn-finished — any specific runtime event in the agent loop. Real-world
    example from the masterclass: 'I usually prevent agents from accessing the
    environment variables I have saved. We are now using hooks to completely
    block things like environment files from entering. In the field, since
    leaking information like environment data can cause a huge problem, we
    usually exclude everything using hooks, except for times when we need to
    proceed quickly such as during live sessions or lectures.' The rule version
    ('please don't access .env files'): agent might decide the user's explicit
    request justifies the access, or be confused about which file is the env
    file, or follow a chain of reasoning that ends with accessing it 'just this
    once.' The hook version: the bash call that touches .env returns an error
    before any decision is made. The agent never even gets to evaluate the rule.
    The general principle: any constraint where you don't want to depend on the
    agent's judgment must be expressed as a hook. Examples that should be hooks,
    not rules: (1) Don't push to main directly. (2) Don't send Slack messages
    without going through the formatter. (3) Don't make API calls without the
    auth wrapper. (4) Don't modify production database without an explicit
    approval token. The complementary pattern is to use rules for behavioral
    preferences where judgment is acceptable: (1) Prefer functional style over
    OO. (2) Add tests for new features. (3) Use TypeScript not JavaScript.
    Failure of judgment here is annoying, not catastrophic. The corollary for
    any agent framework: hooks aren't an advanced feature — they're THE feature
    for high-stakes deployment. Frameworks without hook support (or that bury
    hooks behind complex configuration) make it impossible to deploy agents
    safely in production environments where guarantees matter. This is why
    Pi.dev's hook system (Mario's PR-message-format hook) and Claude Code's
    pre-tool-use hooks are central to those frameworks, not peripheral.
stance: >-
  Rules in agent.md are JUDGMENT-based — the agent reads them and decides
  whether to follow them, which fails for high-stakes constraints (don't access
  .env files, don't send Slack messages in wrong format, don't push to main
  without review) — hooks are PROGRAMMATIC enforcement triggered at specific
  runtime events (session-start, prompt-submitted, before-tool-use,
  turn-finished), and the right policy is to express critical constraints as
  hooks not rules.
related:
  - INS-260320-DDFE
  - INS-260320-949A
  - PRI-260320-C14C
  - INS-260330-4E68
  - INS-260605-A2B7
  - INS-260329-67CB
  - PRI-260403-9E80
  - INS-260320-7379
---
Manu's distinction between rule-based and hook-based control: 'You can think of a hook as a function that allows you to enforce this through programming logic, rather than having the agent simply read and make a judgment.' What hooks fire on: session-start, prompt-submitted, before-tool-use, turn-finished — any specific runtime event in the agent loop. Real-world example from the masterclass: 'I usually prevent agents from accessing the environment variables I have saved. We are now using hooks to completely block things like environment files from entering. In the field, since leaking information like environment data can cause a huge problem, we usually exclude everything using hooks, except for times when we need to proceed quickly such as during live sessions or lectures.' The rule version ('please don't access .env files'): agent might decide the user's explicit request justifies the access, or be confused about which file is the env file, or follow a chain of reasoning that ends with accessing it 'just this once.' The hook version: the bash call that touches .env returns an error before any decision is made. The agent never even gets to evaluate the rule. The general principle: any constraint where you don't want to depend on the agent's judgment must be expressed as a hook. Examples that should be hooks, not rules: (1) Don't push to main directly. (2) Don't send Slack messages without going through the formatter. (3) Don't make API calls without the auth wrapper. (4) Don't modify production database without an explicit approval token. The complementary pattern is to use rules for behavioral preferences where judgment is acceptable: (1) Prefer functional style over OO. (2) Add tests for new features. (3) Use TypeScript not JavaScript. Failure of judgment here is annoying, not catastrophic. The corollary for any agent framework: hooks aren't an advanced feature — they're THE feature for high-stakes deployment. Frameworks without hook support (or that bury hooks behind complex configuration) make it impossible to deploy agents safely in production environments where guarantees matter. This is why Pi.dev's hook system (Mario's PR-message-format hook) and Claude Code's pre-tool-use hooks are central to those frameworks, not peripheral.
