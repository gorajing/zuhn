# Tag: speech-to-text

- `INS-260605-B03B` Because the LLM and TTS blindly carry forward whatever the speech-to-text model produces, a misheard name or drug becomes an uncorrectable error — making entity-level transcript accuracy the foundation of the whole pipeline.
- `INS-260605-D37A` Most STT models are trained on single-speaker data and degrade sharply under overlap, speaker change, cross-talk, distant mics, and code-switching.
- `INS-260605-004A` Merging diarization and STT outputs is hard because their timestamps disagree, STT mistranscribes overlaps, and each can detect speech the other misses — so it needs a real reconciliation layer.
