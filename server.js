const EmailService = require('./src/service/emailService');

const emailService = new EmailService();

const email = {
  id: 'email-01',
  to: 'imn.serene@gmail.com',
  subject: 'Hello! Niyaz Malik',
  body: 'Am I a good programmer?',
};

emailService.send(email).then(console.log).catch(console.error);
