import CONFIG from '../../globals/config';

const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;
const createRestaurantItemTemplate = (restaurant) => /*html*/`

<article class="restaurant-item" onclick="location.href='#/detail/${restaurant.id}'" style="cursor: pointer;">
    <div class="thumbnail">
        <img class="restaurant-item__thumbnail" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL.MEDIUM + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}">
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

const createRestaurantDetailTemplate = (restaurant) => /*html*/`
    <div class="restaurant-content">
        <div class="container">
            <div class="col-image">
                <img src="${CONFIG.BASE_IMAGE_URL.MEDIUM}${restaurant.pictureId}"
                    alt="${restaurant.name}" crossorigin="anonymous"/>
            </div>
            <div class="col-info">
                <h1>${restaurant.name}</h1>
                <div class="categories-info">
                    ${restaurant.categories.map((category) => `        
                        <span>${category.name}</span>
                    `).join('')}
                </div>
                <div class="basic-info">
                    <div class="basic-info-col">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <span>${restaurant.rating}</span>
                    </div>
                    <div class="basic-info-col">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <span>${restaurant.city}</span>
                    </div>
                    <div class="basic-info-col">
                        <span>${restaurant.address}</span>
                    </div>
                </div>
                <div class="description-info">
                    ${restaurant.description}
                </div>
            </div>
            <div class="col-menu-info">
                <div class="col-food">                
                    <h4>Makanan</h4>                
                    ${restaurant.menus.foods.map((food) => `
                        <p>${food.name}</p>
                    `).join('')}
                </div>
                <div class="col-drink">
                <h4>Minuman</h4>                
                    ${restaurant.menus.drinks.map((drink) => `
                        <p>${drink.name}</p>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>
    <div class="restaurant-review">
        <div class="container">
        <div class="main-header">
                  <div class="main-title">
                      <h1>Review</h1>
                  </div>
              </div>
        ${restaurant.customerReviews.map((review) => `        
            <div class="main-item">
                <h4>${review.name}</h4>
                <p class="note">${review.review}</p>
                <p class="date">${review.date}</p>
            </div>
            `).join('')}
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate
};