# API de Gerenciamento de Produtos

## Descrição Geral
A API de Gerenciamento de Produtos é uma solução desenvolvida para facilitar o gerenciamento de produtos em um sistema. Ela permite realizar operações como criação, leitura, atualização e exclusão de produtos (CRUD), além de oferecer endpoints para busca e filtragem de produtos.

## Objetivos
- Fornecer uma interface simples e eficiente para gerenciar produtos.
- Garantir a integridade e segurança dos dados.
- Facilitar a integração com sistemas externos.
- Oferecer suporte a operações básicas e avançadas de gerenciamento de produtos.

## Tecnologias Utilizadas
- **Linguagem:** Node.js
- **Framework:** Express.js
- **Banco de Dados:** MongoDB
- **Autenticação:** JSON Web Tokens (JWT)
- **Documentação:** Swagger
- **Gerenciamento de Dependências:** npm

## Endpoints Principais
### 1. Criar Produto
**POST** `/api/produtos`  
**Exemplo de Requisição:**
```json
{
    "nome": "Notebook",
    "descricao": "Notebook de última geração",
    "preco": 3500.00,
    "estoque": 10
}
```
**Resposta:**
```json
{
    "id": "63f1a2b8e4b0f1a2b8e4b0f1",
    "nome": "Notebook",
    "descricao": "Notebook de última geração",
    "preco": 3500.00,
    "estoque": 10,
    "dataCriacao": "2023-03-01T12:00:00Z"
}
```

### 2. Listar Produtos
**GET** `/api/produtos`  
**Resposta:**
```json
[
    {
        "id": "63f1a2b8e4b0f1a2b8e4b0f1",
        "nome": "Notebook",
        "descricao": "Notebook de última geração",
        "preco": 3500.00,
        "estoque": 10
    },
    {
        "id": "63f1a2b8e4b0f1a2b8e4b0f2",
        "nome": "Mouse",
        "descricao": "Mouse sem fio",
        "preco": 150.00,
        "estoque": 50
    }
]
```

### 3. Atualizar Produto
**PUT** `/api/produtos/{id}`  
**Exemplo de Requisição:**
```json
{
    "nome": "Notebook Gamer",
    "preco": 4500.00
}
```
**Resposta:**
```json
{
    "id": "63f1a2b8e4b0f1a2b8e4b0f1",
    "nome": "Notebook Gamer",
    "descricao": "Notebook de última geração",
    "preco": 4500.00,
    "estoque": 10
}
```

### 4. Deletar Produto
**DELETE** `/api/produtos/{id}`  
**Resposta:**
```json
{
    "mensagem": "Produto deletado com sucesso."
}
```

## Instruções de Instalação
1. Certifique-se de ter o **Node.js** e o **MongoDB** instalados em sua máquina.
2. Clone este repositório:
     ```bash
     git clone https://github.com/fernando-gianini/create-gitcopilot-api-product
     ```
3. Navegue até o diretório do projeto:
     ```bash
     cd seu-repositorio
     ```
4. Instale as dependências:
     ```bash
     npm install
     ```
5. Configure as variáveis de ambiente no arquivo `.env`:
     ```
     PORT=3000
     MONGO_URI=mongodb://localhost:27017/nome-do-banco
     JWT_SECRET=sua-chave-secreta
     ```
6. Inicie o servidor:
     ```bash
     npm start
     ```
7. Acesse a API em `http://localhost:3000`.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

## Desenvolvido por 
Fernando Gianini
