'use strict';

(function () {
  const ESC_KEY = `Escape`;
  const ENTER_KEY = `Enter`;

  window.util = {
    isEscEvent(evt, param, action) {
      if ((evt.key === ESC_KEY) && (document.activeElement !== param)) {
        action();
      }
    },
    isEnterEvent(evt, action) {
      if (evt.key === ENTER_KEY) {
        action();
      }
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min), 1) + min;
    },

    getMaxElement(arr) {
      let maxElement = arr[0];

      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }

      return maxElement;
    }
  };
})();
