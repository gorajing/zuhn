# Inbox Setup Guide

Route URLs from your phone (Safari, Telegram, etc.) to Zuhn's inbox server for automatic ingestion.

## Prerequisites

1. Zuhn's inbox server running on your Mac:
   ```bash
   npx tsx scripts/inbox-server.ts
   # Listens on http://localhost:7777
   ```

2. Your Mac and phone on the same network (or use a tunnel for remote access).

## Apple Shortcut Setup

### 1. Create the Shortcut

1. Open **Shortcuts** app on your iPhone/iPad
2. Tap **+** to create a new shortcut
3. Name it **"Send to Zuhn"**

### 2. Add Actions

Add these actions in order:

1. **Receive** input from **Share Sheet** (URLs, Text)
2. **Get URLs from Input** — extracts the URL from whatever was shared
3. **Get Contents of URL**:
   - URL: `http://<your-mac-ip>:7777/ingest`
   - Method: **POST**
   - Headers: `Content-Type: application/json`
   - Request Body (JSON):
     ```json
     {
       "url": "[URL from step 2]"
     }
     ```

### 3. Find Your Mac's IP

On your Mac:
```bash
# Get your local IP
ipconfig getifaddr en0
```

Use this IP in the shortcut (e.g., `http://192.168.1.100:7777/ingest`).

### 4. Add to Share Sheet

1. Open Shortcut settings (tap the `...` icon)
2. Enable **Show in Share Sheet**
3. Under **Share Sheet Types**, select **URLs**

## Usage

1. In Safari, Telegram, YouTube, etc. — tap **Share**
2. Select **"Send to Zuhn"**
3. The URL is sent to your inbox queue
4. The daemon processes it automatically (or run `npm run post-ingest` manually)

## Alternative: Telegram Bot

If you use Telegram, you can set up a simple bot that forwards URLs:

1. Create a bot via [@BotFather](https://t.me/BotFather)
2. Set up a webhook pointing to `http://<your-ip>:7777/ingest`
3. Parse incoming messages for URLs and forward them

## Remote Access (Optional)

For access outside your home network, use a tunnel:

```bash
# Using ngrok
ngrok http 7777

# Using Cloudflare Tunnel
cloudflared tunnel --url http://localhost:7777
```

Update your Shortcut URL to the tunnel URL.

## Verifying

```bash
# Test from terminal
curl -X POST http://localhost:7777/ingest \
  -H 'Content-Type: application/json' \
  -d '{"url":"https://example.com/article"}'

# Check the queue
ls knowledge-base/inbox/pending/
```

## Troubleshooting

- **Connection refused**: Make sure `inbox-server.ts` is running and firewall allows port 7777
- **URL not processed**: Check `knowledge-base/inbox/errors/` for failed ingestions
- **Shortcut fails silently**: Test with the curl command first to verify the server is reachable
