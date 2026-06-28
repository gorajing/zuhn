---
id: INS-260605-B44B
domain: ai-development
topic: agent-patterns
title: Vibe-checking is a legitimate first eval step — if you document the why
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - human-annotation
  - llm-as-judge
  - bootstrapping
sources:
  - type: youtube
    title: 'The maturity phases of running evals — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=FB-MLPhL9Ms'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Begin with human thumbs-up/down on ~10 example outputs, but force a written
    justification so you can later mine those reasons into an LLM-as-judge.
  standard: >-
    The earliest eval maturity stage is unavoidably manual — loop ~10 example
    inputs through the agent and have a human (ideally a subject-matter expert,
    not just the builder) rate each output. The non-obvious move is requiring
    the annotator to justify each thumbs-up or thumbs-down in writing. The
    rating alone is cheap signal; the justification is the asset.


    Those justifications encode the domain-specific knowledge living in the
    expert's head. Once captured, you can run them through a coding agent
    (Cursor, Claude Code, Codex) to derive the actual failure modes, and
    eventually convert that tacit knowledge into automated LLM-as-judge scorers.
    Documenting the 'why' is what makes the later transition from
    human-bottlenecked grading to scaled automated grading possible. A
    corollary: don't hand annotators a generic interface — build a task-specific
    annotation view so they evaluate the traces the way their expertise expects
    to see them.
stance: >-
  Starting evals with manual vibe-checks is fine as long as every human judgment
  is paired with a written justification.
related:
  - INS-260410-DABE
  - INS-260626-60C2
  - INS-260627-6F3F
  - INS-260605-EC51
  - INS-260628-337C
  - INS-260323-4D5E
  - INS-260605-F4AE
  - INS-260625-4355
  - INS-260626-AF37
  - INS-260627-4130
---
The earliest eval maturity stage is unavoidably manual — loop ~10 example inputs through the agent and have a human (ideally a subject-matter expert, not just the builder) rate each output. The non-obvious move is requiring the annotator to justify each thumbs-up or thumbs-down in writing. The rating alone is cheap signal; the justification is the asset.

Those justifications encode the domain-specific knowledge living in the expert's head. Once captured, you can run them through a coding agent (Cursor, Claude Code, Codex) to derive the actual failure modes, and eventually convert that tacit knowledge into automated LLM-as-judge scorers. Documenting the 'why' is what makes the later transition from human-bottlenecked grading to scaled automated grading possible. A corollary: don't hand annotators a generic interface — build a task-specific annotation view so they evaluate the traces the way their expertise expects to see them.
