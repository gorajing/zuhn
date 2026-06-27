# Tag: authentication

- `INS-260605-BC6F` If the agent's permissions ride on the network connection rather than an API key inside the box, there is no secret for a long-running model to leak, misuse, or route around.
- `INS-260626-0D50` MCP inherits OAuth's assumption that apps don't trust each other, which directly contradicts the single-sign-on trust fabric enterprises already run.
- `INS-260626-57BA` Under XAA you log into the downstream app as yourself with your full existing permissions — the IDP brokers identity but does not attenuate scope, and scoped delegation is not in the spec.
- `INS-260627-3251` Make a single AI gateway the only path to models so that unified access, identity-based auth, per-use-case budgets, and central auditing are enforced structurally rather than per-team.
- `INS-260329-8C14` The top 10 most common passwords are all sequential digits or keyboard patterns, proving humans systematically choose guessable passwords because our brains optimize for recall, not randomness.
