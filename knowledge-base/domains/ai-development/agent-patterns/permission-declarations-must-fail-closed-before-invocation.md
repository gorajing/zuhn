---
id: INS-260626-F490
domain: ai-development
topic: agent-patterns
title: Permission declarations must fail closed before invocation
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - permissions
  - least-privilege
  - coding-agents
  - tool-use
sources:
  - type: blog
    title: A Deterministic Control Plane for LLM Coding Agents
    url: 'https://arxiv.org/html/2606.26924'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Do not rely on prompt text alone for permissions; compile agent definitions
    into allowlists and reject invalid privilege states early.
  standard: >-
    Rel(AI)Build assigns each agent a single permission tier and checks tool
    allowlists before the definition reaches the IDE execution context. The
    paper reports that injected over-privileged tool declarations for
    low-privilege agents failed under fail-closed tier checks in conformance
    testing.


    This pattern turns permission mistakes into build or install errors instead
    of runtime surprises. It is especially useful for coding agents, where the
    difference between read-only exploration and shell-capable operations is a
    material risk boundary.
stance: >-
  Agent permission policies are more reliable when invalid or over-privileged
  configurations fail at install or transform time before the LLM is invoked.
related:
  - INS-260405-194F
  - INS-260410-761E
  - INS-260625-1826
  - INS-260625-BEFE
  - INS-260626-656C
  - INS-260628-1610
  - INS-260625-ACBC
---
Rel(AI)Build assigns each agent a single permission tier and checks tool allowlists before the definition reaches the IDE execution context. The paper reports that injected over-privileged tool declarations for low-privilege agents failed under fail-closed tier checks in conformance testing.

This pattern turns permission mistakes into build or install errors instead of runtime surprises. It is especially useful for coding agents, where the difference between read-only exploration and shell-capable operations is a material risk boundary.
