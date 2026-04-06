---
id: INS-260330-CAE6
domain: ai-development
topic: llm-training
title: >-
  Networks trained on random labels memorize perfectly but with distinctly
  slower learning curves
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - memorization
  - generalization
  - learning-curves
  - optimization-landscape
sources:
  - type: youtube
    title: 'Gradient descent, how neural networks learn | Deep Learning Chapter 2'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=IHZwWFHWa-w'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Networks can memorize randomly-labeled datasets but the training curve is
    distinctly slower and more linear than when learning genuinely structured
    data.
  standard: >-
    A key experiment showed that deep networks with millions of parameters can
    achieve perfect training accuracy on randomly-labeled data — pure
    memorization with no generalizable structure. However, the accuracy curve
    for random data descends slowly and almost linearly, while structured data
    produces a sharp initial drop to high accuracy.


    This reveals something fundamental: the optimization landscape for
    structured data contains easier-to-find minima. When real patterns exist,
    gradient descent converges quickly because the loss surface has coherent
    gradients pointing toward solutions. With random labels, the network must
    brute-force memorize each example independently, producing the
    characteristic slow linear descent. This distinction between fast
    convergence (learning) and slow convergence (memorizing) is a diagnostic
    signal applicable beyond neural networks — in any learning system, the speed
    of improvement relative to exposure signals whether genuine structure is
    being captured or just surface patterns memorized.
stance: >-
  The difference between memorization and genuine learning is visible in
  optimization dynamics — structured data produces sharp accuracy gains while
  random data produces slow linear improvement
related:
  - INS-260329-5D8A
  - INS-260403-1F1B
  - PRI-260405-FB37
  - INS-260326-0AB4
  - INS-260404-CE26
  - INS-260403-B73D
evidence:
  - id: INS-260329-E208
    type: SUPPORTS
---
A key experiment showed that deep networks with millions of parameters can achieve perfect training accuracy on randomly-labeled data — pure memorization with no generalizable structure. However, the accuracy curve for random data descends slowly and almost linearly, while structured data produces a sharp initial drop to high accuracy.

This reveals something fundamental: the optimization landscape for structured data contains easier-to-find minima. When real patterns exist, gradient descent converges quickly because the loss surface has coherent gradients pointing toward solutions. With random labels, the network must brute-force memorize each example independently, producing the characteristic slow linear descent. This distinction between fast convergence (learning) and slow convergence (memorizing) is a diagnostic signal applicable beyond neural networks — in any learning system, the speed of improvement relative to exposure signals whether genuine structure is being captured or just surface patterns memorized.
