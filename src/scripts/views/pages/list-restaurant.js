import restaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
    async render() {
        return `
        <div class="hero">
        <div class="hero__inner">
            <h1 class="hero__title">A Myriad of Delectable Tastes</h1>
            <p class="hero__tagline">With several international chefs on board, EatIt is home to a rich variety of tantalising global cuisines.</p>
        </div>
    </div>
        <section class="container">
            <div class="latest">
                <h2 class="explore__label">Explore Restaurant</h2>
                <div class="restaurants" id="restaurants">

                </div>
            </div>
        </section>
      `;
    },

    async afterRender() {
        const restaurants = await restaurantSource.listRestaurant();
        const restaurantContainer = document.getElementById("restaurants");
        restaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default ListRestaurant;