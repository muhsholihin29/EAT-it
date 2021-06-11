import Detail from '../views/pages/detail';
import ListRestaurant from '../views/pages/list-restaurant';

const routes = {
    '/': ListRestaurant, // default page
    '/list-restaurant': ListRestaurant,
    '/detail/:id': Detail,
};

export default routes;