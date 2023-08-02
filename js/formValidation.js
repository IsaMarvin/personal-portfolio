const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  const emailValue = emailInput.value;
  const lowercaseEmailValue = emailValue.toLowerCase();

  if (emailValue !== lowercaseEmailValue) {
    event.preventDefault();
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Email must be in lower case.';
  } else {
    errorMessage.textContent = '';
  }
});
