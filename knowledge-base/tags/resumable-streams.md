# Tag: resumable-streams

- `INS-260627-718B` Decouple the response stream from the API handler by storing it (Redis in prod, a file locally) under the workflow's run ID so any client can reconnect and resume.
