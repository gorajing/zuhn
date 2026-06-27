---
id: INS-260627-02F2
domain: ai-development
topic: agent-reliability
title: >-
  Express requirements in structured natural language so non-LLM reasoning can
  verify them
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - requirements
  - ears-format
  - neurosymbolic
  - determinism
  - automated-reasoning
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
    EARS-style 'when/then/shall' requirements are a structured natural-language
    representation that classic automated-reasoning techniques can parse
    deterministically — to detect ambiguity, find conflicting constraints, and
    reduce reliance on the model.
  standard: >-
    Kiro represents acceptance criteria in EARS (Easy Approach to Requirements
    Syntax), a structured natural-language form like 'when <condition> then the
    system shall <behavior>.' The deliberate design goal is that this structure
    can be passed through non-LLM models to get deterministic results — for
    example, scanning requirements for over-ambiguity or invalid/conflicting
    constraints using classic automated reasoning, and surfacing those to the
    human to resolve before implementation.


    The deeper bet is directional: 'we want to use the LLM less and less over
    time.' The agent is explicitly described as not just an LLM with a workflow
    on top — the backend may be an LLM or other neurosymbolic reasoning tools
    depending on the task. This contradicts the default instinct to throw every
    step at the model. For builders, the lesson is that structuring intermediate
    artifacts (not just prompts) opens the door to deterministic verification
    and is the seam where reliability gets engineered, not prompted.
stance: >-
  Requirements should be written in structured natural language so deterministic
  non-LLM reasoning — not the LLM — can verify them, and the LLM's role should
  shrink over time.
related:
  - INS-260325-788E
  - INS-260323-4AB5
  - INS-260327-D9D6
  - INS-260329-CCDE
  - INS-260330-2C97
  - INS-260403-2A44
  - INS-260403-5F41
  - INS-260329-83AA
  - INS-260626-15F3
---
Kiro represents acceptance criteria in EARS (Easy Approach to Requirements Syntax), a structured natural-language form like 'when <condition> then the system shall <behavior>.' The deliberate design goal is that this structure can be passed through non-LLM models to get deterministic results — for example, scanning requirements for over-ambiguity or invalid/conflicting constraints using classic automated reasoning, and surfacing those to the human to resolve before implementation.

The deeper bet is directional: 'we want to use the LLM less and less over time.' The agent is explicitly described as not just an LLM with a workflow on top — the backend may be an LLM or other neurosymbolic reasoning tools depending on the task. This contradicts the default instinct to throw every step at the model. For builders, the lesson is that structuring intermediate artifacts (not just prompts) opens the door to deterministic verification and is the seam where reliability gets engineered, not prompted.
