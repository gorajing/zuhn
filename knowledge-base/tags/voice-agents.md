# Tag: voice-agents

- `INS-260322-750D` AI voice agents in loan servicing and collections can speak 50 languages, maintain perfect UDAP compliance, and deliver better customer experiences — reorienting fintech TAM from IT budgets to labor costs.
- `INS-260605-2795` Asked how an agent could know when to interject, Reeve proposed an async process that repeatedly asks the transcript 'do you have anything to add?' rather than wiring it as a tool call.
- `INS-260605-B03B` Because the LLM and TTS blindly carry forward whatever the speech-to-text model produces, a misheard name or drug becomes an uncorrectable error — making entity-level transcript accuracy the foundation of the whole pipeline.
- `INS-260605-ACCD` Cascade speech-to-text, an LLM, and text-to-speech as separate orchestrated models, because unified speech-to-speech models can't yet follow instructions or call tools reliably enough for production.
- `INS-260605-F383` Network latency between geographically separated models can dominate engine latency; co-locating all models and the orchestrator in one data center can drop a 75ms hop to ~5ms for a ~30% total latency reduction.
- `INS-260605-DA98` Once a model is fast, infrastructure round-trips add as much latency as the model itself, so client-perceived latency is what matters.
- `INS-260605-4AF8` Splitting LLM inference onto its own scalable tier saves resources because a node of chatty users and a node of silent users consume wildly different LLM compute.
- `INS-260605-DA2B` Target ~200–300ms time-to-first-token for the LLM, which constrains model size to roughly 8–30B parameters — bigger burns the latency budget, smaller sacrifices the intelligence and tool calling the agent needs.
- `INS-260605-D912` Voice agents must simultaneously hit sub-500ms response latency, baseline tool-calling intelligence, natural-sounding speech, and reliability across thousands of concurrent calls — failing any one breaks the product.
