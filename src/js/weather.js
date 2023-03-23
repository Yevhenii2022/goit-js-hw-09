'use strict';
import weatherCardTemplate from '../templates/weather-card.hbs';

import { fetchWeatherByCityName } from './weather-api';

const weatherFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${date.getHours()}:${date.getMinutes()}`;
};

const handleSearchWeather = event => {
  event.preventDefault();

  const searchQuery = event.target.elements.user_country.value.trim();

  fetchWeatherByCityName(searchQuery).then(data => {
    data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);

    data.main.temp = (data.main.temp - 273.15).toFixed(1);

    data.main.feels_like = (data.main.feels_like - 273.15).toFixed(1);

    data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);

    weatherWrapperEl.innerHTML = weatherCardTemplate(data);
  });
};

weatherFormEl.addEventListener('submit', handleSearchWeather);
