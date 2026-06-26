---
id: INS-260501-7A59
domain: ai-development
topic: ai-capabilities
title: >-
  Claude Design's video generation is the weak link — multi-modal capability is
  uneven across modalities
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - multi-modal-jaggedness
  - video-generation
  - claude-design
  - capability-uneven
sources:
  - type: youtube
    title: 'Claude Design: Full Walkthrough. I''m blown away.'
    author: Greg Isenberg
    url: 'https://youtu.be/vyLaimDeK_g'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Claude Design wireframing = 9/10. Pitch decks = 8/10. Hi-fi = 8/10. Video =
    5/10. The weakest modality sets the ceiling for video-heavy workflows.
  standard: >-
    Isenberg's modality-by-modality assessment after a 1-hour live walkthrough:
    wireframing is genuinely best-in-class, pitch deck generation is
    unbelievable, hi-fi visual designs are really good, video generation is a
    5/10. This is Karpathy's 'jagged intelligence' diagnosis applied within a
    single product — capability is uneven across modalities even when the same
    model architecture is being used, because the training data, RL
    environments, and specialization investments are uneven.


    The operational implication: for any video-heavy workflow (animated ads,
    social media reels, marketing video), Claude Design today is not the right
    tool. Wait for the next model generation, or use a video-specialist tool
    (Runway, Sora, etc.) and combine output with Claude Design for static
    assets. For builders making multi-modal AI products: assess each modality's
    capability separately and gate features behind a quality bar; don't ship a
    5/10 video feature alongside a 9/10 wireframe feature because users judge
    the product by the worst feature they tried.


    For Zuhn editorially: this generalizes — when evaluating any AI tool, ask
    'what's the weakest modality in my workflow?' That sets your real ceiling.
    Marketing claims about overall capability are misleading; specific-modality
    assessments are what matters.
stance: >-
  Even within a single product (Claude Design), capability is jagged across
  output modalities — wireframing is best-in-class, pitch decks and hi-fi are
  surprisingly good, but video generation sits at 5/10, showing that frontier
  capability arrives unevenly across modalities and a tool's overall quality is
  set by its weakest modality for video-heavy workflows.
related:
  - INS-260409-0F19
  - PRI-260326-12C6
  - INS-260403-2054
  - INS-260625-2DA2
  - INS-260330-F7B2
---
Isenberg's modality-by-modality assessment after a 1-hour live walkthrough: wireframing is genuinely best-in-class, pitch deck generation is unbelievable, hi-fi visual designs are really good, video generation is a 5/10. This is Karpathy's 'jagged intelligence' diagnosis applied within a single product — capability is uneven across modalities even when the same model architecture is being used, because the training data, RL environments, and specialization investments are uneven.

The operational implication: for any video-heavy workflow (animated ads, social media reels, marketing video), Claude Design today is not the right tool. Wait for the next model generation, or use a video-specialist tool (Runway, Sora, etc.) and combine output with Claude Design for static assets. For builders making multi-modal AI products: assess each modality's capability separately and gate features behind a quality bar; don't ship a 5/10 video feature alongside a 9/10 wireframe feature because users judge the product by the worst feature they tried.

For Zuhn editorially: this generalizes — when evaluating any AI tool, ask 'what's the weakest modality in my workflow?' That sets your real ceiling. Marketing claims about overall capability are misleading; specific-modality assessments are what matters.
