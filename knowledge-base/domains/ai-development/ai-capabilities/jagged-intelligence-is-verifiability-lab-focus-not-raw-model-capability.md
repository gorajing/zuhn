---
id: INS-260501-A550
domain: ai-development
topic: ai-capabilities
title: 'Jagged intelligence is verifiability + lab focus, not raw model capability'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - jaggedness
  - verifiability
  - rl-environments
  - labs-strategy
sources:
  - type: youtube
    title: 'Andrej Karpathy: From Vibe Coding to Agentic Engineering'
    author: Sequoia Capital
    url: 'https://youtu.be/96jN2OCOfLs'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If you're in the RL circuits, you fly; if you're not, you struggle — and the
    labs decide which circuits exist.
  standard: >-
    Karpathy's jaggedness diagnosis: models can refactor a 100K-line codebase
    but tell you to walk 50 meters to a car wash because they're so close. The
    asymmetry is not random — capability follows two factors: (1) verifiability
    of the domain (so you can build an RL environment with reward signals), and
    (2) lab focus (whether the lab decided that domain was economically valuable
    enough to invest in). The chess capability jump from GPT-3.5 to GPT-4 was
    reportedly because someone at OpenAI chose to add chess data to pretraining
    — not emergent capability.


    Operational consequence: don't reason about 'what models can do' as if it's
    a single dimension. Instead, ask: 'is this domain verifiable, and have the
    labs prioritized it?' If yes, model capability will be sharp. If verifiable
    but labs ignored it, this is your founder opportunity — you can build the RL
    environments yourself. If not verifiable, you need humans in the loop or a
    council of LLM judges.
stance: >-
  Models peak in domains that are both verifiable AND that labs chose to build
  RL environments for — capability is a function of what made it into the RL
  data distribution, not innate intelligence.
related:
  - INS-260410-D0F5
  - INS-260409-3138
  - INS-260320-F78E
  - PRI-260406-F95C
  - PRI-260328-0332
---
Karpathy's jaggedness diagnosis: models can refactor a 100K-line codebase but tell you to walk 50 meters to a car wash because they're so close. The asymmetry is not random — capability follows two factors: (1) verifiability of the domain (so you can build an RL environment with reward signals), and (2) lab focus (whether the lab decided that domain was economically valuable enough to invest in). The chess capability jump from GPT-3.5 to GPT-4 was reportedly because someone at OpenAI chose to add chess data to pretraining — not emergent capability.

Operational consequence: don't reason about 'what models can do' as if it's a single dimension. Instead, ask: 'is this domain verifiable, and have the labs prioritized it?' If yes, model capability will be sharp. If verifiable but labs ignored it, this is your founder opportunity — you can build the RL environments yourself. If not verifiable, you need humans in the loop or a council of LLM judges.
