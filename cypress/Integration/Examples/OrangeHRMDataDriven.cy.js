/// <reference types ="cypress" />

describe('Orange HRM Page Data driven ', () => {
  //Direct access
  it('tests login form - valid and invalid credentials', () => {
    cy.fixture('orangehrm2').then((data) => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      data.forEach((userdata) => {
        cy.get('input[placeholder="Username"]').type(userdata.username)
        cy.get('input[placeholder="Password"]').type(userdata.password)
        cy.get('button[type="submit"]').click()
        if (userdata.username == 'Admin' && userdata.password == 'admin123') {
          cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').
            should('have.text', userdata.expected)
          cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
          cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        } else {
          cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').
            should('have.text', userdata.expected)
        }
      });
    })
  })

})