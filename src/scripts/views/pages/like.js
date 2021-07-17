import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();

const Like = {
    async render() {
        return view.getTemplate();
    },

    async afterRender() {
        new FavoriteRestaurantShowPresenter({
            view,
            favoriteRestaurants: FavoriteRestaurantIdb,
        });
        new FavoriteRestaurantSearchPresenter({
            view,
            favoriteRestaurants: FavoriteRestaurantIdb,
        });
    },
};

export default Like;
