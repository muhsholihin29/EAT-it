import restaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
    async render() {
        return `
        <section class="content">
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