---
id: INS-260605-EF3C
domain: ai-development
topic: system-building
title: Ship a curated baseline agent and fan it out for reproducible onboarding
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - onboarding
  - standardization
  - mcp-servers
  - team-tooling
  - agents
sources:
  - type: youtube
    title: >-
      Lobster Trap: OpenClaw in Containers from Local to K8s and Back — Sally
      Ann O'Malley, Red Hat
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=F1DYkY1BlfM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A company-curated baseline agent — approved MCP servers, sanctioned auth,
    team-specific skills, shared drive access — fanned out to every new hire
    turns agent onboarding into a reproducible, governed default.
  standard: >-
    The proposed workplace pattern is a 'nice curated baseline' agent that ships
    with the company-approved MCP server list, authentication approved through
    the company, team-specific skills, and access to shared resources like
    Google Drive. A new hire receives this base image and personalizes it,
    rather than the failure mode of sitting next to someone, copying a repo, and
    assembling a working setup by hand.


    Mounting a whole agent directory of tools, skills, and MCP servers into the
    container means everything is up and running at startup, which is what makes
    the fan-out mechanically trivial. The value proposition is team standards,
    portable environments, and reproducible onboarding — the same governance
    benefits organizations already expect from golden machine images, now
    applied to the agent layer. It also gives security and compliance a single
    sanctioned surface to approve instead of policing ad-hoc individual setups.
stance: >-
  Companies should distribute a standardized baseline agent configuration that
  employees personalize, rather than having each person assemble one.
related:
  - INS-260327-63B5
  - INS-260409-F0F5
  - INS-260514-A15D
  - INS-260514-316F
  - INS-260605-0C56
  - PRI-260406-1F5E
  - INS-260404-8E0D
  - INS-260605-2DD5
---
The proposed workplace pattern is a 'nice curated baseline' agent that ships with the company-approved MCP server list, authentication approved through the company, team-specific skills, and access to shared resources like Google Drive. A new hire receives this base image and personalizes it, rather than the failure mode of sitting next to someone, copying a repo, and assembling a working setup by hand.

Mounting a whole agent directory of tools, skills, and MCP servers into the container means everything is up and running at startup, which is what makes the fan-out mechanically trivial. The value proposition is team standards, portable environments, and reproducible onboarding — the same governance benefits organizations already expect from golden machine images, now applied to the agent layer. It also gives security and compliance a single sanctioned surface to approve instead of policing ad-hoc individual setups.
