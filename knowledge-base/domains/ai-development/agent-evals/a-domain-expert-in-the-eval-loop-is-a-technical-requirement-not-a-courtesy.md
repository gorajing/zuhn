---
id: INS-260625-A99C
domain: ai-development
topic: agent-evals
title: 'A domain expert in the eval loop is a technical requirement, not a courtesy'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - expert-evaluation
  - llm-as-judge
  - eval-design
  - human-in-the-loop
  - gating
sources:
  - type: youtube
    title: >-
      The Miranda Hypothesis: How Hamilton Poisoned Persona Evals - Jacob E.
      Thomas, Results Gen
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=IJXjTLPzvAU'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An automated metric operates on the model alone and can only see fluency and
    personality; it cannot see the archive, so it cannot judge fidelity to it.
  standard: >-
    Fidelity is not a property of the output alone — it is a relation between
    the output and the documentary record. You cannot evaluate a relation to a
    record using something that has not read the record. An automated metric or
    LLM-as-judge operates on the model alone, so it can only report fluency and
    personality; it structurally cannot adjudicate fidelity, because fidelity
    lives in the gap between the text and the archive and the metric cannot see
    the archive. Hence the slogan: a persona system without a domain expert in
    its evaluation loop is a thermometer that cannot read temperature.


    The practical objection — does this mean keeping a historian on staff to
    watch every inference forever? — is answered no. The expert is a build-time
    and gate-time requirement, not a runtime cost. The expert builds the
    instrument once (diagnostic questions on documented fault lines, a weighted
    rubric, a held-out gold set, sealed a priori vignettes), which then becomes
    a gate in the pipeline exactly like any other eval gate: the persona must
    pass before it ships and gets re-gated whenever the base model changes. A
    cheap automated metric can do the first pass, flagging candidates for human
    review. This generalizes beyond history — a Marcus Aurelius tutor needs a
    classicist, a scripture companion a theologian, an elder-care companion a
    clinical psychologist — and the talk pairs it with pre-registration (locking
    the rubric and directional predictions before any data exists) so the
    instrument cannot be accused of cherry-picking.
stance: >-
  Fidelity is a relation between an output and a documentary record, so only an
  evaluator who has read the record can adjudicate it — automated metrics
  structurally cannot.
related:
  - INS-260627-1EC5
  - INS-260628-9D66
  - INS-260423-2B80
  - INS-260626-A893
  - INS-260322-A36C
---
Fidelity is not a property of the output alone — it is a relation between the output and the documentary record. You cannot evaluate a relation to a record using something that has not read the record. An automated metric or LLM-as-judge operates on the model alone, so it can only report fluency and personality; it structurally cannot adjudicate fidelity, because fidelity lives in the gap between the text and the archive and the metric cannot see the archive. Hence the slogan: a persona system without a domain expert in its evaluation loop is a thermometer that cannot read temperature.

The practical objection — does this mean keeping a historian on staff to watch every inference forever? — is answered no. The expert is a build-time and gate-time requirement, not a runtime cost. The expert builds the instrument once (diagnostic questions on documented fault lines, a weighted rubric, a held-out gold set, sealed a priori vignettes), which then becomes a gate in the pipeline exactly like any other eval gate: the persona must pass before it ships and gets re-gated whenever the base model changes. A cheap automated metric can do the first pass, flagging candidates for human review. This generalizes beyond history — a Marcus Aurelius tutor needs a classicist, a scripture companion a theologian, an elder-care companion a clinical psychologist — and the talk pairs it with pre-registration (locking the rubric and directional predictions before any data exists) so the instrument cannot be accused of cherry-picking.
