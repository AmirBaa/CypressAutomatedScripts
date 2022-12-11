/// <reference types="Cypress" />
describe('Api testing request', () => {

    it('checks if only one book is avaible on api get request', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method: 'GET',      //the first parameter is request
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
            {       //the second parameter is response
                statusCode: 200,
                body: [
                    {
                        "book_name": "RestAssured with java",
                        "isbn": "RSU",
                        "aisle": "2301"
                    }]
            }).as('books')
        cy.get('.btn.btn-primary').click()
        cy.wait('@books').should(({ request, response }) => {
            cy.get('tr').should('have.length', response.body.length + 1)  //check the count of the aaray // the lenght of the response tables is correct
            // response.body.length  //number of rows (arrays) in our table
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')


        //lenght of the response array = rows of the table

    })


})

