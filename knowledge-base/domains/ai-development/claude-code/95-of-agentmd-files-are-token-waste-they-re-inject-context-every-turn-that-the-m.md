---
id: INS-260501-F0E5
domain: ai-development
topic: claude-code
title: >-
  95% of agent.md files are token waste — they re-inject context every turn that
  the model can derive from the codebase
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - agent-md
  - claude-md
  - context-discipline
  - token-waste
sources:
  - type: youtube
    title: How AI agents & Claude skills work (Clearly Explained)
    author: Greg Isenberg
    url: 'https://youtu.be/S_oN3vlzpMw'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If your CLAUDE.md just says 'this is React, use TypeScript', delete it. The
    model figures that out from the code. Save the tokens.
  standard: >-
    The educator's analysis: a 1000-line CLAUDE.md is roughly 7000 tokens
    injected into context every single turn. Across a long session, that
    compounds significantly. Most of what's in those files (framework, language,
    conventions) the model can derive from the actual codebase. The valuable
    content for an agent.md file is genuinely proprietary or
    methodology-specific information that the model can't derive:
    company-specific terminology, internal decision rules, references to
    non-public systems.


    The heuristic: if you can answer 'would Claude figure this out by inspecting
    the code?' with yes, don't put it in agent.md. Put it in skills (which use
    progressive disclosure — only loaded when needed) or in the system prompt
    for that specific session.


    For builders: this is the operational form of context discipline. Every
    token in context every turn has a marginal cost. Most projects accumulate
    context cruft over time as people add 'just in case' guidance. The right
    discipline is regularly stripping context back to the bare minimum and
    pushing project-specific guidance into skills. For Zuhn specifically: this
    validates the existing CLAUDE.md philosophy — the document is
    project-essential rules (Golden Rule, ID system, post-ingest workflow) not
    framework explanation. The current 200-line CLAUDE.md is at the right
    boundary; expanding it would be regression.
stance: >-
  The cargo-cult practice of writing extensive agent.md/CLAUDE.md files for
  every project is over-engineering — the model is good enough to inspect the
  codebase and infer most of what those files redundantly state, and the
  per-turn token cost compounds across long sessions.
related:
  - INS-260320-B210
  - INS-260320-F872
  - INS-260410-6B30
  - INS-260501-A1C7
  - INS-260402-5034
  - INS-260501-8A1F
---
The educator's analysis: a 1000-line CLAUDE.md is roughly 7000 tokens injected into context every single turn. Across a long session, that compounds significantly. Most of what's in those files (framework, language, conventions) the model can derive from the actual codebase. The valuable content for an agent.md file is genuinely proprietary or methodology-specific information that the model can't derive: company-specific terminology, internal decision rules, references to non-public systems.

The heuristic: if you can answer 'would Claude figure this out by inspecting the code?' with yes, don't put it in agent.md. Put it in skills (which use progressive disclosure — only loaded when needed) or in the system prompt for that specific session.

For builders: this is the operational form of context discipline. Every token in context every turn has a marginal cost. Most projects accumulate context cruft over time as people add 'just in case' guidance. The right discipline is regularly stripping context back to the bare minimum and pushing project-specific guidance into skills. For Zuhn specifically: this validates the existing CLAUDE.md philosophy — the document is project-essential rules (Golden Rule, ID system, post-ingest workflow) not framework explanation. The current 200-line CLAUDE.md is at the right boundary; expanding it would be regression.
