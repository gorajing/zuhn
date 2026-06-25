# Topic: hardware

> 29 insights

- `INS-260410-4696` [high] An H100 is worth more today than three years ago because the models it runs generate far more value per token than GPT-4 did, and you can't just buy a Rubin instead.
- `INS-260605-4835` [high] MLX deliberately runs on the GPU rather than the Neural Engine because reaching the Neural Engine requires Core ML, whose private-API friction makes it impractical for developers today.
- `INS-260412-8396` [high] ARM's reduced instruction set approach, initially dismissed as underpowered, became decisive when desktop CPUs hit power and thermal limits that simpler architectures inherently avoid.
- `INS-260410-AA40` [high] Matrix multiplication (N³ compute, N² data) is the perfect shape for hardware where arithmetic is cheap and data movement is expensive, so deep learning was destined to win once TPUs filled the chip with arithmetic units.
- `INS-260410-101D` [high] China adds a France-or-UK-sized power grid every year; their strategic bet on cheap abundant electricity positions them to deploy more AI than anyone once the model matters less than how many you can run.
- `INS-260412-3FF0` [high] A 2013 smartphone chip performed 28 billion calculations per second — 72 million times more than ENIAC, which filled an entire room in 1946.
- `INS-260410-E6E8` [high] Nadella identifies the Majorana 1 achievement as dual — both physics existence proof AND a repeatable fabrication technique — and treats the fabrication half as the precondition for everything that follows.
- `INS-260423-6172` [high] Chamath: training is systems work with different traffic patterns; inference is north-south with separate prefill/decode, and SRAM-heavy designs that don't make sense for training crush at decode.
- `INS-260605-86BE` [high] Training is compute-bound, but single-user local inference is dominated by memory bandwidth, memory capacity, and energy-per-byte — so pick hardware on those axes, not FLOPS.
- `INS-260605-C873` [high] Optimize kernels for memory movement, not flops, because a modern GPU spends most of its time idle waiting on tensors to arrive from slow memory.
- `INS-260410-3C37` [high] Flash Attention does MORE floating-point operations than vanilla attention yet runs 7.6x faster, because it avoids materializing the T×T attention matrix in HBM.
- `INS-260605-D430` [high] Choose on-device inference when latency, privacy, offline operation, or per-token cost dominate — not when you need maximum capability.
- `INS-260605-C760` [high] Gemma 4 demonstrates that single-GPU and even on-device open models now run real agentic workflows — orchestrator-plus-subagents, tool-calling coding harnesses — that recently demanded clusters.
- `INS-260605-048B` [high] Diffusion's speedup exists because GPUs/TPUs are memory-bound: generating 256 tokens in 24 passes means ~10x fewer weight/KV-cache streams than 256 autoregressive passes.
- `INS-260410-CB70` [high] LLM training is memory-bandwidth-bound: modern AI requires treating an entire data center as one computer with ultra-fast interconnects and 2.5D-stacked memory adjacent to compute.
- `INS-260412-3CF8` [high] Below ~5nm, electrons tunnel through transistor gates, making classical binary switching unreliable.
- `INS-260410-7C07` [high] Drill past GPUs, past power plants, past turbines, and you find three casting companies making vanes and blades — the real ceiling on AI infrastructure through 2030.
- `INS-260410-41EF` [high] Microsoft bet 30 years on topological qubits because Nadella believed reliable utility-scale quantum demanded a physics breakthrough, not incremental noise reduction.
- `INS-260405-55E0` [medium] AI hardware devices are flopping because the differentiated value in AI lives in software, not physical form factors.
- `INS-260410-56A2` [medium] If automated search shrinks chip design from 150 people × 18 months to a few people × weeks, then fab time (3-5 months) becomes the inner loop and hardware can target algorithms six months out instead of two years out.

- `INS-260605-6A0A` [medium] Homogeneous scaling (one model, identical chips) was a training-era artifact; the inference era rewards heterogeneity across architectures and silicon.
- `INS-260410-D593` [medium] Nothing in Optimus comes from a catalog — the human hand is electromechanically harder than everything else combined and required custom motors, gears, and sensors designed from scratch.
- `INS-260410-2307` [medium] There are ~10M H100-equivalents today and ~100M projected by 2028, which caps how many AGI-agents can run in parallel regardless of whether the models exist.
- `INS-260605-C0B2` [medium] An expressive non-humanoid robot puts the user's mind in a creative space rather than treating the machine as a human replacement.
- `INS-260605-6423` [medium] NPUs give roughly 3-13x speed and major energy savings, making them the enabler for real-time AR/TTS/camera workloads on the edge.
- `INS-260605-6588` [medium] 100B+ parameter and omni models now run at usable speeds on consumer Macs and iPhones, turning cloud subscriptions into a choice rather than a necessity.
- `INS-260410-0330` [medium] Levine's research arms went from $400k (PR2 in 2014) to $30k (early Berkeley lab) to $3k (current Physical Intelligence) — and he believes a 'small fraction of that' is achievable, because smarter AI substitutes for hardware precision.
- `INS-260605-A95C` [medium] Because prefill is compute-bound and decode is memory-bound, the optimal local setup pairs a compute-dense device (e.g. an Nvidia Spark/RTX) running prefill with a high-bandwidth device (e.g. a Mac) running decode — mirroring data-center co-design.
- `INS-260625-0A3D` [low] RunPod frames the 2026 GPU shortage as COVID-toilet-paper-style hoarding that will recover as companies get better at estimating compute needs.
