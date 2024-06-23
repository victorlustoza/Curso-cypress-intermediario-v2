Cypress.Commands.add('cloneViaSSH', project => {
  cy.exec(`cd cypress/downloads/ && git clone ${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}.git`)
})