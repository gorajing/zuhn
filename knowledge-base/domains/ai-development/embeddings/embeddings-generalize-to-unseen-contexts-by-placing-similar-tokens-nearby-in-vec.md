---
id: INS-260410-6B98
domain: ai-development
topic: embeddings
title: >-
  Embeddings generalize to unseen contexts by placing similar tokens nearby in
  vector space
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - embeddings
  - generalization
  - language-models
  - neural-networks
sources:
  - type: youtube
    title: 'Building makemore Part 2: MLP'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=TCH_1BHY58I'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Embeddings let the model treat 'a' and 'the' as interchangeable even if the
    exact phrase was never in training — generalization via semantic geometry.
  standard: >-
    A pure count-based n-gram model cannot predict 'a dog was running in a ___'
    if that exact phrase never appeared in training — it has no signal. A neural
    LM with learned embeddings can, because backprop pushes words that appear in
    similar contexts (like 'a' and 'the', or 'cats' and 'dogs') toward nearby
    points in the embedding space. At inference time, a novel context hits a
    neighborhood the model has effectively seen under a different spelling.


    This is why embeddings are the load-bearing idea of modern language
    modeling, not just a compression trick. The 17,000-word vocabulary in Bengio
    2003 shrinks to a 30-dim dense space; the geometry of that space is what
    carries the generalization. Karpathy's makemore training visibly reproduces
    this: after training, vowels a/e/i/o/u cluster, while 'q' and '.' sit far
    out as exceptions — the model has discovered character classes with no
    supervision.


    Take this seriously whenever you evaluate a model's 'out of distribution'
    behavior: the question is not whether the literal input was seen, but
    whether it lands near seen points in embedding space. This framing also
    explains why embedding quality bottlenecks downstream performance more than
    hidden-layer size in underfit regimes.
stance: >-
  Trainable embeddings are the mechanism that lets neural language models
  generalize to token sequences they have never seen, by exploiting learned
  semantic distance rather than memorized counts.
related:
  - INS-260321-B8E8
  - INS-260408-C572
  - INS-260330-6494
  - PRI-260406-FA5B
  - INS-260330-BEAD
---
A pure count-based n-gram model cannot predict 'a dog was running in a ___' if that exact phrase never appeared in training — it has no signal. A neural LM with learned embeddings can, because backprop pushes words that appear in similar contexts (like 'a' and 'the', or 'cats' and 'dogs') toward nearby points in the embedding space. At inference time, a novel context hits a neighborhood the model has effectively seen under a different spelling.

This is why embeddings are the load-bearing idea of modern language modeling, not just a compression trick. The 17,000-word vocabulary in Bengio 2003 shrinks to a 30-dim dense space; the geometry of that space is what carries the generalization. Karpathy's makemore training visibly reproduces this: after training, vowels a/e/i/o/u cluster, while 'q' and '.' sit far out as exceptions — the model has discovered character classes with no supervision.

Take this seriously whenever you evaluate a model's 'out of distribution' behavior: the question is not whether the literal input was seen, but whether it lands near seen points in embedding space. This framing also explains why embedding quality bottlenecks downstream performance more than hidden-layer size in underfit regimes.
