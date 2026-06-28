---
id: INS-260627-A81B
domain: ai-development
topic: architecture
title: >-
  Software 3.0 breaks classical verification but opens a new kind of runtime
  resilience
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - software-3.0
  - non-determinism
  - verification-limits
  - resilience
  - fallback-architecture
sources:
  - type: youtube
    title: 'Vision: Zero Bugs — Johann Schleier-Smith, Temporal'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=qLqttdO33UM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because LLMs are non-deterministic with an enormous state space, formal
    methods, model checking, and type systems have essentially no bearing on
    prompt-driven software — but LLMs' tolerance for unanticipated inputs
    creates a new resilience worth designing around.
  standard: >-
    Karpathy's 'software 3.0' frames prompts as programs: we now program through
    LLMs, whether the model solves the problem directly, generates code, or
    loops with tools. This opens a large gap in assurance, because LLMs are
    fundamentally non-deterministic and their state space is astronomically
    large — so all the verification machinery discussed (formal methods, model
    checking, type systems) has basically no bearing on this form of software.
    New assurance techniques are needed.


    The optimistic flip side: the same properties that defeat verification
    create a resilience deterministic software never had. LLMs can respond
    gracefully to unanticipated inputs and handle ambiguity. That suggests
    architectures where an LLM is invoked precisely when an error condition is
    encountered — getting ahead of and protecting against software faults that a
    rigid system would simply crash on.


    The design takeaway is to treat LLM components and classically-verified
    components as complementary layers: use formal methods and trusted libraries
    for the deterministic core that demands provable guarantees, and use LLMs
    both as the flexible top layer and as intelligent fallback handlers for the
    unexpected — rather than expecting one assurance paradigm to cover both.
stance: >-
  Prompt-as-program (software 3.0) systems are immune to classical verification
  yet enable a new form of resilience that deterministic software never had.
related:
  - INS-260330-5A2A
  - INS-260605-8C71
  - INS-260605-0BA3
  - INS-260625-9C3B
  - INS-260625-C697
  - INS-260625-B6E9
  - INS-260626-D14F
---
Karpathy's 'software 3.0' frames prompts as programs: we now program through LLMs, whether the model solves the problem directly, generates code, or loops with tools. This opens a large gap in assurance, because LLMs are fundamentally non-deterministic and their state space is astronomically large — so all the verification machinery discussed (formal methods, model checking, type systems) has basically no bearing on this form of software. New assurance techniques are needed.

The optimistic flip side: the same properties that defeat verification create a resilience deterministic software never had. LLMs can respond gracefully to unanticipated inputs and handle ambiguity. That suggests architectures where an LLM is invoked precisely when an error condition is encountered — getting ahead of and protecting against software faults that a rigid system would simply crash on.

The design takeaway is to treat LLM components and classically-verified components as complementary layers: use formal methods and trusted libraries for the deterministic core that demands provable guarantees, and use LLMs both as the flexible top layer and as intelligent fallback handlers for the unexpected — rather than expecting one assurance paradigm to cover both.
