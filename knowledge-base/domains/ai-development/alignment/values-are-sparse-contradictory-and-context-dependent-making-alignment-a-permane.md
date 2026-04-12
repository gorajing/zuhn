---
id: INS-260403-F4ED
domain: ai-development
topic: alignment
title: >-
  Values are sparse, contradictory, and context-dependent — making alignment a
  permanent engineering challenge
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - alignment
  - preference-learning
  - rlhf
  - constitutional-ai
  - values
sources:
  - type: blog
    title: 'Dario Amodei, AGI, and the Long Game of Safe AI'
    author: Ruben Dominguez
    url: 'https://www.thevccorner.com/p/dario-amodei-safe-ai-agi-anthropic'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Alignment difficulty stems from the nature of human values (sparse,
    contradictory, contextual), not from insufficient technical capability.
  standard: >-
    Amodei's 2017 framing identified the core alignment challenge: encoding
    human preferences in a way that generalizes. The difficulty is not technical
    sophistication but the nature of values themselves — they are sparse (we
    can't enumerate all preferences), context-dependent (the same action may be
    right or wrong depending on situation), and often contradictory (privacy vs
    transparency, safety vs freedom). This explains why alignment remains hard
    even as raw model capability improves dramatically. RLHF and constitutional
    AI are engineering responses to this fundamental constraint, not solutions
    to it. The practical implication is that alignment work should be treated as
    ongoing engineering discipline (like security), not a problem to be 'solved'
    and shipped.
stance: >-
  AI alignment will remain fundamentally difficult regardless of capability
  improvements because human values are inherently sparse, context-dependent,
  and contradictory — not because we lack technical sophistication.
related:
  - INS-260325-F6AF
  - INS-260327-0E57
  - INS-260327-B72F
  - INS-260330-A3AF
  - INS-260330-579B
  - INS-260330-C31B
  - INS-260403-875B
  - INS-260403-8402
  - INS-260327-CEE4
  - INS-260410-B224
---
Amodei's 2017 framing identified the core alignment challenge: encoding human preferences in a way that generalizes. The difficulty is not technical sophistication but the nature of values themselves — they are sparse (we can't enumerate all preferences), context-dependent (the same action may be right or wrong depending on situation), and often contradictory (privacy vs transparency, safety vs freedom). This explains why alignment remains hard even as raw model capability improves dramatically. RLHF and constitutional AI are engineering responses to this fundamental constraint, not solutions to it. The practical implication is that alignment work should be treated as ongoing engineering discipline (like security), not a problem to be 'solved' and shipped.
