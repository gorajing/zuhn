# Tag: webhooks

- `INS-260605-8409` Treat an agent as a publicly-routable HTTP service over a tolerant event stream, so Slack webhooks, web-form submissions, and third-party plugins all become events instead of requiring a bespoke connector concept.
- `INS-260627-D61C` Prototype agent tasks with polling, but switch to webhooks before you scale — holding workers open to poll dozens of multi-minute tasks is the part that breaks.
