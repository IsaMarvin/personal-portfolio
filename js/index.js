import projects from './data.js';

const hamburgerIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.cancel');
const navLinks = document.querySelector('.nav');
const works = document.querySelector('#works');
const ul = document.querySelector('#cards');

function toggleMobileMenu() {
  navLinks.classList.toggle('active');
  hamburgerIcon.style.display = navLinks.classList.contains('active') ? 'none' : 'block';
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

function createModalContent({
  name, image, tags, info, languages,
}) {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';

  const modalInfo = document.createElement('div');
  modalInfo.className = 'modal-info';

  const modalTitle = document.createElement('div');
  modalTitle.className = 'modal-title';

  const modalClose = document.createElement('div');
  modalClose.className = 'modal-close';

  const modalHeading = document.createElement('h3');
  modalHeading.className = 'modal-heading';
  modalHeading.textContent = name;

  const cancelModal = document.createElement('img');
  cancelModal.src = '../images/Icon - Cancel.svg';

  cancelModal.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
  });

  const modalImg = document.createElement('img');
  modalImg.className = 'modal-img';
  modalImg.src = image;

  const modalTags = document.createElement('ul');
  modalTags.className = 'card__tags';
  tags.forEach((tag) => {
    const li = document.createElement('li');
    li.className = 'card__items';
    li.textContent = tag;
    modalTags.appendChild(li);
  });

  const wrap = document.createElement('div');
  wrap.className = 'wrap';
  const modalDescription = document.createElement('p');
  modalDescription.className = 'modal-description';
  modalDescription.textContent = info;

  const left = document.createElement('div');
  left.className = 'left';

  const modalLang = document.createElement('ul');
  modalLang.className = 'card__lan';
  languages.forEach((language) => {
    const li = document.createElement('li');
    li.className = 'card__lists';
    li.textContent = language;
    modalLang.appendChild(li);
  });

  const modalBtns = document.createElement('div');
  modalBtns.className = 'btns';

  const liveBtn = document.createElement('button');
  liveBtn.textContent = 'See live';
  liveBtn.classList.add('modal-btn', 'card__button');

  const liveImg = document.createElement('img');
  liveImg.src = '../images/live.svg';
  liveImg.alt = 'see the project in action';

  liveBtn.appendChild(liveImg);
  const sourceBtn = document.createElement('button');
  sourceBtn.textContent = 'See source';
  sourceBtn.classList.add('modal-btn', 'card__button');

  const sourceImg = document.createElement('img');
  sourceImg.src = '../images/git.svg';
  sourceImg.alt = 'see the project in action';
  sourceBtn.appendChild(sourceImg);

  document.body.appendChild(modalOverlay);
  modalOverlay.appendChild(modalInfo);
  modalInfo.appendChild(modalTitle);
  modalTitle.appendChild(modalClose);
  modalClose.appendChild(modalHeading);
  modalClose.appendChild(cancelModal);
  modalTitle.appendChild(modalTags);
  modalInfo.appendChild(modalImg);
  modalInfo.appendChild(wrap);
  wrap.appendChild(modalDescription);
  wrap.appendChild(left);
  left.appendChild(modalLang);
  left.appendChild(modalBtns);
  modalBtns.appendChild(liveBtn);
  modalBtns.appendChild(sourceBtn);
}

function createCardElement({
  name, image, tags, description, languages, info,
}) {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.className = 'card-img';
  img.src = image;

  const cardInfo = document.createElement('div');
  cardInfo.className = 'card-info';

  const cardTitle = document.createElement('div');
  cardTitle.className = 'card-title';

  const heading = document.createElement('h3');
  heading.textContent = name;

  const cardTags = document.createElement('ul');
  cardTags.className = 'card__tags';
  tags.forEach((tag) => {
    const li = document.createElement('li');
    li.className = 'card__items';
    li.textContent = tag;
    cardTags.appendChild(li);
  });

  const cardLanguages = document.createElement('ul');
  cardLanguages.className = 'card__lan';
  languages.forEach((language) => {
    const li = document.createElement('li');
    li.className = 'card__lists';
    li.textContent = language;
    cardLanguages.appendChild(li);
  });

  const cardDescription = document.createElement('p');
  cardDescription.className = 'card-description';
  cardDescription.textContent = description;

  const button = document.createElement('button');
  button.className = 'card__button';
  button.textContent = 'See Projects';

  button.addEventListener('click', () => {
    const project = {
      name,
      image,
      tags,
      description,
      languages,
      info,
    };
    createModalContent(project);
  });

  card.appendChild(img);
  cardInfo.appendChild(cardTitle);
  cardTitle.appendChild(heading);
  cardInfo.appendChild(cardDescription);
  cardTitle.appendChild(cardTags);
  cardInfo.appendChild(cardLanguages);
  cardInfo.appendChild(button);
  card.appendChild(cardInfo);

  return card;
}

function createCards(projects) {
  const cardElements = projects.map(createCardElement);
  const fragment = document.createDocumentFragment();
  cardElements.forEach((cardElement) => {
    const liElement = document.createElement('li');
    liElement.appendChild(cardElement);
    fragment.appendChild(liElement);
  });
  ul.appendChild(fragment);
}

function cards() {
  createCards(projects);
  works.appendChild(ul);
}

cards();
