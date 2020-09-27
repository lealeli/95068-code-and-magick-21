'use strict';

const FIRST_NAME = [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SECOND_NAME = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COLOR_COAT = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const COLOR_EYES = [`black`, `red`, `blue`, `yellow`, `green`];

let setupOpen = document.querySelector(`.setup`);

setupOpen.classList.remove(`hidden`);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);

let similarListElement = setupOpen.querySelector(`.setup-similar-list`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let number = Math.floor(Math.random() * (max - min), 1) + min;
  return number;
}

function nameRandom(arrayFirstName, arraySecondName) {
  let fullName = arrayFirstName[getRandomInt(0, arrayFirstName.length - 1)] + ` ` + arraySecondName[getRandomInt(0, arraySecondName.length - 1)];
  return fullName;
}

function wizardRandom() {
  let wizard = [3];
  for (let i = 0; i < 4; i++) {
    wizard[i] = {
      name: nameRandom(FIRST_NAME, SECOND_NAME),
      coatColor: COLOR_COAT[getRandomInt(0, COLOR_COAT.length - 1)],
      eyesColor: COLOR_EYES[getRandomInt(0, COLOR_EYES.length - 1)]
    };
  }
  return wizard;
}

let wizards = wizardRandom();

function renderWizard(wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
}

let fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

