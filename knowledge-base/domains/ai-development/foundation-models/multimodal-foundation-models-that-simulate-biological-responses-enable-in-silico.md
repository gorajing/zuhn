---
id: INS-260405-1C8D
domain: ai-development
topic: foundation-models
title: >-
  Multimodal foundation models that simulate biological responses enable
  in-silico experiment design before costly physical trials
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - neuroscience
  - foundation-models
  - research
  - simulation
  - multimodal
sources:
  - type: blog
    title: >-
      Shield AI Air Force Deal, Google's TurboQuant, and Meta's Brain-Predictive
      AI
    author: Chamath Palihapitiya
    url: 'https://chamath.substack.com/p/what-i-read-this-week-177'
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Meta's TRIBE v2 predicts fMRI brain responses from video, audio, and
    language—enabling researchers to screen hypotheses in software before
    spending scarce scanner time on physical experiments.
  standard: >-
    TRIBE v2 is a trimodal foundation model trained on 1,000+ hours of fMRI data
    from 720 subjects. It generalizes to unseen individuals without retraining,
    achieving 2-3x improvement over prior methods. The structural insight is
    that brain research is bottlenecked not by ideas but by measurement cost:
    fMRI is slow, noisy, and expensive. A model that generates predicted brain
    responses shifts the research loop—instead of running 50 subjects through a
    scanner to test a hypothesis, researchers can first filter candidates in
    software and only physically test the most promising stimuli. This pattern
    (simulation → physical validation) is the same logic behind drug target
    screening, materials science simulations, and autonomous vehicle training in
    synthetic environments. The release under CC BY-NC with weights, code, and
    demo makes TRIBE v2 a platform, not just a paper—the scientific applications
    (disease diagnosis, treatment planning) become accessible to labs that
    couldn't previously afford the data collection infrastructure.
stance: >-
  Foundation models that predict biological outcomes from stimuli (like Meta's
  TRIBE v2 for brain responses) will compress scientific research cycles by
  replacing expensive wet-lab or imaging experiments with software-based
  hypothesis filtering.
related:
  - INS-260322-02A6
  - PRI-260406-4F8E
  - INS-260403-2BAD
  - INS-260410-4782
  - INS-260409-5CC6
  - INS-260409-9851
  - INS-260413-61CE
  - INS-260423-6879
---
TRIBE v2 is a trimodal foundation model trained on 1,000+ hours of fMRI data from 720 subjects. It generalizes to unseen individuals without retraining, achieving 2-3x improvement over prior methods. The structural insight is that brain research is bottlenecked not by ideas but by measurement cost: fMRI is slow, noisy, and expensive. A model that generates predicted brain responses shifts the research loop—instead of running 50 subjects through a scanner to test a hypothesis, researchers can first filter candidates in software and only physically test the most promising stimuli. This pattern (simulation → physical validation) is the same logic behind drug target screening, materials science simulations, and autonomous vehicle training in synthetic environments. The release under CC BY-NC with weights, code, and demo makes TRIBE v2 a platform, not just a paper—the scientific applications (disease diagnosis, treatment planning) become accessible to labs that couldn't previously afford the data collection infrastructure.
