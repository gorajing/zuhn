---
id: INS-260627-68FC
domain: ai-development
topic: mcp
title: 'MCP resources, not just tools, are how you teach an agent a workflow'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - mcp
  - progressive-disclosure
  - onboarding
  - agent-instructions
sources:
  - type: youtube
    title: >-
      Backlog.md: Terminal Kanban Board for Managing Tasks with AI Agents — Alex
      Gavrilescu, Funstage
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zMXKhhwiCIc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use MCP resources to ship the workflow guides (overview → create → execute →
    complete) that instruct an agent how to use your tools, not only the tools.
  standard: >-
    Backlog.md's MCP server exposes both tools (search tasks, view, create,
    update) and resources, and the author calls the resources the most important
    part. The resources are a layered set of instructional guides: a workflow
    overview that explains what backlog is and what it's for, which then points
    to a task-creation guide (required vs optional fields), a task-execution
    guide (move to in-progress, self-assign), and a completion guide (check
    every acceptance criterion against the definition of done).


    This is progressive disclosure applied to agent onboarding. The agent
    behaves like a developer freshly onboarded to the project: before doing
    anything it reads what backlog is and how to create tasks correctly, then
    acts. Many MCP integrations ship only callable tools and assume the model
    will infer the right sequence; this one ships the operating manual as
    resources so the agent learns the workflow, not just the API surface. The
    tools are the verbs; the resources are the playbook that tells the agent
    which verb to use when.
stance: >-
  Exposing workflow instructions as progressively-disclosed MCP resources is
  what makes an agent use a tool correctly — more than the action-tools
  themselves.
related:
  - INS-260320-C65B
  - INS-260423-72D0
  - INS-260605-988D
  - INS-260605-46B2
  - INS-260627-718B
  - INS-260627-F5A8
  - INS-260626-2F2E
---
Backlog.md's MCP server exposes both tools (search tasks, view, create, update) and resources, and the author calls the resources the most important part. The resources are a layered set of instructional guides: a workflow overview that explains what backlog is and what it's for, which then points to a task-creation guide (required vs optional fields), a task-execution guide (move to in-progress, self-assign), and a completion guide (check every acceptance criterion against the definition of done).

This is progressive disclosure applied to agent onboarding. The agent behaves like a developer freshly onboarded to the project: before doing anything it reads what backlog is and how to create tasks correctly, then acts. Many MCP integrations ship only callable tools and assume the model will infer the right sequence; this one ships the operating manual as resources so the agent learns the workflow, not just the API surface. The tools are the verbs; the resources are the playbook that tells the agent which verb to use when.
