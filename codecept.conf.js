const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.qa-legacy.com',  // Base URL
      browser: 'chrome',
      waitForTimeout: 5000,
      windowSize: '1200x900'    
    },
    LegacyDb: {
      require: './helpers/LegacyDb.js'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'onboarding_project'
}
