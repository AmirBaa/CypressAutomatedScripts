/// <reference types="Cypress" />
describe('Grab value test', () => {

    it('tests jquerry', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //If we need jquery method in cypress method, we do .then and like bellow:
        cy.get('#opentab').then(function (el) {
            const url = el.prop('href')
            cy.visit(url)
        })
    })
})