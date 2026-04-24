---
id: INS-260424-7A03
domain: ai-development
topic: infrastructure
title: >-
  CPUs are making a comeback for agent orchestration — general-purpose compute
  is back at the agent layer
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - cpu-comeback
  - agent-orchestration
  - general-purpose-compute
  - infrastructure-shift
sources:
  - type: youtube
    title: 'Next ''26: The Future of AI Infrastructure'
    author: Google Cloud
    url: 'https://youtu.be/PJQPMv8TqLA'
date_extracted: '2026-04-24'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Google Cloud lead: CPUs are going to make a comeback — there's a lot of
    general-purpose compute involved in running these agents, orchestrating
    inference, creating sandboxes, virtual machines to build code, run it, check
    results.
  standard: >-
    The 2023-2025 narrative around AI compute economics positioned specialized
    accelerators (TPUs, GPUs, custom ASICs) as the engine of value capture, with
    general-purpose CPUs reduced to a commodity supporting role. Agent-era
    workloads reverse this narrative partially. Agents do not just run
    inference; they orchestrate complex sequences of operations: spawn sandboxes
    for code execution, manage virtual machine lifecycles, dispatch tool calls,
    compose results across multiple model invocations, manage memory and state
    across long-running tasks. All of this is general-purpose compute that runs
    on CPUs efficiently and on specialized accelerators inefficiently. The
    implication for cloud providers: CPU capacity per agent is non-trivial and
    growing, which changes the economics of agent-heavy customer workloads. The
    implication for chip vendors: companies that bet entirely on specialized
    accelerators may be missing the agent-era CPU growth opportunity. The
    implication for buyers: when sizing AI infrastructure, the agent ratio (how
    many agent calls per inference call) determines CPU-to-accelerator ratio,
    and naive ratios designed for direct inference workloads will
    under-provision CPU.
stance: >-
  The agent era reverses the recent compute-economics trend toward
  all-specialized: agent orchestration requires significant general-purpose CPU
  compute for sandboxing, virtual machines, code execution, and tool dispatch;
  CPU demand will grow alongside specialized accelerators rather than being
  displaced by them
related:
  - INS-260325-F981
  - INS-260325-2FC1
  - INS-260424-2F93
  - PRI-260328-A82C
  - INS-260424-0554
  - PRI-260328-8317
  - INS-260325-BEAC
---
The 2023-2025 narrative around AI compute economics positioned specialized accelerators (TPUs, GPUs, custom ASICs) as the engine of value capture, with general-purpose CPUs reduced to a commodity supporting role. Agent-era workloads reverse this narrative partially. Agents do not just run inference; they orchestrate complex sequences of operations: spawn sandboxes for code execution, manage virtual machine lifecycles, dispatch tool calls, compose results across multiple model invocations, manage memory and state across long-running tasks. All of this is general-purpose compute that runs on CPUs efficiently and on specialized accelerators inefficiently. The implication for cloud providers: CPU capacity per agent is non-trivial and growing, which changes the economics of agent-heavy customer workloads. The implication for chip vendors: companies that bet entirely on specialized accelerators may be missing the agent-era CPU growth opportunity. The implication for buyers: when sizing AI infrastructure, the agent ratio (how many agent calls per inference call) determines CPU-to-accelerator ratio, and naive ratios designed for direct inference workloads will under-provision CPU.
