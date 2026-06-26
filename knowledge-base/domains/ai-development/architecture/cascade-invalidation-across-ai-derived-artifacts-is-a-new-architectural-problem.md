---
id: INS-260501-01A5
domain: ai-development
topic: architecture
title: >-
  Cascade invalidation across AI-derived artifacts is a new architectural
  problem most systems are not solving
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - cascade-invalidation
  - data-provenance
  - ai-derived-artifacts
  - access-control
sources:
  - type: youtube
    title: 'OpenAI''s Greg Brockman: Why Human Attention Is the New BottleneckOpenAI''s'
    author: Sequoia Capital
    url: 'https://youtu.be/bBS93A0BeNI'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Greg Brockman: if a doc is permissioned incorrectly and they realize they
    didn't want it accessible, normally they change the permissions — but now
    there are derived artifacts. You need to track through the system: this
    output came from this source, the source is no longer accessible, invalidate
    the derived artifact too.
  standard: >-
    Classical access control assumes the artifact is the unit of permissioning —
    change the permission on the artifact, the access change is complete.
    AI-derived artifacts break this model because the artifact is a function of
    one or more source artifacts whose permissions are independent. When the
    source's permissions change, the derived artifact's permissions should
    change too, but the system doesn't know about the dependency without
    explicit lineage tracking. This creates a quiet leak surface: permissions
    get tightened on a source document, the AI-generated dashboard built from it
    remains visible to people who shouldn't see the underlying data. The
    architectural pattern that solves this: every AI generation step records the
    source artifact IDs in a lineage graph, and a lineage-traversal service
    propagates permission changes from source to derivative. The implementation
    is non-trivial but the absence of it is a security and compliance liability
    that compounds as more AI generation happens within the enterprise.
    Organizations should add lineage tracking to their AI infrastructure roadmap
    as a first-class concern, not as a future optimization.
stance: >-
  When AI generates derived artifacts (summaries, dashboards, wikis, bots) from
  source documents, changing the source's access permissions or content creates
  a cascade invalidation problem that traditional access-control architectures
  do not solve — derived artifacts retain stale data and stale permissions
related:
  - INS-260625-1CB8
  - INS-260605-9523
  - INS-260626-E56B
  - PRI-260320-467A
  - INS-260605-4B12
  - INS-260626-8B56
---
Classical access control assumes the artifact is the unit of permissioning — change the permission on the artifact, the access change is complete. AI-derived artifacts break this model because the artifact is a function of one or more source artifacts whose permissions are independent. When the source's permissions change, the derived artifact's permissions should change too, but the system doesn't know about the dependency without explicit lineage tracking. This creates a quiet leak surface: permissions get tightened on a source document, the AI-generated dashboard built from it remains visible to people who shouldn't see the underlying data. The architectural pattern that solves this: every AI generation step records the source artifact IDs in a lineage graph, and a lineage-traversal service propagates permission changes from source to derivative. The implementation is non-trivial but the absence of it is a security and compliance liability that compounds as more AI generation happens within the enterprise. Organizations should add lineage tracking to their AI infrastructure roadmap as a first-class concern, not as a future optimization.
