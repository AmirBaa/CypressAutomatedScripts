/// <reference types="Cypress" />
describe('Dropdown checkboxes', () => {

    it('tests chechboxes, dropdowns, autocomplete and hide/show objects', () => {
        //check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
        //Static Dropdown
        cy.get('select').select('option2').should('have.value', 'option2')
        //Dynamic dropdowns
        cy.get('#autocomplete').type('bo')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === "Bosnia and Herzegowina") {
                cy.wrap($el).click()
            }
        })
        //autocomplete
        cy.get('#autocomplete').should('have.value', "Bosnia and Herzegowina")
        //Hide or show objects
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        //CHeck radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')
    })
})