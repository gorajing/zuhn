---
id: INS-260410-5036
domain: ai-development
topic: research-methodology
title: >-
  Deep learning development is mostly shape gymnastics and documentation
  archaeology
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - development-process
  - pytorch
  - jupyter
  - tensor-shapes
  - workflow
sources:
  - type: youtube
    title: 'Building makemore Part 5: Building a WaveNet'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=t3YJ5hKiMQ0'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Real deep-learning development is Jupyter-notebook shape debugging plus
    empirical verification of flaky framework docs, not the clean math suggested
    by papers and tutorials.
  standard: >-
    Karpathy's meta-commentary on the development process is worth more than the
    WaveNet implementation itself. He describes a workflow with three concrete
    features: (1) a huge fraction of time spent on PyTorch's documentation pages
    checking what shapes each layer accepts (NCL vs NLC, 2D vs 3D, default
    dimensions), with the caveat that 'no one is maintaining any documentation —
    it will lie to you, it will be wrong, it will be incomplete'; (2) extensive
    shape gymnastics — reshaping, viewing, squeezing, broadcasting — just to get
    tensors to line up between layers; (3) a two-tool workflow where layers are
    prototyped in a Jupyter notebook to babysit the shapes, and only copy-pasted
    into a VS Code repository once they actually work.


    This is important because most deep-learning education frames model-building
    as mathematical reasoning: derive the gradient, implement the formula, done.
    In practice, the math is 10% of the work and the other 90% is verifying that
    a tensor you thought was (B, T, C) is actually (B, C, T), or noticing that a
    framework function silently broadcasts in a way that doesn't error but also
    doesn't do what you meant.


    The implication for your own workflow: don't feel inadequate when you spend
    hours on shape debugging — that is the work. Build reflexes around printing
    shapes at every layer, writing tiny scratch cells to verify framework
    behavior empirically, and distrusting any documentation you haven't
    personally tested. Jupyter (or any REPL) is not a beginner's crutch; it's
    the production debugging environment.
stance: >-
  The actual workflow of building neural nets is dominated by tensor-shape
  debugging and empirically verifying unreliable framework documentation, not by
  elegant mathematical derivation.
related:
  - INS-260329-FC75
  - INS-260329-3763
  - INS-260403-AC03
  - INS-260410-5F60
  - INS-260403-F8CB
---
Karpathy's meta-commentary on the development process is worth more than the WaveNet implementation itself. He describes a workflow with three concrete features: (1) a huge fraction of time spent on PyTorch's documentation pages checking what shapes each layer accepts (NCL vs NLC, 2D vs 3D, default dimensions), with the caveat that 'no one is maintaining any documentation — it will lie to you, it will be wrong, it will be incomplete'; (2) extensive shape gymnastics — reshaping, viewing, squeezing, broadcasting — just to get tensors to line up between layers; (3) a two-tool workflow where layers are prototyped in a Jupyter notebook to babysit the shapes, and only copy-pasted into a VS Code repository once they actually work.

This is important because most deep-learning education frames model-building as mathematical reasoning: derive the gradient, implement the formula, done. In practice, the math is 10% of the work and the other 90% is verifying that a tensor you thought was (B, T, C) is actually (B, C, T), or noticing that a framework function silently broadcasts in a way that doesn't error but also doesn't do what you meant.

The implication for your own workflow: don't feel inadequate when you spend hours on shape debugging — that is the work. Build reflexes around printing shapes at every layer, writing tiny scratch cells to verify framework behavior empirically, and distrusting any documentation you haven't personally tested. Jupyter (or any REPL) is not a beginner's crutch; it's the production debugging environment.
