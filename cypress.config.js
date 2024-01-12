const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 1280,
  viewportHeight: 800,
  video: true,
  watchForFileChanges: false,
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,
  port: 8080,
  retries: 1,
  reporter: 'cypress-mochawesome-reporter',
  env: {


  },
  experimentalStudio: true,
  e2e: {
    baseUrl: 'https://atriina.com',

    setupNodeEvents(on, config) {


      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
