---
id: INS-260410-351E
domain: ai-development
topic: system-building
title: >-
  PyTorch broadcasting silently produces wrong answers when dimensions get
  dropped
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - pytorch
  - broadcasting
  - bugs
  - tensor-shapes
  - debugging
sources:
  - type: youtube
    title: 'The spelled-out intro to language modeling: building makemore'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=PaCmpygFfXo'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    sum(dim=1) without keepdim=True returns a 1D vector that broadcasting
    silently treats as a row vector, which normalizes columns instead of rows —
    producing garbage with no error.
  standard: >-
    Karpathy deliberately introduces a subtle bug: he computes p.sum(1) without
    keepdim=True, producing a 1D tensor of shape (27,), then divides the 27x27
    count matrix by it. Broadcasting rules align dimensions from the right, so
    the (27,) tensor is implicitly reshaped to (1, 27) — a row vector — and
    replicated down the rows of the 27x27 matrix. The division then normalizes
    columns instead of rows, and the resulting 'probability' matrix has rows
    that do not sum to 1. Crucially, nothing raises an error; the code runs, the
    shapes are consistent, and the model just silently trains on wrong
    distributions.


    The lesson is stricter than 'read the docs'. It is: broadcasting will
    happily align your tensors in the wrong direction if you let it guess,
    because 'which dimension should I replicate along?' has no right answer
    without context. Defensive patterns: always pass keepdim=True when you will
    divide by the result, explicitly print shapes during development, and write
    unit tests that check row sums equal one. Any bug where an LLM loss is
    'slightly off' or a classifier trains but doesn't converge should prompt an
    immediate audit of every broadcasted operation in the forward pass — this
    class of error is the single easiest way to ship a model that looks correct
    but is mathematically wrong.
stance: >-
  Broadcasting in tensor libraries is a footgun that will compile and run on
  buggy code, so you must use keepdim=True and check shapes explicitly rather
  than trusting the operation to do what you intended.
related:
  - INS-260329-4109
  - INS-260330-2689
  - INS-260330-1609
  - INS-260326-CAAB
  - INS-260330-BFD0
---
Karpathy deliberately introduces a subtle bug: he computes p.sum(1) without keepdim=True, producing a 1D tensor of shape (27,), then divides the 27x27 count matrix by it. Broadcasting rules align dimensions from the right, so the (27,) tensor is implicitly reshaped to (1, 27) — a row vector — and replicated down the rows of the 27x27 matrix. The division then normalizes columns instead of rows, and the resulting 'probability' matrix has rows that do not sum to 1. Crucially, nothing raises an error; the code runs, the shapes are consistent, and the model just silently trains on wrong distributions.

The lesson is stricter than 'read the docs'. It is: broadcasting will happily align your tensors in the wrong direction if you let it guess, because 'which dimension should I replicate along?' has no right answer without context. Defensive patterns: always pass keepdim=True when you will divide by the result, explicitly print shapes during development, and write unit tests that check row sums equal one. Any bug where an LLM loss is 'slightly off' or a classifier trains but doesn't converge should prompt an immediate audit of every broadcasted operation in the forward pass — this class of error is the single easiest way to ship a model that looks correct but is mathematically wrong.
