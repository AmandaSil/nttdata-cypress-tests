/// <reference types="cypress" />

describe('Testes de Login - FrontEnd', () => {

    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Deve fazer login com credenciais válidas', () => {
  
      cy.get('[data-testid="email"]').type('testegeraisps@gmail.com');
      cy.get('[data-testid="senha"]').type('T@123456');
      cy.get('[data-testid="entrar"]').click();
  
      cy.url().should('include', '/admin/home'); 
      cy.get('.jumbotron h1') 
        .invoke('text')
        .then((titulo) => {
          expect(titulo).to.match(/^Bem Vindo .+/); 
        });
  });
  
  
    it('Não deve permitir login com senha incorreta', () => {
        cy.get('[data-testid="email"]').type('testegeraisps@gmail.com');
        cy.get('[data-testid="senha"]').type('T@1234');
        cy.get('[data-testid="entrar"]').click();
        
        cy.contains('Email e/ou senha inválidos').should('be.visible'); 
    });
  
    it('Não deve permitir login com e-mail inválido', () => {
        cy.get('[data-testid="email"]').type('teste@gmail.com');
        cy.get('[data-testid="senha"]').type('T@123456');
        cy.get('[data-testid="entrar"]').click();
        
        cy.contains('Email e/ou senha inválidos').should('be.visible'); 
    });
  
  });
    