const hamburgerButton = document.querySelector('.hamburger-button');
const closeButton = document.querySelector('.close-button');
const navLinks = document.querySelector('.nav');

function toggleMobileMenu() {
  navLinks.classList.toggle('active');
}

function closeMobileMenu() {
  navLinks.classList.remove('active');
}

hamburgerButton.addEventListener('click', toggleMobileMenu);
closeButton.addEventListener('click', closeMobileMenu);

const navLinksList = document.querySelectorAll('.nav li a');
navLinksList.forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});

function checkWindowSize() {
  const isDesktopView = window.matchMedia('(min-width: 768px)').matches;
  if (isDesktopView) {
    navLinks.classList.remove('active');
  }
}

checkWindowSize();

window.addEventListener('resize', checkWindowSize);