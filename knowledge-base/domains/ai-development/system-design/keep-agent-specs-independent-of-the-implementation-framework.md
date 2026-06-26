---
id: INS-260605-E706
domain: ai-development
topic: system-design
title: Keep agent specs independent of the implementation framework
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - portability
  - spec-versioning
  - agent-testing
  - tooling
sources:
  - type: youtube
    title: >-
      Spec-Driven Testing for Agents With A Brain the Size of A Planet — Steven
      Willmott, SafeIntelligence
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=UQKg0td-Bf4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Express agent specs in a versioned, framework-neutral form (e.g. a GitHub
    repo) so integration, unit, and penetration tests survive an infrastructure
    change.
  standard: >-
    Willmott — who helped write the OpenAPI spec — pushes for agent behavioral
    specs that stay independent of the implementation. You may build in
    LangSmith or Vertex agents today and migrate later; if your tests are
    coupled to the framework, they don't move with you. Keep the integration
    tests, unit tests, and penetration tests separable and runnable against
    whatever backend the agent currently uses.


    The envisioned form is a versioned spec living in a repo, pullable into any
    tool, assembling the different pieces (data set, rules, agent card,
    robustness requirements) and 'versioned the hell out of.' This also closes a
    feedback loop: the same spec needed to run the agent automatically lets you
    collect results and iterate to fill discovered robustness gaps — a
    lightweight, around-the-outside RL-like loop that tunes the harness rather
    than the model.
stance: >-
  Agent behavioral specs and test suites should be portable across frameworks,
  not coupled to LangSmith, Vertex, or any one stack.
related:
  - INS-260411-F590
  - INS-260605-74CC
  - INS-260626-73D4
  - INS-260423-85B3
  - INS-260605-3163
  - INS-260403-2115
  - INS-260626-39CE
  - INS-260626-7E5F
---
Willmott — who helped write the OpenAPI spec — pushes for agent behavioral specs that stay independent of the implementation. You may build in LangSmith or Vertex agents today and migrate later; if your tests are coupled to the framework, they don't move with you. Keep the integration tests, unit tests, and penetration tests separable and runnable against whatever backend the agent currently uses.

The envisioned form is a versioned spec living in a repo, pullable into any tool, assembling the different pieces (data set, rules, agent card, robustness requirements) and 'versioned the hell out of.' This also closes a feedback loop: the same spec needed to run the agent automatically lets you collect results and iterate to fill discovered robustness gaps — a lightweight, around-the-outside RL-like loop that tunes the harness rather than the model.
