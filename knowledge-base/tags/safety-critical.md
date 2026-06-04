# Tag: safety-critical

- `INS-260603-6B3D` Brad (Bedrock): 'we don't let the agents directly write safety-critical code' — it's carefully reviewed by humans, and the agents' ability to act in safety areas is limited; there are two loops — a development loop (a human reviews changes to autonomy safety margins) and a physical operation loop (human involvement in machine operation).
- `INS-260501-646A` End-to-end is right. End-to-end alone is not. You need structured intermediate representations for runtime validation, closed-loop training, and human feedback integration.
