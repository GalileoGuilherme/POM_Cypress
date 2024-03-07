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
    }).then((response) => {
        const token_jwt = response.body.token_jwt;
        if (!token_jwt) {
            throw new Error('Token JWT não encontrado');
        }
        return token_jwt;
    });
});

Cypress.Commands.add('loginAndGetToken', () => {
    cy.loginAdmViaApi('sysbet_adm', 'mnbvcxz1').then((token) => {
        // Verifica se o token foi obtido corretamente
        if (!token) {
            throw new Error('Token JWT não encontrado');
        }
        // Define o alias @tokenAdm com o token retornado
        cy.wrap(token).as('tokenAdm');
        // Armazena o token retornado no localStorage
        localStorage.setItem('token_jwt', token);
        // Armazena o token retornado no ambiente do Cypress
        Cypress.env('authToken', token);
    });
});
