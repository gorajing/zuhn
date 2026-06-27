---
id: INS-260626-3492
domain: ai-development
topic: mcp
title: Agent utility is in direct conflict with protecting your data
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - security
  - prompt-injection
  - lethal-trifecta
  - data-exfiltration
  - threat-model
sources:
  - type: youtube
    title: 'Scaling GitHub for your Agents — Sam Morrow, GitHub'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=0n3MKk7r60w'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A correctly-executed prompt-injection exfil attack against GitHub's MCP
    server is not GitHub-specific — it stems from the lethal trifecta, and 'the
    utility of agents is in direct conflict with protecting this stuff,' which
    remains unsolved.
  standard: >-
    When Invariant Labs published a working prompt-injection exfiltration attack
    that named GitHub's MCP server specifically, Morrow's framing was that it
    'applies to almost every agent setup whether they use MCP or not.' The root
    cause is the lethal trifecta (per Simon Willison): an agent with access to
    private data, exposure to untrusted content, and the ability to exfiltrate.
    Any sufficiently capable agent that can both read private data and act in
    the world is exposed; the vulnerability is a property of agent utility, not
    of one server's tools.


    The durable insight is that this is a genuine, unresolved tension rather
    than a checklist item: 'the utility of agents is in direct conflict with
    protecting this stuff... it's not solved.' Defensive posture must therefore
    be risk-profile-driven rather than one-size-fits-all — GitHub spans
    air-gapped Enterprise instances on one end and collaborators handing
    full-token access to agents on the other. Practical partial mitigations
    GitHub uses include filtering tools to the scopes a token actually holds,
    step-up OAuth that interactively requests a scope instead of failing, and
    removing user-specific tools when a server token has no user. None of these
    dissolves the underlying trifecta; they shrink the blast radius.
stance: >-
  The usefulness of an agent is in direct, unsolved conflict with data
  protection, so the prompt-injection exfiltration risk is structural rather
  than a vendor bug.
related:
  - INS-260410-0A28
  - INS-260625-2ED0
  - INS-260627-1B4D
  - INS-260605-5CF8
  - INS-260330-AF47
---
When Invariant Labs published a working prompt-injection exfiltration attack that named GitHub's MCP server specifically, Morrow's framing was that it 'applies to almost every agent setup whether they use MCP or not.' The root cause is the lethal trifecta (per Simon Willison): an agent with access to private data, exposure to untrusted content, and the ability to exfiltrate. Any sufficiently capable agent that can both read private data and act in the world is exposed; the vulnerability is a property of agent utility, not of one server's tools.

The durable insight is that this is a genuine, unresolved tension rather than a checklist item: 'the utility of agents is in direct conflict with protecting this stuff... it's not solved.' Defensive posture must therefore be risk-profile-driven rather than one-size-fits-all — GitHub spans air-gapped Enterprise instances on one end and collaborators handing full-token access to agents on the other. Practical partial mitigations GitHub uses include filtering tools to the scopes a token actually holds, step-up OAuth that interactively requests a scope instead of failing, and removing user-specific tools when a server token has no user. None of these dissolves the underlying trifecta; they shrink the blast radius.
