---
id: INS-260602-E2BD
domain: ai-development
topic: limitations
title: 'Production AI failure is usually operational, not a bad model choice'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - production-failure
  - failure-taxonomy
  - observability
  - evaluation
  - silent-hallucination
sources:
  - type: audio
    title: agent
date_extracted: '2026-06-02'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Mansi More: 'Every time only AI went wrong or LLM, selection of LLM was not
    good — it's not the answer.' Production AI fails through a structured set of
    operational modes, and the reflex to swap models instead of fixing the
    pipeline is a misdiagnosis.
  standard: >-
    The workshop's central operational claim pushes back on a common reflex:
    when an AI feature misbehaves in production, teams reach for a
    better/different model. The speaker's taxonomy argues the real causes are
    usually elsewhere:


    1. Silent hallucination — the model is confidently wrong, and because the
    answer is fluent nobody double-checks accuracy. Dangerous precisely because
    it's silent.

    2. Context explosion — feeding the whole corpus instead of only relevant
    data overwhelms the model; relevance-filtering matters more than
    context-window size.

    3. Wrong tool selection — e.g. a finance chatbot pulling the wrong account's
    transaction history because it chose the wrong tool.

    4. Non-terminating agent loops — covered in the companion insight.

    5. Missing evaluation/observability — the system works in dev, but nobody is
    measuring per-trace quality in production, so degradation is invisible until
    users complain.


    The diagnostic discipline: before swapping the model, check which of these
    five is actually firing. Most are pipeline/observability problems, not
    model-capability problems. A bigger model masks them temporarily but doesn't
    fix the underlying operational gap.


    This converges with the 'silent failure is bug-shaped' principle Zuhn
    already enforces in its own codebase — fail loud, instrument the trace, and
    don't let confidently-wrong output pass unmeasured.
stance: >-
  When an AI system fails in production the root cause is rarely the choice of
  LLM — it is one of a small set of operational failure modes (silent
  hallucination, context overload, wrong tool selection, non-terminating loops,
  no evaluation), and teams that blame the model misdiagnose the fix
related:
  - INS-260321-E2FC
  - INS-260626-485E
  - INS-260626-B5A6
  - INS-260410-FD24
  - INS-260625-E9A9
  - INS-260625-63AF
  - INS-260627-056F
---
The workshop's central operational claim pushes back on a common reflex: when an AI feature misbehaves in production, teams reach for a better/different model. The speaker's taxonomy argues the real causes are usually elsewhere:

1. Silent hallucination — the model is confidently wrong, and because the answer is fluent nobody double-checks accuracy. Dangerous precisely because it's silent.
2. Context explosion — feeding the whole corpus instead of only relevant data overwhelms the model; relevance-filtering matters more than context-window size.
3. Wrong tool selection — e.g. a finance chatbot pulling the wrong account's transaction history because it chose the wrong tool.
4. Non-terminating agent loops — covered in the companion insight.
5. Missing evaluation/observability — the system works in dev, but nobody is measuring per-trace quality in production, so degradation is invisible until users complain.

The diagnostic discipline: before swapping the model, check which of these five is actually firing. Most are pipeline/observability problems, not model-capability problems. A bigger model masks them temporarily but doesn't fix the underlying operational gap.

This converges with the 'silent failure is bug-shaped' principle Zuhn already enforces in its own codebase — fail loud, instrument the trace, and don't let confidently-wrong output pass unmeasured.
