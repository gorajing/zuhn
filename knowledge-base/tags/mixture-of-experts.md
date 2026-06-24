# Tag: mixture-of-experts

- `INS-260327-EE5B` Dean envisions models with heterogeneous expert sizes, dynamic parameter expansion/compaction, and 100-1000x variation in compute per path, mimicking biological brain efficiency.
- `INS-260403-2138` DeepSeek R1's 671B parameter model uses sparse architecture so full-size reasoning doesn't require activating all parameters.
- `INS-260403-B16E` DeepSeek's MoE architecture activates only relevant neurons per task, slashing compute costs while maintaining competitive performance.
- `INS-260410-3271` Jeff Dean envisions a single 'organic blob' model where 100 teams independently train specialized modules (Southeast Asian languages, Haskell reasoning, medical imaging) that attach to a base, with continuous distillation cycling between big exploration and small efficient serving.

- `INS-260330-0A8D` One unified MoE model beats 256 separate models — complexity grows quadratically with per-pair but linearly with unified
