// habilitar o autocomplete para o cypress
/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        //acessa a pagina
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve encaminhar o usuário à pagina de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click() // acessa a página de candidatura
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('Deve preencher o formulário e enviar', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Gustavo Kasaki')// digitação em input
        cy.get('input[name="email"]').type('gmkasaki@gmail.com')// digitação em input
        cy.get('input[name="telefone"]').type('19997496670')// digitação em input
        cy.get('input[name="endereco"]').type('Avenida Recife, 38')// digitação em input
        cy.get('#linux').check()// seleção em checkbox
        cy.get('select[name="escolaridade"]').select('bacharelado')// seleção em caixa suspensa
        cy.get('.Aplicacao_button__tw2AE').click() // clica no botão 'Enviar candidatura'
        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura') // verifica se o alerta foi mostrado com o texto correto
        })
        cy.screenshot('tela-inscricao-preenchida')
    })
})