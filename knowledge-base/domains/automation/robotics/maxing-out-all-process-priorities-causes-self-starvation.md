---
id: INS-260628-9322
domain: automation
topic: robotics
title: Maxing out all process priorities causes self-starvation
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - robotics
  - real-time
  - priority-inversion
  - kernel
  - scheduling
sources:
  - type: youtube
    title: "Rishabh Garg, Tesla Optimus —\_Challenges in High Performance Robotics Systems"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=bCGbuyv8PMk'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If you boost your user process so high it blocks the kernel, you block the
    very thing that feeds you data — fix priorities per pipeline stage, not
    uniformly.
  standard: >-
    In robotics there is a temptation to crank every process to the highest
    priority to guarantee real-time behavior. But data does not arrive directly:
    an interrupt fires, the kernel handles it, and only then does the user
    process receive the data. If you boost the user process so aggressively that
    it starves the kernel, the kernel can't run — so the data you are
    frantically waiting for never gets delivered. You are blocking the exact
    mechanism you depend on, and the system can drop out for seconds at a time.


    The resolution is to understand the full receive pipeline and assign
    priorities per stage rather than uniformly maxing everything out. The kernel
    paths that feed your control loop need enough priority to actually run;
    making your consumer infinitely greedy is counterproductive.


    This is a clean instance of the general scheduling hazard of priority
    inversion: a high-priority task waiting on a resource held (or serviced) by
    a lower-priority task it has itself starved. The fix is always structural
    awareness of dependencies — 'make the whole system work together' — not
    blunt prioritization of the component you happen to care about most.
stance: >-
  Boosting every process to maximum priority causes priority inversion that
  starves the kernel delivering your data, slowing the system rather than
  speeding it.
related:
  - INS-260329-90F4
  - INS-260330-AC7F
  - INS-260409-FE00
  - INS-260410-8243
  - INS-260605-8F3D
  - INS-260624-6B2C
  - INS-260627-BEEB
  - INS-260627-63F2
  - INS-260329-4696
---
In robotics there is a temptation to crank every process to the highest priority to guarantee real-time behavior. But data does not arrive directly: an interrupt fires, the kernel handles it, and only then does the user process receive the data. If you boost the user process so aggressively that it starves the kernel, the kernel can't run — so the data you are frantically waiting for never gets delivered. You are blocking the exact mechanism you depend on, and the system can drop out for seconds at a time.

The resolution is to understand the full receive pipeline and assign priorities per stage rather than uniformly maxing everything out. The kernel paths that feed your control loop need enough priority to actually run; making your consumer infinitely greedy is counterproductive.

This is a clean instance of the general scheduling hazard of priority inversion: a high-priority task waiting on a resource held (or serviced) by a lower-priority task it has itself starved. The fix is always structural awareness of dependencies — 'make the whole system work together' — not blunt prioritization of the component you happen to care about most.
