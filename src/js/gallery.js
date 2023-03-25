'use strict';
// https://unsplash.com/

import { UnsplashAPI } from './unsplash-api';

import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');

const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashAPI = new UnsplashAPI();

const handleSearchPhotos = event => {
  event.preventDefault();

  const searchQuery = event.target.elements['user-search-query'].value.trim();

  unsplashAPI.query = searchQuery;

  unsplashAPI
    .fetchPhotos()
    .then(data => {
      if (!data.results.length) {
        throw new Error();
      }

      galleryListEl.innerHTML = createGalleryCards(data.results);

      if (data.total_pages === unsplashAPI.page) {
        return;
      }

      loadMoreBtnEl.classList.remove('is-hidden');
    })
    .catch(() => {
      loadMoreBtnEl.classList.add('is-hidden');
      galleryListEl.textContent = 'Images not found';
    });
};

const handleLoadMoreBtnClick = () => {
  unsplashAPI.page += 1;

  unsplashAPI.fetchPhotos().then(data => {
    if (unsplashAPI.page === data.total_pages) {
      loadMoreBtnEl.classList.add('is-hidden');
    }

    galleryListEl.insertAdjacentHTML(
      'beforeend',
      createGalleryCards(data.results)
    );
  });
};

searchFormEl.addEventListener('submit', handleSearchPhotos);

loadMoreBtnEl.addEventListener('click', handleLoadMoreBtnClick);
