---
id: INS-260402-0E46
domain: ai-development
topic: architecture
title: Domain-aware classification crushes generic text classification
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - classification
  - feature-engineering
  - domain-knowledge
  - bayesian-filtering
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
    Encoding domain structure into features (e.g., marking where tokens appear
    in email) can improve classification from 92% to 99.5%.
  standard: >-
    Paul Graham's spam filter outperformed academic Bayesian filters by 7.5
    percentage points primarily because he treated email as structured data
    rather than flat text. By marking tokens with their context (Subject*free vs
    body free vs Url*free), the same word 'free' yielded spam probabilities
    ranging from 65% to 99.99% depending on location. This expanded vocabulary
    from 23,000 to 187,000 tokens.


    The lesson generalizes beyond spam: whenever you're building a classifier,
    resist the urge to keep the problem 'neat' by stripping away domain
    structure. The messy structural data — headers, metadata, position within a
    document — often contains the strongest signals. Academic approaches that
    ignored headers for theoretical cleanliness lost the most discriminating
    features. Domain-aware feature engineering consistently beats more
    sophisticated algorithms applied to impoverished representations.
stance: >-
  Classification systems that exploit domain structure (email headers, URLs,
  context markers) dramatically outperform generic text classifiers on the same
  data, even when the generic approach is theoretically more sophisticated.
related:
  - INS-260410-46CA
  - INS-260328-9C16
  - INS-260402-B36F
  - INS-260327-91E7
  - INS-260404-1C9D
evidence:
  - id: INS-260328-9C16
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260327-91E7
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260327-38D8
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260327-A22D
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260403-DC6E
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
---
Paul Graham's spam filter outperformed academic Bayesian filters by 7.5 percentage points primarily because he treated email as structured data rather than flat text. By marking tokens with their context (Subject*free vs body free vs Url*free), the same word 'free' yielded spam probabilities ranging from 65% to 99.99% depending on location. This expanded vocabulary from 23,000 to 187,000 tokens.

The lesson generalizes beyond spam: whenever you're building a classifier, resist the urge to keep the problem 'neat' by stripping away domain structure. The messy structural data — headers, metadata, position within a document — often contains the strongest signals. Academic approaches that ignored headers for theoretical cleanliness lost the most discriminating features. Domain-aware feature engineering consistently beats more sophisticated algorithms applied to impoverished representations.
