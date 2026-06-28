---
id: INS-260628-2FE3
domain: ai-development
topic: agent-patterns
title: >-
  Extraction tools must own interfield validation and the downstream handoff,
  not stop at raw values
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - extraction
  - validation
  - data-pipeline
  - workflow-automation
  - low-code
sources:
  - type: youtube
    title: >-
      How BlackRock Builds Custom Knowledge Apps at Scale — Vaibhav Page &
      Infant Vasanth, BlackRock
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=08mH36_NVos'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Most extraction tools do extraction well but dump a CSV/JSON, forcing
    operators to manually transform and push downstream—BlackRock's template
    engine instead encodes interfield dependencies (a callable bond requires
    call date and call price), QC checks, and a low-code transform/execute
    workflow so the pipeline runs end-to-end.
  standard: >-
    BlackRock observed that the tools operators previously used—both closed and
    open source—do a good job at the extraction step itself but stop there. The
    result is presented, and then 'the process right now is very manual':
    operators download a CSV or JSON, hand-apply transformations, and push to
    downstream processes. That manual gap is where time and errors concentrate,
    and it is precisely the part standard prompt-template tooling ignores.


    Two concrete capabilities close the gap. First, extraction templates need
    far more than prompts plus expected data types: they need multiple QC
    checks, field-level validations and constraints, and interfield
    dependencies. Their example is a callable bond—once the 'callable' field is
    true, the 'call date' and 'call price' fields must take values—so the
    template engine must express conditional requiredness and cross-field logic.
    Templates also distinguish 'extracted' versus 'derived' fields, where
    derived fields are populated by downstream transformation rather than a
    direct model read.


    Second, they built a low-code/no-code framework so operators can compose
    transformation-and-execution workflows and run an end-to-end pipeline,
    rather than treating extraction as a terminal step. The lesson: extraction
    is only the first ~30% of the value chain. A tool that nails extraction but
    offloads validation and downstream integration to humans has automated the
    easy part and left the hard part manual.
stance: >-
  An extraction tool only delivers value if it encodes interfield dependencies
  and validation and pushes results into downstream systems—stopping at a
  CSV/JSON export leaves the hardest, most error-prone work manual.
related:
  - INS-260320-71C1
  - INS-260329-19EA
  - INS-260626-8116
  - INS-260323-AF96
  - INS-260628-DD24
  - INS-260605-9523
---
BlackRock observed that the tools operators previously used—both closed and open source—do a good job at the extraction step itself but stop there. The result is presented, and then 'the process right now is very manual': operators download a CSV or JSON, hand-apply transformations, and push to downstream processes. That manual gap is where time and errors concentrate, and it is precisely the part standard prompt-template tooling ignores.

Two concrete capabilities close the gap. First, extraction templates need far more than prompts plus expected data types: they need multiple QC checks, field-level validations and constraints, and interfield dependencies. Their example is a callable bond—once the 'callable' field is true, the 'call date' and 'call price' fields must take values—so the template engine must express conditional requiredness and cross-field logic. Templates also distinguish 'extracted' versus 'derived' fields, where derived fields are populated by downstream transformation rather than a direct model read.

Second, they built a low-code/no-code framework so operators can compose transformation-and-execution workflows and run an end-to-end pipeline, rather than treating extraction as a terminal step. The lesson: extraction is only the first ~30% of the value chain. A tool that nails extraction but offloads validation and downstream integration to humans has automated the easy part and left the hard part manual.
