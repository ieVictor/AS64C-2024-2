// Aula 6 - Arrays

// Exemplo
const frutas = ["maça", "banana", "laranja"];

// Índices: [0, 1, 2]
// Valores: ["maçã", "banana", "laranja"]
console.log(frutas[2])

const numeros = [1, 2, 3, 4, 5]

console.log(numeros)
console.log(numeros[3])

// Adicionando elementos

// push adiciona o elemento no fim do array
numeros.push(6)
console.log(numeros)

// unshift adiciona o elemento no começo do array
numeros.unshift(0)
console.log(numeros)

// Removendo elementos

// pop remove o elemento no fim do array
numeros.pop()
console.log(numeros)

// shift remove o elemento no começo do array
numeros.shift()
console.log(numeros)

// Métodos úteis: map, filter, reduce

// Map: Percorre o array e retorna um array com a mesma quantia de elementos
const dobrados = numeros.map(numero => numero * 2)
console.log(dobrados)

numeros.map(numero => console.log(numero))

// Filter: retorna um array com a mesma quantia de elementos ou menos, retorna os elementos que atendem a condição
const maiorQue2 = numeros.filter(numero => numero > 2)
console.log(maiorQue2)

// Reduce: reduz o array a um único valor que é acumulado de acordo com a condição, pode passar o valor inicial do acumulador
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0)
console.log(soma)

// Atividade prática: Criar um array de objetos chamado produtos, cada produto tem nome e preco. Filtrar o array para os 
// produtos que possuem preco maior que 100
const produtos = [
  { nome: "Notebook", preco: 3000 },
  { nome: "laranja", preco: 10 },
  { nome: "bola", preco: 150 },
  { nome: "bala", preco: 2 }
]

const produtosFiltrados = produtos.filter(produto => produto.preco > 100)

console.log(produtosFiltrados)