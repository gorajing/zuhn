---
id: INS-260605-BBCF
domain: ai-development
topic: system-building
title: Encode your org's engineering patterns as composable skills
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - skills
  - composability
  - design-patterns
  - factory-model
sources:
  - type: youtube
    title: >-
      Agents Don't Do Standups: Building the Post-Engineer Engineering Org —
      Mike Spitz, PFF
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VMemhtlsoNk'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat the dev lifecycle like a factory line and turn each repeatable step
    into a skill that encodes your house patterns.
  standard: >-
    Spitz recommends viewing the engineering development lifecycle as a factory:
    break it into small composable elements — branch naming, creating feature
    flags for trunk-based development, building APIs to a specific pattern (PFF
    uses the service-repository pattern) — and abstract each into a skill.
    Crucially, the skills encode the org's own conventions: their
    lightweight-design-document skill analyzes how previous LDDs were written so
    every new build stays in the same ethos as everything else, and this is
    framed as tool-agnostic, not Claude-Code-specific.


    The explicit warning is against consuming other people's skills that carry
    strong software opinions in conflict with your org's — doing so creates
    friction and inconsistency. The principle: agentic engineering quality comes
    from capturing institutional style as machine-readable artifacts, and
    consistency with your codebase matters more than importing someone else's
    'best practice.' This is also where the product/brand 'feel' is preserved —
    without encoded house style, agent output carries the generic feel of the
    tool that made it.
stance: >-
  Each repeatable step of the dev lifecycle should be abstracted into a
  composable, org-specific skill, and third-party skills with conflicting
  opinions should be rejected.
related:
  - INS-260412-C956
  - INS-260605-BA6A
  - INS-260603-DFA6
  - INS-260627-F1AF
  - INS-260625-7DC7
  - INS-260410-1030
---
Spitz recommends viewing the engineering development lifecycle as a factory: break it into small composable elements — branch naming, creating feature flags for trunk-based development, building APIs to a specific pattern (PFF uses the service-repository pattern) — and abstract each into a skill. Crucially, the skills encode the org's own conventions: their lightweight-design-document skill analyzes how previous LDDs were written so every new build stays in the same ethos as everything else, and this is framed as tool-agnostic, not Claude-Code-specific.

The explicit warning is against consuming other people's skills that carry strong software opinions in conflict with your org's — doing so creates friction and inconsistency. The principle: agentic engineering quality comes from capturing institutional style as machine-readable artifacts, and consistency with your codebase matters more than importing someone else's 'best practice.' This is also where the product/brand 'feel' is preserved — without encoded house style, agent output carries the generic feel of the tool that made it.
