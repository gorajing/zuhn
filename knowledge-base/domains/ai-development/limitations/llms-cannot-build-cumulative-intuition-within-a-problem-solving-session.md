---
id: INS-260410-988F
domain: ai-development
topic: limitations
title: LLMs cannot build cumulative intuition within a problem-solving session
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - reasoning
  - cumulative-learning
  - collaboration
  - memory
  - continual-learning
sources:
  - type: youtube
    title: Terence Tao – How the world’s top mathematician uses AI
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=Q8Fkpi18QXU'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AI problem-solving is trial-and-error at scale, not cumulative — it can jump
    and fail repeatedly, but it can't reach a handhold, stay there, and climb
    from it.
  standard: >-
    Tao's analogy: AI tools are jumping machines that can leap higher than any
    human, but only in one-shot attempts. They can't jump partway up a cliff,
    grab a handhold, pull themselves up, and jump from there. When a human
    collaborator tests a strategy and it fails, the failure reshapes their
    intuition for the next attempt; when an AI fails, the failure goes into the
    void. Start a new session and it has forgotten everything.


    This is the deep gap between what AI does and what mathematicians call
    'understanding.' Even when AI successfully solves a problem, it has built no
    new skill, no new feel for related problems. This is why AI struggles with
    partial progress, intermediate lemmas, and the kind of collaborative
    exploration that mathematics actually is. It also explains why current AI is
    disproportionately good on isolated problems with no literature versus
    problems that require integrating a web of prior results. Solving this —
    genuine continual learning within and across problem-solving sessions — is
    arguably the binding constraint on AI becoming a real research collaborator
    rather than a brute-force oracle.
stance: >-
  Current AI systems lack the ability to build on partial progress — each
  attempt is independent, and nothing sticks as durable intuition the way it
  does for a human collaborator.
related:
  - INS-260321-BFA3
  - INS-260323-4473
  - INS-260327-E7B8
  - INS-260329-3739
  - INS-260329-64B8
  - INS-260330-0982
  - INS-260405-736C
  - INS-260403-E209
  - INS-260409-171C
  - PRI-260406-874A
---
Tao's analogy: AI tools are jumping machines that can leap higher than any human, but only in one-shot attempts. They can't jump partway up a cliff, grab a handhold, pull themselves up, and jump from there. When a human collaborator tests a strategy and it fails, the failure reshapes their intuition for the next attempt; when an AI fails, the failure goes into the void. Start a new session and it has forgotten everything.

This is the deep gap between what AI does and what mathematicians call 'understanding.' Even when AI successfully solves a problem, it has built no new skill, no new feel for related problems. This is why AI struggles with partial progress, intermediate lemmas, and the kind of collaborative exploration that mathematics actually is. It also explains why current AI is disproportionately good on isolated problems with no literature versus problems that require integrating a web of prior results. Solving this — genuine continual learning within and across problem-solving sessions — is arguably the binding constraint on AI becoming a real research collaborator rather than a brute-force oracle.
