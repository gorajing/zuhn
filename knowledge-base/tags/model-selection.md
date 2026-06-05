# Tag: model-selection

- `INS-260605-AE67` The right agent runs on a model good enough to perform the task but not capable of arbitrary harm — bigger is not automatically better or safer.
- `INS-260605-21A5` Use a large model (e.g. GPT-5.x) for planning and long-horizon reasoning, then spawn fast models (e.g. Codex Spark) as executors to run the plan's steps.
- `INS-260605-7FEA` Match models to roles—careful reasoning for planning, fast fluency for implementation, precise instruction-following for validation—and avoid locking into one provider.
- `INS-260501-22AD` Opus 4.6 is the beer-with-you ADHD CEO with a billion ideas. Codex is the autistic CTO who debugs the impossible. Use both, in sequence.
- `INS-260605-A0BC` The old 'open models aren't as good as closed' argument no longer holds—GLM 5.1 currently tops SWE-Bench among open models and the AI Index shows open and closed converging.
- `INS-260605-1420` Viktor's users raged during an A/B test that swapped Opus for a cheaper, equally capable model — personality, not benchmarks, drove their attachment.
- `INS-260410-939B` Default to fast non-thinking models; switch to a thinking model only when you suspect the first answer is wrong on a genuinely hard math/code/logic problem.
- `INS-260410-3FB3` Before trusting an LLM on math or recent facts, check whether that specific app has wired in a Python interpreter and web search — models without them will confidently hallucinate numerically-close but wrong answers.
- `INS-260605-E4BB` Cheap models (Flash-Lite, VO Light) and low-priority service tiers exist to prototype and validate prompts inexpensively before paying for premium quality or priority latency.
- `INS-260605-A558` Optimize model cost only after a strong-model baseline proves the workflow can work.
- `INS-260320-EF3A` Don't default to expensive models — test cheaper ones with YOUR data. DeepSeek V3 vs Claude Sonnet = 21x cost reduction for identical summaries.
- `INS-260329-7F02` On the course's heart disease dataset, KNN achieved ~82% accuracy comparable to neural networks, proving that simpler models deserve first consideration.
- `INS-260605-8691` Use Gemini Flash for the sub-3-second post-game review; save reasoning models for the patient 'chat with your coach' experience.
- `INS-260605-77E5` Different leaderboards rank the same models differently and use incomparable Elo ranges, so disagreement signals which models are actually near-equivalent.
- `INS-260605-0BD6` Plot quality against latency/cost and pick from the Pareto front—often several models tie on quality while differing 20x in speed.
- `INS-260327-A22D` After weeks of dialing in AI agents on Claude, enterprises would rather pay more for tokens than invest in requalifying a different model.
