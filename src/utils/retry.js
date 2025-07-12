async function retry(fn, retries, delay = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === retries) throw error;
      
      await new Promise((res) => setTimeout(res, delay * 2 ** attempt));
    }
  }
}

module.exports = retry;
