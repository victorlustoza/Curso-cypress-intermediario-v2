const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      // requestMode: true // Permite uso do cypress-plugin-api com cy.request ao invés de mudar todos para cy.api, caso queira
    }
  },
  fixturesFolder: false,
  video: false,
})
