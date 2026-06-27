---
id: INS-260625-722D
domain: ai-development
topic: agent-evals
title: Exact-match judge agreement overstates evaluation validity
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - llm-judges
  - cohens-kappa
  - eval-design
  - verification
sources:
  - type: blog
    title: >-
      Reliability without Validity: A Systematic, Large-Scale Evaluation of
      LLM-as-a-Judge Models Across Agreement, Consistency, and Bias
    url: 'https://arxiv.org/abs/2606.19544'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Raw judge agreement is a weak certificate unless chance and bias are
    accounted for.
  standard: >-
    The study finds universal deflation between exact-match agreement and
    Cohen's kappa on MT-Bench, plus large shifts in judge rankings across
    benchmarks. The practical lesson is that a single agreement number can make
    an evaluator look more discriminative and stable than it is.


    For AgentRun, judge-backed gates should include the evaluation protocol as
    evidence: agreement metric, chance correction, benchmark or task family, and
    known bias probes. A gate that says 'LLM judge passed' is under-specified; a
    useful gate says what kind of reliability the judge has demonstrated and
    where it is unvalidated.
stance: >-
  Agent eval systems should report chance-corrected and bias-aware judge metrics
  instead of relying on raw exact-match agreement, because raw agreement can
  inflate confidence in weak evaluators.
related:
  - INS-260605-8789
  - INS-260625-3162
  - INS-260605-EC51
  - INS-260627-6F3F
  - INS-260627-7541
  - INS-260625-206A
---
The study finds universal deflation between exact-match agreement and Cohen's kappa on MT-Bench, plus large shifts in judge rankings across benchmarks. The practical lesson is that a single agreement number can make an evaluator look more discriminative and stable than it is.

For AgentRun, judge-backed gates should include the evaluation protocol as evidence: agreement metric, chance correction, benchmark or task family, and known bias probes. A gate that says 'LLM judge passed' is under-specified; a useful gate says what kind of reliability the judge has demonstrated and where it is unvalidated.
