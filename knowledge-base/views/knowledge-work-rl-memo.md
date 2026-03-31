# Knowledge-Work RL Environments: The Missing Benchmark for Reasoning AI

*Jin Choi | March 2026*

---

AI models are getting dramatically better at coding. SWE-bench scores climb quarterly. Companies like Mechanize build custom RL environments that expose where coding models fail. The reason coding improves so fast is simple: code has automated graders (test suites) that provide binary reward signals for reinforcement learning.

**Knowledge work has no equivalent.** Analysis, synthesis, compression, strategic reasoning, cross-domain insight detection — the tasks that enterprises actually pay for — have no standardized evaluation framework. There is no "SWE-bench for knowledge."

This gap matters because frontier AI labs are selling Claude, GPT, and Gemini to enterprises for knowledge work, not just coding. Banks want financial analysis. Consultancies want strategy synthesis. Healthcare systems want diagnostic reasoning. But the models weren't trained on graded knowledge tasks — they were trained on next-token prediction and evaluated on code benchmarks. The capability gap between coding and knowledge work will widen until someone builds the evaluation infrastructure.

**I built a prototype.** Zuhn is an open-source knowledge operating system that processes 3,000+ structured insights through a graded pipeline:

- **Level 1 — Extraction grading.** Source content in, structured insights out. Grader: Zod schema validation (domain, topic, stance, confidence, actionability — all constrained enums). Binary pass/fail. Documented failure modes: wrong enum values, fabricated product names, cross-source contamination, missing stances.

- **Level 2 — Integrity grading.** Health check across the full knowledge base. Grader: referential integrity (all related[] links resolve), deduplication (no identical insights), ID uniqueness. Binary pass/fail. Documented failure mode: batch extraction produces duplicate IDs from hash collisions.

- **Level 3 — Learning signal grading.** Automated learning mechanisms score the knowledge base for emergent patterns. Grader: Louvain community detection on embedding graphs (DISCOVER), cross-domain similarity (TRANSFER), principle-to-principle synthesis (SYNTHESIZE). Scalar reward: number of genuine cross-domain connections surfaced per extraction batch.

- **Level 4 — Compression grading.** 42 insights compressed into 5 principles. Grader: coverage (do principles reference all contributing insights?), non-redundancy (do principles overlap?), actionability (can someone make a decision from the principle alone?). Partially automated, partially requires human judgment — which is exactly where a reward model would be trained.

**The quality metrics that emerge:**

| Metric | What it measures | Current baseline |
|--------|-----------------|-----------------|
| Extraction pass rate | % of insights passing Zod on first try | ~90% |
| Insights per source | Extraction depth | 2.1 avg |
| Compression ratio | Insights per principle | ~20:1 |
| Synthesis hit rate | % of cross-domain pairs that are genuine | ~40% |
| DISCOVER clusters per batch | Emergent connections found | 8-12 per 100 insights |

These metrics are computable, trackable, and improvable through RL — the same way val_bpb improves through architecture search in Karpathy's autoresearch. The system already includes a self-improvement loop that analyzes extraction quality, identifies failure patterns, and refines prompts for the next cycle.

**Why this matters for frontier labs:**

1. **Training signal for reasoning.** Knowledge extraction, compression, and synthesis are harder than coding because they require judgment, not just correctness. A model trained on graded knowledge tasks would differentiate on the capabilities enterprises pay for.

2. **Evaluation for enterprise readiness.** "Can Claude extract 5 valid insights from a 10-K filing?" is a more relevant enterprise benchmark than "Can Claude solve a GitHub issue?" Knowledge-work benchmarks would directly predict enterprise deployment success.

3. **The reward model problem.** Level 4 (compression quality, synthesis genuineness) requires human judgment to grade — exactly the kind of judgment that reward models are trained on. A dataset of 195 human-validated compressions and synthesis judgments is training data for a knowledge-work reward model.

**What exists today:** 3,058 graded insights, 195 compressed principles, 16 documented extraction failure modes, a self-improving autonomous loop (autoknowledge.ts), and an open-source engine at github.com/gorajin/zuhn.

The infrastructure exists. The graders work. The metrics are computable. What's missing is a frontier lab that wants to win on reasoning, not just coding.

---

*This memo is a back-pocket reference for conversations about AI evaluation and capability development. Not a pitch deck — a thesis.*
