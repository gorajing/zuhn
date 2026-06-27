---
id: INS-260627-D692
domain: ai-development
topic: system-building
title: >-
  Ship production-ready blueprint repos so teams build business logic, not
  infrastructure
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - blueprints
  - developer-experience
  - templates
  - standardization
  - cicd
  - observability
sources:
  - type: youtube
    title: >-
      One Registry to Rule them All - Sonny Merla, Mauro Luchetti, & Mattia
      Redaelli, Quantyca
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VXfRt_H-V08'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Provide template GitHub repos with Docker, auth, cost tracking, and
    observability already wired in so developers start from production-ready
    scaffolding and only write the agent's actual value.
  standard: >-
    Amplifon maintains two template repositories — one for MCP servers, one for
    A2A agents — that teams fork to start a project. The blueprints ship with
    boilerplate already solved: Dockerfiles, package management, a FastAPI
    server (so every service exposes itself the same way), authentication, cost
    tracking, and an integration to an observability tool (Langfuse) for tracing
    and evaluation. Developers inherit the hard, repetitive infrastructure and
    spend their effort on the business logic that differentiates the use case.


    This is governance-through-defaults rather than governance-through-review.
    By making the compliant, instrumented path also the easiest path (just clone
    the template), the organization gets standardization without policing every
    repo. The blueprints also close the loop with the registry: on deploy, CICD
    auto-publishes the agent card / server.json to the catalog, so registration
    is a side effect of using the standard pipeline rather than a manual chore.
    The principle for platform teams: encode your standards into runnable
    scaffolding, because adoption follows the path of least resistance.
stance: >-
  Giving teams template repositories with built-in Docker, auth, cost tracking,
  and observability lets them focus on agent business logic instead of
  re-solving infrastructure, while keeping the org standardized.
related:
  - INS-260605-E706
  - INS-260626-7A54
  - INS-260501-3502
  - INS-260626-35A9
  - INS-260625-EF29
  - INS-260626-48F7
---
Amplifon maintains two template repositories — one for MCP servers, one for A2A agents — that teams fork to start a project. The blueprints ship with boilerplate already solved: Dockerfiles, package management, a FastAPI server (so every service exposes itself the same way), authentication, cost tracking, and an integration to an observability tool (Langfuse) for tracing and evaluation. Developers inherit the hard, repetitive infrastructure and spend their effort on the business logic that differentiates the use case.

This is governance-through-defaults rather than governance-through-review. By making the compliant, instrumented path also the easiest path (just clone the template), the organization gets standardization without policing every repo. The blueprints also close the loop with the registry: on deploy, CICD auto-publishes the agent card / server.json to the catalog, so registration is a side effect of using the standard pipeline rather than a manual chore. The principle for platform teams: encode your standards into runnable scaffolding, because adoption follows the path of least resistance.
