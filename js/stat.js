'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const TEXT_WIDTH = 40;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
const BAR_GAP = 50;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.fillStyle = `#000`;

  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, 130, 30);
  ctx.fillText(`Список результатов:`, 130, 50);

  let maxTime = getMaxElement(times);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let number = Math.floor(Math.random() * (max - min), 1) + min;
    return number;
  }

  for (let i = 0; i < names.length; i++) {

    let saturationBar = getRandomInt(0, 100);

    ctx.fillText(
        names[i],
        CLOUD_X + BAR_GAP + (BAR_GAP + TEXT_WIDTH) * i,
        CLOUD_Y + CLOUD_HEIGHT - GAP * 2
    );

    if (names[i] === `Вы`) {
      ctx.fillStyle = `red`;
    } else {
      ctx.fillStyle = `hsl(240,` + saturationBar + `%, 50%)`;
    }

    ctx.fillRect(
        CLOUD_X + GAP + TEXT_WIDTH + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_Y + CLOUD_HEIGHT - GAP * 3,
        BAR_WIDTH,
        -(BAR_HEIGHT * times[i]) / maxTime
    );

    ctx.fillStyle = `black`;

    ctx.fillText(
        Math.floor(times[i]),
        CLOUD_X + BAR_GAP + (BAR_GAP + TEXT_WIDTH) * i,
        CLOUD_Y + CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - GAP * 6
    );
  }
};
