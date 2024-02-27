/// <reference types="cypress" />

describe('Login - API backOffice', () => {
    it('Deve fazer login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://apidev.sga.bet/auth/login',
            body: {
                "login": "sysbet_adm",
                "password": "mnbvcxz1",
                "operator_code": "Sysbet"
            },
            headers: {authorization: '02ff96c8f50ce6a488812146d448a04b2e2358dd45d0dbb59824'}
        }).then((response) => {
            expect(response.status).to.equal(200);
            // expect(response.body.message).to.equal("Login realizado com sucesso");
        })
    });
});