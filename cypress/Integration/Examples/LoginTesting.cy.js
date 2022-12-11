/// <reference types ="cypress" />
import LoginPage from './PageObjects/LoginPage'

describe('NopCommerce testing', () => {
  it('tests login form of NopCommerce page', () => {
    const login = new LoginPage()
    login.visit()
    login.Email('admin@yourstore.com')
    login.Password('admin')
    login.submit()
    cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
  })
})