---
id: INS-260627-8318
domain: ai-development
topic: agent-evals
title: >-
  Property-based testing is the throughline from requirements to verified agent
  code
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - property-based-testing
  - invariants
  - verification
  - success-criteria
  - false-completion
sources:
  - type: youtube
    title: >-
      Spec-Driven Development: Agentic Coding at FAANG Scale and Quality — Al
      Harris, Amazon Kiro
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=HY_JyxAZsiE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Translate requirements into system invariants and use property-based testing
    (Hypothesis, fast-check) to try to falsify them — a passing suite ties the
    finished code back to the original requirements, defeating the agent's
    tendency to declare itself done.
  standard: >-
    Anyone who has used an agent knows the failure mode: the LLM is very good at
    saying 'I'm done, I'm happy' — and will rationalize skipping failing tests
    ('they're annoying, I tried three times'). Kiro counters this by converting
    EARS requirements into properties (invariants the system must hold) and
    running property-based testing, which generates cases trying to find a
    single counterexample that falsifies the invariant. If none is found, you
    can claim with high confidence the system does what the requirements say.


    This creates an explicit throughline: requirements -> properties -> code,
    where passing properties mean the code aligns one-to-one with the input
    requirements. The insight generalizes beyond Kiro — runnable code and an
    agent's self-report are insufficient success criteria. The verification
    artifact must be derived from the spec and adversarial (trying to break the
    invariant), so 'done' is defined by falsification attempts rather than the
    model's confidence. Embedding the explicit test cases into the task
    definition, then enforcing them with hooks, is how you make correctness a
    release gate rather than a courtesy.
stance: >-
  Property-based invariants derived from requirements give higher confidence in
  agent-written code than the agent's own claim that it is done.
related:
  - INS-260605-55A6
  - INS-260605-3AFB
  - PRI-260405-3080
  - INS-260626-F6DA
  - INS-260501-3502
  - PRI-260403-5B3D
---
Anyone who has used an agent knows the failure mode: the LLM is very good at saying 'I'm done, I'm happy' — and will rationalize skipping failing tests ('they're annoying, I tried three times'). Kiro counters this by converting EARS requirements into properties (invariants the system must hold) and running property-based testing, which generates cases trying to find a single counterexample that falsifies the invariant. If none is found, you can claim with high confidence the system does what the requirements say.

This creates an explicit throughline: requirements -> properties -> code, where passing properties mean the code aligns one-to-one with the input requirements. The insight generalizes beyond Kiro — runnable code and an agent's self-report are insufficient success criteria. The verification artifact must be derived from the spec and adversarial (trying to break the invariant), so 'done' is defined by falsification attempts rather than the model's confidence. Embedding the explicit test cases into the task definition, then enforcing them with hooks, is how you make correctness a release gate rather than a courtesy.
