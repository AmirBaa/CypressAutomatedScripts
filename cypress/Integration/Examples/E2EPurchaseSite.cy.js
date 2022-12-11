/// <reference types="Cypress" />
import HomePage from './pageObjects/HomePage'
import ProductPage from './pageObjects/ProductPage.js.js';

describe('Whole Framework automation test', () => {
    let testData; //SO data can be accessed in whole script
    before(function () {
        cy.fixture('example').then((data) => { //it takes data using fixture from fixture folder and then json script
            testData = data  //SO data can be accessed in whole script
        })
    })

    it('tests end to end functionalities of the site', () => {
        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getEditBox().type(testData.name)
        homePage.getGender().select(testData.gender)
        homePage.getTwoWayDataBinding().should('have.value', testData.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2') //validate if the attribute has minimum 2 charac
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getEntrepreneur().should('have.attr', 'disabled')
        // cy.pause()
        // Cypress.config('defaultCommandTimeout', 8000)  // from this point the timeout is 8 seconds
        homePage.getShopTab().click()
        testData.productName.forEach(function (element) {  //go through the loop from example.json to add everything to the cart
            cy.selectProduct(element)
        })
        productPage.checkOutButton().click()
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {    //loop through all items in tr td:nth-child(4) strong
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
        }).then(function () {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function (element) {
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)     //assertion if the total amount equals the sum amount 
        })
        var sum1 = 0
        cy.get(':nth-child(1) > :nth-child(5) > .btn').click() //remove one item
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {    //loop through all items in tr td:nth-child(4) strong
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum1 = Number(sum1) + Number(res)
        }).then(function () {
            cy.log(sum1)
        })
        cy.get('h3 strong').then(function (element) {
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum1)     //assertion if the total amount equals the sum amount aftrer one item was removed
        })
        cy.contains('Checkout').click()
        cy.get('#country').type("Bosnia")
        cy.wait(4000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({ force: true })
        cy.get('.ng-untouched > .btn').click()
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-). ')
        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true  //text comparison without doing if statement
        })
        // cy.selectProduct('Blackberry')  //imported command from commands.js
    })

})