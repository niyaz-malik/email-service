const express = require('express');
const EmailService = require('./service/EmailService');
const generateEmailId = require('./utils/uniqueIdGenerator');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const emailService = new EmailService();

app.post('/send', async (req, res) => {
  try {
    const email = req.body;

    // for no duplicates...I'll handle that using unique id...so can't use any random id generation
    // beacuse for same gmail id should be same and that can be done using crypto hashing...
    email.id = generateEmailId(email);

    const result = await emailService.send(email);
    console.log(result);
    res.status(200).json({ success: true, message: result });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send("Welcome to Niyaz's email-service...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
