---
id: INS-260625-57C1
domain: ai-development
topic: llm-training
title: Distribution-based step distillation beats copying the teacher's trajectory
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - distillation
  - diffusion
  - training-objective
  - model-quality
sources:
  - type: youtube
    title: 'You Might Not Need 50 Diffusion Steps — Ziv Ilan, Nvidia'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=gHs5ZiY80PM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Distribution-based distillation (match where the teacher ends up) currently
    yields better quality than trajectory-based distillation (mimic each
    denoising step), and hybrids of the two give the best stability-quality
    balance.
  standard: >-
    There are two families of diffusion step-distillation. Trajectory-based
    distillation teaches the student to reproduce the teacher's path through the
    denoising steps. Distribution-based distillation only constrains the final
    output distribution — the student must arrive at the same endpoint but is
    free to find its own route there. The latter is the more common and
    higher-quality approach in current practice, because over-constraining the
    intermediate trajectory wastes the student's freedom to find a shorter path.
    The frontier is hybrid methods: recent releases (e.g. a FastGen video
    release) combine both to keep distribution-level quality while gaining more
    stable training. The general lesson, applicable beyond diffusion, is that
    distillation objectives should constrain outcomes rather than process when
    the goal is to let the student compress the computation.
stance: >-
  Matching only the teacher's output distribution produces higher-quality
  distilled diffusion students than forcing them to follow the teacher's exact
  denoising trajectory.
related:
  - INS-260330-52F6
  - INS-260410-F053
  - INS-260625-E464
  - INS-260625-D772
  - INS-260627-535C
---
There are two families of diffusion step-distillation. Trajectory-based distillation teaches the student to reproduce the teacher's path through the denoising steps. Distribution-based distillation only constrains the final output distribution — the student must arrive at the same endpoint but is free to find its own route there. The latter is the more common and higher-quality approach in current practice, because over-constraining the intermediate trajectory wastes the student's freedom to find a shorter path. The frontier is hybrid methods: recent releases (e.g. a FastGen video release) combine both to keep distribution-level quality while gaining more stable training. The general lesson, applicable beyond diffusion, is that distillation objectives should constrain outcomes rather than process when the goal is to let the student compress the computation.
