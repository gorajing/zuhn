---
id: INS-260625-D943
domain: ai-development
topic: agent-patterns
title: >-
  A dedicated filter model enforces adversarial policy better than prompting the
  base model
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - guardrails
  - defense-in-depth
  - policy-enforcement
  - agent-architecture
  - prompt-injection
sources:
  - type: youtube
    title: >-
      AI Security After Codex and Claude Code — Zico Kolter & Matt Fredrikson,
      Gray Swan
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=j8BAficRjEc'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Keeping policies in the base model's context is fragile under attack; a
    separate small filter model checking inbound content and outbound tool calls
    gives a far better usability-vs-security trade-off.
  standard: >-
    General-purpose base models specialize via prompting, but prompting is
    exactly what adversarial attacks exploit — injections work by creating
    ambiguity about which context and policies apply, and a base model juggling
    a hard task plus a side-list of policies is easy to trip up. Enterprise
    policies are also too amorphous to encode as hard access rules ('this agent
    should never touch these things') yet too specific to expect from a general
    model. Gray Swan's answer is Cygnal: a filter model that sits between user,
    LLM, and tool calls and inspects both directions — scanning inbound
    untrusted content for injections and outbound tool calls for policy
    violations (e.g. sending an API key to an untrusted location).


    Two design principles matter. First, the filter works best when it is a
    small model custom-trained for two capabilities: robustness to attack and
    generalizing written policy descriptions into violation decisions. Second,
    because it's small relative to the underlying agent, it adds minimal compute
    overhead while pushing the system toward a better point on the
    usability-vs-security Pareto frontier — a fully locked-down agent is secure
    but useless, a fully trusted one is capable but exposed. The pattern also
    implies you must own the end-to-end loop and judge violations by what the
    agent is about to do, not merely whether an injection was present, so a
    long-running coding job isn't halted by a harmless attempted injection.
stance: >-
  Robust enterprise policy enforcement requires a small, custom-trained filter
  model between the user, the LLM, and its tools — not better prompting of the
  base model.
related:
  - INS-260404-2365
  - INS-260403-2FAE
  - INS-260619-F7E3
  - INS-260423-1C4D
  - INS-260605-295D
  - INS-260625-386B
---
General-purpose base models specialize via prompting, but prompting is exactly what adversarial attacks exploit — injections work by creating ambiguity about which context and policies apply, and a base model juggling a hard task plus a side-list of policies is easy to trip up. Enterprise policies are also too amorphous to encode as hard access rules ('this agent should never touch these things') yet too specific to expect from a general model. Gray Swan's answer is Cygnal: a filter model that sits between user, LLM, and tool calls and inspects both directions — scanning inbound untrusted content for injections and outbound tool calls for policy violations (e.g. sending an API key to an untrusted location).

Two design principles matter. First, the filter works best when it is a small model custom-trained for two capabilities: robustness to attack and generalizing written policy descriptions into violation decisions. Second, because it's small relative to the underlying agent, it adds minimal compute overhead while pushing the system toward a better point on the usability-vs-security Pareto frontier — a fully locked-down agent is secure but useless, a fully trusted one is capable but exposed. The pattern also implies you must own the end-to-end loop and judge violations by what the agent is about to do, not merely whether an injection was present, so a long-running coding job isn't halted by a harmless attempted injection.
