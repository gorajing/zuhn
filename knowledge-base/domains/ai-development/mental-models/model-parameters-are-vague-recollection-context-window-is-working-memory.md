---
id: INS-260410-78F4
domain: ai-development
topic: mental-models
title: Model parameters are vague recollection; context window is working memory
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompting
  - context-window
  - cognition
  - karpathy
  - mental-model
sources:
  - type: youtube
    title: Deep Dive into LLMs like ChatGPT
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=7xTGNNLPyMI'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat weight-stored knowledge as a hazy recollection and the context window
    as working memory — paste the source material in rather than relying on
    recall.
  standard: >-
    Karpathy's framing: a model's billions of parameters are a lossy compression
    of what it was trained on, so factual recall resembles something you read
    weeks ago — probabilistic, biased toward frequently-seen content, unreliable
    for long-tail facts. The context window, by contrast, is information the
    network has direct mathematical access to during the current forward pass,
    analogous to information currently in your visual field or working memory.


    The practical consequence is that any time you want high-fidelity work on
    specific material, you should put that material into the prompt rather than
    asking the model to remember it. Karpathy's example: asking 'summarize
    chapter 1 of Pride and Prejudice' works okay because the text is
    overrepresented online, but the summary becomes dramatically better when you
    paste the chapter in — the model no longer has to reconstruct from memory,
    it just reads.


    This also explains why tool use (web search, code interpreter, RAG) is such
    a strong mitigation for hallucinations: retrieved content enters the context
    window, converting a recollection problem into a reading problem. Design
    prompts to minimize reliance on parametric memory wherever the cost of being
    wrong is high.
stance: >-
  The right mental model for prompting is that knowledge in an LLM's weights
  behaves like a month-old memory while tokens in the context window behave like
  active working memory.
related:
  - INS-260330-4FB9
  - INS-260405-6C88
  - INS-260409-3059
  - PRI-260320-07A4
  - INS-260409-6DBE
  - INS-260330-125E
  - INS-260330-63B8
---
Karpathy's framing: a model's billions of parameters are a lossy compression of what it was trained on, so factual recall resembles something you read weeks ago — probabilistic, biased toward frequently-seen content, unreliable for long-tail facts. The context window, by contrast, is information the network has direct mathematical access to during the current forward pass, analogous to information currently in your visual field or working memory.

The practical consequence is that any time you want high-fidelity work on specific material, you should put that material into the prompt rather than asking the model to remember it. Karpathy's example: asking 'summarize chapter 1 of Pride and Prejudice' works okay because the text is overrepresented online, but the summary becomes dramatically better when you paste the chapter in — the model no longer has to reconstruct from memory, it just reads.

This also explains why tool use (web search, code interpreter, RAG) is such a strong mitigation for hallucinations: retrieved content enters the context window, converting a recollection problem into a reading problem. Design prompts to minimize reliance on parametric memory wherever the cost of being wrong is high.
