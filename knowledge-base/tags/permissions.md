# Tag: permissions

- `INS-260410-F0EF` Manual approval prompts fail at scale because users stop paying attention — Anthropic measured 93% acceptance rates.
- `INS-260605-B610` Let agents fully execute reversible work and hand back anything irreversible — Parsons' rule is 'is this reversible without embarrassment to me?'
- `INS-260626-E000` Remote approvals should carry device-pairing and host identity, not just an approval boolean.
- `INS-260627-09D8` The unlock for real-world browser agents is operating on the user's authenticated sessions, which a sandboxed cloud browser can never see.
- `INS-260626-F490` Do not rely on prompt text alone for permissions; compile agent definitions into allowlists and reject invalid privilege states early.
- `INS-260605-B176` The same question means different things from different people, and when main-branch code conflicts with a CTO's Slack message, a social graph lets the system pivot on identity and weigh the CTO as the authority.
- `INS-260410-E233` Fewer approval prompts inside well-defined sandboxes produce safer outcomes than many prompts against a trust-nothing baseline.
- `INS-260320-DDFE` Bash commands (grep, find) bypass Read() deny rules — they scan everything including node_modules even with deny rules configured.
- `INS-260625-BEFE` Static yes/no per-tool permissions force a bad usability-vs-security tradeoff; tracking session state lets you block dangerous combinations (read confidential data AND publish externally) while allowing each action in isolation.
- `INS-260626-AD63` Per-agent identities bound to the deploy/delete lifecycle prevent rogue residual permissions that a shared service account accumulates.
- `INS-260402-31D8` The AI security consulting industry sells prompt-level protections that cannot work because LLMs are fundamentally jailbreakable; only permission restriction provides real security.
- `INS-260626-F069` Approval records should include tool authority and runtime boundary.
- `INS-260627-9298` Use a 'Swiss cheese' stack — model alignment, harness-level AST parsing and permissions, and network/filesystem sandboxing — so no single failure compromises a bash-powered agent.
- `INS-260627-9F3F` Model-facing tool descriptors should be backed by enforced gates for persona, exposure, origin, confirmation, egress, and audit.
- `INS-260626-FC7A` AI SDK 7 turns per-tool context, approval policies, HMAC-bound approval replay, and timeouts into explicit runtime controls.
- `INS-260626-9BC5` A canonical agent manifest can preserve declarations across tools, but each harness still needs an enforcement audit.
- `INS-260330-4E68` Default to restrictive permissions and explicitly grant access only when needed — chmod 777 is a red flag in any system.
