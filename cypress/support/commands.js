Cypress.Commands.add('loginAdmViaApi', (login, senha) => {
    return cy.request({
        method: 'POST',
        url: 'https://apidev.sga.bet/auth/login',
        headers: {
            'x-api-key': '02ff96c8f50ce6a488812146d448a04b2e2358dd45d0dbb59824'
        },
        form: true,
        body: {
            operator_code: 'Sysbet',
            login: login,
            password: senha
        }
    }).then((response) =>{
        const token_jwt = response.body.token_jwt;
        // Retorna o token JWT para que ele possa ser usado posteriormente
        return token_jwt;
    });
});

Cypress.Commands.add('loginAndGetToken', () => {
    cy.loginAdmViaApi('sysbet_adm', 'mnbvcxz1').then((token) => {
        // Define o alias @tokenAdm com o token retornado
        cy.wrap(token).as('tokenAdm');
        // Armazena o token retornado
        Cypress.env('authToken', token);
    });
});
