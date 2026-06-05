---
id: INS-260605-DF82
domain: ai-development
topic: infrastructure
title: 'Run agents in VMs, not containers, for true isolation'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - sandboxing
  - vm
  - containers
  - security
  - isolation
  - agent-runtime
sources:
  - type: youtube
    title: 'The Missing Primitive for Agent Swarms — Lou Bichard, Ona'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=5Sui_OnSRlY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    For agents running real development tasks, prefer VMs over containers
    because containers leak across the isolation boundary and create
    noisy-neighbor compute contention.
  standard: >-
    The runtime spectrum for agents runs from separate threads, to git
    worktrees, to containers, to VMs/micro-VMs. Bichard argues that for proper
    development tasks — where an agent runs untrusted-ish code at scale — only a
    VM provides adequate isolation. Two reasons: security (a container is not a
    bulletproof isolation boundary, so a compromised or runaway agent can
    escape) and resource contention (containers on Kubernetes/pods are bursty
    and suffer noisy-neighbor problems when many agents run concurrently).


    The 'sandbox' conversation has blurred this distinction, with vendors
    loosely calling any isolated environment a sandbox. The practical takeaway
    is to match the isolation boundary to the threat model: lightweight
    worktrees or threads are fine for read-mostly or trusted tasks, but full VM
    isolation is the safer default once agents are autonomously executing and
    committing code across an organization.
stance: >-
  Proper autonomous development agents should run inside virtual machines rather
  than containers because containers are not a bulletproof security or
  resource-isolation boundary.
related:
  - INS-260605-5EE0
  - INS-260603-1BC0
  - INS-260605-74CC
  - INS-260325-D540
  - INS-260605-A803
  - INS-260605-41AE
  - INS-260605-D78B
---
The runtime spectrum for agents runs from separate threads, to git worktrees, to containers, to VMs/micro-VMs. Bichard argues that for proper development tasks — where an agent runs untrusted-ish code at scale — only a VM provides adequate isolation. Two reasons: security (a container is not a bulletproof isolation boundary, so a compromised or runaway agent can escape) and resource contention (containers on Kubernetes/pods are bursty and suffer noisy-neighbor problems when many agents run concurrently).

The 'sandbox' conversation has blurred this distinction, with vendors loosely calling any isolated environment a sandbox. The practical takeaway is to match the isolation boundary to the threat model: lightweight worktrees or threads are fine for read-mostly or trusted tasks, but full VM isolation is the safer default once agents are autonomously executing and committing code across an organization.
