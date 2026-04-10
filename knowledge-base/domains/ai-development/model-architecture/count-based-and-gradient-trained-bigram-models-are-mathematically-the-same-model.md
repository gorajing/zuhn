---
id: INS-260410-5EE7
domain: ai-development
topic: model-architecture
title: >-
  Count-based and gradient-trained bigram models are mathematically the same
  model
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - bigram
  - language-models
  - equivalence
  - gradient-descent
  - first-principles
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
    A neural net with one linear layer + softmax trained on NLL converges to
    exp(W) equal to the explicit bigram count matrix, so the two frameworks are
    the same model reached by different paths.
  standard: >-
    Karpathy trains makemore twice on the same data. The first pass counts every
    bigram in 32k names, normalizes rows of the count matrix, and achieves an
    average negative log likelihood of ~2.45. The second pass initializes a
    27x27 weight matrix randomly, runs forward passes that produce logits,
    exponentiates to 'fake counts', normalizes to probabilities, computes NLL
    loss, and descends the gradient. It converges to ~2.45 — the identical loss
    — because exp(W) at convergence literally equals the normalized count table
    the first approach computes directly.


    The deeper lesson is that neural language modeling is not a different theory
    of statistics; it is a more flexible optimizer for the same objective. The
    count-based approach is optimal for bigrams because the closed form is
    cheap. But count tables explode combinatorially once you condition on more
    than one previous character, whereas neural nets handle arbitrarily large
    contexts with the same forward-pass-loss-backward-update machinery. This
    equivalence is the pedagogical bridge that makes every subsequent
    architecture — MLPs, RNNs, transformers — feel like variations on a theme
    rather than disconnected techniques.
stance: >-
  Training a bigram language model by counting-and-normalizing produces the
  exact same probability table as training a one-layer neural net with softmax
  and negative log likelihood.
related:
  - INS-260330-5F36
  - INS-260330-6BBD
  - INS-260410-684D
  - INS-260410-72EC
  - INS-260410-5F60
  - PRI-260407-7FB7
  - INS-260410-CB46
---
Karpathy trains makemore twice on the same data. The first pass counts every bigram in 32k names, normalizes rows of the count matrix, and achieves an average negative log likelihood of ~2.45. The second pass initializes a 27x27 weight matrix randomly, runs forward passes that produce logits, exponentiates to 'fake counts', normalizes to probabilities, computes NLL loss, and descends the gradient. It converges to ~2.45 — the identical loss — because exp(W) at convergence literally equals the normalized count table the first approach computes directly.

The deeper lesson is that neural language modeling is not a different theory of statistics; it is a more flexible optimizer for the same objective. The count-based approach is optimal for bigrams because the closed form is cheap. But count tables explode combinatorially once you condition on more than one previous character, whereas neural nets handle arbitrarily large contexts with the same forward-pass-loss-backward-update machinery. This equivalence is the pedagogical bridge that makes every subsequent architecture — MLPs, RNNs, transformers — feel like variations on a theme rather than disconnected techniques.
