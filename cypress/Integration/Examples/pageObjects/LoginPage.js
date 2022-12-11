/// <reference types ="cypress" />

class LoginPage {
    visit() {
        cy.visit("https://admin-demo.nopcommerce.com/")
    }
     Email(value) {
       const emailField = cy.get('#Email')
       emailField.clear()
       emailField.type(value)
    }
    Password(value) {
        const passwordField = cy.get('#Password')
        passwordField.clear()
        passwordField.type(value)
        
    }
    submit() {
       const button = cy.get('[type=submit]')
       button.click()
    }
}

//another approach: 

// class LoginPage02 {
//     userName = '#Email'
//     passtxt = '#Password'
//     btnSubbmit = '[type=submit]'

//     setUserName(username) {
//         cy.get(this.userName).type(username)
//     }
//     setUserName(password) {
//         cy.get(this.passtxt).type(password)
//     }
//     clickSubmit() {
//         cy.get(this.btnSubbmit).click()
//     }
// }
export default LoginPage

