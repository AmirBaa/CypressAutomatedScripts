/// <reference types="Cypress" />
describe('API test skiping login', () => {

    it('skips login screen by adding token to local storage', () => {
        cy.LoginAPi().then(function () {
            cy.visit('https://rahulshettyacademy.com/client/', {   //the concept is to skip the login screen 
                onBeforeLoad: function (window)     //before loading the page, call this function and do:
                {
                    window.localStorage.setItem('token', Cypress.env('token'))  //add token to local storage
                }
            })
        })
    })
})