/// <reference types="cypress" />

import LoginPage from "../PageObject/LoginPage";

context('Funcionalidade Login', () => {
    
    const login = new LoginPage();
    
    beforeEach(() => {
        login.navigate();
        login.enterUserAdm('sysbet_adm');
        login.enterPassword('mnbvcxz1');
        login.submit();

    });
    
    it('Login com credenciais válidas', () => {
        
        // Verificar a URL
        cy.url().should('be.equal', 'https://backoffice.sys.bet/administrator/dashboard/online');

        // Verificar a resposta HTTP
        cy.request('GET', 'https://backoffice.sys.bet/administrator/dashboard/online').then((response) => {
            expect(response.status).to.equal(200);
            
        // expect(response.body.message).to.equal("Login realizado com sucesso");
        });
    });
});
