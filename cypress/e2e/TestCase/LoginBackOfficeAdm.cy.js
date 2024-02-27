/// <reference types="cypress" />

import LoginPage from "../PageObject/LoginPage";

context('Funcionalidade Login', () => {
    
    const login = new LoginPage();
    
    beforeEach(() => {
        login.navigate();
    });
    
    it('Login com credenciais válidas', () => {
        login.enterUserAdm('sysbet_adm');
        login.enterPassword('mnbvcxz1');
        login.submit();
        cy.url().should('be.equal', 'https://backoffice.sys.bet/administrator/dashboard/online');
    });
    
});
