# Tag: tiny-models

- `INS-260605-738E` Use a strong cloud LLM to generate low-millions-to-tens-of-millions of synthetic examples of the target behavior, then fine-tune an off-the-shelf tiny model (e.g. Gemma 270M) on that data and quantize for deployment.
- `INS-260605-4D1D` For models under ~500M parameters, fine-tune for the specific task — Google sees fine-tuning move the eval by 20-40 points, the difference between unusable and shippable.
- `INS-260605-33C0` Keep tiny models modular — one per task (e.g. separate ASR and text-polishing engines) — so weights can be reused across apps and the pipeline stays inspectable.
