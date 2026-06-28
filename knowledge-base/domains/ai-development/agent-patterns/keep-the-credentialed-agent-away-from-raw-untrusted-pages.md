---
id: INS-260627-6744
domain: ai-development
topic: agent-patterns
title: Keep the credentialed agent away from raw untrusted pages
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - browser-agents
  - security
  - tool-use
  - prompt-injection
  - agentrun
sources:
  - type: blog
    title: >-
      GitHub - NotASithLord/peerd: The first AI agent harness native to the
      browser. A Chrome/Firefox extension that runs the agent loop in your
      browser — drives your tabs, spins up sandboxed compute (JS notebooks, WASM
      Linux VMs, client-side apps), and shares what it builds peer-to-peer. BYOK
      · no backend · no telemetry.
    url: 'https://github.com/NotASithLord/peerd'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Put raw DOM/page interaction in a disposable runner and return only fenced,
    untrusted summaries to the main agent.
  standard: >-
    peerd's strongest reusable pattern is the do/get/check boundary: the main
    agent plans and dispatches, but a clean-context runner with no keys,
    narrowed tools, and no independent network reads or drives the page. The
    runner wraps page content as untrusted, performs the browser action or
    observation, and returns a constrained summary that is wrapped again before
    re-entering the main conversation.


    The tradeoff is extra orchestration and occasional loss of fidelity compared
    with letting the main agent inspect raw DOM state directly. The benefit is
    that prompt-injected web content has fewer paths to exfiltrate credentials
    or steer privileged tools. For Zuhn and AgentRun, this argues for treating
    web/page evidence as tainted inputs with explicit provenance and using a
    separate read-only collector before high-authority synthesis or mutation
    steps.


    A verification hook should assert the boundary structurally: runner-only DOM
    tools must be hidden from the main agent, secrets must only be accessible
    from the provider/egress layer, and action completion should be checked
    against the live page before being recorded as done.
stance: >-
  Browser or web agents should isolate raw page reading from the main
  credentialed agent, because prompt-injected page content can otherwise reach
  secrets, tools, and policy decisions in the same context.
related:
  - INS-260626-4BC2
  - INS-260627-85C7
  - INS-260410-796F
  - INS-260628-C374
  - INS-260625-7A1A
---
peerd's strongest reusable pattern is the do/get/check boundary: the main agent plans and dispatches, but a clean-context runner with no keys, narrowed tools, and no independent network reads or drives the page. The runner wraps page content as untrusted, performs the browser action or observation, and returns a constrained summary that is wrapped again before re-entering the main conversation.

The tradeoff is extra orchestration and occasional loss of fidelity compared with letting the main agent inspect raw DOM state directly. The benefit is that prompt-injected web content has fewer paths to exfiltrate credentials or steer privileged tools. For Zuhn and AgentRun, this argues for treating web/page evidence as tainted inputs with explicit provenance and using a separate read-only collector before high-authority synthesis or mutation steps.

A verification hook should assert the boundary structurally: runner-only DOM tools must be hidden from the main agent, secrets must only be accessible from the provider/egress layer, and action completion should be checked against the live page before being recorded as done.
