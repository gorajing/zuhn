---
id: PRI-260501-168F
domain: ai-development
title: >-
  Software 3.0 — products are agent-callable surfaces with progressive
  disclosure, not chat features bolted onto apps
summary: >-
  The right architectural position for AI is not 'feature inside our product'
  but 'our product is a callable surface (CLI, MCP, API) that agents use as
  users.' The unified pattern across this shift: expose primitives via clean
  machine-readable interfaces, use progressive disclosure (load capability
  content on demand, not always-in-context), and accept that products built as
  orchestration layers over models become disposable when the model can
  orchestrate itself. The dual implication for builders: stop fusing AI into the
  product, and stop relying on heavyweight protocols (MCP) when CLI wrappers
  would deliver the same capability with dramatically better performance.
confidence: high
supporting_insights:
  - INS-260501-C59A
  - INS-260501-F258
  - INS-260501-6453
  - INS-260501-4646
  - INS-260501-7726
  - INS-260501-FBC6
supporting_count: 6
tags:
  - software-3.0
  - agent-as-user
  - progressive-disclosure
  - cli-first
  - mcp
  - agent-native-architecture
date_created: '2026-05-01'
last_reviewed: '2026-05-01'
resolutions:
  one_line: >-
    Software 3.0 — products are agent-callable surfaces with progressive
    disclosure, not chat features bolted onto apps
  standard: >-
    The right architectural position for AI is not 'feature inside our product'
    but 'our product is a callable surface (CLI, MCP, API) that agents use as
    users.' The unified pattern across this shift: expose primitives via clean
    machine-readable interfaces, use progressive disclosure (load capability
    content on demand, not always-in-context), and accept that products built as
    orchestration layers over models become disposable when the model can
    orchestrate itself. The dual implication for builders: stop fusing AI into
    the product, and stop relying on heavyweight protocols (MCP) when CLI
    wrappers would deliver the same capability with dramatically better
    performance.
lineage:
  compressed_at: '2026-05-01'
  source_insights:
    - id: INS-260501-C59A
      relation: SUPPORTS
    - id: INS-260501-F258
      relation: SUPPORTS
    - id: INS-260501-6453
      relation: SUPPORTS
    - id: INS-260501-4646
      relation: SUPPORTS
    - id: INS-260501-7726
      relation: SUPPORTS
    - id: INS-260501-FBC6
      relation: SUPPORTS
  compression_trigger: >-
    COMPRESS flag — 131 insights, 134 principles (post-extraction synthesis from
    30-source run)
embedded: true
embedding_model: "nomic-embed-text"
---
The right architectural position for AI is not 'feature inside our product' but 'our product is a callable surface (CLI, MCP, API) that agents use as users.' The unified pattern across this shift: expose primitives via clean machine-readable interfaces, use progressive disclosure (load capability content on demand, not always-in-context), and accept that products built as orchestration layers over models become disposable when the model can orchestrate itself. The dual implication for builders: stop fusing AI into the product, and stop relying on heavyweight protocols (MCP) when CLI wrappers would deliver the same capability with dramatically better performance.
