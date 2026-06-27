---
id: INS-260501-3502
domain: startups
topic: engineering
title: >-
  Software factories — humans write specs and tests, agents iterate to passing
  implementation; this is TDD-evolved
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - software-factory
  - tdd-evolved
  - spec-driven
  - 1000x-engineer
sources:
  - type: youtube
    title: How To Build A Company With AI From The Ground Up
    author: Y Combinator
    url: 'https://youtu.be/EN7frwQIbKc'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Spec + tests = the human's job. Implementation + iteration to passing = the
    agent's job. Some repos already contain zero handwritten code.
  standard: >-
    Hu's framework for the highest-velocity engineering organizations: humans
    write the spec and the test harness that defines success; AI agents generate
    the implementation and iterate until tests pass. Some companies have already
    pushed this to the point where their repos contain no handwritten code, just
    specs and test harnesses. Strong DM's AI team is the prototype:
    scenario-based validations drive agents to write tests and iterate on code
    until probabilistic satisfaction threshold is met.


    The deeper principle: this is the next evolution of TDD (test-driven
    development). Tests still define correctness; what's changed is who writes
    the implementation. The implication for engineering hiring: spec-writing
    skill, test-design skill, and judgment about probabilistic satisfaction are
    now the core engineering competencies. Implementation skill becomes table
    stakes via AI tools.


    For builders: this is the architecture pattern to imitate. Don't ask 'how do
    agents help my engineers?' — ask 'how do I structure my codebase so spec +
    test + agent loop replaces human implementation?' For Zuhn editorially: this
    is the operationalization of the 1000x engineer thesis. The thousand-fold
    productivity gain comes from each engineer running this loop across many
    parallel tasks, not from each engineer writing code 1000x faster.
stance: >-
  The next stage of TDD is software factories where humans define success via
  specs + tests + scenario-based validations, AI agents generate implementations
  and iterate until passing — making code-writing fully automated while
  spec-writing becomes the new craft.
related:
  - PRI-260406-3EF8
  - INS-260530-D34F
  - INS-260625-D938
  - INS-260605-25B2
  - INS-260625-7592
  - INS-260605-CF2E
  - INS-260625-99B0
  - INS-260625-E3A2
  - INS-260627-D692
---
Hu's framework for the highest-velocity engineering organizations: humans write the spec and the test harness that defines success; AI agents generate the implementation and iterate until tests pass. Some companies have already pushed this to the point where their repos contain no handwritten code, just specs and test harnesses. Strong DM's AI team is the prototype: scenario-based validations drive agents to write tests and iterate on code until probabilistic satisfaction threshold is met.

The deeper principle: this is the next evolution of TDD (test-driven development). Tests still define correctness; what's changed is who writes the implementation. The implication for engineering hiring: spec-writing skill, test-design skill, and judgment about probabilistic satisfaction are now the core engineering competencies. Implementation skill becomes table stakes via AI tools.

For builders: this is the architecture pattern to imitate. Don't ask 'how do agents help my engineers?' — ask 'how do I structure my codebase so spec + test + agent loop replaces human implementation?' For Zuhn editorially: this is the operationalization of the 1000x engineer thesis. The thousand-fold productivity gain comes from each engineer running this loop across many parallel tasks, not from each engineer writing code 1000x faster.
