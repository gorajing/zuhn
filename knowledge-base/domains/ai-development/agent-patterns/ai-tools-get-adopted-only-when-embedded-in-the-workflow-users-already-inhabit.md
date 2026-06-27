---
id: INS-260627-F5A8
domain: ai-development
topic: agent-patterns
title: AI tools get adopted only when embedded in the workflow users already inhabit
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-adoption
  - workflow-integration
  - mcp
  - developer-tools
  - internal-tools
sources:
  - type: youtube
    title: 'Your Support Team Should Ship Code – Lisa Orr, Zapier'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=RmJ4rTLV_x4'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Embed AI tools into the user's existing workflow rather than asking them to
    visit a separate destination.
  standard: >-
    Zapier built a web playground ('autocode') exposing a suite of LLM-backed
    diagnosis and codegen APIs and asked engineers to come try them. Adoption
    was near-zero: it was 'just one more window to go to,' and the team's value
    proposition (saving engineers from crawling docs and logs for context) was
    undercut by forcing them to leave their IDE to use it. The one tool that
    took off — a context-gathering 'diagnosis' API — only did so after support
    asked to embed it directly into the Zap that already creates their Jira
    tickets. The general lesson Orr draws explicitly: 'embedding tools is the
    key to usage.' MCP later generalized this by letting the same APIs surface
    inside engineers' Cursor sessions, so builders left the IDE less and stayed
    in one window.


    The actionable rule for anyone shipping internal AI tooling: a tool's
    adoption is gated less by its capability than by its placement. A
    70%-as-good tool inside the existing flow beats a 95% tool behind one extra
    click. Measure adoption friction in 'number of new windows/contexts the user
    must enter,' and treat any non-zero count as a red flag. Protocols like MCP
    matter precisely because they make embedding-into-existing-surfaces (IDE,
    ticketing flow) the default rather than a custom integration effort.
stance: >-
  Standalone AI tool playgrounds fail to gain adoption; embedding the same tool
  into the workflow users already live in is the decisive driver of usage.
related:
  - INS-260423-72D0
  - INS-260501-B933
  - INS-260624-5ACA
  - INS-260626-7F55
  - INS-260627-718B
  - INS-260402-543E
  - INS-260605-988D
---
Zapier built a web playground ('autocode') exposing a suite of LLM-backed diagnosis and codegen APIs and asked engineers to come try them. Adoption was near-zero: it was 'just one more window to go to,' and the team's value proposition (saving engineers from crawling docs and logs for context) was undercut by forcing them to leave their IDE to use it. The one tool that took off — a context-gathering 'diagnosis' API — only did so after support asked to embed it directly into the Zap that already creates their Jira tickets. The general lesson Orr draws explicitly: 'embedding tools is the key to usage.' MCP later generalized this by letting the same APIs surface inside engineers' Cursor sessions, so builders left the IDE less and stayed in one window.

The actionable rule for anyone shipping internal AI tooling: a tool's adoption is gated less by its capability than by its placement. A 70%-as-good tool inside the existing flow beats a 95% tool behind one extra click. Measure adoption friction in 'number of new windows/contexts the user must enter,' and treat any non-zero count as a red flag. Protocols like MCP matter precisely because they make embedding-into-existing-surfaces (IDE, ticketing flow) the default rather than a custom integration effort.
