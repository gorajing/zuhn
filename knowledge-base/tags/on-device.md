# Tag: on-device

- `INS-260605-2032` Google's on-device skill harness exposes only skill descriptions in the system prompt and uses a load-skill tool call to selectively pull in a skill's functions only when the model decides to use it.
- `INS-260605-1FD9` A 4B on-device model picks among ~8 skills reliably turn-by-turn ('find a fact, then show it on Maps'), but invoking multiple skills inside one answer only works sometimes.
- `INS-260605-5DE9` DeepMind built a fake Wikipedia, Reddit, and an entire OS where every page, comment, and HTML element is generated live on each click — possible only because latency is low enough to feel like a real app.
- `INS-260605-FB4D` Google's Eloquent transcription app chains a Gemma-3-based ASR engine with a separate text-polishing model — each only a few hundred million params — to ship offline transcription with a personal dictionary.
- `INS-260603-11DB` Paige Bailey (Google DevRel): Gemma 4 (2.6B and 31B variants) performs about as well as Gemini 3.1 Flash Lite on benchmarks; analyzing 5 minutes of video cost ~2 cents and ran reliably; the models run on a Jetson Nano, fully in-browser via WebGPU, and on-robot (100+ robotics companies use Gemma fine-tunes for on-robot actions).
- `INS-260605-D430` Choose on-device inference when latency, privacy, offline operation, or per-token cost dominate — not when you need maximum capability.
- `INS-260605-C760` Gemma 4 demonstrates that single-GPU and even on-device open models now run real agentic workflows — orchestrator-plus-subagents, tool-calling coding harnesses — that recently demanded clusters.
- `INS-260605-9B99` Hyperscaler voice modes run at a loss; for consumer voice apps the LLM is almost free and TTS is the bill that burns the whole fundraise — so a <100M-param CPU TTS removes per-use API cost entirely.
- `INS-260625-4027` Gemma 4 matches ~18-month-old SOTA on agentic capability (function calling, instruction-following) but Gemini stays far ahead on factual knowledge — a gap set by information theory, not training effort.
- `INS-260605-D3EB` Function Gemma (270M) went from 46% to over 90% function-calling accuracy on 8 of 10 app intents by fine-tuning on synthetic data rather than describing functions in a system prompt.
- `INS-260625-48FA` Gemma's 'effective vs active parameters' split works because per-layer embeddings are lookups, not matrix multiplies, so they can live off the GPU.
- `INS-260626-BCC7` Gemma 4's 'effective' small models gain capacity by keeping a small (256-dim) per-layer embedding table in flash memory rather than VRAM, since VRAM is the binding on-device constraint.
- `INS-260605-8F95` Once you drop to 100-200M parameters, a model needs a very narrow and focused task to function — generality is traded away for size.
