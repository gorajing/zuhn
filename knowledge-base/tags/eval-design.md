# Tag: eval-design

- `INS-260625-A99C` An automated metric operates on the model alone and can only see fluency and personality; it cannot see the archive, so it cannot judge fidelity to it.
- `INS-260625-0148` Treat model, tools, context, environment, and feedback as explicit evaluation variables.
- `INS-260626-F694` Open user prompts give breadth no condensed benchmark can match, a 'both bad' vote captures absolute (not just relative) quality, and the benchmark never saturates because there's always a better possible answer.
- `INS-260627-6FE0` Don't let eval-building block you — ship something scrappy, start with a binary good/bad gate, then decompose into granular continuous criteria as you learn what 'good' means.
- `INS-260625-76E9` Monitoring benchmarks should disclose and vary waiting primitives because they change measured reliability.
- `INS-260625-14F9` Separate context discovery from patch generation when diagnosing coding-agent reliability.
- `INS-260625-722D` Raw judge agreement is a weak certificate unless chance and bias are accounted for.
- `INS-260627-6984` Before building a router, measure the all-models-wrong rate and certify whether any selector has enough headroom to matter.
- `INS-260627-9C1F` If production is open-ended, do not trust a multiple-choice eval to reveal shared model failure.
- `INS-260627-FFCB` Do not price multi-model orchestration from pairwise correlation; directly estimate the all-wrong tail.
- `INS-260627-DE41` Treat a benchmark as a continuously-updated stream of post-cutoff problems, not a frozen set, so you can both measure and combat contamination while recalibrating difficulty as models improve.
- `INS-260410-303B` Setting container guarantee and hard limit to the same value creates zero headroom for transient memory spikes, silently OOM-killing tasks that would otherwise succeed — so evals should specify both parameters separately.
- `INS-260410-D03C` Benchmark scores increasingly drive deployment decisions, but the rigor applied to running and reporting them hasn't caught up — making resource configuration a first-class variable is the minimum bar for trustworthy agentic evals.
- `INS-260627-DB17` Treat oracle routing gain as an upper bound, not as evidence that a deployable router can capture the gain.
