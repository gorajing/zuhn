---
id: INS-260514-8A98
domain: ai-development
topic: research-methodology
title: >-
  Semantic isolation index: measure AI bias amplification by embedding distance
  from main knowledge body
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - semantic-isolation
  - bias-measurement
  - embedding-distance
  - manuel-corpas
  - neglected-tropical-diseases
sources:
  - type: youtube
    title: I Built an AI System That Runs My Entire Research Lab
    author: Manuel Corpas
    url: 'https://youtu.be/uLOQppVIV8M'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Measure AI bias amplification BEFORE deployment by embedding the relevant
    literature corpus and computing distance from the main knowledge cluster.
    Neglected tropical diseases are 44% more isolated — and AI predicts them 44%
    worse.
  standard: >-
    Manuel Corpas's published methodology: download 13.1 million PubMed papers,
    embed each into a high-dimensional vector space (750 dimensions in his
    analysis), reduce to 2D via UMAP/t-SNE for visualization. Each disease
    becomes a dot; circle size = volume of published literature. The semantic
    isolation index measures how distant a disease's cluster is from the main
    biomedical knowledge cluster. His finding: neglected tropical diseases
    (Ebola, Zika, schistosomiasis, trachoma — affecting 1.5 billion people in
    the global south) are an average of 44% more semantically isolated than
    well-studied diseases like type-2 diabetes or cardiovascular disease. The
    clinical implication: AI models trained on the global research corpus will
    hallucinate predictably worse on the more isolated diseases. Manuel's team
    verified this experimentally by comparing AI accuracy on well-studied vs
    neglected diseases — the isolation index reliably predicts hallucination
    rate. The genomic version of the same finding: breast cancer
    characterization in European populations is 30x better than in African
    populations because the training data is European-skewed. African ancestry
    genetic-risk models lose up to 80% accuracy compared to European-ancestry
    models. The methodological lesson: BEFORE deploying an AI model in a new
    domain, measure the semantic isolation of that domain from the model's
    training distribution. If isolation is high, the model will perform poorly
    and you'll need to either (a) curate domain-specific training data, (b)
    require human verification at higher rates, or (c) abandon AI for that
    domain and use rule-based systems. The same isolation-distance methodology
    generalizes to any AI deployment: legal AI on jurisdictions underrepresented
    in case law, code AI on languages underrepresented in training corpora,
    business AI on industries underrepresented in management literature. The
    non-obvious extension: COVID was tremendously isolated semantically before
    the pandemic but moved much closer to the main body after 2020 because of
    the explosion of COVID research. Semantic distance is not fixed — it's a
    function of which topics receive concentrated research investment. Measuring
    this distance proactively identifies WHERE to invest research dollars to
    close AI bias gaps.
stance: >-
  AI models trained on the global research corpus will hallucinate predictably
  worse on topics that are semantically isolated from the main body of knowledge
  — and this can be measured rigorously by embedding all research literature
  (13.1M PubMed papers, 750 dimensions) and computing how distant a topic's
  cluster is from the dense main cluster; the 'semantic isolation index'
  provides an a-priori test for which AI outputs will be biased, before
  deployment.
related:
  - INS-260408-8F0A
  - PRI-260406-A33C
  - INS-260330-18F3
  - PRI-260403-50EF
  - INS-260514-838D
---
Manuel Corpas's published methodology: download 13.1 million PubMed papers, embed each into a high-dimensional vector space (750 dimensions in his analysis), reduce to 2D via UMAP/t-SNE for visualization. Each disease becomes a dot; circle size = volume of published literature. The semantic isolation index measures how distant a disease's cluster is from the main biomedical knowledge cluster. His finding: neglected tropical diseases (Ebola, Zika, schistosomiasis, trachoma — affecting 1.5 billion people in the global south) are an average of 44% more semantically isolated than well-studied diseases like type-2 diabetes or cardiovascular disease. The clinical implication: AI models trained on the global research corpus will hallucinate predictably worse on the more isolated diseases. Manuel's team verified this experimentally by comparing AI accuracy on well-studied vs neglected diseases — the isolation index reliably predicts hallucination rate. The genomic version of the same finding: breast cancer characterization in European populations is 30x better than in African populations because the training data is European-skewed. African ancestry genetic-risk models lose up to 80% accuracy compared to European-ancestry models. The methodological lesson: BEFORE deploying an AI model in a new domain, measure the semantic isolation of that domain from the model's training distribution. If isolation is high, the model will perform poorly and you'll need to either (a) curate domain-specific training data, (b) require human verification at higher rates, or (c) abandon AI for that domain and use rule-based systems. The same isolation-distance methodology generalizes to any AI deployment: legal AI on jurisdictions underrepresented in case law, code AI on languages underrepresented in training corpora, business AI on industries underrepresented in management literature. The non-obvious extension: COVID was tremendously isolated semantically before the pandemic but moved much closer to the main body after 2020 because of the explosion of COVID research. Semantic distance is not fixed — it's a function of which topics receive concentrated research investment. Measuring this distance proactively identifies WHERE to invest research dollars to close AI bias gaps.
