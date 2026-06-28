# Tag: frontier-models

- `INS-260628-33E6` Build ambitious evals for features that don't work on today's models and keep model-swapping a few keystrokes away, so each new release is an immediate go/no-go on shipping.
- `INS-260627-0D20` Clever agent scaffolding was invented to cope with weak models; frontier models now bulldoze it, so capability beats scaffolding and you should stop overthinking the harness.
- `INS-260409-DD69` Hassabis pegs the open-source lag at ~6 months behind frontier — the reimplementation time — with DeepMind's Gemma line pushing best-in-class at small sizes for edge/startup/academic use.
- `INS-260327-6061` Giving someone unlimited GPUs and money is insufficient to produce a frontier model; the expertise to orchestrate training across tens of thousands of randomly-failing GPUs is the actual scarce resource.
- `INS-260403-C709` Claude Opus 4.6's adaptive effort — dynamically adjusting reasoning depth by task difficulty — represents a fundamental shift from uniform computation to intelligent resource allocation.
- `INS-260628-A39E` Per Braintrust's quarterly evals, models were 'not very good' at improving prompts/datasets/scorers until Claude 4, which performed ~6x better than the prior leading model — a step change, not a gradual ramp.
- `INS-260628-F01C` Braintrust ran evals every quarter for two years on frontier models' ability to improve prompts/datasets/scorers, and only built Loop once the eval said the models had crossed the threshold.
- `INS-260605-EBEB` Large system prompts and elaborate if-else logic overload frontier models into sensory overload, so prune aggressively and get out of the model's way.
- `INS-260605-58DA` Reasoning-trace models still respond if you send traces in the wrong format, but performance degrades invisibly, so test each frontier API's exact contract.
- `INS-260410-EA51` Systematic sweeps show ~1-2% per-problem success rates; the impressive headlines come from cherry-picking the wins from massive parallel attempts.
- `INS-260626-6A9F` LLMs excel only at data-rich tasks like search and coding; the trillions of dollars of value in the rest of the economy sits in tens of thousands of data-poor domains, so data efficiency is the real frontier.
- `INS-260626-C412` Fine-tuning locks you to a model that the next frontier release makes obsolete; a harness that sits on top inherits every future model's gains for free.
- `INS-260626-D8AE` ElevenLabs built a frontier audio model on a fraction of the capital because audio models are smaller, were a niche with few researchers, and the bottleneck was solvable (transcription/annotation) rather than raw compute.
