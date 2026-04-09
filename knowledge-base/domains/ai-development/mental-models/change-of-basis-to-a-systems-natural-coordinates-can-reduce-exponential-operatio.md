---
id: INS-260330-798D
domain: ai-development
topic: mental-models
title: >-
  Change of basis to a system's natural coordinates can reduce exponential
  operations to trivial ones
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - eigenbasis
  - diagonalization
  - coordinate-systems
  - computational-complexity
sources:
  - type: youtube
    title: 'Eigenvectors and eigenvalues | Chapter 14, Essence of linear algebra'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=PFDu9oVAE-g'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Computing the 100th power of a matrix is a nightmare in standard coordinates
    but trivial in an eigenbasis — just raise each diagonal eigenvalue to the
    100th power.
  standard: >-
    When basis vectors are eigenvectors, the transformation matrix becomes
    diagonal — zeros everywhere except the diagonal. Computing the Nth power of
    a diagonal matrix means just raising each diagonal entry to the Nth power,
    turning an O(n³·log N) matrix exponentiation into O(n) scalar operations.
    The key insight is that the same transformation, viewed from different
    coordinate systems, can range from nightmarish to trivial.


    This generalizes as a problem-solving strategy: before brute-forcing a
    computation, ask whether there's a change of representation that makes the
    problem diagonal — where each component can be solved independently. Fourier
    transforms decompose signals into independent frequency components. Database
    normalization decomposes data into independent tables. The eigenbasis
    strategy says: find the representation where the problem decomposes into
    independent, trivially solvable parts.
stance: >-
  Choosing the right coordinate system doesn't just simplify computation — it
  can reduce a problem's computational complexity class entirely.
related:
  - INS-260330-D7CA
  - INS-260323-2117
  - INS-260321-53E2
  - INS-260330-E059
  - INS-260409-5C28
---
When basis vectors are eigenvectors, the transformation matrix becomes diagonal — zeros everywhere except the diagonal. Computing the Nth power of a diagonal matrix means just raising each diagonal entry to the Nth power, turning an O(n³·log N) matrix exponentiation into O(n) scalar operations. The key insight is that the same transformation, viewed from different coordinate systems, can range from nightmarish to trivial.

This generalizes as a problem-solving strategy: before brute-forcing a computation, ask whether there's a change of representation that makes the problem diagonal — where each component can be solved independently. Fourier transforms decompose signals into independent frequency components. Database normalization decomposes data into independent tables. The eigenbasis strategy says: find the representation where the problem decomposes into independent, trivially solvable parts.
