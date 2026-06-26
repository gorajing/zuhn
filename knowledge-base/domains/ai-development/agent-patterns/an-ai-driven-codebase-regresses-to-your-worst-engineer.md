---
id: INS-260625-08E5
domain: ai-development
topic: agent-patterns
title: An AI-driven codebase regresses to your worst engineer
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - code-quality
  - ai-coding
  - technical-debt
  - code-review
  - architecture
sources:
  - type: youtube
    title: >-
      Devin’s 80% Moment: Background Agents, 7x PRs, & End of Hand-Held Coding —
      Walden Yan & Cole Murray
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=0fgJPhYcbVk'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The unaudited code from your most gung-ho, least-careful AI user cements
    into the repo and becomes the pattern the agent imitates, so slop grows
    exponentially unless you actively garbage-collect it.
  standard: >-
    Cole Murray's meme from consulting AI-first teams: 'your codebase regresses
    to your worst engineer.' The engineer who is most enthusiastic about AI and
    least disciplined about auditing output ships patterns — a 20-deep if/else
    chain, twelve different date-formatting helpers — that then become the
    in-context examples the agent references, so the AI starts reproducing and
    compounding that style. Cognition's own experiment quantified the decay:
    pure vibe-coding with auto-merge and no code review stayed viable for only
    about two weeks before a trivial change (recoloring a button implemented in
    ten slightly-different places) revealed the codebase had to be trashed and
    rebuilt.


    The defenses are organizational, not just technical. First, keep human (or
    systematic) code review in the loop — 'you don't have to look at code' is
    described as generally a bad idea that will stay true for a while. Second,
    run scheduled cleanup, by humans or by systems that hunt for duplication,
    treating some duplication as tolerable but garbage-collecting it within
    bounds. Third, enforce strict, human-signed-off contracts at module
    boundaries: whatever happens inside a black box is that team's business, but
    any change to the interfaces between modules must be deliberately approved.
    The throughline is that AI removes the natural friction that used to limit
    sprawl, so discipline has to be reimposed explicitly.
stance: >-
  Without scheduled cleanup and hard module boundaries, AI coding agents amplify
  the worst patterns in a codebase because they treat existing code as the
  pattern to imitate.
related:
  - INS-260330-23CD
  - INS-260405-2688
  - INS-260514-5D9D
  - INS-260605-9523
  - INS-260605-3899
  - INS-260625-B09C
---
Cole Murray's meme from consulting AI-first teams: 'your codebase regresses to your worst engineer.' The engineer who is most enthusiastic about AI and least disciplined about auditing output ships patterns — a 20-deep if/else chain, twelve different date-formatting helpers — that then become the in-context examples the agent references, so the AI starts reproducing and compounding that style. Cognition's own experiment quantified the decay: pure vibe-coding with auto-merge and no code review stayed viable for only about two weeks before a trivial change (recoloring a button implemented in ten slightly-different places) revealed the codebase had to be trashed and rebuilt.

The defenses are organizational, not just technical. First, keep human (or systematic) code review in the loop — 'you don't have to look at code' is described as generally a bad idea that will stay true for a while. Second, run scheduled cleanup, by humans or by systems that hunt for duplication, treating some duplication as tolerable but garbage-collecting it within bounds. Third, enforce strict, human-signed-off contracts at module boundaries: whatever happens inside a black box is that team's business, but any change to the interfaces between modules must be deliberately approved. The throughline is that AI removes the natural friction that used to limit sprawl, so discipline has to be reimposed explicitly.
