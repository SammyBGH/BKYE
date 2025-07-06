const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Root test route
app.get('/', (req, res) => {
  res.send('Telegram backend is running 🚀');
});

// Rate limiter: max 3 requests/min per IP
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 3,
  message: {
    success: false,
    error: 'Too many requests. Please wait a moment.',
  },
});
app.use('/api/send-message', limiter);

// Telegram config
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Telegram endpoint
app.post('/api/send-message', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  const telegramMessage = `
📬 *New Portfolio Message*  
👤 *Name:* ${name}  
📧 *Email:* ${email}  
📝 *Message:*  
${message}
  `;

  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    await axios.post(url, {
      chat_id: TELEGRAM_CHAT_ID,
      text: telegramMessage,
      parse_mode: 'Markdown',
    });

    res.json({ success: true, message: 'Message sent via Telegram!' });
  } catch (error) {
    console.error('Telegram API error:', error.response?.data || error.message);
    res.status(500).json({ success: false, error: 'Failed to send message via Telegram.' });
  }
});

// Start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
