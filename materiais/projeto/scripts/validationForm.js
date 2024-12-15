const form = document.getElementById('newsletter-form');
const input = document.getElementById('newsletter-input');
const button = document.getElementById('newsletter-button');

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
  const isValid = regex.test(email);

  if (isValid) {
    input.style.color = 'black';
    button.disabled = false;
    return isValid;
  }

  button.disabled = true;
  input.style.color = 'red';
}

input.addEventListener('change', () => validateEmail(input.value.trim()));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Enviado com sucesso! ', input.value.trim());
});
