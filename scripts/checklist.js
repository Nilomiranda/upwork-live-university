// selecting DOM elements
const checklistButton = document.querySelector('.checklist-options .gold-button');
const checklistContainer = document.querySelector('.checklist-wrapper');

// TODO: ADD ANIMATION FOR TRANSITION
checklistButton.addEventListener('click', () => {
  checklistContainer.classList.toggle('inactive');
  checklistContainer.classList.toggle('active');
})
