class LoginPage {
    navigate() {
        cy.visit('https://admin-demo.nopcommerce.com/')
    }

    enterEmail(username) {
        cy.get('#Email').clear()
        cy.get('#Email').type(username);
        return this
    }

    enterPassword(pswd) {
        cy.get('#Password').clear().type(pswd)
        return this
    }

    submit() {
        cy.get('.button-1').click()
    }
}
export default LoginPage;