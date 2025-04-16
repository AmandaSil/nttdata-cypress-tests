/// <reference types="cypress" />

describe('Testes de API - Listar Usuários, Produtos e Carrinho', () => {


    const apiUrl = 'https://serverest.dev';
  
  
    it('Deve listar todos os usuários cadastrados com sucesso', () => {
      cy.request({
        method: 'GET',
        url: `${apiUrl}/usuarios`, 
      }).then((response) => {
        expect(response.status).to.eq(200); 
        expect(response.body).to.have.property('usuarios').and.to.be.an('array');
        expect(response.body.usuarios.length).to.be.gte(0);
        
        cy.log(`Total de usuários cadastrados: ${response.body.usuarios.length}`);
      });
    });
    
    it('Deve listar todos os produtos cadastrados com sucesso', () => {
      cy.request({
        method: 'GET',
        url: `${apiUrl}/produtos`, 
      }).then((response) => {
        expect(response.status).to.eq(200); 
        expect(response.body).to.have.property('produtos').and.to.be.an('array');
        expect(response.body.produtos.length).to.be.gte(0);
        
        cy.log(`Total de produtos cadastrados: ${response.body.produtos.length}`);
      });
    });
    
    it('Deve listar todos os carrinhos cadastrados com sucesso', () => {
      cy.request({
        method: 'GET',
        url: `${apiUrl}/carrinhos`, 
      }).then((response) => {
        expect(response.status).to.eq(200); 
        expect(response.body).to.have.property('carrinhos').and.to.be.an('array');
        expect(response.body.carrinhos.length).to.be.gte(0);
        
        cy.log(`Total de carrinhos cadastrados: ${response.body.carrinhos.length}`);
      });
    });
    
   
  })
  
  
  
  
  
  
  
  