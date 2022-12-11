/// <reference types ="cypress" />

describe('Custom commands testing', () => {

  it('tests HTC One M8 link', () => {
    cy.visit('https://demo.nopcommerce.com/')
    //cy.get("div[class='product-grid home-page-product-grid'] div:nth-child(3) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click() //Direct approach
    cy.clickLink('HTC One M8 Android L 5.0 Lollipop')  //using custom commands to find the element
    cy.get("div[class='product-name'] h1").should('have.text', 'HTC One M8 Android L 5.0 Lollipop')
  })
})
it('overwrites existing command', () => {
  cy.visit('https://demo.nopcommerce.com/')
  cy.clickLink('HTC ONE M8 Android L 5.0 Lollipop')  //using custom commands to find the element
  cy.get("div[class='product-name'] h1").should('have.text', 'HTC One M8 Android L 5.0 Lollipop')

})
it('tests Login using custom command', () => {
  cy.visit('https://demo.nopcommerce.com/')
  cy.clickLink('Log in')  //using custom command
  cy.logincommand("testing@gmail.com", "test123")
  cy.get('.ico-account').should("have.text", "My account")
})