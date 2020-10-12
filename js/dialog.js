'use strict';

(function () {
  let setup = document.querySelector(`.setup`);
  let setupOpen = document.querySelector(`.setup-open`);
  let setupClose = setup.querySelector(`.setup-close`);
  let setupUserName = setup.querySelector(`.setup-user-name`);

  let onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, setupUserName, closePopup);
  };

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener(`click`, function () {
    closePopup();
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  let openPopup = function () {
    setup.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onPopupEscPress);
  };

  let closePopup = function () {
    setup.classList.add(`hidden`);
    document.removeEventListener(`keydown`, onPopupEscPress);
  };
})();
