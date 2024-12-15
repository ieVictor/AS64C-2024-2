// Aula 7 - Manipulação de DOM

// Estrutura HTML

{/* <html>
 <body>
   <h1>Título</h1>
   <p>Parágrafo</p>
 </body>
</html> */}

// Representação do HTML no DOM

// document
// └── html
//     └── body
//         ├── h1
//         └── p

// Seletores 

//    seleciona por id
// document.getElementById("id")

//    seleciona por classe
// document.getElementsByClassName("classe")

//    seleciona por tag
// document.getElementsByTagName("tag")

//    forma mais moderna, pode selecionar de todas as formas
// document.querySelector()

//    forma mais moderna, seleciona todos elementos
// document.querySelectorAll()

//  Exemplos práticos

const titulo = document.getElementById("titulo")
console.log(titulo)

const paragrafo = document.querySelector("#paragrafo");
console.log(paragrafo)

// Acessando propriedade
console.log(titulo.textContent)

// Alterando propriedades
titulo.textContent = 'Texto modificado'

titulo.style.color = 'blue'

// Exemplo de como adicionar eventos
const botao = document.querySelector("#botao")

//    adicionando evento de click ao botão
botao.addEventListener("click", () => {
  titulo.style.color = 'red'
  botao.textContent = 'botão clicado'
})

// Atividade prática: criar 2 botões que alterem o tema da página entre light-mode e dark-mode

// Selecionando os elementos
const claro = document.querySelector("#claro")
const escuro = document.querySelector("#escuro")
const body = document.body

//  Botão do light-mode
claro.addEventListener("click", () => {
  body.style.backgroundColor = 'white'
  body.style.color = 'black'
})

// Botão do dark-mode
escuro.addEventListener("click", () => {
  body.style.backgroundColor = 'black'
  body.style.color = 'white'
})