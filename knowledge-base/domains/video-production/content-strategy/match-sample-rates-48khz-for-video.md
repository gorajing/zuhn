---
id: INS-260320-232D
domain: video-production
topic: content-strategy
title: Match Sample Rates 48kHz Standard for Video
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - audio-sync
  - sample-rate
  - 48khz
  - video-editing
  - recording-settings
sources:
  - type: reddit
    title: '[Tutorial] All there is to know about syncing video and audio'
    author: u/unknown
related:
  - INS-260321-A6A6
  - INS-260320-77C2
  - INS-260320-10E8
  - INS-260320-D44B
  - INS-260329-2ECE
  - PRI-260326-12C6
  - INS-260325-2999
  - INS-260320-CDE4
  - INS-260326-8201
  - INS-260330-300D
date_extracted: '2026-03-20'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Set all audio devices to 48kHz when recording for video -- mismatched sample
    rates between camera and external recorder cause drift that worsens over
    longer recordings.
  standard: |
    The standard sample rate for video production audio is 48kHz (not
    44.1kHz, which is the CD/music standard). All recording devices --
    camera, external recorder, wireless mic receiver -- must be set to
    the same sample rate to prevent sync drift. When sample rates mismatch,
    audio and video gradually drift apart over time, and the problem gets
    worse the longer the recording. This is one of the most common causes
    of sync issues that cannot be fixed by simply aligning a clap at the
    start. Different FPS rates between audio and video files can cause
    similar drift. For long recordings, even matched sample rates can drift
    slightly due to clock differences between devices, so consider using
    timecode-capable equipment for takes over 30 minutes.
stance: >-
  Mismatched sample rates between recording devices cause audio drift that
  worsens over time
---

The standard sample rate for video production audio is 48kHz (not
44.1kHz, which is the CD/music standard). All recording devices --
camera, external recorder, wireless mic receiver -- must be set to
the same sample rate to prevent sync drift. When sample rates mismatch,
audio and video gradually drift apart over time, and the problem gets
worse the longer the recording. This is one of the most common causes
of sync issues that cannot be fixed by simply aligning a clap at the
start. Different FPS rates between audio and video files can cause
similar drift. For long recordings, even matched sample rates can drift
slightly due to clock differences between devices, so consider using
timecode-capable equipment for takes over 30 minutes.
