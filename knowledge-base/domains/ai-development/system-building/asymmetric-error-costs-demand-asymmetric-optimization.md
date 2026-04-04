---
id: INS-260402-8A7A
domain: ai-development
topic: system-building
title: Asymmetric error costs demand asymmetric optimization
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - error-handling
  - system-design
  - optimization
  - asymmetric-costs
sources:
  - type: blog
    title: Better Bayesian Filtering
    url: 'https://paulgraham.com/better.html'
date_extracted: '2026-04-02'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Graham doubled nonspam token counts to bias against false positives,
    treating them as bugs to debug rather than statistical errors to optimize.
  standard: >-
    Graham's key insight was that spam filtering isn't a symmetric
    classification problem. A missed spam is annoying; a false positive can mean
    missing an important email. Rather than just adjusting a threshold after
    classification, he baked asymmetry into the algorithm itself by counting
    nonspam token occurrences double, structurally biasing the entire
    probability calculation toward avoiding false positives.


    More profoundly, he reframed the two error types as fundamentally different
    activities: improving filtering rate is optimization, while reducing false
    positives is debugging. This reframing changes how you allocate effort — you
    profile and fix specific false positives like bugs with root causes, rather
    than treating them as statistical noise. This principle applies to any
    system with asymmetric error costs: medical diagnosis, fraud detection,
    content moderation. Design the asymmetry into the system's bones, don't bolt
    it on as a post-hoc threshold.
stance: >-
  When false positives and false negatives have vastly different costs, the
  entire system design — not just a threshold parameter — should reflect that
  asymmetry.
related:
  - INS-260330-00D5
  - INS-260330-1A63
  - INS-260402-5034
  - INS-260329-D2CA
  - PRI-260323-1CF9
  - INS-260323-8D12
  - INS-260402-3DBF
  - INS-260404-67C5
evidence:
  - id: INS-260330-1A63
    type: SUPPORTS
    classified_at: '2026-04-03'
  - id: INS-260402-3DBF
    type: SUPPORTS
    classified_at: '2026-04-03'
---
Graham's key insight was that spam filtering isn't a symmetric classification problem. A missed spam is annoying; a false positive can mean missing an important email. Rather than just adjusting a threshold after classification, he baked asymmetry into the algorithm itself by counting nonspam token occurrences double, structurally biasing the entire probability calculation toward avoiding false positives.

More profoundly, he reframed the two error types as fundamentally different activities: improving filtering rate is optimization, while reducing false positives is debugging. This reframing changes how you allocate effort — you profile and fix specific false positives like bugs with root causes, rather than treating them as statistical noise. This principle applies to any system with asymmetric error costs: medical diagnosis, fraud detection, content moderation. Design the asymmetry into the system's bones, don't bolt it on as a post-hoc threshold.
