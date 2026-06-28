# Tag: system-prompts

- `INS-260605-8109` Narrowing an agent's action and input space into explicit modes lets engineers optimize prompts and evals on a small surface while aligning user expectations.
- `INS-260626-9D78` Decompose an agent's behavior into four layers — immutable identity, situational mode, example-anchored voice, and a post-generation veto — assembled in a fixed order rather than crammed into one prompt.
- `INS-260410-F259` System prompts fail at two extremes: brittle hardcoded if-else logic or vague high-level guidance — aim for the middle altitude.
- `INS-260514-AE82` Harness engineering (system-prompt design, tool-call orchestration) can lift a model's performance 30-40% — invest there before chasing a better model.
- `INS-260320-9FD5` Batch inputs to amortize system prompt costs — 100 separate calls with a 500-token system prompt = 50,000 wasted tokens. 1 batched call = 500 tokens.
- `INS-260605-EBEB` Large system prompts and elaborate if-else logic overload frontier models into sensory overload, so prune aggressively and get out of the model's way.
- `INS-260625-1955` Trade up-front training compute for drastically smaller inference: a model that learned your context can answer in ~100 tokens what frontier models burn ~100,000 tokens to do by re-reading files and parsing monstrous system prompts.
- `INS-260627-9BC5` Terminal Bench's Terminus harness — which gives the model only tmux keystrokes, no file tools, no sub-agents — outscores the native harnesses of the same models, because you don't need 10,000 tokens to tell a model it's a coding agent; post-training already made it one.
- `INS-260627-B072` The long, leaked system prompts of Claude/Cursor/Cline aren't static — they're repeatedly iterated, and that iteration is what makes top coding agents succeed.
- `INS-260403-F664` Production system prompts that run millions of times must be hardened and optimized like code, representing a distinct discipline from conversational prompting.
