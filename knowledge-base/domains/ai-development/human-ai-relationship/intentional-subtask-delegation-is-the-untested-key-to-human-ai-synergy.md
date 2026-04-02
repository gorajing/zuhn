---
id: INS-260325-19E9
domain: ai-development
topic: human-ai-relationship
title: Intentional subtask delegation is the untested key to human-AI synergy
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - task-delegation
  - complementarity
  - workflow-design
  - subtask-allocation
  - system-design
sources:
  - type: blog
    title: >-
      When combinations of humans and AI are useful: A systematic review and
      meta-analysis - Nature Human Behaviour
    url: 'https://www.nature.com/articles/s41562-024-02024-1'
date_extracted: '2026-03-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Only 3 of 106 experiments tested intentional subtask delegation between
    humans and AI; those 3 showed positive synergy (g = 0.22) versus the overall
    negative average.
  standard: >-
    The meta-analysis reveals a massive research gap: nearly all studied
    human-AI systems have both partners doing the same task (typically both
    classifying, then human decides). Only 3 experiments tested predetermined
    delegation — assigning different subtasks to whichever partner is better.
    Those experiments showed synergy (g = 0.22, though not statistically
    significant with n=3). Combined with the finding that creation tasks show
    synergy (which naturally decompose into human-creative and AI-routine
    subtasks), this points to a clear design principle: stop building systems
    where humans second-guess AI, and start building systems where humans and AI
    do different things.
stance: >-
  Predetermined delegation of different subtasks to humans and AI rather than
  both doing the same task is the most promising but least studied path to
  genuine complementarity.
related:
  - INS-260325-9C2F
  - INS-260325-3EF4
  - INS-260325-4793
  - INS-260323-8268
  - PRI-260321-AD44
  - INS-260322-DAFB
evidence:
  - id: INS-260323-8268
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260322-DAFB
    type: EXTENDS
    classified_at: '2026-04-02'
---
The meta-analysis reveals a massive research gap: nearly all studied human-AI systems have both partners doing the same task (typically both classifying, then human decides). Only 3 experiments tested predetermined delegation — assigning different subtasks to whichever partner is better. Those experiments showed synergy (g = 0.22, though not statistically significant with n=3). Combined with the finding that creation tasks show synergy (which naturally decompose into human-creative and AI-routine subtasks), this points to a clear design principle: stop building systems where humans second-guess AI, and start building systems where humans and AI do different things.
