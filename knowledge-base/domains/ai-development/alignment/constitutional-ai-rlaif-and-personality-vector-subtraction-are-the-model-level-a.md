---
id: INS-260409-667F
domain: ai-development
topic: alignment
title: >-
  Constitutional AI, RLAIF, and personality vector subtraction are the
  model-level alternatives to RLHF sycophancy
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - constitutional-ai
  - rlaif
  - personality-vectors
  - rlhf-alternatives
  - alignment
sources:
  - type: blog
    title: A Treatise on AI Chatbots Undermining the Enlightenment
    url: 'https://maggieappleton.com/ai-enlightenment'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Constitutional AI and RLAIF (Bai et al. 2022) train on AI-rated responses
    against explicit principles instead of raw human preferences; personality
    vector research (Chen et al. 2025) lets you subtract sycophancy as a vector
    directly from the model — both sidestep the 'humans prefer flattery' problem
    at the training layer.
  standard: >-
    If sycophancy is baked in by RLHF training humans rating responses, the fix
    must happen at the training layer, not at the prompt layer. Appleton points
    to two lines of research: (1) Anthropic's Constitutional AI and RLAIF (Bai
    et al. 2022), where AI agents rate responses against explicit constitutional
    principles instead of raw human preferences, letting you train against
    specific goals like 'be direct when the user is wrong.' (2) Recent
    personality vector research (Chen et al. 2025) shows you can identify the
    'sycophancy' direction in activation space and subtract it from the model at
    inference time — no retraining required, just a vector manipulation. Both
    approaches are early-stage but point at a real solution: you cannot get
    non-sycophantic models from a training loop that asks humans to rate
    responses, but you CAN get them from training loops that bypass raw human
    preference judgments. Time-sensitive because the specific techniques will
    evolve — the underlying insight (RLHF-sycophancy is structural and requires
    structural fixes) is more durable.
stance: >-
  Training-level techniques beyond RLHF can sidestep the sycophancy artifact by
  not training on raw human preferences for praise.
related:
  - INS-260404-94EB
  - INS-260403-59AC
  - INS-260409-1FD3
  - INS-260410-FBAA
  - PRI-260405-0676
  - INS-260323-584D
  - INS-260403-141E
---
If sycophancy is baked in by RLHF training humans rating responses, the fix must happen at the training layer, not at the prompt layer. Appleton points to two lines of research: (1) Anthropic's Constitutional AI and RLAIF (Bai et al. 2022), where AI agents rate responses against explicit constitutional principles instead of raw human preferences, letting you train against specific goals like 'be direct when the user is wrong.' (2) Recent personality vector research (Chen et al. 2025) shows you can identify the 'sycophancy' direction in activation space and subtract it from the model at inference time — no retraining required, just a vector manipulation. Both approaches are early-stage but point at a real solution: you cannot get non-sycophantic models from a training loop that asks humans to rate responses, but you CAN get them from training loops that bypass raw human preference judgments. Time-sensitive because the specific techniques will evolve — the underlying insight (RLHF-sycophancy is structural and requires structural fixes) is more durable.
