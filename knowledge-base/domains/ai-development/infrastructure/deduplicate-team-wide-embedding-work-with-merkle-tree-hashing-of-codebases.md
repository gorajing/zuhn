---
id: INS-260625-89B3
domain: ai-development
topic: infrastructure
title: Deduplicate team-wide embedding work with Merkle-tree hashing of codebases
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - embeddings
  - merkle-tree
  - deduplication
  - indexing-pipeline
  - cost-optimization
  - cursor
sources:
  - type: youtube
    title: 'RAG is dead, right?? — Kuba Rogut, Turbopuffer'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=UM6sFg_jdlE'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because a 100-engineer team mostly opens the same few codebases, Cursor uses
    Merkle (crypto hash) trees to detect near-identical indexes, copies the
    shared embedding data, and only re-chunks/re-embeds the changed files.
  standard: >-
    Re-chunking, re-embedding, and re-uploading an entire codebase every time
    someone opens it is enormously wasteful when 99% of a team is working on the
    same one or two repos. Cursor's optimization, described in their 2026
    indexing blog post, is to compute a Merkle tree — a tree of cryptographic
    hashes — over each codebase so it can cheaply measure how similar two
    people's checkouts are. When two are similar enough, it copies the existing
    embedding data wholesale and only re-chunks and re-embeds the files that
    differ, using Turbopuffer to keep this sharing secure across users. This is
    the implementation detail that makes 'embeddings as cached compute'
    economically viable at team scale: the cache is shared, not per-user, so the
    marginal cost of a new developer opening a known repo collapses to the diff.
    The transferable principle for anyone building an indexing pipeline over
    shared, mostly-static corpora: hash for structural similarity, copy on
    match, and re-embed only the delta.
stance: >-
  You should dedupe embedding pipelines across a team by hashing codebases into
  Merkle trees and only re-chunking and re-embedding the files that actually
  changed.
related:
  - INS-260329-BE35
  - INS-260329-2612
  - INS-260403-F519
  - INS-260404-F0C3
  - INS-260625-E696
  - INS-260625-EF29
  - INS-260514-C1B3
  - INS-260626-BDAB
  - INS-260626-3396
  - INS-260625-20D7
---
Re-chunking, re-embedding, and re-uploading an entire codebase every time someone opens it is enormously wasteful when 99% of a team is working on the same one or two repos. Cursor's optimization, described in their 2026 indexing blog post, is to compute a Merkle tree — a tree of cryptographic hashes — over each codebase so it can cheaply measure how similar two people's checkouts are. When two are similar enough, it copies the existing embedding data wholesale and only re-chunks and re-embeds the files that differ, using Turbopuffer to keep this sharing secure across users. This is the implementation detail that makes 'embeddings as cached compute' economically viable at team scale: the cache is shared, not per-user, so the marginal cost of a new developer opening a known repo collapses to the diff. The transferable principle for anyone building an indexing pipeline over shared, mostly-static corpora: hash for structural similarity, copy on match, and re-embed only the delta.
