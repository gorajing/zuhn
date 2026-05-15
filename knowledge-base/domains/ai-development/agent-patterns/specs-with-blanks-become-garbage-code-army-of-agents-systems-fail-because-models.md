---
id: INS-260514-1470
domain: ai-development
topic: agent-patterns
title: >-
  Specs with blanks become garbage code — Army-of-Agents systems fail because
  models fill gaps with internet slop
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - army-of-agents
  - spec-based-development
  - garbage-in-garbage-out
  - multi-agent-skepticism
  - production-readiness
sources:
  - type: youtube
    title: Pi.dev explained by its creators | AI Agents Under the Hood
    author: Merantix AI Campus
    url: 'https://youtu.be/BQ_Es8k650I'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Specs always have blanks. Agents fill blanks with garbage learned from
    internet code. So spec-driven Army-of-Agents systems don't produce
    production code — the only complete spec is the program itself.
  standard: >-
    Mario's strong claim about why Symphony, Alf Loops, and Army-of-Agents
    approaches don't produce production-ready software: 'Every time you write a
    spec and leave out stuff, have blanks the agent should fill in for you — so
    basically anytime your spec is not your actual program because that's the
    perfect spec — the agent will fill in those blanks with what it's learned.
    And what it's learned is garbage from the internet that we created 5 years
    ago.' The argument has two premises: (1) every human-written spec has blanks
    (because writing a complete spec is equivalent to writing the program, so
    any non-trivial spec leaves gaps), and (2) when an agent encounters a gap,
    it samples from its training distribution, which is internet code — which
    Mario claims is overwhelmingly low-quality. Therefore Army-of-Agents systems
    compound garbage across the multi-agent stack, never reaching
    production-grade output. This is a strong falsifiable claim worth testing —
    if someone demonstrates a Symphony-class system reaching production with
    maintained code quality, the claim breaks. Counter-perspective: spec-quality
    and harness-quality may dominate, and a well-constrained spec with
    verification at each agent boundary might escape the GIGO trap. But Mario's
    empirical position is 'I haven't seen them work in the real world yet' —
    which is worth weighting given he's been building agentic systems since
    pre-Claude-Code. The implication for builders: don't bet your stack on
    Army-of-Agents until someone shows production-quality output; treat each
    multi-agent step as a place where garbage compounds, not where it dissolves.
stance: >-
  Multi-agent spec-based systems like Symphony, Alf Loops, and Army-of-Agents
  don't produce production-ready code because no human-written spec is complete
  — every spec has blanks the agent must fill in, and the agent fills them with
  code learned from the internet, which is garbage; the only complete spec IS
  the program itself.
related:
  - INS-260320-4BA8
  - INS-260330-23CD
  - INS-260405-2688
  - INS-260505-D545
  - PRI-260405-3080
  - PRI-260403-5B3D
  - PRI-260406-26FB
  - INS-260329-500E
---
Mario's strong claim about why Symphony, Alf Loops, and Army-of-Agents approaches don't produce production-ready software: 'Every time you write a spec and leave out stuff, have blanks the agent should fill in for you — so basically anytime your spec is not your actual program because that's the perfect spec — the agent will fill in those blanks with what it's learned. And what it's learned is garbage from the internet that we created 5 years ago.' The argument has two premises: (1) every human-written spec has blanks (because writing a complete spec is equivalent to writing the program, so any non-trivial spec leaves gaps), and (2) when an agent encounters a gap, it samples from its training distribution, which is internet code — which Mario claims is overwhelmingly low-quality. Therefore Army-of-Agents systems compound garbage across the multi-agent stack, never reaching production-grade output. This is a strong falsifiable claim worth testing — if someone demonstrates a Symphony-class system reaching production with maintained code quality, the claim breaks. Counter-perspective: spec-quality and harness-quality may dominate, and a well-constrained spec with verification at each agent boundary might escape the GIGO trap. But Mario's empirical position is 'I haven't seen them work in the real world yet' — which is worth weighting given he's been building agentic systems since pre-Claude-Code. The implication for builders: don't bet your stack on Army-of-Agents until someone shows production-quality output; treat each multi-agent step as a place where garbage compounds, not where it dissolves.
