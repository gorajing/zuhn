---
id: INS-260626-14AE
domain: ai-development
topic: agents
title: Remote workspace provisioning turns agent hosting into an installable plugin
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - codex
  - remote-workspaces
  - agent-runtime
  - digitalocean
sources:
  - type: paste
    title: openai codex remote ga june 25 2026
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agent traces should record whether work ran locally, on a paired host, or in
    a provisioned remote workspace.
  standard: >-
    OpenAI's Codex Remote GA plus the DigitalOcean workspace plugin makes
    workspace provisioning a platform primitive rather than a manual environment
    task. This unlocks mobile-started or mobile-approved work against real
    development machines, but it also changes the risk boundary: the agent may
    now create infrastructure, configure SSH, and operate away from the user's
    current terminal. AgentRun should add runtime_substrate, provider,
    pairing/auth state, and cleanup evidence fields for remote work.
  deep: >-
    The practical shift is not just convenience. Once an agent can provision and
    attach a host, environment setup becomes part of the agent plan and must be
    audited like any other side effect. For Zuhn, any future remote agent run
    should distinguish source checkout changes from workspace infrastructure
    changes and preserve enough evidence to know which host actually executed
    the commands.
subtopic: remote-workspaces
stance: >-
  Codex no longer treats the developer's existing machine as the only agent
  execution substrate: a provider plugin can now create a VM, configure access,
  and attach it as the workspace. AgentRun should model runtime substrate
  explicitly because local, paired-remote, and provisioned-cloud sessions have
  different setup, credential, cost, and cleanup risks.
related:
  - INS-260626-6F8E
  - INS-260605-A2AD
  - INS-260605-159E
  - INS-260605-58DA
  - INS-260626-8A80
  - INS-260626-0E8C
  - INS-260627-0723
---
OpenAI's Codex Remote GA plus the DigitalOcean workspace plugin makes workspace provisioning a platform primitive rather than a manual environment task. This unlocks mobile-started or mobile-approved work against real development machines, but it also changes the risk boundary: the agent may now create infrastructure, configure SSH, and operate away from the user's current terminal. AgentRun should add runtime_substrate, provider, pairing/auth state, and cleanup evidence fields for remote work.
