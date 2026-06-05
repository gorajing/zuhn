# Tag: tool-calling

- `INS-260605-B13C` Run distinct evaluators at intent resolution, tool selection, and final response so you can pinpoint exactly where quality breaks down.
- `INS-260605-2032` Google's on-device skill harness exposes only skill descriptions in the system prompt and uses a load-skill tool call to selectively pull in a skill's functions only when the model decides to use it.
- `INS-260605-ACCD` Cascade speech-to-text, an LLM, and text-to-speech as separate orchestrated models, because unified speech-to-speech models can't yet follow instructions or call tools reliably enough for production.
- `INS-260605-DA2B` Target ~200–300ms time-to-first-token for the LLM, which constrains model size to roughly 8–30B parameters — bigger burns the latency budget, smaller sacrifices the intelligence and tool calling the agent needs.
- `INS-260605-D0A0` Constrain tool-call decoding to the specific finite tool the model is supposed to call — the smaller the model, the larger the reliability win.
