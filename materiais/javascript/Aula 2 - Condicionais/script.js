// Aula 2 - Condicionais

let numero = 10

// Estrutura condicional utilizando if, else e else if
if(numero > 4) {
  console.log("Número maior que 4")
} else if(numero > 2){
  console.log("Número maior que 2 e menor que 4")
} else {
  console.log("Número menor que 2")
}

// Entrada de dados via prompt
let idade = prompt("Informe sua idade");

// Uso de condicional para classificar pessoa pela idade
if(idade < 13) {
  console.log("Criança")
} else if(idade < 18) {
  console.log("Adolescente")
} else {
  console.log("Adulto")
}

// Operador ternário
console.log(idade > 18 ? "Maior de idade" : "Menor de idade")