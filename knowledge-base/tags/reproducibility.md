# Tag: reproducibility

- `INS-260410-43E4` GPT-2 124M — a 2019 OpenAI release that took significant engineering effort at the time — can now be reproduced to equivalent quality on rented cloud GPUs for ~$10 in under an hour.
- `INS-260605-6066` A competing lab beat a published benchmark mainly by enabling its own API's compaction feature — same task, different config, much better-looking number.
- `INS-260605-1066` Default parameters like reasoning level and caching silently drift across model versions even within a family, so calibrate your harness against a known benchmark first.
- `INS-260505-D545` Docker bundles are bit-for-bit reproducible but unreadable. Text specs that AI can re-execute are reproducible AND comprehensible.
- `INS-260410-D03C` Benchmark scores increasingly drive deployment decisions, but the rigor applied to running and reporting them hasn't caught up — making resource configuration a first-class variable is the minimum bar for trustworthy agentic evals.
- `INS-260409-3FDE` Contributor gizmax reproduced MemPalace's 96.6% LongMemEval R@5 on M2 Ultra in under 5 minutes using the public benchmark scripts — that reproduction is exactly what forced the retraction of the other overclaims by making ground truth reviewable.
