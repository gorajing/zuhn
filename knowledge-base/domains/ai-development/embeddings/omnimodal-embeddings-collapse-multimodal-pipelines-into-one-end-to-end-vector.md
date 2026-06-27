---
id: INS-260627-41BE
domain: ai-development
topic: embeddings
title: Omnimodal embeddings collapse multimodal pipelines into one end-to-end vector
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - embeddings
  - multimodal
  - retrieval
  - gemini
  - architecture
sources:
  - type: youtube
    title: "How Google DeepMind is researching the next Frontier of AI for Gemini —\_Raia Hadsell, VP of Research"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zZsTVBXcbow'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Encoding text, video, audio, and PDFs through one omnimodal model into a
    unified semantic vector preserves cross-modal information that separate
    encoders lose when merged.
  standard: >-
    Hadsell positions embedding models as the under-discussed but essential
    companion to generative AI — 'sometimes we want to generate, sometimes we
    want to retrieve.' She uses the neuroscience 'Jennifer Aniston cell'
    analogy: a small robust set of neurons fires for a concept regardless of
    whether it arrives as a name, image, or voice, enabling fast retrieval,
    recognition, and comparison. The goal is to reproduce that
    modality-invariance in an artificial network via contrastive losses.


    The concrete claim is that Gemini Embeddings 2, being fully omnimodal and
    derived from Gemini, lets you go truly end-to-end: a single vector can
    represent up to 8K tokens of text, 128 seconds of video, 80 seconds of
    audio, and a full PDF together. The win over a pipeline that encodes each
    modality separately and then fuses is that you don't lose information in the
    combination step. For builders of RAG, agentic retrieval, and search, this
    argues for unified omnimodal encoders over assembled per-modality stacks.
stance: >-
  A single omnimodal embedding model beats stitched-together per-modality
  encoders because it avoids the information loss of combining
  separately-encoded streams.
related:
  - INS-260322-B09B
  - INS-260605-9F3D
  - INS-260626-BA87
  - INS-260626-136F
  - INS-260403-9774
---
Hadsell positions embedding models as the under-discussed but essential companion to generative AI — 'sometimes we want to generate, sometimes we want to retrieve.' She uses the neuroscience 'Jennifer Aniston cell' analogy: a small robust set of neurons fires for a concept regardless of whether it arrives as a name, image, or voice, enabling fast retrieval, recognition, and comparison. The goal is to reproduce that modality-invariance in an artificial network via contrastive losses.

The concrete claim is that Gemini Embeddings 2, being fully omnimodal and derived from Gemini, lets you go truly end-to-end: a single vector can represent up to 8K tokens of text, 128 seconds of video, 80 seconds of audio, and a full PDF together. The win over a pipeline that encodes each modality separately and then fuses is that you don't lose information in the combination step. For builders of RAG, agentic retrieval, and search, this argues for unified omnimodal encoders over assembled per-modality stacks.
