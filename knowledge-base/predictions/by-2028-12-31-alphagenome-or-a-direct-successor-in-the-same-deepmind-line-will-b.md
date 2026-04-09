---
id: PRED-260409-50FA
derived_from:
  - INS-260408-8F0A
claim: >-
  By 2028-12-31, AlphaGenome (or a direct successor in the same DeepMind line)
  will be credited as the source of mutation identification in at least one
  publicly-announced CRISPR-based clinical trial or treatment plan from a major
  research institution, demonstrating the model has crossed the 'accurate
  enough' threshold Hassabis flagged as the current bottleneck.
falsifiable_metric: >-
  By 2028-12-31, search PubMed, ClinicalTrials.gov, DeepMind/Google
  research-blog announcements, and frontier-lab press releases for the
  conjunction 'AlphaGenome' + 'CRISPR' + ('clinical trial' OR 'treatment').
  Confirmed if any major research institution (top-50 by NIH funding, or any
  frontier-lab medical division) has publicly named AlphaGenome as the
  mutation-identification source for an active or planned clinical intervention.
  Falsified if no such credit appears, OR if AlphaGenome-class models are used
  only at research-only stage with no clinical translation by the deadline.
deadline: '2028-12-31'
status: active
date_created: '2026-04-09'
tags:
  - alphagenome
  - crispr
  - gene-therapy
  - clinical-trials
  - medical-ai
  - deepmind
  - non-coding-dna
  - multigenic-disease
---
Derived from Hassabis interview with Cleo Abram (the Hardest Problem AI Ever Solved, 2026). Hassabis explicitly framed AlphaGenome as the 'missing layer' between CRISPR's editing capability and actual cures for genetic diseases. He noted current AlphaGenome 'isn't accurate enough yet' but said the multigenic case (cascading mutations across the 98% non-coding genome) is exactly where AI should win because humans can't trace those interactions.

The prediction operationalizes this trajectory: if AlphaGenome continues improving on something like the AlphaFold cadence (initial release → CASP-winning version within ~3 years), it should reach clinical-relevance accuracy within roughly the same window and pair with CRISPR for at least one publicly-announced trial by end of 2028.

Falsification readings:
- (a) The model didn't improve as fast as the AlphaFold pattern suggests — speed of capability scaling overstated
- (b) Institutional/regulatory friction is the actual bottleneck, not model accuracy — implication: capability is necessary but not sufficient
- (c) The multigenic-disease angle was overstated — AlphaGenome useful for research but doesn't clinically translate by 2028

This is a high-information prediction because all three failure modes are diagnostically distinct. A confirmation collapses to 'AlphaFold-style trajectory replicates in genomics'; each falsification tells you a specific thing about which assumption broke.
