---
id: INS-260627-535C
domain: ai-development
topic: evals
title: Evaluate skills against no-skill and raw-doc baselines
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evals
  - skills
  - agentrun
  - testing
sources:
  - type: blog
    title: >-
      GitHub - pinecone-io/cultivar: Use cultivar to test your Agent Skills, run
      them in sandboxes, and across different agents.
    url: 'https://github.com/pinecone-io/cultivar'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: 'Measure skill distillation as a delta, not as an isolated pass/fail run.'
  standard: >-
    Cultivar's with-skill, without-skill, and with-docs variants separate three
    questions: whether the skill helps at all, whether raw docs were enough, and
    whether the distilled procedure improves pass rate, cost, or duration. The
    tradeoff is more runs per task, but the result prevents false confidence
    from a task the model could already solve. AgentRun skill testing should
    adopt these controls for any high-use skill or automation runbook.
  deep: >-
    The raw-doc baseline matters because many skills are just compressed
    documentation. If the skill does not outperform raw docs, the right action
    may be to improve the distillation or keep the source docs accessible
    instead of maintaining a brittle SKILL.md.
subtopic: agent-skills
stance: >-
  A skill only proves value if it beats both the same agent without the skill
  and, when possible, the same agent given the raw reference docs.
related:
  - INS-260625-57C1
  - INS-260625-D772
  - INS-260410-F053
  - INS-260330-52F6
  - INS-260625-E464
---
Cultivar's with-skill, without-skill, and with-docs variants separate three questions: whether the skill helps at all, whether raw docs were enough, and whether the distilled procedure improves pass rate, cost, or duration. The tradeoff is more runs per task, but the result prevents false confidence from a task the model could already solve. AgentRun skill testing should adopt these controls for any high-use skill or automation runbook.
