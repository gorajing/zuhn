# Tag: model-routing

- `INS-260605-F700` Start with bespoke rules to prove value, then build an automation layer that classifies task complexity and auto-selects the optimal model and chip.
- `INS-260625-35C5` Let the latest reasoning model research 80% of the task, but route the final 20%—validation, summarization, next-action—through restricted, deterministic gates that don't need a high-reasoning model and stop the infinite loop.
- `INS-260605-320E` The worst notification is 'we ran out of quota' — the harness should reroute to flash/local models and keep working.
- `INS-260619-90F6` The production agent stack is becoming a set of durable primitives around the model: routing, persistence, execution, tools, and workflow state.
- `INS-260626-A08F` Pay for one Opus/GPT-5.5 pass to produce a project's skill/taste file, then do the bulk of the building with cheap models reading that file — a pattern emerging organically in the user community.
- `INS-260619-AD94` At agent scale, model choice is a unit-economics decision: reserve frontier calls for hard reasoning and route routine steps to cheaper models and deterministic modules.
- `INS-260605-1787` You don't need GPT to zoom an image — offloading such subtasks to less intelligent models was 11x faster and 43x cheaper on those steps, driving the system's overall gains.
- `INS-260320-0511` Use cheap models (gpt-5-nano) for categorization/relevance scoring before expensive models — removes 70-90% of irrelevant inputs.
- `INS-260325-DD43` Open Router revealed that the same model from different providers at different speeds enables entirely different use cases, making deployment selection a first-class product decision.
- `INS-260625-C3B0` Flip a coin at each step to pick which model to call; the models cover each other's mistakes like pair programmers.
- `INS-260403-26D4` Smart AI companies build cost moats through hybrid retrieval layers, intelligent caching, and model routing rather than competing on raw feature parity.
- `INS-260605-8E08` Use effectively-free local models (e.g. Gemma) for cheap steps and reserve frontier models for components that actually need them.
