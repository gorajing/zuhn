# Tag: structured-output

- `INS-260403-7AD0` Prompts that specify role, output structure, and analytical framework can match institutional analyst output quality.
- `INS-260626-8116` Give the model a REPL/execution environment (V8 isolate, Lua, etc.) and let it write code that chains tools, instead of call-result-call-result orchestration that burns inference and latency.
- `INS-260626-AC00` Run the reviewer in a completely separate context window from the writer to break the LLM's bias toward its own text, have it emit structured (Pydantic) critiques with prioritized rules, and cap the loop at a fixed number of iterations rather than chasing a noisy score threshold.
- `INS-260625-EDA3` Free-form text is fine when a human is the only reader, but the moment another system consumes the output it needs an agreed-upon shape — a contract.
- `INS-260605-E1E2` Prefer models with built-in function calling and structured JSON support over coaxing the same behavior via prompts.
- `INS-260605-A8A9` Turn the repeated 'find intent, judge implementation, check conflicts, make CI pass' supervision loop into a programmatic workflow that emits structured JSON, so only genuine decisions reach you.
- `INS-260625-8FBA` Echo Script extracts speaker names, timestamps, language, emotion, English translation, and a summary from audio in one Gemini API call by passing a response schema.
