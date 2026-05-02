---
id: INS-260501-E5AC
domain: ai-development
topic: research-methodology
title: >-
  Sufficient-but-not-necessary is the right epistemic frame for AI research —
  capability has multiple paths
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - research-methodology
  - melanie-mitchell
  - epistemic-frame
  - scaling-vs-architecture
sources:
  - type: youtube
    title: Recursion Is The Next Scaling Law In AI
    author: Y Combinator
    url: 'https://youtu.be/DGtUUMNYLcc'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Scaling works AND recursion works AND specialized architectures work —
    they're alternative paths, not competing claims.
  standard: >-
    Chollet cites Melanie Mitchell's framing: 'going bigger' to get better
    performance is sufficient but not necessary; 'adding more recursion' is also
    sufficient but not necessary. The field has tended to canonize scaling as
    the One True Path because it works reliably, but this conflates 'sufficient'
    with 'optimal' or 'unique.' TRM at 7M parameters beating o3 on ARC-AGI is
    direct empirical disproof of the 'only scaling works' framing.


    The operational lesson for research bets and product strategy: when
    evaluating any architectural claim, ask 'what is this sufficient for, and
    what other architectures are also sufficient for the same capability?' For
    investors: the 'we need to be Anthropic-scale to compete' framing is
    sometimes correct but is not universally correct. For verifiable, structured
    domains, a 7M-parameter recursive model trained on 1000 examples can beat
    frontier labs. The bet a defensible startup makes is finding domains where
    these alternative architectures dominate scaling — which Karpathy framed
    independently as 'verifiable RL environments labs haven't built.' These are
    convergent observations from different angles: small bespoke models with the
    right architecture can win in domains where the big labs haven't focused.
stance: >-
  Melanie Mitchell's principle that 'going bigger' is sufficient but not
  necessary for performance gains, and 'adding more recursion' is also
  sufficient but not necessary, generalizes — multiple architectural paths reach
  the same capability, and the field's tendency to canonize one is a category
  error.
related:
  - PRI-260411-D39C
  - INS-260330-44EF
  - INS-260410-7933
  - PRI-260328-30C2
  - INS-260410-0CFE
---
Chollet cites Melanie Mitchell's framing: 'going bigger' to get better performance is sufficient but not necessary; 'adding more recursion' is also sufficient but not necessary. The field has tended to canonize scaling as the One True Path because it works reliably, but this conflates 'sufficient' with 'optimal' or 'unique.' TRM at 7M parameters beating o3 on ARC-AGI is direct empirical disproof of the 'only scaling works' framing.

The operational lesson for research bets and product strategy: when evaluating any architectural claim, ask 'what is this sufficient for, and what other architectures are also sufficient for the same capability?' For investors: the 'we need to be Anthropic-scale to compete' framing is sometimes correct but is not universally correct. For verifiable, structured domains, a 7M-parameter recursive model trained on 1000 examples can beat frontier labs. The bet a defensible startup makes is finding domains where these alternative architectures dominate scaling — which Karpathy framed independently as 'verifiable RL environments labs haven't built.' These are convergent observations from different angles: small bespoke models with the right architecture can win in domains where the big labs haven't focused.
