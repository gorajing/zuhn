# Topic: evals

> 36 insights

- `INS-260628-26C6` [high] Engineer a dataset as a continuous reconciliation loop with reality; the real overfitting danger is a frozen dataset, and a human with taste — not automation — should select which user feedback enters it.
- `INS-260627-1CD2` [high] Colvin found Gemini was dramatically faster and cheaper in his eval only because it invented wrong answers that his eval wasn't checking — apparent efficiency was actually cheating.
- `INS-260628-79DC` [high] Treat scorers like a PRD for your AI app — generic scorers encode someone else's requirements, so write and keep revising your own.
- `INS-260628-3746` [high] Lean toward deterministic pass/fail scores so debugging stays tractable and teammates can actually understand and trust the results.
- `INS-260628-009E` [high] When you tinker with a prompt to appease a model you're encoding criteria you never wrote down; evals externalize "here's what I actually care about" so the spec survives a model change.
- `INS-260628-6F97` [high] Put unchanging user queries in 'data' and the things you're experimenting on — prompts, RAG, preprocessing, models — in the 'task', so you can swap variables without redoing your dataset.
- `INS-260628-A747` [high] An eval is only as good as the weakest of its three legs — the prompt, the dataset, and the scorer — so improve all three together, not just the prompt.
- `INS-260627-D28C` [high] Have the judge classify into a text label (e.g. friendly/robotic) and map that label to a score afterward, because LLMs are unreliable at producing numbers directly.
- `INS-260628-337C` [high] LLM-as-judge is a 'poor man's version' of a human judge that partially solves the dataset-creation problem, but it carries measurable biases (conciseness, helpfulness) versus humans, so you must validate it or risk drifting in a weird direction.
- `INS-260628-C95B` [high] Good evals require mapping the full domain of real user queries — including hard edge cases and boundaries — and avoiding wasted effort on out-of-bounds inputs.
- `INS-260628-0AC7` [high] A fast eval is a set of query-document pairs you measure by checking whether the right docs come back in the top-k, and it should run in seconds for pennies.
- `INS-260627-1EC5` [high] Touting that a model ran 30-60 hours autonomously says nothing about whether the code was good; autonomy metrics are meaningless unless paired with a quality and accountability metric.
- `INS-260627-DE41` [high] Treat a benchmark as a continuously-updated stream of post-cutoff problems, not a frozen set, so you can both measure and combat contamination while recalibrating difficulty as models improve.
- `INS-260627-01CF` [high] Requiring tasks and rewards up front converts an agent harness into a proper eval, replacing 'build it, try it, ship it' with measurable experimentation across models and hyperparameters.
- `INS-260628-DFA3` [high] Before you iterate your app against a judge, judge the judge — raw LLM-as-judge calls hallucinate, are uncalibrated, and flip on input order.
- `INS-260628-8649` [high] Run the full eval suite on every PR (and on a daily schedule) so you can see whether a change flips tiles from red to blue without breaking others.
- `INS-260628-F01C` [high] Braintrust ran evals every quarter for two years on frontier models' ability to improve prompts/datasets/scorers, and only built Loop once the eval said the models had crossed the threshold.
- `INS-260626-484B` [high] For scientific AI, the strongest evaluation is whether predictions survive independent measurement.
- `INS-260628-9D66` [high] FID and CLIP-style metrics penalize perceptually-invisible artifacts and reward easy-to-count attributes, so they misjudge real generative quality.
- `INS-260628-7A77` [high] Scoring 100% on a finite golden set tells you nothing about the inputs 'around the corner' that you never tested.
- `INS-260627-6F3F` [high] The most important output of the judge eval isn't pass/fail — it's the 'why did it mess up?' explanation that becomes the training signal for the next prompt.
- `INS-260628-5ACA` [high] Roughly 95% of an AI app is deterministic and unit-testable, but the crucial ~5% LLM core fails non-deterministically and requires evals.
- `INS-260627-D9CE` [high] METR converts task difficulty into the human time-to-complete at which a model succeeds 50% of the time, yielding a remarkably straight exponential trend (doubling every 6-7 months).
- `INS-260627-B1B2` [high] Users judge an LLM app as instant-or-broken by when the first streamed token arrives, so measure TTFT separately from throughput and total latency.
- `INS-260627-36DE` [high] High-benchmark models often 'suck' when plugged into a real environment, so MiniMax watches downloads and OpenRouter token usage as the truer quality signal.
- `INS-260627-B6D9` [high] Design verifiers like the whistle on a tea kettle — it signals only that the water boiled, indifferent to whether you used gas, induction, or a campfire — so test for the outcome and spirit of the task, never the incidental details of the ground-truth run.
- `INS-260627-9981` [high] Treat the judge as a hallucinating component too — label a data set by hand, then run a code/match eval that measures whether the judge's labels agree with the human labels, and improve the judge where they diverge.
- `INS-260626-B04D` [medium] AgentRun evals should include effort metrics, detours, and environment revisions.
- `INS-260628-2C38` [medium] Train a continuous classifier on labeled human preferences so the eval learns what 'good' means perceptually, instead of relying on hand-built metrics.
- `INS-260628-ECEB` [medium] For their knowledge graph, Cisco deliberately tracks extrinsic metrics that map to the customer's use case rather than intrinsic graph-quality metrics.
- `INS-260627-358F` [medium] DMP-SNN found sequence-vision tasks tolerated coarse slow-memory updates while auditory spike streams degraded much sooner.
- `INS-260627-535C` [medium] Measure skill distillation as a delta, not as an isolated pass/fail run.
- `INS-260627-068D` [medium] A pass/fail score is too thin; keep the artifacts needed to diagnose why.
- `INS-260628-1AF2` [medium] You can bootstrap a golden dataset by teaching an LLM to write queries, but only if you semantically align their specificity to real queries — naive 'write a question for this doc' produces overly-specific queries that overstate your success rate.
- `INS-260628-8DD0` [medium] Evals have been a dashboard you look at and then manually change your code/prompts; the next step is an agent that reads the eval and makes those changes itself.
- `INS-260627-2863` [medium] A model's tendency to find spurious 'nooks and crannies' degrades judges but is exactly what optimizers harness to lift task performance.
