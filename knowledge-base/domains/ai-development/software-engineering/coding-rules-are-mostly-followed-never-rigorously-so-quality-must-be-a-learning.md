---
id: INS-260627-8431
domain: ai-development
topic: software-engineering
title: >-
  Coding rules are 'mostly followed,' never rigorously, so quality must be a
  learning system not static config
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - coding-standards
  - cursor-rules
  - living-documentation
  - feedback-loops
  - quality-systems
  - ai-coding
sources:
  - type: youtube
    title: 'The State of AI Code Quality: Hype vs Reality — Itamar Friedman, Qodo'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=rgjF5o2Qjsc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Developers report their cursor/copilot rules are 'mostly' followed but never
    rigorously, so quality has to be a closed loop that catches violations at
    the PR, records what you accepted, and adapts the standard.
  standard: >-
    When surveyed, developers said their generation rules land somewhere in
    'mostly followed' — not completely, not rigorously, not at the technical
    depth they intended. This is the core unreliability of declarative rules:
    they shape output probabilistically, not deterministically, so a rule like
    'no nested ifs' still ships violations.


    Friedman's prescription is a closed loop instead of a static config: the
    same rule, expressed at the gate (Qodo), is grounded with a good example and
    a bad example from your context, catches the violation at PR time even when
    the generator ignored it, and then *records and learns* whether you accepted
    or rejected each suggestion to adapt the standard over time. Standards
    become 'living and breathing documentation.'


    The broader principle: because quality is dynamic, a frozen rule list
    decays. The competitive edge is a verification system with feedback —
    environments/sandboxes where agents run validation, MCP-based quality tools,
    and standards that update from accept/reject signals — not a longer rules
    file. Quality you have to actively maintain is the moat; AI is just the tool
    that makes maintaining it tractable.
stance: >-
  Static cursor/copilot rules are only partially obeyed, so durable quality
  requires a workflow that records outcomes and adapts standards over time
  rather than a fixed rule list.
related:
  - INS-260627-B5F2
  - PRI-260403-9E80
  - INS-260605-77EB
  - PRI-260403-67FC
  - PRI-260405-6867
  - INS-260627-C750
---
When surveyed, developers said their generation rules land somewhere in 'mostly followed' — not completely, not rigorously, not at the technical depth they intended. This is the core unreliability of declarative rules: they shape output probabilistically, not deterministically, so a rule like 'no nested ifs' still ships violations.

Friedman's prescription is a closed loop instead of a static config: the same rule, expressed at the gate (Qodo), is grounded with a good example and a bad example from your context, catches the violation at PR time even when the generator ignored it, and then *records and learns* whether you accepted or rejected each suggestion to adapt the standard over time. Standards become 'living and breathing documentation.'

The broader principle: because quality is dynamic, a frozen rule list decays. The competitive edge is a verification system with feedback — environments/sandboxes where agents run validation, MCP-based quality tools, and standards that update from accept/reject signals — not a longer rules file. Quality you have to actively maintain is the moat; AI is just the tool that makes maintaining it tractable.
