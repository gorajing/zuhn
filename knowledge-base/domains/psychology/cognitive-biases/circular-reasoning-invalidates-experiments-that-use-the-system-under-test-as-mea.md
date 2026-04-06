---
id: INS-260404-B8D9
domain: psychology
topic: cognitive-biases
title: >-
  Circular reasoning invalidates experiments that use the system under test as
  measurement infrastructure
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - circular-reasoning
  - experimental-design
  - measurement
  - falsifiability
sources:
  - type: youtube
    title: 'Michio Kaku: What If Einstein Is Wrong? | Big Think'
    author: Big Think
    url: 'https://www.youtube.com/watch?v=9XjS4I4oQDY'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Testing a theory with instruments that depend on that same theory creates
    unfalsifiable circular logic.
  standard: >-
    The OPERA experiment used GPS — a system built on general relativity — to
    measure distances that would disprove general relativity. This creates a
    logical trap: if relativity is wrong, the GPS measurements are also wrong,
    meaning the experimental setup cannot produce valid evidence either way.
    This pattern appears far beyond physics — in startups using customer surveys
    designed around existing product assumptions, in AI evaluation benchmarks
    that embed the biases they claim to measure, and in financial models that
    use market prices to predict market crashes. The defense is identifying
    which assumptions your measurement tools encode and ensuring they are
    independent of the hypothesis under test.
stance: >-
  Using the theory you are trying to disprove as part of your measurement
  apparatus creates an unfalsifiable loop that guarantees misleading results.
related:
  - INS-260330-984C
  - INS-260323-3F30
  - INS-260329-CCDE
  - INS-260329-E914
  - INS-260330-3819
evidence:
  - id: INS-260323-3F30
    type: SUPPORTS
    classified_at: '2026-04-06'
---
The OPERA experiment used GPS — a system built on general relativity — to measure distances that would disprove general relativity. This creates a logical trap: if relativity is wrong, the GPS measurements are also wrong, meaning the experimental setup cannot produce valid evidence either way. This pattern appears far beyond physics — in startups using customer surveys designed around existing product assumptions, in AI evaluation benchmarks that embed the biases they claim to measure, and in financial models that use market prices to predict market crashes. The defense is identifying which assumptions your measurement tools encode and ensuring they are independent of the hypothesis under test.
