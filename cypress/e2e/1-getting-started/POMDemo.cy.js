/// <reference types="cypress" />

import LoginPage from "./PageObject/LoginPage";

context('Funcionalidade Login', () => {
    
    const login = new LoginPage();
    
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
