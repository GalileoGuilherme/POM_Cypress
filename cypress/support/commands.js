// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginAdmViaApi', (login, senha) => {
    let token_jwt = ''
    cy.request({
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
        token_jwt = response.body.token_jwt
        cy.wrap(token_jwt).as('tokenAdm')
    })
})