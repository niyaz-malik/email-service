const crypto = require('crypto');

const generateEmailId = (email) => {
  const str = `${email.to}-${email.subject}-${email.body}`;
  return crypto.createHash('sha256').update(str).digest('hex');
};

module.exports = generateEmailId;
