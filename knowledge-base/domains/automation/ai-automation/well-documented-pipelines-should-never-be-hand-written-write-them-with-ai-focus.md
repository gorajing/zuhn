---
id: INS-260514-F2D5
domain: automation
topic: ai-automation
title: >-
  Well-documented pipelines should never be hand-written — write them with AI,
  focus humans on inputs and outputs
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - pipeline-automation
  - domain-expertise-allocation
  - human-in-the-loop
  - scientific-coding
sources:
  - type: youtube
    title: 'Episode: 41 - Sonia Timberlake on Agentic AI for Biotech Coders'
    author: Bio ITWorld
    url: 'https://youtu.be/YxdWMzJK2j0'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    For well-documented pipelines (RNA-seek, bulk transcriptomics), humans
    should never be writing the code — the entire domain-expertise value is in
    input curation and output interpretation.
  standard: >-
    Sonia draws a sharp line for scientific pipeline work: if a pipeline is
    well-documented (think RNA-seek and similar canonical workflows), AI has
    abundant training examples and reliable verification — and crucially, the
    domain expertise isn't in writing the pipeline. The expertise is in (1)
    curating the inputs (what samples, what controls, what normalization
    choices) and (2) interpreting the outputs (does this differential expression
    actually make biological sense). Hand-writing the pipeline code itself is
    value-destroying — you're spending senior-scientist time on something that's
    better done by an agent. The implication for team design: structure your
    scientific software team to maximize human attention on the upstream
    curation and downstream interpretation, and minimize human attention on the
    pipeline middle. Specifically: don't hire a bioinformatician to write
    RNA-seek pipelines; hire someone who can choose between methods, validate
    outputs against domain knowledge, and ask the right scientific questions of
    the data. This generalizes beyond biotech: anywhere there's a standardized,
    well-documented workflow with clear verification (data engineering ETLs,
    common CRUD APIs, standard chart generation), the same principle applies —
    humans should be doing the parts that can't be canonicalized, not the parts
    that can.
stance: >-
  For any well-documented standard scientific pipeline (RNA-seek, bulk
  transcriptomics, protein modeling at basic level) with abundant training
  examples and clear verification, no human should be writing the pipeline code
  from scratch — the entire domain-expertise value is in curating inputs and
  interpreting outputs, not in coding the pipeline.
related:
  - PRI-260406-3EF8
  - INS-260626-4075
  - PRI-260405-2DE5
  - INS-260514-D3CB
  - INS-260329-500E
---
Sonia draws a sharp line for scientific pipeline work: if a pipeline is well-documented (think RNA-seek and similar canonical workflows), AI has abundant training examples and reliable verification — and crucially, the domain expertise isn't in writing the pipeline. The expertise is in (1) curating the inputs (what samples, what controls, what normalization choices) and (2) interpreting the outputs (does this differential expression actually make biological sense). Hand-writing the pipeline code itself is value-destroying — you're spending senior-scientist time on something that's better done by an agent. The implication for team design: structure your scientific software team to maximize human attention on the upstream curation and downstream interpretation, and minimize human attention on the pipeline middle. Specifically: don't hire a bioinformatician to write RNA-seek pipelines; hire someone who can choose between methods, validate outputs against domain knowledge, and ask the right scientific questions of the data. This generalizes beyond biotech: anywhere there's a standardized, well-documented workflow with clear verification (data engineering ETLs, common CRUD APIs, standard chart generation), the same principle applies — humans should be doing the parts that can't be canonicalized, not the parts that can.
