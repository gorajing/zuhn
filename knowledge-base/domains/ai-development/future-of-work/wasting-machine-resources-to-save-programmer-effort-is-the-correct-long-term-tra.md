---
id: INS-260402-1FE9
domain: ai-development
topic: future-of-work
title: >-
  Wasting machine resources to save programmer effort is the correct long-term
  trade-off
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - programmer-productivity
  - machine-efficiency
  - trade-offs
  - computing-power
  - waste
sources:
  - type: blog
    title: The Hundred-Year Language
    url: 'https://paulgraham.com/hundred.html'
date_extracted: '2026-04-02'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Programmer time is the true scarce resource; burning machine cycles for
    simpler code is good waste.
  standard: >-
    Graham distinguishes between 'good waste' and 'bad waste' — good waste
    trades abundant machine resources for simpler designs and less programmer
    effort, while bad waste serves no design purpose (like SUVs solving the
    problem of making minivans look masculine). As computers get faster, the
    definition of acceptable inefficiency expands, and languages that seem
    shockingly wasteful by previous standards become the practical choice.


    This insight has only become more relevant with cloud computing and AI. The
    cost of developer time now dwarfs the cost of compute for most applications.
    Teams that prematurely optimize for machine efficiency at the expense of
    code clarity and development speed are making the same mistake as someone
    who grew up poor and can't bring themselves to spend money even for
    important things. The correct heuristic is: optimize for programmer
    understanding first, then selectively optimize hot paths with profiling
    data.
stance: >-
  As computing power grows exponentially, optimizing for programmer productivity
  over machine efficiency becomes increasingly dominant as the correct
  engineering trade-off.
related:
  - INS-260329-EA2B
  - INS-260323-DC99
  - INS-260329-6AF5
  - INS-260320-DEAF
  - INS-260323-19A8
---
Graham distinguishes between 'good waste' and 'bad waste' — good waste trades abundant machine resources for simpler designs and less programmer effort, while bad waste serves no design purpose (like SUVs solving the problem of making minivans look masculine). As computers get faster, the definition of acceptable inefficiency expands, and languages that seem shockingly wasteful by previous standards become the practical choice.

This insight has only become more relevant with cloud computing and AI. The cost of developer time now dwarfs the cost of compute for most applications. Teams that prematurely optimize for machine efficiency at the expense of code clarity and development speed are making the same mistake as someone who grew up poor and can't bring themselves to spend money even for important things. The correct heuristic is: optimize for programmer understanding first, then selectively optimize hot paths with profiling data.
