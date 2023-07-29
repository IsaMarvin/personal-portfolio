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

const projects = [
  {
    name: 'Tonic',
    image: './images/snapshoot/snapshot_1.png',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'css', 'javaScript'],
    liveVersionLink: '#',
  },
  {
    name: 'Tonic',
    image: './images/snapshoot/snapshot_2.png',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'css', 'javaScript'],
    liveVersionLink: '#',
  },
  {
    name: 'Tonic',
    image: './images/snapshoot/snapshot_1.png',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'css', 'javaScript'],
    liveVersionLink: '#',
  },
  {
    name: 'Tonic',
    image: './images/snapshoot/snapshot_2.png',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'css', 'javaScript'],
    liveVersionLink: '#',
  },
];

const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal-overlay');

const modalContainer = document.createElement('div');
modalContainer.classList.add('modal-container');

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

const closeBtn = document.createElement('span');
closeBtn.classList.add('close-btn');
closeBtn.innerHTML = '&times;';

modalContent.appendChild(closeBtn);

const modalTitle = document.createElement('h2');
modalTitle.classList.add('card-title');
modalContent.appendChild(modalTitle);

const modalImage = document.createElement('img');
modalImage.setAttribute('alt', 'Project Image');
modalContent.appendChild(modalImage);

const modalDescription = document.createElement('p');
modalContent.appendChild(modalDescription);

const modalLanguages = document.createElement('ul');
modalLanguages.setAttribute('id', 'modalLanguages');
modalLanguages.classList.add('card__tags');
modalContent.appendChild(modalLanguages);

const modalLiveVersionLink = document.createElement('a');
modalLiveVersionLink.setAttribute('target', '_blank');
modalContent.appendChild(modalLiveVersionLink);

modalContainer.appendChild(modalContent);
document.body.appendChild(modalOverlay);
document.body.appendChild(modalContainer);

// Function to show the modal popup with project details
function showPopup(projects) {
  modalTitle.textContent = projects.name;
  modalLanguages.textContent = projects.tagItem;
  modalImage.src = projects.image;

  modalDescription.textContent = projects.description;

  modalLanguages.innerHTML = '';
  projects.languages.forEach((language) => {
    const li = document.createElement('li');
    li.textContent = language;
    modalLanguages.appendChild(li);
  });

  modalLiveVersionLink.href = projects.liveVersionLink;

  modalOverlay.style.display = 'block';
  modalContainer.style.display = 'block';
}

// Function to close the modal popup
function closePopup() {
  modalOverlay.style.display = 'none';
  modalContainer.style.display = 'none';
}

// Add event listener to the close button to hide the modal
closeBtn.addEventListener('click', closePopup);

// Function to create a card element for each project
function createCard(project) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImage = document.createElement('img');
  cardImage.classList.add('card-img');
  cardImage.src = project.image;
  cardImage.alt = project.name;
  card.appendChild(cardImage);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');

  const titleHeading = document.createElement('h3');
  titleHeading.textContent = project.name;
  cardTitle.appendChild(titleHeading);

  const cardTags = document.createElement('ul');
  cardTags.classList.add('card__tags');

  project.tags.forEach((tagName) => {
    const tagItem = document.createElement('li');
    tagItem.classList.add('card__items');
    tagItem.textContent = tagName;
    cardTags.appendChild(tagItem);
  });

  cardTitle.appendChild(cardTags);
  cardInfo.appendChild(cardTitle);

  const cardDescription = document.createElement('div');
  cardDescription.classList.add('card-description');

  const descriptionPara = document.createElement('p');
  descriptionPara.textContent = project.description;
  cardDescription.appendChild(descriptionPara);

  const cardLanguages = document.createElement('ul');
  cardLanguages.classList.add('card__lan');

  project.languages.forEach((language) => {
    const languageItem = document.createElement('li');
    languageItem.classList.add('card__lists');
    languageItem.textContent = language;
    cardLanguages.appendChild(languageItem);
  });

  cardDescription.appendChild(cardLanguages);

  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('card__button');
  seeProjectButton.textContent = 'See Project';
  cardDescription.appendChild(seeProjectButton);

  cardInfo.appendChild(cardDescription);
  card.appendChild(cardInfo);

  return card;
}

// Get the section where the cards will be appended
const worksSection = document.getElementById('works');

// Create cards for each project and append them to the works section
projects.forEach((project) => {
  const card = createCard(project);
  worksSection.appendChild(card);

  // Add event listener to project buttons to show the modal
  const projectButtons = card.querySelectorAll('.card__button');
  projectButtons.forEach((button) => {
    button.addEventListener('click', () => showPopup(project));
  });
});
