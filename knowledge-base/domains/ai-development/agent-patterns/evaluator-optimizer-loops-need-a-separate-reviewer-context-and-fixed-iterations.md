---
id: INS-260626-AC00
domain: ai-development
topic: agent-patterns
title: >-
  Evaluator-optimizer loops need a separate reviewer context and fixed
  iterations for subjective work
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluator-optimizer
  - self-critique
  - llm-bias
  - structured-output
  - creative-generation
sources:
  - type: youtube
    title: >-
      Full Workshop: Build Your Own Deep Research Agents - Louis-François
      Bouchard, Paul Iusztin, Samridhi
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=mYSRn6PC1mc'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Run the reviewer in a completely separate context window from the writer to
    break the LLM's bias toward its own text, have it emit structured (Pydantic)
    critiques with prioritized rules, and cap the loop at a fixed number of
    iterations rather than chasing a noisy score threshold.
  standard: >-
    The writing system's most powerful component is an evaluator-optimizer loop
    made of two LLM calls with two different context windows: a writer drafts,
    and a reviewer in a completely fresh context critiques it. The separate
    context is the whole point — LLMs are biased toward liking what they already
    wrote, and putting the review in a new window removes that bias. The
    reviewer checks the draft against the guideline (user intent), the research
    (to remove hallucinations), and the style profiles, then the editor (usually
    the writer itself, now holding the critique plus original context) applies
    the edits, looping three or four times.


    Two design refinements make it reliable. First, the reviewer is constrained
    to output a list of structured Pydantic objects (e.g. profile-violated,
    location, comment), where each field's description doubles as prompt
    engineering that tells the model exactly what to put there — this proved
    more performant than free-form critique. Second, reviews are not created
    equal, so they are prioritized: guideline first, then research, then
    profiles, which lets the editor resolve conflicting critiques on the same
    sentence deterministically.


    The counterintuitive call is the stopping condition. The textbook
    evaluator-optimizer loops until a reviewer score clears a threshold, but for
    subjective creative work that threshold is nearly impossible to quantify and
    the loop becomes noisy and unreliable. They found it simpler and better to
    run a fixed number of iterations, keep every intermediate version in the
    working directory, and let the human pick the version they like — and rerun
    manually if they want more. The pattern generalizes far beyond LinkedIn
    posts to reports, transcripts, and detailed lessons.
stance: >-
  An evaluator-optimizer loop only removes self-bias if the reviewer runs in a
  fresh context window, and for subjective creative output a fixed iteration
  count beats looping to a score threshold.
related:
  - INS-260411-8034
  - INS-260605-C536
  - INS-260605-4597
  - INS-260603-73D5
  - INS-260628-D947
  - PRI-260411-14DC
---
The writing system's most powerful component is an evaluator-optimizer loop made of two LLM calls with two different context windows: a writer drafts, and a reviewer in a completely fresh context critiques it. The separate context is the whole point — LLMs are biased toward liking what they already wrote, and putting the review in a new window removes that bias. The reviewer checks the draft against the guideline (user intent), the research (to remove hallucinations), and the style profiles, then the editor (usually the writer itself, now holding the critique plus original context) applies the edits, looping three or four times.

Two design refinements make it reliable. First, the reviewer is constrained to output a list of structured Pydantic objects (e.g. profile-violated, location, comment), where each field's description doubles as prompt engineering that tells the model exactly what to put there — this proved more performant than free-form critique. Second, reviews are not created equal, so they are prioritized: guideline first, then research, then profiles, which lets the editor resolve conflicting critiques on the same sentence deterministically.

The counterintuitive call is the stopping condition. The textbook evaluator-optimizer loops until a reviewer score clears a threshold, but for subjective creative work that threshold is nearly impossible to quantify and the loop becomes noisy and unreliable. They found it simpler and better to run a fixed number of iterations, keep every intermediate version in the working directory, and let the human pick the version they like — and rerun manually if they want more. The pattern generalizes far beyond LinkedIn posts to reports, transcripts, and detailed lessons.
