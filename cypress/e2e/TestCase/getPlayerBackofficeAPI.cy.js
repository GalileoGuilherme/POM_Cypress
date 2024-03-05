/// <reference types="cypress" />

describe('getPlayer - API backOffice', () => {
    
    beforeEach(() =>{
        cy.loginAdmViaApi('sysbet_adm', 'mnbvcxz1')
    })

    it ('Deve retornar o player com login "alienmb"',  () => {
        cy.get('@tokenAdm').then(token_jwt =>{
            cy.log("Buscando pelo id 719464, deve pertencer ao login alienmb")
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
                expect(response.status).be.eq(200)
                expect(response.body.dados.login).be.eq("alienmb")
            })
        })
        
    })

    it ('Deve retornar player não encontrado',  () =>{
        cy.get('@tokenAdm').then(token_jwt => {
            cy.log("Buscando por um id vazio, não deve encontrar nenhum player")
            cy.request({
                failOnStatusCode: false,
                method: 'POST',
                url: 'https://apidev.sga.bet/administrator/players/getPlayer',
                headers: {
                    'Application-Authorization' : token_jwt,
                    'x-api-key': '02ff96c8f50ce6a488812146d448a04b2e2358dd45d0dbb59824'
                },
                form: true,
                body: {
                    id_user: ""
                }
            }).then(  (response) =>{
                expect(response.status).be.eq(400)
                expect(response.body.messages.error).be.eq("Nenhum jogador encontrado!")
            })
        })
    })
})