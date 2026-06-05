---
id: INS-260605-3860
domain: ai-development
topic: llm-training
title: >-
  Speech-to-speech models preserve paralinguistic cues but won't use them unless
  training forces it
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - voice-ai
  - speech-to-speech
  - paralinguistics
  - training-data
  - llm-training
sources:
  - type: youtube
    title: 'Voice AI: when is the "Her" moment? — Neil Zeghidour, CEO, Gradium AI'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=P_RI1kCkRbo'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The cues that reveal a speaker is uncomfortable or challenging are present
    in speech-to-speech input but get ignored if the model was trained on
    audio-fied factual Q&A that never needed them.
  standard: >-
    A key advantage of speech-to-speech over cascaded systems is that
    paralinguistic information — tone, hesitation, discomfort, the cues in how
    people speak — is not lost the way it is when audio is flattened to text.
    But preservation in the input is necessary, not sufficient. If you train the
    model on the audio version of an instruct dataset doing factual
    question-answering, it has no reason to ever capture or exploit those cues,
    so it never will. Capability latent in the representation only emerges when
    the training objective requires using it. This is a general principle for
    multimodal models: feeding richer signal does nothing unless the data
    distribution makes that signal pay off.
stance: >-
  Paralinguistic information survives in any speech-to-speech model's input, but
  the model will ignore it unless the training data rewards acting on tone,
  emotion, and vocal cues.
related:
  - INS-260322-191F
  - INS-260403-617C
  - INS-260403-9774
  - INS-260605-D37A
  - PRI-260406-B97E
  - INS-260329-78AE
  - INS-260321-82FE
---
A key advantage of speech-to-speech over cascaded systems is that paralinguistic information — tone, hesitation, discomfort, the cues in how people speak — is not lost the way it is when audio is flattened to text. But preservation in the input is necessary, not sufficient. If you train the model on the audio version of an instruct dataset doing factual question-answering, it has no reason to ever capture or exploit those cues, so it never will. Capability latent in the representation only emerges when the training objective requires using it. This is a general principle for multimodal models: feeding richer signal does nothing unless the data distribution makes that signal pay off.
