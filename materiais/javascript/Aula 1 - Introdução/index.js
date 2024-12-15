// Aula 1 - Introdução

console.log('olá mundo');

// Tipos de variáveis

const nome = 'Pedro'
let numero = 9

console.log(nome)
console.log(numero)

numero = 8;

console.log(numero)

// Tipos de dados
let verdadeiro = true;

console.log(typeof nome)
console.log(typeof numero)
console.log(typeof verdadeiro)

// Operadores Básicos

//  Operadores aritméticos

console.log(2 + 2)  // + = adição
console.log(4 - 2)  // - = subtração
console.log(2 * 2)  // * = multiplicação
console.log(4 / 2)  // / = divisão
console.log(5 % 2)  // % = resto

//  Operadores de comparação

//  igualdade
console.log(5 == '5');
console.log(5 === '5');

//  diferença
console.log(5 != '5');
console.log(5 !== '5');

//  comparação de valores numéricos
console.log(5 > 10)
console.log(5 < 10)
console.log(5 >= 10)
console.log(5 <= 10)

// Operadores lógicos
const a = true
const b = false
console.log(a || b)
console.log(b || !b)

// Atividade prática

// uso de prompt para receber valores do usuário e armazenar em variáveis
const nomeInformado = prompt("Qual é o seu nome");  
const idade = prompt("Qual a sua idade?");

// concatenar strings da maneira tradicional
console.log("Olá meu nome é "+ nomeInformado + " tenho" + idade + " anos.");    
//  template strings (forma mais moderna)
console.log(`Olá meu nome é ${nomeInformado} tenho ${idade} anos.`);            