---
id: INS-260505-4426
domain: ai-development
topic: research-methodology
title: >-
  Training-dynamics analysis reveals when extreme events are learned then
  catastrophically unlearned
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - training-dynamics
  - catastrophic-forgetting
  - extreme-events
  - model-interpretability
sources:
  - type: audio
    title: Lighting talk 2
date_extracted: '2026-05-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Take the model at every training checkpoint, not just the final one —
    extreme events are often learned at step 50K, then forgotten by step 500K.
  standard: >-
    Laura Howell's training-dynamics study: instead of evaluating the final
    trained model, evaluate snapshots at every training checkpoint. Run a
    specific extreme weather event (hurricane, atmospheric river, etc.) through
    each snapshot. Pattern observed: the event is learned, then well-predicted
    for many checkpoints, then suddenly unlearned and never recovered. About 1/3
    of extreme weather events show this 'learn-then-unlearn' pattern. The final
    model misses them, but a checkpoint a few hundred thousand steps earlier had
    them right. This phenomenon is invisible if you only look at final-model
    performance. It generalizes: the broader ML community is increasingly
    studying training dynamics rather than treating training as a black box that
    produces a final model.


    Application: in any production ML system in scientific or high-stakes
    domains, evaluate model checkpoints across training, not just the final one.
    Extreme/rare events are systematically the events most likely to be lost in
    late-training fine-tuning. For Memric specifically: the same logic applies
    to compression models that learn firm-specific decision patterns. Some
    patterns may be learned early then drift away — periodic checkpoint analysis
    is the diagnostic.
stance: >-
  Watching the training trajectory of an AI weather model (not just the final
  checkpoint) reveals that extreme weather events are typically learned early in
  training, then forgotten as training continues — about a third of extreme
  events are completely unlearned by the final model, but the early-checkpoint
  model captured them.
related:
  - INS-260330-BD3C
  - INS-260404-8EFB
  - INS-260325-B50B
  - INS-260501-646A
  - INS-260404-CE26
  - INS-260505-5510
  - INS-260505-4EB7
  - INS-260605-9CE2
---
Laura Howell's training-dynamics study: instead of evaluating the final trained model, evaluate snapshots at every training checkpoint. Run a specific extreme weather event (hurricane, atmospheric river, etc.) through each snapshot. Pattern observed: the event is learned, then well-predicted for many checkpoints, then suddenly unlearned and never recovered. About 1/3 of extreme weather events show this 'learn-then-unlearn' pattern. The final model misses them, but a checkpoint a few hundred thousand steps earlier had them right. This phenomenon is invisible if you only look at final-model performance. It generalizes: the broader ML community is increasingly studying training dynamics rather than treating training as a black box that produces a final model.

Application: in any production ML system in scientific or high-stakes domains, evaluate model checkpoints across training, not just the final one. Extreme/rare events are systematically the events most likely to be lost in late-training fine-tuning. For Memric specifically: the same logic applies to compression models that learn firm-specific decision patterns. Some patterns may be learned early then drift away — periodic checkpoint analysis is the diagnostic.
