---
id: INS-260627-3035
domain: ai-development
topic: prompting
title: >-
  Prompt for what you want, not what you don't — the latent space has few
  negatives
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - prompting
  - contrastive-learning
  - embeddings
  - image-generation
  - prompt-engineering
sources:
  - type: youtube
    title: "VoiceVision RAG - Integrating Visual Document Intelligence with Voice Response —\_Suman Debnath, AWS"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=hwCmfThIiS4'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    'Dog sitting on a chair' beats 'dog should not sit on the floor' because
    models are trained on positive image-text pairs and have little
    representation of negation.
  standard: >-
    The common prompt-engineering advice to state what you want rather than what
    you don't has a mechanistic root the speaker traces to contrastive training.
    Vision-language and embedding models learn by pulling matching image-text
    pairs together and pushing mismatched (negative) pairs apart, but the
    training distribution is dominated by positive samples — there simply aren't
    enough negative examples for the model to build a rich representation of
    'not X.'


    The consequence is that a negative constraint underspecifies. 'The dog
    should not sit on the floor' leaves the entire rest of the space open — the
    model can satisfy it by putting the dog on a desk, a windowsill, anywhere.
    'A dog sitting on a chair' points directly at the target region of the
    latent space. The speaker's analogy: asking someone what they want for
    dinner is hard to answer by listing dislikes; the positive specification is
    what actually constrains the outcome.


    The takeaway is practical and immediate for anyone writing prompts for
    generative or retrieval systems: convert prohibitions into affirmative
    descriptions of the desired result, because the model's geometry rewards
    presence far more reliably than it punishes absence.
stance: >-
  Positive prompts outperform negative ones because contrastive-trained
  embedding spaces are organized around the presence of concepts, with sparse
  negative samples.
related:
  - INS-260403-9774
  - INS-260625-D790
  - INS-260410-FBAA
  - INS-260410-1248
  - INS-260505-A413
---
The common prompt-engineering advice to state what you want rather than what you don't has a mechanistic root the speaker traces to contrastive training. Vision-language and embedding models learn by pulling matching image-text pairs together and pushing mismatched (negative) pairs apart, but the training distribution is dominated by positive samples — there simply aren't enough negative examples for the model to build a rich representation of 'not X.'

The consequence is that a negative constraint underspecifies. 'The dog should not sit on the floor' leaves the entire rest of the space open — the model can satisfy it by putting the dog on a desk, a windowsill, anywhere. 'A dog sitting on a chair' points directly at the target region of the latent space. The speaker's analogy: asking someone what they want for dinner is hard to answer by listing dislikes; the positive specification is what actually constrains the outcome.

The takeaway is practical and immediate for anyone writing prompts for generative or retrieval systems: convert prohibitions into affirmative descriptions of the desired result, because the model's geometry rewards presence far more reliably than it punishes absence.
