---
id: INS-260627-2EB8
domain: ai-development
topic: model-architecture
title: 'Train end-to-end on the final objective, not on a proxy plus post-processing'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - end-to-end
  - model-architecture
  - objective-design
  - weather
  - deepmind
sources:
  - type: youtube
    title: "How Google DeepMind is researching the next Frontier of AI for Gemini —\_Raia Hadsell, VP of Research"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zZsTVBXcbow'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    DeepMind's FGN predicts cyclones directly — trajectory, wind speed, eye
    formation — rather than predicting general weather and then running a
    cyclone detector as post-processing, and it's better for it.
  standard: >-
    Hadsell contrasts FGN (functional generative network) with the earlier
    pipeline approach. Previously you would predict the weather generally and
    then add a cyclone detector as a post-processing step. FGN instead
    incorporates cyclone categorization, trajectory, wind speed, and eye
    formation directly into the network — the model is trained for the thing you
    actually care about.


    The result is materially better, and the model is now in operational use by
    the US National Hurricane Center. The generalizable principle is the classic
    end-to-end argument: when you train directly for the final objective rather
    than optimizing a proxy and then post-processing, the whole network's
    capacity is aligned to the real target and error doesn't accumulate across
    stages. When you find yourself predicting X and then deriving Y from X via a
    bolt-on, consider training a model to predict Y directly.
stance: >-
  Building the target task directly into a model beats predicting an
  intermediate representation and bolting on a separate post-processing
  detector.
related:
  - INS-260413-62D5
  - INS-260423-30C2
  - INS-260505-2053
  - INS-260627-1C9C
  - INS-260410-4782
---
Hadsell contrasts FGN (functional generative network) with the earlier pipeline approach. Previously you would predict the weather generally and then add a cyclone detector as a post-processing step. FGN instead incorporates cyclone categorization, trajectory, wind speed, and eye formation directly into the network — the model is trained for the thing you actually care about.

The result is materially better, and the model is now in operational use by the US National Hurricane Center. The generalizable principle is the classic end-to-end argument: when you train directly for the final objective rather than optimizing a proxy and then post-processing, the whole network's capacity is aligned to the real target and error doesn't accumulate across stages. When you find yourself predicting X and then deriving Y from X via a bolt-on, consider training a model to predict Y directly.
