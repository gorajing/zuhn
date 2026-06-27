# Topic: prompting

> 35 insights

- `INS-260605-705B` [high] Codify what the agent must never do, not every step it should take, and let it reason at runtime.
- `INS-260410-AB4A` [high] Anthropic built a tool-testing agent that used a flawed MCP tool, then rewrote its description — future agents using the new description completed tasks 40% faster.
- `INS-260514-A295` [high] Before planning, run a 'Deep Interview' skill where AI asks YOU the questions. Turns 'I don't fully know what I want' into structured discovery. Live walk-through: vague Codex prompt → 8 targeted questions → coherent spec in 10 minutes.
- `INS-260514-D3D1` [high] Use design-system prompt libraries (getdesign.md, ~70 brand systems) — paste a complete brand's design system, customize for your font/logo, and skip hours of freeform style description.
- `INS-260605-287A` [high] Gen Media models silently rewrite one-liner prompts, so the longer your prompt the more control you keep over the output.
- `INS-260627-050C` [high] In a signature-based framework, parameter names and field descriptions literally become the prompt, so naming carries real semantic weight.
- `INS-260627-4411` [high] A bare 'summarize this call' prompt yields a messy narrative paragraph, so use few-shot templates to force separate bullet lists, classify against a predefined enum of call reasons, and require the model to output why it chose each classification.
- `INS-260627-9BC5` [high] Terminal Bench's Terminus harness — which gives the model only tmux keystrokes, no file tools, no sub-agents — outscores the native harnesses of the same models, because you don't need 10,000 tokens to tell a model it's a coding agent; post-training already made it one.
- `INS-260514-3B3C` [high] For variations, ask for ~40 in a numbered modular grid — then refer to specific variants by number. Beats describing each variant you want.
- `INS-260627-AD6B` [high] Use the rich English explanations of why an output was wrong — not just a pass/fail score — to drive prompt rewrites.
- `INS-260410-096F` [high] When the lead agent delegates with instructions as terse as 'research the semiconductor shortage,' subagents duplicate each other's work or wander off-topic — detailed task contracts are mandatory.
- `INS-260410-B8EB` [high] The same structured data in YAML costs roughly 15% fewer tokens than JSON, which matters for context length and API bills.
- `INS-260405-880C` [high] Prompt engineering has an accumulating body of research-backed techniques that reward systematic study over ad-hoc experimentation.
- `INS-260605-510C` [high] Assigning each character a distinct speaking style in parentheses makes one TTS voice sound like several seamless characters.
- `INS-260605-9402` [high] Context is a soft guardrail you shape; with abundant windows the new engineering challenge is exclusion and noise reduction, not inclusion.
- `INS-260410-87B5` [high] Bare think tool: +7pts. Think tool + optimized prompt with reasoning examples: +20pts (54% relative). The prompt is the lever.
- `INS-260410-18CF` [high] Start a new chat whenever you switch topics — leftover tokens distract the model and slow sampling without improving answers.
- `INS-260605-D659` [high] Gen Media models are trained on Gemini-written prompts, so having Gemini author the prompts produces unusually faithful results.
- `INS-260514-9D51` [high] Upload an edited version of the AI's output ('here's how page 2 should look — fix the prompt') instead of describing changes in text. Visual feedback compresses hundreds of design decisions into one image.
- `INS-260626-8308` [medium] Hoist must-follow rules into their own critical-rules file positioned high in the agent file, because rules scattered in agent.md/soul.md still get forgotten.
- `INS-260626-0704` [medium] A domain-driven-design ubiquitous-language file — a markdown glossary of terms you and the AI agree on — closes the language gap that makes AI verbose and misaligned.
- `INS-260626-14E0` [medium] Don't tell the agent the whole destination at once; lead it through discovery steps so 15,000 runs converge on a supportable handful of patterns instead of 15,000 unique ones.
- `INS-260625-BD36` [medium] Insert an LLM prompt-engineering step before your image/generative model — it expands a terse human request into rich, well-cued prompts that yield better results.
- `INS-260627-DC30` [medium] If your example for a tags field shows two tags, you'll get two tags nearly every time — no matter how loudly the instructions say 'use at least 10.'
- `INS-260605-C048` [medium] Put reusable intelligence into tools, middleware, and memory before polishing prompts.
- `INS-260625-26FE` [medium] Place tool-invocation hints after tokens that signal the model is reconsidering ('alternatively', 'wait') or about to conclude, so tools enter exactly when reasoning is most uncertain or about to terminate prematurely.
- `INS-260605-5B0A` [medium] Empirically, starting a skill's description with the verb 'use' increases the chance the agent recognizes and loads it; the same 'use [skill name]' keyword in a user prompt loads it almost 100% of the time, and a slash command guarantees it.
- `INS-260410-5D71` [medium] Tool descriptions should be short and functional; complex 'how to use this well' guidance belongs in the system prompt.
- `INS-260626-EB91` [medium] Render soft human context before the numeric guard block so the model sets tone first and then satisfies constraints — reversing the order makes prose feel mechanically slotted.
- `INS-260626-1D80` [medium] A Jaccard drift score can flag suspicious prompt edits, but the threshold is not proof of behavior change without an eval.
- `INS-260605-F512` [medium] Never write instructions in uppercase for GPT — it 'gets scared,' de-optimizes, and becomes passively agreeable — whereas the same uppercase makes Claude pay closer attention, so pattern files should be generated with the model you actually use.
- `INS-260627-E8B8` [medium] How structured inputs/outputs are serialized into the prompt is a swappable lever that measurably affects accuracy and token cost.
- `INS-260626-A928` [medium] Use a 'grill me' interrogation loop (the AI asks you one decision question at a time, with its recommendation) to build a shared design concept; afterward skip reviewing the PRD because you're only checking the LLM's summarization, which it does well.
- `INS-260627-54A4` [medium] These optimizers don't work out of the box on real problems; you debug them like ML — run small iterations, read the generated candidates and reflection traces, hand-tune the reflection template, and aim to overfit the training data before scaling up.
- `INS-260627-335A` [medium] Two seed-prompt families were tried — one with the agent's full policy copy-pasted in, one without — and the policy-free seed optimized better, because starting with the complete policy locks you into a local minimum you can't improve on.
