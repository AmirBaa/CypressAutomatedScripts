/// <reference types ="cypress" />

describe('Orange HRM Page testing', () => {
  //Direct access
  it('tests login using fixtures', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.fixture('orangehrm').then((data) => {
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username)
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password)
      cy.get('.oxd-button').click()
      cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', data.expected)
    })
  })
  //Access through Hook for multiple it blocks
  let userdata;
  before(() => {
    cy.fixture("orangehrm").then((data) => {
      userdata = data;
    })
  })
  it('tests login functionalities version 2.', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password)
    cy.get('.oxd-button').click()
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', userdata.expected)

  })
})