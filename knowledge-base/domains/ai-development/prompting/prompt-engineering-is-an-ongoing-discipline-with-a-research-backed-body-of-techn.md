---
id: INS-260405-880C
domain: ai-development
topic: prompting
title: >-
  Prompt engineering is an ongoing discipline with a research-backed body of
  techniques, not a set of one-time tips
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompting
  - prompt-engineering
  - llms
  - best-practices
sources:
  - type: blog
    title: Best GitHub Repos for AI Builders in 2025
    author:
      - '@type': Person
        name: Ruben Dominguez
        url: 'https://substack.com/@rubendominguez'
        description: 'Investing, building, writing '
        identifier: 'user:95342670'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!mcL6!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3403a50f-4e67-40d2-aa6f-a8d845f19c1c_480x480.png
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!mcL6!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3403a50f-4e67-40d2-aa6f-a8d845f19c1c_480x480.png
    url: 'https://www.thevccorner.com/p/best-github-repos-ai-2025'
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: false
embedded: false
resolutions:
  one_line: >-
    Prompt engineering has an accumulating body of research-backed techniques
    that reward systematic study over ad-hoc experimentation.
  standard: >-
    Most practitioners learn prompting by trial and error—trying different
    phrasings until something works. This is slow, inconsistent, and doesn't
    transfer well across tasks. The alternative is treating prompt engineering
    as a discipline with documented techniques: chain-of-thought, few-shot
    exemplars, self-consistency, role prompting, output formatting constraints,
    and others that have been validated empirically.


    Repositories like DAIR.AI's prompt engineering guide aggregate this research
    into practical references, making it possible to approach a new prompting
    challenge with a menu of applicable techniques rather than starting from
    scratch. This is the difference between intuition and method.


    The shelf-life concern is real: specific techniques may lose effectiveness
    as models improve. But the meta-skill of understanding why techniques
    work—exploiting the model's training distribution, reducing ambiguity,
    providing calibration examples—transfers across model generations.
stance: >-
  Treating prompt engineering as a bag of tricks leads to inconsistent results;
  developers who study it as a structured discipline with curated research and
  reusable patterns get systematically better LLM outputs.
---
Most practitioners learn prompting by trial and error—trying different phrasings until something works. This is slow, inconsistent, and doesn't transfer well across tasks. The alternative is treating prompt engineering as a discipline with documented techniques: chain-of-thought, few-shot exemplars, self-consistency, role prompting, output formatting constraints, and others that have been validated empirically.

Repositories like DAIR.AI's prompt engineering guide aggregate this research into practical references, making it possible to approach a new prompting challenge with a menu of applicable techniques rather than starting from scratch. This is the difference between intuition and method.

The shelf-life concern is real: specific techniques may lose effectiveness as models improve. But the meta-skill of understanding why techniques work—exploiting the model's training distribution, reducing ambiguity, providing calibration examples—transfers across model generations.
