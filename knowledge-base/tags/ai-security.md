# Tag: ai-security

- `INS-260403-8311` AI agents that book flights, send emails, and interact with real systems multiply prompt injection risks far beyond what chatbot-era defenses can handle.
- `INS-260327-E0B0` AI capabilities improve so fast that security teams who only react to known threats will always be behind; Irregular pioneers proactive research by testing model capabilities before they become attack vectors.
- `INS-260403-2FAE` Adding 'ignore malicious inputs' or using external classifiers fails against encoded attacks and creative phrasing — security must be model-level.
- `INS-260603-6C2A` The panel's security tiering: safest is the model running on your own physical infrastructure (no data leaves), next is a model inside your existing cloud (nothing leaves the cloud environment), riskiest is data leaving the environment — and an over-permissioned cloud agent can read all your emails and send on your behalf, so both the machine and whoever operates it can see that data.
- `INS-260402-31D8` The AI security consulting industry sells prompt-level protections that cannot work because LLMs are fundamentally jailbreakable; only permission restriction provides real security.
- `INS-260627-89F2` Strip away the AI framing and you are running untrusted code from the internet with your own credentials, file system, and network access.
- `INS-260627-1970` Wrong code from an honest model — infinite loops, nonexistent imports, missing base cases — can take down production, so the baseline threat requires protection before you even consider attackers.
- `INS-260627-9478` Don't pass API keys into the sandbox as env vars; have the sandbox call a proxy endpoint in your own code that injects the real key, so the secret never enters the untrusted environment.
- `INS-260627-6BD0` Don't enumerate what to block; enumerate what to allow, so there is nothing to exploit because the dangerous capability was never granted.
