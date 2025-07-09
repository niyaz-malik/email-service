const provider_modiji = function () {

  let failCount = 0;

  return {
    name: 'Provider_modiji',
    sendEmail: async function() {
      console.log('Provider_modiji trying...');

      // making it fail on purpose for 2 times and will run on the 3rd try...
      if (failCount < 3) {
        failCount++;
        throw new Error('Provider_modiji failed');
      }
      return true;
    }
  };
};

const provider_rahulGandhi = function () {

  let failCount = 0;
  
  return {
    name: 'Provider_rahulGandhi',
    sendEmail: async function() {
      console.log('Provider_rahulGandhi trying...');

      // same here but since first one will run so this won't...
      if (failCount < 2) {
        failCount++;
        throw new Error('Provider_rahulGandhi failed');
      }
      return true;
    }
  };
};

module.exports = {
  provider_modiji,
  provider_rahulGandhi
};
