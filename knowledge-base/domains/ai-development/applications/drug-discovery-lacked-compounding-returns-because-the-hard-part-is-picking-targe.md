---
id: INS-260410-1AF0
domain: ai-development
topic: applications
title: >-
  Drug discovery lacked compounding returns because the hard part is picking
  targets, not making molecules
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - drug-discovery
  - foundation-models
  - scaling-laws
  - virtual-cells
  - eroom-law
  - biotech
sources:
  - type: youtube
    title: Evolution designed us to die fast; we can change that — Jacob Kimmel
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=XCLODgdCmKA'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Getting better at making antibodies to gene X doesn't help you treat disease
    Y because the bottleneck is knowing what gene to target — which is why
    compounding returns in biotech require a perturbation-prediction model that
    generalizes across cell states.
  standard: >-
    Eroom's Law — the consistent decrease in new drugs approved per billion
    dollars invested since the 1950s — is structurally similar to ML scaling
    laws but has driven investors in the opposite direction. Kimmel argues this
    gap exists because biotech historically lacks two things that make LLM
    scaling economically self-sustaining: (1) returns to scaled output don't
    increase super-exponentially (each marginal drug doesn't enable a broader
    addressable market the way a more capable model does), and (2) success on
    one target doesn't transfer to the next, because the expertise biotech
    accumulates is in the 'how to make a molecule' layer — but the actual
    bottleneck sits above that, in target selection.


    If you locked ten top drug developers in a room and asked them to write
    high-conviction target-disease pairs where 'we know the biology, we just
    can't drug it,' the list fits on one page. The real uncertainty is what gene
    to modulate in the first place, which currently has no compounding solution
    — you can be the world's best antibody engineer and still have no idea what
    to make an antibody against for the next disease.


    The virtual cell thesis (Perturb-seq at scale, combined with models that
    predict how TF perturbations move cells through state space) is an attempt
    to install the missing compounding layer. It's structurally identical to LLM
    training: imitation learning first (predict how any perturbation changes any
    cell's transcriptome — pretraining) then task-specific optimization (select
    perturbations that move cells toward target states — RL/RLHF). This gives
    each experiment dual-use value: it both trains the foundation model and
    directly screens for useful combinations. If virtual cells reach their GPT-3
    equivalent, the biotech layer stack should bifurcate the way the AI stack
    did — foundation cell-model companies leasing prediction to
    application-layer biotechs who pick specific indications — rather than each
    biotech vertically building its own model.
stance: >-
  The scaling law that made LLMs compound came from having a general-purpose
  representation trainable across tasks; biotech can break Eroom's Law only by
  building virtual-cell foundation models where every perturbation experiment
  improves the next drug-discovery bet.
related:
  - INS-260325-9F5F
  - PRI-260325-3A00
  - INS-260408-8F0A
  - INS-260410-53B0
  - INS-260404-B6E8
  - INS-260410-8C08
  - INS-260410-69C2
  - INS-260410-9D16
  - INS-260410-CEAA
---
Eroom's Law — the consistent decrease in new drugs approved per billion dollars invested since the 1950s — is structurally similar to ML scaling laws but has driven investors in the opposite direction. Kimmel argues this gap exists because biotech historically lacks two things that make LLM scaling economically self-sustaining: (1) returns to scaled output don't increase super-exponentially (each marginal drug doesn't enable a broader addressable market the way a more capable model does), and (2) success on one target doesn't transfer to the next, because the expertise biotech accumulates is in the 'how to make a molecule' layer — but the actual bottleneck sits above that, in target selection.

If you locked ten top drug developers in a room and asked them to write high-conviction target-disease pairs where 'we know the biology, we just can't drug it,' the list fits on one page. The real uncertainty is what gene to modulate in the first place, which currently has no compounding solution — you can be the world's best antibody engineer and still have no idea what to make an antibody against for the next disease.

The virtual cell thesis (Perturb-seq at scale, combined with models that predict how TF perturbations move cells through state space) is an attempt to install the missing compounding layer. It's structurally identical to LLM training: imitation learning first (predict how any perturbation changes any cell's transcriptome — pretraining) then task-specific optimization (select perturbations that move cells toward target states — RL/RLHF). This gives each experiment dual-use value: it both trains the foundation model and directly screens for useful combinations. If virtual cells reach their GPT-3 equivalent, the biotech layer stack should bifurcate the way the AI stack did — foundation cell-model companies leasing prediction to application-layer biotechs who pick specific indications — rather than each biotech vertically building its own model.
