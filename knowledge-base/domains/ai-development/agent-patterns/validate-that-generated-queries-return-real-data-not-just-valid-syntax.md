---
id: INS-260625-CC7C
domain: ai-development
topic: agent-patterns
title: 'Validate that generated queries return real data, not just valid syntax'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - validation
  - self-verification
  - silent-failure
  - sql
  - guardrails
sources:
  - type: youtube
    title: >-
      Why Can't Anyone Answer Questions About the Business? — Garrett Galow,
      WorkOS
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=iUWwcG-C8OU'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A syntactically valid SQL query that returns zero rows is a silent failure,
    so Studio always runs queries and checks for data before hardcoding them
    into a widget.
  standard: >-
    WorkOS's third reliability pillar is validation: 'if it's going to write a
    query to our Snowflake instance, we have it always run the query and
    validate that it gets data back. Many times they can have a valid SQL query,
    but that returns zero data. If it doesn't notice that, it's not very
    useful.' Syntactic validity is the wrong success criterion — the agent must
    observe a non-empty, sensible result set before deploying. The most common
    silent failure mode they see is missing status filters: an LLM asked 'how
    many users have this resource?' writes a naive COUNT...GROUP BY and silently
    includes deleted or inactive entities. The fix is twofold: encode the
    consistency rules ('only pull non-deleted entities,' 'active status only')
    into context so the model applies them, and force the agent to self-verify
    by executing before committing. This pre-validation step is what converts a
    plausible-but-wrong query into a trustworthy one — and it directly answers
    the governance fear that a generated query becomes 'a truth that everyone
    thinks is true and no one's ever checked.' Verification criteria + a
    self-verification tool let the agent return a checked answer, not a guess
    ([[give-agents-verification-criteria-and-self-verification-tools-so-they-return-a-c]]).
stance: >-
  An agent that writes queries must execute and confirm they return non-empty,
  correctly-filtered results before its output is trusted or frozen.
related:
  - INS-260628-84C3
  - INS-260329-47DD
  - INS-260409-1E5E
  - INS-260409-2A51
  - INS-260403-FF45
---
WorkOS's third reliability pillar is validation: 'if it's going to write a query to our Snowflake instance, we have it always run the query and validate that it gets data back. Many times they can have a valid SQL query, but that returns zero data. If it doesn't notice that, it's not very useful.' Syntactic validity is the wrong success criterion — the agent must observe a non-empty, sensible result set before deploying. The most common silent failure mode they see is missing status filters: an LLM asked 'how many users have this resource?' writes a naive COUNT...GROUP BY and silently includes deleted or inactive entities. The fix is twofold: encode the consistency rules ('only pull non-deleted entities,' 'active status only') into context so the model applies them, and force the agent to self-verify by executing before committing. This pre-validation step is what converts a plausible-but-wrong query into a trustworthy one — and it directly answers the governance fear that a generated query becomes 'a truth that everyone thinks is true and no one's ever checked.' Verification criteria + a self-verification tool let the agent return a checked answer, not a guess ([[give-agents-verification-criteria-and-self-verification-tools-so-they-return-a-c]]).
