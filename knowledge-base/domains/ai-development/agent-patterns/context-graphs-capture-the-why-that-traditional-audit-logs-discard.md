---
id: INS-260605-C00C
domain: ai-development
topic: agent-patterns
title: Context graphs capture the 'why' that traditional audit logs discard
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - explainability
  - auditability
  - compliance
  - decision-traces
  - governance
sources:
  - type: youtube
    title: 'Connecting the Dots with Context Graphs — Stephen Chin, Neo4j'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=eW_vxrjvERk'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Unlike an audit log that records what happened in time order, a context
    graph organizes decisions by entity and relationship and preserves why they
    were made — making agent decisions explainable and auditable.
  standard: >-
    Chin contrasts context graphs with traditional audit logs. An audit log
    captures a chronological record of events; a context graph captures the
    decision traces produced while evaluating models — the policies applied,
    risk factors considered, and the human or agent reasoning behind a
    recommendation — organized by entities and relationships rather than by
    timestamp. In the financial-services demo, querying whether to approve a
    loan surfaces the applicant's account, related margin trades, a prior
    rejection, the Cypher queries run, the risk factors, and fraud-detection
    patterns, all visible in the traversed graph.


    The payoff is twofold. For the end user, it provides the grounded
    justification needed to stand behind a decision and defend it to the
    organization. For the developer, it makes the agentic application
    defensible: you can show it is solving a real business problem on grounded
    information rather than producing opaque outputs. Crucially, each new
    decision and its recommendation get written back into the graph, so the
    system accumulates institutional decision memory over time.
stance: >-
  A context graph beats an audit log for agent governance because it stores the
  reasoning and relationships behind a decision, not just the chronological
  record of what happened.
related:
  - INS-260321-167A
  - INS-260403-7EB2
  - INS-260410-001F
  - INS-260605-44E2
  - INS-260605-C028
  - INS-260605-014F
  - INS-260605-83DA
  - INS-260605-37FB
  - INS-260625-A281
  - INS-260627-9387
---
Chin contrasts context graphs with traditional audit logs. An audit log captures a chronological record of events; a context graph captures the decision traces produced while evaluating models — the policies applied, risk factors considered, and the human or agent reasoning behind a recommendation — organized by entities and relationships rather than by timestamp. In the financial-services demo, querying whether to approve a loan surfaces the applicant's account, related margin trades, a prior rejection, the Cypher queries run, the risk factors, and fraud-detection patterns, all visible in the traversed graph.

The payoff is twofold. For the end user, it provides the grounded justification needed to stand behind a decision and defend it to the organization. For the developer, it makes the agentic application defensible: you can show it is solving a real business problem on grounded information rather than producing opaque outputs. Crucially, each new decision and its recommendation get written back into the graph, so the system accumulates institutional decision memory over time.
