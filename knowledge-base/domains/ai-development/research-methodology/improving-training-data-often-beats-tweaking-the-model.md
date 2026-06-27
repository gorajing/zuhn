---
id: INS-260626-21B7
domain: ai-development
topic: research-methodology
title: Improving training data often beats tweaking the model
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - data-curation
  - diffusion
  - research-incentives
  - model-quality
sources:
  - type: youtube
    title: >-
      Building Generative Image & Video models at Scale - Sander Dieleman,
      Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=xOP1PM8fwnk'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Curating the training data is frequently a better investment of effort than
    tuning the model, but academic incentives train researchers to ignore data.
  standard: >-
    Dieleman argues data curation is 'really really essential' for high-quality
    results and that improving the data is sometimes a better use of time than
    optimizing the model. He frames this as something the field is 'collectively
    having to unlearn': in academia you're incentivized to use a fixed, shared
    benchmark dataset so your numbers are comparable to the state of the art,
    which actively discourages looking at — let alone improving — your own data.


    The practical implication is a reallocation of effort. When a model
    underperforms, the default engineering instinct is to change the
    architecture, loss, or hyperparameters; Dieleman's claim is that inspecting
    and improving the dataset frequently has higher leverage. He notes this
    remains underrated even today, partly because it's hard to publish on (few
    papers exist) and partly because data work is 'secret sauce' that labs won't
    disclose — so the signal that it matters is muted precisely where
    practitioners look for evidence.


    The cross-domain lesson: when the inputs and the model are both adjustable,
    bias your attention toward input quality, especially in any field where
    benchmark culture has frozen the inputs as a constant.
stance: >-
  For large generative models, time spent curating data yields more quality than
  time spent optimizing the architecture or training loop.
related:
  - INS-260323-13C0
  - INS-260327-5E40
  - INS-260403-1F1B
  - INS-260330-CAE6
  - INS-260410-ED12
  - INS-260514-838D
  - INS-260626-742C
  - INS-260327-5D5F
  - INS-260404-CE26
---
Dieleman argues data curation is 'really really essential' for high-quality results and that improving the data is sometimes a better use of time than optimizing the model. He frames this as something the field is 'collectively having to unlearn': in academia you're incentivized to use a fixed, shared benchmark dataset so your numbers are comparable to the state of the art, which actively discourages looking at — let alone improving — your own data.

The practical implication is a reallocation of effort. When a model underperforms, the default engineering instinct is to change the architecture, loss, or hyperparameters; Dieleman's claim is that inspecting and improving the dataset frequently has higher leverage. He notes this remains underrated even today, partly because it's hard to publish on (few papers exist) and partly because data work is 'secret sauce' that labs won't disclose — so the signal that it matters is muted precisely where practitioners look for evidence.

The cross-domain lesson: when the inputs and the model are both adjustable, bias your attention toward input quality, especially in any field where benchmark culture has frozen the inputs as a constant.
