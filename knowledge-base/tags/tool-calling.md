# Tag: tool-calling

- `INS-260626-485E` Before concluding a model is bad, instrument the harness for tool-call failures — most 'DeepSeek is slow/bad' verdicts are 50+ silently-hidden tool errors per session, a harness problem.
- `INS-260605-B13C` Run distinct evaluators at intent resolution, tool selection, and final response so you can pinpoint exactly where quality breaks down.
- `INS-260626-9AEB` Don't bounce a Zod/schema error back to an open model that ignores it for 50+ turns; deterministically repair the malformed call and append a hint, and the model self-corrects within a couple of tool calls.
- `INS-260605-1A2D` Teams fight for 10–20ms in TTS while tool calls cost 500ms–4s and are unpredictable; split the LLM so it speaks naturally during the wait, then inserts the result back into the conversation.
- `INS-260624-B6EA` Independent agent tool calls should run concurrently even if the model emits them sequentially.
- `INS-260625-2D05` Exposing 2,600 API endpoints to an agent as generated-and-executed code costs ~1,000 tokens; exposing them as individual MCP tool definitions would be vastly more.
- `INS-260605-2032` Google's on-device skill harness exposes only skill descriptions in the system prompt and uses a load-skill tool call to selectively pull in a skill's functions only when the model decides to use it.
- `INS-260605-2E27` Because the wrapped chat agent already handles the majority of tool calling on the backend, the voice layer can proxy to it and inherit every integration without touching tool-calling complexity.
- `INS-260605-FC00` Let the model choose the next action; let code execute it.
- `INS-260605-295D` Quality degrades as context grows, so use small models (NER, rerankers, classifiers) to preprocess and filter data before it enters the agent's context window.
- `INS-260605-ACCD` Cascade speech-to-text, an LLM, and text-to-speech as separate orchestrated models, because unified speech-to-speech models can't yet follow instructions or call tools reliably enough for production.
- `INS-260605-DA2B` Target ~200–300ms time-to-first-token for the LLM, which constrains model size to roughly 8–30B parameters — bigger burns the latency budget, smaller sacrifices the intelligence and tool calling the agent needs.
- `INS-260605-7CEB` Viktor's 2023 browser agent was state-of-the-art on Web Arena yet unusable as a product because ~60% per-step reliability compounded over 3-5 steps into frequent failure.
- `INS-260626-FC7A` AI SDK 7 turns per-tool context, approval policies, HMAC-bound approval replay, and timeouts into explicit runtime controls.
- `INS-260605-D0A0` Constrain tool-call decoding to the specific finite tool the model is supposed to call — the smaller the model, the larger the reliability win.
