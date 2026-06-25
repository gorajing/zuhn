---
id: INS-260605-AA21
domain: ai-development
topic: model-architecture
title: >-
  Inject per-user personalization into an LLM by projecting a user embedding
  into its token space
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - soft-tokens
  - personalization
  - user-embeddings
  - collaborative-filtering
  - recommender-systems
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
    A 'soft token' — a user embedding linearly projected into the LLM's token
    space and inserted into the prompt — gives a generative recommender per-user
    context it could never learn from training data alone.
  standard: >-
    A generative recommender trained on a finite slice of interaction data
    generalizes via collaborative filtering, but cannot be trained on all 750M+
    users individually, so it lacks the specific-user signal needed for true
    personalization. Spotify closes this gap by keeping a separately-trained
    user-representation vector and projecting it into the LLM's embedding space,
    producing a 'soft token' that represents that exact user and is inserted
    into the prompt at generation time.


    This cleanly separates two concerns: the LLM backbone supplies
    generalization and world knowledge, while the projected user vector supplies
    the individualized context, contextually swapped per request. The pattern is
    a reusable recipe for personalizing any frozen or shared foundation model
    without per-user fine-tuning — train a representation in its native space,
    learn a projection into the model's token space, and let it ride along in
    the prompt. Spotify reports positive internal metrics and has productionized
    this for next-episode podcast recommendations.
stance: >-
  Projecting a user-representation vector into an LLM's embedding space as a
  soft token personalizes a generative recommender that could never be trained
  on every user individually.
related:
  - INS-260403-141E
  - INS-260501-C4AA
  - INS-260410-699C
  - INS-260625-BD36
  - INS-260625-DF0F
---
A generative recommender trained on a finite slice of interaction data generalizes via collaborative filtering, but cannot be trained on all 750M+ users individually, so it lacks the specific-user signal needed for true personalization. Spotify closes this gap by keeping a separately-trained user-representation vector and projecting it into the LLM's embedding space, producing a 'soft token' that represents that exact user and is inserted into the prompt at generation time.

This cleanly separates two concerns: the LLM backbone supplies generalization and world knowledge, while the projected user vector supplies the individualized context, contextually swapped per request. The pattern is a reusable recipe for personalizing any frozen or shared foundation model without per-user fine-tuning — train a representation in its native space, learn a projection into the model's token space, and let it ride along in the prompt. Spotify reports positive internal metrics and has productionized this for next-episode podcast recommendations.
