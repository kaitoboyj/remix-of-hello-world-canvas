require('dotenv').config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

console.log('Testing Telegram Configuration...');
console.log('Bot Token:', TELEGRAM_BOT_TOKEN ? `${TELEGRAM_BOT_TOKEN.substring(0, 15)}...` : 'NOT SET');
console.log('Chat ID:', TELEGRAM_CHAT_ID || 'NOT SET');

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error('❌ Telegram credentials not found in .env file');
  process.exit(1);
}

const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

const testMessage = {
  chat_id: TELEGRAM_CHAT_ID,
  text: '🧪 Test notification from USA 401k Grant Site\n\n' +
        '✅ Server is running\n' +
        '✅ Telegram bot is configured\n' +
        '✅ Notifications are working!\n\n' +
        `Time: ${new Date().toLocaleString()}`,
  parse_mode: 'HTML'
};

console.log('\nSending test message to Telegram...');

fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(testMessage)
})
.then(response => response.json())
.then(data => {
  if (data.ok) {
    console.log('✅ SUCCESS! Message sent to Telegram');
    console.log('Message ID:', data.result.message_id);
    console.log('\nCheck your Telegram chat for the test message!');
  } else {
    console.error('❌ FAILED! Telegram API error:');
    console.error('Error code:', data.error_code);
    console.error('Description:', data.description);
  }
})
.catch(error => {
  console.error('❌ FAILED! Network error:');
  console.error(error.message);
});
