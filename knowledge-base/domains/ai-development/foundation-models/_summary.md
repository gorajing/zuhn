# Topic: foundation-models

> 25 insights

- `INS-260625-9C3D` [high] Gemini's speech and conversational generation are powered by the same audio-understanding research, because you can only generate what the model already comprehends.
- `INS-260603-6E59` [high] Satish (Stanford atmospheric FM): on sequences (language/code) we're ~80-90% there because a word encodes sparse information you can mask and recover; but encoding even a 1024×1024 image into a vector loses enormous information, and video/spectral data is worse — the breakthrough for high-dimensional data hasn't happened.
- `INS-260605-72B5` [high] SAM 3 is enormously capable but 800M parameters and 300ms on a T4, making it unusable for the low-power edge deployments vision has historically targeted.
- `INS-260501-CF7D` [high] Frontier capability today shows up in tiny edge models within a year — and we don't know where the ceiling is yet.
- `INS-260605-0D57` [high] Frontier gains like Gemini 3 to 3.1 doubling some benchmarks come from better reasoning/fine-tuning data on a near-identical base, not from reinventing the transformer.
- `INS-260410-022B` [high] Amodei's 2017 'Big Blob of Compute' hypothesis still holds: scaling is bottlenecked by compute, data, objective function, and numerical stability — not by clever methods.
- `INS-260410-F342` [high] Pretraining data is to AGI what fossil fuels were to industrial civilization: finite and eventually replaced, but indispensable as the bridge to what comes next.
- `INS-260410-56F7` [high] Physical Intelligence's robots work because they start from open-source VLMs (e.g. Gemma) with an action expert bolted on, importing world knowledge robot data could never supply on its own.
- `INS-260410-76A3` [high] Scaling laws convert LLM capability improvement into a predictable function of compute and data, turning AI progress into a capital-allocation problem.
- `INS-260605-3AE6` [high] When everyone sprints to build the same workaround for a model limitation, that's a signal the limitation is temporary and the workaround is a depreciating asset.
- `INS-260605-8C05` [high] New flagship models (Gemini 4, Qwen 3.5, Chimera 2.5) are launching as vision-language/omni models on release, so VLMs are converging with LLMs.
- `INS-260625-B9A5` [medium] Llama-3-SWE-RL-70B scores 41% pass@1 on SWE-bench Verified, a new SOTA for open models under 100B parameters.
- `INS-260412-EDD8` [medium] General-purpose AI may serve as a new foundational science, enabling unforeseeable downstream applications the way physics enabled modern engineering.
- `INS-260410-3DAD` [medium] LLMs win the AGI race, but their first act as AGIs is to replace themselves with something closer to Sutton's from-scratch experiential architecture.
- `INS-260605-3DCD` [medium] The same phone defeated three senior engineers plus ChatGPT a year earlier; Claude refused to give up at the identical dead-end and found the VM man-in-the-middle workaround.
- `INS-260405-1C8D` [medium] Meta's TRIBE v2 predicts fMRI brain responses from video, audio, and language—enabling researchers to screen hypotheses in software before spending scarce scanner time on physical experiments.
- `INS-260505-5DC4` [medium] Train on the universal substrate (DNA), get understanding of the things it encodes (proteins, RNA) for free.
- `INS-260605-0D8C` [medium] Roboflow uses neural architecture search with drop-in-compatible knobs on a pretrained backbone to spin out a whole family of models, hitting ~40x speedup for the same accuracy versus fine-tuning SAM 3.
- `INS-260605-A0BC` [medium] The old 'open models aren't as good as closed' argument no longer holds—GLM 5.1 currently tops SWE-Bench among open models and the AI Index shows open and closed converging.
- `INS-260405-82F3` [medium] Open models consistently trail closed models by ~6 months, but the gap persists because proprietary labs keep redefining what 'frontier' means.
- `INS-260514-7B06` [medium] AI 2027 formalizes intelligence explosion via R&D progress multiplier: starts ~5x (months of pre-AI progress per current-month with AI help), compounds to 10x and 100x as recursive self-improvement kicks in.
- `INS-260410-7292` [medium] Reasoning models solve hard problems by brute-forcing a vast internal library, not by creative recombination—and this distinction predicts where they'll break.
- `INS-260603-11DB` [medium] Paige Bailey (Google DevRel): Gemma 4 (2.6B and 31B variants) performs about as well as Gemini 3.1 Flash Lite on benchmarks; analyzing 5 minutes of video cost ~2 cents and ran reliably; the models run on a Jetson Nano, fully in-browser via WebGPU, and on-robot (100+ robotics companies use Gemma fine-tunes for on-robot actions).
- `INS-260410-7AF5` [medium] Unlike humans, AI copies can pool their on-the-job learning — so one AI effectively learns every job in the economy simultaneously once online learning works.
- `INS-260603-A506` [low] Ichi (Meta): spatial capabilities that today live as separate tools/pages outside the model will be continuously brought into the model layer, so language foundation models and world models converge into one combined spatial+language model.
