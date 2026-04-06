---
id: INS-260405-95AE
domain: startups
topic: strategy
title: >-
  Evolutionary lock-in traps systems with their founding-era design even after
  it becomes maladaptive
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - lock-in
  - technical-debt
  - path-dependency
  - evolutionary-strategy
  - switching-costs
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RuBisCo became the most abundant enzyme on Earth despite a ~50% error rate
    in oxygen-rich air, because plants had already built everything around it
    and could only compensate, not replace.
  standard: >-
    RuBisCo evolved when Earth's atmosphere had almost no oxygen, and it was
    genuinely good at its job then. But as photosynthesis itself raised
    atmospheric oxygen, RuBisCo began confusing O2 for CO2 roughly half the
    time, creating a toxic byproduct. Rather than switching to a better enzyme,
    plants produce staggering quantities of RuBisCo (~40 billion tons at any
    moment) and run an entire secondary metabolic pathway just to clean up its
    mistakes.


    This is evolutionary lock-in made literal: the original solution
    proliferated so broadly that replacing it became more expensive than
    compensating for its failures. The same dynamic plays out in technology
    platforms — QWERTY keyboards, legacy database schemas, aging API contracts —
    where the cost of migration exceeds the cost of indefinite workarounds. The
    key asymmetry is timing: a mediocre solution that spreads early accrues
    structural advantages that a superior late-arriving solution cannot easily
    overcome.


    For founders and architects, this is a warning about the irreversibility of
    early proliferation. Launching fast with 'good enough' can be strategically
    correct, but it forecloses certain futures. The better mitigation is
    designing explicit seams — abstraction layers, adapter interfaces,
    deprecation mechanisms — so that the inevitable future replacement does not
    require rebuilding everything around it.
stance: >-
  A solution that proliferates widely before its flaws become apparent becomes
  nearly impossible to replace, because the entire ecosystem co-evolves to
  accommodate the flaw rather than eliminate it.
related:
  - INS-260330-4EC0
  - INS-260404-60F4
  - INS-260405-C497
  - INS-260405-F20F
  - INS-260403-D518
  - INS-260403-262F
  - INS-260404-5DE4
evidence:
  - id: INS-260405-C497
    type: EXTENDS
    classified_at: '2026-04-05'
---
RuBisCo evolved when Earth's atmosphere had almost no oxygen, and it was genuinely good at its job then. But as photosynthesis itself raised atmospheric oxygen, RuBisCo began confusing O2 for CO2 roughly half the time, creating a toxic byproduct. Rather than switching to a better enzyme, plants produce staggering quantities of RuBisCo (~40 billion tons at any moment) and run an entire secondary metabolic pathway just to clean up its mistakes.

This is evolutionary lock-in made literal: the original solution proliferated so broadly that replacing it became more expensive than compensating for its failures. The same dynamic plays out in technology platforms — QWERTY keyboards, legacy database schemas, aging API contracts — where the cost of migration exceeds the cost of indefinite workarounds. The key asymmetry is timing: a mediocre solution that spreads early accrues structural advantages that a superior late-arriving solution cannot easily overcome.

For founders and architects, this is a warning about the irreversibility of early proliferation. Launching fast with 'good enough' can be strategically correct, but it forecloses certain futures. The better mitigation is designing explicit seams — abstraction layers, adapter interfaces, deprecation mechanisms — so that the inevitable future replacement does not require rebuilding everything around it.
