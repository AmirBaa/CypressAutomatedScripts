/// <reference types="Cypress" />
describe('Api testing response', () => {

    it('validates the status code 403', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req) => {
                req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=bala'
                req.continue((res) => {           //hit the server with modified request
                    //  expect(res.statusCode).to.eql(403)  //validating 
                })
            }).as("dummyURL")
        cy.get('.btn.btn-primary').click()
        cy.wait('@dummyURL')

    })


})

