# Tag: threat-modeling

- `INS-260625-2ED0` Risk from prompt injection requires three things together — untrusted input, access to private data, and the ability to act/exfiltrate; remove any one and the risk collapses.
- `INS-260627-08FA` Agent security evaluation should distinguish malicious prompts discovered on pages from confirmed agent actions caused by those prompts.
- `INS-260625-D1D5` Validate inputs, grant least privilege, and draw boundaries — treat content from strangers as evidence not instructions, and wall risky actions behind your approval to reduce the blast radius.
- `INS-260627-89F2` Strip away the AI framing and you are running untrusted code from the internet with your own credentials, file system, and network access.
- `INS-260627-1970` Wrong code from an honest model — infinite loops, nonexistent imports, missing base cases — can take down production, so the baseline threat requires protection before you even consider attackers.
- `INS-260627-1B4D` LLMs have no native separation between trusted developer instructions and untrusted data, so injection is a structural property, not a patchable bug.
- `INS-260627-5A21` The worst security posture is the one you haven't examined — read-only shrinks the attack surface but the same cross-referencing that makes it useful makes it a devastating target.
- `INS-260627-8ADF` The real agent risk isn't bugs in one product — it's the inherent combination of data access, untrusted input, and outbound communication, which is irreducible and grows with capability.
- `INS-260409-16CF` To make the 1/8 gram antimatter bomb from 'Angels and Demons,' CERN would need to run for longer than the age of the universe.
- `INS-260330-1243` Applying ideological threat models to fundamentally transactional actors leads to systematic misprediction of their behavior and goals.
