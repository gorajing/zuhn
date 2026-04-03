---
id: INS-260403-F835
domain: startups
topic: engineering
title: AST node count not lines of code is the true measure of program complexity
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - code-complexity
  - metrics
  - programming-languages
  - abstraction
sources:
  - type: blog
    title: Succinctness is Power
    url: 'https://paulgraham.com/power.html'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Counting AST elements measures the conceptual load a programmer must hold in
    their head, unlike lines or characters.
  standard: >-
    Lines of code is the most common size metric only because it's the easiest
    to measure, not because it captures anything meaningful. Different languages
    have different conventions for line density — C uses many lines for just
    delimiters. Character count is similarly distorted by identifier naming
    conventions.


    Graham proposes counting 'elements' — distinct nodes in the source code's
    tree representation: variable names, literals, pattern elements, blocks.
    This metric approximates the mental model a programmer must construct to
    write or read the program. Since conceptual load is the real bottleneck
    (programmers can tolerate a fixed amount), this metric directly measures
    what matters for both productivity and comprehension.
stance: >-
  The number of distinct nodes in a program's abstract syntax tree is a more
  accurate measure of conceptual load than lines of code or character count.
related:
  - INS-260329-5ECD
  - INS-260329-7C59
  - INS-260329-F51D
  - INS-260329-500E
  - INS-260329-979B
  - INS-260329-2B9A
---
Lines of code is the most common size metric only because it's the easiest to measure, not because it captures anything meaningful. Different languages have different conventions for line density — C uses many lines for just delimiters. Character count is similarly distorted by identifier naming conventions.

Graham proposes counting 'elements' — distinct nodes in the source code's tree representation: variable names, literals, pattern elements, blocks. This metric approximates the mental model a programmer must construct to write or read the program. Since conceptual load is the real bottleneck (programmers can tolerate a fixed amount), this metric directly measures what matters for both productivity and comprehension.
