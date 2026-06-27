---
id: INS-260627-90A8
domain: ai-development
topic: software-engineering
title: >-
  Don't standardize the stack — AI makes a polyglot org an asset, not a
  liability
actionability: reference
confidence: low
shelf_life: time-sensitive
status: active
tags:
  - polyglot
  - tech-stack
  - standardization
  - cross-repo
  - ai-translation
sources:
  - type: youtube
    title: >-
      Dispatch from the Future: building an AI-native Company – Dan Shipper,
      Every, AI & I
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=MGzymaYBiss'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Skip stack standardization and let developers use whatever language they
    like, since AI can read any repo and translate a feature's approach into
    another framework on demand.
  standard: >-
    Conventional engineering wisdom says a growing org should standardize on a
    stack to enable code sharing, hiring fungibility, and maintainability.
    Shipper reports the opposite at Every: they have not standardized on any
    language or framework, and instead let each builder pick what they like,
    because AI makes translation between stacks cheap. Rather than abstracting
    shared functionality into a library that others download, a developer can
    point their coding agent at a colleague's repo, have it read how a feature
    (a teams feature, an OAuth flow) was built, and reimplement it in their own
    stack — capturing the pattern without the cross-team coordination cost.


    This reframes stack diversity from a liability (fragmentation, duplicated
    effort) into an asset (every developer at peak productivity in their
    preferred tools, AI handling the interop). The confidence is deliberately
    low and the shelf life time-sensitive because Shipper himself flags the
    caveat — 'this may get different as we scale' — and the claim depends on
    current AI translation quality plus the small team size (15 people,
    single-developer apps). It is a genuinely counterintuitive policy worth
    testing, not a settled principle, and likely degrades as headcount, shared
    infrastructure, and operational surface area grow.
stance: >-
  An AI-native org should let each developer pick their preferred language and
  framework because AI cheaply translates patterns between them, turning stack
  diversity from a coordination cost into an advantage.
related:
  - INS-260325-CACA
  - INS-260329-693E
  - INS-260329-6A60
  - INS-260403-066E
  - INS-260330-C2C4
  - INS-260410-4F43
  - INS-260605-743D
  - INS-260626-A0DC
  - INS-260626-0704
  - INS-260627-7674
---
Conventional engineering wisdom says a growing org should standardize on a stack to enable code sharing, hiring fungibility, and maintainability. Shipper reports the opposite at Every: they have not standardized on any language or framework, and instead let each builder pick what they like, because AI makes translation between stacks cheap. Rather than abstracting shared functionality into a library that others download, a developer can point their coding agent at a colleague's repo, have it read how a feature (a teams feature, an OAuth flow) was built, and reimplement it in their own stack — capturing the pattern without the cross-team coordination cost.

This reframes stack diversity from a liability (fragmentation, duplicated effort) into an asset (every developer at peak productivity in their preferred tools, AI handling the interop). The confidence is deliberately low and the shelf life time-sensitive because Shipper himself flags the caveat — 'this may get different as we scale' — and the claim depends on current AI translation quality plus the small team size (15 people, single-developer apps). It is a genuinely counterintuitive policy worth testing, not a settled principle, and likely degrades as headcount, shared infrastructure, and operational surface area grow.
