---
id: INS-260625-B6E9
domain: ai-development
topic: architecture
title: 'The agent-native compute primitive is a fast, stateful, pausable sandbox'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-infrastructure
  - sandboxes
  - first-principles
  - bare-metal
  - system-design
sources:
  - type: youtube
    title: >-
      AI Agents Need Computers: 74% MoM Growth, 850K/Day Runs, & New Agent Cloud
      — Ivan Burazin, Daytona
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=kaX43RRRUKY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Reasoning from first principles about what a computer means to an agent
    yields a primitive that pauses and resumes with full state (like closing a
    laptop lid) yet spins up in milliseconds — which standard preemptable,
    stateless VMs cannot provide.
  standard: >-
    Most providers run agent sandboxes as Firecracker on a VM, where the
    machine's disk/state is not part of the sandbox and instances are
    preemptable with a fixed lifespan. Burazin argues agents are like humans:
    you don't want your laptop shut down mid-work, you want to close the lid and
    reopen to identical state — so agents need pause-and-resume statefulness AND
    extreme speed. That combination is 'a Lambda and an EC2 together,' which
    Kubernetes and Nomad couldn't deliver, so Daytona reused its old Code
    Anywhere scheduler.


    The implementation falls out of the primitive: run on bare metal with a
    custom scheduler, use the underlying machine's disk/CPU/RAM directly (no EBS
    network hop, so IOPS are very fast), and pre-load snapshots/templates onto
    the bare-metal NVMe drives so firing a sandbox just routes to the machine
    holding that snapshot and 'turns it on' locally with no network latency.
    Results: 60ms to spin up one (with network round-trip), 50,000 concurrent in
    ~75s (vs ~2,000s elsewhere), and a largest customer running ~850k
    sandboxes/day. Dynamic on-the-fly resizing also makes the sandboxes nearly
    impossible to OOM.


    The transferable lesson is the method, not just the spec: deriving
    infrastructure from 'what would a computer look like for an agent' produced
    a materially different and faster design than adapting human-era preemptable
    cloud primitives. When building for a genuinely new user (agents), re-derive
    the primitive instead of reskinning existing ones.
stance: >-
  The right compute primitive for agents is a fast, stateful, pausable,
  long-running sandbox — combining Lambda's speed with EC2's persistence — not a
  preemptable execution box.
related:
  - INS-260330-82B2
  - INS-260409-5D67
  - INS-260605-07E5
  - INS-260605-61D9
  - INS-260625-E7CD
  - INS-260627-8BD6
  - INS-260627-A81B
  - PRI-260406-6531
---
Most providers run agent sandboxes as Firecracker on a VM, where the machine's disk/state is not part of the sandbox and instances are preemptable with a fixed lifespan. Burazin argues agents are like humans: you don't want your laptop shut down mid-work, you want to close the lid and reopen to identical state — so agents need pause-and-resume statefulness AND extreme speed. That combination is 'a Lambda and an EC2 together,' which Kubernetes and Nomad couldn't deliver, so Daytona reused its old Code Anywhere scheduler.

The implementation falls out of the primitive: run on bare metal with a custom scheduler, use the underlying machine's disk/CPU/RAM directly (no EBS network hop, so IOPS are very fast), and pre-load snapshots/templates onto the bare-metal NVMe drives so firing a sandbox just routes to the machine holding that snapshot and 'turns it on' locally with no network latency. Results: 60ms to spin up one (with network round-trip), 50,000 concurrent in ~75s (vs ~2,000s elsewhere), and a largest customer running ~850k sandboxes/day. Dynamic on-the-fly resizing also makes the sandboxes nearly impossible to OOM.

The transferable lesson is the method, not just the spec: deriving infrastructure from 'what would a computer look like for an agent' produced a materially different and faster design than adapting human-era preemptable cloud primitives. When building for a genuinely new user (agents), re-derive the primitive instead of reskinning existing ones.
