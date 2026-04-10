---
id: INS-260409-0DB0
domain: ai-development
topic: agent-patterns
title: Evaluating multi-step agent loops is fundamentally harder than single-shot RAG
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - agents
  - multi-step
  - state-tracking
  - error-propagation
sources:
  - type: blog
    title: RAG Is A Hack - with Jerry Liu from LlamaIndex
    author:
      - '@type': Person
        name: Jerry Liu
        url: 'https://substack.com/@jerryjliu0'
        description: Co-founder/CEO at LlamaIndex
        identifier: 'user:172379178'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!6vHh!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F71b7ff02-8910-41a3-bf47-6d7918c21c72_558x558.jpeg
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!6vHh!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F71b7ff02-8910-41a3-bf47-6d7918c21c72_558x558.jpeg
    url: 'https://www.latent.space/p/llamaindex'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: false
embedded: false
resolutions:
  one_line: >-
    Jerry Liu on the 'additional complexity of evaluating agent loops' — unlike
    single-shot RAG where you measure retrieval@K and answer correctness, agent
    loops require tracking state transitions, intermediate decisions, and how
    errors propagate across steps.
  standard: >-
    Single-shot RAG is relatively easy to evaluate: did the retriever find the
    right chunks (R@K)? Did the synthesis answer correctly? Two metrics, both
    well-understood. Agent loops are much harder. An agent might plan 5
    sub-questions, retrieve for each, realize one answer is insufficient, plan
    follow-up sub-questions, re-retrieve, and finally synthesize. Where do
    things go wrong? The plan could be wrong. The sub-queries could be badly
    phrased. The retrieval could miss. The synthesis could fail. Errors could
    compound across steps — a mediocre sub-answer could mislead the next
    sub-question. Jerry Liu's observation: you need to track state transitions,
    measure intermediate decisions, and trace error propagation across the loop
    — not just output correctness. This is why 'agent evaluation' is an unsolved
    area in the RAG community and why LlamaIndex and other agent frameworks ship
    their own evaluation tools. The implication for anyone building agent
    systems: traditional end-to-end metrics are insufficient, and you need to
    instrument every step of the loop to debug failures. Generalizes beyond RAG
    to any multi-step LLM pipeline.
stance: >-
  Assessing agent pipelines that involve multiple retrieval and reasoning steps
  requires tracking state transitions and error propagation, not just
  retrieval@K or answer correctness, making evaluation significantly harder than
  for single-shot systems.
---
Single-shot RAG is relatively easy to evaluate: did the retriever find the right chunks (R@K)? Did the synthesis answer correctly? Two metrics, both well-understood. Agent loops are much harder. An agent might plan 5 sub-questions, retrieve for each, realize one answer is insufficient, plan follow-up sub-questions, re-retrieve, and finally synthesize. Where do things go wrong? The plan could be wrong. The sub-queries could be badly phrased. The retrieval could miss. The synthesis could fail. Errors could compound across steps — a mediocre sub-answer could mislead the next sub-question. Jerry Liu's observation: you need to track state transitions, measure intermediate decisions, and trace error propagation across the loop — not just output correctness. This is why 'agent evaluation' is an unsolved area in the RAG community and why LlamaIndex and other agent frameworks ship their own evaluation tools. The implication for anyone building agent systems: traditional end-to-end metrics are insufficient, and you need to instrument every step of the loop to debug failures. Generalizes beyond RAG to any multi-step LLM pipeline.
