# Tag: third-party-ui

- `INS-260625-07CB` ChatGPT/MCP apps nest a srcdoc content iframe inside an outer iframe served on a host-owned proxy domain (e.g. openaiusercontent.com) so isolation scales without per-app CSP whitelisting.
- `INS-260625-5BF4` Serving every app from one static loader script on host subdomains (rather than proxying each app's dynamic HTML on the host's own domain) keeps infrastructure light and avoids the host being liable for code it didn't write and can't inspect.
