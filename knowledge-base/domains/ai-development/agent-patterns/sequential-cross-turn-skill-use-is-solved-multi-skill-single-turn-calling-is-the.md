---
id: INS-260605-1FD9
domain: ai-development
topic: agent-patterns
title: >-
  Sequential cross-turn skill use is solved; multi-skill single-turn calling is
  the frontier
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - agent-skills
  - multi-tool
  - limitations
  - on-device
  - orchestration
sources:
  - type: youtube
    title: >-
      From 46% to 90%: Fine-Tuning Tiny LLMs for On-Device Agents — Cormac
      Brick, Google
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=-TiET_K-E_g'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A 4B on-device model picks among ~8 skills reliably turn-by-turn ('find a
    fact, then show it on Maps'), but invoking multiple skills inside one answer
    only works sometimes.
  standard: >-
    Brick draws a sharp line between two capabilities. Sequential skill use
    across a conversation — skill, then skill, then skill, each in its own turn
    — works robustly even on a 4B model choosing among eight enabled skills.
    What remains hard is a single user interaction requiring the app to call
    multiple skills as part of one answer; that works only sometimes and is
    still being figured out.


    This is a useful boundary marker for anyone designing on-device agent UX
    today: structure interactions so each step maps to one skill and lean on the
    multi-turn conversation, rather than expecting atomic multi-skill
    orchestration. The claim is time-sensitive — the harness is described as
    deliberately simple and the model only weeks old, so the frontier is
    expected to move quickly.
stance: >-
  On-device agents reliably chain skills across conversation turns but cannot
  yet robustly invoke multiple skills within a single response.
related:
  - INS-260410-3FB3
  - INS-260410-87B5
  - INS-260605-2032
  - INS-260327-79E8
  - INS-260320-F8FD
---
Brick draws a sharp line between two capabilities. Sequential skill use across a conversation — skill, then skill, then skill, each in its own turn — works robustly even on a 4B model choosing among eight enabled skills. What remains hard is a single user interaction requiring the app to call multiple skills as part of one answer; that works only sometimes and is still being figured out.

This is a useful boundary marker for anyone designing on-device agent UX today: structure interactions so each step maps to one skill and lean on the multi-turn conversation, rather than expecting atomic multi-skill orchestration. The claim is time-sensitive — the harness is described as deliberately simple and the model only weeks old, so the frontier is expected to move quickly.
