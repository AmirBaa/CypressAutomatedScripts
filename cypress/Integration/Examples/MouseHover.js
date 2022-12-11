/// <reference types="Cypress" />
describe('Mouse Hover', () => {

    it('tests mouse hover functionality', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({ force: true }) //to check if the mouse hover works;handling invisible method
        cy.url().should('include', 'top')

    })

})