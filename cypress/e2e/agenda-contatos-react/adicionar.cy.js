// autocomplete cypress
/// <reference types="cypress" /> 

describe('Testes para a agenda de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/') // visitar pagina antes de cada teste
  })
  
  it('Deve adicionar um contato', () => {
    cy.get('[type="text"]').type('Gustavo Kasaki{enter}') // inserir nome
    cy.get('[type="email"]').type('teste@gmail.com{enter}') // inserir nome
    cy.get('[type="tel"]').type('0123456789') // inserir nome
    cy.get('.adicionar').click() // clicar no botão adicionar
    cy.contains('Gustavo Kasaki') // verifica se o contato foi criado
  })

  it('Deve alterar um contato', () => {
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click() // clica em editar

    // alterar nome
    cy.get('[type="text"]').clear()
    cy.get('[type="text"]').type('Teste teste')

    // alterar email
    cy.get('[type="email"]').clear()
    cy.get('[type="email"]').type('teste2@gmail.com')

    // alterar telefone
    cy.get('[type="tel"]').clear()
    cy.get('[type="tel"]').type('0123456789')

    cy.get('.alterar').click() // clica em salvar
    cy.contains('Teste teste') // verifica se o contato foi alterado
  })

  it('Deve excluir um contato', () => {
    cy.get(':nth-child(2) > .sc-gueYoa > .delete').click() // clica em Deletar
    cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('not.have.text', 'Teste teste') // verifica se o contato foi excluido
  })
})