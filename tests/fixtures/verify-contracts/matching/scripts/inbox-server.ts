const PORT = parseInt(process.env.ZUHN_INBOX_PORT ?? "7777", 10);

if (url === "/inbox") return handleInbox(req, res);
if (url === "/status") return handleStatus(req, res);
if (url === "/health") return handleHealth(req, res);

export { PORT };
