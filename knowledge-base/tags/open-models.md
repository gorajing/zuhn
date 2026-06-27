# Tag: open-models

- `INS-260626-485E` Before concluding a model is bad, instrument the harness for tool-call failures — most 'DeepSeek is slow/bad' verdicts are 50+ silently-hidden tool errors per session, a harness problem.
- `INS-260626-9AEB` Don't bounce a Zod/schema error back to an open model that ignores it for 50+ turns; deterministically repair the malformed call and append a hint, and the model self-corrects within a couple of tool calls.
- `INS-260626-763B` The talk frames open on-device models around scenarios an API cannot serve — fully offline operation (airplane, subway), data that must never leave your servers, national 'sovereign AI' language models, and regulated domains like medical, legal, and finance.
- `INS-260625-2A9E` Choose an owned open model over a stronger hosted one when control, data residency, and immunity from service loss outweigh raw capability.
- `INS-260626-6DCA` Across Gemma 1 → 2 → 3 → 4, LM Arena scores rose generation over generation without the models getting bigger, with the most capable points clustering in the 'small-and-strong' top-left corner.
- `INS-260605-C760` Gemma 4 demonstrates that single-GPU and even on-device open models now run real agentic workflows — orchestrator-plus-subagents, tool-calling coding harnesses — that recently demanded clusters.
- `INS-260605-8F42` The economic payoff of harness engineering is doing more with less — running cheap or free models like GPT-OSS or Qwen reliably instead of renting expensive frontier inference.
- `INS-260626-A08F` Pay for one Opus/GPT-5.5 pass to produce a project's skill/taste file, then do the bulk of the building with cheap models reading that file — a pattern emerging organically in the user community.
