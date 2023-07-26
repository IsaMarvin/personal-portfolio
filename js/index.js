const hamburgerIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.cancel');
const navLinks = document.querySelector('.nav');

function toggleMobileMenu() {
  navLinks.classList.toggle('active');
  hamburgerIcon.style.display = navLinks.classList.contains('active')
    ? 'none'
    : 'block';
}

function closeMobileMenu() {
  navLinks.classList.remove('active');
  hamburgerIcon.style.display = 'block';
  closeIcon.style.display = 'none';
}

hamburgerIcon.addEventListener('click', toggleMobileMenu);
closeIcon.addEventListener('click', closeMobileMenu);

const navLinksList = document.querySelectorAll('.nav li a');
navLinksList.forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});
