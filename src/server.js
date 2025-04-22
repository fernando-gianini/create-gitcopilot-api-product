// Importando as dependências
const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('joi');

// Inicializando o app Express
const app = express();
const PORT = 3000;

// Middleware para processar JSON
app.use(bodyParser.json());

// Simulando um banco de dados em memória
let produtos = [];
let idCounter = 1;

// Validação de entrada para criação e edição de produtos
const produtoSchema = Joi.object({
  nome: Joi.string().min(3).required().messages({
    'string.empty': 'O campo "nome" é obrigatório.',
    'string.min': 'O campo "nome" deve ter pelo menos 3 caracteres.',
  }),
  preco: Joi.number().positive().required().messages({
    'number.base': 'O campo "preço" deve ser um número.',
    'number.positive': 'O campo "preço" deve ser maior que zero.',
  }),
  descricao: Joi.string().optional(),
});

// Endpoint para criar um novo produto
app.post('/produtos', (req, res) => {
  const { error, value } = produtoSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ erro: error.details[0].message });
  }

  const novoProduto = {
    id: idCounter++,
    ...value,
  };

  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

// Endpoint para listar todos os produtos
app.get('/produtos', (req, res) => {
  res.json(produtos);
});

// Endpoint para buscar um produto por ID
app.get('/produtos/:id', (req, res) => {
  const produto = produtos.find((p) => p.id === parseInt(req.params.id));

  if (!produto) {
    return res.status(404).json({ erro: 'Produto não encontrado.' });
  }

  res.json(produto);
});

// Endpoint para editar um produto existente
app.put('/produtos/:id', (req, res) => {
  const produto = produtos.find((p) => p.id === parseInt(req.params.id));

  if (!produto) {
    return res.status(404).json({ erro: 'Produto não encontrado.' });
  }

  const { error, value } = produtoSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ erro: error.details[0].message });
  }

  Object.assign(produto, value);
  res.json(produto);
});

// Endpoint para deletar um produto
app.delete('/produtos/:id', (req, res) => {
  const index = produtos.findIndex((p) => p.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ erro: 'Produto não encontrado.' });
  }

  produtos.splice(index, 1);
  res.status(204).send();
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Exportando o app para ser usado em outro arquivo
module.exports = app;

