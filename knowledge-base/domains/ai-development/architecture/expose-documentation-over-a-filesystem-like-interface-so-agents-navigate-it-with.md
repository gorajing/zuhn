---
id: INS-260605-4B12
domain: ai-development
topic: architecture
title: >-
  Expose documentation over a filesystem-like interface so agents navigate it
  with familiar tools
actionability: inspiration
confidence: low
shelf_life: evergreen
status: active
tags:
  - documentation
  - retrieval
  - ssh
  - agent-ergonomics
  - semantic-search
sources:
  - type: youtube
    title: >-
      Combine Skills and MCP to Close the Context Gap — Pedro Rodrigues,
      Supabase
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JT3OzDKrucU'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents are fluent with Linux file navigation, so exposing your docs as a
    remote filesystem (e.g. over SSH) may beat hoping they fetch the right URL.
  standard: >-
    Because agents are reluctant and expensive to send to the web, Supabase is
    experimenting with exposing their documentation through SSH so agents can
    browse docs as if they were a local filesystem, using the bash/Linux
    navigation tools they already know well. The premise is that meeting the
    agent where its competence already lies — file navigation — yields more
    reliable retrieval than naive web fetching, which agents skip in favor of
    stale training data.


    Pedro frames this as an early, unsettled experiment, hence low confidence.
    He also sketches the next step: augmenting the filesystem interface with
    semantic search (over embeddings) so the agent isn't naively walking a
    directory tree but can query for relevant docs. The broader pattern worth
    extracting is matching the retrieval interface to the agent's existing tool
    fluency rather than inventing a bespoke mechanism the agent will under-use.
stance: >-
  Serving docs through a filesystem-style interface like SSH lets agents
  retrieve them more reliably than ad hoc web fetching.
related:
  - INS-260409-156A
  - INS-260501-01A5
  - INS-260605-1A50
  - INS-260625-1E07
  - INS-260403-7D7A
---
Because agents are reluctant and expensive to send to the web, Supabase is experimenting with exposing their documentation through SSH so agents can browse docs as if they were a local filesystem, using the bash/Linux navigation tools they already know well. The premise is that meeting the agent where its competence already lies — file navigation — yields more reliable retrieval than naive web fetching, which agents skip in favor of stale training data.

Pedro frames this as an early, unsettled experiment, hence low confidence. He also sketches the next step: augmenting the filesystem interface with semantic search (over embeddings) so the agent isn't naively walking a directory tree but can query for relevant docs. The broader pattern worth extracting is matching the retrieval interface to the agent's existing tool fluency rather than inventing a bespoke mechanism the agent will under-use.
