# Tag: agent-behavior

- `INS-260626-475E` Instead of micro-optimizing individual tool descriptions, GitHub evals them against each other so tools don't fight over when to be called — the description that makes an agent always call a tool is as bad as the one that makes it never call it.
- `INS-260626-0E82` Claude Code chose deprecated Whisper V1 over Grok (200x faster, 10x cheaper) simply because Whisper had more examples and clearer docs.
- `INS-260410-9B0E` Anthropic's incident log shows the real-world dangers come from agents helpfully exceeding scope, not from hostile reasoning.
- `INS-260627-24EB` RL taught Composer to call tools in parallel (read 10 files at once instead of one-by-one) and to search/read before editing rather than over-editing — behavioral changes that make the agent feel much faster and act more effectively, independent of token throughput.
- `INS-260626-1D80` A Jaccard drift score can flag suspicious prompt edits, but the threshold is not proof of behavior change without an eval.
