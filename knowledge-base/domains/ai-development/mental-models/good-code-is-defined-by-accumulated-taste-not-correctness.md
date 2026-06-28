---
id: INS-260627-BF35
domain: ai-development
topic: mental-models
title: 'Good code is defined by accumulated taste, not correctness'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - code-quality
  - taste
  - craftsmanship
  - developer-preferences
sources:
  - type: youtube
    title: >-
      Developing Taste in Coding Agents: Applied Meta Neuro-Symbolic RL — Ahmad
      Awais, CommandCode
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=kWOQS3XPZ10'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Code quality is the sum of stylistic and structural choices a developer
    accumulates over a career, not whether the code is correct.
  standard: >-
    Awais's central claim is that 'when programmers talk about good code,
    they're not talking about code that is correct — they're talking about this
    invisible architecture of choices' made over a career to keep code readable,
    maintainable, and humane. Two functions can both be correct while one is
    unacceptable to a given engineer because of naming, parameter shape (object
    params past two arguments), versioning conventions, directory layout, or
    tool selection.


    This reframes the goal of a coding agent. Most LLM evaluation targets
    correctness and speed, but those are table stakes — the thing that actually
    gates whether a developer accepts generated code is alignment to their
    accumulated preferences. An agent that is 100% correct but stylistically
    foreign still gets rejected and rewritten.


    The practical consequence: measuring agent quality on test-pass rate or task
    completion systematically overstates usefulness. The harder, more valuable
    signal is how much steering and rewriting a developer has to do after the
    code is 'correct' — the gap between correct and acceptable is where taste
    lives.
stance: >-
  When programmers say 'good code' they mean an invisible architecture of
  choices, not code that merely passes — so optimizing agents for correctness
  misses the actual quality bar.
related:
  - PRI-260320-8205
  - INS-260327-77E7
  - INS-260328-EBBC
  - INS-260330-B153
  - INS-260330-1282
  - INS-260330-DBE6
  - INS-260402-7B69
  - INS-260403-9C60
  - INS-260403-9DE0
  - INS-260327-0C4A
---
Awais's central claim is that 'when programmers talk about good code, they're not talking about code that is correct — they're talking about this invisible architecture of choices' made over a career to keep code readable, maintainable, and humane. Two functions can both be correct while one is unacceptable to a given engineer because of naming, parameter shape (object params past two arguments), versioning conventions, directory layout, or tool selection.

This reframes the goal of a coding agent. Most LLM evaluation targets correctness and speed, but those are table stakes — the thing that actually gates whether a developer accepts generated code is alignment to their accumulated preferences. An agent that is 100% correct but stylistically foreign still gets rejected and rewritten.

The practical consequence: measuring agent quality on test-pass rate or task completion systematically overstates usefulness. The harder, more valuable signal is how much steering and rewriting a developer has to do after the code is 'correct' — the gap between correct and acceptable is where taste lives.
