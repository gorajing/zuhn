---
id: INS-260626-43C9
domain: ai-development
topic: agent-patterns
title: Prefer developer-curated agent instructions over automatic init output
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agents-md
  - agent-patterns
  - context-engineering
  - human-in-the-loop
sources:
  - type: paste
    title: >-
      Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for
      Coding Agents?
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Developer-provided context files significantly outperform LLM-generated
    ones, even though their own absolute gains are small and costly.
  standard: >-
    On CTX BENCH, developer-provided context files outperform LLM-generated
    context files with a reported p-value of 3.8%, while improving average
    performance only modestly versus no context file and still increasing steps
    and cost. The paper also finds developer-provided files differ from
    generated ones and tend to be shorter.


    The system-building implication is to avoid unreviewed /init-style context
    generation as a default. Let the agent propose instructions, but require a
    human or evaluation loop to delete redundancy, preserve only non-obvious
    requirements, and verify the edited file against representative tasks.
stance: >-
  If a repo context file is needed, human-curated requirements are a better
  starting point than automatically generated overview-heavy files.
related:
  - INS-260321-0C99
  - INS-260626-A0DC
  - INS-260626-983E
  - INS-260626-057E
  - INS-260626-6AF4
  - INS-260626-4564
---
On CTX BENCH, developer-provided context files outperform LLM-generated context files with a reported p-value of 3.8%, while improving average performance only modestly versus no context file and still increasing steps and cost. The paper also finds developer-provided files differ from generated ones and tend to be shorter.

The system-building implication is to avoid unreviewed /init-style context generation as a default. Let the agent propose instructions, but require a human or evaluation loop to delete redundancy, preserve only non-obvious requirements, and verify the edited file against representative tasks.
