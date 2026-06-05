# Tag: tts

- `INS-260605-90FB` Human turn-taking needs the full STT→LLM→TTS loop under ~200ms, but a fast TTS alone is already >200ms, so cascaded systems can't sound human.
- `INS-260605-434D` Switching from a dynamic to a static KV cache lets you CUDA-graph-capture an autoregressive TTS model, taking real-time factor from 0.8 to ~5x.
- `INS-260605-9B99` Hyperscaler voice modes run at a loss; for consumer voice apps the LLM is almost free and TTS is the bill that burns the whole fundraise — so a <100M-param CPU TTS removes per-use API cost entirely.
- `INS-260605-20C0` Modern TTS reframes audio generation as language modeling — an autoregressive decoder emitting audio token-patches frame by frame.
- `INS-260605-510C` Assigning each character a distinct speaking style in parentheses makes one TTS voice sound like several seamless characters.
