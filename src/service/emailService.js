const retry = require('../utils/retry');
const { canSend, recordSend } = require('../utils/rateLimiter');
const { isDuplicate, markAsSent } = require('../utils/emailHistory');
const { provider_modiji, provider_rahulGandhi } = require('../provider/emailProviders');

class EmailService {
  constructor() {
    const modijiProvider = provider_modiji();
    const rahulProvider = provider_rahulGandhi();

    this.providers = [modijiProvider, rahulProvider];
  }

  async send(email) {

    // checking if mail is sent or not already
    if (isDuplicate(email.id)) return 'Duplicate email. Skipping.';

    // if mail not sent already then i should check whether limit exceeded or not
    if (!canSend()) return 'Rate limit exceeded. Try later.';

    // here I am trying every providers
    for (let provider of this.providers) {
      try {
        await retry(() => provider.sendEmail(email), 2);
        markAsSent(email.id);
        recordSend();
        return `Email sent successfully via ${provider.name}`;
      } catch (err) {
        console.log(`${provider.name} failed. Trying next...`);
      }
    }

    return 'All providers failed.';
  }
}

module.exports = EmailService;
