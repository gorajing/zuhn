---
id: INS-260626-9155
domain: ai-development
topic: agent-evals
title: Runnable code is an insufficient success criterion for domain-changing agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - verification
  - silent-failures
  - domain-semantics
sources:
  - type: blog
    title: >-
      NOVA: A Verification-Aware Agent Harness for Architecture Evolution in
      Industrial Recommender Systems
    url: 'https://arxiv.org/html/2606.27243'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Coding agents can produce executable changes that silently damage the target
    system, so evals need semantic gates tied to the domain contract.
  standard: >-
    NOVA's central failure mode is a recommender architecture edit that compiles
    and trains but violates model semantics, such as mask direction, feature
    routing, attention structure, or logit-fusion logic. The paper calls these
    silent failures because ordinary software checks may pass while offline AUC,
    calibration, or business metrics degrade.


    The durable implication for agent and eval design is that 'the code runs' is
    only a shallow gate when the agent is changing a domain system. A useful
    harness should encode the invariants that make the change meaningful in the
    target domain, then test those invariants before expensive training,
    deployment, or human review.
stance: >-
  Agent evaluations for production architecture changes must test domain
  semantics, not just compilation, local tests, or task completion.
related:
  - INS-260625-1826
  - INS-260605-6444
  - INS-260625-A5E7
  - INS-260530-D34F
  - INS-260605-36E9
  - INS-260625-52C0
  - INS-260626-B7EB
---
NOVA's central failure mode is a recommender architecture edit that compiles and trains but violates model semantics, such as mask direction, feature routing, attention structure, or logit-fusion logic. The paper calls these silent failures because ordinary software checks may pass while offline AUC, calibration, or business metrics degrade.

The durable implication for agent and eval design is that 'the code runs' is only a shallow gate when the agent is changing a domain system. A useful harness should encode the invariants that make the change meaningful in the target domain, then test those invariants before expensive training, deployment, or human review.
