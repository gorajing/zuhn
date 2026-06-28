---
id: INS-260627-CB5C
domain: ai-development
topic: system-design
title: 'Start with the cheapest architecture that works, escalate only when forced'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - pragmatism
  - rag
  - cost-efficiency
  - decision-making
  - yagni
sources:
  - type: youtube
    title: "VoiceVision RAG - Integrating Visual Document Intelligence with Voice Response —\_Suman Debnath, AWS"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=hwCmfThIiS4'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The speaker explicitly recommends NOT starting with the fancy
    vision-retrieval model — begin with the cheaper traditional pipeline and
    only switch when your actual data proves it inadequate.
  standard: >-
    Despite the talk being a showcase for ColPali, the presenter's clearest
    piece of advice is to not reach for it first. His default heuristic when
    handed any problem is to solve it the most cost-effective and least heavy
    way available, then escalate only if the data forces it. Vision retrieval
    stores many vectors per page and is computationally heavy, so it is the
    wrong starting point.


    The escalation trigger is concrete and human-grounded: use the heavier
    technique only when the data is 'convoluted' enough that you, as a human,
    could only answer questions about it by looking at the original rather than
    reading a text transcription. If a plain text version would suffice for a
    person, the traditional pipeline will suffice for the system.


    This is a general engineering principle wearing RAG clothing — it's YAGNI
    applied to architecture selection. The failure mode it guards against is
    adopting an impressive-sounding technique because it's novel, rather than
    because your data exhibits the specific pathology it solves. 'It may work
    for your data, may not — it's all about your data' is the repeated refrain.
stance: >-
  Engineers should default to the simplest, most cost-effective retrieval
  architecture and adopt heavier techniques only when their specific data
  demonstrably breaks the cheaper one.
related:
  - INS-260327-3A71
  - INS-260403-B53B
  - INS-260403-5F41
  - INS-260330-4AD5
  - INS-260403-26D4
---
Despite the talk being a showcase for ColPali, the presenter's clearest piece of advice is to not reach for it first. His default heuristic when handed any problem is to solve it the most cost-effective and least heavy way available, then escalate only if the data forces it. Vision retrieval stores many vectors per page and is computationally heavy, so it is the wrong starting point.

The escalation trigger is concrete and human-grounded: use the heavier technique only when the data is 'convoluted' enough that you, as a human, could only answer questions about it by looking at the original rather than reading a text transcription. If a plain text version would suffice for a person, the traditional pipeline will suffice for the system.

This is a general engineering principle wearing RAG clothing — it's YAGNI applied to architecture selection. The failure mode it guards against is adopting an impressive-sounding technique because it's novel, rather than because your data exhibits the specific pathology it solves. 'It may work for your data, may not — it's all about your data' is the repeated refrain.
