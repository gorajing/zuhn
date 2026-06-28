---
id: INS-260627-F575
domain: ai-development
topic: agent-patterns
title: Agentic and programmatic edges should coexist in the same workflow graph
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agents
  - control
  - tool-use
  - workflow-design
sources:
  - type: blog
    title: >-
      An open-source framework for principled, agentic AI-driven
      hardware/software co-design research
    url: 'https://arxiv.org/html/2606.27350'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    CHIA distinguishes agentic edges from programmatic edges so designers can
    tune exactly which decisions belong to the model and which remain
    deterministic.
  standard: >-
    In CHIA, an edge is programmatic when ordinary code initiates the next node,
    and agentic when an agent decides to invoke a node as a tool. This lets the
    same workflow contain both flexible model-driven exploration and
    deterministic handoffs. The practical implication for agent systems is to
    avoid all-or-nothing autonomy: expose controlled tool calls where model
    judgment helps, but keep critical sequencing, scope checks, and verification
    under programmatic control.
  deep: >-
    The CIRCT issue-fixing case study demonstrates this boundary. Agents assess,
    reproduce, and fix narrow bugs, but the loop takes control back for
    non-agentic full regression testing and reproduction verification. That
    pattern is directly portable to coding agents: use agents for search and
    repair, but make acceptance gates deterministic and outside the agent's
    editable context.
subtopic: control-boundaries
stance: supported
related:
  - INS-260625-A668
  - INS-260327-BF89
  - INS-260605-8109
  - PRI-260328-F723
  - INS-260603-1BC0
---
In CHIA, an edge is programmatic when ordinary code initiates the next node, and agentic when an agent decides to invoke a node as a tool. This lets the same workflow contain both flexible model-driven exploration and deterministic handoffs. The practical implication for agent systems is to avoid all-or-nothing autonomy: expose controlled tool calls where model judgment helps, but keep critical sequencing, scope checks, and verification under programmatic control.
