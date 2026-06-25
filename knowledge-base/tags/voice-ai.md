# Tag: voice-ai

- `INS-260605-1A2D` Teams fight for 10–20ms in TTS while tool calls cost 500ms–4s and are unpredictable; split the LLM so it speaks naturally during the wait, then inserts the result back into the conversation.
- `INS-260322-191F` Some voice AI companies intentionally add latency and background noise to make agents sound more human, revealing that performance has outpaced user comfort.
- `INS-260322-091C` In banking and financial services, voice AI actually outperforms humans because humans frequently violate compliance regulations while AI gets it right every time and can be audited.
- `INS-260322-4090` Voice uniquely carries emotional information that text and images cannot — making it the AI modality most capable of creating genuine human connection and feeling.
- `INS-260403-C734` Multiple AI customer service startups hitting $100M+ ARR with outcome-based pricing indicates a fundamental shift from per-seat SaaS to pay-per-resolution models.
- `INS-260605-90FB` Human turn-taking needs the full STT→LLM→TTS loop under ~200ms, but a fast TTS alone is already >200ms, so cascaded systems can't sound human.
- `INS-260605-9877` Knowing who spoke, when, and how (interruptions, backchannels, pauses, stress) often determines conversational meaning that plain transcription discards.
- `INS-260605-DDAB` Diarization can't assume a fixed number of speakers or stable labels, and must handle overlap, short turns, and speaker imbalance — which is why it remains unsolved.
- `INS-260405-00DE` Background noise carries exploitable signals about patient context that standard noise cancellation discards.
- `INS-260605-E490` Half-duplex models that only listen OR speak break on the overlap, coughs, and 'mhm' backchanneling that make human talk human — up to 20% of a conversation is overlapping speech.
- `INS-260403-F9C7` Off-the-shelf AI models cannot serve users with dementia, dysphasia, or non-Western communication styles without fundamental architectural changes.
- `INS-260605-9B99` Hyperscaler voice modes run at a loss; for consumer voice apps the LLM is almost free and TTS is the bill that burns the whole fundraise — so a <100M-param CPU TTS removes per-use API cost entirely.
- `INS-260605-3860` The cues that reveal a speaker is uncomfortable or challenging are present in speech-to-speech input but get ignored if the model was trained on audio-fied factual Q&A that never needed them.
- `INS-260605-355C` The same best-in-class diarizer scores ~2-8% error on clean telephone speech but ~41% in a noisy restaurant — so 'how good is it?' has no use-case-free answer.
