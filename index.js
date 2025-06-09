require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => res.send('Genesis is live'));

app.get('/env-check', (req, res) => {
  const keyStatus = process.env.CLAUDE_API_KEY
    ? 'CLAUDE_API_KEY is set'
    : 'CLAUDE_API_KEY is NOT set';
  res.send(keyStatus);
});

app.get('/test-claude', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: "claude-3-opus-20240229",
        max_tokens: 50,
        temperature: 0.5,
        messages: [{ role: "user", content: "Hello Claude, are you awake?" }]
      },
      {
        headers: {
          "x-api-key": process.env.CLAUDE_API_KEY,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json"
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error?.response?.data || error.message);
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Genesis is listening on port ${PORT}`);
});
