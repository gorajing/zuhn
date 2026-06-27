---
id: INS-260627-4130
domain: ai-development
topic: agent-patterns
title: >-
  Mine eval failures into appended rules to lift agent benchmarks without
  fine-tuning
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - self-improvement
  - swe-bench
  - claude-code
  - agent-evaluation
sources:
  - type: youtube
    title: >-
      The Unreasonable Effectiveness of Prompt Learning – Aparna Dhinakaran,
      Arize
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=pP_dSNz_EdQ'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A generate → unit-test → judge-with-explanation → meta-prompt → append-rules
    loop raised Claude Code by 5% and Cline by 15% on 150 SWE-bench examples, no
    fine-tuning involved.
  standard: >-
    The full loop: run the coding agent on a software-engineering problem,
    execute the generated patch against unit tests, pass the result plus context
    into an LLM-as-a-judge eval that explains the failure, then feed those
    explanations into a large meta-prompt that emits a set of rules to append to
    the previously-empty CLAUDE.md / Cline rules file. They then re-ran the
    benchmark with the augmented prompt and diffed against the vanilla baseline.


    Results on 150 SWE-bench-light examples: vanilla Claude Code (~40% issues
    resolved) gained ~5 points; vanilla Cline (~30%) gained ~15 points. Notably
    the gains came from only 150 examples of 'training data,' with no
    fine-tuning and no model changes — just learned rules distilled from
    observed mistakes. The takeaway for builders is that a surprisingly small,
    cheap, fully-promptable feedback loop can extract real performance from
    agents you don't control the weights of. Before investing in fine-tuning or
    RL, build the failure-mining loop: it's faster to stand up, needs little
    data, and writes its gains into a file you can read and audit.
stance: >-
  You can measurably improve a coding agent by looping its failures back into
  appended system-prompt rules, with no model changes and only ~150 training
  examples.
related:
  - INS-260627-8530
  - INS-260605-B44B
  - INS-260605-5A8E
  - INS-260605-0D57
  - PRI-260321-14D8
---
The full loop: run the coding agent on a software-engineering problem, execute the generated patch against unit tests, pass the result plus context into an LLM-as-a-judge eval that explains the failure, then feed those explanations into a large meta-prompt that emits a set of rules to append to the previously-empty CLAUDE.md / Cline rules file. They then re-ran the benchmark with the augmented prompt and diffed against the vanilla baseline.

Results on 150 SWE-bench-light examples: vanilla Claude Code (~40% issues resolved) gained ~5 points; vanilla Cline (~30%) gained ~15 points. Notably the gains came from only 150 examples of 'training data,' with no fine-tuning and no model changes — just learned rules distilled from observed mistakes. The takeaway for builders is that a surprisingly small, cheap, fully-promptable feedback loop can extract real performance from agents you don't control the weights of. Before investing in fine-tuning or RL, build the failure-mining loop: it's faster to stand up, needs little data, and writes its gains into a file you can read and audit.
