class LoginPage {
    navigate() {
        cy.visit('https://backoffice.sys.bet/auth/login/sysbet')
    }

    enterUserAdm(userAdm) {
        cy.get('#input-24').clear()
        cy.get('#input-24').type(userAdm);
        return this
    }

    enterPassword(pswd) {
        cy.get('#password').clear().type(pswd)
        return this
    }

    submit() {
        cy.get('.v-card__actions > .v-btn').click()
    }
}
export default LoginPage