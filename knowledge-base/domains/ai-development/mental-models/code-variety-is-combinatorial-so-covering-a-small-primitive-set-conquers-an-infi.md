---
id: INS-260627-0127
domain: ai-development
topic: mental-models
title: >-
  Code variety is combinatorial, so covering a small primitive set conquers an
  infinite space
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - combinatorics
  - abstraction
  - tractability
  - primitives
  - compiler-design
sources:
  - type: youtube
    title: 'Compilers in the Age of LLMs — Yusuf Olokoba, Muna'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=q2nHsJVy4FE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    You don't need to translate every possible Python function — only the base
    set of elementary operations, because all variety is composition and
    permutation of that small set.
  standard: >-
    Translating arbitrary Python to native code looks intractable: there is
    unbounded variety in code seen in the wild. The reframe that makes it
    solvable is recognizing that the variety isn't from a giant volume of
    distinct operations — it's from the combinatorial number of ways a small set
    of elementary operations can be combined and permuted. Cover the base set of
    primitives (add, subtract, exponentiate, common numpy/torch ops), and you
    can stack and compose them in C++ exactly as Python does, reaching the whole
    space.


    This is a general tractability heuristic for any problem that presents as an
    infinite combinatorial explosion: find the generating set. When the surface
    complexity is composition of primitives, the engineering target shifts from
    'handle every case' to 'completely cover the primitive layer plus the
    composition rules.' It is the same move behind type systems, instruction
    sets, and grammar-based parsing — and it converts an unbounded enumeration
    problem into a bounded, finite one. The remaining cost (writing each
    primitive's native equivalent) is real but finite, which is precisely why
    offloading it to an LLM becomes worthwhile.
stance: >-
  The apparent infinite variety of real-world code comes from permuting a small
  set of elementary operations, so covering the primitives — not enumerating
  programs — makes translation tractable.
related:
  - INS-260330-083D
  - INS-260404-C7A1
  - INS-260329-91DD
  - INS-260524-B6B3
  - INS-260330-D2D2
  - INS-260330-6494
---
Translating arbitrary Python to native code looks intractable: there is unbounded variety in code seen in the wild. The reframe that makes it solvable is recognizing that the variety isn't from a giant volume of distinct operations — it's from the combinatorial number of ways a small set of elementary operations can be combined and permuted. Cover the base set of primitives (add, subtract, exponentiate, common numpy/torch ops), and you can stack and compose them in C++ exactly as Python does, reaching the whole space.

This is a general tractability heuristic for any problem that presents as an infinite combinatorial explosion: find the generating set. When the surface complexity is composition of primitives, the engineering target shifts from 'handle every case' to 'completely cover the primitive layer plus the composition rules.' It is the same move behind type systems, instruction sets, and grammar-based parsing — and it converts an unbounded enumeration problem into a bounded, finite one. The remaining cost (writing each primitive's native equivalent) is real but finite, which is precisely why offloading it to an LLM becomes worthwhile.
