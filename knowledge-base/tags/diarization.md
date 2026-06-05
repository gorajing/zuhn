# Tag: diarization

- `INS-260605-9877` Knowing who spoke, when, and how (interruptions, backchannels, pauses, stress) often determines conversational meaning that plain transcription discards.
- `INS-260605-DDAB` Diarization can't assume a fixed number of speakers or stable labels, and must handle overlap, short turns, and speaker imbalance — which is why it remains unsolved.
- `INS-260605-D37A` Most STT models are trained on single-speaker data and degrade sharply under overlap, speaker change, cross-talk, distant mics, and code-switching.
- `INS-260605-004A` Merging diarization and STT outputs is hard because their timestamps disagree, STT mistranscribes overlaps, and each can detect speech the other misses — so it needs a real reconciliation layer.
- `INS-260605-355C` The same best-in-class diarizer scores ~2-8% error on clean telephone speech but ~41% in a noisy restaurant — so 'how good is it?' has no use-case-free answer.
