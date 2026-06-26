---
id: INS-260626-D9CD
domain: ai-development
topic: llm-behavior
title: >-
  LLMs excel at the 'average' answer and fail where you want something no one
  else would do
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - capability-boundary
  - automation-heuristic
  - task-vs-job
  - tacit-knowledge
  - deployment-strategy
  - exception-handling
sources:
  - type: youtube
    title: >-
      The Economics of AI Usage and What's Next For SaaS | Benedict Evans on
      a16z
    author: a16z
    url: 'https://www.youtube.com/watch?v=ktl8mNiWqMM'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Deploy LLMs where 'what anyone would do' is the goal; the human-held value
    is where you want a different answer or can't articulate why you did it that
    way.
  standard: >-
    Evans offers a deceptively useful heuristic for where automation lands: ask
    whether the thing you want is the average — 'the way everyone would do this,
    the answer anyone would give, what any associate would make.' LLMs are very
    good at anything you can describe how people do and where the average is
    acceptable, and not good where you can't explain why you did it that way or
    where you are deliberately doing it differently from how people normally
    would. The boundary between what gets automated and what doesn't is largely
    exception handling — the decisions that require judgment because the
    situation wasn't written down, didn't happen before, or doesn't look quite
    like before.


    He pairs this with a task-versus-job distinction: the tasks used to
    accomplish a job can change completely without the job itself changing.
    Accountants today spend almost none of their time doing what accountants did
    50 years ago, yet to the client it's the same service. So automation can
    hollow out and rebuild the entire task set underneath a job while the job —
    and what the client buys — persists. The practical move is to decompose work
    into tasks, route the 'average is fine' tasks to LLMs, and keep humans on
    the exceptions and the deliberately-non-average judgment calls. This also
    reframes the jobs debate: the question isn't 'is this job automated' but
    'which tasks within it are average-acceptable,' and whether the residual
    non-automatable judgment still constitutes a viable role.
stance: >-
  LLMs are strong wherever you want the answer anyone would give and weak
  wherever the value lies in a non-average, hard-to-explain answer.
related:
  - INS-260327-A817
  - INS-260403-3E16
  - INS-260327-2915
  - INS-260412-9594
  - INS-260524-B783
  - INS-260322-A208
  - INS-260322-4B4A
---
Evans offers a deceptively useful heuristic for where automation lands: ask whether the thing you want is the average — 'the way everyone would do this, the answer anyone would give, what any associate would make.' LLMs are very good at anything you can describe how people do and where the average is acceptable, and not good where you can't explain why you did it that way or where you are deliberately doing it differently from how people normally would. The boundary between what gets automated and what doesn't is largely exception handling — the decisions that require judgment because the situation wasn't written down, didn't happen before, or doesn't look quite like before.

He pairs this with a task-versus-job distinction: the tasks used to accomplish a job can change completely without the job itself changing. Accountants today spend almost none of their time doing what accountants did 50 years ago, yet to the client it's the same service. So automation can hollow out and rebuild the entire task set underneath a job while the job — and what the client buys — persists. The practical move is to decompose work into tasks, route the 'average is fine' tasks to LLMs, and keep humans on the exceptions and the deliberately-non-average judgment calls. This also reframes the jobs debate: the question isn't 'is this job automated' but 'which tasks within it are average-acceptable,' and whether the residual non-automatable judgment still constitutes a viable role.
