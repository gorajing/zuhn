---
id: INS-260605-749D
domain: ai-development
topic: claude-code
title: Discover which workflows deserve skills by mining your own conversation logs
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - skills
  - meta-skills
  - workflow-analysis
  - context-as-asset
sources:
  - type: youtube
    title: 'Full Walkthrough: Writing & Using Skills — Nick Nisi and Zack Proser'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=pFsfax19yOM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Wait a week, then ask the model to read your transcripts and recurring
    friction and propose the skills to extract.
  standard: >-
    Rather than designing skills in advance, the presenters recommend working
    normally for a week and then asking the model to analyze that week's
    conversations — saved locally as JSONL logs — and propose which repeated
    workflows should be split out into skills. The strongest signal is
    affective: the nagging tasks you feel the most cognitive resistance to doing
    every week (Zack's example: context-switching to file Linear tickets from
    Slack asks) are exactly the ones to encode. This inverts the pre-LLM habit
    of treating dev session context as disposable; now the conversation history,
    especially the parts that failed or were frustrating, is the richest raw
    material for a skill-creator to mine into a bespoke tool. Combined with
    eval-against-a-no-skill-baseline (run the task with and without the skill,
    fail if the skill doesn't beat baseline), it makes skills evolving
    organizational units that measurably improve over time instead of static
    markdown written once.
stance: >-
  The tasks worth turning into skills are best identified by analyzing past
  conversation transcripts and your recurring frustrations, not by planning
  skills upfront.
related:
  - INS-260323-0982
  - INS-260501-17BB
  - INS-260605-D659
  - INS-260626-F983
  - INS-260530-E697
  - INS-260501-FDF0
---
Rather than designing skills in advance, the presenters recommend working normally for a week and then asking the model to analyze that week's conversations — saved locally as JSONL logs — and propose which repeated workflows should be split out into skills. The strongest signal is affective: the nagging tasks you feel the most cognitive resistance to doing every week (Zack's example: context-switching to file Linear tickets from Slack asks) are exactly the ones to encode. This inverts the pre-LLM habit of treating dev session context as disposable; now the conversation history, especially the parts that failed or were frustrating, is the richest raw material for a skill-creator to mine into a bespoke tool. Combined with eval-against-a-no-skill-baseline (run the task with and without the skill, fail if the skill doesn't beat baseline), it makes skills evolving organizational units that measurably improve over time instead of static markdown written once.
