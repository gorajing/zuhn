---
id: INS-260325-0C20
domain: startups
topic: health-innovation
title: >-
  AI-guided directed evolution outperforms random mutation for protein
  engineering
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - ai-biology
  - directed-evolution
  - protein-engineering
  - machine-learning
sources:
  - type: youtube
    title: The science of delivering cures straight to your cells | Eric Kelsic
    author: Big Think
    url: 'https://youtu.be/CyhqkZEJ_60'
date_extracted: '2026-03-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    80% of random single mutations break AAV capsid function, making random
    libraries needle-in-haystack searches — AI models trained on multiplexed
    data identify viable multi-mutation combinations that random approaches
    cannot find.
  standard: >-
    Traditional directed evolution randomly mutates capsid sequences and screens
    huge libraries, but roughly 80% of single changes break the most essential
    function (assembly and packaging). Multi-mutation improvements are
    exponentially harder to find randomly. Dyno's approach uses DNA multiplexing
    to test 100,000 to 1,000,000 capsid variants in a single animal experiment,
    generating petabytes of data about which sequences work in which tissues.


    Machine learning models trained on this data can query billions of sequences
    in silico, using ensembles of tens to hundreds of models as different
    'experts' to identify high-confidence candidates for the next experiment.
    The iterative cycle — design, build DNA, test in animals, train models,
    query, redesign — keeps human judgment at the highest leverage point while
    automating routine analysis.
stance: >-
  Machine learning models trained on multiplexed screening data can design
  protein variants far more efficiently than random mutation libraries because
  they learn which amino acid combinations preserve function.
related:
  - INS-260325-9F5F
  - INS-260325-5656
  - INS-260325-75A3
  - INS-260327-A44E
  - INS-260323-61CD
  - INS-260330-5E67
evidence:
  - id: INS-260325-5656
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260327-A44E
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260325-9F5F
    type: EXTENDS
    classified_at: '2026-04-02'
---
Traditional directed evolution randomly mutates capsid sequences and screens huge libraries, but roughly 80% of single changes break the most essential function (assembly and packaging). Multi-mutation improvements are exponentially harder to find randomly. Dyno's approach uses DNA multiplexing to test 100,000 to 1,000,000 capsid variants in a single animal experiment, generating petabytes of data about which sequences work in which tissues.

Machine learning models trained on this data can query billions of sequences in silico, using ensembles of tens to hundreds of models as different 'experts' to identify high-confidence candidates for the next experiment. The iterative cycle — design, build DNA, test in animals, train models, query, redesign — keeps human judgment at the highest leverage point while automating routine analysis.
