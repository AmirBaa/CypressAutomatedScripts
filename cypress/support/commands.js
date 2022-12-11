// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//cy.get(':nth-child(2) > .nav-link').click()

Cypress.Commands.add('selectProduct', (productName) => {
    cy.get('h4.card-title').each(($el, index, $list) => {       //iterate through the list of things inside hf.card-tittle
        if ($el.text().includes(productName)) {              //if the item/text containts Blackberry
            cy.get('.card > .card-footer > .btn').eq(index).click() //click on the product
        }
    })
})

Cypress.Commands.add('LoginAPi', () => {
    cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login/',
        { "userEmail": "amirbalic1408@gmail.com", "userPassword": "Bala111!" }).
        then(function (response) {
            expect(response.status).to.eql(200)
            Cypress.env('token', response.body.token)   //making environment variable 'token' to be used across the whole framework (geting the token from the page)
        })
})
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })