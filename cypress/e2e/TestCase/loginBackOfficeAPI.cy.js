/// <reference types="cypress" />

describe('Login - API backOffice', () => {
    it('Deve fazer login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://apidev.sga.bet/auth/login',
            headers: {
                'x-api-key': '02ff96c8f50ce6a488812146d448a04b2e2358dd45d0dbb59824'
            },
            form: true,
            body: {
                operator_code: 'Sysbet',
                login: 'sysbet_adm',
                password: 'mnbvcxz1'
            }
        }).then((response) => {
            
            cy.log(response.body.token_jwt);
            expect(response.body.user_data.login).to.equal("sysbet_adm")

        })
    });
});




