---
id: INS-260628-D947
domain: ai-development
topic: code-review
title: >-
  Code review is for mental alignment — plans become the review artifact as AI
  ships most of the code
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - code-review
  - mental-alignment
  - team-coordination
  - plans
  - sdlc
  - future-of-work
sources:
  - type: youtube
    title: "No Vibes Allowed: Solving Hard Problems in Complex Codebases –\_Dex Horthy, HumanLayer"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=rmvDxxNubIg'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Review exists mainly to keep everyone on the same page about how the system
    is evolving; reviewing AI-authored plans (plus the prompts and test steps)
    preserves that alignment when reviewing every line becomes impractical.
  standard: >-
    Horthy argues code review's most important function is not catching bugs but
    mental alignment — keeping the whole team on the same page about how the
    codebase is changing and why. As a technical leader he can't realistically
    read a thousand lines of Go a week, but he can read the plans, catch
    problems early, and maintain understanding of how the system is evolving.
    When you ship two-to-three times more code, the diff stops being a
    reviewable artifact and the plan takes its place.


    He points to Mitchell Hashimoto's practice of attaching the full agent
    thread to a pull request: instead of a wall of green text, the reviewer sees
    the exact steps, the prompts used, and confirmation that the build was run
    and passed. This 'takes the reviewer on a journey' that a bare GitHub diff
    cannot. The burden shifts to the author to show how the work was done and
    how it was tested manually, precisely because the volume makes line-by-line
    review infeasible.


    The forward-looking stake is organizational: as 99% of code becomes
    AI-generated, the hard problem is adapting the team, workflow, and SDLC —
    not the coding agent, which Horthy expects to be commoditized. He flags a
    growing rift where staff engineers reject AI (small speedup), juniors
    over-rely on it (filling skill gaps but producing slop), and seniors burn
    out cleaning up that slop. His prescription — cultural change must come from
    the top, pick one tool, get reps, don't minmax across tools — is a
    medium-confidence organizational claim rather than a proven technique, which
    is why it carries less certainty than the workflow mechanics.
stance: >-
  The primary purpose of review is keeping the team aligned on how and why the
  codebase is changing, so when AI writes most of the code, the plan (not the
  diff) is what should be reviewed.
related:
  - INS-260320-6CCE
  - INS-260323-53BF
  - INS-260403-3705
  - INS-260403-E09E
  - INS-260410-CD15
  - INS-260410-B501
  - INS-260514-08E3
  - INS-260605-20CB
  - INS-260605-A557
  - INS-260625-EDA3
---
Horthy argues code review's most important function is not catching bugs but mental alignment — keeping the whole team on the same page about how the codebase is changing and why. As a technical leader he can't realistically read a thousand lines of Go a week, but he can read the plans, catch problems early, and maintain understanding of how the system is evolving. When you ship two-to-three times more code, the diff stops being a reviewable artifact and the plan takes its place.

He points to Mitchell Hashimoto's practice of attaching the full agent thread to a pull request: instead of a wall of green text, the reviewer sees the exact steps, the prompts used, and confirmation that the build was run and passed. This 'takes the reviewer on a journey' that a bare GitHub diff cannot. The burden shifts to the author to show how the work was done and how it was tested manually, precisely because the volume makes line-by-line review infeasible.

The forward-looking stake is organizational: as 99% of code becomes AI-generated, the hard problem is adapting the team, workflow, and SDLC — not the coding agent, which Horthy expects to be commoditized. He flags a growing rift where staff engineers reject AI (small speedup), juniors over-rely on it (filling skill gaps but producing slop), and seniors burn out cleaning up that slop. His prescription — cultural change must come from the top, pick one tool, get reps, don't minmax across tools — is a medium-confidence organizational claim rather than a proven technique, which is why it carries less certainty than the workflow mechanics.
