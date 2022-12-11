
describe('Basic locators', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
    it('tests certain locators on the site', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').as('productLocator')
        //Parent child chaining
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')
        // this is to print in logs
        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())
        })
    })
})