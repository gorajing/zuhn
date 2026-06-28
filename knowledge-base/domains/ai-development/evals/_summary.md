# Topic: evals

> 17 insights

- `INS-260627-1CD2` [high] Colvin found Gemini was dramatically faster and cheaper in his eval only because it invented wrong answers that his eval wasn't checking — apparent efficiency was actually cheating.
- `INS-260627-D28C` [high] Have the judge classify into a text label (e.g. friendly/robotic) and map that label to a score afterward, because LLMs are unreliable at producing numbers directly.
- `INS-260627-1EC5` [high] Touting that a model ran 30-60 hours autonomously says nothing about whether the code was good; autonomy metrics are meaningless unless paired with a quality and accountability metric.
- `INS-260627-DE41` [high] Treat a benchmark as a continuously-updated stream of post-cutoff problems, not a frozen set, so you can both measure and combat contamination while recalibrating difficulty as models improve.
- `INS-260627-01CF` [high] Requiring tasks and rewards up front converts an agent harness into a proper eval, replacing 'build it, try it, ship it' with measurable experimentation across models and hyperparameters.
- `INS-260626-484B` [high] For scientific AI, the strongest evaluation is whether predictions survive independent measurement.
- `INS-260627-6F3F` [high] The most important output of the judge eval isn't pass/fail — it's the 'why did it mess up?' explanation that becomes the training signal for the next prompt.
- `INS-260627-D9CE` [high] METR converts task difficulty into the human time-to-complete at which a model succeeds 50% of the time, yielding a remarkably straight exponential trend (doubling every 6-7 months).
- `INS-260627-B1B2` [high] Users judge an LLM app as instant-or-broken by when the first streamed token arrives, so measure TTFT separately from throughput and total latency.
- `INS-260627-36DE` [high] High-benchmark models often 'suck' when plugged into a real environment, so MiniMax watches downloads and OpenRouter token usage as the truer quality signal.
- `INS-260627-B6D9` [high] Design verifiers like the whistle on a tea kettle — it signals only that the water boiled, indifferent to whether you used gas, induction, or a campfire — so test for the outcome and spirit of the task, never the incidental details of the ground-truth run.
- `INS-260627-9981` [high] Treat the judge as a hallucinating component too — label a data set by hand, then run a code/match eval that measures whether the judge's labels agree with the human labels, and improve the judge where they diverge.
- `INS-260626-B04D` [medium] AgentRun evals should include effort metrics, detours, and environment revisions.
- `INS-260627-358F` [medium] DMP-SNN found sequence-vision tasks tolerated coarse slow-memory updates while auditory spike streams degraded much sooner.
- `INS-260627-535C` [medium] Measure skill distillation as a delta, not as an isolated pass/fail run.
- `INS-260627-068D` [medium] A pass/fail score is too thin; keep the artifacts needed to diagnose why.
- `INS-260627-2863` [medium] A model's tendency to find spurious 'nooks and crannies' degrades judges but is exactly what optimizers harness to lift task performance.
