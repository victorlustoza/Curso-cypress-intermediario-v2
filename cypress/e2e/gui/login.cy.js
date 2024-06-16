describe('Login', () => {
  it('successfully', () => {
    cy.login()

    cy.get('[data-qa-selector="welcome_title_content"]').should('be.visible')
  })
})