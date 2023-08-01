import projects from './data.js';

const body = document.querySelector('body');
const hamburgerButton = document.querySelector('.hamburger-button');
const closeButton = document.querySelector('.close-button');
const navLinks = document.querySelector('.nav');

const works = document.querySelector('#works');
const ul = document.getElementById('cards');

let evenCounter = 0;
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
function createModalContent({
  name, image, tags, info, languages, sourceLink, liveVersionLink,
  liveBtnTxt, sourceBtnTxt, iconCancel, LiveImg, SourceImg,
}) {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';

  const modalInfo = document.createElement('div');
  modalInfo.className = 'modal-info';

  body.appendChild(modalOverlay);
  modalOverlay.appendChild(modalInfo);
  body.style.overflow = 'hidden';

  const modalTitle = document.createElement('div');
  modalTitle.className = 'modal-title';

  const modalClose = document.createElement('div');
  modalClose.className = 'modal-close';

  const modalHeading = document.createElement('h3');
  modalHeading.className = 'modal-heading';
  modalHeading.textContent = name;

  const cancelModal = document.createElement('img');
  cancelModal.src = iconCancel;

  cancelModal.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    body.style.overflow = 'auto';
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

  const hr = document.createElement('hr');
  hr.className = 'hr';

  const modalBtns = document.createElement('div');
  modalBtns.className = 'btns';

  const liveBtnLink = document.createElement('a');
  liveBtnLink.href = liveVersionLink;

  const liveBtn = document.createElement('button');
  liveBtn.textContent = liveBtnTxt;
  liveBtn.classList.add('modal-btn', 'card__button');

  const liveImg = document.createElement('img');
  liveImg.src = LiveImg;
  liveImg.alt = 'see the project in action';
  liveImg.className = 'hover';

  liveBtn.appendChild(liveImg);
  liveBtn.appendChild(liveBtnLink);

  const sourceBtn = document.createElement('button');
  sourceBtn.textContent = sourceBtnTxt;
  sourceBtn.classList.add('modal-btn', 'card__button');

  const sourceImg = document.createElement('img');
  sourceImg.src = SourceImg;
  sourceImg.alt = 'see the project in action';
  sourceImg.className = 'hover';
  const sourceBtnLink = document.createElement('a');
  sourceBtnLink.href = sourceLink;

  sourceBtn.appendChild(sourceImg);
  sourceBtn.appendChild(sourceBtnLink);

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
  left.appendChild(hr);
  left.appendChild(modalBtns);
  modalBtns.appendChild(liveBtn);
  modalBtns.appendChild(sourceBtn);
}

function createCardElement({
  name,
  image,
  tags,
  description,
  languages,
  info,
  sourceLink,
  liveVersionLink,
  liveBtnTxt,
  sourceBtnTxt,
  iconCancel,
  LiveImg,
  SourceImg,
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
      sourceLink,
      liveVersionLink,
      liveBtnTxt,
      sourceBtnTxt,
      iconCancel,
      LiveImg,
      SourceImg,
    };
    createModalContent(project);
  });

  if (evenCounter % 2 !== 0) {
    card.classList.add('even-card');
  }

  card.appendChild(img);
  cardInfo.appendChild(cardTitle);
  cardTitle.appendChild(heading);
  cardInfo.appendChild(cardDescription);
  cardTitle.appendChild(cardTags);
  cardInfo.appendChild(cardLanguages);
  cardInfo.appendChild(button);
  card.appendChild(cardInfo);

  evenCounter += 1;

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
