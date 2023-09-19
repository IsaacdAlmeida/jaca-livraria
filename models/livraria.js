class Carrinho {
  constructor() {
    this.itens = [];
  }

  adicionarLivro(livro, quantidade) {
    this.itens.push({ livro, quantidade });
  }

  removerLivro(livro, quantidade) {
    const index = this.itens.findIndex((item) => item.livro.id === livro.id);

    if (index !== -1) {
      if (this.itens[index].quantidade > quantidade) {
        this.itens[index].quantidade -= quantidade;
      } else {
        this.itens.splice(index, 1);
      }
    }
  }

  imprimirCupom() {
    let total = 0;
    const cupom = [];

    for (const item of this.itens) {
      const { livro, quantidade } = item;
      const subtotal = livro.preco * quantidade;
      total += subtotal;

      cupom.push(`${quantidade}x ${livro.nome}: R$ ${subtotal.toFixed(2)}`);
    }

    const cupomTexto = cupom.join('\n');
    console.log(`Cupom de Compra:\n${cupomTexto}\nTotal: R$ ${total.toFixed(2)}`);
    return {
      cupom: cupomTexto,
      total,
    }
  }
}

class Devolucao {
  constructor() {
    this.livrosDevolvidos = [];
  }

  adicionarLivroDevolvido(livro, quantidade) {
    this.livrosDevolvidos.push({ livro, quantidade });
  }

}

class RelatorioEstoque {
  constructor() {
    this.livros = [];
  }

  adicionarLivro(livro) {
    this.livros.push(livro);
  }

  imprimirRelatorioTotal() {
  }

  imprimirRelatorioTitulo(titulo) {
  }
}
