const retry = require('../utils/retry');

describe('Retry Logic', () => {
  it('success after retries', async () => {
    let attempts = 0;

    const fn = () => {
      attempts++;
      if (attempts < 3) throw new Error('Fail');
      return 'Success';
    };

    const result = await retry(fn, 3, 10);
    expect(result).toBe('Success');
  });
});
