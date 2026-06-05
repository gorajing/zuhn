---
id: INS-260501-94AC
domain: ai-development
topic: model-architecture
title: >-
  Compute depth without parameter depth — recursion gives you N-step reasoning
  at constant model size
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - compute-vs-parameters
  - weight-sharing
  - model-efficiency
  - recursion
sources:
  - type: youtube
    title: Recursion Is The Next Scaling Law In AI
    author: Y Combinator
    url: 'https://youtu.be/DGtUUMNYLcc'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Same weights applied N times = same compute as N-layer stack with 1/N the
    parameters.
  standard: >-
    Chollet's structural insight: in a transformer with 100 distinct layers,
    each layer has its own weight matrix. In a recursive model that calls one
    layer 100 times, you have one weight matrix shared across all calls. The
    compute time is similar (you're still doing 100 forward passes through a
    transformer block), but the parameter count is 100x smaller — drastically
    reducing memory footprint, gradient memory during training, and inference
    deployment cost.


    TRM's evidence: collapsing the HRM's separate L-net (low-level) and H-net
    (high-level) networks into a single weight-shared 'net' (with the latent
    variables ZL and Z kept distinct as scoping mechanisms) actually improves
    performance while reducing parameters from 27M to 7M. Going deeper (more
    transformer layers per recursion call) didn't help; going wider (more
    recursion steps) did. For builders: this is a credible architectural
    alternative for any verifiable-reasoning workload. The marginal cost of an
    additional reasoning step is just one forward pass through the small
    recurrent module, not training a new layer with new parameters. Inference
    economics for these reasoning models are 1-2 orders of magnitude better than
    equivalent-capability LLMs.
stance: >-
  Stacking 100 transformer layers and recursing a 1-layer transformer 100 times
  do similar work computationally, but the recursive version uses 100x fewer
  parameters — making memory, training, and inference dramatically cheaper for
  the same reasoning depth.
related:
  - INS-260410-885B
  - INS-260501-FE35
  - INS-260325-FDA9
  - INS-260329-4109
  - INS-260605-048B
---
Chollet's structural insight: in a transformer with 100 distinct layers, each layer has its own weight matrix. In a recursive model that calls one layer 100 times, you have one weight matrix shared across all calls. The compute time is similar (you're still doing 100 forward passes through a transformer block), but the parameter count is 100x smaller — drastically reducing memory footprint, gradient memory during training, and inference deployment cost.

TRM's evidence: collapsing the HRM's separate L-net (low-level) and H-net (high-level) networks into a single weight-shared 'net' (with the latent variables ZL and Z kept distinct as scoping mechanisms) actually improves performance while reducing parameters from 27M to 7M. Going deeper (more transformer layers per recursion call) didn't help; going wider (more recursion steps) did. For builders: this is a credible architectural alternative for any verifiable-reasoning workload. The marginal cost of an additional reasoning step is just one forward pass through the small recurrent module, not training a new layer with new parameters. Inference economics for these reasoning models are 1-2 orders of magnitude better than equivalent-capability LLMs.
