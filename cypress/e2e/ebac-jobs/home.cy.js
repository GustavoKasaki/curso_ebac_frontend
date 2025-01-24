// habilitar o autocomplete para o cypress
/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        //acessa a pagina
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve renderizar 04 vagas', () => {
        //faz a verificação
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })

    it('Deve filtar por fullstack', () => {
        //digita e pressiona enter
        // cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}')

        //digita e clica no botão
        cy.get('.FormVagas_campo__E1ppF').type('fullstack')
        cy.get('button[type="submit"]').click()
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    })
})