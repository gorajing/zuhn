---
id: INS-260605-3345
domain: ai-development
topic: infrastructure
title: Make VM snapshots cheap with seekable compression and lazy page restore
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - snapshot-restore
  - firecracker
  - compression
  - performance
  - cost-optimization
sources:
  - type: youtube
    title: >-
      Two Roads to Durable Agents: Replay vs. Snapshot — Eric Allam, CEO,
      Trigger.dev
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=svCnShDvgQg'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Compress snapshots seekably and decompress only the memory pages actually
    needed on restore, shrinking a 512MB VM snapshot to ~14MB and cutting
    restore to a few hundred milliseconds.
  standard: >-
    Snapshotting an entire VM naively means a 512MB machine produces a 512MB
    on-disk snapshot, incurring network-transfer and storage costs for memory
    that mostly isn't used. Trigger.dev attacked this with seekable compression:
    on restore they don't decompress all memory pages up front but capture which
    pages are needed and decompress just those on demand, plus snapshot
    layering. This drops a snapshot to roughly 14MB compressed—and the
    compression level is a tunable knob trading size against performance.


    The performance result is what makes per-turn suspension viable: snapshots
    take slightly under a second and restores a couple hundred milliseconds,
    versus the much slower CRIU path. At that speed they sustain ~15,000 VM
    starts per minute—fast enough that VM time-to-interactive could 'render a
    video' at ~30 FPS. The general principle for anyone building suspendable
    compute: the cost objection to snapshot-and-restore is an engineering
    problem, not a fundamental one—seekable compression and lazy restore turn an
    impractically large full-memory dump into a small, fast artifact you can
    move per turn.
stance: >-
  Naive full-memory VM snapshots are too expensive to be practical, but seekable
  compression plus lazy on-demand page restore makes them small and fast enough
  for per-turn agent suspension.
related:
  - INS-260325-4CBB
  - INS-260327-B539
  - INS-260410-EE37
  - INS-260605-26EC
  - INS-260522-EB3C
  - INS-260625-4D09
  - INS-260325-6150
---
Snapshotting an entire VM naively means a 512MB machine produces a 512MB on-disk snapshot, incurring network-transfer and storage costs for memory that mostly isn't used. Trigger.dev attacked this with seekable compression: on restore they don't decompress all memory pages up front but capture which pages are needed and decompress just those on demand, plus snapshot layering. This drops a snapshot to roughly 14MB compressed—and the compression level is a tunable knob trading size against performance.

The performance result is what makes per-turn suspension viable: snapshots take slightly under a second and restores a couple hundred milliseconds, versus the much slower CRIU path. At that speed they sustain ~15,000 VM starts per minute—fast enough that VM time-to-interactive could 'render a video' at ~30 FPS. The general principle for anyone building suspendable compute: the cost objection to snapshot-and-restore is an engineering problem, not a fundamental one—seekable compression and lazy restore turn an impractically large full-memory dump into a small, fast artifact you can move per turn.
