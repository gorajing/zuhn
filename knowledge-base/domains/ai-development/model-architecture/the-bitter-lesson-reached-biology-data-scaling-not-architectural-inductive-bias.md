---
id: INS-260625-9B0C
domain: ai-development
topic: model-architecture
title: >-
  The bitter lesson reached biology: data scaling, not architectural inductive
  bias, broke the protein-model plateau
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - bitter-lesson
  - scaling-laws
  - protein-folding
  - data-scaling
  - biology
sources:
  - type: youtube
    title: >-
      Self-Play for LLMs, AI for Biology, Formal Verification, and More | YC
      Paper Club
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=3rWSvrFahIY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    ESM-C's continued scaling came from pushing training samples 50M to 2.8B
    (largely metagenomic data), not clever architecture, and its single-sequence
    model now matches MSA-based AlphaFold and wins where evolutionary data is
    sparse.
  standard: >-
    Yasa Baig's reading of the ESM-C (ESM Cambrian) paper is 'the bitter lesson
    comes from biology.' The prior ESM2 generation hit a wall — adding
    parameters gave diminishing returns and the scaling curve flattened. ESM-C
    keeps climbing with no plateau, and the fix was not a clever inductive bias
    but data: the team pushed from ~50M training samples to ~2.8B by pulling in
    metagenomic sequences (protein found by sequencing DNA from dirt, oceans,
    and human guts). A masked-language model trained only on raw amino-acid
    sequences — no MSA, no handcrafted evolutionary features — lands within
    about three points of AlphaFold3 on general protein complexes and actually
    beats it on antibody design (roughly 50 vs 47), precisely the modality where
    MSA data is sparse but drug designers most need predictions.


    The deeper lesson is the classic bitter-lesson arc: domain-engineered
    features (the MSA, analogous to HOG features in vision) win first but
    eventually lose to scaled general methods, and they are also slow and absent
    exactly where you want them. Supporting evidence: the model's latent space
    decomposes via sparse autoencoders into a clean, unsupervised biological
    hierarchy (amino acids to structural motifs to domains to functional sites),
    and a single recurrent 'looped' projection head lets you scale
    inference-time compute much like test-time sampling. Strategically, biology
    is data-rich and getting richer — evolution has generated four billion years
    of sequences and we've sampled under 1% — making it an attractive,
    under-modeled ML frontier where the right bet is general scaled models plus
    more data over handcrafted domain features.
stance: >-
  General sequence models trained at scale will overtake handcrafted-feature
  specialists in biology just as they did in NLP and vision, and the binding
  constraint is training-data volume rather than architecture.
related:
  - INS-260403-B73D
  - INS-260403-2A92
  - INS-260410-34F5
  - INS-260410-41DD
  - INS-260410-D082
  - INS-260413-C040
  - INS-260605-6B24
  - INS-260605-6A0A
  - INS-260625-B5A8
  - INS-260625-43B3
---
Yasa Baig's reading of the ESM-C (ESM Cambrian) paper is 'the bitter lesson comes from biology.' The prior ESM2 generation hit a wall — adding parameters gave diminishing returns and the scaling curve flattened. ESM-C keeps climbing with no plateau, and the fix was not a clever inductive bias but data: the team pushed from ~50M training samples to ~2.8B by pulling in metagenomic sequences (protein found by sequencing DNA from dirt, oceans, and human guts). A masked-language model trained only on raw amino-acid sequences — no MSA, no handcrafted evolutionary features — lands within about three points of AlphaFold3 on general protein complexes and actually beats it on antibody design (roughly 50 vs 47), precisely the modality where MSA data is sparse but drug designers most need predictions.

The deeper lesson is the classic bitter-lesson arc: domain-engineered features (the MSA, analogous to HOG features in vision) win first but eventually lose to scaled general methods, and they are also slow and absent exactly where you want them. Supporting evidence: the model's latent space decomposes via sparse autoencoders into a clean, unsupervised biological hierarchy (amino acids to structural motifs to domains to functional sites), and a single recurrent 'looped' projection head lets you scale inference-time compute much like test-time sampling. Strategically, biology is data-rich and getting richer — evolution has generated four billion years of sequences and we've sampled under 1% — making it an attractive, under-modeled ML frontier where the right bet is general scaled models plus more data over handcrafted domain features.
