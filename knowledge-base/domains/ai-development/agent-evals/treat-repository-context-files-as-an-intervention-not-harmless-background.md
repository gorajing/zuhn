---
id: INS-260626-983E
domain: ai-development
topic: agent-evals
title: 'Treat repository context files as an intervention, not harmless background'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - agents-md
  - context-engineering
  - coding-agents
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
    The paper tests context files as an experimental condition and finds they
    consistently increase steps and cost without statistically significant
    task-success gains.
  standard: >-
    The evaluation compares coding agents on SWE-BENCH and CTX BENCH under
    no-context, LLM-generated-context, and developer-context conditions.
    LLM-generated context files reduce average resolution rate slightly while
    increasing average cost by about 20% on SWE-BENCH and 23% on CTX BENCH;
    developer-written context files perform better than LLM-generated ones but
    still increase steps and cost.


    The practical implication is that repo context files are not free
    scaffolding. Any AGENTS.md, CLAUDE.md, skill file, or generated repo guide
    should be treated like a harness change with before/after metrics, not as a
    best-practice default.
stance: >-
  Agent evaluation should A/B test repository context files because adding
  AGENTS.md or CLAUDE.md can change cost and behavior without improving task
  success.
related:
  - INS-260626-6AF4
  - INS-260626-43C9
  - INS-260626-057E
  - INS-260626-F5AE
  - INS-260327-E016
  - INS-260626-4564
---
The evaluation compares coding agents on SWE-BENCH and CTX BENCH under no-context, LLM-generated-context, and developer-context conditions. LLM-generated context files reduce average resolution rate slightly while increasing average cost by about 20% on SWE-BENCH and 23% on CTX BENCH; developer-written context files perform better than LLM-generated ones but still increase steps and cost.

The practical implication is that repo context files are not free scaffolding. Any AGENTS.md, CLAUDE.md, skill file, or generated repo guide should be treated like a harness change with before/after metrics, not as a best-practice default.
