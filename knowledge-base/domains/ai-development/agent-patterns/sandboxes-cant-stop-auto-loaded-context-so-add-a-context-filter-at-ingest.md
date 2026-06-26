---
id: INS-260626-FFE2
domain: ai-development
topic: agent-patterns
title: 'Sandboxes can''t stop auto-loaded context, so add a context filter at ingest'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - security
  - prompt-injection
  - skills
  - sandboxing
  - context-filter
  - supply-chain
sources:
  - type: youtube
    title: 'Context Is the New Code — Patrick Debois, Tessl'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=bSG9wUYaHWU'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Put a WAF-style context filter in front of downloaded context to strip
    prompt injection, because sandboxes load agent.md and skills automatically
    and can't block them.
  standard: >-
    Debois flags a gap that the rush to package and distribute skills creates: a
    registry full of community skills (he claims 99.9% are low quality) is also
    a supply-chain attack surface, and you can now run code from strangers on
    your laptop. The instinct is to sandbox the agent — but he points out the
    flaw. A coding agent by default loads your agent.md and skill.md with no
    restriction; the moment you download a skill, its context is loaded.
    Sandboxing constrains what the agent's tools can touch, but it does not
    filter the instructions entering the agent's head, so it cannot stop a
    prompt injection riding in on a downloaded skill.


    His answer is a distinct layer he calls a context filter — conceptually a
    web application firewall for context that strips injection patterns and
    suspicious content before it enters. This sits alongside, not inside, the
    sandbox. The takeaway for anyone installing third-party skills or plugins:
    treat downloaded context as untrusted input that needs its own scanning gate
    (credential exposure, third-party calls, injection patterns) plus provenance
    metadata — an 'AI SBOM' recording who built the skill and with what model —
    because the existing isolation primitives don't cover the auto-load path.
stance: >-
  Sandboxing an agent cannot protect against malicious downloaded skills because
  agent.md and skill.md auto-load with no restriction, so you need a separate
  context-filtering firewall at the ingestion point.
related:
  - INS-260423-1C4D
  - INS-260514-283E
  - INS-260626-1C28
  - INS-260605-C86D
  - INS-260605-295D
  - INS-260501-C59A
---
Debois flags a gap that the rush to package and distribute skills creates: a registry full of community skills (he claims 99.9% are low quality) is also a supply-chain attack surface, and you can now run code from strangers on your laptop. The instinct is to sandbox the agent — but he points out the flaw. A coding agent by default loads your agent.md and skill.md with no restriction; the moment you download a skill, its context is loaded. Sandboxing constrains what the agent's tools can touch, but it does not filter the instructions entering the agent's head, so it cannot stop a prompt injection riding in on a downloaded skill.

His answer is a distinct layer he calls a context filter — conceptually a web application firewall for context that strips injection patterns and suspicious content before it enters. This sits alongside, not inside, the sandbox. The takeaway for anyone installing third-party skills or plugins: treat downloaded context as untrusted input that needs its own scanning gate (credential exposure, third-party calls, injection patterns) plus provenance metadata — an 'AI SBOM' recording who built the skill and with what model — because the existing isolation primitives don't cover the auto-load path.
