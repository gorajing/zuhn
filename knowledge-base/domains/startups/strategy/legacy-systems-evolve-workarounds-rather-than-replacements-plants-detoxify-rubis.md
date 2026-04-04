---
id: INS-260330-0E77
domain: startups
topic: strategy
title: >-
  Legacy systems evolve workarounds rather than replacements — plants detoxify
  RuBisCo errors instead of fixing them
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - workaround-culture
  - legacy-systems
  - evolution
  - system-design
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When RuBisCo began producing toxic phosphoglycolate due to atmospheric
    oxygen, plants evolved detoxification pathways rather than a better enzyme —
    the biological equivalent of writing wrapper functions around buggy legacy
    code.
  standard: >-
    RuBisCo's oxygen-fixation error produces phosphoglycolate, which interferes
    with Calvin Cycle enzymes. Rather than evolving a more selective enzyme,
    plants developed an entire secondary metabolic pathway (photorespiration) to
    convert this toxic waste into usable compounds like glycine. This is
    strictly less efficient than fixing the root cause but was evolutionarily
    cheaper because RuBisCo is so deeply integrated into carbon fixation.


    This maps precisely to how mature software systems and organizations handle
    legacy problems. When a core component has bugs but is deeply integrated,
    teams build middleware, adapters, and exception handlers rather than
    rewriting the component. The decision is rational in isolation — each
    workaround is cheaper than replacement — but the accumulated complexity
    eventually creates its own costs. The actionable insight: when you notice
    your team building the third workaround for the same core limitation, the
    replacement cost has likely crossed below the cumulative workaround cost.
    Track your 'photorespiration' — compensatory complexity that exists only
    because of an unfixed root cause.
stance: >-
  Complex systems under evolutionary pressure consistently develop compensatory
  workarounds around flawed core components rather than replacing them, because
  integration costs exceed compensation costs
related:
  - INS-260330-B71B
  - INS-260403-C4CD
  - INS-260403-6628
  - INS-260330-F5CF
  - INS-260330-EACA
evidence:
  - id: INS-260330-EACA
    type: SUPPORTS
    classified_at: '2026-04-03'
  - id: INS-260330-F5CF
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260330-E497
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
---
RuBisCo's oxygen-fixation error produces phosphoglycolate, which interferes with Calvin Cycle enzymes. Rather than evolving a more selective enzyme, plants developed an entire secondary metabolic pathway (photorespiration) to convert this toxic waste into usable compounds like glycine. This is strictly less efficient than fixing the root cause but was evolutionarily cheaper because RuBisCo is so deeply integrated into carbon fixation.

This maps precisely to how mature software systems and organizations handle legacy problems. When a core component has bugs but is deeply integrated, teams build middleware, adapters, and exception handlers rather than rewriting the component. The decision is rational in isolation — each workaround is cheaper than replacement — but the accumulated complexity eventually creates its own costs. The actionable insight: when you notice your team building the third workaround for the same core limitation, the replacement cost has likely crossed below the cumulative workaround cost. Track your 'photorespiration' — compensatory complexity that exists only because of an unfixed root cause.
