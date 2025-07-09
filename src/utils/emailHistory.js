const sentEmails = new Set();

function isDuplicate(id) {
  return sentEmails.has(id);
}

function markAsSent(id) {
  sentEmails.add(id);
}

module.exports = { isDuplicate, markAsSent };
