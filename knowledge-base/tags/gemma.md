# Tag: gemma

- `INS-260626-BAE9` Gemma 4 moved to an Apache 2.0 license specifically to make the models accessible to everyday developers across initial testing, deployment, and building, paired with both self-host (Hugging Face, Kaggle, Ollama) and cloud (AI Studio, Vertex) paths.
- `INS-260409-DD69` Hassabis pegs the open-source lag at ~6 months behind frontier — the reimplementation time — with DeepMind's Gemma line pushing best-in-class at small sizes for edge/startup/academic use.
- `INS-260501-CF7D` Frontier capability today shows up in tiny edge models within a year — and we don't know where the ceiling is yet.
- `INS-260626-6DCA` Across Gemma 1 → 2 → 3 → 4, LM Arena scores rose generation over generation without the models getting bigger, with the most capable points clustering in the 'small-and-strong' top-left corner.
- `INS-260603-11DB` Paige Bailey (Google DevRel): Gemma 4 (2.6B and 31B variants) performs about as well as Gemini 3.1 Flash Lite on benchmarks; analyzing 5 minutes of video cost ~2 cents and ran reliably; the models run on a Jetson Nano, fully in-browser via WebGPU, and on-robot (100+ robotics companies use Gemma fine-tunes for on-robot actions).
- `INS-260605-C760` Gemma 4 demonstrates that single-GPU and even on-device open models now run real agentic workflows — orchestrator-plus-subagents, tool-calling coding harnesses — that recently demanded clusters.
- `INS-260626-1012` Gemma 4 interleaves cheap local (sliding-window) attention with expensive global attention at a 5:1 ratio, then applies heavier grouped-query compression (8 queries per KV head) only to the costly global layers while compensating with longer KV heads.
- `INS-260626-BB8B` Gemma's per-layer-embedding 'E2B' architecture loads only ~2B of a ~4-5B-parameter model into the GPU and pushes the rest to CPU or disk because those weights act as lookup tables, not matrix-multiplication operands.
- `INS-260626-3E1C` Gemma 4's first MoE has 128 experts with only 8 activated per forward pass plus one always-on shared expert (3x the size of a regular expert), letting the 26B model run on just 3.8B active parameters.
- `INS-260625-48FA` Gemma's 'effective vs active parameters' split works because per-layer embeddings are lookups, not matrix multiplies, so they can live off the GPU.
- `INS-260626-BCC7` Gemma 4's 'effective' small models gain capacity by keeping a small (256-dim) per-layer embedding table in flash memory rather than VRAM, since VRAM is the binding on-device constraint.
- `INS-260626-66DC` Gemma 4 replaces Gemma 3's fixed pan-and-scan tiling with variable aspect ratios and five selectable resolutions, so developers allocate a high image-token budget for OCR/object detection and a low one for text-heavy tasks.
