# Tag: speech-to-text

- `INS-260626-BA87` Feeding a multimodal LLM the audio plus surrounding context (e.g., a screenshot, code symbols) yields transcripts grounded in the right vocabulary, where a pure STT model would mis-hear domain terms.
- `INS-260627-682B` Isolating the agent and customer onto separate stereo channels during capture gives the LLM clean per-speaker input, where mixing them into a mono track forces the model to guess speaker attribution and ruins the downstream summary.
- `INS-260605-B03B` Because the LLM and TTS blindly carry forward whatever the speech-to-text model produces, a misheard name or drug becomes an uncorrectable error — making entity-level transcript accuracy the foundation of the whole pipeline.
- `INS-260605-D37A` Most STT models are trained on single-speaker data and degrade sharply under overlap, speaker change, cross-talk, distant mics, and code-switching.
- `INS-260605-004A` Merging diarization and STT outputs is hard because their timestamps disagree, STT mistranscribes overlaps, and each can detect speech the other misses — so it needs a real reconciliation layer.
