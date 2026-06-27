---
id: INS-260605-9F3D
domain: ai-development
topic: model-architecture
title: 'Multimodality reuses one embedding space via encoders, not new tokenizers'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - multimodal
  - embeddings
  - encoders
  - vision
  - audio
  - architecture
sources:
  - type: youtube
    title: >-
      Training an LLM from Scratch, Locally — Angelos Perivolaropoulos,
      ElevenLabs
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=UsB70Tf5zcE'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    For video or audio, a separate encoder transformer turns frames/spectrograms
    into vectors that override embedding slots in the text model's input — the
    transformer only cares about vectors, not whether they came from text,
    audio, or video.
  standard: >-
    When asked how this text-only pipeline extends to other modalities, the
    speaker describes a unifying trick: you don't build a new tokenizer per
    modality, you build an *encoder*. For a 30-second video you sample ~one
    frame per second, push those frames through a separate encoder transformer,
    and take that encoder's final hidden vectors. Those vectors get injected
    into the main transformer's embedding input, overriding the embeddings of
    placeholder 'video tokens' in the sequence (e.g. a prompt followed by a
    video-token slot whose embedding is replaced by encoder output). Audio works
    identically via an audio encoder.


    The key conceptual collapse: the transformer's embedding layer already maps
    token IDs to vectors, but 'these vectors don't have to correspond to a
    specific token — you can take these vectors from other places too.' So any
    modality that can be encoded into a same-dimension vector becomes a
    first-class input with no architectural change to the core model. The model
    'just cares about these vectors' and is blind to their source.


    This is why the same GPT-2-style backbone underlies modern multimodal
    systems, and it clarifies where modality-specific engineering actually
    lives: in the encoders and in choosing losses (e.g. L2 on mel spectrograms
    for TTS, KL-divergence for distillation) rather than cross-entropy — not in
    the shared transformer trunk. Whether, say, a horse video and the word
    'horse' land near each other in that shared space is left as an open,
    training-dependent empirical question.
stance: >-
  Multimodal models work by mapping each modality through a dedicated encoder
  into the same embedding space the text transformer already uses, so the core
  model only ever sees vectors and is agnostic to modality.
related:
  - INS-260627-41BE
  - INS-260626-136F
  - INS-260603-6E59
  - INS-260409-BE39
  - INS-260403-9774
---
When asked how this text-only pipeline extends to other modalities, the speaker describes a unifying trick: you don't build a new tokenizer per modality, you build an *encoder*. For a 30-second video you sample ~one frame per second, push those frames through a separate encoder transformer, and take that encoder's final hidden vectors. Those vectors get injected into the main transformer's embedding input, overriding the embeddings of placeholder 'video tokens' in the sequence (e.g. a prompt followed by a video-token slot whose embedding is replaced by encoder output). Audio works identically via an audio encoder.

The key conceptual collapse: the transformer's embedding layer already maps token IDs to vectors, but 'these vectors don't have to correspond to a specific token — you can take these vectors from other places too.' So any modality that can be encoded into a same-dimension vector becomes a first-class input with no architectural change to the core model. The model 'just cares about these vectors' and is blind to their source.

This is why the same GPT-2-style backbone underlies modern multimodal systems, and it clarifies where modality-specific engineering actually lives: in the encoders and in choosing losses (e.g. L2 on mel spectrograms for TTS, KL-divergence for distillation) rather than cross-entropy — not in the shared transformer trunk. Whether, say, a horse video and the word 'horse' land near each other in that shared space is left as an open, training-dependent empirical question.
