# Tag: eval-design

- `INS-260410-303B` Setting container guarantee and hard limit to the same value creates zero headroom for transient memory spikes, silently OOM-killing tasks that would otherwise succeed — so evals should specify both parameters separately.
- `INS-260410-D03C` Benchmark scores increasingly drive deployment decisions, but the rigor applied to running and reporting them hasn't caught up — making resource configuration a first-class variable is the minimum bar for trustworthy agentic evals.
