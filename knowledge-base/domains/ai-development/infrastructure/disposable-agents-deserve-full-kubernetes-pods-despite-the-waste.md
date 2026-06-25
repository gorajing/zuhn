---
id: INS-260605-9976
domain: ai-development
topic: infrastructure
title: Disposable agents deserve full Kubernetes pods despite the waste
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - kubernetes
  - disposable-agents
  - sandboxing
  - agent-infrastructure
  - orchestration
sources:
  - type: youtube
    title: 'Scaling Agents on Kubernetes with acpx and ACP — Onur Solmaz, OpenClaw'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VaS2h-dY1-4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    One-agent-per-task scaling means provisioning full pods per agent —
    wasteful, but a full computer makes an agent far more capable than a
    constrained sandbox.
  standard: >-
    Solmaz's enterprise orchestrator spins up a full Kubernetes pod per agent
    task rather than a lighter sandbox. He concedes this is wasteful, but argues
    it's the better abstraction: OpenClaw demonstrated that giving an agent a
    full computer makes it dramatically more powerful than confining it to a
    narrow tool surface. The model is on-demand, disposable agents — one per
    task — that create and edit files with state synchronized (he gestures at
    rsync/Dropbox-style sync) and full read-write access.


    The architectural tradeoff is capability-per-agent versus density-per-host.
    Lighter virtualization (he notes OpenHands uses Firecracker microVMs) packs
    more agents per machine, but a full pod gives the agent an unconstrained
    environment that more closely matches what a human developer has. For
    high-value enterprise tasks where the inference and the outcome dwarf the
    compute overhead, paying for a full pod per disposable agent is a defensible
    default — the waste is real but secondary to the capability gain.
stance: >-
  Giving each disposable agent a full computer (a Kubernetes pod) is the right
  abstraction even though it is resource-wasteful.
related:
  - INS-260325-160E
  - INS-260330-77BB
  - INS-260410-0142
  - INS-260410-77E5
  - INS-260421-7ADE
  - INS-260501-91C2
  - INS-260605-3553
  - INS-260605-A803
  - PRI-260328-8317
  - PRI-260328-1ED1
---
Solmaz's enterprise orchestrator spins up a full Kubernetes pod per agent task rather than a lighter sandbox. He concedes this is wasteful, but argues it's the better abstraction: OpenClaw demonstrated that giving an agent a full computer makes it dramatically more powerful than confining it to a narrow tool surface. The model is on-demand, disposable agents — one per task — that create and edit files with state synchronized (he gestures at rsync/Dropbox-style sync) and full read-write access.

The architectural tradeoff is capability-per-agent versus density-per-host. Lighter virtualization (he notes OpenHands uses Firecracker microVMs) packs more agents per machine, but a full pod gives the agent an unconstrained environment that more closely matches what a human developer has. For high-value enterprise tasks where the inference and the outcome dwarf the compute overhead, paying for a full pod per disposable agent is a defensible default — the waste is real but secondary to the capability gain.
