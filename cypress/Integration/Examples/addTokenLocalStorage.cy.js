/// <reference types="Cypress" />
// const neatCSV = require('neat-csv')
describe('API test skiping login', async () => {

    it('tests if the token will work and skip the login screen ', () => {
        cy.LoginAPi().then(function () {
            cy.visit('https://rahulshettyacademy.com/client/', {   //the concept is to skip the login screen 
                onBeforeLoad: function (window)     //before loading the page, call this function and do:
                {
                    window.localStorage.setItem('token', Cypress.env('token'))  //add token to local storage
                }
            })
        })
        cy.get('.card-body button:last-of-type').eq(2).click()
        cy.get('[routerlink*="cart"]').click()
        cy.get('li[class="totalRow"] button[type="button"]').click()
        cy.get('[placeholder*="Country"]').type("bos")
        cy.get('.ta-item > .ng-star-inserted').each(($el, index, $list) => {
            if ($el.text().includes("Bosnia and Herzegowina")) {
                cy.wrap($el).click()
            }
        })
        cy.get('.action__submit').click({ force: true })
        cy.wait(3000)
        cy.get('.order-summary button').click()
        // Cypress.config('fileServerFolder')  //creating dynamic path for our project to grab items
        /* cy.readFile('Cypress.config("fileServerFolder")+\cypress\downloads\order-invoice_amirbalic1408.csv').
             then(async (text) => {
                 const csv = await neatCSV(text)     //we must use async function in order for await to work
                 console.log(csv)
             })*/


    })

})