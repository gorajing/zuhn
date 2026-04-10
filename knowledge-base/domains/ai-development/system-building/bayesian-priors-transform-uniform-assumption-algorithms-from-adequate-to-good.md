---
id: INS-260330-4267
domain: ai-development
topic: system-building
title: Bayesian priors transform uniform-assumption algorithms from adequate to good
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - bayesian
  - priors
  - word-frequency
  - sigmoid
  - modeling
  - probability
sources:
  - type: youtube
    title: Solving Wordle using information theory
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=v68zYyaEmEA'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A simple sigmoid-based prior over word frequencies improved the Wordle
    solver from 4.1 to 3.6 average — a bigger gain than algorithmic
    sophistication alone.
  standard: >-
    The Wordle solver's biggest performance jump came not from better search
    algorithms but from replacing uniform word probabilities with a sigmoid
    function applied to word frequency rankings. The approach was surprisingly
    informal — the creator 'licked his finger and stuck it into the wind' to set
    the sigmoid cutoff point. Yet this rough prior, which merely separated
    'plausible answers' from 'obscure words,' dropped the average from 4.124 to
    3.6 guesses.


    This demonstrates a general principle in AI system design: modeling your
    inputs' probability distribution matters more than optimizing your
    algorithm. A mediocre algorithm with good priors beats a sophisticated
    algorithm with bad assumptions. The entropy calculation itself changes
    meaning with non-uniform priors — 16 possible words with 12 being
    near-impossible yields only 2.11 bits of uncertainty, not 4. This is why RAG
    systems that weight source reliability outperform those that treat all
    retrieved documents equally, and why recommendation systems that incorporate
    user behavior priors dominate content-based approaches.
stance: >-
  Incorporating even rough prior probability estimates (like word frequency via
  sigmoid cutoff) produces larger performance gains than sophisticated search
  algorithms operating on uniform assumptions.
related:
  - INS-260330-77E2
  - PRI-260406-F95C
  - INS-260325-9C89
  - INS-260409-C768
  - INS-260330-8A65
  - INS-260410-34F5
evidence:
  - id: INS-260330-8A65
    type: CHALLENGES
    classified_at: '2026-04-02'
---
The Wordle solver's biggest performance jump came not from better search algorithms but from replacing uniform word probabilities with a sigmoid function applied to word frequency rankings. The approach was surprisingly informal — the creator 'licked his finger and stuck it into the wind' to set the sigmoid cutoff point. Yet this rough prior, which merely separated 'plausible answers' from 'obscure words,' dropped the average from 4.124 to 3.6 guesses.

This demonstrates a general principle in AI system design: modeling your inputs' probability distribution matters more than optimizing your algorithm. A mediocre algorithm with good priors beats a sophisticated algorithm with bad assumptions. The entropy calculation itself changes meaning with non-uniform priors — 16 possible words with 12 being near-impossible yields only 2.11 bits of uncertainty, not 4. This is why RAG systems that weight source reliability outperform those that treat all retrieved documents equally, and why recommendation systems that incorporate user behavior priors dominate content-based approaches.
