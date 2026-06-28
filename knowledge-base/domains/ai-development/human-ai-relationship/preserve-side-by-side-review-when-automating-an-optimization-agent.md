---
id: INS-260628-E55B
domain: ai-development
topic: human-ai-relationship
title: Preserve side-by-side review when automating an optimization agent
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - human-in-the-loop
  - agent-ux
  - trust
  - diffs
  - automation-design
sources:
  - type: youtube
    title: 'The Future of Evals - Ankur Goyal, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=MC55hdWLq4o'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Loop shows every suggested edit to data, scorers, or prompts side-by-side so
    humans keep looking at their data while automating, with full autonomy as an
    opt-in toggle rather than the default.
  standard: >-
    A key design lesson Braintrust drew from working with users is that the
    value of evals comes partly from humans actually looking at their data and
    prompts while iterating — and naive automation destroys that. So when Loop
    suggests an edit to a dataset, a new scoring idea, or a prompt change, it
    surfaces the change side-by-side in the UI rather than silently applying it.
    Full autonomy ('just go for it and optimize away') exists, but as an opt-in
    toggle for the adventurous, not the default mode.


    This is a transferable agent-UX principle: when you automate a workflow that
    previously forced humans to engage with their data, the automation should
    preserve the engagement surface, not remove it. Show the diff, keep the
    human in the loop by default, and make full autonomy an explicit escalation.
    This builds trust (the human can verify each change), preserves the learning
    that came from manual inspection, and avoids the failure mode where an
    optimizer drifts the system somewhere the team no longer understands. The
    default should be 'assisted with visible diffs,' with 'fully autonomous'
    available but chosen deliberately.
stance: >-
  Automating an optimization workflow should keep each suggested change
  reviewable side-by-side rather than hiding edits behind full autonomy.
related:
  - INS-260329-917B
  - INS-260329-CF16
  - INS-260628-6F97
  - INS-260627-8530
  - INS-260605-33B4
  - INS-260628-D947
  - INS-260628-26C6
  - INS-260514-9D51
---
A key design lesson Braintrust drew from working with users is that the value of evals comes partly from humans actually looking at their data and prompts while iterating — and naive automation destroys that. So when Loop suggests an edit to a dataset, a new scoring idea, or a prompt change, it surfaces the change side-by-side in the UI rather than silently applying it. Full autonomy ('just go for it and optimize away') exists, but as an opt-in toggle for the adventurous, not the default mode.

This is a transferable agent-UX principle: when you automate a workflow that previously forced humans to engage with their data, the automation should preserve the engagement surface, not remove it. Show the diff, keep the human in the loop by default, and make full autonomy an explicit escalation. This builds trust (the human can verify each change), preserves the learning that came from manual inspection, and avoids the failure mode where an optimizer drifts the system somewhere the team no longer understands. The default should be 'assisted with visible diffs,' with 'fully autonomous' available but chosen deliberately.
