'use strict';

const FIRST_NAME = [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SECOND_NAME = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COLOR_COAT = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const COLOR_EYES = [`black`, `red`, `blue`, `yellow`, `green`];
const COLOR_FIREBALL = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

let setup = document.querySelector(`.setup`);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

let similarListElement = setup.querySelector(`.setup-similar-list`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min), 1) + min;
}

function nameRandom(arrayFirstName, arraySecondName) {
  return arrayFirstName[getRandomInt(0, arrayFirstName.length - 1)] + ` ` + arraySecondName[getRandomInt(0, arraySecondName.length - 1)];
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

let setupOpen = document.querySelector(`.setup-open`);
let setupClose = setup.querySelector(`.setup-close`);
let setupUserName = setup.querySelector(`.setup-user-name`);

let onPopupEscPress = function (evt) {
  if (evt.key === `Escape` && (document.activeElement !== setupUserName)) {
    evt.preventDefault();
    closePopup();
  }
};

let openPopup = function () {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress, true);
};

let closePopup = function () {
  setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

let setupPlayer = document.querySelector(`.setup-player`);
let setupPlayerCoat = setupPlayer.querySelector(`.wizard-coat`);
let setupPlayerEyes = setupPlayer.querySelector(`.wizard-eyes`);
let setupPlayerFireball = document.querySelector(`.setup-fireball-wrap`);

let setupColor = function (player, colorStyle, arrayColor, input) {
  player.addEventListener(`click`, function () {
    let param = arrayColor[getRandomInt(0, arrayColor.length - 1)];
    player.style[colorStyle] = param;
    input[0].setAttribute(`value`, param);
  });
};

setupColor(setupPlayerCoat, `fill`, COLOR_COAT, document.getElementsByName(`coat-color`));
setupColor(setupPlayerEyes, `fill`, COLOR_EYES, document.getElementsByName(`eyes-color`));
setupColor(setupPlayerFireball, `backgroundColor`, COLOR_FIREBALL, document.getElementsByName(`fireball-color`));
