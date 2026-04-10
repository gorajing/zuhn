---
id: INS-260410-F910
domain: ai-development
topic: agent-patterns
title: 'Design tools for agents, not as API wrappers'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-design
  - mcp
  - agent-affordances
  - api-design
sources:
  - type: blog
    title: Writing effective tools for AI agents—using AI agents
    url: 'https://www.anthropic.com/engineering/writing-tools-for-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Tools for agents should be purpose-built around agent workflows, not
    mechanical wrappers of existing API endpoints.
  standard: >-
    Traditional APIs assume deterministic callers with abundant memory who can
    iterate through large result sets. Agents have limited context and limited
    ability to process irrelevant data token-by-token, so a list_contacts tool
    wastes context while search_contacts matches how agents actually work.


    The better design consolidates functionality: instead of list_users +
    list_events + create_event, build schedule_event that finds availability and
    books the meeting in one call. Instead of read_logs, build search_logs that
    returns only relevant lines with surrounding context. Each tool should
    represent a meaningful unit of agent work, not a low-level primitive.


    This requires rethinking software design from 'contract between
    deterministic systems' to 'contract between deterministic systems and
    non-deterministic agents.' The tools that end up most ergonomic for agents
    are often surprisingly intuitive for humans too.
stance: >-
  Thin wrappers around existing APIs make poor agent tools because agents have
  fundamentally different affordances than deterministic software.
related:
  - INS-260320-9D89
  - INS-260322-EAB6
  - INS-260321-C5AA
  - INS-260322-D8C3
  - PRI-260320-D5B7
  - PRI-260320-BC72
  - INS-260327-B9AD
  - INS-260327-13B3
  - INS-260327-63B5
  - INS-260327-D020
---
Traditional APIs assume deterministic callers with abundant memory who can iterate through large result sets. Agents have limited context and limited ability to process irrelevant data token-by-token, so a list_contacts tool wastes context while search_contacts matches how agents actually work.

The better design consolidates functionality: instead of list_users + list_events + create_event, build schedule_event that finds availability and books the meeting in one call. Instead of read_logs, build search_logs that returns only relevant lines with surrounding context. Each tool should represent a meaningful unit of agent work, not a low-level primitive.

This requires rethinking software design from 'contract between deterministic systems' to 'contract between deterministic systems and non-deterministic agents.' The tools that end up most ergonomic for agents are often surprisingly intuitive for humans too.
