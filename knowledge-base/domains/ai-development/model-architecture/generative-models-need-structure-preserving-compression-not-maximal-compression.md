---
id: INS-260626-6B7B
domain: ai-development
topic: model-architecture
title: >-
  Generative models need structure-preserving compression, not maximal
  compression
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - latent-diffusion
  - autoencoder
  - representation
  - inductive-bias
sources:
  - type: youtube
    title: >-
      Building Generative Image & Video models at Scale - Sander Dieleman,
      Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=xOP1PM8fwnk'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Diffusion models train on learned autoencoder latents that keep the grid
    topology intact — off-the-shelf codecs like JPEG/H.265 compress too
    aggressively and destroy the structure the network relies on.
  standard: >-
    Raw pixel tensors are infeasible at scale (30s of 1080p video is several
    gigabytes per training example), so modern image/video diffusion operates in
    a compressed latent space. The counterintuitive choice is that practitioners
    do NOT reuse mature, highly-optimized codecs (JPEG, H.265). Those codecs are
    engineered to make data small, and in doing so they 'obscure the structure
    of the data to a degree that generative modeling becomes really hard.'


    Instead, labs train their own autoencoders whose latents are deliberately
    'more primitive' than standard codecs — keeping the same grid topology as
    the original pixels, just coarser (e.g. 256x256x3 image to 32x32 latent with
    extra channels to retain high-frequency detail). This is by design: the
    convolutional and transformer architectures used downstream have strong
    inductive biases that assume spatial structure is present. The EQ-VAE
    visualization shows latents still abstract only local texture and fine
    detail while preserving recognizable semantic content.


    The transferable principle: when designing an intermediate representation,
    optimize for the consumer's assumptions, not for raw compression ratio. A
    representation that throws away exactly the wrong structure is worse than a
    larger one that keeps the structure the next stage depends on.
stance: >-
  Learned latent representations for generative modeling should deliberately
  preserve spatial/topological structure rather than compress as aggressively as
  standard codecs do.
related:
  - INS-260410-FEFA
  - INS-260605-C46E
  - PRI-260407-7FB7
  - INS-260320-DEAF
  - INS-260410-5F60
---
Raw pixel tensors are infeasible at scale (30s of 1080p video is several gigabytes per training example), so modern image/video diffusion operates in a compressed latent space. The counterintuitive choice is that practitioners do NOT reuse mature, highly-optimized codecs (JPEG, H.265). Those codecs are engineered to make data small, and in doing so they 'obscure the structure of the data to a degree that generative modeling becomes really hard.'

Instead, labs train their own autoencoders whose latents are deliberately 'more primitive' than standard codecs — keeping the same grid topology as the original pixels, just coarser (e.g. 256x256x3 image to 32x32 latent with extra channels to retain high-frequency detail). This is by design: the convolutional and transformer architectures used downstream have strong inductive biases that assume spatial structure is present. The EQ-VAE visualization shows latents still abstract only local texture and fine detail while preserving recognizable semantic content.

The transferable principle: when designing an intermediate representation, optimize for the consumer's assumptions, not for raw compression ratio. A representation that throws away exactly the wrong structure is worse than a larger one that keeps the structure the next stage depends on.
