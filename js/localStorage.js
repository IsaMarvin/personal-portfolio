const form = document.getElementById('contact-form');
const inputs = form.querySelectorAll('.input');

function loadFormData() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    inputs.forEach((input) => {
      input.value = formData[input.name] || '';
    });
  }
}

function saveFormData() {
  const formData = {};
  inputs.forEach((input) => {
    formData[input.name] = input.value;
  });
  localStorage.setItem('formData', JSON.stringify(formData));
}

form.addEventListener('input', saveFormData);

loadFormData();
