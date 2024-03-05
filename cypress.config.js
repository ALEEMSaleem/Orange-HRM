const { defineConfig } = require("cypress");
//const { describe } = require("mocha");

module.exports = defineConfig({
  e2e: {
    // viewportWidth: 660,
    // viewportHeight: 1000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
