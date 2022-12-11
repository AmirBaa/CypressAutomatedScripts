import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
const homePage = new HomePage()
const productPage = new ProductPage()
import HomePage from '../../../pageObjects/HomePage'
import ProductPage from '../../../pageObjects/ProductPage.js.js';

Given("Open HomePage of Ecommerce", () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

When('Click on SHOP->Add Items to Cart', function () {
    homePage.getShopTab().click()
    testData.productName.forEach(function (element) {  //go through the loop from example.json to add everything to the cart
        cy.selectProduct(element)
    })
    productPage.checkOutButton().click()

    And('Validate the total prices of selected items', () => {
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
    })

    Then('Select the country-> Submit  ->Very', () => {
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
    })
})