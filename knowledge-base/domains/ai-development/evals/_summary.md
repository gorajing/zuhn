# Topic: evals

> 6 insights

- `INS-260627-D28C` [high] Have the judge classify into a text label (e.g. friendly/robotic) and map that label to a score afterward, because LLMs are unreliable at producing numbers directly.
- `INS-260626-484B` [high] For scientific AI, the strongest evaluation is whether predictions survive independent measurement.
- `INS-260627-B1B2` [high] Users judge an LLM app as instant-or-broken by when the first streamed token arrives, so measure TTFT separately from throughput and total latency.
- `INS-260627-9981` [high] Treat the judge as a hallucinating component too — label a data set by hand, then run a code/match eval that measures whether the judge's labels agree with the human labels, and improve the judge where they diverge.
- `INS-260626-B04D` [medium] AgentRun evals should include effort metrics, detours, and environment revisions.
- `INS-260627-2863` [medium] A model's tendency to find spurious 'nooks and crannies' degrades judges but is exactly what optimizers harness to lift task performance.
