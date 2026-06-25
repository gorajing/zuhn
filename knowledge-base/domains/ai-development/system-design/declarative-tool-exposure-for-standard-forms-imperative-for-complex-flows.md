---
id: INS-260625-BBB1
domain: ai-development
topic: system-design
title: 'Declarative tool exposure for standard forms, imperative for complex flows'
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - webmcp
  - api-design
  - json-schema
  - tool-descriptions
  - forms
sources:
  - type: youtube
    title: >-
      The agent-ready web: Simplify user actions with WebMCP — Tara Agyemang,
      Google
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ghJmWQCIHRM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Add attributes to an HTML form and the browser auto-generates the JSON
    schema; for complex multi-step UI, manually register custom tools with
    hand-written schemas and execute blocks.
  standard: >-
    WebMCP offers two implementation paths matched to interface complexity. The
    declarative API is for standard form elements: you add a tool name and
    description as HTML attributes and the browser automatically generates a
    JSON schema using the form fields as parameters. Extra attributes — such as
    a boolean marking whether a form was filled by an agent versus a human —
    ride along for free. This is the low-effort path when your interaction is
    already a conventional form.


    The imperative API handles everything else, and Agyemang notes it is the
    more commonly used of the two because real apps have complex, multi-step
    flows. You call a register-tool function with an object specifying the name,
    a deliberately descriptive description (so the agent knows when to invoke
    it), a manually authored schema, and an execute block of ordinary JavaScript
    — often a light wrapper over functions you already have. The execute block
    validates input, mutates the DOM, and returns a structured result the agent
    reads to plan its next step. The design lesson generalizes: tool quality
    hinges on description clarity, and you should reach for declarative
    generation when structure is conventional and drop to imperative control
    only when the flow demands it.
stance: >-
  Standard form elements should expose tools declaratively while multi-step UI
  flows require imperatively registered custom tools.
related:
  - INS-260409-96B0
  - INS-260410-4F43
  - INS-260605-6134
  - PRI-260406-788D
  - INS-260410-85AD
---
WebMCP offers two implementation paths matched to interface complexity. The declarative API is for standard form elements: you add a tool name and description as HTML attributes and the browser automatically generates a JSON schema using the form fields as parameters. Extra attributes — such as a boolean marking whether a form was filled by an agent versus a human — ride along for free. This is the low-effort path when your interaction is already a conventional form.

The imperative API handles everything else, and Agyemang notes it is the more commonly used of the two because real apps have complex, multi-step flows. You call a register-tool function with an object specifying the name, a deliberately descriptive description (so the agent knows when to invoke it), a manually authored schema, and an execute block of ordinary JavaScript — often a light wrapper over functions you already have. The execute block validates input, mutates the DOM, and returns a structured result the agent reads to plan its next step. The design lesson generalizes: tool quality hinges on description clarity, and you should reach for declarative generation when structure is conventional and drop to imperative control only when the flow demands it.
