/// <reference types="cypress" />

describe('getPlayer - API backOffice', () => {
    
    beforeEach(() =>{
        // Realizar login e obter o token de autenticação
        cy.loginAndGetToken();
        
        // Visitar a página após o login
        cy.visit('https://backoffice.sys.bet/auth/login/sysbet');
        cy.log('foi');
    });
    
    it('Deve retornar o player com login "alienmb"', () => {
        cy.request({
            method: 'POST',
            url: 'https://apidev.sga.bet/administrator/players/getPlayer',
            headers: {
                'Application-Authorization': Cypress.env('authToken'),
                'x-api-key': '02ff96c8f50ce6a488812146d448a04b2e2358dd45d0dbb59824'
            },
            form: true,
            body: {
                id_user: "719464"
            }
        }).then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.dados.login).to.eq("alienmb")
        });
    });

    it('Deve retornar player não encontrado', () => {
        cy.request({
            failOnStatusCode: false,
            method: 'POST',
            url: 'https://apidev.sga.bet/administrator/players/getPlayer',
            headers: {
                'Application-Authorization': Cypress.env('authToken'),
                'x-api-key': '02ff96c8f50ce6a488812146d448a04b2e2358dd45d0dbb59824'
            },
            form: true,
            body: {
                id_user: ""
            }
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.messages.error).to.eq("Nenhum jogador encontrado!")
        });
    });
});
