---
id: INS-260423-D900
domain: ai-development
topic: llm-behavior
title: >-
  LLM hallucinations should be called confabulations — they are not a technical
  glitch but the same phenomenon humans exhibit
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - confabulation
  - memory
  - human-ai-parallels
  - terminology
sources:
  - type: youtube
    title: Is AI Hiding Its Full Power? With Geoffrey Hinton
    author: StarTalk
    url: 'https://youtu.be/l6ZcFa8pybE'
date_extracted: '2026-04-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Hinton: chatbots don't store strings of words or particular events — they
    make them up when asked, and get details wrong just like John Dean
    testifying about Watergate meetings he was actually present in.
  standard: >-
    The dominant framing of LLM hallucinations treats them as a technical defect
    that smarter models and better retrieval will eventually eliminate. Hinton
    argues this is the wrong frame. Human memory is associative: events modify
    connection strengths rather than getting stored in filing cabinets, and
    recall constructs a plausible account from the current connection state.
    John Dean at Watergate testified accurately about events he witnessed but
    attributed statements to wrong people and placed individuals in meetings
    they had not attended. He was not lying — he was confabulating, constructing
    a plausible account from associative memory traces. LLMs do the same thing
    structurally, and calling it 'hallucination' obscures the mechanism. The
    implication: LLM confabulation is not going away with better engineering,
    because it is a property of how associative memory works. Retrieval
    augmentation (RAG) reduces confabulation for retrievable facts but does not
    eliminate it for derived or inferred content. Organizations relying on
    LLM-generated content for high-stakes claims need human verification layers
    not because the models have a bug but because they are working exactly as
    memory systems work.
stance: >-
  The term 'hallucination' for LLM errors is misleading because it implies a
  technical bug fixable through better engineering; the accurate term is
  'confabulation,' the same memory-construction error humans exhibit, and it is
  not a fixable technical defect but a structural property of associative memory
  systems
related:
  - INS-260410-A365
  - INS-260410-5EC3
  - INS-260330-125E
  - INS-260328-0DFE
  - INS-260323-99E0
---
The dominant framing of LLM hallucinations treats them as a technical defect that smarter models and better retrieval will eventually eliminate. Hinton argues this is the wrong frame. Human memory is associative: events modify connection strengths rather than getting stored in filing cabinets, and recall constructs a plausible account from the current connection state. John Dean at Watergate testified accurately about events he witnessed but attributed statements to wrong people and placed individuals in meetings they had not attended. He was not lying — he was confabulating, constructing a plausible account from associative memory traces. LLMs do the same thing structurally, and calling it 'hallucination' obscures the mechanism. The implication: LLM confabulation is not going away with better engineering, because it is a property of how associative memory works. Retrieval augmentation (RAG) reduces confabulation for retrievable facts but does not eliminate it for derived or inferred content. Organizations relying on LLM-generated content for high-stakes claims need human verification layers not because the models have a bug but because they are working exactly as memory systems work.
