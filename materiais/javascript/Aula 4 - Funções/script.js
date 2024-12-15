// Aula 4 - Funções

// Extrutura básica função
function saudacao () {
  console.log("Olá, seja bem-vindo")
}

// Chama a função para ser executada
saudacao();

// Função com parâmetros
function soma (a, b) {
  return a + b;
}

const somado = soma(2, 4)
console.log(somado)

// Arrow functions
const soma2 = (a, b) => {
  return a + b;
}

const somado2 = soma2(2, 4)
console.log(somado2)

// *****************************

// Escopo

//  Escopo global
let mensagem = "Global";

function exibirMensagem () {
  console.log(mensagem)
}

exibirMensagem()

// Escopo local
function exemplo() {
  let variavelExemplo = 'Exemplo'
  console.log(variavelExemplo)
}

exemplo()
// console.log(variavelExemplo)

// Escopo em bloco
if(true) {
  let exemploBloco = "Bloco"
  console.log(exemploBloco)
}

// console.log(exemploBloco)

// Atividade prática
const geraSaudacao = (nome) => {
  return `Olá ${nome}, seja bem-vindo.`;
}

console.log(geraSaudacao('Ana'))