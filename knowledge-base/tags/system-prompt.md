# Tag: system-prompt

- `INS-260627-1319` Most agent unreliability traces to missing instructions and context, so writing the rules a good practitioner would follow is the highest-ROI improvement before reaching for fine-tuning.
- `INS-260628-6F97` Put unchanging user queries in 'data' and the things you're experimenting on — prompts, RAG, preprocessing, models — in the 'task', so you can swap variables without redoing your dataset.
- `INS-260627-B416` Every enabled MCP server injects tool descriptions into every system prompt — disable the ones you aren't using or they waste tokens and mislead the agent.
- `INS-260410-5D71` Tool descriptions should be short and functional; complex 'how to use this well' guidance belongs in the system prompt.
- `INS-260410-87B5` Bare think tool: +7pts. Think tool + optimized prompt with reasoning examples: +20pts (54% relative). The prompt is the lever.
