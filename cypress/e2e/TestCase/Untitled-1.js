/// <reference types="cypress" />

describe('getPlayer - API backOffice', () => {
    let token_jwt = '' 
    it ('Deve retornar o player com login "alienmb', () => {
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
        }).then(async (response) =>{
            cy.log(response.body.token_jwt)
            token_jwt = response.body.token_jwt
            cy.log("oioioioi")
            cy.log("token_jwt", token_jwt)

            cy.request({
                method: 'POST',
                url: 'https://apidev.sga.bet/administrator/players/getPlayer',
                headers: {
                    'Application-Authorization' : token_jwt,
                    'x-api-key': '02ff96c8f50ce6a488812146d448a04b2e2358dd45d0dbb59824'
                },
                form: true,
                body: {
                    id_user: "719464"
                }
            }).then((response) =>{
                expect(response.body.dados.login).be.eq("alienmb")
            })
            // return response.body.token_jwt

            return token_jwt
        }).then((a) => {
            cy.log(a)
        })
    })
})