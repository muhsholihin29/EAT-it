import CONFIG from '../../globals/config';

const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;
const createRestaurantItemTemplate = (restaurant) => `
<h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${restaurant.tagline}</p>
    <h4>Release Date</h4>
    <p>${restaurant.release_date}</p>
    <h4>Duration</h4>
    <p>${restaurant.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${restaurant.vote_average}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.overview}</p>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<article class="restaurant-item">
    <div class="thumbnail">
        <img class="restaurant-item__thumbnail" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}">
        <div class="thumbnail_inner">
            <p>${restaurant.city}</p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <p class="restaurant-rating">✩ ${restaurant.rating}</p>
        <h3 class="restaurant-item__title"><a href="#">${restaurant.name}</a></h3>
        <p class="restaurant-item__description" maxLength="5">${truncate(restaurant.description, 240, '...')}</p>
    </div>
</article>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate
};