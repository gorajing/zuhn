# Topic: prompting

> 18 insights

- `INS-260605-705B` [high] Codify what the agent must never do, not every step it should take, and let it reason at runtime.
- `INS-260410-AB4A` [high] Anthropic built a tool-testing agent that used a flawed MCP tool, then rewrote its description — future agents using the new description completed tasks 40% faster.
- `INS-260514-A295` [high] Before planning, run a 'Deep Interview' skill where AI asks YOU the questions. Turns 'I don't fully know what I want' into structured discovery. Live walk-through: vague Codex prompt → 8 targeted questions → coherent spec in 10 minutes.
- `INS-260514-D3D1` [high] Use design-system prompt libraries (getdesign.md, ~70 brand systems) — paste a complete brand's design system, customize for your font/logo, and skip hours of freeform style description.
- `INS-260605-287A` [high] Gen Media models silently rewrite one-liner prompts, so the longer your prompt the more control you keep over the output.
- `INS-260514-3B3C` [high] For variations, ask for ~40 in a numbered modular grid — then refer to specific variants by number. Beats describing each variant you want.
- `INS-260410-096F` [high] When the lead agent delegates with instructions as terse as 'research the semiconductor shortage,' subagents duplicate each other's work or wander off-topic — detailed task contracts are mandatory.
- `INS-260410-B8EB` [high] The same structured data in YAML costs roughly 15% fewer tokens than JSON, which matters for context length and API bills.
- `INS-260405-880C` [high] Prompt engineering has an accumulating body of research-backed techniques that reward systematic study over ad-hoc experimentation.
- `INS-260605-510C` [high] Assigning each character a distinct speaking style in parentheses makes one TTS voice sound like several seamless characters.
- `INS-260605-9402` [high] Context is a soft guardrail you shape; with abundant windows the new engineering challenge is exclusion and noise reduction, not inclusion.
- `INS-260410-87B5` [high] Bare think tool: +7pts. Think tool + optimized prompt with reasoning examples: +20pts (54% relative). The prompt is the lever.
- `INS-260410-18CF` [high] Start a new chat whenever you switch topics — leftover tokens distract the model and slow sampling without improving answers.
- `INS-260605-D659` [high] Gen Media models are trained on Gemini-written prompts, so having Gemini author the prompts produces unusually faithful results.
- `INS-260514-9D51` [high] Upload an edited version of the AI's output ('here's how page 2 should look — fix the prompt') instead of describing changes in text. Visual feedback compresses hundreds of design decisions into one image.
- `INS-260605-5B0A` [medium] Empirically, starting a skill's description with the verb 'use' increases the chance the agent recognizes and loads it; the same 'use [skill name]' keyword in a user prompt loads it almost 100% of the time, and a slash command guarantees it.
- `INS-260410-5D71` [medium] Tool descriptions should be short and functional; complex 'how to use this well' guidance belongs in the system prompt.
- `INS-260605-F512` [medium] Never write instructions in uppercase for GPT — it 'gets scared,' de-optimizes, and becomes passively agreeable — whereas the same uppercase makes Claude pay closer attention, so pattern files should be generated with the model you actually use.
