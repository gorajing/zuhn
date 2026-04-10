---
id: INS-260410-3FB3
domain: ai-development
topic: llm-behavior
title: >-
  Which tools a model has determines whether it can answer — even for trivial
  arithmetic
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-use
  - model-selection
  - hallucination
  - capability-gaps
sources:
  - type: youtube
    title: How I use LLMs
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=EWvNQjAaOHw'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Before trusting an LLM on math or recent facts, check whether that specific
    app has wired in a Python interpreter and web search — models without them
    will confidently hallucinate numerically-close but wrong answers.
  standard: >-
    Karpathy's demonstration: ask the same multiplication problem to ChatGPT,
    Grok 3, Claude, and Gemini. ChatGPT recognized it needed the Python
    interpreter and got it right. Claude wrote JavaScript and got it right. Grok
    3 (no interpreter access) did it in its head and got the right order of
    magnitude but the wrong answer — a dangerous failure mode because the answer
    looks plausible. Gemini 2.0 Pro similarly hallucinated close-but-wrong
    results. Same for web search: Claude asked about White Lotus Season 3
    couldn't answer because it has no search integration; ChatGPT and Perplexity
    did.


    The implication is that 'which model is smartest' is the wrong question —
    it's 'which model in which app has the tools this query actually needs.' A
    smaller model with tools beats a bigger model without them on tool-reliant
    queries, every time. This also means model benchmark comparisons can be
    deeply misleading if they're run on the raw model without the tool layer
    that real users interact with. When picking a tool for a task, check the
    tool inventory first; the base model quality is often the second-order
    concern.
stance: >-
  Whether an LLM gives correct answers on math and recent-information queries
  depends more on its available tools (Python interpreter, web search) than on
  the base model's intelligence.
related:
  - INS-260327-0595
  - PRI-260323-1CF9
  - INS-260403-C10D
  - PRI-260323-DA09
  - INS-260410-939B
---
Karpathy's demonstration: ask the same multiplication problem to ChatGPT, Grok 3, Claude, and Gemini. ChatGPT recognized it needed the Python interpreter and got it right. Claude wrote JavaScript and got it right. Grok 3 (no interpreter access) did it in its head and got the right order of magnitude but the wrong answer — a dangerous failure mode because the answer looks plausible. Gemini 2.0 Pro similarly hallucinated close-but-wrong results. Same for web search: Claude asked about White Lotus Season 3 couldn't answer because it has no search integration; ChatGPT and Perplexity did.

The implication is that 'which model is smartest' is the wrong question — it's 'which model in which app has the tools this query actually needs.' A smaller model with tools beats a bigger model without them on tool-reliant queries, every time. This also means model benchmark comparisons can be deeply misleading if they're run on the raw model without the tool layer that real users interact with. When picking a tool for a task, check the tool inventory first; the base model quality is often the second-order concern.
