import { getRandomHexColor } from './helpers/random-color';

const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');

let intervalId = null;

stopBtnEl.disabled = true;

startBtnEl.addEventListener('click', handleStartBtnElClick);
stopBtnEl.addEventListener('click', handleStopBtnElClick);

function handleStartBtnElClick() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
}

function handleStopBtnElClick() {
  clearInterval(intervalId);
  document.body.style.backgroundColor = '#ffffff';
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
}
