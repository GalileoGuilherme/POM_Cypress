/// <reference types="cypress" />

import LoginPage from "./PageObject/LoginPage";
const login = new LoginPage();

context('Funcionalidade Login', () => {

    beforeEach(() => {
        login.navigate();
    });
    
    it('Login com credenciais válidas', () => {
        login.enterEmail('admin@yourstore.com');
        login.enterPassword('admin');
        login.submit();
        cy.url().should('be.equal', 'https://admin-demo.nopcommerce.com/admin/');
    });
    
});
