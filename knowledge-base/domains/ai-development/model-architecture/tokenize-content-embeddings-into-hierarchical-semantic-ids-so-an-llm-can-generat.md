---
id: INS-260605-77D8
domain: ai-development
topic: model-architecture
title: >-
  Tokenize content embeddings into hierarchical semantic IDs so an LLM can
  generate the next item
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - recommender-systems
  - semantic-ids
  - tokenization
  - embeddings
  - generative-retrieval
sources:
  - type: youtube
    title: 'Personalization in the Era of LLMs - Shivam Verma, Spotify'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=5YSJEP0HWzM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Semantic IDs turn a ~1000-dim content embedding into 4-6 hierarchical
    tokens, so an LLM can autoregressively generate the next song or episode the
    way it generates the next word.
  standard: >-
    Spotify takes the vector representing a piece of content (track, episode,
    artist) and tokenizes it into a small set of discrete tokens — compressing a
    roughly thousand-dimensional embedding into four to six tokens. The
    structure is hierarchical: Ariana Grande and Bruno Mars share their first
    two tokens because both are pop artists, while later tokens diverge to
    encode niche distinctions. This is a coarse-to-fine code, not an arbitrary
    hash.


    The payoff is architectural reuse: once content is a token sequence, the
    entire mature LLM training and inference apparatus applies unchanged. The
    model is continually trained on catalog data to 'speak' semantic IDs, then
    autoregressively generates the next token — except the next token is the
    next song or episode rather than the next word. This collapses the
    distinction between language modeling and recommendation, letting a recsys
    team inherit transformer tooling instead of building bespoke
    candidate-generation and ranking infrastructure. The concept originates from
    a Google/YouTube paper but generalizes to any platform with a large item
    catalog.
stance: >-
  Compressing a content vector into a few hierarchical discrete tokens lets a
  recommender reuse the standard autoregressive LLM stack to predict the next
  item.
related:
  - INS-260327-9816
  - INS-260405-11EA
  - INS-260410-2F8D
  - INS-260605-20C0
  - INS-260410-E1D9
  - INS-260626-69EF
---
Spotify takes the vector representing a piece of content (track, episode, artist) and tokenizes it into a small set of discrete tokens — compressing a roughly thousand-dimensional embedding into four to six tokens. The structure is hierarchical: Ariana Grande and Bruno Mars share their first two tokens because both are pop artists, while later tokens diverge to encode niche distinctions. This is a coarse-to-fine code, not an arbitrary hash.

The payoff is architectural reuse: once content is a token sequence, the entire mature LLM training and inference apparatus applies unchanged. The model is continually trained on catalog data to 'speak' semantic IDs, then autoregressively generates the next token — except the next token is the next song or episode rather than the next word. This collapses the distinction between language modeling and recommendation, letting a recsys team inherit transformer tooling instead of building bespoke candidate-generation and ranking infrastructure. The concept originates from a Google/YouTube paper but generalizes to any platform with a large item catalog.
