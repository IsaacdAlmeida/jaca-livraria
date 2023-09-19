const  {Livro } = require('./models/Livro');
const { readFile, createBook } = require('./utils/fs-util');


const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();
app.use(bodyParser.json());

app.get('/livro', async (_req, res) => {
  const livroArray = await readFile();  
  return res.status(200).json(livroArray);
});

app.post('/livro', async (req, res) => {
  const { nome, autor, editora, preco, estoque } = req.body;

  const livro = new Livro(nome, autor, editora, preco, estoque);
  const livroArray = await readFile();
  livroArray.push(livro);
  await createBook(livroArray);

  return res.status(201).json(livro);
});

app.get('/livro/titulo/:titulo', async (req, res) => {
  const { titulo } = req.params;
  const livroArray = await readFile();
  
  const livrosEncontrados = livroArray.filter((livro) => livro.nome.toLowerCase().includes(titulo.toLowerCase()));

  return res.status(200).json(livrosEncontrados);
});




app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}`);
});

