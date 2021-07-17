Feature('Liking Restaurant');
const assert = require('assert');

Before(({ I }) => {
    I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#query');
    I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');
    
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');
 
  I.amOnPage('/');
  
  I.seeElement('.restaurant__title a');
  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
 
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});