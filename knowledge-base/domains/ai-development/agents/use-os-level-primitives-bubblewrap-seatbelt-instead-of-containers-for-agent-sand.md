---
id: INS-260410-D04D
domain: ai-development
topic: agents
title: >-
  Use OS-level primitives (bubblewrap, seatbelt) instead of containers for agent
  sandboxing
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - sandboxing
  - bubblewrap
  - seatbelt
  - runtime-isolation
sources:
  - type: blog
    title: Making Claude Code more secure and autonomous with sandboxing
    url: 'https://www.anthropic.com/engineering/claude-code-sandboxing'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Bubblewrap on Linux and seatbelt on macOS provide subprocess-inclusive
    sandbox boundaries without container overhead.
  standard: >-
    Anthropic chose Linux bubblewrap and macOS seatbelt over Docker/container
    approaches. The advantage: these primitives enforce restrictions at the OS
    level across not just the agent's direct tool calls but any subprocess,
    script, or program the agent spawns. A container approach would require
    spinning up and managing the container per session, adding latency and
    operational complexity for a developer tool that must feel instant.


    The network isolation design is also worth stealing: instead of iptables
    rules, Claude Code routes all outbound traffic through a unix domain socket
    to a proxy process running OUTSIDE the sandbox. The proxy enforces domain
    allowlists and handles user confirmation for new domains. This makes the
    policy customizable without modifying the sandbox runtime and keeps the
    enforcement point out of reach of a compromised process inside the sandbox.
stance: >-
  OS-level sandbox primitives give agents the same security properties as
  containers with lower latency, less configuration, and subprocess coverage
  that containers can't match.
related:
  - PRI-260403-9E80
  - INS-260410-303B
  - INS-260410-0B73
  - INS-260329-3423
  - INS-260329-8261
---
Anthropic chose Linux bubblewrap and macOS seatbelt over Docker/container approaches. The advantage: these primitives enforce restrictions at the OS level across not just the agent's direct tool calls but any subprocess, script, or program the agent spawns. A container approach would require spinning up and managing the container per session, adding latency and operational complexity for a developer tool that must feel instant.

The network isolation design is also worth stealing: instead of iptables rules, Claude Code routes all outbound traffic through a unix domain socket to a proxy process running OUTSIDE the sandbox. The proxy enforces domain allowlists and handles user confirmation for new domains. This makes the policy customizable without modifying the sandbox runtime and keeps the enforcement point out of reach of a compromised process inside the sandbox.
