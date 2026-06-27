---
id: INS-260514-9D51
domain: ai-development
topic: prompting
title: >-
  Visual-feedback iteration beats text-feedback iteration — upload edited slides
  instead of describing changes
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - visual-feedback
  - iteration-patterns
  - multimodal-prompting
  - design-feedback
  - convergence-speed
sources:
  - type: youtube
    title: '오늘, 클로드가 PPT를 죽였습니다.'
    author: 페이퍼로지
    url: 'https://youtu.be/aITV54CLc_U'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Upload an edited version of the AI's output ('here's how page 2 should look
    — fix the prompt') instead of describing changes in text. Visual feedback
    compresses hundreds of design decisions into one image.
  standard: >-
    Iteration pattern from the Korean PPT tutorial: when refining a slide
    template, the creator manually edited the model's output in PowerPoint
    (moved subtitle up 20 spaces, swapped logo and page number positions, etc.)
    and then uploaded BOTH the original AI version and the edited version with
    the instruction: 'You did page 1, I fixed page 2 — please update the prompt
    to produce slides like the fixed page.' The model converged on the desired
    style within 2-3 iterations. Why this beats text feedback: design decisions
    are high-dimensional. Describing 'subtitle 20 spaces up, main text 10 spaces
    up, logo and page number swapped, font weight slightly lighter, color
    shifted toward blue, spacing tighter' in text is (a) tedious to write, (b)
    interpretively ambiguous, and (c) misses tacit design judgments the human
    made unconsciously. Showing the desired result via the edited image
    transmits all of these decisions in one shot — the model can compare the two
    images and infer the rules. The general principle: multimodal feedback
    (image + image + text instructions) beats text-only feedback for any
    high-dimensional artifact. The same applies to code (show diff
    before/after), writing (show before/after rewrite), and product (show
    wireframes vs final mock). The corollary: invest in the ability to manually
    edit AI outputs cheaply, because manual edits become high-bandwidth
    feedback. If editing is painful, the iteration loop slows.
stance: >-
  When iterating on AI-generated visual artifacts (slides, designs, layouts),
  uploading an edited version of the model's output as 'this is what page 2
  should look like, fix the prompt to produce this consistently' produces faster
  and more accurate convergence than text-based feedback ('move the subtitle up,
  increase padding, decrease font size') — visual references compress hundreds
  of bits of design feedback into a single image the model can directly compare
  against.
related:
  - INS-260323-D631
  - INS-260329-DFD1
  - INS-260330-B784
  - INS-260514-5389
  - INS-260329-FEBA
  - INS-260627-41C2
---
Iteration pattern from the Korean PPT tutorial: when refining a slide template, the creator manually edited the model's output in PowerPoint (moved subtitle up 20 spaces, swapped logo and page number positions, etc.) and then uploaded BOTH the original AI version and the edited version with the instruction: 'You did page 1, I fixed page 2 — please update the prompt to produce slides like the fixed page.' The model converged on the desired style within 2-3 iterations. Why this beats text feedback: design decisions are high-dimensional. Describing 'subtitle 20 spaces up, main text 10 spaces up, logo and page number swapped, font weight slightly lighter, color shifted toward blue, spacing tighter' in text is (a) tedious to write, (b) interpretively ambiguous, and (c) misses tacit design judgments the human made unconsciously. Showing the desired result via the edited image transmits all of these decisions in one shot — the model can compare the two images and infer the rules. The general principle: multimodal feedback (image + image + text instructions) beats text-only feedback for any high-dimensional artifact. The same applies to code (show diff before/after), writing (show before/after rewrite), and product (show wireframes vs final mock). The corollary: invest in the ability to manually edit AI outputs cheaply, because manual edits become high-bandwidth feedback. If editing is painful, the iteration loop slows.
