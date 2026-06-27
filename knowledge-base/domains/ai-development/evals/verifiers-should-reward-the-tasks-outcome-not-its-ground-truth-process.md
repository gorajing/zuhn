---
id: INS-260627-B6D9
domain: ai-development
topic: evals
title: 'Verifiers should reward the task''s outcome, not its ground-truth process'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - verifiers
  - reward-hacking
  - test-design
  - evals
  - rl-environments
sources:
  - type: youtube
    title: >-
      Hard Won Lessons from Building Effective AI Coding Agents – Nik Pash,
      Cline
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=I8fs4omN1no'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Design verifiers like the whistle on a tea kettle — it signals only that the
    water boiled, indifferent to whether you used gas, induction, or a campfire
    — so test for the outcome and spirit of the task, never the incidental
    details of the ground-truth run.
  standard: >-
    The art of a good RL environment lives in the verifier, and Pash's
    tea-kettle analogy captures the principle: a whistle is pure outcome
    verification — water either reached boiling or it didn't, and the kettle
    doesn't care how you got there. Bad verifiers emerge when you over-prescribe
    based on the ground-truth solution: a subagent might notice the reference
    run set the burner to high and start checking for that, or check which
    burner was used, or whether five minutes elapsed — all spurious, because
    water boils fine on a low setting. These incidental artifacts of one
    successful path become brittle, false constraints.


    The rule is: don't overprescribe based on the ground-truth solution; test
    for the spirit and outcome of the task. Two further design moves reinforce
    honest verification. During 'archaeology' you reconstruct both the broken
    and fixed states locally and confirm the bug and solution actually exist
    before trusting the task. And you containerize with Docker while removing
    Git, specifically so agents can't reward-hack by reading the answer from
    history. Outcome-driven verification plus removing leakage channels is what
    separates a real difficulty signal from a puzzle the model games.
stance: >-
  Good verifiers check the spirit and outcome of a task like a tea-kettle
  whistle (boiling or not), not the specific path the ground-truth solution
  happened to take — over-prescribing the process produces brittle, gameable
  tests.
related:
  - INS-260403-B08E
  - INS-260409-5975
  - INS-260423-8403
  - INS-260323-BEF0
  - INS-260522-51E7
---
The art of a good RL environment lives in the verifier, and Pash's tea-kettle analogy captures the principle: a whistle is pure outcome verification — water either reached boiling or it didn't, and the kettle doesn't care how you got there. Bad verifiers emerge when you over-prescribe based on the ground-truth solution: a subagent might notice the reference run set the burner to high and start checking for that, or check which burner was used, or whether five minutes elapsed — all spurious, because water boils fine on a low setting. These incidental artifacts of one successful path become brittle, false constraints.

The rule is: don't overprescribe based on the ground-truth solution; test for the spirit and outcome of the task. Two further design moves reinforce honest verification. During 'archaeology' you reconstruct both the broken and fixed states locally and confirm the bug and solution actually exist before trusting the task. And you containerize with Docker while removing Git, specifically so agents can't reward-hack by reading the answer from history. Outcome-driven verification plus removing leakage channels is what separates a real difficulty signal from a puzzle the model games.
