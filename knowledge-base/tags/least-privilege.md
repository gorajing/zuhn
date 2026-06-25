# Tag: least-privilege

- `INS-260605-41AE` Cloud agents run in isolated GitHub Actions sandboxes with whitelisted network access and no permission to push to main, so even a misbehaving agent is contained.
- `INS-260625-DCE4` Most sandboxes start from a full VM and add security around it; the safer model starts from nothing — only JavaScript, no fetch, no env vars — and grants explicit capabilities.
- `INS-260330-4E68` Default to restrictive permissions and explicitly grant access only when needed — chmod 777 is a red flag in any system.
