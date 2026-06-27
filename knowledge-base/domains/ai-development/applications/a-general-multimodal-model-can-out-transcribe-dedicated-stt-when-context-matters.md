---
id: INS-260626-BA87
domain: ai-development
topic: applications
title: >-
  A general multimodal model can out-transcribe dedicated STT when context
  matters more than latency
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - transcription
  - multimodal
  - speech-to-text
  - context-grounding
  - model-selection
sources:
  - type: youtube
    title: >-
      Building Conversational Agents — Thor Schaeff and Philipp Schmid, Google
      DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=cVzf49yg0D8'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Feeding a multimodal LLM the audio plus surrounding context (e.g., a
    screenshot, code symbols) yields transcripts grounded in the right
    vocabulary, where a pure STT model would mis-hear domain terms.
  standard: >-
    Dedicated speech-to-text models transcribe phonemes in isolation; they have
    no way to know that a mumbled token should resolve to a specific class name
    on screen or a domain term the speaker means. A general multimodal model can
    ingest both the audio AND grounding context — a screenshot, a code buffer,
    prior conversation — and produce a transcription disambiguated by what the
    user is actually looking at. The recommendation is to use Gemini 3 Flash to
    transcribe-with-context whenever the use case doesn't strictly require
    realtime streaming.


    The cost is modest: a single image is roughly 1,200 tokens, so you can send
    one frame plus a few seconds of audio without continuously streaming video
    and burning context window. A practical realtime-adjacent recipe: send one
    real-time image, then the audio, then stop — the model now answers against
    both the visual and spoken input, with no need to stream frames it doesn't
    need to react to.


    The generalizable principle is model selection by capability, not by
    category label: a 'speech' task isn't necessarily best served by a 'speech
    model.' When accuracy depends on context the audio alone can't supply, a
    model that can jointly attend to audio and the relevant grounding signal
    will beat a narrower specialist — provided you can spend the extra latency
    and tokens.
stance: >-
  When latency isn't critical, a general multimodal model produces more
  context-aware transcriptions than a dedicated speech-to-text model.
related:
  - INS-260409-BE39
  - INS-260410-5EC3
  - INS-260505-7527
  - INS-260605-9877
  - INS-260605-B03B
  - INS-260605-20C0
  - INS-260625-7530
  - INS-260625-8FBA
  - INS-260627-41BE
  - INS-260403-9774
---
Dedicated speech-to-text models transcribe phonemes in isolation; they have no way to know that a mumbled token should resolve to a specific class name on screen or a domain term the speaker means. A general multimodal model can ingest both the audio AND grounding context — a screenshot, a code buffer, prior conversation — and produce a transcription disambiguated by what the user is actually looking at. The recommendation is to use Gemini 3 Flash to transcribe-with-context whenever the use case doesn't strictly require realtime streaming.

The cost is modest: a single image is roughly 1,200 tokens, so you can send one frame plus a few seconds of audio without continuously streaming video and burning context window. A practical realtime-adjacent recipe: send one real-time image, then the audio, then stop — the model now answers against both the visual and spoken input, with no need to stream frames it doesn't need to react to.

The generalizable principle is model selection by capability, not by category label: a 'speech' task isn't necessarily best served by a 'speech model.' When accuracy depends on context the audio alone can't supply, a model that can jointly attend to audio and the relevant grounding signal will beat a narrower specialist — provided you can spend the extra latency and tokens.
