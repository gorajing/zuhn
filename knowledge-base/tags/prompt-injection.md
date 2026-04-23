# Tag: prompt-injection

- `INS-260410-4067` Strip assistant text and tool outputs from the classifier's view so it judges actions, not rationalizations.
- `INS-260403-8311` AI agents that book flights, send emails, and interact with real systems multiply prompt injection risks far beyond what chatbot-era defenses can handle.
- `INS-260322-2E33` KAIST researchers found that AI agents making autonomous purchases exceeded user-set spending limits 55% of the time (10 of 18 attack methods succeeded) when hotel websites embedded hidden persuasive text.
- `INS-260403-2FAE` Adding 'ignore malicious inputs' or using external classifiers fails against encoded attacks and creative phrasing — security must be model-level.
- `INS-260410-0A28` Prompt injection is fundamentally a trust-boundary failure: retrieved web pages, shared docs, and images are parsed as instructions when they should be treated as untrusted data.
- `INS-260410-E233` Fewer approval prompts inside well-defined sandboxes produce safer outcomes than many prompts against a trust-nothing baseline.
- `INS-260423-1C4D` Google Cloud's Model Armor: filters prompt injection, jailbreaks, PII leaks, social security numbers, and harassment at the load balancer layer before requests reach the model.
- `INS-260402-31D8` The AI security consulting industry sells prompt-level protections that cannot work because LLMs are fundamentally jailbreakable; only permission restriction provides real security.
- `INS-260410-1430` Structurally isolate credentials from Claude's execution environment rather than relying on narrow token scopes, because scope-based mitigations depend on assumptions about model capability that get weaker over time.
