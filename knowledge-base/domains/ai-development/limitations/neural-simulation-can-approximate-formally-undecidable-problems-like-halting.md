---
id: INS-260627-37CC
domain: ai-development
topic: limitations
title: Neural simulation can approximate formally undecidable problems like halting
actionability: inspiration
confidence: low
shelf_life: evergreen
status: active
tags:
  - halting-problem
  - simulation
  - computability
  - approximation
  - reasoning
sources:
  - type: youtube
    title: >-
      Code World Model: Building World Models for Computation – Jacob Kahn, FAIR
      Meta
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=sYgE4ppDFOQ'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    By learning the patterns of execution dynamics rather than running code to
    completion, a world model can give useful approximate answers to problems
    like halting that are impossible to decide exactly.
  standard: >-
    The halting problem is undecidable because determining whether an arbitrary
    program terminates would, in the hard cases, require simulating its entire
    execution — which never finishes if the program doesn't halt. Kahn's
    provocation (which he admits 'will make theoreticians bristle') is that a
    model trained to simulate execution might learn high-level patterns of
    execution dynamics and thereby approximate whether a program halts, trading
    formal exactness for tractable, useful reasoning.


    The same logic generalizes to expensive-but-decidable problems: reasoning
    about a huge distributed system or a costly single-machine function without
    actually executing it, by relying on an internal world model of what the
    computation would do. This is the most speculative claim in the talk — hence
    low confidence — but it captures a broader pattern in AI: learned
    approximators can deliver practically valuable answers in regimes where
    exact computation is impossible or prohibitively expensive, reframing
    'impossible' problems as 'approximable' ones.
stance: >-
  A model that learns to simulate program execution can recognize high-level
  execution patterns to approximate answers to problems that are formally
  undecidable or intractable to compute, such as whether a program halts.
related:
  - INS-260330-1FE9
  - INS-260330-C0D1
  - INS-260605-5CC7
  - INS-260626-8116
  - INS-260627-8F78
  - INS-260627-6418
  - INS-260408-C572
  - INS-260501-FDF0
  - INS-260627-E858
  - INS-260627-EEDE
---
The halting problem is undecidable because determining whether an arbitrary program terminates would, in the hard cases, require simulating its entire execution — which never finishes if the program doesn't halt. Kahn's provocation (which he admits 'will make theoreticians bristle') is that a model trained to simulate execution might learn high-level patterns of execution dynamics and thereby approximate whether a program halts, trading formal exactness for tractable, useful reasoning.

The same logic generalizes to expensive-but-decidable problems: reasoning about a huge distributed system or a costly single-machine function without actually executing it, by relying on an internal world model of what the computation would do. This is the most speculative claim in the talk — hence low confidence — but it captures a broader pattern in AI: learned approximators can deliver practically valuable answers in regimes where exact computation is impossible or prohibitively expensive, reframing 'impossible' problems as 'approximable' ones.
