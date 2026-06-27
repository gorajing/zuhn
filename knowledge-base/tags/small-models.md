# Tag: small-models

- `INS-260626-5037` Small models hallucinate because they're memory-bound with low knowledge capacity, but tool access (web search, Python) lets them outperform reliance on baked-in knowledge — and they're naturally strong at agentic tasks.
- `INS-260625-5184` Qwen-3 8B running as an RLM beat Opus and GPT-5 on the Long-CoT benchmark because the hard part is sustaining a long reasoning thread, which recursion solves.
- `INS-260322-8BD1` The AI industry will likely cascade like the computer industry — a few supercomputer-class god models at the top, with the real volume in smaller models deployed down to embedded systems in every physical object.
- `INS-260605-295D` Quality degrades as context grows, so use small models (NER, rerankers, classifiers) to preprocess and filter data before it enters the agent's context window.
- `INS-260625-2E48` A 4B model trained with RL roughly doubled pass@1 over a 235B model on FinQA tool use, in a 21-hour job costing under $500 per run, and runs fully self-contained on-premise with no external dependencies.
- `INS-260603-11DB` Paige Bailey (Google DevRel): Gemma 4 (2.6B and 31B variants) performs about as well as Gemini 3.1 Flash Lite on benchmarks; analyzing 5 minutes of video cost ~2 cents and ran reliably; the models run on a Jetson Nano, fully in-browser via WebGPU, and on-robot (100+ robotics companies use Gemma fine-tunes for on-robot actions).
- `INS-260605-B95C` Embedding models, rerankers, and NER models each occupy only a few GB, so dedicating a GPU to each leaves it mostly idle — hot-swap them on a shared GPU with a least-recently-used eviction policy instead.
- `INS-260625-4027` Gemma 4 matches ~18-month-old SOTA on agentic capability (function calling, instruction-following) but Gemini stays far ahead on factual knowledge — a gap set by information theory, not training effort.
- `INS-260605-8F42` The economic payoff of harness engineering is doing more with less — running cheap or free models like GPT-OSS or Qwen reliably instead of renting expensive frontier inference.
- `INS-260626-5A6D` Frontier models handle long-running complex tasks, but mini/nano models are deliberately positioned to power short-running sub-agents at low enough cost that spinning up many of them in parallel makes economic sense.
- `INS-260605-1787` You don't need GPT to zoom an image — offloading such subtasks to less intelligent models was 11x faster and 43x cheaper on those steps, driving the system's overall gains.
- `INS-260626-FBB1` A flyweight model with code execution drew correct Lego-brick bounding boxes 'right out of the gate' for a fraction of a penny — faster and cheaper than the larger model that reached the same answer.
- `INS-260605-4788` Smaller models unlock three production gates at once — affordable cost at scale, sub-third-second latency, and ownership of data and solution.
- `INS-260626-21EA` Because small models have low knowledge capacity, the winning strategy is to make them very good at specific tasks (e.g. data extraction, tool use) and accept being weak at code or math nobody uses them for.
- `INS-260626-4D5F` In tiny models the embedding layer can dominate the parameter count (63% in Gemma 3 270M), so the 'effective' reasoning parameters are far smaller than the headline size suggests.
- `INS-260626-8E45` Liquid pre-trained a 350M model on 28 trillion tokens — orders of magnitude past Chinchilla compute-optimal — and performance was still climbing, suggesting under-trained rather than over-trained.
- `INS-260625-407C` Default to the smallest model that clears the task's quality bar, because frontier intelligence is overkill — and far more expensive — for summarization, refactoring, and structured agentic work.
