// Aula 8 - Validação de Formulário

// Seleção dos elementos
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const form = document.querySelector("form")

const emailError = document.querySelector("#emailError")
const passwordError = document.querySelector("#passwordError")

// Adição de evento de submit ao formulário
form.addEventListener("submit", (event) => {
  // Cancela o recarregamento da página(evento padrão do submit)
  event.preventDefault()

  // Limpa os campos de erro ao enviar o formulário
  emailError.textContent = ''
  passwordError.textContent = ''

  // Validações

  // Verifica se o camo email está vazio e cria mensagem de erro
  if(email.value === '') {
    // Adiciona o texto da mensagem de erro e a cor vermelha ao texto
    emailError.textContent = "Email não informado"
    emailError.style.color = "red"

    // Verifica se o campo email inclui o @
  } else if(!email.value.includes('@')){
    // Adiciona o texto da mensagem de erro e a cor vermelha ao texto
    emailError.textContent = "Email do formato incorreto"
    emailError.style.color = 'red'

    // Verifica se o campo password está vazio
  } else if(password.value === '') {
    // Adiciona o texto da mensagem de erro e a cor vermelha ao texto
    passwordError.textContent = "Password não informada"
    passwordError.style.color = 'red'

    // Verifica se o campo password possui pelo menos 3 caracteres
  } else if(password.value.length < 3){
    passwordError.textContent = "Senha precisa ter mais que 3 caracteres"
    passwordError.style.color = 'red'

    // Sucesso no envio do formulário após todas as verificações
  } else {
    alert("Formulário enviado com sucesso")
  }

  // Limpa os campos dos inputs
  email.value = ''
  password.value = ''
})