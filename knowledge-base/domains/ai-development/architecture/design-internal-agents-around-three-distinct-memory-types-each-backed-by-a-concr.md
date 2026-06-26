---
id: INS-260625-0A79
domain: ai-development
topic: architecture
title: >-
  Design internal agents around three distinct memory types, each backed by a
  concrete artifact
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-memory
  - agent-architecture
  - mental-model
  - system-design
  - agentic-systems
sources:
  - type: youtube
    title: How to Build an Internal AI Agent That Evolves Itself
    author: YC Root Access
    url: 'https://www.youtube.com/watch?v=DGD9b8K42lk'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Separate an agent's memory into factual (codebase + database), behavioral
    (editable instructions file), and procedural (self-authored tools).
  standard: >-
    The broader lesson Ayush draws is a clean taxonomy: an internal agent needs
    three kinds of memory, and the design discipline is to back each with a
    distinct, concrete artifact rather than cramming everything into one giant
    prompt. Factual memory is how the business actually works operationally —
    encoded as read-only access to the live codebase and database. Behavioral
    memory is what you teach the agent through feedback — encoded in an editable
    instructions.md loaded every turn. Procedural memory is the regular tasks
    you perform — encoded as the tools the agent writes for itself. This
    separation is powerful because each memory type has a different update
    mechanism and a different owner: factual memory syncs automatically on
    release, behavioral memory is edited conversationally by anyone, and
    procedural memory is grown by the agent. Treating them as one
    undifferentiated 'context' is the failure mode; treating them as three
    pipelines with distinct lifecycles is what makes the agent maintainable as
    it scales.
stance: >-
  An effective internal agent needs three separate memory systems — factual,
  behavioral, and procedural — each mapped to a specific artifact rather than
  blurred into one prompt.
related:
  - INS-260323-4B4D
  - INS-260402-2342
  - INS-260605-8BEA
  - INS-260605-37FB
  - INS-260605-9276
  - INS-260405-2BB0
  - INS-260605-83DA
  - INS-260605-6444
  - INS-260626-F01D
  - INS-260626-8660
---
The broader lesson Ayush draws is a clean taxonomy: an internal agent needs three kinds of memory, and the design discipline is to back each with a distinct, concrete artifact rather than cramming everything into one giant prompt. Factual memory is how the business actually works operationally — encoded as read-only access to the live codebase and database. Behavioral memory is what you teach the agent through feedback — encoded in an editable instructions.md loaded every turn. Procedural memory is the regular tasks you perform — encoded as the tools the agent writes for itself. This separation is powerful because each memory type has a different update mechanism and a different owner: factual memory syncs automatically on release, behavioral memory is edited conversationally by anyone, and procedural memory is grown by the agent. Treating them as one undifferentiated 'context' is the failure mode; treating them as three pipelines with distinct lifecycles is what makes the agent maintainable as it scales.
