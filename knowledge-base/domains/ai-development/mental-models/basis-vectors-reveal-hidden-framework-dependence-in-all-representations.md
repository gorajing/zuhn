---
id: INS-260330-5A2A
domain: ai-development
topic: mental-models
title: Basis vectors reveal hidden framework dependence in all representations
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - linear-algebra
  - representation
  - mental-models
  - frameworks
sources:
  - type: youtube
    title: >-
      Linear combinations, span, and basis vectors | Chapter 2, Essence of
      linear algebra
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=k7RM-ot2NWY'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    All numerical descriptions of vectors depend on an implicit choice of basis
    vectors, meaning representation is never framework-free.
  standard: >-
    When we write a vector as (3, -2), we're implicitly saying 'scale i-hat by 3
    and j-hat by -2 and add.' Change the basis and the same geometric vector
    gets entirely different numbers. This principle extends beyond math: any
    metric, KPI, or feature representation in ML encodes assumptions about what
    dimensions matter. Recognizing basis-dependence is critical in AI
    development — choosing embedding dimensions, feature engineering, or even
    how you frame a problem space all constitute implicit basis choices that
    shape what patterns become visible or invisible.


    This is why techniques like PCA and representation learning are powerful:
    they find better bases for the data. The lesson is that when numbers seem
    objective, ask what basis produced them.
stance: >-
  Every numerical representation implicitly encodes a choice of basis, and
  failing to recognize this leads to false objectivity in data interpretation
related:
  - INS-260330-CCA2
  - INS-260330-B4DA
  - INS-260330-4F49
  - INS-260330-3B6C
  - INS-260330-6494
---
When we write a vector as (3, -2), we're implicitly saying 'scale i-hat by 3 and j-hat by -2 and add.' Change the basis and the same geometric vector gets entirely different numbers. This principle extends beyond math: any metric, KPI, or feature representation in ML encodes assumptions about what dimensions matter. Recognizing basis-dependence is critical in AI development — choosing embedding dimensions, feature engineering, or even how you frame a problem space all constitute implicit basis choices that shape what patterns become visible or invisible.

This is why techniques like PCA and representation learning are powerful: they find better bases for the data. The lesson is that when numbers seem objective, ask what basis produced them.
