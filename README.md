# **Projeto de Testes Automatizados com Cypress**

Este repositório contém testes automatizados utilizando o framework **Cypress**. Os testes incluem validação de **endpoints de API** e testes de **frontend (web)**.

## **Estrutura do Projeto**

A estrutura do projeto é a seguinte:

```
├── cypress/
│   ├── e2e/
│   │   └── web/
│   │       └── login_web.cy.js    # Testes de login no frontend
│   ├── api/
│   │   └── swagger.cy.js          # Testes de API utilizando o Swagger
├── cypress.json                   # Configuração do Cypress
├── package.json                   # Dependências do projeto
├── README.md                      # Este arquivo
```

---

## **Pré-requisitos**

Para executar este projeto, você precisará de:

- **Node.js** (Recomendado versão 16 ou superior)
- **npm** ou **yarn** para gerenciar dependências

### **Instalando o Cypress**

1. **Clone o repositório**

   Se você ainda não clonou o repositório, use o comando abaixo:

   ```bash
   git clone <[url_do_repositório](https://github.com/AmandaSil/nttdata-cypress-tests.git)>
   ```

2. **Instale as dependências do projeto**

   Navegue até o diretório do projeto e instale as dependências usando **npm** ou **yarn**.

   Com **npm**:
   ```bash
   npm install
   ```

   Com **yarn**:
   ```bash
   yarn install
   ```

---

## **Configuração do Cypress**

O Cypress possui um arquivo de configuração padrão `cypress.json`, onde você pode ajustar variáveis de ambiente ou configurações de execução. No momento, a configuração está básica, mas você pode expandir conforme necessário.

---

## **Estrutura de Testes**

### **Testes de API**

Os testes de API estão localizados na pasta `cypress/api/`, e o arquivo principal é o `swagger.cy.js`. Estes testes validam endpoints de API do servidor utilizando o **Swagger UI** como referência.

#### **Exemplo de Teste de API:**
```javascript
describe('Testes de API - Buscar Carrinho por ID', () => {
  it('Deve buscar o carrinho com o ID fornecido com sucesso', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/carrinhos/qbMqntef4iTOwWfg', 
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('_id', 'qbMqntef4iTOwWfg');
    });
  });
});
```

### **Testes de Frontend (Web)**

Os testes de frontend estão localizados na pasta `cypress/e2e/web/`, e o arquivo principal é o `login_web.cy.js`. Estes testes validam interações no frontend, como o processo de login.

#### **Exemplo de Teste de Login:**
```javascript
describe('Testes de Login - E2E', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('/login'); // URL da aplicação
    cy.get('[data-testid="email"]').type('testegeraisps@gmail.com');
    cy.get('[data-testid="senha"]').type('T@123456!');
    cy.get('[data-testid="entrar"]').click();
    cy.url().should('include', '/home');
    cy.get('.username').should('be.visible').and('contain', 'Bem-vindo');
  });
});
```

---

## **Rodando os Testes**

### **Rodar Testes com Cypress em Modo Interativo**

Se você deseja rodar os testes com a interface gráfica do Cypress, use o comando abaixo:

```bash
npx cypress open
```

Este comando abrirá o Cypress no modo interativo, onde você poderá selecionar os testes que deseja rodar.

### **Rodar Testes em Modo Headless**

Se você deseja rodar os testes sem a interface gráfica, use o comando abaixo para rodar todos os testes em modo headless:

```bash
npx cypress run
```

---

## **Comandos Úteis**

- **Rodar Testes de Frontend (Web)**:
  ```bash
  npx cypress run --spec "cypress/e2e/web/login_web.cy.js"
  ```

- **Rodar Testes de API**:
  ```bash
  npx cypress run --spec "cypress/api/swagger.cy.js"
  ```

- **Rodar Testes Específicos**:
  Para rodar um teste específico, use o caminho completo do arquivo no comando acima.

---

## **Adicionando Novos Testes**

Para adicionar novos testes, basta criar novos arquivos de teste dentro das pastas `cypress/e2e/` para frontend ou `cypress/api/` para testes de API. Lembre-se de seguir a convenção de nomeação e garantir que seus testes sejam claros e organizados.

---

## **Contribuições**

Se você deseja contribuir com este projeto, fique à vontade para fazer um fork e enviar pull requests. Qualquer melhoria será bem-vinda!

---

## **Licença**

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

### **Conclusão**

Esse **README.md** fornece uma visão geral completa sobre o uso do Cypress para rodar testes de **API** e **frontend (web)**. 
