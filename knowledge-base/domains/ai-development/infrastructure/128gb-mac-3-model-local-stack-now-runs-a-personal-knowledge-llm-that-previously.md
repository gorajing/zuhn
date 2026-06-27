---
id: INS-260514-D023
domain: ai-development
topic: infrastructure
title: >-
  128GB Mac + 3-model local stack now runs a personal knowledge LLM that
  previously needed cloud
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - local-llm
  - apple-silicon
  - mlx
  - personal-ai
  - hardware-thresholds
  - alda
sources:
  - type: youtube
    title: M5 프로맥스 128G로 구축한 나만의 LLM Wiki 전격 대공개!
    author: 배움의 달인 (AI·자동화)
    url: 'https://youtu.be/YCirjfAurng'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A 128GB M5 Pro Max + 3-model local stack (~71GB RAM) now runs a 9,700-note
    personal AI wiki without cloud — the hardware floor for serious local
    knowledge work has dropped to single-laptop.
  standard: >-
    Kim Moon-jeong's working stack for a personal LM Wiki on an M5 Pro Max
    128GB: (1) Qwen-class reasoning model for question-answering, (2) NVIDIA
    Nemotron for entity/concept extraction during indexing, (3) BGE-M3 for
    embeddings, served via MLX (Apple's metal-accelerated framework, preferred
    over Ollama for speed). Combined RAM footprint: ~71GB of the 128GB
    available. Daily operation: 9,700 Obsidian notes indexed via the Alda plugin
    into a wiki structure with 1,228 wiki pages, 9,089 entities, 4,329 concepts,
    and ~10,000 connections. The non-obvious threshold: this stack would have
    been hopeless on a 16GB or 32GB Mac (you can't fit all 3 models
    simultaneously) — 64GB is the bare minimum and even then you're swapping.
    128GB makes it comfortable, and the M5 Pro Max generation has the memory
    bandwidth to keep inference latency tolerable. The implication: 'local LLM
    is impractical for serious work' was true at 32GB and below; it's false at
    128GB. This is a privacy unlock for any operator handling sensitive context
    (student counseling notes, patient data, legal client work, financial
    records) where uploading to cloud is either restricted by policy or a
    personal preference. The deeper architectural lesson: the right unit of
    analysis isn't 'one model' but 'a stack of specialized models with
    complementary roles' (reasoning + extraction + embedding) — much like Nathan
    Lippi's specialized agents per channel, applied to the local AI domain.
stance: >-
  A 128GB M5 Pro Max running 3 specialized local models (Qwen-class for
  reasoning + Nemotron for extraction + BGE-M3 for embedding, ~71GB RAM total)
  is now sufficient to operate a personal AI wiki indexing 9,700+ notes —
  meaning the hardware floor for serious local AI knowledge work has dropped
  from data-center scale to single-laptop, removing both privacy and operational
  dependencies on cloud providers.
related:
  - INS-260403-72C2
  - INS-260514-2995
  - INS-260605-86BE
  - INS-260514-1277
  - INS-260627-8F84
---
Kim Moon-jeong's working stack for a personal LM Wiki on an M5 Pro Max 128GB: (1) Qwen-class reasoning model for question-answering, (2) NVIDIA Nemotron for entity/concept extraction during indexing, (3) BGE-M3 for embeddings, served via MLX (Apple's metal-accelerated framework, preferred over Ollama for speed). Combined RAM footprint: ~71GB of the 128GB available. Daily operation: 9,700 Obsidian notes indexed via the Alda plugin into a wiki structure with 1,228 wiki pages, 9,089 entities, 4,329 concepts, and ~10,000 connections. The non-obvious threshold: this stack would have been hopeless on a 16GB or 32GB Mac (you can't fit all 3 models simultaneously) — 64GB is the bare minimum and even then you're swapping. 128GB makes it comfortable, and the M5 Pro Max generation has the memory bandwidth to keep inference latency tolerable. The implication: 'local LLM is impractical for serious work' was true at 32GB and below; it's false at 128GB. This is a privacy unlock for any operator handling sensitive context (student counseling notes, patient data, legal client work, financial records) where uploading to cloud is either restricted by policy or a personal preference. The deeper architectural lesson: the right unit of analysis isn't 'one model' but 'a stack of specialized models with complementary roles' (reasoning + extraction + embedding) — much like Nathan Lippi's specialized agents per channel, applied to the local AI domain.
