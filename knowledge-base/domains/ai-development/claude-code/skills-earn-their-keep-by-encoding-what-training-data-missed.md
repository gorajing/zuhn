---
id: INS-260605-19B4
domain: ai-development
topic: claude-code
title: Skills earn their keep by encoding what training data missed
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - skills
  - domain-knowledge
  - training-data-gaps
  - rls
  - postgres
sources:
  - type: youtube
    title: >-
      Skill Issue: How We Used AI to Make Agents Actually Good at Supabase —
      Pedro Rodrigues, Supabase
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=GmAQKINjv1E'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    In the demo, Claude confidently built a Postgres view that bypassed
    row-level security because its training data missed that views need a
    security_invoker flag (Postgres 15+) to inherit RLS — exactly the gap a
    skill exists to close.
  standard: >-
    The demonstration's whole point was a knowledge gap, not a capability gap.
    Claude created a department-stats view, declared it working, and it did
    return data — but by default a Postgres view runs with the creator's
    privileges and bypasses the row-level security policies on the underlying
    tables, so every employee could see every department's salaries. The fix is
    a single security_invoker flag, available since Postgres 15, which makes RLS
    policies apply on the view itself. The model 'missed something that is
    training data basically missed.'


    The lesson generalizes past this bug: skills are most valuable as encoded
    hard-won, specific knowledge the model doesn't reliably have — security
    checklists, org conventions, the gotchas that bite. Pedro notes you don't
    even need to over-fit to the exact case (he did, but modern models
    generalize from it). And because behavior visibly changed once the skill
    loaded (the security_invoker flag appeared), the skill's effect is
    demonstrable even when an end-to-end demo is flaky. Think of SKILL.md as a
    prompt template merged near the system prompt that steers behavior on
    demand.
stance: >-
  A skill's real value is capturing the specific, non-obvious knowledge the
  model lacks rather than restating what it already knows.
related:
  - INS-260329-03B5
  - INS-260403-2FAE
  - PRI-260405-6867
  - INS-260413-F638
  - INS-260412-C3AB
---
The demonstration's whole point was a knowledge gap, not a capability gap. Claude created a department-stats view, declared it working, and it did return data — but by default a Postgres view runs with the creator's privileges and bypasses the row-level security policies on the underlying tables, so every employee could see every department's salaries. The fix is a single security_invoker flag, available since Postgres 15, which makes RLS policies apply on the view itself. The model 'missed something that is training data basically missed.'

The lesson generalizes past this bug: skills are most valuable as encoded hard-won, specific knowledge the model doesn't reliably have — security checklists, org conventions, the gotchas that bite. Pedro notes you don't even need to over-fit to the exact case (he did, but modern models generalize from it). And because behavior visibly changed once the skill loaded (the security_invoker flag appeared), the skill's effect is demonstrable even when an end-to-end demo is flaky. Think of SKILL.md as a prompt template merged near the system prompt that steers behavior on demand.
