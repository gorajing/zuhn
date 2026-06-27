# Tag: capability-based-security

- `INS-260626-E7C4` Invert the container model — begin with a sandbox that can only execute code (no fetches, no APIs) and explicitly grant each capability, instead of starting permissive and adding security from outside.
- `INS-260627-6BD0` Don't enumerate what to block; enumerate what to allow, so there is nothing to exploit because the dangerous capability was never granted.
