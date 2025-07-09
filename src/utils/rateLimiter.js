let emailSent = 0;
const maxEmailsAllowedPerMinute = 5;

setInterval(() => {
  emailSent = 0;
}, 60_000);

function canSend() {
  return emailSent< maxEmailsAllowedPerMinute;
}

function recordSend() {
  emailSent++;
}

module.exports = { canSend, recordSend };
