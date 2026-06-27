# Tag: scopes

- `INS-260626-57BA` Under XAA you log into the downstream app as yourself with your full existing permissions — the IDP brokers identity but does not attenuate scope, and scoped delegation is not in the spec.
- `INS-260627-3E71` Scopes not bound to the connection can never enter the access token because the SDK—not the LLM—runs the authorization request before tool execution.
