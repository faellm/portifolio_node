const express = require('express');
const app = express();
const path = require('path');

// Definindo a rota para a página inicial
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Servindo arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Iniciando o servidor na porta 3000 (ou outra definida pela variável de ambiente PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
