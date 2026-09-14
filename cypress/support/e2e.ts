import './commands'
import 'cypress-axe'
describe('Accessibility Test', () => {
  it('should find no accessibility violations on the home page', () => {
    cy.visit('/')
    cy.injectAxe()
    cy.checkA11y()
  })
})