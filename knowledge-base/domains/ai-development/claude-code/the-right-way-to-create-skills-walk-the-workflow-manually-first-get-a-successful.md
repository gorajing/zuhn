---
id: INS-260501-9503
domain: ai-development
topic: claude-code
title: >-
  The right way to create skills — walk the workflow manually first, get a
  successful run, then convert to skill
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - skill-creation
  - experiential-learning
  - successful-run-extraction
  - skill-quality
sources:
  - type: youtube
    title: How AI agents & Claude skills work (Clearly Explained)
    author: Greg Isenberg
    url: 'https://youtu.be/S_oN3vlzpMw'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't write skills upfront. Walk the workflow with the agent step-by-step.
    Get one successful run. Then ask the agent to extract the skill from what
    just worked.
  standard: >-
    The educator's diagnostic: most skills fail in practice because they encode
    the human's mental model of the workflow, not the actual successful
    execution. The fix is experiential learning — walk the workflow with the
    agent step by step. For sponsor-vetting: 'Check their Twitter, check their
    YouTube, check their Trust Pilot, check if they've raised money. If two are
    absent or in bad standing, automatic rejection.' Run it once. Watch what
    works and what doesn't. Adjust the workflow. Run again. When you have a
    clean successful run, ask the agent 'review what you just did' and create
    the skill from that context.


    Why this works: the skill now has the agent's actual successful execution as
    its template, not the human's idealized version. The agent knows what
    'success' looks like in practice — what API calls succeed, what data shapes
    work, what edge cases arose. Skills extracted from successful runs have
    ~100% hit rate; skills written upfront have much lower hit rates.


    The corollary: don't download random skills from skills marketplaces.
    They're written upfront by other people, won't have run-specific context,
    and may be attack vectors. The valuable skills are the ones extracted from
    your own successful workflows. For Zuhn editorially: this validates Zuhn's
    existing skills (sleep, wake, compress, etc.) — they were written by someone
    who actually ran the workflow successfully many times before extracting it.
    The right skill design is workflow-mining, not workflow-prescribing.
stance: >-
  Most people create skills by writing instructions upfront ('this is how the
  workflow should go'), which produces brittle skills that fail in practice; the
  high-leverage pattern is to do the workflow with the agent step-by-step
  manually, achieve a successful run, then ask the agent to extract the skill
  from what just worked.
related:
  - INS-260409-94D6
  - INS-260410-0855
  - INS-260501-9E23
  - INS-260501-B933
  - INS-260327-1FA1
  - INS-260410-F910
  - INS-260403-4120
---
The educator's diagnostic: most skills fail in practice because they encode the human's mental model of the workflow, not the actual successful execution. The fix is experiential learning — walk the workflow with the agent step by step. For sponsor-vetting: 'Check their Twitter, check their YouTube, check their Trust Pilot, check if they've raised money. If two are absent or in bad standing, automatic rejection.' Run it once. Watch what works and what doesn't. Adjust the workflow. Run again. When you have a clean successful run, ask the agent 'review what you just did' and create the skill from that context.

Why this works: the skill now has the agent's actual successful execution as its template, not the human's idealized version. The agent knows what 'success' looks like in practice — what API calls succeed, what data shapes work, what edge cases arose. Skills extracted from successful runs have ~100% hit rate; skills written upfront have much lower hit rates.

The corollary: don't download random skills from skills marketplaces. They're written upfront by other people, won't have run-specific context, and may be attack vectors. The valuable skills are the ones extracted from your own successful workflows. For Zuhn editorially: this validates Zuhn's existing skills (sleep, wake, compress, etc.) — they were written by someone who actually ran the workflow successfully many times before extracting it. The right skill design is workflow-mining, not workflow-prescribing.
