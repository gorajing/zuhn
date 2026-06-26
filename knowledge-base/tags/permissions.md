# Tag: permissions

- `INS-260410-F0EF` Manual approval prompts fail at scale because users stop paying attention — Anthropic measured 93% acceptance rates.
- `INS-260605-B610` Let agents fully execute reversible work and hand back anything irreversible — Parsons' rule is 'is this reversible without embarrassment to me?'
- `INS-260605-B176` The same question means different things from different people, and when main-branch code conflicts with a CTO's Slack message, a social graph lets the system pivot on identity and weigh the CTO as the authority.
- `INS-260410-E233` Fewer approval prompts inside well-defined sandboxes produce safer outcomes than many prompts against a trust-nothing baseline.
- `INS-260320-DDFE` Bash commands (grep, find) bypass Read() deny rules — they scan everything including node_modules even with deny rules configured.
- `INS-260625-BEFE` Static yes/no per-tool permissions force a bad usability-vs-security tradeoff; tracking session state lets you block dangerous combinations (read confidential data AND publish externally) while allowing each action in isolation.
- `INS-260626-AD63` Per-agent identities bound to the deploy/delete lifecycle prevent rogue residual permissions that a shared service account accumulates.
- `INS-260402-31D8` The AI security consulting industry sells prompt-level protections that cannot work because LLMs are fundamentally jailbreakable; only permission restriction provides real security.
- `INS-260330-4E68` Default to restrictive permissions and explicitly grant access only when needed — chmod 777 is a red flag in any system.
