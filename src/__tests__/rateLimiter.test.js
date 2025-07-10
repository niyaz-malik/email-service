const { canSend, recordSend } = require('../utils/rateLimiter');

describe('Rate Limiter', () => {
  it('stop sending after 5 emails', () => {
    for (let i = 0; i < 5; i++) recordSend();
    expect(canSend()).toBe(false);
  });
});
