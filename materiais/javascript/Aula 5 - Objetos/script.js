// Aula 5 - Objetos

// Estrutura de um objeto
const objeto = {
  chave1: 'valor1',
  chave2: 'valor2',
  chave3: 'valor3'
}

// Construindo um objeto
const pessoa = {
  nome: 'Ana',
  idade: 21,
  saudacao: function () {
    console.log(`Olá, meu nomé é ${this.nome} e tenho ${this.idade} anos.`)
  }
}

// Acessando propriedades do objeto
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)

// Atribuindo valores a propriedades
pessoa.nome = 'Gabi'
console.log(pessoa.nome)

// Executando função da propriedade
pessoa.saudacao()

// Métodos úteis para objetos
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

// Atividade prática
const produto = {
  nome: "Notebook",
  preço: 3000,
  calculaTotal: function(quantidade) {
    return this.preço * quantidade;
  }
}

console.log(produto)
console.log(produto.preço)
console.log(produto.calculaTotal(3))