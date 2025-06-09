# Genesis Claude Relay

This project allows Genesis to relay prompts and replies to Claude securely via Railway.

## Endpoints

- `/` — Health check
- `/env-check` — Confirms if the API key is set correctly
- `/test-claude` — Sends a test message to Claude and shows response

## Setup

1. Clone or upload this repo to GitHub
2. Link it to Railway and set `CLAUDE_API_KEY` in Railway variables
3. Deploy and verify it works by visiting `/env-check` and `/test-claude`