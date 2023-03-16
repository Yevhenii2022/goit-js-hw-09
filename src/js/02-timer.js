import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/material_green.css';
import Notiflix from 'notiflix';

const inputEl = document.getElementById('datetime-picker');
const btnStartEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let currentTime = new Date().getTime();

let selectedTime = 0;

btnStartEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTime = selectedDates[0].getTime();
    chooseDate();
  },
};

flatpickr(inputEl, options);

function chooseDate() {
  if (selectedTime <= currentTime) {
    Notiflix.Notify.failure('Please choose a date in the future');
  } else {
    btnStartEl.disabled = false;
    Notiflix.Notify.success(
      'The correct date has been entered. Press "start" to start the countdown'
    );
  }
}

btnStartEl.addEventListener('click', handleBtnStartElClick);

function handleBtnStartElClick() {
  const timer = setInterval(() => {
    inputEl.disabled = true;
    btnStartEl.disabled = true;

    let timeDifference = convertMs(selectedTime - Date.now());

    if (timeDifference.seconds < 0) {
      clearInterval(timer);
      Notiflix.Report.success('time is up', 'HAPPY NEW YEAR', 'WOW');
      inputEl.disabled = false;
    } else {
      renderTimer(timeDifference);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function renderTimer({ days, hours, minutes, seconds }) {
  daysEl.textContent = addLeadingZero(`${days}`);
  hoursEl.textContent = addLeadingZero(`${hours}`);
  minutesEl.textContent = addLeadingZero(`${minutes}`);
  secondsEl.textContent = addLeadingZero(`${seconds}`);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
