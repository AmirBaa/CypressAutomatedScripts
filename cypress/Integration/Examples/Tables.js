/// <reference types="Cypress" />
describe('Tables testing', () => {

    it('tests table with Python Language', () => {
        //check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes('Python Language')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})