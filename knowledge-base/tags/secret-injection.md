# Tag: secret-injection

- `INS-260605-9A01` Deploy agent logic with zero infra by appending a 'dynamic worker configured' event whose payload is the reducer+after-append source, run in a spun-up worker, with API keys substituted into outbound headers so secrets never touch the log.
