# Tag: small-models

- `INS-260605-295D` Quality degrades as context grows, so use small models (NER, rerankers, classifiers) to preprocess and filter data before it enters the agent's context window.
- `INS-260322-8BD1` The AI industry will likely cascade like the computer industry — a few supercomputer-class god models at the top, with the real volume in smaller models deployed down to embedded systems in every physical object.
- `INS-260603-11DB` Paige Bailey (Google DevRel): Gemma 4 (2.6B and 31B variants) performs about as well as Gemini 3.1 Flash Lite on benchmarks; analyzing 5 minutes of video cost ~2 cents and ran reliably; the models run on a Jetson Nano, fully in-browser via WebGPU, and on-robot (100+ robotics companies use Gemma fine-tunes for on-robot actions).
- `INS-260605-B95C` Embedding models, rerankers, and NER models each occupy only a few GB, so dedicating a GPU to each leaves it mostly idle — hot-swap them on a shared GPU with a least-recently-used eviction policy instead.
- `INS-260605-8F42` The economic payoff of harness engineering is doing more with less — running cheap or free models like GPT-OSS or Qwen reliably instead of renting expensive frontier inference.
- `INS-260605-4788` Smaller models unlock three production gates at once — affordable cost at scale, sub-third-second latency, and ownership of data and solution.
