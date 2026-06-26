---
id: INS-260625-0750
domain: startups
topic: product-strategy
title: Split AI product work so domain experts own evals and prompts
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - team-design
  - evals
  - prompt-engineering
  - product
  - subject-matter-experts
sources:
  - type: youtube
    title: 'LLM Observability, Evaluation, Experimentation Platform — Dat Ngo, Arize'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JsCCrBF7F1g'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Let people who can code do the building and people who know the domain own
    the evals and prompt engineering — two personas that must converge on a good
    AI product.
  standard: >-
    Ngo observes that good AI products surface two distinct personas who must
    work together: technical users (AI engineers, developers) who are excellent
    at building, framing, and automating systems, and less-technical
    subject-matter experts (product managers, domain specialists) who understand
    what the AI experience *should* be. The mistake is forcing one persona to do
    the other's job — making engineers guess at domain quality, or making domain
    experts write code.


    The organizational principle is to 'relegate' eval definition and prompt
    engineering to the people who know the domain, while engineers own the
    infrastructure that makes those evals and prompts runnable. This is why
    Arize invests in no-code paths for running evals (select a model, use an
    out-of-the-box template or customize one) alongside programmatic ones — the
    tooling exists specifically to let non-engineers own the judgment layer
    without a developer in the loop.


    The broader lesson for any team building with AI: the scarce resource isn't
    just engineering capacity, it's domain judgment about what 'good output'
    means. Architect the product and the tooling so domain experts can directly
    encode that judgment as evals and prompts, rather than routing it through an
    engineering translation layer that loses fidelity and slows iteration.
stance: >-
  AI products improve fastest when subject-matter experts own eval criteria and
  prompt design while engineers own building and automation.
related:
  - INS-260330-6D43
  - INS-260405-1951
  - INS-260501-3D0C
  - INS-260501-4043
  - PRI-260406-4B8E
  - INS-260625-904E
  - INS-260625-67F1
---
Ngo observes that good AI products surface two distinct personas who must work together: technical users (AI engineers, developers) who are excellent at building, framing, and automating systems, and less-technical subject-matter experts (product managers, domain specialists) who understand what the AI experience *should* be. The mistake is forcing one persona to do the other's job — making engineers guess at domain quality, or making domain experts write code.

The organizational principle is to 'relegate' eval definition and prompt engineering to the people who know the domain, while engineers own the infrastructure that makes those evals and prompts runnable. This is why Arize invests in no-code paths for running evals (select a model, use an out-of-the-box template or customize one) alongside programmatic ones — the tooling exists specifically to let non-engineers own the judgment layer without a developer in the loop.

The broader lesson for any team building with AI: the scarce resource isn't just engineering capacity, it's domain judgment about what 'good output' means. Architect the product and the tooling so domain experts can directly encode that judgment as evals and prompts, rather than routing it through an engineering translation layer that loses fidelity and slows iteration.
