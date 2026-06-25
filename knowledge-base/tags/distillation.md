# Tag: distillation

- `INS-260501-CF7D` Frontier capability today shows up in tiny edge models within a year — and we don't know where the ceiling is yet.
- `INS-260410-49C5` Future AI organizations will blur the line between individual workers by constantly spawning specialized copies and merging their learnings back through latent-space communication.
- `INS-260625-02C7` Diffusion serving optimizations (quantization, caching, distillation, context parallelism) are all composable, so start with the cheapest lever and add more only until quality and latency targets are met.
- `INS-260605-738E` Use a strong cloud LLM to generate low-millions-to-tens-of-millions of synthetic examples of the target behavior, then fine-tune an off-the-shelf tiny model (e.g. Gemma 270M) on that data and quantize for deployment.
- `INS-260410-F053` Zuckerberg frames distillation as the surprise-strong technique of the last year — ~95% of a teacher model's intelligence captured at ~10% of the cost — and says the point of open-sourcing behemoth models is to enable distillation, not direct deployment.
- `INS-260605-B405` Treat frontier-model labels as noisy: run heuristic checks and send failures back to a second model to repair before training.
- `INS-260625-57C1` Distribution-based distillation (match where the teacher ends up) currently yields better quality than trajectory-based distillation (mimic each denoising step), and hybrids of the two give the best stability-quality balance.
- `INS-260605-0113` After the student approaches teacher quality, use the student checkpoint instead of the teacher for expensive repeated sampling — it costs almost nothing.
- `INS-260625-D772` Diffusion distillation runs on H100/H200/B200-class GPUs (not just GB200s) and small models need little compute, but garbage-in-garbage-out applies — specialized domains require your own data distribution and the ability to evaluate quality differences.
- `INS-260625-E464` Unlike LLM distillation (which shrinks parameters), diffusion 'step distillation' keeps the same parameter count but trains a student to match quality in 4–8 (or even 1) denoising steps instead of 50, yielding 10x–200x speedups.
- `INS-260605-B82E` When a model must respond on every keystroke, fine-tune a small specialized model rather than reaching for a general frontier model.
- `INS-260410-3271` Jeff Dean envisions a single 'organic blob' model where 100 teams independently train specialized modules (Southeast Asian languages, Haskell reasoning, medical imaging) that attach to a base, with continuous distillation cycling between big exploration and small efficient serving.

