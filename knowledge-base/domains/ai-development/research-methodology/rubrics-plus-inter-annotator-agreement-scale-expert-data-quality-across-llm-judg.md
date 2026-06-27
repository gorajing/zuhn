---
id: INS-260605-BEA5
domain: ai-development
topic: research-methodology
title: >-
  Rubrics plus inter-annotator agreement scale expert data quality across LLM
  judges and humans
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - llm-as-judge
  - rubrics
  - inter-annotator-agreement
  - human-in-the-loop
  - data-quality
sources:
  - type: youtube
    title: 'Task Fidelity Scaling Laws — Kobie Crawdord, Snorkel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=YYH0DMQr30A'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Snorkel scales quality by building rubrics used by both human experts and
    LLM judges, then enforcing high inter-annotator agreement between humans and
    between humans and LLM judges.
  standard: >-
    To deliver quality 'at scale,' Snorkel keeps experts in the loop but
    augments them with LLM judges. The bridge is a rubric: a long, structured
    list of criteria and data points that both people and LLM judges evaluate
    against. Human experts supply ground-truth judgments that inform the LLM
    judges, and the system explicitly measures inter-annotator agreement — both
    human-to-human and human-to-LLM — as a quality-assessment gate.


    The transferable pattern is that LLM-as-judge is only trustworthy when
    anchored to human-validated rubrics and audited via agreement metrics, not
    deployed as an unchecked oracle. Even in easy, explicitly verifiable
    domains, the same rubric-plus-agreement principle applies; it becomes
    essential as horizons lengthen and 'correct' admits multiple graded
    outcomes. If you rely on LLM judges, the move is to express your standard as
    an explicit rubric and continuously verify that your judges agree with your
    experts.
stance: >-
  Detailed rubrics shared by human experts and LLM judges, validated by high
  inter-annotator agreement, are what let expert-grade quality scale beyond what
  humans can label alone.
related:
  - INS-260323-CD28
  - INS-260403-8BA2
  - INS-260327-0C4A
  - INS-260405-3E73
  - INS-260605-8789
  - PRI-260406-3EF8
  - INS-260627-D28C
  - INS-260627-9981
  - INS-260605-EC51
  - INS-260605-1A91
---
To deliver quality 'at scale,' Snorkel keeps experts in the loop but augments them with LLM judges. The bridge is a rubric: a long, structured list of criteria and data points that both people and LLM judges evaluate against. Human experts supply ground-truth judgments that inform the LLM judges, and the system explicitly measures inter-annotator agreement — both human-to-human and human-to-LLM — as a quality-assessment gate.

The transferable pattern is that LLM-as-judge is only trustworthy when anchored to human-validated rubrics and audited via agreement metrics, not deployed as an unchecked oracle. Even in easy, explicitly verifiable domains, the same rubric-plus-agreement principle applies; it becomes essential as horizons lengthen and 'correct' admits multiple graded outcomes. If you rely on LLM judges, the move is to express your standard as an explicit rubric and continuously verify that your judges agree with your experts.
