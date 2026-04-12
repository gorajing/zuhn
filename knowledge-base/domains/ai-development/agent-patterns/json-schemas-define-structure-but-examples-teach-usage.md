---
id: INS-260410-1B17
domain: ai-development
topic: agent-patterns
title: JSON schemas define structure but examples teach usage
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-use
  - few-shot
  - schema-design
  - api-design
sources:
  - type: blog
    title: Introducing advanced tool use on the Claude Developer Platform
    url: 'https://www.anthropic.com/engineering/advanced-tool-use'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Schemas express what is valid; examples express what is idiomatic — and
    models need the latter to call complex tools correctly.
  standard: >-
    A JSON schema can say 'due_date is a string' but cannot tell the model
    whether to emit '2024-11-06', 'Nov 6, 2024', or '2024-11-06T00:00:00Z'. It
    can mark reporter.id as a string without explaining that your API expects
    'USR-12345' format. It cannot express that critical bugs should populate
    contact info and escalation while feature requests shouldn't. These
    conventions live in usage patterns, not type definitions.


    Anthropic's Tool Use Examples feature lets you attach 1-5 sample invocations
    directly to a tool definition. Internal testing showed accuracy on complex
    parameter handling jumping from 72% to 90%. The examples teach format
    conventions (kebab-case labels, YYYY-MM-DD dates), ID patterns, and —
    critically — correlations between optional fields.


    This echoes a broader principle from few-shot prompting: one well-chosen
    example often outperforms paragraphs of instruction. When designing tools
    for LLMs, treat the examples as first-class documentation, not
    afterthoughts. Use realistic data, vary specification density, and only add
    examples where schema leaves ambiguity.
stance: >-
  Tool call accuracy on complex APIs comes from concrete examples, not more
  elaborate schemas.
related:
  - PRI-260411-64C7
  - INS-260321-703F
  - INS-260323-DA4A
  - INS-260321-82FE
  - PRI-260406-40ED
---
A JSON schema can say 'due_date is a string' but cannot tell the model whether to emit '2024-11-06', 'Nov 6, 2024', or '2024-11-06T00:00:00Z'. It can mark reporter.id as a string without explaining that your API expects 'USR-12345' format. It cannot express that critical bugs should populate contact info and escalation while feature requests shouldn't. These conventions live in usage patterns, not type definitions.

Anthropic's Tool Use Examples feature lets you attach 1-5 sample invocations directly to a tool definition. Internal testing showed accuracy on complex parameter handling jumping from 72% to 90%. The examples teach format conventions (kebab-case labels, YYYY-MM-DD dates), ID patterns, and — critically — correlations between optional fields.

This echoes a broader principle from few-shot prompting: one well-chosen example often outperforms paragraphs of instruction. When designing tools for LLMs, treat the examples as first-class documentation, not afterthoughts. Use realistic data, vary specification density, and only add examples where schema leaves ambiguity.
