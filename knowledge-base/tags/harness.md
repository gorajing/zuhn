# Tag: harness

- `INS-260605-A28F` Invest in stable sandboxes, retry policies, and noise reduction rather than elaborate agent scaffolding, since modern models already use simple tools well.
- `INS-260525-3A9A` Walmart data scientist: 'what determines the performance is what you put in' — HIG, screenshots-to-agent for frontend, and a designer.md of references made the output good.
- `INS-260501-E377` Amjad Masad: when we released agent v2, we had to delete a lot of that code because the models got a lot better at staying consistent — autonomy is now built into the model, not the infrastructure.
- `INS-260605-0312` A harness must deterministically inspect the trace of tool calls to confirm what actually happened, because the model will claim it succeeded even when it failed.
- `INS-260605-07E5` Build a state machine with gates between agents so steps can't be skipped, instead of trusting prompt instructions the model can ignore.
- `INS-260605-C9E8` Agents must produce a PR via git, so run the same linting/architecture/dedup checks as both git hooks and CI — if an agent skips a hook to be lazy, CI catches it and links it back to the rule's document.
- `INS-260605-8C71` Sensitive, predictable steps like authentication belong in deterministic harness code that holds the secrets, not in the non-deterministic agent loop.
- `INS-260605-DB29` The instinct to 'prompt it harder' when an agent fails is usually wrong; reliability is engineered structurally through the harness surrounding the model.
- `INS-260605-8F42` The economic payoff of harness engineering is doing more with less — running cheap or free models like GPT-OSS or Qwen reliably instead of renting expensive frontier inference.
- `INS-260605-1066` Default parameters like reasoning level and caching silently drift across model versions even within a family, so calibrate your harness against a known benchmark first.
- `INS-260605-4856` Frontier models cluster within a few points on SWE-bench Pro while the harness alone swings results ~22%, so you may be measuring the harness, not the model.
