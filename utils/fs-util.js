const fs = require('fs/promises');

const readFile = async () => {
  const fileContent = await fs.readFile('./estoque.json', 'utf-8');
  return JSON.parse(fileContent)
}

const createBook = (newBook) => fs.writeFile('./estoque.json', JSON.stringify(newBook))

module.exports = {
  readFile,
  createBook,
}