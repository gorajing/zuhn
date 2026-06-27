---
id: INS-260627-E257
domain: ai-development
topic: limitations
title: 'A large context window is a systems win, not a reasoning win'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-window
  - context-rot
  - long-context
  - transformers
  - rag
sources:
  - type: youtube
    title: 'Jack Morris: Stuffing Context is not Memory, Updating Weights is'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Jty4s9-Jb78'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    There's a gap between a model not breaking at a million tokens and actually
    reasoning across them — performance degrades sharply (Chroma's 'context
    rot') well before the limit.
  standard: >-
    Morris distinguishes two separate problems with full-context approaches.
    First, a systems problem: self-attention is quadratic, so cost and memory
    blow up, and throughput collapses (~10,000 tokens/sec output at 1K context
    vs ~130 tokens/sec at 128K context — orders of magnitude slower). Second,
    and more important, a reasoning problem: even when a model 'fits' the tokens
    without crashing, its ability to reason across them degrades. Chroma's
    'context rot' report shows that as context grows — even holding the amount
    of relevant information fixed — accuracy falls off a cliff, and past ~10,000
    tokens of distractor content models often stop solving the problem entirely
    while still producing grammatical, plausible-looking output.


    This is why Gemini 3 shipped a 1M window rather than chasing Grok's 2M: labs
    have learned to train models that don't break with more tokens, but not
    models that reason as well at a million tokens as at a thousand. Efficient
    architectures (Mamba, linear/sparse/sliding-window attention) raise the
    ceiling on what fits but carry a performance tradeoff — MiniMax M2 reverted
    to standard quadratic attention after concluding hybrids weren't worth it.
    Practical implication: don't assume dumping everything into a long context
    yields comprehension; for large corpora you still need RAG or weight-based
    approaches, and you should treat advertised context limits as 'won't crash'
    numbers, not 'reasons well' numbers.
stance: >-
  Models stop reasoning well across long context (context rot) long before they
  technically break, so a bigger context window does not mean usable
  comprehension at that length.
related:
  - INS-260325-252D
  - INS-260329-E7A4
  - INS-260330-1F25
  - INS-260402-5034
  - INS-260403-71A6
  - INS-260323-8D12
  - INS-260405-547E
  - INS-260409-93EC
  - INS-260410-F24A
  - INS-260410-699C
---
Morris distinguishes two separate problems with full-context approaches. First, a systems problem: self-attention is quadratic, so cost and memory blow up, and throughput collapses (~10,000 tokens/sec output at 1K context vs ~130 tokens/sec at 128K context — orders of magnitude slower). Second, and more important, a reasoning problem: even when a model 'fits' the tokens without crashing, its ability to reason across them degrades. Chroma's 'context rot' report shows that as context grows — even holding the amount of relevant information fixed — accuracy falls off a cliff, and past ~10,000 tokens of distractor content models often stop solving the problem entirely while still producing grammatical, plausible-looking output.

This is why Gemini 3 shipped a 1M window rather than chasing Grok's 2M: labs have learned to train models that don't break with more tokens, but not models that reason as well at a million tokens as at a thousand. Efficient architectures (Mamba, linear/sparse/sliding-window attention) raise the ceiling on what fits but carry a performance tradeoff — MiniMax M2 reverted to standard quadratic attention after concluding hybrids weren't worth it. Practical implication: don't assume dumping everything into a long context yields comprehension; for large corpora you still need RAG or weight-based approaches, and you should treat advertised context limits as 'won't crash' numbers, not 'reasons well' numbers.
