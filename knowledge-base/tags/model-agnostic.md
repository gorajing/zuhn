# Tag: model-agnostic

- `INS-260423-85B3` Google ADK with LiteLLM: the Guardian agent runs on Gemma 4 today, can swap to any LiteLLM-supported model tomorrow, because the agent layer does not encode Gemini-specific assumptions.
- `INS-260605-7FEA` Match models to roles—careful reasoning for planning, fast fluency for implementation, precise instruction-following for validation—and avoid locking into one provider.
- `INS-260327-7299` Paperclip's bring-your-own-bot approach reflects the reality that different AI models have distinct strengths and personalities, making model-agnostic orchestration the optimal architecture.
- `INS-260626-C412` Fine-tuning locks you to a model that the next frontier release makes obsolete; a harness that sits on top inherits every future model's gains for free.
- `INS-260327-E0F7` Harness engineering uses structured documentation, linting rules, and architectural constraints to force consistent outputs regardless of which AI model generates the code.
