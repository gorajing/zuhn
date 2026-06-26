---
id: INS-260625-2F7C
domain: ai-development
topic: llm-training
title: >-
  Data, not compute, is becoming the binding constraint — and that flips the
  optimal algorithm
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - pretraining
  - data-efficiency
  - scaling-laws
  - ensembling
  - distillation
  - regularization
sources:
  - type: youtube
    title: 'Inference, Diffusion, World Models, and More | YC Paper Club'
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=wE1ZgJdt4uM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When you are unconstrained by compute but constrained by data, the optimal
    training recipe inverts — old-school regularization and ensembling deliver
    5–17x data-efficiency wins.
  standard: >-
    Konwoo Kim's 'Pretraining Under Infinite Compute' starts from a structural
    observation: internet text grows roughly 3% per year, but pretraining
    compute grows 4–5x per year, so the compute-per-datapoint we are willing to
    spend keeps rising ~4x year-over-year. The chinchilla 'compute-optimal'
    regime — scale parameters and data together — assumes data is cheap. That
    assumption is expiring, and the algorithmic regime flips: the question
    becomes how to extract maximum generalization from fixed data given
    effectively unlimited compute.


    In that regime, the standard recipe (epoch the data and grow the model)
    overfits and loss starts rising. The wins come from resurrected classical
    ML: weight decay ~30x larger than compute-optimal pretraining yields a clean
    power law with a measurable asymptote; ensembling small models beats
    training one large model at matched parameters; and the two compose
    (regularization lets models grow, ensembling adds a new compute axis).
    Together they buy ~5x data efficiency, and the win is roughly constant as
    you extrapolate the seed-token count toward trillions.


    The practical kicker is that these wins survive compression. An 8-member
    ensemble (~2.4B params) distills into a single dense 300M model retaining
    ~83% of the loss improvement, and even self-distillation improves loss (it
    behaves like an implicit two-member ensemble). Continued-pretraining on 4B
    math tokens matched training on the full 73B corpus — a ~17x data-efficiency
    win. The actionable principle: as data becomes the bottleneck, rethink every
    stage of the stack through the lens of squeezing more generalization per
    token, and treat the asymptote of a power-law fit as an evaluative tool for
    comparing recipes.
stance: >-
  Because human text grows ~3%/year while pretraining compute grows 4–5x/year,
  frontier training is shifting into a data-constrained regime where classical
  techniques like aggressive regularization, ensembling, and distillation become
  the highest-leverage moves.
related:
  - INS-260325-FD14
  - INS-260403-A3E4
  - INS-260403-B73D
  - INS-260424-0554
  - INS-260625-39E7
  - INS-260410-CB70
---
Konwoo Kim's 'Pretraining Under Infinite Compute' starts from a structural observation: internet text grows roughly 3% per year, but pretraining compute grows 4–5x per year, so the compute-per-datapoint we are willing to spend keeps rising ~4x year-over-year. The chinchilla 'compute-optimal' regime — scale parameters and data together — assumes data is cheap. That assumption is expiring, and the algorithmic regime flips: the question becomes how to extract maximum generalization from fixed data given effectively unlimited compute.

In that regime, the standard recipe (epoch the data and grow the model) overfits and loss starts rising. The wins come from resurrected classical ML: weight decay ~30x larger than compute-optimal pretraining yields a clean power law with a measurable asymptote; ensembling small models beats training one large model at matched parameters; and the two compose (regularization lets models grow, ensembling adds a new compute axis). Together they buy ~5x data efficiency, and the win is roughly constant as you extrapolate the seed-token count toward trillions.

The practical kicker is that these wins survive compression. An 8-member ensemble (~2.4B params) distills into a single dense 300M model retaining ~83% of the loss improvement, and even self-distillation improves loss (it behaves like an implicit two-member ensemble). Continued-pretraining on 4B math tokens matched training on the full 73B corpus — a ~17x data-efficiency win. The actionable principle: as data becomes the bottleneck, rethink every stage of the stack through the lens of squeezing more generalization per token, and treat the asymptote of a power-law fit as an evaluative tool for comparing recipes.
