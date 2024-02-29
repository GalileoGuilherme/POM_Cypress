/// <reference types="cypress" />

import LoginPage from "../PageObject/LoginPage";

context('Funcionalidade Login', () => {
    
    const login = new LoginPage();
    
    beforeEach(() => {
        login.navigate();
        login.enterUserAdm('sysbet_adm');
        login.enterPassword('mnbvcxz1');
        login.submit();

        // cy.request({
        //     method: 'POST',
        //     url: 'https://apidev.sga.bet/auth/login',
        //     headers: {
        //         'x-api-key': '02ff96c8f50ce6a488812146d448a04b2e2358dd45d0dbb59824'
        //     },
        //     form: true,
        //     body: {
        //         operator_code: 'Sysbet',
        //         login: 'sysbet_adm',
        //         password: 'mnbvcxz1'
        //     }
        // }).then((response) => {
        //     expect(response.status).to.equal(200);
        // })

    });
    
    it('Login com credenciais válidas', () => {
        
        // Verificar a URL
        cy.url().should('be.equal', 'https://backoffice.sys.bet/administrator/dashboard/online');

        // Verificar a resposta HTTP
        cy.request('GET', 'https://backoffice.sys.bet/administrator/dashboard/online').then((response) => {
            expect(response.status).to.equal(200);
            
        // expect(response.body.message).to.equal("Login realizado com sucesso");

        cy.log(response.body.message);
        });
    });
});
