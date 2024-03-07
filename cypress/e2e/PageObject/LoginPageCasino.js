class LoginPage {
    navigate() {
        cy.visit('https://casino.sys.bet/bt')
    }

    enter() {
        cy.get('#btn_login_dialog').click()
    }

    enterUser(userAdm) {
        cy.get('input[type="text"]').clear().type(userAdm);
        return this;
    }

    enterPassword(password) {
        cy.get('input[type="password"]').clear().type(password);
        return this;
    }

    submit() {
        cy.get('#btn_login_submit > .v-btn__content').click()
    }
}
export default LoginPage;