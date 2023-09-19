const { v4: uuidv4 } = require('uuid');

class Livro {
  constructor(nome, autor, editora, preco, estoque) {
    this.nome = nome;
    this.id = uuidv4();
    this.autor = autor;
    this.editora = editora;
    this.preco = preco;
    this.estoque = estoque;
  }

  alterarNome(novoNome) {
    this.nome = novoNome;
  }

  alterarAutor(novoAutor) {
    this.autor = novoAutor;
  }

  alterarEditora(novaEditora) {
    this.editora = novaEditora;
  }

  alterarpreco(novoPreco) {
    this.preco = novoPreco;
  }

  alterarEstoque(novoEstoque) {
    this.estoque = novoEstoque;
  }
}

module.exports = {
  Livro
};
