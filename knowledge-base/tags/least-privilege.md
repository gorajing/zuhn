# Tag: least-privilege

- `INS-260626-A05F` Set each sub-agent's sandbox mode from its job: read-only for reviewers and vulnerability scanners, write access only for doc/bug-report writers that must execute.
- `INS-260605-41AE` Cloud agents run in isolated GitHub Actions sandboxes with whitelisted network access and no permission to push to main, so even a misbehaving agent is contained.
- `INS-260626-8C66` Expose individual tool fields to the agent (e.g. only the 'to' field) so a mistake is structurally bounded instead of as wide as the underlying API.
- `INS-260625-DCE4` Most sandboxes start from a full VM and add security around it; the safer model starts from nothing — only JavaScript, no fetch, no env vars — and grants explicit capabilities.
- `INS-260625-D1D5` Validate inputs, grant least privilege, and draw boundaries — treat content from strangers as evidence not instructions, and wall risky actions behind your approval to reduce the blast radius.
- `INS-260626-57BA` Under XAA you log into the downstream app as yourself with your full existing permissions — the IDP brokers identity but does not attenuate scope, and scoped delegation is not in the spec.
- `INS-260625-52B6` Split tools into read-only and read-write surfaces and let the data owner deny write tools via IAM, so the developer can't accidentally grant an agent destructive power.
- `INS-260626-AD63` Per-agent identities bound to the deploy/delete lifecycle prevent rogue residual permissions that a shared service account accumulates.
- `INS-260625-DD6D` Hand agents a token scoped to a specific seller, amount, currency, and time window — enforced by the platform — instead of a card number with no controls.
- `INS-260330-4E68` Default to restrictive permissions and explicitly grant access only when needed — chmod 777 is a red flag in any system.
