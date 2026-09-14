
describe('E2E testing Sky Metro', () => {
  it('Main page', () => {
      cy.visit('/en')
      cy.getData('navbar').find('[data-id="bar"]').should('exist')
      cy.getData('bar').click();
      cy.getData('menu').should('exist');
      cy.wait(2000);
      cy.getData('close').click();
      cy.getData('menu').should('not.exist')

 // ---- Test logo ----
     cy.visit('/contact')
     cy.wait(2000);
     cy.getData('logo').click()
     cy.wait(2000)
     cy.url().should('include',"/en")
     cy.reload()
    })
 
})