# Tag: secrets

- `INS-260605-8C71` Sensitive, predictable steps like authentication belong in deterministic harness code that holds the secrets, not in the non-deterministic agent loop.
- `INS-260605-2E60` Mount credentials as secret-refs (Podman/Kubernetes secret pointing to an agent-level secret-ref) so keys never appear as raw env vars in logs or config.
- `INS-260410-0C77` Desktop Extensions declare user_config with a 'sensitive: true' flag, and Claude Desktop stores those values in the OS keychain rather than leaving them in JSON files.
- `INS-260330-F909` Secrets and lies spoil like food with limited shelf life, but trust earned from keeping them compounds indefinitely—always choose the long-term play.
