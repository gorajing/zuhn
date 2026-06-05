---
id: INS-260605-5A8E
domain: ai-development
topic: llm-training
title: >-
  Modern open-source libraries make supervised fine-tuning and RL a few hundred
  lines of Python
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - fine-tuning
  - open-source
  - reinforcement-learning
  - vllm
  - accessibility
sources:
  - type: youtube
    title: 'What Lies Beneath the API — Benjamin Cowen, Modal'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=HvZXAOZ3iv8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Supervised fine-tuning or RL is now ~300 lines of Python with open-source
    libraries, plus standard serving stacks (vLLM, SGLang, Triton) for the model
    afterward.
  standard: >-
    Cowen contrasts today's accessibility with the recent past, when training
    meant hand-deriving gradients and implementing the linear algebra yourself.
    Modern open-source libraries give full algorithm-level control while
    abstracting the cluster, so supervised fine-tuning fits in roughly 300 lines
    of Python and reinforcement learning is similarly compact. Serving the
    result — the part frontier APIs do under the hood — is also no longer
    exotic: vLLM, SGLang, Triton Inference Server, or a custom Python inference
    workflow can autoscale to match incoming traffic. The combined effect is
    that algorithm control and fast iteration, once mutually exclusive with the
    frontier-API end of the spectrum, can now be retained together.
stance: >-
  Fine-tuning and reinforcement learning no longer require deep
  ML-infrastructure expertise — open-source libraries reduce them to ~300 lines
  of Python.
related:
  - INS-260325-8F49
  - INS-260404-DDC8
  - INS-260410-3A08
  - INS-260514-3B3C
  - INS-260605-3DBF
  - INS-260605-A4F1
  - INS-260605-D3EB
  - INS-260605-7F81
  - INS-260322-3616
  - INS-260605-4D1D
---
Cowen contrasts today's accessibility with the recent past, when training meant hand-deriving gradients and implementing the linear algebra yourself. Modern open-source libraries give full algorithm-level control while abstracting the cluster, so supervised fine-tuning fits in roughly 300 lines of Python and reinforcement learning is similarly compact. Serving the result — the part frontier APIs do under the hood — is also no longer exotic: vLLM, SGLang, Triton Inference Server, or a custom Python inference workflow can autoscale to match incoming traffic. The combined effect is that algorithm control and fast iteration, once mutually exclusive with the frontier-API end of the spectrum, can now be retained together.
