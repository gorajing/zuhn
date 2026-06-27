---
id: INS-260627-4411
domain: ai-development
topic: prompting
title: Force structured output with enums and rationale; never ask for a free summary
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompting
  - structured-output
  - few-shot
  - classification
  - extraction
sources:
  - type: youtube
    title: >-
      Contact Center Voice AI: Low-Latency Intelligence Extraction from Messy
      Audio Streams — Dippu Singh
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=IEF842ZEU5A'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A bare 'summarize this call' prompt yields a messy narrative paragraph, so
    use few-shot templates to force separate bullet lists, classify against a
    predefined enum of call reasons, and require the model to output why it
    chose each classification.
  standard: >-
    The team found that asking an LLM to summarize a call produces an
    unstructured narrative paragraph that is hard to consume downstream. Instead
    they orchestrate the prompt in layers: few-shot libraries instruct the model
    to emit separate bullet lists (one for customer inquiry, one for operator
    action); a reasoning layer classifies intent against a predefined enum of
    call reasons (cancellation, new application, claim status) rather than
    letting the model invent categories; and critically, the model must output
    the reason it chose a given classification, making the decision auditable.


    Two transferable moves stand out. First, constrain the output space with
    predefined categories and examples — this turns free generation into bounded
    classification, which is more consistent and far easier to map into a
    database schema. Second, demand the rationale alongside the label; the
    explanation both improves the classification and gives reviewers a cheap way
    to spot wrong calls. Pre-LLM formatting compounds this — inverse text
    normalization that renders 'five thousand dollars' as $5,000 measurably
    improves the model's downstream entity extraction. The output is a clean
    JSON schema matching CRM templates, which is what makes an unstructured
    conversation a database-ready asset.
stance: >-
  Asking an LLM for predefined structured output with classification rationale
  beats asking it to 'summarize.'
related:
  - INS-260605-ECB0
  - INS-260626-A928
  - INS-260410-5D66
  - INS-260605-E1E2
  - INS-260605-117F
---
The team found that asking an LLM to summarize a call produces an unstructured narrative paragraph that is hard to consume downstream. Instead they orchestrate the prompt in layers: few-shot libraries instruct the model to emit separate bullet lists (one for customer inquiry, one for operator action); a reasoning layer classifies intent against a predefined enum of call reasons (cancellation, new application, claim status) rather than letting the model invent categories; and critically, the model must output the reason it chose a given classification, making the decision auditable.

Two transferable moves stand out. First, constrain the output space with predefined categories and examples — this turns free generation into bounded classification, which is more consistent and far easier to map into a database schema. Second, demand the rationale alongside the label; the explanation both improves the classification and gives reviewers a cheap way to spot wrong calls. Pre-LLM formatting compounds this — inverse text normalization that renders 'five thousand dollars' as $5,000 measurably improves the model's downstream entity extraction. The output is a clean JSON schema matching CRM templates, which is what makes an unstructured conversation a database-ready asset.
