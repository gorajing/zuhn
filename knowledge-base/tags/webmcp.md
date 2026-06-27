# Tag: webmcp

- `INS-260625-86CF` Replace the brittle parse-DOM, read-a11y-tree, screenshot, measure-and-click loop with declared tools the agent can call directly.
- `INS-260625-2439` MCP connects agents to server-side services anywhere/anytime; WebMCP implements the tools part of MCP for agents running inside an open browser window.
- `INS-260605-D710` WebMCP turns every HTML page into a mini MCP tool server, so agents call existing JS functions and links directly rather than burning compute on screenshots or XML DOM traversal.
- `INS-260625-BBB1` Add attributes to an HTML form and the browser auto-generates the JSON schema; for complex multi-step UI, manually register custom tools with hand-written schemas and execute blocks.
