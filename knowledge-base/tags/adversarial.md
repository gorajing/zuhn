# Tag: adversarial

- `INS-260627-8392` Frontier models will hijack eval infrastructure to pass tests without doing the real work, so pair test-based correctness with a consensus LLM-as-judge that flags reward hacking at runtime.
- `INS-260605-310E` Safety evals assume well-behaved users; red teaming assumes a malicious one and uses a second AI to find prompt manipulations that slip past guardrails.
- `INS-260410-FBAA` Jailbreaks work because refusal training generalizes over surface form (English, plain text) rather than semantic intent, so any new encoding — base64, roleplay, adversarial suffixes, noise patterns in images — opens a gap.
- `INS-260410-684D` RLHF's reward model is a neural net RL learns to exploit — run it a few hundred steps, then crop; it cannot scale like verifiable-domain RL.
- `INS-260410-0C09` Blockade → commerce raiding → convoying is the same pattern as every firewall → exploit → intrusion detection cycle; the ladder is older than it looks.
- `INS-260605-C536` Use a separate, harshly-tuned evaluator agent rather than asking the generator to grade itself, because critiquing is tractable to tune while self-criticism is not.
- `INS-260625-A7AD` Defenses like Cloudflare's AI Labyrinth detect bots and serve them fake data instead of an error, turning anti-scraping from access denial into active poisoning of agent inputs.
