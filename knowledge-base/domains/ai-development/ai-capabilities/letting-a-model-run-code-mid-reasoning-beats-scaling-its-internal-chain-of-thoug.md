---
id: INS-260625-C700
domain: ai-development
topic: ai-capabilities
title: >-
  Letting a model run code mid-reasoning beats scaling its internal chain of
  thought
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-use
  - reasoning
  - chain-of-thought
  - code-execution
  - test-time-compute
sources:
  - type: youtube
    title: 'START by Alibaba: Teaching LLMs to Debug Their Thinking with Python'
    author: AI Papers Academy
    url: 'https://www.youtube.com/watch?v=HCLLJC7d1fE'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Models that validate and refine answers by executing code mid-reasoning
    outperform ones confined to pure internal reasoning on hard problems.
  standard: >-
    Long chain-of-thought models like DeepSeek-R1 re-evaluate their own
    solutions internally, but on very complex problems this self-contained
    reasoning hits a ceiling — the model has no ground truth to check itself
    against and can confidently converge on a wrong answer. START breaks that
    ceiling by letting the model write and run Python as part of its reasoning:
    on a coding task it generates test inputs, executes them, compares against
    expected outputs, and refines the solution if they disagree, looping
    multiple times before committing to a final answer.


    The key shift is that external execution provides an objective error signal
    the model cannot get from introspection. In the paper's worked example, the
    base QwQ model reasons at length but produces wrong code, while START fails
    twice against its own test cases and then gets it right on the third
    execution. OpenAI separately reported training o1 to write and run code in a
    secure environment for exactly this reason but never disclosed how — START
    is a public demonstration that the verification-in-the-loop approach, not
    just more reasoning tokens, is what closes the gap on the hardest problems.
stance: >-
  Integrating external tool execution into the reasoning loop raises
  problem-solving accuracy more than extending internal chain-of-thought alone.
related:
  - INS-260605-02FB
  - INS-260605-D777
  - INS-260625-5184
  - INS-260322-32E3
  - PRI-260406-F95C
  - INS-260329-500E
  - INS-260329-04FA
  - INS-260330-5609
  - INS-260625-4355
---
Long chain-of-thought models like DeepSeek-R1 re-evaluate their own solutions internally, but on very complex problems this self-contained reasoning hits a ceiling — the model has no ground truth to check itself against and can confidently converge on a wrong answer. START breaks that ceiling by letting the model write and run Python as part of its reasoning: on a coding task it generates test inputs, executes them, compares against expected outputs, and refines the solution if they disagree, looping multiple times before committing to a final answer.

The key shift is that external execution provides an objective error signal the model cannot get from introspection. In the paper's worked example, the base QwQ model reasons at length but produces wrong code, while START fails twice against its own test cases and then gets it right on the third execution. OpenAI separately reported training o1 to write and run code in a secure environment for exactly this reason but never disclosed how — START is a public demonstration that the verification-in-the-loop approach, not just more reasoning tokens, is what closes the gap on the hardest problems.
