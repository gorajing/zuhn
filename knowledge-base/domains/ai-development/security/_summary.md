# Topic: security

> 13 insights

- `INS-260627-109F` [high] When AI makes producing plausible work cheap but verifying it stays expensive and human, the bottleneck — and the attack surface — shifts entirely to the reviewer.
- `INS-260627-89F2` [high] Strip away the AI framing and you are running untrusted code from the internet with your own credentials, file system, and network access.
- `INS-260627-08E7` [high] Intercept the tool call before it executes, validate the sensitive arguments with deterministic logic, and refuse invocation if they violate your constraints.
- `INS-260627-1970` [high] Wrong code from an honest model — infinite loops, nonexistent imports, missing base cases — can take down production, so the baseline threat requires protection before you even consider attackers.
- `INS-260627-9478` [high] Don't pass API keys into the sandbox as env vars; have the sandbox call a proxy endpoint in your own code that injects the real key, so the secret never enters the untrusted environment.
- `INS-260627-5EB3` [high] Going from local stdio to remote HTTP MCP flips you from zero security surface to OAuth, tokens, CORS, TLS, and rate limiting all at once, with no halfway house.
- `INS-260627-1B4D` [high] LLMs have no native separation between trusted developer instructions and untrusted data, so injection is a structural property, not a patchable bug.
- `INS-260627-CFA6` [high] The PoisonedRAG result: five malicious chunks in an 8-million-document corpus suffice to make an LLM emit an attacker-chosen answer for a target query.
- `INS-260627-6BD0` [high] Don't enumerate what to block; enumerate what to allow, so there is nothing to exploit because the dangerous capability was never granted.
- `INS-260627-8ADF` [high] The real agent risk isn't bugs in one product — it's the inherent combination of data access, untrusted input, and outbound communication, which is irreducible and grows with capability.
- `INS-260627-C36B` [high] Safety filtering is a binary safe/unsafe classification, so a fine-tuned encoder (35ms, self-hostable, retrainable in hours) beats an LLM-judge that compounds seconds of latency per checkpoint.
- `INS-260626-F069` [medium] Approval records should include tool authority and runtime boundary.
- `INS-260627-2FFE` [medium] Move MCP auth from long-lived shared keys (confused-deputy risk) to short-lived scoped OAuth 2.1 tokens, token exchange, and CIMD-based verifiable client identity.
