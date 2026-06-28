# Tag: edge-ai

- `INS-260626-5037` Small models hallucinate because they're memory-bound with low knowledge capacity, but tool access (web search, Python) lets them outperform reliance on baked-in knowledge — and they're naturally strong at agentic tasks.
- `INS-260605-6591` Show the agent only one-line skill descriptions and let it request full instructions on demand, rather than loading every tool's details up front.
- `INS-260605-72B5` SAM 3 is enormously capable but 800M parameters and 300ms on a T4, making it unusable for the low-power edge deployments vision has historically targeted.
- `INS-260501-CF7D` Frontier capability today shows up in tiny edge models within a year — and we don't know where the ceiling is yet.
- `INS-260605-0D8C` Roboflow uses neural architecture search with drop-in-compatible knobs on a pretrained backbone to spin out a whole family of models, hitting ~40x speedup for the same accuracy versus fine-tuning SAM 3.
- `INS-260603-11DB` Paige Bailey (Google DevRel): Gemma 4 (2.6B and 31B variants) performs about as well as Gemini 3.1 Flash Lite on benchmarks; analyzing 5 minutes of video cost ~2 cents and ran reliably; the models run on a Jetson Nano, fully in-browser via WebGPU, and on-robot (100+ robotics companies use Gemma fine-tunes for on-robot actions).
- `INS-260605-6588` 100B+ parameter and omni models now run at usable speeds on consumer Macs and iPhones, turning cloud subscriptions into a choice rather than a necessity.
- `INS-260605-D430` Choose on-device inference when latency, privacy, offline operation, or per-token cost dominate — not when you need maximum capability.
- `INS-260627-422D` Expect smaller models close to users (on-device or edge) collaborating with larger cloud models, which forces a move away from Python-and-Docker toward lower-level, hardware-close runtimes.
- `INS-260605-738E` Use a strong cloud LLM to generate low-millions-to-tens-of-millions of synthetic examples of the target behavior, then fine-tune an off-the-shelf tiny model (e.g. Gemma 270M) on that data and quantize for deployment.
- `INS-260605-4D1D` For models under ~500M parameters, fine-tune for the specific task — Google sees fine-tuning move the eval by 20-40 points, the difference between unusable and shippable.
- `INS-260626-4D5F` In tiny models the embedding layer can dominate the parameter count (63% in Gemma 3 270M), so the 'effective' reasoning parameters are far smaller than the headline size suggests.
- `INS-260605-33C0` Keep tiny models modular — one per task (e.g. separate ASR and text-polishing engines) — so weights can be reused across apps and the pipeline stays inspectable.
- `INS-260605-D0A0` Constrain tool-call decoding to the specific finite tool the model is supposed to call — the smaller the model, the larger the reliability win.
