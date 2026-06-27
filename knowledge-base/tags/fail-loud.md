# Tag: fail-loud

- `INS-260627-C87B` Agents are trained to write code that runs and tests pass, so they default to silent-recovery patterns (read config, fall back to defaults) that create brittle systems a human would feel bad writing.
- `INS-260626-2133` Brand identity fields must come from tenant config with no silent default — a missing identity is a crash, not a fallback, or you ship one venue speaking in another's voice.
