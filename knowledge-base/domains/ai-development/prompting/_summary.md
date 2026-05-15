# Topic: prompting

> 11 insights

- `INS-260410-AB4A` [high] Anthropic built a tool-testing agent that used a flawed MCP tool, then rewrote its description — future agents using the new description completed tasks 40% faster.
- `INS-260514-A295` [high] Before planning, run a 'Deep Interview' skill where AI asks YOU the questions. Turns 'I don't fully know what I want' into structured discovery. Live walk-through: vague Codex prompt → 8 targeted questions → coherent spec in 10 minutes.
- `INS-260514-D3D1` [high] Use design-system prompt libraries (getdesign.md, ~70 brand systems) — paste a complete brand's design system, customize for your font/logo, and skip hours of freeform style description.
- `INS-260514-3B3C` [high] For variations, ask for ~40 in a numbered modular grid — then refer to specific variants by number. Beats describing each variant you want.
- `INS-260410-096F` [high] When the lead agent delegates with instructions as terse as 'research the semiconductor shortage,' subagents duplicate each other's work or wander off-topic — detailed task contracts are mandatory.
- `INS-260410-B8EB` [high] The same structured data in YAML costs roughly 15% fewer tokens than JSON, which matters for context length and API bills.
- `INS-260405-880C` [high] Prompt engineering has an accumulating body of research-backed techniques that reward systematic study over ad-hoc experimentation.
- `INS-260410-87B5` [high] Bare think tool: +7pts. Think tool + optimized prompt with reasoning examples: +20pts (54% relative). The prompt is the lever.
- `INS-260410-18CF` [high] Start a new chat whenever you switch topics — leftover tokens distract the model and slow sampling without improving answers.
- `INS-260514-9D51` [high] Upload an edited version of the AI's output ('here's how page 2 should look — fix the prompt') instead of describing changes in text. Visual feedback compresses hundreds of design decisions into one image.
- `INS-260410-5D71` [medium] Tool descriptions should be short and functional; complex 'how to use this well' guidance belongs in the system prompt.
