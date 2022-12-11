const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "yen787",
  defaultCommandTimeout: 8000,
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/Integration/examples/*.js'


    // cypress/Integration/examples/*.js

  }
})