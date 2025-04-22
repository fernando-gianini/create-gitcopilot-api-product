// Importando o servidor
const app = require('./src/server');

// Configurando a porta
const PORT = 3000;

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});