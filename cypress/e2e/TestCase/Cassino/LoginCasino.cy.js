/// <reference types="cypress" />

import LoginPage from "../../PageObject/LoginPageCasino";

context('Funcionalidade Login do Cassino', () => {

    const login = new LoginPage();

    beforeEach(() => {

        login.navigate();
        // cy.wait(10000);
        login.enter();
        login.enterUser('galileo');
        login.enterPassword('mnbvcxz1');
        login.submit();


    });

    it('Login com credenciais válidas', () => {

        cy.url().should('eq', 'https://casino.sys.bet/bt');
    });
});

