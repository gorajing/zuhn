# Tag: access-control

- `INS-260501-01A5` Greg Brockman: if a doc is permissioned incorrectly and they realize they didn't want it accessible, normally they change the permissions — but now there are derived artifacts. You need to track through the system: this output came from this source, the source is no longer accessible, invalidate the derived artifact too.
- `INS-260625-386B` A parameterized secure view exposes only the current end user's data to the agent, so even a prompt-injected or manipulated query cannot reach other users' rows — security is enforced by structure, not by the model's good behavior.
